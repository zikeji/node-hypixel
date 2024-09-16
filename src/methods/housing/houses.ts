import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import type { HousingHousesResponse } from "../../types/AugmentedTypes";
import { FlatResultArray, getFlatResultArray } from "../../util/ResultArray";

/**
 * @example
 * ```typescript
 * const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
 * ```
 * @category Client
 */
export class HousingHouses extends Method {
  /**
   * Returns public houses for a specific player.
   * @example
   * ```typescript
   * const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
   * ```
   * @category API
   */
  public async player(
    player: Paths.V2HousingHouses.Get.Parameters.Player
  ): Promise<FlatResultArray<HousingHousesResponse>> {
    return getFlatResultArray(
      await this.client.call<never>("housing/houses", {
        player,
      })
    );
  }
}
