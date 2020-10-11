import { IncomingHttpHeaders } from "http";
import { request, RequestOptions } from "https";
import { URL } from "url";
import type { Profile, ProfileWithCuteName } from "./types/Profile";

/** @hidden */
interface APIResponse {
  success: boolean;
  cause?: string;
}

/** @hidden */
interface Parameters {
  [parameter: string]: string;
}

export class HypixelSkyBlock {
  /** @internal */
  private static readonly endpoint = new URL(`https://api.hypixel.net`);
  /** @internal */
  private readonly key: string;
  /** @internal */
  private readonly timeout: number;

  private remaining = -1;
  private reset = -1;
  private limit = -1;

  /**
   * Create a new instance of the HypixelSkyBlock API client.
   * @param key Your Hypixel API key.
   * @param timeout The time, in milliseconds, you want to wait before giving up on the method call.
   */
  public constructor(key: string, timeout: number = 10 * 1000) {
    if (!key || typeof key !== "string") {
      throw new Error("Invalid API key");
    }
    this.key = key;
    this.timeout = timeout;
  }

  /**
   * Return a profile by it's profile ID.
   * @category SkyBlock Profiles
   * @param profile The profile ID you are looking up.
   * @return A [[Profile | Profile interface]] object.
   */
  public async profile(profile: string): Promise<Profile> {
    return HypixelSkyBlock.returnResponseObject(
      await this.call<{ profile: Profile } & APIResponse>("skyblock/profile", {
        profile,
      }),
      "profile"
    );
  }

  /**
   * Return an array of profiles for a Hypixel user.
   * @category SkyBlock Profiles
   * @param uuid The Minecraft UUID of the player who's profiles you are looking up.
   * @return An array of [[ProfileWithCuteName | Profile interface]] objects.
   */
  public async profiles(uuid: string): Promise<ProfileWithCuteName[]> {
    return HypixelSkyBlock.returnResponseObject(
      await this.call<{ profiles: Profile[] } & APIResponse>(
        "skyblock/profiles",
        { uuid }
      ),
      "profiles"
    );
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
  public call<T extends APIResponse>(
    path: string,
    parameters: Parameters = {}
  ): Promise<T> {
    const url = new URL(path, HypixelSkyBlock.endpoint);
    Object.keys(parameters).forEach((param) => {
      url.searchParams.set(param, parameters[param]);
    });

    url.searchParams.set("key", this.key);

    const options: RequestOptions = {
      method: "GET",
      timeout: this.timeout,
      headers: {
        "User-Agent": `HypixelSkyblock`,
        Accept: "application/json",
      },
    };

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

          if (incomingMessage.statusCode !== 200) {
            return reject(
              new Error(
                `${incomingMessage.statusCode} ${incomingMessage.statusMessage}. Response: ${responseBody}`
              )
            );
          }

          let responseObject: T | undefined;
          try {
            responseObject = JSON.parse(responseBody);
          } catch (_) {
            return reject(
              new Error(
                `Invalid JSON response received. Response: ${responseBody}`
              )
            );
          }

          return resolve(responseObject);
        });
      });

      clientRequest.on("error", (error) => {
        reject(error);
      });
      clientRequest.end();
    });
  }

  /** @internal */
  private static async returnResponseObject<
    T extends APIResponse,
    K extends keyof T
  >(response: T, key: K): Promise<T[K]> {
    if (key in response) {
      return response[key];
    }
    throw new Error(`Key "${key}" was not in the response.`);
  }

  /** @internal */
  private getRateLimitHeaders(headers: IncomingHttpHeaders): void {
    this.limit =
      parseInt((headers?.["ratelimit-limit"] as unknown) as string, 10) ??
      this.limit;
    this.remaining =
      parseInt((headers?.["ratelimit-remaining"] as unknown) as string, 10) ??
      this.remaining;
    this.reset =
      parseInt((headers?.["ratelimit-reset"] as unknown) as string, 10) ??
      this.reset;
  }
}
