import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import { GuildsResources } from "./guilds";
import { SkyBlockResources } from "./skyblock";
import { VanityResources } from "./vanity";
import type {
  ResourcesAchievementsResponse,
  ResourcesChallengesResponse,
  ResourcesGamesResponse,
  ResourcesQuestsResponse,
} from "../../types/AugmentedTypes";

export class Resources extends Method {
  /**
   * Returns all the achievements for each gamemode on the Hypixel network.
   * @example
   * ```typescript
   * const achievements = await client.resources.achievements();
   * ```
   * @category API
   */
  public async achievements(): Promise<
    ResultObject<ResourcesAchievementsResponse, ["achievements"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesAchievementsResponse>(
        "resources/achievements"
      ),
      ["achievements"]
    );
  }

  /**
   * Returns all the challenges for each gamemode on the Hypixel network.
   * @example
   * ```typescript
   * const challenges = await client.resources.challenges();
   * ```
   * @category API
   */
  public async challenges(): Promise<
    ResultObject<ResourcesChallengesResponse, ["challenges"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesChallengesResponse>(
        "resources/challenges"
      ),
      ["challenges"]
    );
  }

  /**
   * Returns information about Hypixel Games.
   * @example
   * ```typescript
   * const games = await client.resources.games();
   * ```
   * @category API
   */
  public async games(): Promise<
    ResultObject<ResourcesGamesResponse, ["games"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesGamesResponse>("resources/games"),
      ["games"]
    );
  }

  /**
   * Guild related resources.
   * @category API
   */
  public guilds: GuildsResources = new GuildsResources(this.client);

  /**
   * Returns all the quests for each gamemode on the Hypixel network.
   * @example
   * ```typescript
   * const quests = await client.resources.quests();
   * ```
   * @category API
   */
  public async quests(): Promise<
    ResultObject<ResourcesQuestsResponse, ["quests"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesQuestsResponse>("resources/quests"),
      ["quests"]
    );
  }

  /**
   * SkyBlock related resources.
   * @category API
   */
  public skyblock: SkyBlockResources = new SkyBlockResources(this.client);

  /**
   * SkyBlock related resources.
   * @category API
   */
  public vanity: VanityResources = new VanityResources(this.client);
}
