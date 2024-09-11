import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import type { SkyblockProfiles } from "../../types/AugmentedTypes";

export class SkyBlockProfiles extends Method {
  /**
   * Returns an array SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings. The request takes a player UUID.
   * @example
   * ```typescript
   * const profiles = await client.skyblock.profiles.uuid("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async uuid(
    uuid: Paths.V2SkyblockProfiles.Get.Parameters.Uuid
  ): Promise<ResultArray<SkyblockProfiles, "profiles">> {
    return getResultArray(
      await this.client.call<SkyblockProfiles>("skyblock/profiles", {
        uuid,
      }),
      "profiles"
    );
  }
}
