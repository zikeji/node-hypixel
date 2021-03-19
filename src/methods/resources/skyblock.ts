// @deno-types="../../types/api.ts"
import { Paths } from "../../types/api";
// @deno-types="../../util/Method.ts"
import { Method } from "../../util/Method";
// @deno-types="../../util/ResultObject.ts"
import { getResultObject, ResultObject } from "../../util/ResultObject";

export class SkyBlockResources extends Method {
  /**
   * Returns the list of ingame collections.
   * @return An object of [[Collection | Collection interface]] objects.
   * @category API
   */
  public async collections(): Promise<
    ResultObject<
      Paths.ResourcesSkyblockCollections.Get.Responses.$200,
      ["collections"]
    >
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesSkyblockCollections.Get.Responses.$200>(
        "resources/skyblock/collections"
      ),
      ["collections"]
    );
  }

  /**
   * Returns the current skills from the SkyBlock gamemode.
   * @category API
   */
  public async skills(): Promise<
    ResultObject<
      Paths.ResourcesSkyblockSkills.Get.Responses.$200,
      ["collections"]
    >
  > {
    return getResultObject(
      await this.client.call<Paths.ResourcesSkyblockSkills.Get.Responses.$200>(
        "resources/skyblock/skills"
      ),
      ["collections"]
    );
  }
}
