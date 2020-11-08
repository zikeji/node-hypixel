import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import { GuildsResources } from "./guilds";
import { SkyBlockResources } from "./skyblock";

export class Resources extends Method {
  /**
   * Returns all the achievements for each gamemode on the Hypixel network.
   * @example
   * ```typescript
   * const achievements = await client.resources.achievements();
   * ```
   */
  async achievements(): Promise<
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
   */
  async challenges(): Promise<
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
   */
  async quests(): Promise<
    ResultObject<Paths.ResourcesQuests.Get.Responses.$200, ["quests"]>
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesQuests.Get.Responses.$200>(
        "resources/quests"
      ),
      ["quests"]
    );
  }

  public guilds: GuildsResources = new GuildsResources(this.client);

  public skyblock: SkyBlockResources = new SkyBlockResources(this.client);
}
