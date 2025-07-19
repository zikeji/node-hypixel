/**
 * This file contains references to the generated types from api.ts as well as extensions to supplement their data.
 */

import type { Paths } from "./api";
import type { Guild } from "./Augmented/Guild";
import type { Player } from "./Augmented/Player";
import type {
  ElectionCurrent,
  ElectionMayor,
} from "./Augmented/Resources/SkyBlock/Election";
import type { SkyBlockAuction } from "./Augmented/SkyBlock/Auction";
import type { SkyBlockMuseumMember } from "./Augmented/SkyBlock/Museum";
import type { SkyBlockProfile } from "./Augmented/SkyBlock/Profile";

export type BoostersResponse = Paths.V2Boosters.Get.Responses.$200 &
  Record<string, unknown>;

export type CountsResponse = Paths.V2Counts.Get.Responses.$200 &
  Record<string, unknown>;

export type GuildResponse = Paths.V2Guild.Get.Responses.$200 &
  Record<string, unknown> & {
    guild: Guild | null;
  };

export type LeaderboardsResponse = Paths.V2Leaderboards.Get.Responses.$200 &
  Record<string, unknown>;

export type PlayerResponse = Paths.V2Player.Get.Responses.$200 &
  Record<string, unknown> & {
    player: Player | null;
  };

export type PunishmentStatsResponse = Paths.V2Punishmentstats.Get.Responses.$200 &
  Record<string, unknown>;

export type RecentGamesResponse = Paths.V2Recentgames.Get.Responses.$200 &
  Record<string, unknown>;

export type StatusResponse = Paths.V2Status.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesGamesResponse = Paths.V2ResourcesGames.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesAchievementsResponse = Paths.V2ResourcesAchievements.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesChallengesResponse = Paths.V2ResourcesChallenges.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesQuestsResponse = Paths.V2ResourcesQuests.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesGuildsAchievementsResponse = Paths.V2ResourcesAchievements.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesVanityCompanionsResponse = Paths.V2ResourcesVanityCompanions.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesVanityPetsResponse = Paths.V2ResourcesVanityPets.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockBingoResponse = Paths.V2ResourcesSkyblockBingo.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockCollectionsResponse = Paths.V2ResourcesSkyblockCollections.Get.Responses.$200 &
  Record<string, unknown> & {
    collections: {
      [key in
        | "FARMING"
        | "MINING"
        | "COMBAT"
        | "FORAGING"
        | "FISHING"
        | "RIFT"]: {
        name: string;
        items: {
          [key: string]: {
            name: string;
            maxTiers: number;
            tiers: {
              tier: number;
              amountRequired: number;
              unlocks: string[];
            }[];
          };
        };
      };
    } & {
      [key: string]:
        | {
            name: string;
            items: {
              [key: string]: {
                name: string;
                maxTiers: number;
                tiers: {
                  tier: number;
                  amountRequired: number;
                  unlocks: string[];
                }[];
              };
            };
          }
        | undefined;
    };
  };

export type ResourcesSkyblockElectionResponse = Paths.V2ResourcesSkyblockElection.Get.Responses.$200 &
  Record<string, unknown> & {
    mayor: ElectionMayor;
    current: ElectionCurrent | null;
  };

export type ResourcesSkyblockItemsResponse = Paths.V2ResourcesSkyblockItems.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockSkillsResponse = Paths.V2ResourcesSkyblockSkills.Get.Responses.$200 &
  Record<string, unknown> & {
    skills: {
      [key: string]: {
        name: string;
        description: string;
        maxLevel: number;
        levels: {
          level: number;
          totalExpRequired: number;
          unlocks: string[];
        }[];
      };
    };
  };

export type SkyblockNewsResponse = Paths.V2SkyblockNews.Get.Responses.$200 &
  Record<string, unknown> & {
    items: {
      item: {
        material: string;
      };
      link: string;
      text: string;
      title: string;
    }[];
  };

export type SkyblockAuctionResponse = Omit<
  Paths.V2SkyblockAuction.Get.Responses.$200,
  "auctions"
> & {
  auctions?: SkyBlockAuction[];
} & Record<string, unknown>;

export type SkyblockAuctionsResponse = Omit<
  Paths.V2SkyblockAuctions.Get.Responses.$200,
  "auctions"
> & {
  auctions?: SkyBlockAuction[];
} & Record<string, unknown>;

export type SkyblockAuctionsEndedResponse = Paths.V2SkyblockAuctionsEnded.Get.Responses.$200 &
  Record<string, unknown> & {
    auctions: {
      auction_id: string;
      seller: string;
      seller_profile: string;
      buyer: string;
      buyer_profile: string;
      timestamp: number;
      price: number;
      bin: boolean;
      item_bytes: string;
    }[];
  };

export type SkyblockBazaarResponse = Paths.V2SkyblockBazaar.Get.Responses.$200 &
  Record<string, unknown> & {
    products: {
      /** the key is the product id, e.g. CHILI_PEPPER */
      [product_id: string]: {
        product_id: string;
        sell_summary: {
          amount: number;
          pricePerUnit: number;
          orders: number;
        }[];
        buy_summary: {
          amount: number;
          pricePerUnit: number;
          orders: number;
        }[];
        quick_status: {
          productId: string;
          sellPrice: number;
          sellVolume: number;
          sellMovingWeek: number;
          sellOrders: number;
          buyPrice: number;
          buyVolume: number;
          buyMovingWeek: number;
          buyOrders: number;
        };
      };
    };
  };

export type SkyblockProfileResponse = Omit<
  Paths.V2SkyblockProfile.Get.Responses.$200,
  "profile"
> &
  Record<string, unknown> & {
    profile: SkyBlockProfile;
  };

export type SkyblockProfilesResponse = Omit<
  Paths.V2SkyblockProfiles.Get.Responses.$200,
  "profiles"
> &
  Record<string, unknown> & {
    profiles: SkyBlockProfile[];
  };

export type SkyblockMuseumResponse = Omit<Paths.V2SkyblockMuseum.Get.Responses.$200, 'profile'> &
  Record<string, unknown> & {
    success?: true;
    members: {
      [key: string]: SkyBlockMuseumMember | undefined
    };
  };

export type SkyblockGardenResponse = Paths.V2SkyblockGarden.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockBingoResponse = Paths.V2SkyblockBingo.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockFiresalesResponse = Paths.V2SkyblockFiresales.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingActiveResponse = Paths.V2HousingActive.Get.Responses.$200;

export type HousingHouseResponse = Paths.V2HousingHouse.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingHousesResponse = Paths.V2HousingHouses.Get.Responses.$200;

export type MinecraftInventoryData = {
  type: number;
  data: string;
};
