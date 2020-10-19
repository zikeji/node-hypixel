import type { Components, Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { returnResponseObject } from "../../util/ReturnResponseObject";

export class SkyBlockResources extends Method {
  /**
   * Returns the list of ingame collections.
   * @return An object of [[Collection | Collection interface]] objects.
   */
  async collections(): Promise<
    Components.Schemas.CollectionsResourceResponse["collections"]
  > {
    return returnResponseObject(
      await this.client.call<
        Paths.ResourcesSkyblockCollections.Get.Responses.$200
      >("resources/skyblock/collections"),
      "collections"
    );
  }

  async skills(): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>(
        "resources/skyblock/skills"
      ),
      "success"
    );
  }
}
