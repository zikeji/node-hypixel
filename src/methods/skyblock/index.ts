import { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import { SkyBlockAuction } from "./auction";
import { SkyBlockAuctions } from "./auctions";
import { SkyBlockProfiles } from "./profiles";
import type {
  SkyblockAuctionsEndedResponse,
  SkyblockBazaarResponse,
  SkyblockFiresalesResponse,
  SkyblockNewsResponse,
  SkyblockProfileResponse,
} from "../../types/AugmentedTypes";
import { SkyBlockMuseum } from "./museum";
import { SkyBlockGarden } from "./garden";
import { SkyBlockBingo } from "./bingo";

/**
 * @example
 * ```typescript
 * const products = await client.skyblock.bazaar();
 * ```
 * @category Client
 */
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
    ResultArray<SkyblockAuctionsEndedResponse, "auctions">
  > {
    return getResultArray(
      await this.client.call<SkyblockAuctionsEndedResponse>(
        "skyblock/auctions_ended"
      ),
      "auctions"
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
    ResultObject<SkyblockBazaarResponse, ["products"]>
  > {
    return getResultObject(
      await this.client.call<SkyblockBazaarResponse>("skyblock/bazaar"),
      ["products"]
    );
  }

  /**
   * Bingo data for participated events of the provided player.
   * @example
   * ```typescript
   * const bingoEvents = await client.skyblock.bingo.uuid("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public bingo: SkyBlockBingo = new SkyBlockBingo(this.client);

  /**
   * Retrieve the currently active or upcoming Fire Sales for SkyBlock.
   * @example
   * ```typescript
   * const sales = await client.skyblock.firesales();
   * ```
   * @category API
   */
  public async firesales(): Promise<
    ResultArray<SkyblockFiresalesResponse, "sales">
  > {
    return getResultArray(
      await this.client.call<SkyblockFiresalesResponse>("skyblock/bazaar"),
      "sales"
    );
  }

  /**
   * Get SkyBlock garden data.
   * @example
   * ```typescript
   * const garden = await client.skyblock.garden.profile('347ef6c1daac45ed9d1fa02818cf0fb6');
   * ```
   * @category API
   */
  public garden: SkyBlockGarden = new SkyBlockGarden(this.client);

  /**
   * Get SkyBlock museum data.
   * @example
   * ```typescript
   * const museum = await client.skyblock.museum.profile('347ef6c1daac45ed9d1fa02818cf0fb6');
   * ```
   * @category API
   */
  public museum: SkyBlockMuseum = new SkyBlockMuseum(this.client);

  /**
   * Returns SkyBlock news, including a title, description and a thread.
   * @example
   * ```typescript
   * const news = await client.skyblock.news();
   * ```
   * @category API
   */
  public async news(): Promise<ResultArray<SkyblockNewsResponse, "items">> {
    return getResultArray(
      await this.client.call<SkyblockNewsResponse>("skyblock/news"),
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
    profile: Paths.V2SkyblockProfile.Get.Parameters.Profile
  ): Promise<ResultObject<SkyblockProfileResponse, ["profile"]>> {
    return getResultObject(
      await this.client.call<SkyblockProfileResponse>("skyblock/profile", {
        profile,
      }),
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
