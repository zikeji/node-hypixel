import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import type { SkyblockBingoResponse } from "../../types/AugmentedTypes";

export class SkyBlockBingo extends Method {
  /**
   * Bingo data for participated events of the provided player.
   * @example
   * ```typescript
   * const bingoEvents = await client.skyblock.bingo.uuid("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async uuid(
    uuid: Paths.V2SkyblockBingo.Get.Parameters.Uuid
  ): Promise<ResultArray<SkyblockBingoResponse, "events">> {
    return getResultArray(
      await this.client.call<SkyblockBingoResponse>("skyblock/bingo", {
        uuid,
      }),
      "events"
    );
  }
}
