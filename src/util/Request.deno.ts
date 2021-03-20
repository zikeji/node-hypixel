import { GenericHTTPError } from "../errors/GenericHTTPError.ts";
import { InvalidKeyError } from "../errors/InvalidKeyError.ts";
import { RateLimitError } from "../errors/RateLimitError.ts";
import type { DefaultMeta, RequestOptions } from "../Client.ts";
import { Components } from "../types/api.ts";

/** @internal */
const CACHE_CONTROL_REGEX = /s-maxage=(\d+)/;

/** @internal */
export async function request<
  T extends Components.Schemas.ApiSuccess & {
    cause?: string;
  } & { cloudflareCache?: DefaultMeta["cloudflareCache"] }
>(options: RequestOptions): Promise<T> {
  const response = await fetch(options.url, {
    method: "GET",
    headers: {
      "User-Agent": options.userAgent,
      Accept: "application/json",
    },
  });

  if (!options.noRateLimit) {
    const headers: Record<string, string> = {};
    for (const header of response.headers.entries()) {
      headers[header[0]] = header[1];
    }
    options.getRateLimitHeaders(headers);
  }

  const responseBody = await response.text();

  let responseObject: T | undefined;
  try {
    responseObject = JSON.parse(responseBody);
  } catch (_) {
    // noop
  }

  if (response.status !== 200) {
    switch (response.status) {
      case 429:
        throw new RateLimitError(`Hit key throttle.`);
      case 403:
        throw new InvalidKeyError("Invalid API Key");
      default:
        if (typeof response.status === "number" && responseObject?.cause) {
          throw new GenericHTTPError(response.status, responseObject.cause);
        }
        throw new Error(
          `${response.status} ${response.statusText}. Response: ${responseBody}`
        );
    }
  }

  if (typeof responseObject === "undefined") {
    throw new Error(
      `Invalid JSON response received. Response: ${responseBody}`
    );
  }

  if (
    response.headers.get("cf-cache-status") !== null &&
    response.headers.get("age") !== null &&
    response.headers.get("cache-control") !== null
  ) {
    const age = parseInt(response.headers.get("age") as string, 10);
    const maxAge = CACHE_CONTROL_REGEX.exec(
      response.headers.get("cache-control") as string
    );
    responseObject.cloudflareCache = {
      status: response.headers.get("cf-cache-status") as never,
      ...(typeof age === "number" && !Number.isNaN(age) && { age }),
      ...(response.headers.get("cf-cache-status") === "HIT" &&
        (typeof age !== "number" || Number.isNaN(age)) && { age: 0 }),
      ...(maxAge &&
        typeof maxAge === "object" &&
        maxAge.length === 2 &&
        parseInt(maxAge[1], 10) > 0 && {
          maxAge: parseInt(maxAge[1], 10),
        }),
    };
  }

  return responseObject;
}
