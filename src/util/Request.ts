import { request as httpsRequest } from "https";
import { GenericHTTPError } from "../errors/GenericHTTPError";
import { InvalidKeyError } from "../errors/InvalidKeyError";
import { RateLimitError } from "../errors/RateLimitError";
import type { DefaultMeta, RequestOptions } from "../Client";
import { Components } from "../types/api";

/** @internal */
const CACHE_CONTROL_REGEX = /s-maxage=(\d+)/;

/** @internal */
export function request<
  T extends Components.Schemas.ApiSuccess & {
    cause?: string;
  } & { cloudflareCache?: DefaultMeta["cloudflareCache"] }
>(options: RequestOptions): Promise<T> {
  return new Promise((resolve, reject) => {
    const clientRequest = httpsRequest(
      options.url,
      {
        method: "GET",
        timeout: options.timeout,
        headers: {
          "User-Agent": options.userAgent,
          Accept: "application/json",
        },
      },
      (incomingMessage) => {
        let responseBody = "";

        incomingMessage.on("data", (chunk) => {
          responseBody += chunk;
        });

        incomingMessage.on("end", () => {
          if (!options.noRateLimit) {
            options.getRateLimitHeaders(
              incomingMessage.headers as Record<string, string>
            );
          }

          /* istanbul ignore next */
          if (
            typeof responseBody !== "string" ||
            responseBody.trim().length === 0
          ) {
            return reject(new Error(`No response body received.`));
          }

          let responseObject: T | undefined;
          try {
            responseObject = JSON.parse(responseBody);
          } catch (_) {
            // noop
          }

          if (incomingMessage.statusCode !== 200) {
            /* istanbul ignore next */
            if (incomingMessage.statusCode === 429) {
              return reject(new RateLimitError(`Hit key throttle.`));
            }

            if (incomingMessage.statusCode === 403) {
              return reject(new InvalidKeyError("Invalid API Key"));
            }

            /* istanbul ignore else */
            if (
              /* istanbul ignore next */ responseObject?.cause &&
              typeof incomingMessage.statusCode === "number"
            ) {
              return reject(
                new GenericHTTPError(
                  incomingMessage.statusCode,
                  responseObject.cause
                )
              );
            }

            /**
             * Generic catch all that probably should never be caught.
             */
            /* istanbul ignore next */
            return reject(
              new Error(
                `${incomingMessage.statusCode} ${incomingMessage.statusMessage}. Response: ${responseBody}`
              )
            );
          }

          /* istanbul ignore if */
          if (typeof responseObject === "undefined") {
            return reject(
              new Error(
                `Invalid JSON response received. Response: ${responseBody}`
              )
            );
          }

          /* istanbul ignore else */
          if (incomingMessage.headers["cf-cache-status"]) {
            const age = parseInt(incomingMessage.headers.age as string, 10);
            const maxAge = CACHE_CONTROL_REGEX.exec(
              incomingMessage.headers["cache-control"] as string
            );
            responseObject.cloudflareCache = {
              status: incomingMessage.headers["cf-cache-status"] as never,
              ...(typeof age === "number" && !Number.isNaN(age) && { age }),
              ...(incomingMessage.headers["cf-cache-status"] === "HIT" &&
                (typeof age !== "number" ||
                  Number.isNaN(age)) && /* istanbul ignore next */ { age: 0 }),
              ...(maxAge &&
                typeof maxAge === "object" &&
                maxAge.length === 2 &&
                parseInt(maxAge[1], 10) > 0 && {
                  maxAge: parseInt(maxAge[1], 10),
                }),
            };
          }

          return resolve(responseObject);
        });
      }
    );

    let abortError: Error;
    /* istanbul ignore next */
    clientRequest.once("abort", () => {
      abortError = abortError ?? new Error("Client aborted this request.");
      reject(abortError);
    });

    /* istanbul ignore next */
    clientRequest.once("error", (error) => {
      abortError = error;
      clientRequest.abort();
    });

    clientRequest.setTimeout(options.timeout, () => {
      abortError = new Error("Hit configured timeout.");
      clientRequest.abort();
    });

    clientRequest.end();
  });
}
