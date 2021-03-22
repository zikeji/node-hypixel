import { Paths } from "../../types/api.ts";
import { Method } from "../../util/Method.ts";
import { getResultObject, ResultObject } from "../../util/ResultObject.ts";
import { GuildsResources } from "./guilds.ts";
import { SkyBlockResources } from "./skyblock.ts";

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
    ResultObject<
      Paths.ResourcesAchievements.Get.Responses.$200,
      ["achievements"]
    >
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesAchievements.Get.Responses.$200>(
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
    ResultObject<Paths.ResourcesChallenges.Get.Responses.$200, ["challenges"]>
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesChallenges.Get.Responses.$200>(
        "resources/challenges"
      ),
      ["challenges"]
    );
  }

  /**
   * Returns all the quests for each gamemode on the Hypixel network.
   * @example
   * ```typescript
   * const quests = await client.resources.quests();
   * ```
   * @category API
   */
  public async quests(): Promise<
    ResultObject<Paths.ResourcesQuests.Get.Responses.$200, ["quests"]>
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesQuests.Get.Responses.$200>(
        "resources/quests"
      ),
      ["quests"]
    );
  }

  /**
   * Guild related resources.
   * @category API
   */
  public guilds: GuildsResources = new GuildsResources(this.client);

  /**
   * SkyBlock related resources.
   * @category API
   */
  public skyblock: SkyBlockResources = new SkyBlockResources(this.client);
}
