import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type { HousingHousesResponse } from "../../types/AugmentedTypes";

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
  ): Promise<ResultObject<HousingHousesResponse, ["success"]>> {
    return getResultObject(
      await this.client.call<HousingHousesResponse>("housing/houses", {
        player,
      }),
      ["success"]
    );
  }
}
