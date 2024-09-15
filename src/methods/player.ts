import { Paths } from "../types/api";
import { Method } from "../util/Method";
import { ResultObject, getResultObject } from "../util/ResultObject";
import type { PlayerResponse } from "../types/AugmentedTypes";

/**
 * @example
 * ```typescript
 * const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
 * ```
 * @category Client
 */
export class Player extends Method {
  /**
   * Returns a player's data, such as game stats.
   * @example
   * ```typescript
   * const player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(player);
   * ```
   * @category API
   */
  public async uuid(
    uuid: Paths.V2Player.Get.Parameters.Uuid
  ): Promise<ResultObject<PlayerResponse, ["player"]>> {
    return getResultObject(
      await this.client.call<PlayerResponse>("player", {
        uuid,
      }),
      ["player"]
    );
  }
}
