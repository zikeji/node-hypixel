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

export type ResourcesSkyblockBingo = Paths.V2ResourcesSkyblockBingo.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockCollections = Paths.V2ResourcesSkyblockCollections.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockElection = Paths.V2ResourcesSkyblockElection.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockItems = Paths.V2ResourcesSkyblockItems.Get.Responses.$200 &
  Record<string, unknown>;

export type ResourcesSkyblockSkills = Paths.V2ResourcesSkyblockSkills.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockNews = Paths.V2SkyblockNews.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuction = Paths.V2SkyblockAuction.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuctions = Paths.V2SkyblockAuctions.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockAuctionsEnded = Paths.V2SkyblockAuctionsEnded.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockBazaar = Paths.V2SkyblockBazaar.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockProfile = Paths.V2SkyblockProfile.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockProfiles = Paths.V2SkyblockProfiles.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockMuseum = Paths.V2SkyblockMuseum.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockGarden = Paths.V2SkyblockGarden.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockBingo = Paths.V2SkyblockBingo.Get.Responses.$200 &
  Record<string, unknown>;

export type SkyblockFiresales = Paths.V2SkyblockFiresales.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingActive = Paths.V2HousingActive.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingHouse = Paths.V2HousingHouse.Get.Responses.$200 &
  Record<string, unknown>;

export type HousingHouses = Paths.V2HousingHouses.Get.Responses.$200 &
  Record<string, unknown>;
