import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import { SkyBlockAuction } from "./auction";
import { SkyBlockAuctions } from "./auctions";
import { SkyBlockProfiles } from "./profiles";

export class SkyBlock extends Method {
  /**
   * Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.
   * @example
   * ```typescript
   * let auctions = await client.skyblock.auction.player("347ef6c1daac45ed9d1fa02818cf0fb6");
   * auctions = await client.skyblock.auction.profile("347ef6c1daac45ed9d1fa02818cf0fb6");
   * auctions = await client.skyblock.auction.uuid("409a1e0f261a49849493278d6cd9305a");
   * ```
   * @category API
   */
  public auction: SkyBlockAuction = new SkyBlockAuction(this.client);

  /**
   * Returns SkyBlock auctions that are currently active in the in-game Auction House.
   * @example
   * ```typescript
   * const { auctions } = await client.skyblock.auctions.page(0);
   * ```
   * @category API
   */
  public auctions: SkyBlockAuctions = new SkyBlockAuctions(this.client);

  /**
   * Returns SkyBlock auctions which ended in the last 60 seconds (More precisely, whatever time is defined in the "Cache-Control" header of the response).
   * @example
   * ```typescript
   * const { auctions } = await client.skyblock.auctions_ended();
   * ```
   * @category API
   */
  public async auctions_ended(): Promise<
    ResultObject<Paths.SkyblockAuctionsEnded.Get.Responses.$200, ["success"]>
  > {
    return getResultObject(
      await this.client.call<Paths.SkyblockAuctionsEnded.Get.Responses.$200>(
        "skyblock/auctions_ended"
      ),
      ["success"]
    );
  }

  /**
   * Returns the list of [products](https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/methods/skyblock/bazaar.md#product-description) along with their sell summary, buy summary and quick status.
   * @example
   * ```typescript
   * const products = await client.skyblock.bazaar();
   * ```
   * @category API
   */
  public async bazaar(): Promise<
    ResultObject<Paths.SkyblockBazaar.Get.Responses.$200, ["products"]>
  > {
    return getResultObject(
      await this.client.call<Paths.SkyblockBazaar.Get.Responses.$200>(
        "skyblock/bazaar"
      ),
      ["products"]
    );
  }

  /**
   * Returns SkyBlock news, including a title, description and a thread.
   * @example
   * ```typescript
   * const news = await client.skyblock.news();
   * ```
   * @category API
   */
  public async news(): Promise<
    ResultArray<Paths.SkyblockNews.Get.Responses.$200, "items">
  > {
    return getResultArray(
      await this.client.call<Paths.SkyblockNews.Get.Responses.$200>(
        "skyblock/news"
      ),
      "items"
    );
  }

  /**
   * Returns a SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings.
   * @example
   * ```typescript
   * const news = await client.skyblock.profile("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async profile(
    profile: Paths.SkyblockProfile.Get.Parameters.Profile
  ): Promise<
    ResultObject<Paths.SkyblockProfile.Get.Responses.$200, ["profile"]>
  > {
    return getResultObject(
      await this.client.call<Paths.SkyblockProfile.Get.Responses.$200>(
        "skyblock/profile",
        { profile }
      ),
      ["profile"]
    );
  }

  /**
   * Returns an array SkyBlock profile's data, such as stats, objectives etc. The data returned can differ depending on the players in-game API settings. The request takes a player UUID.
   * @example
   * ```typescript
   * const profiles = await client.skyblock.profiles.uuid("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public profiles: SkyBlockProfiles = new SkyBlockProfiles(this.client);
}
