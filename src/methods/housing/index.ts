import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type {
  HousingActiveResponse,
  HousingHouseResponse,
} from "../../types/AugmentedTypes";
import { Paths } from "../../types/api";
import { HousingHouses } from "./houses";
import { FlatResultArray, getFlatResultArray } from "../../util/ResultArray";
/**
 * @example
 * ```typescript
 * const active = await client.housing.active();
 * ```
 * @category Client
 */
export class Housing extends Method {
  /**
   * The currently active public houses.
   * @example
   * ```typescript
   * const activeHousing = await client.housing.active();
   * ```
   * @category API
   */
  public async active(): Promise<FlatResultArray<HousingActiveResponse>> {
    return getFlatResultArray(await this.client.call<never>("housing/active"));
  }

  /**
   * Returns information about a specific house.
   * @example
   * ```typescript
   * const houseData = await client.housing.house('20934ef9488c465180a78f861586b4cf');
   * ```
   * @category API
   */
  public async house(
    house: Paths.V2HousingHouse.Get.Parameters.House
  ): Promise<ResultObject<HousingHouseResponse, [], true>> {
    return getResultObject(
      await this.client.call<never>("housing/house", {
        house,
      })
    );
  }

  /**
   * Returns public houses for a specific player.
   * @example
   * ```typescript
   * const houses = await client.housing.houses.player('20934ef9488c465180a78f861586b4cf');
   * ```
   * @category API
   */
  public houses: HousingHouses = new HousingHouses(this.client);
}
