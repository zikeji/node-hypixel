// @deno-types="../types/api.ts"
import type { Components, Paths } from "../types/api";
// @deno-types="../util/Method.ts"
import { Method } from "../util/Method";
// @deno-types="../util/ResultArray.ts"
import { getResultArray, ResultArray } from "../util/ResultArray";

export class RecentGames extends Method {
  /**
   * Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
   * @example
   * ```typescript
   * const response = await client.recentGames.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   * @category API
   */
  public async uuid(
    uuid: Components.Parameters.PlayerUuidRequired.Uuid
  ): Promise<ResultArray<Paths.RecentGames.Get.Responses.$200, "games">> {
    return getResultArray(
      await this.client.call<Paths.RecentGames.Get.Responses.$200>(
        "recentGames",
        {
          uuid,
        }
      ),
      "games"
    );
  }
}
