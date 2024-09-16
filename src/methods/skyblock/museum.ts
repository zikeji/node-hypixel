import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type { SkyblockMuseumResponse } from "../../types/AugmentedTypes";

/**
 * @example
 * ```typescript
 * const museum = await client.skyblock.museum.profile("20934ef9488c465180a78f861586b4cf");
 * ```
 * @category Client
 */
export class SkyBlockMuseum extends Method {
  /**
   * SkyBlock museum data for all members of the provided profile. The data returned can differ depending on the players in-game API settings.
   * @example
   * ```typescript
   * const museum = await client.skyblock.museum.profile("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async profile(
    uuid: Paths.V2SkyblockMuseum.Get.Parameters.Profile
  ): Promise<ResultObject<SkyblockMuseumResponse, ["profile"]>> {
    return getResultObject(
      await this.client.call<SkyblockMuseumResponse>("skyblock/museum", {
        uuid,
      }),
      ["profile"]
    );
  }
}
