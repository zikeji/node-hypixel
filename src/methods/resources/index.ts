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
    ResultObject<Paths.ResourcesAchievements.Get.Responses.$200, "achievements">
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesAchievements.Get.Responses.$200>(
        "resources/achievements"
      ),
      "achievements"
    );
  }

  // async challenges(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>(
  //       "resources/challenges"
  //     ),
  //     "success"
  //   );
  // }

  public guilds: GuildsResources = new GuildsResources(this.client);

  public skyblock: SkyBlockResources = new SkyBlockResources(this.client);

  // async quests(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>("resources/quests"),
  //     "success"
  //   );
  // }
}
