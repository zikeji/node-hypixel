// @deno-types="../../types/api.ts"
import type { Paths } from "../../types/api";
// @deno-types="../../util/Method.ts"
import { Method } from "../../util/Method";
// @deno-types="../../util/ResultObject.ts"
import { getResultObject, ResultObject } from "../../util/ResultObject";

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
    page: Paths.SkyblockAuctions.Get.Parameters.Page = 0
  ): Promise<
    ResultObject<Paths.SkyblockAuctions.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.client.call<Paths.SkyblockAuctions.Get.Responses.$200>(
        "skyblock/auctions",
        { page: page.toString(10) }
      ),
      ["success"]
    );
  }
}
