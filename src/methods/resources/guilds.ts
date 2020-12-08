import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import { getResultObject, ResultObject } from "../../util/ResultObject";

export class GuildsResources extends Method {
  /**
   * Retrieve a list of achievements a Hypixel guild can accomplish.
   * @example
   * ```typescript
   * const achievements = await client.resources.guilds.achievements();
   * ```
   */
  async achievements(): Promise<
    ResultObject<
      Paths.ResourcesGuildsAchievements.Get.Responses.$200,
      ["success", "lastUpdated"]
    >
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesGuildsAchievements.Get.Responses.$200>(
        "resources/guilds/achievements"
      ),
      ["success", "lastUpdated"]
    );
  }

  /**
   * Retrieve a list of permissions that a Hypixel guild master can use.
   * @example
   * ```typescript
   * const permissions = await client.resources.guilds.permissions();
   * ```
   */
  async permissions(): Promise<
    ResultArray<
      Paths.ResourcesGuildsPermissions.Get.Responses.$200,
      "permissions"
    >
  > {
    return getResultArray(
      await this.client.call<Paths.ResourcesGuildsPermissions.Get.Responses.$200>(
        "resources/guilds/permissions"
      ),
      "permissions"
    );
  }
}
