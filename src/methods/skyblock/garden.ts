import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type { SkyblockGarden } from "../../types/AugmentedTypes";

export class SkyBlockGarden extends Method {
  /**
   * SkyBlock garden data for the provided profile.
   * @example
   * ```typescript
   * const garden = await client.skyblock.garden.profile("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async profile(
    uuid: Paths.V2SkyblockGarden.Get.Parameters.Profile
  ): Promise<ResultObject<SkyblockGarden, ["success"]>> {
    return getResultObject(
      await this.client.call<SkyblockGarden>("skyblock/garden", {
        uuid,
      }),
      ["success"]
    );
  }
}
