import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type { ResourcesGuildsAchievementsResponse } from "../../types/AugmentedTypes";

export class GuildsResources extends Method {
  /**
   * Retrieve a list of achievements a Hypixel guild can accomplish.
   * @example
   * ```typescript
   * const achievements = await client.resources.guilds.achievements();
   * ```
   * @category API
   */
  public async achievements(): Promise<
    ResultObject<
      ResourcesGuildsAchievementsResponse,
      ["success", "lastUpdated"]
    >
  > {
    return getResultObject(
      await this.client.call<ResourcesGuildsAchievementsResponse>(
        "resources/guilds/achievements"
      ),
      ["success", "lastUpdated"]
    );
  }
}
