import type { Components, Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { returnResponseObject } from "../../util/ReturnResponseObject";

export class SkyBlockResources extends Method {
  /**
   * Returns the list of ingame collections.
   * @return An object of [[Collection | Collection interface]] objects.
   */
  async collections(): Promise<
    Components.Schemas.SkyBlockResourcesParentCollections
  > {
    return returnResponseObject(
      await this.client.call<
        Paths.ResourcesSkyblockCollections.Get.Responses.$200
      >("resources/skyblock/collections"),
      "collections"
    );
  }

  async skills(): Promise<Components.Schemas.SkyBlockResourcesSkills> {
    return returnResponseObject(
      await this.client.call<Paths.ResourcesSkyblockSkills.Get.Responses.$200>(
        "resources/skyblock/skills"
      ),
      "collections"
    );
  }
}
