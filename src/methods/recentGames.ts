import { Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultArray, ResultArray } from "../util/ResultArray";
import type { RecentGamesResponse } from "../types/AugmentedTypes";

/**
 * @example
 * ```typescript
 * const recent = await client.recentgames.uuid("20934ef9488c465180a78f861586b4cf");
 * ```
 * @category Client
 */
export class Recentgames extends Method {
  /**
   * Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
   * @example
   * ```typescript
   * const response = await client.recentgames.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   * @category API
   */
  public async uuid(
    uuid: Paths.V2Recentgames.Get.Parameters.Uuid
  ): Promise<ResultArray<RecentGamesResponse, "games">> {
    return getResultArray(
      await this.client.call<RecentGamesResponse>("recentgames", {
        uuid,
      }),
      "games"
    );
  }
}
