import { EventEmitter } from "events";
import { URL } from "url";
import { GenericHTTPError } from "./errors/GenericHTTPError";
import { InvalidKeyError } from "./errors/InvalidKeyError";
import { FindGuild } from "./methods/findGuild";
import { Friends } from "./methods/friends";
import { Guild } from "./methods/guild";
import { Player } from "./methods/player";
import { RecentGames } from "./methods/recentGames";
import { Resources } from "./methods/resources";
import { SkyBlock } from "./methods/skyblock";
import { Status } from "./methods/status";
import type { Components, Paths } from "./types/api";
import { Queue } from "./util/Queue";
import { request } from "./util/Request";
import { getResultObject, ResultObject } from "./util/ResultObject";

/** @internal */
export interface ActionableCall<T extends Components.Schemas.ApiSuccess> {
  execute: () => Promise<T>;
  retries: number;
  noRateLimit: boolean;
  includeApiKey: boolean;
}

/** @hidden */
export interface RateLimitData {
  /**
   * Remaining API calls until the limit resets.
   */
  remaining: number;
  /**
   * Time, in seconds, until remaining resets to limit.
   */
  reset: number;
  /**
   * How many requests per minute your API key can make.
   */
  limit: number;
}

/**
 * Possible meta options returned on the meta variable.
 */
export interface DefaultMeta {
  /**
   * If this request required an API key it returned rate limit information in the headers, which is included here.
   */
  ratelimit?: RateLimitData;
  /**
   * If you included a cache get/set method in the options, this value will be set to true if that cache was hit.
   */
  cached?: boolean;
  /**
   * Data from CloudFlare's headers in regards to caching - particularly relevant for resources endpoints.
   */
  cloudflareCache?: {
    /**
     * Cloudflare cache status.
     */
    status: "HIT" | "MISS" | "BYPASS" | "EXPIRED" | "DYNAMIC";
    /**
     * Cloudflare cache age.
     */
    age?: number;
    /**
     * Cloudflare max cache age.
     */
    maxAge?: number;
  };
}

/** @hidden */
export interface RequestOptions {
  url: string;
  timeout: number;
  userAgent: string;
  noRateLimit: boolean;
  getRateLimitHeaders: Client["getRateLimitHeaders"];
}

/** @hidden */
export interface Parameters {
  [parameter: string]: string;
}

/**
 * If you want built in caching, implementing these methods (or utilitizing an library that includes these methods) is a must. Refer to the [cache](https://node-hypixel.zikeji.com/guide/cache) guide.
 */
export interface BasicCache {
  get<T extends Components.Schemas.ApiSuccess>(
    key: string
  ): Promise<(T & DefaultMeta) | undefined>;
  set<T extends Components.Schemas.ApiSuccess>(
    key: string,
    value: T & DefaultMeta
  ): Promise<void>;
}

export interface ClientOptions {
  /**
   * Amount of times to retry a failed request.
   * @default 3
   */
  retries?: number;
  /**
   * The time, in milliseconds, you want to wait before giving up on the method call.
   *
   * **NOTE:** This option is ignored when being [used in Deno](https://github.com/denoland/deno/issues/7019).
   * @default 10000
   */
  timeout?: number;
  /**
   * User agent the client uses when making calls to Hypixel's API
   * @default @zikeji/hypixel
   */
  userAgent?: string;
  /**
   * Functions you want to use for caching results. Optional.
   */
  cache?: BasicCache;
}

interface ClientEvents {
  limited: (limit: number, reset: Date) => void;
  reset: () => void;
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

export class Client {
  /** @internal */
  private static readonly endpoint = new URL(`https://api.hypixel.net`);
  /** @internal */
  private readonly emitter = new EventEmitter();
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
  private readonly cache?: ClientOptions["cache"];

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
    if (!key || typeof key !== "string") {
      throw new InvalidKeyError("Invalid API key");
    }
    this.apiKey = key;
    this.retries = options?.retries ?? 3;
    this.timeout = options?.timeout ?? 10000;
    this.userAgent = options?.userAgent ?? "@zikeji/hypixel";
    this.cache = options?.cache;
  }

  public on<E extends keyof ClientEvents>(
    event: E,
    listener: ClientEvents[E]
  ): this {
    this.emitter.on(event, listener);
    return this;
  }

  public once<E extends keyof ClientEvents>(
    event: E,
    listener: ClientEvents[E]
  ): this {
    this.emitter.once(event, listener);
    return this;
  }

  public off<E extends keyof ClientEvents>(
    event: E,
    listener: ClientEvents[E]
  ): this {
    this.emitter.off(event, listener);
    return this;
  }

  /**
   * Returns list of boosters.
   * @example
   * ```typescript
   * const boosters = await client.boosters();
   * console.log(boosters);
   * ```
   * @category API
   */
  public async boosters(): Promise<
    ResultObject<Paths.Boosters.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.call<Paths.Boosters.Get.Responses.$200>("boosters"),
      ["success"]
    );
  }

  /**
   * Returns the id of the requested guild if found.
   * @example
   * ```typescript
   * const { guild } = await client.findGuild.byUuid("20934ef9488c465180a78f861586b4cf");
   * console.log(guild);
   * // 553490650cf26f12ae5bac8f
   * ```
   * @category API
   */
  public findGuild: FindGuild = new FindGuild(this);

  /**
   * Returns friendships for given player.
   * @example
   * ```typescript
   * const friends = await client.friends.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(friends);
   * ```
   * @category API
   */
  public friends: Friends = new Friends(this);

  /**
   * Returns the current player count along with the player count of each public game + mode on the server.
   * @example
   * ```typescript
   * const response = await client.gameCounts();
   * console.log(response);
   * ```
   * @category API
   */
  public async gameCounts(): Promise<
    ResultObject<Paths.GameCounts.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.call<Paths.GameCounts.Get.Responses.$200>("gameCounts"),
      ["success"]
    );
  }

  /**
   * Returns the guild by the requested ID if found.
   * @example
   * ```typescript
   * const guild = await client.guild.id("553490650cf26f12ae5bac8f");
   * ```
   * @category API
   */
  public guild: Guild = new Guild(this);

  /**
   * Returns information regarding given key.
   * @example
   * ```typescript
   * const key = await client.key();
   * console.log(key);
   * ```
   * @category API
   */
  public async key(): Promise<
    ResultObject<Paths.Key.Get.Responses.$200, ["record"]>
  > {
    return getResultObject(
      await this.call<Paths.Key.Get.Responses.$200>("key"),
      ["record"]
    );
  }

  /**
   * Returns a list of the official leaderboards and their current standings for games on the network.
   * @example
   * ```typescript
   * const leaderboards = await client.leaderboards();
   * console.log(leaderboards);
   * ```
   * @category API
   */
  public async leaderboards(): Promise<
    ResultObject<Paths.Leaderboards.Get.Responses.$200, ["leaderboards"]>
  > {
    return getResultObject(
      await this.call<Paths.Leaderboards.Get.Responses.$200>("leaderboards"),
      ["leaderboards"]
    );
  }

  /**
   * Returns a player's data, such as game stats.
   * @example
   * ```typescript
   * const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(player);
   * ```
   * @category API
   */
  public player: Player = new Player(this);

  /**
   * Returns current player count.
   * @example
   * ```typescript
   * const response = await client.playerCounts();
   * console.log(response);
   * ```
   * @category API
   */
  public async playerCount(): Promise<
    ResultObject<Paths.PlayerCount.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.call<Paths.PlayerCount.Get.Responses.$200>("playerCount"),
      ["success"]
    );
  }

  /**
   * Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
   * @example
   * ```typescript
   * const response = await client.recentGames.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   * @category API
   */
  public recentGames: RecentGames = new RecentGames(this);

  /**
   * Relatively static Hypixel resources that don't change often at all.
   * @category API
   */
  public resources: Resources = new Resources(this);

  /**
   * All SkyBlock related endpoints.
   * @category API
   */
  public skyblock: SkyBlock = new SkyBlock(this);

  /**
   * Returns online status information for given player, including game, mode and map when available.
   * @example
   * ```typescript
   * const response = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   * @category API
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
   * @category API
   */
  public async watchdogstats(): Promise<
    ResultObject<Paths.Watchdogstats.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.call<Paths.Watchdogstats.Get.Responses.$200>("watchdogstats"),
      ["success"]
    );
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
  public async call<T extends Components.Schemas.ApiSuccess>(
    path: string,
    parameters: Parameters = {}
  ): Promise<T & { cached?: boolean }> {
    if (!this.cache) {
      return this.executeActionableCall(
        this.createActionableCall(path, parameters)
      );
    }
    const key = `${path.split("/").join(":")}${
      Object.values(parameters).length === 0
        ? ""
        : `:${Object.values(parameters).map((v) =>
            v.toLowerCase().replace(/-/g, "")
          )}`
    }`;
    const cachedResponse:
      | (T & { cached?: boolean })
      | undefined = await this.cache.get<T>(key);
    if (cachedResponse) {
      cachedResponse.cached = true;
      return cachedResponse;
    }
    const response: T = await this.executeActionableCall(
      this.createActionableCall(path, parameters)
    );
    await this.cache.set(key, response);
    return response;
  }

  /** @internal */
  private async executeActionableCall<T extends Components.Schemas.ApiSuccess>(
    call: ActionableCall<T>
  ): Promise<T> {
    await this.queue.wait();
    if (this.rateLimit.remaining === 0) {
      const timeout = this.rateLimit.reset * 1000;
      this.emitter.emit(
        "limited",
        this.rateLimit.limit,
        new Date(Date.now() + timeout)
      );
      await new Promise((resolve) => {
        setTimeout(resolve, timeout);
      });
      this.emitter.emit("reset");
    }
    let response: T & DefaultMeta;
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
    if (typeof response === "object" && !call.noRateLimit) {
      response.ratelimit = JSON.parse(JSON.stringify(this.rateLimit));
    }
    return response;
  }

  /** @internal */
  private createActionableCall<T extends Components.Schemas.ApiSuccess>(
    path: string,
    /* istanbul ignore next */
    parameters: Parameters = {}
  ): ActionableCall<T> {
    let noRateLimit = false;
    let includeApiKey = true;

    // No API key or rate limiting is needed on resources, skyblock/auctions, or skyblock/bazaar
    if (
      path.startsWith("resources") ||
      path === "skyblock/auctions" ||
      path === "skyblock/auctions_ended" ||
      path === "skyblock/bazaar"
    ) {
      noRateLimit = true;
      includeApiKey = false;
    }

    return {
      execute: this.callMethod.bind(
        this,
        path,
        parameters,
        noRateLimit,
        includeApiKey
      ),
      retries: 0,
      noRateLimit,
      includeApiKey,
    } as ActionableCall<T>;
  }

  /** @internal */
  private callMethod<
    T extends Components.Schemas.ApiSuccess & {
      cause?: string;
    } & { cloudflareCache?: DefaultMeta["cloudflareCache"] }
  >(
    path: string,
    parameters: Parameters,
    noRateLimit: boolean,
    includeApiKey: boolean
  ): Promise<T> {
    const url = new URL(path, Client.endpoint);
    Object.keys(parameters).forEach((param) => {
      url.searchParams.set(param, parameters[param]);
    });

    if (includeApiKey) {
      url.searchParams.set("key", this.apiKey);
    }

    return request({
      url: url.toString(),
      userAgent: this.userAgent,
      timeout: this.timeout,
      noRateLimit,
      getRateLimitHeaders: this.getRateLimitHeaders.bind(this),
    });
  }

  /** @internal */
  private getRateLimitHeaders(headers: Record<string, string>): void {
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
