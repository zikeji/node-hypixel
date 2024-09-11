import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type { SkyblockAuctionsResponse } from "../../types/AugmentedTypes";

export class SkyBlockAuctions extends Method {
  /**
   * Returns SkyBlock auctions that are currently active in the in-game Auction House.
   * @example
   * ```typescript
   * const { auctions } = await client.skyblock.auctions.page(0);
   * ```
   * @category API
   */
  public async page(
    page: Paths.V2SkyblockAuctions.Get.Parameters.Page = 0
  ): Promise<ResultObject<SkyblockAuctionsResponse, ["success"]>> {
    return getResultObject(
      await this.client.call<SkyblockAuctionsResponse>("skyblock/auctions", {
        page: page.toString(10),
      }),
      ["success"]
    );
  }
}
