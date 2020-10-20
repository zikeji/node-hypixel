import type { Paths } from "../../types/api";
import { Method } from "../../util/Method";
import { getResultArray, ResultArray } from "../../util/ResultArray";

export class SkyBlock extends Method {
  // async auction(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>("skyblock/auction"),
  //     "success"
  //   );
  // }

  // async auctions(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>(
  //       "skyblock/auctions"
  //     ),
  //     "success"
  //   );
  // }

  // async bazaar(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>("skyblock/bazaar"),
  //     "success"
  //   );
  // }

  /**
   * Returns SkyBlock news, including a title, description and a thread.
   * @return An array of [[NewsEntry | NewsEntry interface]] objects.
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
