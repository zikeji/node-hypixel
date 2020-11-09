import type { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import { SkyBlockAuction } from "./auction";
import { SkyBlockAuctions } from "./auctions";

export class SkyBlock extends Method {
  /**
   * Returns SkyBlock auctions by either player, profile or auction uuid. Only "active" auctions are returned, these are auctions that are still open or that have not had all bids/items claimed.
   * @example
   * ```typescript
   * let auctions = await client.skyblock.auction.player("347ef6c1daac45ed9d1fa02818cf0fb6");
   * auctions = await client.skyblock.auction.profile("347ef6c1daac45ed9d1fa02818cf0fb6");
   * auctions = await client.skyblock.auction.uuid("409a1e0f261a49849493278d6cd9305a");
   * ```
   */
  public auction: SkyBlockAuction = new SkyBlockAuction(this.client);

  /**
   * Returns SkyBlock auctions that are currently active in the in-game Auction House.
   * @example
   * ```typescript
   * const { auctions } = await client.skyblock.auctions.page(0);
   * ```
   */
  public auctions: SkyBlockAuctions = new SkyBlockAuctions(this.client);

  /**
   * Returns the list of [products](https://github.com/HypixelDev/PublicAPI/blob/master/Documentation/methods/skyblock/bazaar.md#product-description) along with their sell summary, buy summary and quick status.
   * @example
   * ```typescript
   * const products = await client.skyblock.bazaar();
   * ```
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
   * Return a profile by it's profile ID.
   * @param profile The profile ID you are looking up.
   * @return A [[Profile | Profile interface]] object.
   */
  // public async profile(profile: string): Promise<Profile> {
  //   return returnResponseObject(
  //     await this.client.call<
  //       { profile: Profile } & Components.Schemas.ApiSuccess
  //     >("skyblock/profile", {
  //       profile,
  //     }),
  //     "profile"
  //   );
  // }

  /**
   * Return an array of profiles for a Hypixel user.
   * @param uuid The Minecraft UUID of the player who's profiles you are looking up.
   * @return An array of [[ProfileWithCuteName | Profile interface]] objects.
   */
  // public async profiles(uuid: string): Promise<ProfileWithCuteName[]> {
  //   return returnResponseObject(
  //     await this.client.call<
  //       { profiles: ProfileWithCuteName[] } & Components.Schemas.ApiSuccess
  //     >("skyblock/profiles", { uuid }),
  //     "profiles"
  //   );
  // }
}
