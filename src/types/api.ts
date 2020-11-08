export declare namespace Components {
  namespace Parameters {
    namespace ByGuildName {
      /**
       * example:
       * Mini Squid
       */
      export type ByName = string;
    }
    namespace ByUuid {
      /**
       * example:
       * 20934ef9488c465180a78f861586b4cf
       */
      export type ByUuid = string;
    }
    namespace PlayerUuid {
      /**
       * example:
       * 20934ef9488c465180a78f861586b4cf
       */
      export type Uuid = string;
    }
  }
  namespace Responses {
    export type MalformedUUID = Schemas.ApiError;
    export type MissingFields = Schemas.ApiError;
    export type RateLimitError = Schemas.ApiError;
    export type Unauthorized = Schemas.ApiError;
  }
  namespace Schemas {
    /**
     * The game mode's achievement data.
     */
    export interface AchievementGameModeData {
      /**
       * Any one off achievements, each property's key is the name used in data, and the proper name is stored in the "name" property.
       * All objects contain the name, points awarded, and description. Some contain a legacy boolean and others might contain percentage of who has unlocked them.
       *
       */
      one_time: {
        [name: string]: {
          name: string;
          description: string;
          points: number;
          secret?: boolean;
          legacy?: boolean;
          gamePercentUnlocked?: number;
          globalPercentUnlocked?: number;
        };
      };
      /**
       * Any tiered achievements, each property's key is the name used in data, and the proper name is stored in the "name" property.
       * All objects contain the name, description, and achievement tiers. Some contain a legacy boolean.
       * The achievement tiers array contains the points earned for each tier, and additional data.
       *
       */
      tiered: {
        [name: string]: {
          name: string;
          description: string;
          legacy?: boolean;
          tiers: {
            tier: number;
            points: number;
            amount: number;
          }[];
        };
      };
      /**
       * Total earnable achievement points in this game mode.
       */
      total_points: number;
      /**
       * Total earnable _legacy_ achievement points in this game mode.
       */
      total_legacy_points: number;
    }
    export interface AchievementsResourceResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      /**
       * SkyBlock version this resource applies to.
       */
      version: string;
      /**
       * Object describing each game mode's achievement data. The game mode is the object's key.
       */
      achievements: {
        [
          name: string
        ]: /* The game mode's achievement data. */ AchievementGameModeData;
        arcade: /* The game mode's achievement data. */ AchievementGameModeData;
        arena: /* The game mode's achievement data. */ AchievementGameModeData;
        bedwars: /* The game mode's achievement data. */ AchievementGameModeData;
        blitz: /* The game mode's achievement data. */ AchievementGameModeData;
        buildbattle: /* The game mode's achievement data. */ AchievementGameModeData;
        christmas2017: /* The game mode's achievement data. */ AchievementGameModeData;
        copsandcrims: /* The game mode's achievement data. */ AchievementGameModeData;
        duels: /* The game mode's achievement data. */ AchievementGameModeData;
        easter: /* The game mode's achievement data. */ AchievementGameModeData;
        general: /* The game mode's achievement data. */ AchievementGameModeData;
        gingerbread: /* The game mode's achievement data. */ AchievementGameModeData;
        halloween2017: /* The game mode's achievement data. */ AchievementGameModeData;
        housing: /* The game mode's achievement data. */ AchievementGameModeData;
        murdermystery: /* The game mode's achievement data. */ AchievementGameModeData;
        paintball: /* The game mode's achievement data. */ AchievementGameModeData;
        pit: /* The game mode's achievement data. */ AchievementGameModeData;
        quake: /* The game mode's achievement data. */ AchievementGameModeData;
        skyblock: /* The game mode's achievement data. */ AchievementGameModeData;
        skyclash: /* The game mode's achievement data. */ AchievementGameModeData;
        skywars: /* The game mode's achievement data. */ AchievementGameModeData;
        speeduhc: /* The game mode's achievement data. */ AchievementGameModeData;
        summer: /* The game mode's achievement data. */ AchievementGameModeData;
        supersmash: /* The game mode's achievement data. */ AchievementGameModeData;
        tntgames: /* The game mode's achievement data. */ AchievementGameModeData;
        truecombat: /* The game mode's achievement data. */ AchievementGameModeData;
        uhc: /* The game mode's achievement data. */ AchievementGameModeData;
        vampirez: /* The game mode's achievement data. */ AchievementGameModeData;
        walls: /* The game mode's achievement data. */ AchievementGameModeData;
        walls3: /* The game mode's achievement data. */ AchievementGameModeData;
        warlords: /* The game mode's achievement data. */ AchievementGameModeData;
      };
    }
    export interface ApiError {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Error message of the failure that resulted in `success: false`
       */
      cause: string;
    }
    export interface ApiSuccess {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
    }
    export interface LeaderboardDataEntry {
      path: string;
      prefix: string;
      title: string;
      location: string;
      count: number;
      leaders: (string | null)[];
    }
    export interface LeaderboardsResponse {
      leaderboards: {
        [name: string]: LeaderboardDataEntry[];
        ARENA: LeaderboardDataEntry[];
        MCGO: LeaderboardDataEntry[];
        BATTLEGROUND: LeaderboardDataEntry[];
        SURVIVAL_GAMES: LeaderboardDataEntry[];
        UHC: LeaderboardDataEntry[];
        WALLS: LeaderboardDataEntry[];
        PROTOTYPE: LeaderboardDataEntry[];
        PAINTBALL: LeaderboardDataEntry[];
        SKYWARS: LeaderboardDataEntry[];
        MURDER_MYSTERY: LeaderboardDataEntry[];
        SUPER_SMASH: LeaderboardDataEntry[];
        DUELS: LeaderboardDataEntry[];
        SPEED_UHC: LeaderboardDataEntry[];
        TNTGAMES: LeaderboardDataEntry[];
        BEDWARS: LeaderboardDataEntry[];
        GINGERBREAD: LeaderboardDataEntry[];
        BUILD_BATTLE: LeaderboardDataEntry[];
        ARCADE: LeaderboardDataEntry[];
        SKYCLASH: LeaderboardDataEntry[];
        QUAKECRAFT: LeaderboardDataEntry[];
        TRUE_COMBAT: LeaderboardDataEntry[];
        WALLS3: LeaderboardDataEntry[];
        VAMPIREZ: LeaderboardDataEntry[];
      };
    }
    export type NewsEntries = NewsEntry[];
    export interface NewsEntry {
      item: NewsEntryItem;
      link: string;
      text: string;
      title: string;
    }
    export interface NewsEntryItem {
      material: string;
      data?: number;
    }
    export interface NewsResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      items: NewsEntries;
    }
    export type Player = {
      [name: string]: boolean | number | string | unknown[] | unknown;
      _id: string;
      uuid: string;
      firstLogin: number;
      playername: string;
      displayname: string;
      knownAliases?: string[];
      knownAliasesLower?: string[];
      achievementsOneTime?: string[];
      rank?: string;
      parkourCheckpointBests?: {
        [name: string]: {
          [name: string]: number;
        };
      };
      achievementTracking?: string[];
      achievementPoints?: number;
      achievements?: {
        [name: string]: number;
      };
      karma?: number;
      networkExp?: number;
      giftingMeta?: {
        [name: string]: (unknown | null) | number | string[];
        realBundlesReceivedInc?: number;
        bundlesReceived?: number;
        realBundlesReceived?: number;
        giftsGiven?: number;
        bundlesGiven?: number;
        realBundlesGiven?: number;
        milestones?: string[];
      };
      friendRequestsUuid?: string[];
      cooldowns?: {
        fun?: {
          [name: string]: number;
        };
      };
      parkourCompletions?: {
        [name: string]: {
          timeStart: number;
          timeTook: number;
        }[];
      };
      newPackageRank?: string;
      userLanguage?: string;
      mcVersionRp?: string;
      achievementSync?: {
        [name: string]: number;
      };
      onetime_achievement_menu_sort?: string;
      housingMeta?: {
        packages?: string[];
      };
      settings?: {
        [name: string]: boolean | string | unknown;
        allowFriendRequests?: boolean;
        allowPartyRequests?: boolean;
        autoSpawnPet?: boolean;
        bloodVisibility?: boolean;
        chatVisibility?: boolean;
        lobbySpeed?: boolean;
        lobbyProtection?: boolean;
        petVisibility?: boolean;
        legacyCompass?: boolean;
        partyInvitePrivacy?: string;
        friendRequestPrivacy?: string;
        duelInvitePrivacy?: string;
        privateMessageSounds?: boolean;
      };
      challenges?: {
        all_time?: {
          [name: string]: number;
        };
      };
      socialMedia?: {
        [name: string]: string | boolean | unknown;
        TWITTER?: string;
        DISCORD?: string;
        links?: {
          [name: string]: string | unknown;
          HYPIXEL?: string;
          DISCORD?: string;
          TWITTER?: string;
        };
        prompt?: boolean;
      };
      vanityMeta?: {
        packages?: string[];
      };
      channel?: string;
      petStats?: {
        [name: string]: {
          HUNGER?: {
            timestamp: number;
            value: number;
          };
          THIRST?: {
            value: number;
            timestamp: number;
          };
          EXERCISE?: {
            timestamp: number;
            value: number;
          };
          experience?: number;
        };
      };
      petConsumables?: {
        [name: string]: number;
      };
      currentClickEffect?: string;
      tourney?: {
        first_join_lobby?: number;
        quake_solo2_0?: {
          games_played?: number;
          playtime?: number;
          first_game?: number;
          tributes_earned?: number;
        };
        total_tributes?: number;
      };
      onetime_achievement_menu_sort_completion_sort?: string;
      lastAdsenseGenerateTime?: number;
      voting?: {
        [name: string]: number;
      };
      currentGadget?: string;
      stats?: {
        Arcade?: {
          [name: string]: number | boolean | unknown;
          coins?: number;
        };
        SkyWars?: {
          packages?: string[];
          souls?: number;
        };
        GingerBread?: {
          [name: string]: string | number | unknown;
          coins?: number;
          packages?: string[];
        };
        MCGO?: {
          coins?: number;
        };
        TrueCombat?: {
          [name: string]: number | unknown;
          win_streak?: number;
          games?: number;
          deaths?: number;
          coins?: number;
          losses?: number;
          survived_players?: number;
          packages?: string[];
        };
        VampireZ?: {
          updated_stats?: boolean;
        };
        Quake?: {
          [name: string]: number | boolean | unknown;
          packages?: string[];
          alternative_gun_cooldown_indicator?: boolean;
          compass_selected?: boolean;
          enable_sound?: boolean;
          instantRespawn?: boolean;
          showDashCooldown?: boolean;
          highest_killstreak?: number;
          showKillPrefix?: boolean;
          kills?: number;
          headshots?: number;
          coins?: number;
          distance_travelled?: number;
          shots_fired?: number;
          deaths?: number;
        };
        Paintball?: {
          [name: string]: number | string | boolean | unknown;
          packages?: string[];
          kills?: number;
          wins?: number;
          coins?: number;
          shots_fired?: number;
          deaths?: number;
          showKillPrefix?: boolean;
          favorite_slots?: string;
        };
        Legacy?: {
          [name: string]: number | unknown;
          next_tokens_seconds?: number;
          quakecraft_tokens?: number;
          total_tokens?: number;
          tokens?: number;
          paintball_tokens?: number;
        };
        BuildBattle?: {
          [name: string]: number | unknown;
          wins_solo_normal?: number;
          wins?: number;
        };
        Bedwars?: {
          [name: string]: boolean | number | unknown;
          bedwars_boxes?: number;
          Experience?: number;
        };
        Pit?: {
          profile?: {
            renown?: number;
          };
        };
        SkyBlock?: {
          profiles?: {
            [name: string]: {
              profile_id?: string;
              cute_name?: string;
            };
          };
        };
        MurderMystery?: {
          [name: string]: number | unknown;
          murdermystery_books?: string[];
          detective_chance?: number;
          murderer_chance?: number;
          coins?: number;
          coins_pickedup?: number;
          coins_pickedup_MURDER_CLASSIC?: number;
          coins_pickedup_skyway_pier?: number;
          coins_pickedup_skyway_pier_MURDER_CLASSIC?: number;
          games?: number;
          games_MURDER_CLASSIC?: number;
          games_skyway_pier?: number;
          games_skyway_pier_MURDER_CLASSIC?: number;
          wins?: number;
          wins_MURDER_CLASSIC?: number;
          wins_skyway_pier?: number;
          wins_skyway_pier_MURDER_CLASSIC?: number;
        };
      };
      lastLogin?: number;
      lastLogout?: number;
      quickjoin_timestamp?: number;
      quickjoin_uses?: number;
      levelingReward_1?: boolean;
      network_update_book?: string;
      levelUp_VIP_PLUS?: number;
      achievementRewardsNew?: {
        [name: string]: number;
      };
      lastClaimedReward?: number;
      rewardHighScore?: number;
      rewardScore?: number;
      rewardStreak?: number;
      totalDailyRewards?: number;
      totalRewards?: number;
      eugene?: {
        [name: string]: number | unknown;
        dailyTwoKExp?: number;
      };
      levelUp_MVP_PLUS?: number;
      vanityFavorites?: string;
      monthlyPackageRank?: string;
      mostRecentMonthlyPackageRank?: string;
      currentPet?: string;
      quests?: {
        [name: string]: unknown;
      };
      rankPlusColor?: string;
      monthlycrates?: {
        [name: string]: {
          [name: string]: boolean | unknown;
          REGULAR?: boolean;
          VIP?: boolean;
          VIP_PLUS?: boolean;
          MVP?: boolean;
        };
      };
      monthlyRankColor?: string;
      adsense_tokens?: number;
      collectibles_menu_sort?: string;
      outfit?: {
        BOOTS?: string;
        CHESTPLATE?: string;
        LEGGINGS?: string;
        HELMET?: string;
      };
      petJourneyTimestamp?: number;
      mostRecentGameType?: string;
      timePlaying?: number;
      flashingSalePopup?: number;
      flashingSaleOpens?: number;
      flashingSalePoppedUp?: number;
      flashingSaleClicks?: number;
      fortuneBuff?: number;
      levelUp_VIP?: number;
      achievementTotem?: {
        [name: string]: boolean | number | string[] | unknown;
        canCustomize?: boolean;
        allowed_max_height?: number;
        unlockedParts?: string[];
        selectedParts?: {
          [name: string]: string;
        };
        unlockedColors?: string[];
        selectedColors?: {
          [name: string]: string;
        };
      };
      questSettings?: {
        [name: string]: boolean;
      };
      customFilter?: string;
      currentCloak?: string;
      auto_spawn_pet?: boolean;
      chat?: boolean;
      eulaCoins?: boolean;
      fireworkStorage?: {
        flight_duration?: number;
        shape?: string;
        trail?: boolean;
        twinkle?: boolean;
        colors?: string;
        fade_colors?: string;
        selected?: boolean;
      }[];
      guildNotifications?: boolean;
      mostRecentMinecraftVersion?: number;
      mostRecentlyThanked?: string;
      mostRecentlyThankedUuid?: string;
      mostRecentlyTipped?: string;
      mostRecentlyTippedUuid?: string;
      notifications?: boolean;
      packageRank?: string;
      seeRequests?: boolean;
      spectators_invisible?: boolean;
      thanksReceived?: number;
      thanksSent?: number;
      tournamentTokens?: number;
      wardrobe?: string;
      gadget?: string;
      friendInvisible?: boolean;
      reverted?: boolean;
      notifiedOfStuff?: boolean;
      petUpdate?: number;
      transformation?: string;
      coins?: number;
      rewardConsumed?: boolean;
      disableSendAll?: boolean;
      vanityCraftedBoxToday?: number;
      vanityFirstCraftedBox?: number;
      vanityFirstConvertedBox?: number;
      vanityConvertedBoxToday?: number;
      flashingNewsPopup?: string[];
      flashingNewsPoppedUp?: number;
      flashingNewsOpens?: number;
      compassStats?: {
        compass?: {
          skywars?: number;
          prototype?: number;
          battleground?: number;
        };
      };
      spec_first_person?: boolean;
      currentHat?: string;
      currentIp?: string;
      particlePack?: string;
      chatAlerts?: boolean;
      disguise?: string;
      prefix?: string;
      votesMissed?: number;
      buildTeam?: boolean;
      battlePassGlowStatus?: boolean;
      guildInvites?: string[];
    } | null;
    export interface PlayerResponse {
      player: Player;
    }
    export interface ResourcesResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      /**
       * SkyBlock version this resource applies to.
       */
      version: string;
    }
    export interface Session {
      /**
       * example:
       * true
       */
      online: boolean;
      /**
       * example:
       * SKYWARS
       */
      gameType?: string;
      /**
       * example:
       * ranked_normal
       */
      mode?: string;
      /**
       * example:
       * Agni Temple
       */
      map?: string;
    }
    export interface SkyBlockCollectionsResourcesResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      /**
       * SkyBlock version this resource applies to.
       */
      version: string;
      collections: /* Objects for each individual parent collection (currently FARMING, MINING, COMBAT, FORAGING, FISHING). */ SkyBlockResourcesParentCollections;
    }
    export interface SkyBlockResourcesCollection {
      /**
       * Name of the collection.
       */
      name: string;
      /**
       * The maximum tier of this collection.
       */
      maxTiers: number;
      tiers: /* Individual tier within the collection. */ SkyBlockResourcesCollectionTier[];
    }
    /**
     * Individual tier within the collection.
     */
    export interface SkyBlockResourcesCollectionTier {
      /**
       * The collection tier this applies to.
       */
      tier?: number;
      /**
       * The amount of the collection resource required to unlock this.
       */
      amountRequired?: number;
      /**
       * An array of strings describing the individual unlocks of this collection.
       */
      unlocks?: string[];
    }
    export interface SkyBlockResourcesParentCollection {
      /**
       * Name of the collection group.
       */
      name: string;
      /**
       * Objects for each individual collection within the parent (e.g. WHEAT, SAND).
       */
      items: {
        [name: string]: SkyBlockResourcesCollection;
      };
    }
    /**
     * Objects for each individual parent collection (currently FARMING, MINING, COMBAT, FORAGING, FISHING).
     */
    export interface SkyBlockResourcesParentCollections {
      [name: string]: SkyBlockResourcesParentCollection;
      FARMING: SkyBlockResourcesParentCollection;
      MINING: SkyBlockResourcesParentCollection;
      COMBAT: SkyBlockResourcesParentCollection;
      FORAGING: SkyBlockResourcesParentCollection;
      FISHING: SkyBlockResourcesParentCollection;
    }
    export interface SkyBlockResourcesSkill {
      /**
       * Name of the skill.
       */
      name: string;
      /**
       * Description for the skill.
       */
      description: string;
      /**
       * The max attainable level for the skill.
       */
      maxLevel: number;
      /**
       * Array of skills.
       */
      levels: SkyBlockResourcesSkillLevel[];
    }
    export interface SkyBlockResourcesSkillLevel {
      /**
       * The skill level this applies to.
       */
      level: number;
      /**
       * The amount of EXP required to reach this level.
       */
      totalExpRequired: number;
      /**
       * An array of strings describing what this skill unlocks.
       */
      unlocks: string[];
    }
    /**
     * Objects for each skill.
     */
    export interface SkyBlockResourcesSkills {
      [name: string]: SkyBlockResourcesSkill;
      FARMING: SkyBlockResourcesSkill;
      MINING: SkyBlockResourcesSkill;
      COMBAT: SkyBlockResourcesSkill;
      DUNGEONEERING: SkyBlockResourcesSkill;
      FORAGING: SkyBlockResourcesSkill;
      FISHING: SkyBlockResourcesSkill;
      ENCHANTING: SkyBlockResourcesSkill;
      ALCHEMY: SkyBlockResourcesSkill;
      CARPENTRY: SkyBlockResourcesSkill;
      RUNECRAFTING: SkyBlockResourcesSkill;
      TAMING: SkyBlockResourcesSkill;
    }
    export interface SkyBlockSkillsResourcesResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      /**
       * SkyBlock version this resource applies to.
       */
      version: string;
      collections: /* Objects for each skill. */ SkyBlockResourcesSkills;
    }
  }
}
export declare namespace Paths {
  namespace Boosters {
    namespace Get {
      namespace Responses {
        /**
         * example:
         * {
         *   "boosters": [
         *     {
         *       "_id": "5c197fadc8f245280926413d",
         *       "purchaserUuid": "978ddb705a8e43618e41749178c020b0",
         *       "amount": 2,
         *       "originalLength": 3600,
         *       "length": 3595,
         *       "gameType": 24,
         *       "stacked": true,
         *       "dateActivated": 1545244519133
         *     },
         *     {
         *       "_id": "5e8c92270cf287986cd00dbf",
         *       "purchaserUuid": "dfe1bb0a4220421486506ba487cdb530",
         *       "amount": 3,
         *       "originalLength": 3600,
         *       "length": 3600,
         *       "gameType": 23,
         *       "dateActivated": 1586351429371,
         *       "stacked": true
         *     },
         *     {
         *       "_id": "5fa1dc680cf24688841100c6",
         *       "purchaserUuid": "e1b2397ee9ef4809a312fc3ee2d4bdbd",
         *       "amount": 3,
         *       "originalLength": 3600,
         *       "length": 3393,
         *       "gameType": 20,
         *       "dateActivated": 1604443410659,
         *       "stacked": [
         *         "bf9afb33-c4ab-4eee-afa7-108403ba6532",
         *         "ef0e153b-d489-435d-b5f7-0e712c1a6bf9",
         *         "99e62635-bf44-4ca4-8fc4-380b1803bf57",
         *         "c3eeac1a-83df-4005-acc6-84eb940cbb53"
         *       ]
         *     },
         *     {
         *       "_id": "5fa1e1180cf2468884110118",
         *       "purchaserUuid": "7c90efd8d3724dfe9c4b5d7ff23b8691",
         *       "amount": 2,
         *       "originalLength": 3600,
         *       "length": 3600,
         *       "gameType": 20,
         *       "dateActivated": 1604444496616
         *     }
         *   ],
         *   "boosterState": {
         *     "decrementing": true
         *   }
         * }
         */
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          boosters: {
            _id: string;
            purchaserUuid: string;
            amount: number;
            originalLength: number;
            length: number;
            gameType: number;
            stacked?: boolean | string[];
            dateActivated: number;
          }[];
          boosterState: {
            decrementing: boolean;
          };
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace FindGuild {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * example:
           * 5985b1930cf28d110c2dac07
           */
          guild: string | null;
        }
        export type $400 = Components.Schemas.ApiError;
        export type $403 = Components.Responses.Unauthorized;
        export type $422 = Components.Responses.MalformedUUID;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Friends {
    namespace Get {
      namespace Responses {
        /**
         * example:
         * {
         *   "records": [
         *     {
         *       "_id": "5eb97d170cf22f431e8d6170",
         *       "uuidSender": "20934ef9488c465180a78f861586b4cf",
         *       "uuidReceiver": "7486aa03aca5470e888dde8a43eb8c10",
         *       "started": 1589214487454
         *     },
         *     {
         *       "_id": "5eb97d180cf22f431e8d6171",
         *       "uuidSender": "20934ef9488c465180a78f861586b4cf",
         *       "uuidReceiver": "9926753a434e4b46a07625993a07b8ef",
         *       "started": 1589214488015
         *     },
         *     {
         *       "_id": "5eb97d180cf22f431e8d6172",
         *       "uuidSender": "20934ef9488c465180a78f861586b4cf",
         *       "uuidReceiver": "b1f3957b2a1148298b55a9143548bbaa",
         *       "started": 1589214488334
         *     },
         *     {
         *       "_id": "5eb97d180cf22f431e8d6173",
         *       "uuidSender": "20934ef9488c465180a78f861586b4cf",
         *       "uuidReceiver": "4f9fceb6b17144058c6ef9ba4cfe3805",
         *       "started": 1589214488791
         *     }
         *   ]
         * }
         */
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          records: {
            _id: string;
            uuidSender: string;
            uuidReceiver: string;
            started: number;
          }[];
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $422 = Components.Responses.MalformedUUID;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace GameCounts {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * Total players on the network
           * example:
           * 77238
           */
          playerCount: number;
          /**
           * example:
           * {
           *   "MAIN_LOBBY": {
           *     "players": 400
           *   },
           *   "TOURNAMENT_LOBBY": {
           *     "players": 7
           *   },
           *   "UHC": {
           *     "players": 796,
           *     "modes": {
           *       "TEAMS": 399,
           *       "SOLO": 331
           *     }
           *   },
           *   "SUPER_SMASH": {
           *     "players": 91,
           *     "modes": {
           *       "1v1_normal": 7,
           *       "friends_normal": 4,
           *       "solo_normal": 11,
           *       "2v2_normal": 32,
           *       "teams_normal": 8
           *     }
           *   },
           *   "LEGACY": {
           *     "players": 308,
           *     "modes": {
           *       "QUAKECRAFT": 18,
           *       "WALLS": 83,
           *       "VAMPIREZ": 95,
           *       "ARENA": 8,
           *       "PAINTBALL": 37,
           *       "GINGERBREAD": 19
           *     }
           *   },
           *   "BUILD_BATTLE": {
           *     "players": 1329,
           *     "modes": {
           *       "BUILD_BATTLE_HALLOWEEN": 32,
           *       "BUILD_BATTLE_SOLO_NORMAL_LATEST": 256,
           *       "BUILD_BATTLE_GUESS_THE_BUILD": 150,
           *       "BUILD_BATTLE_TEAMS_NORMAL": 478,
           *       "BUILD_BATTLE_SOLO_NORMAL": 171,
           *       "BUILD_BATTLE_SOLO_PRO": 81
           *     }
           *   },
           *   "BATTLEGROUND": {
           *     "players": 80,
           *     "modes": {
           *       "ctf_mini": 60,
           *       "domination": 1,
           *       "team_deathmatch": 5
           *     }
           *   },
           *   "WALLS3": {
           *     "players": 290,
           *     "modes": {
           *       "standard": 261,
           *       "face_off": 5
           *     }
           *   },
           *   "HOUSING": {
           *     "players": 3511
           *   },
           *   "SPEED_UHC": {
           *     "players": 43,
           *     "modes": {
           *       "team_normal": 18,
           *       "solo_normal": 25
           *     }
           *   },
           *   "DUELS": {
           *     "players": 5745,
           *     "modes": {
           *       "DUELS_BOWSPLEEF_DUEL": 61,
           *       "DUELS_BRIDGE_2V2V2V2": 12,
           *       "DUELS_BOW_DUEL": 40,
           *       "DUELS_UHC_FOUR": 91,
           *       "DUELS_MW_DUEL": 44,
           *       "DUELS_UHC_MEETUP": 78,
           *       "DUELS_BRIDGE_DOUBLES": 287,
           *       "DUELS_SW_DOUBLES": 224,
           *       "DUELS_UHC_DOUBLES": 114,
           *       "DUELS_BRIDGE_FOUR": 94,
           *       "DUELS_BRIDGE_3V3V3V3": 39,
           *       "DUELS_SUMO_DUEL": 184,
           *       "DUELS_UHC_DUEL": 583,
           *       "DUELS_OP_DOUBLES": 48,
           *       "DUELS_OP_DUEL": 132,
           *       "DUELS_MW_DOUBLES": 4,
           *       "DUELS_BLITZ_DUEL": 118,
           *       "DUELS_POTION_DUEL": 26,
           *       "DUELS_CLASSIC_DUEL": 430,
           *       "DUELS_COMBO_DUEL": 48,
           *       "DUELS_BRIDGE_DUEL": 1443,
           *       "DUELS_SW_DUEL": 616
           *     }
           *   },
           *   "REPLAY": {
           *     "players": 18,
           *     "modes": {
           *       "BASE": 18
           *     }
           *   },
           *   "SURVIVAL_GAMES": {
           *     "players": 390,
           *     "modes": {
           *       "solo_normal": 171,
           *       "teams_normal": 154
           *     }
           *   },
           *   "PROTOTYPE": {
           *     "players": 527,
           *     "modes": {
           *       "TOWERWARS_SOLO": 33,
           *       "TOWERWARS_TEAM_OF_TWO": 33
           *     }
           *   },
           *   "MURDER_MYSTERY": {
           *     "players": 1416,
           *     "modes": {
           *       "MURDER_DOUBLE_UP": 360,
           *       "MURDER_INFECTION": 120,
           *       "MURDER_ASSASSINS": 129,
           *       "MURDER_CLASSIC": 627
           *     }
           *   },
           *   "MCGO": {
           *     "players": 147,
           *     "modes": {
           *       "normal": 84,
           *       "normal_party": 8,
           *       "deathmatch": 35
           *     }
           *   },
           *   "BEDWARS": {
           *     "players": 23917,
           *     "modes": {
           *       "BEDWARS_TWO_FOUR": 788,
           *       "BEDWARS_FOUR_THREE": 4052,
           *       "BEDWARS_FOUR_FOUR_RUSH": 3,
           *       "BEDWARS_FOUR_FOUR_LUCKY": 18,
           *       "BEDWARS_EIGHT_ONE": 2525,
           *       "BEDWARS_EIGHT_TWO_VOIDLESS": 7,
           *       "BEDWARS_EIGHT_TWO_RUSH": 10,
           *       "BEDWARS_FOUR_FOUR_ARMED": 858,
           *       "BEDWARS_EIGHT_TWO_ARMED": 642,
           *       "BEDWARS_FOUR_FOUR": 5090,
           *       "BEDWARS_EIGHT_TWO": 6784,
           *       "BEDWARS_EIGHT_TWO_LUCKY": 35
           *     }
           *   },
           *   "SKYBLOCK": {
           *     "players": 33850,
           *     "modes": {
           *       "combat_1": 533,
           *       "dungeon_hub": 1022,
           *       "foraging_1": 794,
           *       "hub": 9291,
           *       "mining_2": 1111,
           *       "dungeon": 2823,
           *       "combat_2": 383,
           *       "farming_2": 186,
           *       "mining_1": 351,
           *       "farming_1": 169,
           *       "combat_3": 1641,
           *       "dynamic": 15547
           *     }
           *   },
           *   "ARCADE": {
           *     "players": 2665,
           *     "modes": {
           *       "PARTY": 583,
           *       "HOLE_IN_THE_WALL": 20,
           *       "DEFENDER": 44,
           *       "MINI_WALLS": 121,
           *       "SIMON_SAYS": 78,
           *       "ZOMBIES_BAD_BLOOD": 23,
           *       "HIDE_AND_SEEK_PARTY_POOPER": 48,
           *       "DAYONE": 133,
           *       "DRAW_THEIR_THING": 54,
           *       "ZOMBIES_ALIEN_ARCADIUM": 117,
           *       "ONEINTHEQUIVER": 49,
           *       "SOCCER": 37,
           *       "PVP_CTW": 380,
           *       "THROW_OUT": 14,
           *       "ENDER": 25,
           *       "STARWARS": 51,
           *       "HALLOWEEN_SIMULATOR": 92,
           *       "DRAGONWARS2": 20,
           *       "ZOMBIES_DEAD_END": 244,
           *       "HIDE_AND_SEEK_PROP_HUNT": 86,
           *       "FARM_HUNT": 93
           *     }
           *   },
           *   "PIT": {
           *     "players": 974,
           *     "modes": {
           *       "PIT": 974
           *     }
           *   },
           *   "TNTGAMES": {
           *     "players": 948,
           *     "modes": {
           *       "PVPRUN": 26,
           *       "TNTAG": 467,
           *       "TNTRUN": 246,
           *       "BOWSPLEEF": 64,
           *       "CAPTURE": 39
           *     }
           *   },
           *   "SKYWARS": {
           *     "players": 6287,
           *     "modes": {
           *       "solo_insane_lucky": 233,
           *       "solo_insane_slime": 10,
           *       "teams_insane_lucky": 160,
           *       "solo_normal": 1416,
           *       "teams_insane": 607,
           *       "solo_insane_hunters_vs_beasts": 2,
           *       "ranked_normal": 264,
           *       "solo_insane_tnt_madness": 87,
           *       "mega_doubles": 8,
           *       "solo_insane": 1810,
           *       "teams_insane_tnt_madness": 3,
           *       "teams_normal": 631,
           *       "mega_normal": 89
           *     }
           *   },
           *   "LIMBO": {
           *     "players": 153
           *   },
           *   "IDLE": {
           *     "players": 8475
           *   },
           *   "QUEUE": {
           *     "players": 0
           *   }
           * }
           */
          games: {
            [name: string]: {
              players: number;
              modes?: {
                [name: string]: number;
              };
            };
            MAIN_LOBBY: {
              players: number;
            };
            TOURNAMENT_LOBBY: {
              players: number;
            };
            UHC: {
              players: number;
              modes: {
                [name: string]: number;
                TEAMS: number;
                SOLO: number;
              };
            };
            SUPER_SMASH: {
              players: number;
              modes: {
                [name: string]: number;
                $1v1_normal: number;
                friends_normal: number;
                solo_normal: number;
                $2v2_normal: number;
                teams_normal: number;
              };
            };
            LEGACY: {
              players: number;
              modes: {
                [name: string]: number;
                QUAKECRAFT: number;
                WALLS: number;
                VAMPIREZ: number;
                ARENA: number;
                PAINTBALL: number;
                GINGERBREAD: number;
              };
            };
            BUILD_BATTLE: {
              players: number;
              modes: {
                [name: string]: number;
                BUILD_BATTLE_SOLO_NORMAL_LATEST: number;
                BUILD_BATTLE_GUESS_THE_BUILD: number;
                BUILD_BATTLE_TEAMS_NORMAL: number;
                BUILD_BATTLE_SOLO_NORMAL: number;
                BUILD_BATTLE_SOLO_PRO: number;
              };
            };
            BATTLEGROUND: {
              players: number;
              modes: {
                [name: string]: number;
                ctf_mini: number;
                domination: number;
                team_deathmatch: number;
              };
            };
            WALLS3: {
              players: number;
              modes: {
                [name: string]: number;
                standard: number;
                face_off: number;
              };
            };
            HOUSING: {
              players: number;
            };
            SPEED_UHC: {
              players: number;
              modes: {
                [name: string]: number;
                team_normal: number;
                solo_normal: number;
              };
            };
            DUELS: {
              players: number;
              modes: {
                [name: string]: number;
                DUELS_BOWSPLEEF_DUEL: number;
                DUELS_BRIDGE_2V2V2V2: number;
                DUELS_BOW_DUEL: number;
                DUELS_UHC_FOUR: number;
                DUELS_MW_DUEL: number;
                DUELS_UHC_MEETUP: number;
                DUELS_BRIDGE_DOUBLES: number;
                DUELS_SW_DOUBLES: number;
                DUELS_UHC_DOUBLES: number;
                DUELS_BRIDGE_FOUR: number;
                DUELS_BRIDGE_3V3V3V3: number;
                DUELS_SUMO_DUEL: number;
                DUELS_UHC_DUEL: number;
                DUELS_OP_DOUBLES: number;
                DUELS_OP_DUEL: number;
                DUELS_MW_DOUBLES: number;
                DUELS_BLITZ_DUEL: number;
                DUELS_POTION_DUEL: number;
                DUELS_CLASSIC_DUEL: number;
                DUELS_COMBO_DUEL: number;
                DUELS_BRIDGE_DUEL: number;
                DUELS_SW_DUEL: number;
              };
            };
            REPLAY: {
              players: number;
              modes: {
                [name: string]: number;
                BASE: number;
              };
            };
            SURVIVAL_GAMES: {
              players: number;
              modes: {
                [name: string]: number;
                solo_normal: number;
                teams_normal: number;
              };
            };
            PROTOTYPE: {
              players: number;
              modes: {
                TOWERWARS_SOLO: number;
                TOWERWARS_TEAM_OF_TWO: number;
              };
            };
            MURDER_MYSTERY: {
              players: number;
              modes: {
                [name: string]: number;
                MURDER_DOUBLE_UP: number;
                MURDER_INFECTION: number;
                MURDER_ASSASSINS: number;
                MURDER_CLASSIC: number;
              };
            };
            MCGO: {
              players: number;
              modes: {
                [name: string]: number;
                normal: number;
                normal_party: number;
                deathmatch: number;
              };
            };
            BEDWARS: {
              players: number;
              modes: {
                [name: string]: number;
                BEDWARS_TWO_FOUR: number;
                BEDWARS_FOUR_THREE: number;
                BEDWARS_FOUR_FOUR_RUSH: number;
                BEDWARS_FOUR_FOUR_LUCKY: number;
                BEDWARS_EIGHT_ONE: number;
                BEDWARS_EIGHT_TWO_VOIDLESS: number;
                BEDWARS_EIGHT_TWO_RUSH: number;
                BEDWARS_FOUR_FOUR_ARMED: number;
                BEDWARS_EIGHT_TWO_ARMED: number;
                BEDWARS_FOUR_FOUR: number;
                BEDWARS_EIGHT_TWO: number;
                BEDWARS_EIGHT_TWO_LUCKY: number;
              };
            };
            SKYBLOCK: {
              players: number;
              modes: {
                [name: string]: number;
                combat_1: number;
                dungeon_hub: number;
                foraging_1: number;
                hub: number;
                mining_2: number;
                dungeon: number;
                combat_2: number;
                farming_2: number;
                mining_1: number;
                farming_1: number;
                combat_3: number;
                dynamic: number;
              };
            };
            ARCADE: {
              players: number;
              modes: {
                [name: string]: number;
                PARTY: number;
                HOLE_IN_THE_WALL: number;
                DEFENDER: number;
                MINI_WALLS: number;
                SIMON_SAYS: number;
                ZOMBIES_BAD_BLOOD: number;
                HIDE_AND_SEEK_PARTY_POOPER: number;
                DAYONE: number;
                DRAW_THEIR_THING: number;
                ZOMBIES_ALIEN_ARCADIUM: number;
                ONEINTHEQUIVER: number;
                SOCCER: number;
                PVP_CTW: number;
                THROW_OUT: number;
                ENDER: number;
                STARWARS: number;
                HALLOWEEN_SIMULATOR: number;
                DRAGONWARS2: number;
                ZOMBIES_DEAD_END: number;
                HIDE_AND_SEEK_PROP_HUNT: number;
                FARM_HUNT: number;
              };
            };
            PIT: {
              players: number;
              modes: {
                PIT: number;
              };
            };
            TNTGAMES: {
              players: number;
              modes: {
                [name: string]: number;
                PVPRUN: number;
                TNTAG: number;
                TNTRUN: number;
                BOWSPLEEF: number;
                CAPTURE: number;
              };
            };
            SKYWARS: {
              players: number;
              modes: {
                [name: string]: number;
                solo_insane_lucky: number;
                solo_insane_slime: number;
                teams_insane_lucky: number;
                solo_normal: number;
                teams_insane: number;
                solo_insane_hunters_vs_beasts: number;
                ranked_normal: number;
                solo_insane_tnt_madness: number;
                mega_doubles: number;
                solo_insane: number;
                teams_insane_tnt_madness: number;
                teams_normal: number;
                mega_normal: number;
              };
            };
            LIMBO: {
              players: number;
            };
            IDLE: {
              players: number;
            };
            QUEUE: {
              players: number;
            };
          };
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Guild {
    namespace Get {
      namespace Parameters {
        /**
         * example:
         * 553490650cf26f12ae5bac8f
         */
        export type Id = string;
        /**
         * example:
         * Mini Squid
         */
        export type Name = string;
        /**
         * example:
         * 20934ef9488c465180a78f861586b4cf
         */
        export type Player = string;
      }
      export interface QueryParameters {
        id?: /**
         * example:
         * 553490650cf26f12ae5bac8f
         */
        Parameters.Id;
        player?: /**
         * example:
         * 20934ef9488c465180a78f861586b4cf
         */
        Parameters.Player;
        name?: /**
         * example:
         * Mini Squid
         */
        Parameters.Name;
      }
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * example:
           * {
           *   "guild": {
           *     "_id": "553490650cf26f12ae5bac8f",
           *     "name": "Mini Squid",
           *     "coins": 425310,
           *     "coinsEver": 1835310,
           *     "created": 1429508197967,
           *     "members": [
           *       {
           *         "uuid": "20934ef9488c465180a78f861586b4cf",
           *         "rank": "GUILDMASTER",
           *         "joined": 1429508197967,
           *         "questParticipation": 139,
           *         "expHistory": {
           *           "2020-11-06": 2226,
           *           "2020-11-05": 0,
           *           "2020-11-04": 4059,
           *           "2020-11-03": 0,
           *           "2020-11-02": 1102,
           *           "2020-11-01": 0,
           *           "2020-10-31": 0
           *         }
           *       },
           *       {
           *         "uuid": "6a12d6f63e134c8bbebc70d90a797281",
           *         "rank": "Famous",
           *         "joined": 1518021755919,
           *         "questParticipation": 325,
           *         "expHistory": {
           *           "2020-11-06": 0,
           *           "2020-11-05": 0,
           *           "2020-11-04": 0,
           *           "2020-11-03": 2399,
           *           "2020-11-02": 758,
           *           "2020-11-01": 4309,
           *           "2020-10-31": 740
           *         }
           *       },
           *       {
           *         "uuid": "a99d9661fe2d4594a6b3d910c85cc4a4",
           *         "rank": "MEMBER",
           *         "joined": 1530770040736,
           *         "questParticipation": 800,
           *         "expHistory": {
           *           "2020-11-06": 0,
           *           "2020-11-05": 0,
           *           "2020-11-04": 0,
           *           "2020-11-03": 0,
           *           "2020-11-02": 0,
           *           "2020-11-01": 0,
           *           "2020-10-31": 0
           *         }
           *       },
           *       {
           *         "uuid": "8a8bcd44c2034281a008ff7a1e0ead2f",
           *         "rank": "MEMBER",
           *         "joined": 1532204533230,
           *         "questParticipation": 634,
           *         "expHistory": {
           *           "2020-11-06": 0,
           *           "2020-11-05": 0,
           *           "2020-11-04": 0,
           *           "2020-11-03": 0,
           *           "2020-11-02": 0,
           *           "2020-11-01": 0,
           *           "2020-10-31": 0
           *         }
           *       }
           *     ],
           *     "tag": "§a1§e2§c3§7",
           *     "banner": {
           *       "Base": 15,
           *       "Patterns": [
           *         {
           *           "Pattern": "bo",
           *           "Color": 9
           *         },
           *         {
           *           "Pattern": "bri",
           *           "Color": 5
           *         }
           *       ]
           *     },
           *     "achievements": {
           *       "WINNERS": 1080,
           *       "EXPERIENCE_KINGS": 316804,
           *       "ONLINE_PLAYERS": 125
           *     },
           *     "exp": 274641340,
           *     "legacyRanking": 2891,
           *     "ranks": [
           *       {
           *         "name": "Famous",
           *         "default": false,
           *         "tag": "F",
           *         "created": 1562382958149,
           *         "priority": 3
           *       },
           *       {
           *         "name": "Member",
           *         "default": true,
           *         "tag": null,
           *         "created": 1562383012859,
           *         "priority": 2
           *       },
           *       {
           *         "name": "Big Nerd",
           *         "default": false,
           *         "tag": "B",
           *         "created": 1588882422793,
           *         "priority": 7
           *       },
           *       {
           *         "name": "Notorious Nerd",
           *         "default": false,
           *         "tag": "NERD",
           *         "created": 1588882818050,
           *         "priority": 5
           *       }
           *     ],
           *     "name_lower": "mini squid",
           *     "chatMute": 0,
           *     "preferredGames": [
           *       "SKYWARS"
           *     ],
           *     "publiclyListed": true,
           *     "tagColor": "GRAY",
           *     "guildExpByGameType": {
           *       "DUELS": 25270418,
           *       "BUILD_BATTLE": 10772932,
           *       "HOUSING": 22601152,
           *       "GINGERBREAD": 888064,
           *       "SURVIVAL_GAMES": 3504037,
           *       "WALLS": 1472671,
           *       "TNTGAMES": 7419981,
           *       "QUAKECRAFT": 857167,
           *       "MCGO": 1245579,
           *       "ARENA": 300356,
           *       "VAMPIREZ": 1497562,
           *       "BEDWARS": 127334623,
           *       "SKYWARS": 111325349,
           *       "MURDER_MYSTERY": 8704331,
           *       "SUPER_SMASH": 308906,
           *       "SPEED_UHC": 311651,
           *       "PIT": 0,
           *       "SKYBLOCK": 0,
           *       "BATTLEGROUND": 897997,
           *       "UHC": 12670118,
           *       "ARCADE": 10589782,
           *       "PROTOTYPE": 206060467,
           *       "LEGACY": 0,
           *       "REPLAY": 0,
           *       "WALLS3": 3467841,
           *       "PAINTBALL": 429708
           *     }
           *   }
           * }
           */
          guild: {
            _id: string;
            name: string;
            coins: number;
            coinsEver: number;
            created: number;
            members: {
              uuid: string;
              rank: string;
              joined: number;
              questParticipation?: number;
              expHistory: {
                [name: string]: number;
              };
              mutedTill?: number;
            }[];
            tag: string;
            banner?: {
              Base: number | string;
              Patterns: {
                Pattern: string;
                Color: number | string;
              }[];
            };
            achievements: {
              WINNERS: number;
              EXPERIENCE_KINGS: number;
              ONLINE_PLAYERS: number;
            };
            exp: number;
            legacyRanking?: number;
            ranks: {
              name: string;
              default: boolean;
              tag: string | null;
              created: number;
              priority: number;
            }[];
            name_lower: string;
            chatMute?: number;
            preferredGames?: string[];
            publiclyListed: boolean;
            tagColor: string;
            guildExpByGameType: {
              DUELS: number;
              BUILD_BATTLE: number;
              HOUSING: number;
              GINGERBREAD: number;
              SURVIVAL_GAMES: number;
              WALLS: number;
              TNTGAMES: number;
              QUAKECRAFT: number;
              MCGO: number;
              ARENA: number;
              VAMPIREZ: number;
              BEDWARS: number;
              SKYWARS: number;
              MURDER_MYSTERY: number;
              SUPER_SMASH: number;
              SPEED_UHC: number;
              PIT: number;
              SKYBLOCK: number;
              BATTLEGROUND: number;
              UHC: number;
              ARCADE: number;
              PROTOTYPE: number;
              LEGACY: number;
              REPLAY: number;
              WALLS3: number;
              PAINTBALL: number;
            };
            joinable?: boolean;
            description?: string;
          } | null;
        }
        export type $400 = Components.Schemas.ApiError;
        export type $403 = Components.Responses.Unauthorized;
        export type $422 = Components.Schemas.ApiError;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Key {
    namespace Get {
      namespace Responses {
        /**
         * example:
         * {
         *   "record": {
         *     "key": "00000000-0000-0000-0000-000000000000",
         *     "owner": "20934ef9-488c-4651-80a7-8f861586b4cf",
         *     "limit": 120,
         *     "queriesInPastMin": 12,
         *     "totalQueries": 1234
         *   }
         * }
         */
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          record: {
            key: string;
            owner: string;
            limit: number;
            queriesInPastMin: number;
            totalQueries: number;
          };
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Leaderboards {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          leaderboards: {
            [name: string]: Components.Schemas.LeaderboardDataEntry[];
            ARENA: Components.Schemas.LeaderboardDataEntry[];
            MCGO: Components.Schemas.LeaderboardDataEntry[];
            BATTLEGROUND: Components.Schemas.LeaderboardDataEntry[];
            SURVIVAL_GAMES: Components.Schemas.LeaderboardDataEntry[];
            UHC: Components.Schemas.LeaderboardDataEntry[];
            WALLS: Components.Schemas.LeaderboardDataEntry[];
            PROTOTYPE: Components.Schemas.LeaderboardDataEntry[];
            PAINTBALL: Components.Schemas.LeaderboardDataEntry[];
            SKYWARS: Components.Schemas.LeaderboardDataEntry[];
            MURDER_MYSTERY: Components.Schemas.LeaderboardDataEntry[];
            SUPER_SMASH: Components.Schemas.LeaderboardDataEntry[];
            DUELS: Components.Schemas.LeaderboardDataEntry[];
            SPEED_UHC: Components.Schemas.LeaderboardDataEntry[];
            TNTGAMES: Components.Schemas.LeaderboardDataEntry[];
            BEDWARS: Components.Schemas.LeaderboardDataEntry[];
            GINGERBREAD: Components.Schemas.LeaderboardDataEntry[];
            BUILD_BATTLE: Components.Schemas.LeaderboardDataEntry[];
            ARCADE: Components.Schemas.LeaderboardDataEntry[];
            SKYCLASH: Components.Schemas.LeaderboardDataEntry[];
            QUAKECRAFT: Components.Schemas.LeaderboardDataEntry[];
            TRUE_COMBAT: Components.Schemas.LeaderboardDataEntry[];
            WALLS3: Components.Schemas.LeaderboardDataEntry[];
            VAMPIREZ: Components.Schemas.LeaderboardDataEntry[];
          };
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Player {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          player: Components.Schemas.Player;
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace PlayerCount {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * Total players on the network
           * example:
           * 75612
           */
          playerCount: number;
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace RecentGames {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * Watchdog's bans in the last minute.
           */
          games: {
            /**
             * example:
             * 1590850836485
             */
            date: number;
            /**
             * example:
             * BEDWARS
             */
            gameType: string;
            /**
             * example:
             * FOUR_FOUR
             */
            mode: string;
            /**
             * example:
             * Dreamgrove
             */
            map: string;
            /**
             * example:
             * 1590850919917
             */
            ended?: number;
          }[];
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $422 = Components.Responses.MalformedUUID;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace ResourcesAchievements {
    namespace Get {
      namespace Responses {
        /**
         * example:
         * {
         *   "example": {
         *     "success": true,
         *     "lastUpdated": 1604706817946,
         *     "achievements": {
         *       "arcade": {
         *         "one_time": {
         *           "CREEPER_ATTACK_SURVIVAL": {
         *             "points": 10,
         *             "name": "Creeper Attack: Creeeep",
         *             "description": "Survive Creeper Attack without dying",
         *             "gamePercentUnlocked": 7.016806390981579,
         *             "globalPercentUnlocked": 3.194439338105325
         *           }
         *         },
         *         "tiered": {
         *           "ZOMBIES_NICE_SHOT": {
         *             "name": "Zombies: Nice Shot",
         *             "description": "Get %s zombie kills",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 1000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 2500
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1600,
         *         "total_legacy_points": 5
         *       },
         *       "arena": {
         *         "one_time": {
         *           "MY_NEW_HAT": {
         *             "points": 5,
         *             "name": "My New Hat",
         *             "description": "Win wearing an Epic hat",
         *             "gamePercentUnlocked": 0.40878630320523257,
         *             "globalPercentUnlocked": 0.03239382978262079
         *           }
         *         },
         *         "tiered": {
         *           "POWERUP": {
         *             "name": "Powerup!",
         *             "description": "Activate %s powerups",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 250
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 500
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 710,
         *         "total_legacy_points": 0
         *       },
         *       "bedwars": {
         *         "one_time": {
         *           "IRON_PUNCH": {
         *             "points": 5,
         *             "name": "Iron Punch",
         *             "description": "Get a kill with an Iron Golem",
         *             "gamePercentUnlocked": 18.516916616446323,
         *             "globalPercentUnlocked": 11.081223315450147
         *           }
         *         },
         *         "tiered": {
         *           "COLLECTORS_EDITION": {
         *             "name": "Collectors Edition",
         *             "description": "Collect %s wool from enemy teams",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 795,
         *         "total_legacy_points": 0
         *       },
         *       "blitz": {
         *         "one_time": {
         *           "DONKEYTAMER_MASTER": {
         *             "points": 10,
         *             "name": "Donkeytamer Master",
         *             "description": "Max out the Donkeytamer Kit",
         *             "gamePercentUnlocked": 0.01,
         *             "globalPercentUnlocked": 0.01
         *           }
         *         },
         *         "tiered": {
         *           "KIT_COLLECTOR": {
         *             "name": "Kit Collector",
         *             "description": "Unlock %s Advanced or Ultimate kits",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 1
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 15
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1650,
         *         "total_legacy_points": 0
         *       },
         *       "buildbattle": {
         *         "one_time": {
         *           "GUESSING_STREAK": {
         *             "points": 5,
         *             "name": "Guessing Streak",
         *             "description": "Guess every theme correctly in Guess the Build",
         *             "gamePercentUnlocked": 5.4412406051235,
         *             "globalPercentUnlocked": 1.8679243815594853
         *           }
         *         },
         *         "tiered": {
         *           "BUILD_BATTLE_VOTER": {
         *             "name": "Judge",
         *             "description": "Vote on %s builds in Build Battle",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 40
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 200
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 1000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 560,
         *         "total_legacy_points": 0
         *       },
         *       "christmas2017": {
         *         "one_time": {
         *           "GREED_INCARNATE": {
         *             "points": 15,
         *             "name": "Greed Incarnate",
         *             "description": "Steal 42 presents in a single game of Grinch Simulator",
         *             "globalPercentUnlocked": 0.21662858123274253
         *           }
         *         },
         *         "tiered": {
         *           "SECRET_SANTA": {
         *             "name": "Secret Santa",
         *             "description": "Fill %s stockings in Santa Simulator",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 60
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 150
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 660,
         *         "total_legacy_points": 200
         *       },
         *       "copsandcrims": {
         *         "one_time": {
         *           "OH_BABY_A_TRIPLE": {
         *             "points": 15,
         *             "name": "A Player's Nightmare",
         *             "description": "Get a double kill using a grenade",
         *             "gamePercentUnlocked": 0.307022864814434,
         *             "globalPercentUnlocked": 0.06307310800708539
         *           }
         *         },
         *         "tiered": {
         *           "CAC_BANKER": {
         *             "name": "Bounty Collector",
         *             "description": "Earn %s Coins",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10000
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 50000
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 965,
         *         "total_legacy_points": 0
         *       },
         *       "duels": {
         *         "one_time": {
         *           "GONE_FISHING": {
         *             "points": 5,
         *             "name": "Gone Fishing",
         *             "description": "Catch a fish",
         *             "gamePercentUnlocked": 0.8309436623932128,
         *             "globalPercentUnlocked": 0.27000946479595545
         *           }
         *         },
         *         "tiered": {
         *           "DUELS_DIVISION": {
         *             "name": "Climbing the Ranks",
         *             "description": "Achieve %s Title in any mode",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 1
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 2
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 3
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 4
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1200,
         *         "total_legacy_points": 110
         *       },
         *       "easter": {
         *         "one_time": {
         *           "ALL_EGGS_2019": {
         *             "points": 30,
         *             "name": "Egghunter (2019)",
         *             "description": "Find all easter eggs in the Main Lobby",
         *             "legacy": true
         *           }
         *         },
         *         "tiered": {
         *           "THROW_EGGS": {
         *             "name": "Egg Thrower",
         *             "description": "Throw %s eggs",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 8
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 32
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 128
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 512
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 430,
         *         "total_legacy_points": 40
         *       },
         *       "general": {
         *         "one_time": {
         *           "YOUTUBER": {
         *             "points": 10,
         *             "name": "EEEEKK!",
         *             "description": "Be in the same lobby as a YouTuber",
         *             "globalPercentUnlocked": 62.84929127155385
         *           }
         *         },
         *         "tiered": {
         *           "CHALLENGER": {
         *             "name": "Challenger",
         *             "description": "Complete a total of %s challenges",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 410,
         *         "total_legacy_points": 0
         *       },
         *       "gingerbread": {
         *         "one_time": {
         *           "IS_THIS_SURVIVAL_GAMES": {
         *             "points": 5,
         *             "name": "Is this Survival Games?",
         *             "description": "Hit 5 players with the \"Notched Sword\" in 1 race",
         *             "gamePercentUnlocked": 1.1200450672852627,
         *             "globalPercentUnlocked": 0.12229878588538734
         *           }
         *         },
         *         "tiered": {
         *           "WINNER": {
         *             "name": "Medalist",
         *             "description": "Get %s trophies",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 600,
         *         "total_legacy_points": 0
         *       },
         *       "halloween2017": {
         *         "one_time": {
         *           "FIRE_FROM_HELL": {
         *             "points": 5,
         *             "name": "Fire from Hell",
         *             "description": "Win a game of Smash Heroes using Skullfire",
         *             "globalPercentUnlocked": 0.05622079370421381
         *           }
         *         },
         *         "tiered": {
         *           "PUMPKINATOR": {
         *             "name": "Pumpkinator Collector",
         *             "description": "Collect %s pumpkins in Bedwars",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 710,
         *         "total_legacy_points": 130
         *       },
         *       "housing": {
         *         "one_time": {
         *           "RECIEVE_COOKIE": {
         *             "points": 5,
         *             "name": "Filling the Cookie Jar",
         *             "description": "Receive a cookie.",
         *             "gamePercentUnlocked": 23.130059864883275,
         *             "globalPercentUnlocked": 4.2513101294999025
         *           }
         *         },
         *         "tiered": [],
         *         "total_points": 55,
         *         "total_legacy_points": 0
         *       },
         *       "murdermystery": {
         *         "one_time": {
         *           "BLESSING_AND_CURSE": {
         *             "points": 5,
         *             "name": "Mixed Messages",
         *             "description": "Receive a blessing and a curse from Kali in the same game on Ancient Tomb",
         *             "gamePercentUnlocked": 13.157039514340763,
         *             "globalPercentUnlocked": 4.265014758105646
         *           }
         *         },
         *         "tiered": {
         *           "WINS_AS_SURVIVOR": {
         *             "name": "Peace Is Mine",
         *             "description": "Win %s games as innocent or detective without dying",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 1
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 40
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 805,
         *         "total_legacy_points": 0
         *       },
         *       "paintball": {
         *         "one_time": {
         *           "ACTIVATE_KILLSTREAKS": {
         *             "points": 10,
         *             "name": "Unstoppable",
         *             "description": "Activate ten killstreaks",
         *             "gamePercentUnlocked": 1.0260724023328596,
         *             "globalPercentUnlocked": 0.2519742678216734
         *           }
         *         },
         *         "tiered": {
         *           "WINS": {
         *             "name": "Paintball Superstar",
         *             "description": "Win %s games",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 1000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 685,
         *         "total_legacy_points": 0
         *       },
         *       "pit": {
         *         "one_time": {
         *           "PUNCH_SWORD": {
         *             "points": 5,
         *             "name": "The Punch",
         *             "description": "Hit a player with The Punch",
         *             "gamePercentUnlocked": 0.3629933575223368,
         *             "globalPercentUnlocked": 0.013510194923890408
         *           }
         *         },
         *         "tiered": {
         *           "MYSTICISM": {
         *             "name": "Mysticism",
         *             "description": "Enchant %s items",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 250
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1080,
         *         "total_legacy_points": 0
         *       },
         *       "quake": {
         *         "one_time": {
         *           "SHOW_ME_THE_MONEY": {
         *             "points": 15,
         *             "name": "Show me the money!",
         *             "description": "Unlock the Polished Bling Case or the 1.0s trigger",
         *             "gamePercentUnlocked": 0.5984048114967335,
         *             "globalPercentUnlocked": 0.10115854193121432
         *           }
         *         },
         *         "tiered": {
         *           "COINS": {
         *             "name": "Quake Banker",
         *             "description": "Earn %s coins",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5000
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 25000
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 100000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 200000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 940,
         *         "total_legacy_points": 0
         *       },
         *       "skyblock": {
         *         "one_time": {
         *           "EXPLOSIVE_ENDING": {
         *             "points": 5,
         *             "name": "Explosive Ending",
         *             "description": "Survive the Blast from the Unstable Dragon",
         *             "gamePercentUnlocked": 3.273060341189789,
         *             "globalPercentUnlocked": 1.0396722484452376
         *           }
         *         },
         *         "tiered": {
         *           "ANGLER": {
         *             "name": "Angler",
         *             "description": "Achieve fishing level %s",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 10,
         *                 "amount": 15
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 10,
         *                 "amount": 20
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1700,
         *         "total_legacy_points": 0
         *       },
         *       "skyclash": {
         *         "one_time": {
         *           "WHATS_NEXT": {
         *             "points": 10,
         *             "name": "What's next?",
         *             "description": "Max out a Card",
         *             "legacy": true
         *           }
         *         },
         *         "tiered": {
         *           "CARDS_UNLOCKED": {
         *             "name": "Collector!",
         *             "description": "Unlock %s different Cards",
         *             "legacy": true,
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 15
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 25
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 35
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 0,
         *         "total_legacy_points": 715
         *       },
         *       "skywars": {
         *         "one_time": {
         *           "PEACEMAKER": {
         *             "points": 10,
         *             "name": "Peacemaker",
         *             "description": "Win a game without killing anyone",
         *             "gamePercentUnlocked": 35.91945665528181,
         *             "globalPercentUnlocked": 23.00161061791731
         *           }
         *         },
         *         "tiered": {
         *           "KILLS_TEAM": {
         *             "name": "Team Killer",
         *             "description": "Kill %s players in Team mode",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 250
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 1000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 5000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1555,
         *         "total_legacy_points": 0
         *       },
         *       "speeduhc": {
         *         "one_time": null,
         *         "tiered": {
         *           "SALTY": {
         *             "name": "Salty",
         *             "description": "Collect %s Salt",
         *             "legacy": true,
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 200
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 1000
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 5000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 10000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 485,
         *         "total_legacy_points": 90
         *       },
         *       "summer": {
         *         "one_time": {
         *           "HOME_RUN": {
         *             "points": 5,
         *             "name": "Home Run",
         *             "description": "Knock a player into the void while using the Baseball Player Kit in SkyWars",
         *             "globalPercentUnlocked": 0.438836819941684
         *           }
         *         },
         *         "tiered": {
         *           "GONE_FISHING": {
         *             "name": "Gone Fishing",
         *             "description": "Fish %s treasure items while fishing in the Main Lobby",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 15,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 25,
         *                 "amount": 100
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 365,
         *         "total_legacy_points": 20
         *       },
         *       "supersmash": {
         *         "one_time": {
         *           "GENCLUCK_CHALLENGE": {
         *             "points": 5,
         *             "name": "General Cluck Challenge",
         *             "description": "Kill 2 enemy heroes with your Chicken Army",
         *             "gamePercentUnlocked": 5.009991257649556,
         *             "globalPercentUnlocked": 0.5199804765015701
         *           }
         *         },
         *         "tiered": {
         *           "SMASH_CHAMPION": {
         *             "name": "Smash Champion",
         *             "description": "Reach Smash Level %s",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 20
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 250
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 500
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 430,
         *         "total_legacy_points": 0
         *       },
         *       "tntgames": {
         *         "one_time": {
         *           "TNT_TAG_DIFFERENTTAGS": {
         *             "points": 10,
         *             "name": "One for you and for you and for you ...",
         *             "description": "Tag 5 different people in a game of TNT Tag",
         *             "gamePercentUnlocked": 22.24612356942583,
         *             "globalPercentUnlocked": 10.263423465717924
         *           }
         *         },
         *         "tiered": {
         *           "PVP_RUN_WINS": {
         *             "name": "Running Killer",
         *             "description": "Win %s games of PVP Run",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 20
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 100
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1680,
         *         "total_legacy_points": 0
         *       },
         *       "truecombat": {
         *         "one_time": {
         *           "GOLD_FORAGER": {
         *             "points": 15,
         *             "name": "Gold Forager",
         *             "description": "Max out a Gold Dust perk",
         *             "legacy": true
         *           }
         *         },
         *         "tiered": {
         *           "SOLO_KILLER": {
         *             "name": "Crazy Killer",
         *             "description": "Kill %s players in Solo Normal or Lucky modes",
         *             "legacy": true,
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 200
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 1000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 0,
         *         "total_legacy_points": 785
         *       },
         *       "uhc": {
         *         "one_time": {
         *           "CRAFTING_REVOLUTION": {
         *             "points": 5,
         *             "name": "Crafting revolution",
         *             "description": "Use a custom recipe in game",
         *             "gamePercentUnlocked": 37.00093709225066,
         *             "globalPercentUnlocked": 3.9130367665843684
         *           }
         *         },
         *         "tiered": {
         *           "HUNTER": {
         *             "name": "Hunter",
         *             "description": "Kill %s players",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 10
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 1000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 855,
         *         "total_legacy_points": 0
         *       },
         *       "vampirez": {
         *         "one_time": {
         *           "PURCHASE_BLOOD": {
         *             "points": 5,
         *             "name": "Cash4Blood",
         *             "description": "Purchase Blood from the shop",
         *             "gamePercentUnlocked": 24.465217949718827,
         *             "globalPercentUnlocked": 5.723903700414698
         *           }
         *         },
         *         "tiered": {
         *           "ZOMBIE_KILLER": {
         *             "name": "Zombie Hunter",
         *             "description": "Kill %s Zombies",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 250
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 2500
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 7500
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 610,
         *         "total_legacy_points": 0
         *       },
         *       "walls": {
         *         "one_time": {
         *           "FIRST_KIT": {
         *             "points": 5,
         *             "name": "Getting Ready",
         *             "description": "Unlock your first starter kit",
         *             "gamePercentUnlocked": 13.703430301410933,
         *             "globalPercentUnlocked": 1.4262594353363067
         *           }
         *         },
         *         "tiered": {
         *           "DIAMOND_MINER": {
         *             "name": "Rare Ore Miner",
         *             "description": "Mine %s Diamonds",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 20
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 50
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 100
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 520,
         *         "total_legacy_points": 0
         *       },
         *       "walls3": {
         *         "one_time": {
         *           "WHATS_THE_BIG_IDEA": {
         *             "points": 10,
         *             "name": "What's the big idea!?",
         *             "description": "Final kill an enemy after splashing them with a regen potion as Phoenix, before the potion expires",
         *             "gamePercentUnlocked": 0.036183601274772714,
         *             "globalPercentUnlocked": 0.01
         *           }
         *         },
         *         "tiered": {
         *           "COINS": {
         *             "name": "Mega Walls Banker",
         *             "description": "Earn %s coins in Mega Walls",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 5000
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 10000
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 35000
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 55000
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 2150,
         *         "total_legacy_points": 0
         *       },
         *       "warlords": {
         *         "one_time": {
         *           "MEDIUM_RARE": {
         *             "points": 5,
         *             "name": "Medium Rare",
         *             "description": "Receive a Rare weapon from The Weaponsmith.",
         *             "gamePercentUnlocked": 50.02137436405603,
         *             "globalPercentUnlocked": 3.902172048119626
         *           }
         *         },
         *         "tiered": {
         *           "ASSIST": {
         *             "name": "Quit Stealing My Kills!",
         *             "description": "Earn %s assists in any game mode",
         *             "tiers": [
         *               {
         *                 "tier": 1,
         *                 "points": 5,
         *                 "amount": 20
         *               },
         *               {
         *                 "tier": 2,
         *                 "points": 10,
         *                 "amount": 100
         *               },
         *               {
         *                 "tier": 3,
         *                 "points": 15,
         *                 "amount": 500
         *               },
         *               {
         *                 "tier": 4,
         *                 "points": 20,
         *                 "amount": 2500
         *               }
         *             ]
         *           }
         *         },
         *         "total_points": 1380,
         *         "total_legacy_points": 0
         *       }
         *     }
         *   }
         * }
         */
        export type $200 = Components.Schemas.AchievementsResourceResponse;
      }
    }
  }
  namespace ResourcesSkyblockCollections {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockCollectionsResourcesResponse;
      }
    }
  }
  namespace ResourcesSkyblockSkills {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockSkillsResourcesResponse;
      }
    }
  }
  namespace SkyblockNews {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.NewsResponse;
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Status {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          session: Components.Schemas.Session;
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $422 = Components.Responses.MalformedUUID;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace Watchdogstats {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          /**
           * Watchdog's bans in the last minute.
           * example:
           * 5
           */
          watchdog_lastMinute: number;
          /**
           * Staff bans in the last day.
           * example:
           * 1356
           */
          staff_rollingDaily: number;
          /**
           * Total Watchdog bans, ever.
           * example:
           * 4924740
           */
          watchdog_total: number;
          /**
           * Watchdog bans in the last day.
           * example:
           * 7679
           */
          watchdog_rollingDaily: number;
          /**
           * Total staff bans, ever.
           * example:
           * 1608360
           */
          staff_total: number;
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
}
