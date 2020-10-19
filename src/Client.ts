import { EventEmitter } from "events";
import { IncomingHttpHeaders } from "http";
import { Agent, request, RequestOptions } from "https";
import { URL } from "url";
import { InvalidKeyError } from "./errors/InvalidKeyError";
import { RateLimitError } from "./errors/RateLimitError";
import { FindGuild } from "./methods/findGuild";
import { Guild } from "./methods/guild";
import { Resources } from "./methods/resources";
import { SkyBlock } from "./methods/skyblock";
import { Status } from "./methods/status";
import type { Components, Paths } from "./types/api";
import { Queue } from "./util/Queue";
import { returnResponseObject } from "./util/ReturnResponseObject";

/** @internal */
export interface ActionableCall<T extends Components.Schemas.ApiSuccess> {
  execute: () => Promise<T>;
  retries: number;
}

/** @hidden */
interface Parameters {
  [parameter: string]: string;
}

interface ClientOptions {
  /**
   * Amount of times to retry a failed request.
   * @default 3
   */
  retries?: number;
  /**
   * The time, in milliseconds, you want to wait before giving up on the method call.
   * @default 10000
   */
  timeout?: number;
  /**
   * User agent the client uses when making calls to Hypixel's API
   * @default @zikeji/hypixel
   */
  userAgent?: string;
  /**
   * Custom [HTTPS agent](https://nodejs.org/api/https.html#https_class_https_agent) if desired.
   */
  agent?: Agent;
}

export declare interface Client {
  /**
   * Listen to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.
   * @category Events
   */
  on(event: "limited", listener: (limit: number, reset: Date) => void): this;

  /**
   * Listen to the "reset" event which emits when the API rate limit resets.
   * @category Events
   */
  on(event: "reset", listener: () => void): this;

  /**
   * Listen once to the "limited" event which emits when the client starts limiting your calls due to hitting the rate limit.
   * @category Events
   */
  once(event: "limited", listener: (limit: number, reset: Date) => void): this;

  /**
   * Listen once to the "reset" event which emits when the API rate limit resets.
   * @category Events
   */
  once(event: "reset", listener: () => void): this;

  /**
   * Remove your function listening to the "limited" event.
   * @category Events
   */
  off(event: "limited", listener: () => void): this;

  /**
   * Remove your function listening to the "reset" event.
   * @category Events
   */
  off(event: "reset", listener: () => void): this;
}

/**
 * @noInheritDoc
 */
export class Client extends EventEmitter {
  /** @internal */
  private static readonly endpoint = new URL(`https://api.hypixel.net`);
  /** @internal */
  private readonly queue = new Queue();
  /** @internal */
  private readonly apiKey: string;
  /** @internal */
  private readonly retries: number;
  /** @internal */
  private readonly timeout: number;
  /** @internal */
  private readonly userAgent: string;
  /** @internal */
  private readonly agent?: Agent;

  /** @internal */
  protected rateLimit = {
    remaining: -1,
    reset: -1,
    limit: -1,
  };

  /**
   * Create a new instance of the API client.
   * @param key Your Hypixel API key.
   * @param options Any options and customizations being applied.
   */
  public constructor(key: string, options?: ClientOptions) {
    super();
    if (!key || typeof key !== "string") {
      throw new Error("Invalid API key");
    }
    this.apiKey = key;
    this.retries = options?.retries ?? 3;
    this.timeout = options?.timeout ?? 10000;
    this.userAgent = options?.userAgent ?? "@zikeji/hypixel";
    this.agent = options?.agent;
  }

  async boosters(): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("boosters"),
      "success"
    );
  }

  public findGuild: FindGuild = new FindGuild(this);

  async friends(uuid: string): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("friends", { uuid }),
      "success"
    );
  }

  async gameCounts(): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("gameCounts"),
      "success"
    );
  }

  public guild: Guild = new Guild(this);

  async key(): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("key"),
      "success"
    );
  }

  async leaderboards(): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("leaderboards"),
      "success"
    );
  }

  async player(uuid: string): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("player", { uuid }),
      "success"
    );
  }

  async playerCount(): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("playerCount"),
      "success"
    );
  }

  async recentGames(uuid: string): Promise<boolean> {
    return returnResponseObject(
      await this.call<Components.Schemas.ApiSuccess>("recentGames", { uuid }),
      "success"
    );
  }

  public resources: Resources = new Resources(this);

  public skyblock: SkyBlock = new SkyBlock(this);

  /**
   * Returns online status information for given player, including game, mode and map when available.
   * @example
   * ```typescript
   * const response = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   */
  public status: Status = new Status(this);

  /**
   * Returns some statistics about Watchdog & bans.
   * @example
   * ```typescript
   * const response = await client.watchdogstats();
   * console.log(response);
   * // {
   * //   success: true,
   * //   watchdog_lastMinute: 1,
   * //   staff_rollingDaily: 3014,
   * //   watchdog_total: 5589923,
   * //   watchdog_rollingDaily: 4662,
   * //   staff_total: 1874174
   * // }
   * ```
   */
  watchdogstats(): Promise<Paths.Watchdogstats.Get.Responses.$200> {
    return this.call<Paths.Watchdogstats.Get.Responses.$200>("watchdogstats");
  }

  /**
   * The raw query method used by this library. You may use this if you need to use a non-SkyBlock method with this library.
   *
   * @category Custom
   * @param path The path on the method you want to query.
   * @param parameters Any search parameters you want to use.
   * @typeParam T As all of Hypixel's API methods return a basic `{ success: boolean; cause?: string; }`, this type parameter (if using Typescript) extends an interface including those.
   * @example
   * Getting the ID of a guild using the [findGuild](https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/methods/findGuild.md) method.
   * ```javascript
   * const response = await client.call("findGuild", { byName: "Mini Squid" });
   * console.log(response);
   * // { success: true, guild: '553490650cf26f12ae5bac8f' }
   * ```
   */
  public call<T extends Components.Schemas.ApiSuccess>(
    path: string,
    parameters: Parameters = {}
  ): Promise<T> {
    return this.executeActionableCall(
      this.createActionableCall(path, parameters)
    );
  }

  /** @internal */
  private async executeActionableCall<T extends Components.Schemas.ApiSuccess>(
    call: ActionableCall<T>
  ): Promise<T> {
    await this.queue.wait();
    if (this.rateLimit.remaining === 0) {
      const timeout = this.rateLimit.reset * 1000;
      this.emit(
        "limited",
        this.rateLimit.limit,
        new Date(Date.now() + this.rateLimit.reset)
      );
      await new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });
      this.emit("reset");
    }
    let response: T;
    try {
      response = await call.execute();
    } catch (error) {
      if (error instanceof InvalidKeyError || call.retries === this.retries) {
        throw error;
      }
      call.retries += 1;
      return this.executeActionableCall<T>(call);
    } finally {
      this.queue.free();
    }
    return response;
  }

  /** @internal */
  private createActionableCall<T extends Components.Schemas.ApiSuccess>(
    path: string,
    parameters: Parameters = {}
  ): ActionableCall<T> {
    return {
      execute: this.callMethod.bind(this, path, parameters),
      retries: 0,
    } as ActionableCall<T>;
  }

  /** @internal */
  private callMethod<
    T extends Components.Schemas.ApiSuccess & { cause?: string }
  >(path: string, parameters: Parameters = {}): Promise<T> {
    const url = new URL(path, Client.endpoint);
    Object.keys(parameters).forEach((param) => {
      url.searchParams.set(param, parameters[param]);
    });

    // No API key needed on resources.
    if (!path.startsWith("resources")) {
      url.searchParams.set("key", this.apiKey);
    }

    const options: RequestOptions = {
      method: "GET",
      timeout: this.timeout,
      headers: {
        "User-Agent": this.userAgent,
        Accept: "application/json",
      },
    };

    if (this.agent) {
      options.agent = this.agent;
    }

    return new Promise((resolve, reject) => {
      const clientRequest = request(url, options, (incomingMessage) => {
        let responseBody = "";

        incomingMessage.on("data", (chunk) => {
          responseBody += chunk;
        });

        incomingMessage.on("end", () => {
          this.getRateLimitHeaders(incomingMessage.headers);

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
            if (incomingMessage.statusCode === 429) {
              return reject(new RateLimitError(`Hit key throttle.`));
            }

            if (
              typeof responseObject === "object" &&
              responseObject.cause === "Invalid API key"
            ) {
              throw new InvalidKeyError("Invalid API Key");
            }

            return reject(
              new Error(
                `${incomingMessage.statusCode} ${incomingMessage.statusMessage}. Response: ${responseBody}`
              )
            );
          }

          if (typeof responseObject === "undefined") {
            return reject(
              new Error(
                `Invalid JSON response received. Response: ${responseBody}`
              )
            );
          }

          return resolve(responseObject);
        });
      });

      let abortError: Error;
      clientRequest.once("abort", () => {
        abortError = abortError ?? new Error("Client aborted this request.");
        reject(abortError);
      });

      clientRequest.once("error", (error) => {
        abortError = error;
        clientRequest.abort();
      });

      clientRequest.setTimeout(this.timeout, () => {
        abortError = new Error("Hit configured timeout.");
        clientRequest.abort();
      });

      clientRequest.end();
    });
  }

  /** @internal */
  private getRateLimitHeaders(headers: IncomingHttpHeaders): void {
    Object.keys(this.rateLimit).forEach((key) => {
      const headerKey = `ratelimit-${key}`;
      if (headerKey in headers) {
        this.rateLimit[key as keyof Client["rateLimit"]] = parseInt(
          headers[headerKey] as string,
          10
        );
      }
    });
  }
}

export default Client;
