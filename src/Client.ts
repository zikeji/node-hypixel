import { EventEmitter } from "events";
import { IncomingHttpHeaders } from "http";
import { Agent, request, RequestOptions } from "https";
import { URL } from "url";
import { GenericHTTPError } from "./errors/GenericHTTPError";
import { InvalidKeyError } from "./errors/InvalidKeyError";
import { RateLimitError } from "./errors/RateLimitError";
import { FindGuild } from "./methods/findGuild";
import { Friends } from "./methods/friends";
import { Guild } from "./methods/guild";
import { RecentGames } from "./methods/recentGames";
import { Resources } from "./methods/resources";
import { SkyBlock } from "./methods/skyblock";
import { Status } from "./methods/status";
import type { Components, Paths } from "./types/api";
import { Queue } from "./util/Queue";
import { getResultObject, ResultObject } from "./util/ResultObject";

/** @internal */
export interface ActionableCall<T extends Components.Schemas.ApiSuccess> {
  execute: () => Promise<T>;
  retries: number;
}

/** @hidden */
export interface RateLimitData {
  remaining: number;
  reset: number;
  limit: number;
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
  protected rateLimit: RateLimitData = {
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
      throw new InvalidKeyError("Invalid API key");
    }
    this.apiKey = key;
    this.retries = options?.retries ?? 3;
    this.timeout = options?.timeout ?? 10000;
    this.userAgent = options?.userAgent ?? "@zikeji/hypixel";
    this.agent = options?.agent;
  }

  /**
   * Returns list of boosters.
   * @example
   * ```typescript
   * const boosters = await client.boosters();
   * console.log(boosters);
   * ```
   */
  async boosters(): Promise<
    ResultObject<Paths.Boosters.Get.Responses.$200, "success">
  > {
    return getResultObject(
      await this.call<Paths.Boosters.Get.Responses.$200>("boosters"),
      "success"
    ) as never;
  }

  /**
   * Returns the id of the requested guild if found.
   * @example
   * ```typescript
   * const { guild } = await client.findGuild.byUuid("20934ef9488c465180a78f861586b4cf");
   * console.log(guild);
   * // 553490650cf26f12ae5bac8f
   * ```
   */
  public findGuild: FindGuild = new FindGuild(this);

  /**
   * Returns friendships for given player.
   * @example
   * ```typescript
   * const friends = await client.friends.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(friends);
   * ```
   */
  public friends: Friends = new Friends(this);

  /**
   * Returns the current player count along with the player count of each public game + mode on the server.
   * @example
   * ```typescript
   * const response = await client.gameCounts();
   * console.log(response);
   * ```
   */
  async gameCounts(): Promise<
    ResultObject<Paths.GameCounts.Get.Responses.$200, "success">
  > {
    return getResultObject(
      await this.call<Paths.GameCounts.Get.Responses.$200>("gameCounts"),
      "success"
    ) as never;
  }

  /**
   * Returns the guild by the requested ID if found.
   * @example
   * ```typescript
   * const guild = await client.guild.id("553490650cf26f12ae5bac8f");
   * ```
   */
  public guild: Guild = new Guild(this);

  /**
   * Returns information regarding given key.
   * @example
   * ```typescript
   * const key = await client.key();
   * console.log(key);
   * ```
   */
  async key(): Promise<ResultObject<Paths.Key.Get.Responses.$200, "record">> {
    return getResultObject(
      await this.call<Paths.Key.Get.Responses.$200>("key"),
      "record"
    ) as never;
  }

  /**
   * Returns a list of the official leaderboards and their current standings for games on the network.
   * @example
   * ```typescript
   * const leaderboards = await client.leaderboards();
   * console.log(leaderboards);
   * ```
   */
  async leaderboards(): Promise<
    ResultObject<Paths.Leaderboards.Get.Responses.$200, "leaderboards">
  > {
    return getResultObject(
      await this.call<Paths.Leaderboards.Get.Responses.$200>("leaderboards"),
      "leaderboards"
    ) as never;
  }

  // async leaderboards(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.call<Components.Schemas.ApiSuccess>("leaderboards"),
  //     "success"
  //   );
  // }

  // async player(uuid: string): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.call<Components.Schemas.ApiSuccess>("player", { uuid }),
  //     "success"
  //   );
  // }

  /**
   * Returns current player count.
   * @example
   * ```typescript
   * const response = await client.playerCounts();
   * console.log(response);
   * ```
   */
  async playerCount(): Promise<
    ResultObject<Paths.PlayerCount.Get.Responses.$200, "success">
  > {
    return getResultObject(
      await this.call<Paths.PlayerCount.Get.Responses.$200>("playerCount"),
      "success"
    ) as never;
  }

  /**
   * Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
   * @example
   * ```typescript
   * const response = await client.recentGames.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   */
  public recentGames: RecentGames = new RecentGames(this);

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
   * //   watchdog_lastMinute: 1,
   * //   staff_rollingDaily: 3014,
   * //   watchdog_total: 5589923,
   * //   watchdog_rollingDaily: 4662,
   * //   staff_total: 1874174
   * // }
   * ```
   */
  async watchdogstats(): Promise<
    ResultObject<Paths.Watchdogstats.Get.Responses.$200, "success">
  > {
    return getResultObject(
      await this.call<Paths.Watchdogstats.Get.Responses.$200>("watchdogstats"),
      "success"
    ) as never;
  }

  /**
   * The raw query method used by this library. You may use this if you need to use an undocumented method with this library.
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
      /* istanbul ignore else */
      if (
        error instanceof InvalidKeyError ||
        error instanceof GenericHTTPError ||
        /* istanbul ignore next */ call.retries === this.retries
      ) {
        throw error;
      }
      /* istanbul ignore next */
      call.retries += 1;
      /* istanbul ignore next */
      return this.executeActionableCall<T>(call);
    } finally {
      this.queue.free();
    }
    if (typeof response === "object") {
      Object.defineProperty(response, "ratelimit", {
        enumerable: false,
        value: JSON.parse(JSON.stringify(this.rateLimit)),
      });
    }
    return response;
  }

  /** @internal */
  private createActionableCall<T extends Components.Schemas.ApiSuccess>(
    path: string,
    /* istanbul ignore next */
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
  >(
    path: string,
    /* istanbul ignore next */ parameters: Parameters = {}
  ): Promise<T> {
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

          return resolve(responseObject);
        });
      });

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
