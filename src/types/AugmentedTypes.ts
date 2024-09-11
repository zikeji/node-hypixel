/**
 * This file contains references to the generated types from api.ts as well as extensions to supplement their data.
 */

import { Paths } from "./api";

export type BoostersResponse = Paths.V2Boosters.Get.Responses.$200 &
  Record<string, unknown>;

export type CountsResponse = Paths.V2Counts.Get.Responses.$200 &
  Record<string, unknown>;

export type GuildResponse = Paths.V2Guild.Get.Responses.$200 &
  Record<string, unknown> & {
    guild: Record<string, unknown>;
  };

export type LeaderboardsResponse = Paths.V2Leaderboards.Get.Responses.$200 &
  Record<string, unknown>;

export type PlayerResponse = Paths.V2Player.Get.Responses.$200 &
  Record<string, unknown> & {
    player: {
      stats: {
        Bedwars: {
          [key: string]: unknown;
        };
        SkyWars: {
          [key: string]: unknown;
        };
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
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
      [key: string]: {
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
    };
  };

export type ResourcesSkyblockElectionResponse = Paths.V2ResourcesSkyblockElection.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockItemsResponse = Paths.V2ResourcesSkyblockItems.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockSkillsResponse = Paths.V2ResourcesSkyblockSkills.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockNewsResponse = Paths.V2SkyblockNews.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuctionResponse = Paths.V2SkyblockAuction.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuctionsResponse = Paths.V2SkyblockAuctions.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuctionsEndedResponse = Paths.V2SkyblockAuctionsEnded.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockBazaarResponse = Paths.V2SkyblockBazaar.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockProfileResponse = Paths.V2SkyblockProfile.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockProfilesResponse = Paths.V2SkyblockProfiles.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockMuseumResponse = Paths.V2SkyblockMuseum.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockGardenResponse = Paths.V2SkyblockGarden.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockBingoResponse = Paths.V2SkyblockBingo.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockFiresalesResponse = Paths.V2SkyblockFiresales.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingActiveResponse = Paths.V2HousingActive.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingHouseResponse = Paths.V2HousingHouse.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingHousesResponse = Paths.V2HousingHouses.Get.Responses.$200 &
  Record<string, unknown>;
