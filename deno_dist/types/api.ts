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
    namespace PlayerUuidRequired {
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
    export type ChallengeData = {
      id: string;
      name: string;
      rewards: {
        type: string;
        amount: number;
      }[];
    }[];
    export interface ChallengesResourceResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      challenges: {
        [name: string]: ChallengeData;
        arcade: ChallengeData;
        arena: ChallengeData;
        bedwars: ChallengeData;
        hungergames: ChallengeData;
        buildbattle: ChallengeData;
        truecombat: ChallengeData;
        duels: ChallengeData;
        mcgo: ChallengeData;
        murdermystery: ChallengeData;
        paintball: ChallengeData;
        quake: ChallengeData;
        skyclash: ChallengeData;
        skywars: ChallengeData;
        supersmash: ChallengeData;
        speeduhc: ChallengeData;
        gingerbread: ChallengeData;
        tntgames: ChallengeData;
        uhc: ChallengeData;
        vampirez: ChallengeData;
        walls3: ChallengeData;
        walls: ChallengeData;
        battleground: ChallengeData;
      };
    }
    export interface Guild {
      _id: string;
      achievements: GuildAchievements;
      banner?: GuildBanner;
      chatMute?: number;
      coins: number;
      coinsEver: number;
      created: number;
      description?: string | null;
      exp: number;
      guildExpByGameType: /**
       * Earned guild exp in each game mode, where the property key is the gamemode and the value is the exp.
       * Most of the properties in the schema always show up, however in some instances they were absent. Additional unlisted properties can be assumed to be numbers.
       *
       */
      GuildExpByGameType;
      hideGmTag?: boolean;
      joinable?: boolean;
      legacyRanking?: number;
      members: GuildMember[];
      name: string;
      name_lower: string;
      preferredGames?: string[];
      publiclyListed?: boolean;
      ranks: GuildRank[];
      tag?: string;
      tagColor?: string;
    }
    export interface GuildAchievements {
      WINNERS: number;
      EXPERIENCE_KINGS: number;
      ONLINE_PLAYERS: number;
    }
    export interface GuildBanner {
      Base: number | string;
      Patterns: {
        Color: number | string;
        Pattern: string;
      }[];
    }
    /**
     * Earned guild exp in each game mode, where the property key is the gamemode and the value is the exp.
     * Most of the properties in the schema always show up, however in some instances they were absent. Additional unlisted properties can be assumed to be numbers.
     *
     */
    export interface GuildExpByGameType {
      [name: string]: undefined | number;
      ARCADE?: number;
      ARENA?: number;
      BATTLEGROUND?: number;
      BEDWARS?: number;
      BUILD_BATTLE?: number;
      DUELS?: number;
      GINGERBREAD?: number;
      HOUSING?: number;
      LEGACY?: number;
      MCGO?: number;
      MURDER_MYSTERY?: number;
      PAINTBALL?: number;
      PIT?: number;
      PROTOTYPE?: number;
      QUAKECRAFT?: number;
      REPLAY?: number;
      SKYBLOCK?: number;
      SKYWARS?: number;
      SPEED_UHC?: number;
      SUPER_SMASH?: number;
      SURVIVAL_GAMES?: number;
      TNTGAMES?: number;
      UHC?: number;
      VAMPIREZ?: number;
      WALLS?: number;
      WALLS3?: number;
    }
    export interface GuildMember {
      /**
       * Property keys are the date in the format YYYY-MM-DD, and the value is how much guild exp they earned on that date.
       *
       * Stores the last 7 days, so you can expect at maximum 7 properties on this exp history object.
       *
       * Example:
       * ```typescript
       * console.log(guild.members[0].expHistory['2020-11-17']);
       * // output:
       * 163214
       * ```
       *
       */
      expHistory: {
        [name: string]: number;
      };
      /**
       * Timestamp of when this guild member joined the guild.
       */
      joined: number;
      /**
       * If they have been muted in guild chat, this is the timestamp of when they're unmuted.
       */
      mutedTill?: number;
      /**
       * Old value describing the member's username. This is not used anymore and rarely shows up as a valid property.
       */
      name?: string;
      questParticipation?: number;
      /**
       * The name of their rank, it may match the name of a rank in the rank object - otherwise they may be unranked / the GM (GM ranks are usually "GUILDMASTER" or "Guild Master")
       */
      rank: string;
      /**
       * Minecraft UUID of the guild memeber.
       */
      uuid: string;
    }
    export interface GuildRank {
      /**
       * Timestamp of the rank creation.
       */
      created: number;
      /**
       * Whether or not this the default rank players receive upon joining.
       */
      default?: boolean;
      /**
       * Name of the rank.
       */
      name: string;
      /**
       * Rank priority from lowest to highest.
       */
      priority: number;
      /**
       * Rank tag (short version of rank name or whatever else the guildmaster wants it to be).
       */
      tag?: string | null;
    }
    export interface GuildResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      guild: Guild | null;
    }
    export interface GuildsAchievementsResourceResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      /**
       * An empty object at this time. We can probably assume in the future it may contain data not unlike the normal /resources/achievements endpoint.
       */
      one_time: unknown;
      tiered: {
        [name: string]: GuildsTieredAchievementsData;
        PRESTIGE: GuildsTieredAchievementsData;
        EXPERIENCE_KINGS: GuildsTieredAchievementsData;
        WINNERS: GuildsTieredAchievementsData;
        ONLINE_PLAYERS: GuildsTieredAchievementsData;
      };
    }
    export interface GuildsPermissionsResourceResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      permissions: {
        en_us: {
          name: string;
          description: string;
          item: {
            name: string;
          };
        };
      }[];
    }
    export interface GuildsTieredAchievementsData {
      name: string;
      description: string;
      tiers: {
        tier: number;
        amount: number;
      }[];
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
    export type NullablePlayer = /**
     * The player object has many properties that define specific things. There are many of these properties, and due to their iterative nature no point in typing them.
     *
     * ## Booleans
     *
     * Additional properties that are the boolean type (true/false) are usually a setting toggle or a one time event/action.
     *
     * * Properties with keys that start with "levelingReward_" and end with a number indicate when that leveling reward has been claimed. The number itself is the network level of the reward.
     * * Properties with keys that look like "xmas2019_MAIN_LOBBY_1" - I believe these correlate with Christmas events but not sure what true/false means for these.
     *   * The general property key format is "xmasYEAR_TYPE_NUMBER".
     *   * A regex to match these would be: /^xmas(\d{4})_([A-Z_]+?)_(\d+)$/
     *
     * ## Numbers
     *
     * Additional properties that are the number type will generally either be some form of statistic, or a timestamp.
     *
     * * Properties with keys that start with "claimed_solo_bank_" will be a timestamp indicating when it was claimed. The full key will include a Minecraft UUID at the end.
     * * Properties with keys that roughly match "completed_christmas_quests_YEAR" will be a timestamp that indicates when they completed all the available quests for that event.
     * * Properties with keys that start with "anniversaryNPCProgress" will indicate how many event NPCs have been visited by the player.
     *
     * ## Arrays
     *
     * Some arrays will fit into a certain schema based on the property's key.
     *
     * * Properties with keys that start with "anniversaryNPCVisited" will be an array of numbers.
     *
     * ## Objects
     *
     * Some objects will fit into a certain schema based on the property's key.
     *
     * * Properties with keys starting with "adventRewards" will fit the "PlayerAdventRewards" schema.
     * * Properties with keys ending with "Cooldowns" will fit the "PlayerEventCooldown" schema.
     * * Properties with keys starting with "upcomingLanguageRelease_" will fit the "PlayerUpcomingLanguageRelease" schema.
     * * Properties with keys starting with "dmcrates-" will fit the "PlayerMonthlyCrates" schema.
     *
     */ Player | null;
    /**
     * The player object has many properties that define specific things. There are many of these properties, and due to their iterative nature no point in typing them.
     *
     * ## Booleans
     *
     * Additional properties that are the boolean type (true/false) are usually a setting toggle or a one time event/action.
     *
     * * Properties with keys that start with "levelingReward_" and end with a number indicate when that leveling reward has been claimed. The number itself is the network level of the reward.
     * * Properties with keys that look like "xmas2019_MAIN_LOBBY_1" - I believe these correlate with Christmas events but not sure what true/false means for these.
     *   * The general property key format is "xmasYEAR_TYPE_NUMBER".
     *   * A regex to match these would be: /^xmas(\d{4})_([A-Z_]+?)_(\d+)$/
     *
     * ## Numbers
     *
     * Additional properties that are the number type will generally either be some form of statistic, or a timestamp.
     *
     * * Properties with keys that start with "claimed_solo_bank_" will be a timestamp indicating when it was claimed. The full key will include a Minecraft UUID at the end.
     * * Properties with keys that roughly match "completed_christmas_quests_YEAR" will be a timestamp that indicates when they completed all the available quests for that event.
     * * Properties with keys that start with "anniversaryNPCProgress" will indicate how many event NPCs have been visited by the player.
     *
     * ## Arrays
     *
     * Some arrays will fit into a certain schema based on the property's key.
     *
     * * Properties with keys that start with "anniversaryNPCVisited" will be an array of numbers.
     *
     * ## Objects
     *
     * Some objects will fit into a certain schema based on the property's key.
     *
     * * Properties with keys starting with "adventRewards" will fit the "PlayerAdventRewards" schema.
     * * Properties with keys ending with "Cooldowns" will fit the "PlayerEventCooldown" schema.
     * * Properties with keys starting with "upcomingLanguageRelease_" will fit the "PlayerUpcomingLanguageRelease" schema.
     * * Properties with keys starting with "dmcrates-" will fit the "PlayerMonthlyCrates" schema.
     *
     */
    export interface Player {
      [name: string]:
        | undefined
        | string
        | number
        | boolean
        | string[]
        | number[]
        /**
         * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
         * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
         *
         */
        | PlayerAdventRewards
        | PlayerAchievementTotem
        /**
         * In addition to the all_time property, other properties may appear that have properties that start with "day_" but have the same schema as all_time.
         *
         */
        | PlayerChallenges
        | PlayerCompassStats
        | PlayerCooldowns
        /**
         * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
         * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
         *
         */
        | PlayerEventCooldown
        | PlayerFireworksStorage
        | PlayerGiftingMeta
        | /* Potentially has properties that follow format "given_cookies_NUMBER" which will be an array of strings. */ PlayerHousingMeta
        | /* Each property is a month and year like "8-2019" and the value contains booleans indicating which reward tier was claimed. */ PlayerMonthlyCrates
        | /* Each property is a month and year like "8-2019" and the value contains booleans indicating which reward tier was claimed. */ PlayerMonthlyCrates
        | PlayerOutfit
        | /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCheckpointBests
        | /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCompletions
        | /* This object describes the pet pet consumables the player has. Each property's key is the consumable name. e.g. "APPLE" or "WOOD_SWORD" */ PlayerPetConsumables
        | /* Each property key is the name of the pet the stats apply to. */ PlayerPetStats
        | PlayerPlotResets
        | PlayerQuestSettings
        | /* An object which has properties which match quests described by the /resources/quests endpoint. */ PlayerQuests
        | PlayerSettings
        | PlayerSkin
        | PlayerSocialMedia
        | /* The player stats object contains statistics for individual game modes. */ PlayerStats
        | /* Aside from the properties in the schema this object contains properties who's keys follow a format like "GAMEMODE_TYPE_NUMBER". e.g. "sw_insane_doubles_0". These fit the "PlayerTourneyGameData" schema. */ PlayerTourney
        /**
         * An object describing what I assume to be testers who've logged in with a specific language.
         *
         */
        | PlayerUpcomingLanguageRelease
        | PlayerVanityMeta;
      _id: string;
      uuid: string;
      playername: string;
      displayname: string;
      firstLogin?: number;
      lastLogin?: number;
      lastLogout?: number;
      knownAliases: string[];
      knownAliasesLower: string[];
      /**
       * Timestamp of when the SkyBlock Century Cake was claimed.
       */
      claimed_century_cake?: number;
      /**
       * Timestamp of when the Potato Basket was claimed.
       */
      claimed_potato_basket?: number;
      /**
       * Timestamp of when the Potato Talisman was claimed.
       */
      claimed_potato_talisman?: number;
      monthlyPackageRank?: string;
      monthlyRankColor?: string;
      newPackageRank?: string;
      packageRank?: string;
      rank?: string;
      rankPlusColor?: string;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_NONE?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_VIP?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_VIP_PLUS?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_MVP?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_MVP_PLUS?: number;
      lastClaimedReward?: number;
      lastAdsenseGenerateTime?: number;
      lastMapVote?: number;
      mcVersionRp?: string;
      mostRecentGameType?: string;
      mostRecentMinecraftVersion?: number;
      mostRecentMonthlyPackageRank?: string;
      mostRecentlyThanked?: string;
      mostRecentlyThankedUuid?: string;
      mostRecentlyTipped?: string;
      mostRecentlyTippedUuid?: string;
      petConsumables?: /* This object describes the pet pet consumables the player has. Each property's key is the consumable name. e.g. "APPLE" or "WOOD_SWORD" */ PlayerPetConsumables;
      petJourneyTimestamp?: number;
      quickjoin_timestamp?: number;
      quickjoin_uses?: number;
      scorpius_bribe_96?: number;
      testPass?: boolean;
      watchdogBlockTimestamp?: number;
      adsense_tokens?: number;
      networkExp?: number;
      karma?: number;
      coins?: number;
      eulaCoins?: boolean;
      kills?: number;
      killstreaks?: number;
      deaths?: number;
      wins?: number;
      fortuneBuff?: number;
      gifts_grinch?: number;
      hasTheHotPotato?: boolean;
      main2017Tutorial?: boolean;
      monthlycrates?: /* Each property is a month and year like "8-2019" and the value contains booleans indicating which reward tier was claimed. */ PlayerMonthlyCrates;
      /**
       * This property represents a version - e.g. "v0.75"
       */
      network_update_book?: string;
      parkourCheckpointBests?: /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCheckpointBests;
      parkourCompletions?: /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCompletions;
      petStats?: /* Each property key is the name of the pet the stats apply to. */ PlayerPetStats;
      rewardConsumed?: boolean;
      rewardHighScore?: number;
      rewardScore?: number;
      rewardStreak?: number;
      skyblock_free_cookie?: number;
      shots_fired?: number;
      snowball_fight_intro_2019?: boolean;
      stats: /* The player stats object contains statistics for individual game modes. */ PlayerStats;
      thanksReceived?: number;
      thanksSent?: number;
      timePlaying?: number;
      totalDailyRewards?: number;
      totalRewards?: number;
      tourney?: /* Aside from the properties in the schema this object contains properties who's keys follow a format like "GAMEMODE_TYPE_NUMBER". e.g. "sw_insane_doubles_0". These fit the "PlayerTourneyGameData" schema. */ PlayerTourney;
      tournamentTokens?: number;
      vanityConvertedBoxToday?: number;
      vanityFirstConvertedBox?: number;
      voting?: PlayerVoting;
      vanityTokens?: number;
      language?: string;
      autoDetectLanguage?: boolean;
      auto_spawn_pet?: boolean;
      battlePassGlowStatus?: boolean;
      channel?: string;
      chat?: boolean;
      clock?: boolean;
      collectibles_menu_sort?: string;
      collectibles_menu_visibility_sort?: string;
      combatTracker?: boolean;
      currentClickEffect?: string;
      currentCloak?: string;
      currentEmote?: string;
      currentGadget?: string;
      currentHat?: string;
      currentPet?: string;
      customFilter?: string;
      disableTipMessages?: boolean;
      disguise?: string;
      gadget?: string;
      notifications?: boolean;
      outfit?: PlayerOutfit;
      onetime_achievement_menu_sort?: string;
      onetime_achievement_menu_sort_completion_sort?: string;
      particlePack?: string;
      petActive?: boolean;
      /**
       * Particle pack, e.g. "note", "anger", "enchantment", etc.
       */
      pp?: string;
      questSettings?: PlayerQuestSettings;
      seeRequests?: boolean;
      sendCerberusMessages?: boolean;
      settings?: PlayerSettings;
      skin?: PlayerSkin;
      socialMedia?: PlayerSocialMedia;
      spec_always_flying?: boolean;
      spec_auto_teleport?: boolean;
      spec_first_person?: boolean;
      spectators_invisible?: boolean;
      tiered_achievement_menu_sort?: string;
      transformation?: string;
      userLanguage?: string;
      vanityFavorites?: string;
      wardrobe?: string;
      friendBlocksUuid?: string[];
      friendRequests?: string[];
      friendRequestsUuid?: string[];
      guildInvites?: string[];
      guildKickReason?: string;
      guildNotifications?: boolean;
      challenges?: /**
       * In addition to the all_time property, other properties may appear that have properties that start with "day_" but have the same schema as all_time.
       *
       */
      PlayerChallenges;
      quests?: /* An object which has properties which match quests described by the /resources/quests endpoint. */ PlayerQuests;
      aprilFoolsStaffClicked_0?: string[];
      anniversaryNPCProgress2020?: number;
      anniversaryNPCVisited2020?: number[];
      SANTA_FINISHED?: boolean;
      SANTA_QUEST_STARTED?: boolean;
      compassStats?: PlayerCompassStats;
      cooldowns?: PlayerCooldowns;
      fireworksStorage?: PlayerFireworksStorage;
      giftingMeta?: PlayerGiftingMeta;
      housingMeta?: /* Potentially has properties that follow format "given_cookies_NUMBER" which will be an array of strings. */ PlayerHousingMeta;
      vanityMeta?: PlayerVanityMeta;
      flashingSaleClicks?: number;
      flashingSaleOpens?: number;
      flashingSalePoppedUp?: number;
      flashingSalePopup?: number;
      adventRewards2017?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards2018?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards_v2_2018?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards2019?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards_v2_2019?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      christmas2019Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      summer2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      easter2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      easter2020Cooldowns2?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      halloween2016Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      halloween2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      holiday2016Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      specialtyCooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      upcomingLanguageRelease_Korean?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      upcomingLanguageRelease_Portuguese?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      upcomingLanguageRelease_Russian?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      plotResets?: PlayerPlotResets;
      achievementPoints: number;
      achievementRewardsNew?: /* Object property keys are in the format "for_points_NUMBER". */ PlayerAchievementRewardsNew;
      achievementSync?: PlayerAchievementSync;
      achievementTotem?: PlayerAchievementTotem;
      achievementTracking: string[];
      achievementTrackingHideMessages?: boolean;
      achievements: /* Tiered / numbered achievements the player has earned. All known properties are listed but given it's Hypixel it's subject to change fairly often. */ PlayerAchievements;
      /**
       * Array of values, each value representing an achievement.
       */
      achievementsOneTime: string[];
    }
    export interface PlayerAchievementData {
      achievementPoints: number;
      achievementRewardsNew?: /* Object property keys are in the format "for_points_NUMBER". */ PlayerAchievementRewardsNew;
      achievementSync?: PlayerAchievementSync;
      achievementTotem?: PlayerAchievementTotem;
      achievementTracking: string[];
      achievementTrackingHideMessages?: boolean;
      achievements: /* Tiered / numbered achievements the player has earned. All known properties are listed but given it's Hypixel it's subject to change fairly often. */ PlayerAchievements;
      /**
       * Array of values, each value representing an achievement.
       */
      achievementsOneTime: string[];
    }
    /**
     * Object property keys are in the format "for_points_NUMBER".
     */
    export interface PlayerAchievementRewardsNew {
      [name: string]: number;
    }
    export interface PlayerAchievementSync {
      [name: string]: number;
      quake_tiered: number;
    }
    export interface PlayerAchievementTotem {
      allowed_max_height: number;
      canCustomize: boolean;
      /**
       * Object property keys are in the format "slotcolor_NUMBER"
       */
      selectedColors: {
        [name: string]: string;
      };
      /**
       * Object property keys are in the format "slot_NUMBER"
       */
      selectedParts: {
        [name: string]: string;
      };
      unlockedColors: string[];
      unlockedParts: string[];
    }
    /**
     * Tiered / numbered achievements the player has earned. All known properties are listed but given it's Hypixel it's subject to change fairly often.
     */
    export interface PlayerAchievements {
      [name: string]: undefined | number;
      arcade_arcade_banker?: number;
      arcade_bounty_hunter?: number;
      arena_climb_the_ranks?: number;
      bedwars_beds?: number;
      bedwars_bedwars_killer?: number;
      bedwars_collectors_edition?: number;
      bedwars_level?: number;
      bedwars_loot_box?: number;
      bedwars_wins?: number;
      buildbattle_build_battle_points?: number;
      buildbattle_build_battle_score?: number;
      buildbattle_build_battle_voter?: number;
      buildbattle_guess_the_build_guesses?: number;
      buildbattle_guess_the_build_winner?: number;
      christmas2017_advent_2019?: number;
      christmas2017_present_collector?: number;
      christmas2017_santa_says_rounds?: number;
      duels_bridge_doubles_wins?: number;
      duels_bridge_duels_wins?: number;
      duels_bridge_four_teams_wins?: number;
      duels_bridge_teams_wins?: number;
      duels_bridge_win_streak?: number;
      duels_bridge_wins?: number;
      duels_duels_division?: number;
      duels_duels_traveller?: number;
      duels_duels_win_streak?: number;
      duels_duels_winner?: number;
      duels_goals?: number;
      duels_unique_map_wins?: number;
      easter_throw_eggs?: number;
      general_challenger?: number;
      general_coins?: number;
      general_quest_master?: number;
      general_wins?: number;
      gingerbread_banker?: number;
      halloween2017_pumpkinator?: number;
      paintball_coins?: number;
      paintball_kill_streaks?: number;
      paintball_kills?: number;
      pit_contracts?: number;
      pit_events?: number;
      pit_gold?: number;
      pit_kills?: number;
      quake_coins?: number;
      quake_headshots?: number;
      quake_killing_sprees?: number;
      quake_kills?: number;
      quake_wins?: number;
      skyblock_angler?: number;
      skyblock_augmentation?: number;
      skyblock_combat?: number;
      skyblock_concoctor?: number;
      skyblock_domesticator?: number;
      skyblock_dungeoneer?: number;
      skyblock_excavator?: number;
      skyblock_gatherer?: number;
      skyblock_harvester?: number;
      skyblock_minion_lover?: number;
      skyblock_slayer?: number;
      skyblock_treasure_hunter?: number;
      skyblock_treasury?: number;
      skyblock_unique_gifts?: number;
      skyclash_cards_unlocked?: number;
      skywars_cages?: number;
      skywars_heads?: number;
      skywars_kills_solo?: number;
      skywars_kills_team?: number;
      skywars_kits_solo?: number;
      skywars_kits_team?: number;
      skywars_new_day_new_challenge?: number;
      skywars_wins_lab?: number;
      skywars_wins_solo?: number;
      skywars_wins_team?: number;
      skywars_you_re_a_star?: number;
      summer_shopaholic?: number;
      supersmash_hero_slayer?: number;
      tntgames_block_runner?: number;
      tntgames_tnt_banker?: number;
      tntgames_tnt_triathlon?: number;
      walls3_coins?: number;
      walls3_guardian?: number;
      walls3_jack_of_all_trades?: number;
      walls3_rusher?: number;
    }
    /**
     * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
     * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
     *
     */
    export interface PlayerAdventRewards {
      [name: string]: number;
    }
    /**
     * In addition to the all_time property, other properties may appear that have properties that start with "day_" but have the same schema as all_time.
     *
     */
    export interface PlayerChallenges {
      [name: string]: /**
       * Each property key correlates with an ID from the /resources/challenges endpoint.
       * For example, a key might be "ARCADE__farm_hunt_challenge"
       *
       */
      PlayerChallengesObject;
      all_time: /**
       * Each property key correlates with an ID from the /resources/challenges endpoint.
       * For example, a key might be "ARCADE__farm_hunt_challenge"
       *
       */
      PlayerChallengesObject;
    }
    /**
     * Each property key correlates with an ID from the /resources/challenges endpoint.
     * For example, a key might be "ARCADE__farm_hunt_challenge"
     *
     */
    export interface PlayerChallengesObject {
      [name: string]: number;
    }
    export interface PlayerCompassStats {
      compass?: PlayerCompassStatsChild;
      npc?: PlayerCompassStatsChild;
    }
    export interface PlayerCompassStatsChild {
      [name: string]: undefined | number;
      arcade?: number;
      arena?: number;
      battleground?: number;
      buildbattle?: number;
      gingerbread?: number;
      housing?: number;
      hungergames?: number;
      leveling?: number;
      mainlobby?: number;
      mcgo?: number;
      miniwalls?: number;
      paintball?: number;
      prototype?: number;
      quake?: number;
      skyclash?: number;
      skywars?: number;
      speeduhc?: number;
      supersmash?: number;
      tntgames?: number;
      truecombat?: number;
      uhc?: number;
      vampirez?: number;
      walls?: number;
      walls3?: number;
    }
    export interface PlayerCooldowns {
      fun: {
        event?: number;
        events?: number;
        event_scrambled?: number;
        event_quickmaths?: number;
        santaclaus?: number;
        piano?: number;
        whatsmyface?: number;
      };
    }
    export interface PlayerEugene {
      dailyTwoKExp: number;
      weekly_booster?: number;
    }
    /**
     * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
     * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
     *
     */
    export interface PlayerEventCooldown {
      [name: string]: boolean;
    }
    export type PlayerFireworksStorage = {
      colors: string;
      fade_colors: string;
      flight_duration: number;
      selected: boolean;
      shape?: string;
      trail: boolean;
      twinkle: boolean;
    }[];
    export interface PlayerFriendsData {
      [name: string]: undefined | string[];
      friendBlocksUuid?: string[];
      friendRequests?: string[];
      friendRequestsUuid?: string[];
    }
    export interface PlayerGiftingMeta {
      bundlesReceived?: number;
      bundlesGiven?: number;
      giftsGiven?: number;
      milestones?: string[];
      realBundlesGiven?: number;
      realBundlesReceived?: number;
      realBundlesReceivedInc?: number;
    }
    export interface PlayerGuildData {
      guildInvites?: string[];
      guildKickReason?: string;
      guildNotifications?: boolean;
    }
    /**
     * Potentially has properties that follow format "given_cookies_NUMBER" which will be an array of strings.
     */
    export interface PlayerHousingMeta {
      [name: string]:
        | undefined
        | string
        | number
        | boolean
        | string[]
        | PlayerHousingMetaPlayerSettings;
      allowedBlocks?: string[];
      firstHouseJoinMs?: number;
      packages?: string[];
      playerSettings?: PlayerHousingMetaPlayerSettings;
      plotSize?: string;
      tutorialStep?: string;
      playlist?: string;
      selectedChannels_v3?: string[];
      purchasedSlots?: number;
      toggle_BORDER?: boolean;
      toggle_TIPS?: boolean;
      visibilityDisabled?: boolean;
    }
    export interface PlayerHousingMetaPlayerSettings {
      [name: string]: undefined | string | number;
      VISIBILITY?: string;
      BORDER?: string;
      TIPS?: string;
      customVisibility?: number;
      YT_REPULSOR?: string;
    }
    export interface PlayerIndividualPetStats {
      EXERCISE?: PlayerIndividualPetStatsCare;
      HUNGER?: PlayerIndividualPetStatsCare;
      THIRST?: PlayerIndividualPetStatsCare;
      experience?: number;
      name?: string;
    }
    export interface PlayerIndividualPetStatsCare {
      timestamp: number;
      value: number;
    }
    export interface PlayerInfoData {
      _id: string;
      uuid: string;
      playername: string;
      displayname: string;
      firstLogin?: number;
      lastLogin?: number;
      lastLogout?: number;
      knownAliases: string[];
      knownAliasesLower: string[];
      /**
       * Timestamp of when the SkyBlock Century Cake was claimed.
       */
      claimed_century_cake?: number;
      /**
       * Timestamp of when the Potato Basket was claimed.
       */
      claimed_potato_basket?: number;
      /**
       * Timestamp of when the Potato Talisman was claimed.
       */
      claimed_potato_talisman?: number;
      monthlyPackageRank?: string;
      monthlyRankColor?: string;
      newPackageRank?: string;
      packageRank?: string;
      rank?: string;
      rankPlusColor?: string;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_NONE?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_VIP?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_VIP_PLUS?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_MVP?: number;
      /**
       * Timestamp indicating when they purchased the rank.
       */
      levelUp_MVP_PLUS?: number;
      lastClaimedReward?: number;
      lastAdsenseGenerateTime?: number;
      lastMapVote?: number;
      mcVersionRp?: string;
      mostRecentGameType?: string;
      mostRecentMinecraftVersion?: number;
      mostRecentMonthlyPackageRank?: string;
      mostRecentlyThanked?: string;
      mostRecentlyThankedUuid?: string;
      mostRecentlyTipped?: string;
      mostRecentlyTippedUuid?: string;
      petConsumables?: /* This object describes the pet pet consumables the player has. Each property's key is the consumable name. e.g. "APPLE" or "WOOD_SWORD" */ PlayerPetConsumables;
      petJourneyTimestamp?: number;
      quickjoin_timestamp?: number;
      quickjoin_uses?: number;
      scorpius_bribe_96?: number;
      testPass?: boolean;
      watchdogBlockTimestamp?: number;
    }
    export interface PlayerMiscData {
      aprilFoolsStaffClicked_0?: string[];
      anniversaryNPCProgress2020?: number;
      anniversaryNPCVisited2020?: number[];
      SANTA_FINISHED?: boolean;
      SANTA_QUEST_STARTED?: boolean;
      compassStats?: PlayerCompassStats;
      cooldowns?: PlayerCooldowns;
      fireworksStorage?: PlayerFireworksStorage;
      giftingMeta?: PlayerGiftingMeta;
      housingMeta?: /* Potentially has properties that follow format "given_cookies_NUMBER" which will be an array of strings. */ PlayerHousingMeta;
      vanityMeta?: PlayerVanityMeta;
      flashingSaleClicks?: number;
      flashingSaleOpens?: number;
      flashingSalePoppedUp?: number;
      flashingSalePopup?: number;
      adventRewards2017?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards2018?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards_v2_2018?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards2019?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      adventRewards_v2_2019?: /**
       * An object where each property is the day of the reward and the value is the timestamp it was claimed. Property keys look like "dayNUMBER" e.g. day1.
       * The property keys on the player object generally follow the format "adventRewardsYEAR" or "adventrewards_v2_YEAR".
       *
       */
      PlayerAdventRewards;
      christmas2019Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      summer2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      easter2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      easter2020Cooldowns2?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      halloween2016Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      halloween2020Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      holiday2016Cooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      specialtyCooldowns?: /**
       * Event cooldown information where the property keys are a rank + number and the values are booleans. e.g. "NORMAL0" = "TRUE".
       * The property keys on the player object generally follow the format "eventCooldowns" e.g. "halloween2020Cooldowns".
       *
       */
      PlayerEventCooldown;
      upcomingLanguageRelease_Korean?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      upcomingLanguageRelease_Portuguese?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      upcomingLanguageRelease_Russian?: /**
       * An object describing what I assume to be testers who've logged in with a specific language.
       *
       */
      PlayerUpcomingLanguageRelease;
      plotResets?: PlayerPlotResets;
    }
    /**
     * Each property is a month and year like "8-2019" and the value contains booleans indicating which reward tier was claimed.
     */
    export interface PlayerMonthlyCrates {
      [name: string]: {
        [name: string]: undefined | boolean;
        REGULAR?: boolean;
        VIP?: boolean;
        VIP_PLUS?: boolean;
        MVP?: boolean;
        MVP_PLUS?: boolean;
      };
    }
    export interface PlayerOutfit {
      BOOTS?: string;
      CHESTPLATE?: string;
      HELMET?: string;
      LEGGINGS?: string;
    }
    /**
     * Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars".
     */
    export interface PlayerParkourCheckpointBests {
      [name: string]: {
        [name: string]: number;
      };
    }
    /**
     * Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars".
     */
    export interface PlayerParkourCompletions {
      [name: string]: {
        /**
         * Timestamp of when this parkour was started.
         */
        timeStart: number;
        /**
         * Time in milliseconds that it took to complete the parkour.
         */
        timeTook: number;
      }[];
    }
    /**
     * This object describes the pet pet consumables the player has. Each property's key is the consumable name. e.g. "APPLE" or "WOOD_SWORD"
     */
    export interface PlayerPetConsumables {
      [name: string]: number;
    }
    /**
     * Each property key is the name of the pet the stats apply to.
     */
    export interface PlayerPetStats {
      [name: string]: PlayerIndividualPetStats;
    }
    export interface PlayerPlotResets {
      /**
       * Timestamp of when the reset occurred.
       */
      time: number;
      /**
       * Minecraft UUID
       */
      uuid: string;
    }
    export interface PlayerQuestSettings {
      autoActivate?: boolean;
    }
    /**
     * An object which has properties which match quests described by the /resources/quests endpoint.
     */
    export interface PlayerQuests {
      [
        name: string
      ]: /* Use this own object's key to find the quest from the /resources/quests endpoint in order to interpret this information. */ PlayerQuestsInfo;
    }
    /**
     * Use this own object's key to find the quest from the /resources/quests endpoint in order to interpret this information.
     */
    export interface PlayerQuestsInfo {
      active?: {
        /**
         * The property key is the objective name. e.g. "wins" or "2v2"
         */
        objectives: {
          [name: string]: number | string;
        };
        started?: number;
      };
      completions?: {
        time: number;
      }[];
    }
    export interface PlayerResponse {
      player: NullablePlayer;
    }
    export interface PlayerSettings {
      [name: string]:
        | undefined
        | boolean
        | string
        | number
        | {
            [name: string]: string;
          };
      compass?: {
        [name: string]: string;
      };
      allowFriendRequests?: boolean;
      allowPartyRequests?: boolean;
      autoSpawnPet?: boolean;
      bloodVisibility?: boolean;
      chatVisibility?: boolean;
      duelInvitePrivacy?: string;
      friendRequestPrivacy?: string;
      legacyCompass?: boolean;
      lobbySpeed?: boolean;
      lobbyProtection?: boolean;
      petVisibility?: boolean;
      partyInvitePrivacy?: string;
      privateMessageSounds?: boolean;
      profanityLevel?: string;
      profanityLevel_GUILD?: string;
      profanityLevel_PARTY?: string;
      profanityLevel_PM?: string;
      spec_speed?: number;
    }
    export interface PlayerSettingsData {
      language?: string;
      autoDetectLanguage?: boolean;
      auto_spawn_pet?: boolean;
      battlePassGlowStatus?: boolean;
      channel?: string;
      chat?: boolean;
      clock?: boolean;
      collectibles_menu_sort?: string;
      collectibles_menu_visibility_sort?: string;
      combatTracker?: boolean;
      currentClickEffect?: string;
      currentCloak?: string;
      currentEmote?: string;
      currentGadget?: string;
      currentHat?: string;
      currentPet?: string;
      customFilter?: string;
      disableTipMessages?: boolean;
      disguise?: string;
      gadget?: string;
      notifications?: boolean;
      outfit?: PlayerOutfit;
      onetime_achievement_menu_sort?: string;
      onetime_achievement_menu_sort_completion_sort?: string;
      particlePack?: string;
      petActive?: boolean;
      /**
       * Particle pack, e.g. "note", "anger", "enchantment", etc.
       */
      pp?: string;
      questSettings?: PlayerQuestSettings;
      seeRequests?: boolean;
      sendCerberusMessages?: boolean;
      settings?: PlayerSettings;
      skin?: PlayerSkin;
      socialMedia?: PlayerSocialMedia;
      spec_always_flying?: boolean;
      spec_auto_teleport?: boolean;
      spec_first_person?: boolean;
      spectators_invisible?: boolean;
      tiered_achievement_menu_sort?: string;
      transformation?: string;
      userLanguage?: string;
      vanityFavorites?: string;
      wardrobe?: string;
    }
    export interface PlayerSkin {
      signature: string;
      timeoutStart: number;
      value: string;
    }
    export type PlayerSocialMedia = PlayerSocialMediaLinks & {
      [name: string]: string | boolean | PlayerSocialMediaLinks;
      links: PlayerSocialMediaLinks;
      prompt: boolean;
    };
    export interface PlayerSocialMediaLinks {
      [name: string]: undefined | string;
      DISCORD?: string;
      HYPIXEL?: string;
      INSTAGRAM?: string;
      TWITCH?: string;
      TWITTER?: string;
      YOUTUBE?: string;
    }
    /**
     * The player stats object contains statistics for individual game modes.
     */
    export interface PlayerStats {
      [name: string]:
        | undefined
        | PlayerStatsGameMode
        | /* Stats for bedwars. */ PlayerStatsBedwars
        | PlayerStatsPit
        | /* An object which properties describe each individual profile the player is a member of. */ PlayerStatsSkyBlock
        | PlayerStatsWalls3
        /**
         * Housing stats, generally limited to layout items - either the layout_items property will exist or there may be a property in the format of "layout_items_UUID".
         *
         */
        | PlayerStatsHousing;
      Arcade?: PlayerStatsGameMode;
      Arena?: PlayerStatsGameMode;
      Battleground?: PlayerStatsGameMode;
      Bedwars?: /* Stats for bedwars. */ PlayerStatsBedwars;
      BuildBattle?: PlayerStatsGameMode;
      Duels?: PlayerStatsGameMode;
      GingerBread?: PlayerStatsGameMode;
      HungerGames?: PlayerStatsGameMode;
      Legacy?: PlayerStatsGameMode;
      MCGO?: PlayerStatsGameMode;
      MurderMystery?: PlayerStatsGameMode;
      Paintball?: PlayerStatsGameMode;
      Pit?: PlayerStatsPit;
      Quake?: PlayerStatsGameMode;
      SkyBlock?: /* An object which properties describe each individual profile the player is a member of. */ PlayerStatsSkyBlock;
      SkyWars?: PlayerStatsGameMode;
      SpeedUHC?: PlayerStatsGameMode;
      SuperSmash?: PlayerStatsGameMode;
      TNTGames?: PlayerStatsGameMode;
      TrueCombat?: PlayerStatsGameMode;
      UHC?: PlayerStatsGameMode;
      VampireZ?: PlayerStatsGameMode;
      Walls?: PlayerStatsGameMode;
      Walls3?: PlayerStatsWalls3;
      SkyClash?: PlayerStatsGameMode;
      Housing?: /**
       * Housing stats, generally limited to layout items - either the layout_items property will exist or there may be a property in the format of "layout_items_UUID".
       *
       */
      PlayerStatsHousing;
    }
    /**
     * Stats for bedwars.
     */
    export type PlayerStatsBedwars = PlayerStatsGameMode &
      PlayerStatsBedwarsInfo &
      PlayerStatsBedwarsStats;
    /**
     * These properties generally have to do with either settings, info (like coins, exp, items), and some universal stats.
     *
     * Some properties aren't listed but certain values can be expected based on the property's key.
     *
     * * Properties that have keys which start with "voted_" (e.g. voted_enderman) will be a boolean.
     * * Properties that have keys which start with "quickjoin_uses_" (e.g. quickjoin_uses_Amazon) will be a number.
     *
     */
    export interface PlayerStatsBedwarsInfo {
      [name: string]:
        | undefined
        | number
        | boolean
        | string
        | string[]
        | PlayerStatsBedwarsPrivateGamesSettings;
      chest_history?: string;
      chest_history_new?: string[];
      coins?: number;
      Experience?: number;
      Experience_new?: number;
      Bedwars_openedChests?: number;
      Bedwars_openedCommons?: number;
      Bedwars_openedEpics?: number;
      Bedwars_openedLegendaries?: number;
      Bedwars_openedRares?: number;
      activeBedDestroy?: string;
      activeDeathCry?: string;
      activeGlyph?: string;
      activeIslandTopper?: string;
      activeKillEffect?: string;
      activeKillMessages?: string;
      activeNPCSkin?: string;
      activeProjectileTrail?: string;
      activeSprays?: string;
      activeVictoryDance?: string;
      activeWoodType?: string;
      favourites_1?: string;
      favourites_2?: string;
      first_join_7?: boolean;
      understands_resource_bank?: boolean;
      understands_streaks?: boolean;
      privategames?: PlayerStatsBedwarsPrivateGamesSettings;
    }
    export interface PlayerStatsBedwarsPrivateGamesSettings {
      bed_instabreak?: boolean;
      disable_block_protection?: boolean;
      event_time?: string;
      health_buff?: string;
      low_gravity?: boolean;
      max_team_upgrades?: boolean;
      no_diamonds?: boolean;
      no_emeralds?: boolean;
      one_hit_one_kill?: boolean;
      respawn_time?: string;
      speed?: string;
    }
    /**
     * This interface lists keys that should be fairly common.
     * All of these calls have variant specific values that get prepended by a game mode.
     *
     * ###  Modes
     * * castle_
     * * two_four_
     * * four_three_
     * * four_four_
     * * eight_one_
     * * eight_two_
     * * tourney_bedwars4s_-1_
     * * tourney_bedwars4s_0_
     * * tourney_bedwars4s_1_
     * * tourney_bedwars_two_four_0_
     *
     * #### Sub Modes
     * * armed_
     * * lucky_
     * * no_void_
     * * rush_
     * * ultimate_
     * * voidless_
     *
     * ### Explanation
     *
     * So aside from the base / default mode which this interface describes, you can find the stats for a specific game mode by joining the above values.
     *
     * For example, if you want the "wins_bedwars" value but for rush on four four you'd find that on the key "four_four_rush_wins_bedwars", if it exists.
     *
     */
    export interface PlayerStatsBedwarsStats {
      _items_purchased_bedwars?: number;
      beds_broken_bedwars?: number;
      beds_lost_bedwars?: number;
      deaths_bedwars?: number;
      diamond_resources_collected_bedwars?: number;
      emerald_resources_collected_bedwars?: number;
      entity_attack_deaths_bedwars?: number;
      entity_attack_final_deaths_bedwars?: number;
      entity_attack_final_kills_bedwars?: number;
      entity_attack_kills_bedwars?: number;
      entity_explosion_deaths_bedwars?: number;
      entity_explosion_final_deaths_bedwars?: number;
      entity_explosion_final_kills_bedwars?: number;
      entity_explosion_kills_bedwars?: number;
      fall_deaths_bedwars?: number;
      fall_final_deaths_bedwars?: number;
      fall_final_kills_bedwars?: number;
      fall_kills_bedwars?: number;
      final_deaths_bedwars?: number;
      final_kills_bedwars?: number;
      fire_deaths_bedwars?: number;
      fire_final_deaths_bedwars?: number;
      fire_tick_deaths_bedwars?: number;
      fire_tick_final_deaths_bedwars?: number;
      games_played_bedwars?: number;
      gold_resources_collected_bedwars?: number;
      iron_resources_collected_bedwars?: number;
      items_purchased_bedwars?: number;
      kills_bedwars?: number;
      losses_bedwars?: number;
      "permanent _items_purchased_bedwars"?: number;
      permanent_items_purchased_bedwars?: number;
      projectile_deaths_bedwars?: number;
      projectile_final_deaths_bedwars?: number;
      projectile_final_kills_bedwars?: number;
      projectile_kills_bedwars?: number;
      resources_collected_bedwars?: number;
      suffocation_deaths_bedwars?: number;
      void_deaths_bedwars?: number;
      void_final_deaths_bedwars?: number;
      void_final_kills_bedwars?: number;
      void_kills_bedwars?: number;
      wins_bedwars?: number;
      winstreak?: number;
    }
    export interface PlayerStatsData {
      adsense_tokens?: number;
      networkExp?: number;
      karma?: number;
      coins?: number;
      eulaCoins?: boolean;
      kills?: number;
      killstreaks?: number;
      deaths?: number;
      wins?: number;
      fortuneBuff?: number;
      gifts_grinch?: number;
      hasTheHotPotato?: boolean;
      main2017Tutorial?: boolean;
      monthlycrates?: /* Each property is a month and year like "8-2019" and the value contains booleans indicating which reward tier was claimed. */ PlayerMonthlyCrates;
      /**
       * This property represents a version - e.g. "v0.75"
       */
      network_update_book?: string;
      parkourCheckpointBests?: /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCheckpointBests;
      parkourCompletions?: /* Each property key describes the location of the parkour. e.g. "Prototype" or "Bedwars". */ PlayerParkourCompletions;
      petStats?: /* Each property key is the name of the pet the stats apply to. */ PlayerPetStats;
      rewardConsumed?: boolean;
      rewardHighScore?: number;
      rewardScore?: number;
      rewardStreak?: number;
      skyblock_free_cookie?: number;
      shots_fired?: number;
      snowball_fight_intro_2019?: boolean;
      stats: /* The player stats object contains statistics for individual game modes. */ PlayerStats;
      thanksReceived?: number;
      thanksSent?: number;
      timePlaying?: number;
      totalDailyRewards?: number;
      totalRewards?: number;
      tourney?: /* Aside from the properties in the schema this object contains properties who's keys follow a format like "GAMEMODE_TYPE_NUMBER". e.g. "sw_insane_doubles_0". These fit the "PlayerTourneyGameData" schema. */ PlayerTourney;
      tournamentTokens?: number;
      vanityConvertedBoxToday?: number;
      vanityFirstConvertedBox?: number;
      voting?: PlayerVoting;
      vanityTokens?: number;
    }
    export interface PlayerStatsGameMode {
      [name: string]: undefined | number | boolean | string | string[];
      packages?: string[];
    }
    /**
     * Housing stats, generally limited to layout items - either the layout_items property will exist or there may be a property in the format of "layout_items_UUID".
     *
     */
    export interface PlayerStatsHousing {
      [name: string]: undefined | PlayerStatsHousingLayoutItems;
      layout_items?: PlayerStatsHousingLayoutItems;
    }
    export interface PlayerStatsHousingLayoutItems {
      [name: string]: string;
    }
    export interface PlayerStatsPit {
      [name: string]:
        | undefined
        | number
        | boolean
        | string
        | string[]
        | PlayerStatsGameMode
        | PlayerStatsPitProfile;
      packages?: string[];
      pit_stats_ptl?: PlayerStatsGameMode;
      profile: PlayerStatsPitProfile;
    }
    export interface PlayerStatsPitProfile {
      [name: string]:
        | undefined
        | null
        | number
        | boolean
        | string
        | string[]
        | PlayerStatsPitProfileBounty[]
        | PlayerStatsPitProfileContract
        | PlayerStatsPitProfileContract[]
        | PlayerStatsPitProfileEndedContract[]
        | PlayerStatsPitProfileTransaction[]
        | PlayerStatsPitProfileLeaderboardStats
        | /* No properties known. */ PlayerStatsPitProfileOutgoingOffer[]
        | PlayerStatsPitProfileInventory
        | PlayerStatsPitProfilePrestige[]
        | PlayerStatsPitProfileUnlock[]
        | number[];
      packages?: string[];
      bounties?: PlayerStatsPitProfileBounty[];
      cash?: number;
      contract?: PlayerStatsPitProfileContract;
      contract_choices?: PlayerStatsPitProfileContract[];
      death_recaps?: PlayerStatsPitProfileInventory;
      ended_contracts?: PlayerStatsPitProfileEndedContract[];
      gold_transactions?: PlayerStatsPitProfileTransaction[];
      hotbar_favorites?: number[];
      inv_armor: PlayerStatsPitProfileInventory;
      inv_contents: PlayerStatsPitProfileInventory;
      inv_enderchest?: PlayerStatsPitProfileInventory;
      item_stash?: PlayerStatsPitProfileInventory;
      items_last_buy?: PlayerStatsPitProfileLastBoughtItems;
      /**
       * Timestamp.
       */
      last_contract?: number;
      /**
       * Timestamp.
       */
      last_midfight_disconnect?: number;
      /**
       * Timestamp.
       */
      last_save: number;
      leaderboard_stats?: PlayerStatsPitProfileLeaderboardStats;
      login_messages: string[];
      outgoing_offers?: /* No properties known. */ PlayerStatsPitProfileOutgoingOffer[];
      prestiges?: PlayerStatsPitProfilePrestige[];
      /**
       * Timestamp.
       */
      reconessence_day?: number;
      renown?: number;
      renown_unlocks?: PlayerStatsPitProfileUnlock[];
      selected_killstreak_0?: string | null;
      selected_killstreak_1?: string | null;
      selected_killstreak_2?: string | null;
      selected_killstreak_3?: string | null;
      selected_perk_0?: string | null;
      selected_perk_1?: string | null;
      selected_perk_2?: string | null;
      selected_perk_3?: string | null;
      spire_stash_armor?: PlayerStatsPitProfileInventory;
      spire_stash_inv?: PlayerStatsPitProfileInventory;
      trade_timestamps?: number[];
      /**
       * Other properties of this type might appear with the key "unlocks_NUMBER" e.g. "unlocks_10"
       */
      unlocks?: PlayerStatsPitProfileUnlock[];
      xp?: number;
      zero_point_three_gold_transfer?: boolean;
    }
    export interface PlayerStatsPitProfileBounty {
      amount: number;
      issuer: string;
      remainingTicks: number;
      timestamp: number;
    }
    export interface PlayerStatsPitProfileContract {
      [name: string]:
        | undefined
        | number
        | string
        | /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
      chunk_of_viles_reward?: number;
      completion_date: number;
      difficulty: string;
      progress: /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
      remaining_ticks: number;
      requirements: /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
      gold_reward: number;
      key: string;
    }
    /**
     * Property key is the type of requirement.
     */
    export interface PlayerStatsPitProfileContractRequirements {
      [name: string]: undefined | number;
    }
    export interface PlayerStatsPitProfileEndedContract {
      [name: string]:
        | undefined
        | number
        | string
        | /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
      chunk_of_viles_reward?: number;
      completion_date: number;
      difficulty: string;
      progress: /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
      remaining_ticks: number;
      requirements: /* Property key is the type of requirement. */ PlayerStatsPitProfileContractRequirements;
    }
    export interface PlayerStatsPitProfileInventory {
      data: number[];
      type: number;
    }
    export interface PlayerStatsPitProfileLastBoughtItems {
      [name: string]: number;
    }
    export interface PlayerStatsPitProfileLeaderboardStats {
      [name: string]: number;
    }
    /**
     * No properties known.
     */
    export interface PlayerStatsPitProfileOutgoingOffer {
      [name: string]: unknown;
    }
    export interface PlayerStatsPitProfilePrestige {
      index: number;
      timestamp: number;
      xp_on_prestige: number;
    }
    export interface PlayerStatsPitProfileTransaction {
      amount: number;
      timestamp: number;
    }
    export interface PlayerStatsPitProfileUnlock {
      acquireDate: number;
      key: string;
      tier: number;
    }
    /**
     * An object which properties describe each individual profile the player is a member of.
     */
    export interface PlayerStatsSkyBlock {
      profiles: {
        [name: string]: {
          cute_name: string;
          profile_id: string;
        };
      };
    }
    export interface PlayerStatsWalls3 {
      [name: string]:
        | undefined
        | number
        | boolean
        | string
        | string[]
        | /* Each property key describes a class name. */ PlayerStatsWalls3Classes;
      packages?: string[];
      classes?: /* Each property key describes a class name. */ PlayerStatsWalls3Classes;
    }
    /**
     * Each property key describes a class name.
     */
    export interface PlayerStatsWalls3Classes {
      [name: string]: {
        [name: string]: boolean | number;
      };
    }
    export interface PlayerTaskData {
      challenges?: /**
       * In addition to the all_time property, other properties may appear that have properties that start with "day_" but have the same schema as all_time.
       *
       */
      PlayerChallenges;
      quests?: /* An object which has properties which match quests described by the /resources/quests endpoint. */ PlayerQuests;
    }
    /**
     * Aside from the properties in the schema this object contains properties who's keys follow a format like "GAMEMODE_TYPE_NUMBER". e.g. "sw_insane_doubles_0". These fit the "PlayerTourneyGameData" schema.
     */
    export interface PlayerTourney {
      [name: string]:
        | undefined
        | number
        | string
        | boolean
        | {
            [name: string]: number;
          }
        | PlayerTourneyGameData;
      first_join_lobby?: number;
      hide_purchased?: boolean;
      playtime?: {
        [name: string]: number;
      };
      shop_sort?: string;
      total_tributes?: number;
    }
    export interface PlayerTourneyGameData {
      claimed_ranking_reward?: number;
      first_win?: number;
      games_played?: number;
      playtime?: number;
      seenRPbook?: boolean;
      tributes_earned?: number;
    }
    /**
     * An object describing what I assume to be testers who've logged in with a specific language.
     *
     */
    export interface PlayerUpcomingLanguageRelease {
      logins: number;
    }
    export interface PlayerVanityMeta {
      packages: string[];
    }
    export interface PlayerVoting {
      [name: string]: undefined | number;
      last_mcf?: number;
      last_mcipl?: number;
      last_mcmp?: number;
      last_mcsl?: number;
      last_mcsorg?: number;
      last_minestatus?: number;
      last_pact?: number;
      last_pmc?: number;
      last_topg?: number;
      last_vote?: number;
      secondary_mcf?: number;
      secondary_mcipl?: number;
      secondary_mcmp?: number;
      secondary_mcsl?: number;
      secondary_mcsorg?: number;
      secondary_minestatus?: number;
      secondary_pact?: number;
      secondary_pmc?: number;
      secondary_topg?: number;
      total: number;
      total_mcf?: number;
      total_mcipl?: number;
      total_mcmp?: number;
      total_mcsl?: number;
      total_mcsorg?: number;
      total_minestatus?: number;
      total_pact?: number;
      total_pmc?: number;
      total_topg?: number;
      votesToday?: number;
    }
    export type QuestDataArray = {
      id: string;
      name: string;
      rewards: {
        type: string;
        amount?: number;
        package?: string;
      }[];
      objectives: {
        id: string;
        type: string;
        integer?: number;
      }[];
      requirements: {
        type: string;
      }[];
      description: string;
    }[];
    export interface QuestsResourceResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      /**
       * Unix timestamp this resource was last updated.
       */
      lastUpdated: number;
      quests: {
        [name: string]: QuestDataArray;
        quake: QuestDataArray;
        walls: QuestDataArray;
        paintball: QuestDataArray;
        hungergames: QuestDataArray;
        tntgames: QuestDataArray;
        vampirez: QuestDataArray;
        walls3: QuestDataArray;
        arcade: QuestDataArray;
        arena: QuestDataArray;
        uhc: QuestDataArray;
        mcgo: QuestDataArray;
        battleground: QuestDataArray;
        supersmash: QuestDataArray;
        gingerbread: QuestDataArray;
        skywars: QuestDataArray;
        truecombat: QuestDataArray;
        skyclash: QuestDataArray;
        prototype: QuestDataArray;
        bedwars: QuestDataArray;
        murdermystery: QuestDataArray;
        buildbattle: QuestDataArray;
        duels: QuestDataArray;
      };
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
    export interface SkyBlockAuction {
      uuid: string;
      auctioneer: string;
      profile_id: string;
      coop: string[];
      start: number;
      end: number;
      item_name: string;
      item_lore: string;
      extra: string;
      category: string;
      tier: string;
      starting_bid: number;
      claimed: boolean;
      claimed_bidders: string[];
      highest_bid_amount: number;
      bids: {
        /**
         * UUID of the auction.
         */
        auction_id: string;
        /**
         * Minecraft UUID of the bidder.
         */
        bidder: string;
        /**
         * The Hypixel SkyBlock profile ID of the profile the bidder was on when they placed the bid.
         */
        profile_id?: string;
        /**
         * The amount in coins the bid is for.
         */
        amount: number;
        /**
         * Unix timestamp the bid was placed.
         */
        timestamp: number;
      }[];
      bin?: boolean;
    }
    export interface SkyBlockAuctionResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      auctions: {
        uuid: string;
        auctioneer: string;
        profile_id: string;
        coop: string[];
        start: number;
        end: number;
        item_name: string;
        item_lore: string;
        extra: string;
        category: string;
        tier: string;
        starting_bid: number;
        claimed: boolean;
        claimed_bidders: string[];
        highest_bid_amount: number;
        bids: {
          /**
           * UUID of the auction.
           */
          auction_id: string;
          /**
           * Minecraft UUID of the bidder.
           */
          bidder: string;
          /**
           * The Hypixel SkyBlock profile ID of the profile the bidder was on when they placed the bid.
           */
          profile_id?: string;
          /**
           * The amount in coins the bid is for.
           */
          amount: number;
          /**
           * Unix timestamp the bid was placed.
           */
          timestamp: number;
        }[];
        bin?: boolean;
        _id: string;
        item_bytes: {
          type: number;
          /**
           * Base64 encoded NBT data for the item.
           */
          data: string;
        };
      }[];
    }
    export interface SkyBlockAuctionsEndedResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      lastUpdated: number;
      auctions: {
        /**
         * Unique ID associated with the auction.
         */
        auction_id: string;
        /**
         * Minecraft UUID of the seller.
         */
        seller: string;
        /**
         * SkyBlock profile ID of the seller.
         */
        seller_profile: string;
        /**
         * Minecraft UUID of the buyer.
         */
        buyer: string;
        /**
         * Auction end timestamp.
         */
        timestamp: number;
        /**
         * Coins the buyer spent.
         */
        price: number;
        /**
         * Whether or not it was a buy it now auction.
         */
        bin: boolean;
        /**
         * Base64 encoded NBT data for the item.
         */
        item_bytes: string;
      }[];
    }
    export interface SkyBlockAuctionsResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      page: number;
      totalPages: number;
      totalAuctions: number;
      lastUpdated: number;
      auctions: {
        uuid: string;
        auctioneer: string;
        profile_id: string;
        coop: string[];
        start: number;
        end: number;
        item_name: string;
        item_lore: string;
        extra: string;
        category: string;
        tier: string;
        starting_bid: number;
        claimed: boolean;
        claimed_bidders: string[];
        highest_bid_amount: number;
        bids: {
          /**
           * UUID of the auction.
           */
          auction_id: string;
          /**
           * Minecraft UUID of the bidder.
           */
          bidder: string;
          /**
           * The Hypixel SkyBlock profile ID of the profile the bidder was on when they placed the bid.
           */
          profile_id?: string;
          /**
           * The amount in coins the bid is for.
           */
          amount: number;
          /**
           * Unix timestamp the bid was placed.
           */
          timestamp: number;
        }[];
        bin?: boolean;
        /**
         * Base64 encoded NBT data for the item.
         */
        item_bytes: string;
      }[];
    }
    export interface SkyBlockBazaarProduct {
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
    }
    export interface SkyBlockBazaarResponse {
      /**
       * Whether or not the request succeeded.
       */
      success: boolean;
      lastUpdated: number;
      products: {
        [name: string]: SkyBlockBazaarProduct;
        ANCIENT_CLAW: SkyBlockBazaarProduct;
        BAZAAR_COOKIE: SkyBlockBazaarProduct;
        BLAZE_ROD: SkyBlockBazaarProduct;
        BLESSED_BAIT: SkyBlockBazaarProduct;
        BLUE_SHARK_TOOTH: SkyBlockBazaarProduct;
        BONE: SkyBlockBazaarProduct;
        BOOSTER_COOKIE: SkyBlockBazaarProduct;
        BROWN_MUSHROOM: SkyBlockBazaarProduct;
        CACTUS: SkyBlockBazaarProduct;
        CARROT_BAIT: SkyBlockBazaarProduct;
        CARROT_ITEM: SkyBlockBazaarProduct;
        CATALYST: SkyBlockBazaarProduct;
        CLAY_BALL: SkyBlockBazaarProduct;
        COAL: SkyBlockBazaarProduct;
        COBBLESTONE: SkyBlockBazaarProduct;
        COMPACTOR: SkyBlockBazaarProduct;
        DAEDALUS_STICK: SkyBlockBazaarProduct;
        DARK_BAIT: SkyBlockBazaarProduct;
        DIAMOND: SkyBlockBazaarProduct;
        ECTOPLASM: SkyBlockBazaarProduct;
        EMERALD: SkyBlockBazaarProduct;
        ENCHANTED_ACACIA_LOG: SkyBlockBazaarProduct;
        ENCHANTED_ANCIENT_CLAW: SkyBlockBazaarProduct;
        ENCHANTED_BAKED_POTATO: SkyBlockBazaarProduct;
        ENCHANTED_BIRCH_LOG: SkyBlockBazaarProduct;
        ENCHANTED_BLAZE_POWDER: SkyBlockBazaarProduct;
        ENCHANTED_BLAZE_ROD: SkyBlockBazaarProduct;
        ENCHANTED_BONE: SkyBlockBazaarProduct;
        ENCHANTED_BONE_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_BREAD: SkyBlockBazaarProduct;
        ENCHANTED_BROWN_MUSHROOM: SkyBlockBazaarProduct;
        ENCHANTED_CACTUS: SkyBlockBazaarProduct;
        ENCHANTED_CACTUS_GREEN: SkyBlockBazaarProduct;
        ENCHANTED_CAKE: SkyBlockBazaarProduct;
        ENCHANTED_CARROT: SkyBlockBazaarProduct;
        ENCHANTED_CARROT_ON_A_STICK: SkyBlockBazaarProduct;
        ENCHANTED_CARROT_STICK: SkyBlockBazaarProduct;
        ENCHANTED_CHARCOAL: SkyBlockBazaarProduct;
        ENCHANTED_CLAY_BALL: SkyBlockBazaarProduct;
        ENCHANTED_CLOWNFISH: SkyBlockBazaarProduct;
        ENCHANTED_COAL: SkyBlockBazaarProduct;
        ENCHANTED_COAL_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_COBBLESTONE: SkyBlockBazaarProduct;
        ENCHANTED_COCOA: SkyBlockBazaarProduct;
        ENCHANTED_COOKED_FISH: SkyBlockBazaarProduct;
        ENCHANTED_COOKED_MUTTON: SkyBlockBazaarProduct;
        ENCHANTED_COOKED_SALMON: SkyBlockBazaarProduct;
        ENCHANTED_COOKIE: SkyBlockBazaarProduct;
        ENCHANTED_DARK_OAK_LOG: SkyBlockBazaarProduct;
        ENCHANTED_DIAMOND: SkyBlockBazaarProduct;
        ENCHANTED_DIAMOND_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_EGG: SkyBlockBazaarProduct;
        ENCHANTED_EMERALD: SkyBlockBazaarProduct;
        ENCHANTED_EMERALD_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_ENDER_PEARL: SkyBlockBazaarProduct;
        ENCHANTED_ENDSTONE: SkyBlockBazaarProduct;
        ENCHANTED_EYE_OF_ENDER: SkyBlockBazaarProduct;
        ENCHANTED_FEATHER: SkyBlockBazaarProduct;
        ENCHANTED_FERMENTED_SPIDER_EYE: SkyBlockBazaarProduct;
        ENCHANTED_FIREWORK_ROCKET: SkyBlockBazaarProduct;
        ENCHANTED_FLINT: SkyBlockBazaarProduct;
        ENCHANTED_GHAST_TEAR: SkyBlockBazaarProduct;
        ENCHANTED_GLISTERING_MELON: SkyBlockBazaarProduct;
        ENCHANTED_GLOWSTONE: SkyBlockBazaarProduct;
        ENCHANTED_GLOWSTONE_DUST: SkyBlockBazaarProduct;
        ENCHANTED_GOLD: SkyBlockBazaarProduct;
        ENCHANTED_GOLD_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_GOLDEN_CARROT: SkyBlockBazaarProduct;
        ENCHANTED_GRILLED_PORK: SkyBlockBazaarProduct;
        ENCHANTED_GUNPOWDER: SkyBlockBazaarProduct;
        ENCHANTED_HAY_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_HUGE_MUSHROOM_1: SkyBlockBazaarProduct;
        ENCHANTED_HUGE_MUSHROOM_2: SkyBlockBazaarProduct;
        ENCHANTED_ICE: SkyBlockBazaarProduct;
        ENCHANTED_INK_SACK: SkyBlockBazaarProduct;
        ENCHANTED_IRON: SkyBlockBazaarProduct;
        ENCHANTED_IRON_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_JUNGLE_LOG: SkyBlockBazaarProduct;
        ENCHANTED_LAPIS_LAZULI: SkyBlockBazaarProduct;
        ENCHANTED_LAPIS_LAZULI_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_LAVA_BUCKET: SkyBlockBazaarProduct;
        ENCHANTED_LEATHER: SkyBlockBazaarProduct;
        ENCHANTED_MAGMA_CREAM: SkyBlockBazaarProduct;
        ENCHANTED_MELON: SkyBlockBazaarProduct;
        ENCHANTED_MELON_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_MUTTON: SkyBlockBazaarProduct;
        ENCHANTED_NETHER_STALK: SkyBlockBazaarProduct;
        ENCHANTED_OAK_LOG: SkyBlockBazaarProduct;
        ENCHANTED_OBSIDIAN: SkyBlockBazaarProduct;
        ENCHANTED_PACKED_ICE: SkyBlockBazaarProduct;
        ENCHANTED_PAPER: SkyBlockBazaarProduct;
        ENCHANTED_PORK: SkyBlockBazaarProduct;
        ENCHANTED_POTATO: SkyBlockBazaarProduct;
        ENCHANTED_PRISMARINE_CRYSTALS: SkyBlockBazaarProduct;
        ENCHANTED_PRISMARINE_SHARD: SkyBlockBazaarProduct;
        ENCHANTED_PUFFERFISH: SkyBlockBazaarProduct;
        ENCHANTED_PUMPKIN: SkyBlockBazaarProduct;
        ENCHANTED_QUARTZ: SkyBlockBazaarProduct;
        ENCHANTED_QUARTZ_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_RABBIT: SkyBlockBazaarProduct;
        ENCHANTED_RABBIT_FOOT: SkyBlockBazaarProduct;
        ENCHANTED_RABBIT_HIDE: SkyBlockBazaarProduct;
        ENCHANTED_RAW_BEEF: SkyBlockBazaarProduct;
        ENCHANTED_RAW_CHICKEN: SkyBlockBazaarProduct;
        ENCHANTED_RAW_FISH: SkyBlockBazaarProduct;
        ENCHANTED_RAW_SALMON: SkyBlockBazaarProduct;
        ENCHANTED_RED_MUSHROOM: SkyBlockBazaarProduct;
        ENCHANTED_REDSTONE: SkyBlockBazaarProduct;
        ENCHANTED_REDSTONE_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_REDSTONE_LAMP: SkyBlockBazaarProduct;
        ENCHANTED_ROTTEN_FLESH: SkyBlockBazaarProduct;
        ENCHANTED_SAND: SkyBlockBazaarProduct;
        ENCHANTED_SEEDS: SkyBlockBazaarProduct;
        ENCHANTED_SHARK_FIN: SkyBlockBazaarProduct;
        ENCHANTED_SLIME_BALL: SkyBlockBazaarProduct;
        ENCHANTED_SLIME_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_SNOW_BLOCK: SkyBlockBazaarProduct;
        ENCHANTED_SPIDER_EYE: SkyBlockBazaarProduct;
        ENCHANTED_SPONGE: SkyBlockBazaarProduct;
        ENCHANTED_SPRUCE_LOG: SkyBlockBazaarProduct;
        ENCHANTED_STRING: SkyBlockBazaarProduct;
        ENCHANTED_SUGAR: SkyBlockBazaarProduct;
        ENCHANTED_SUGAR_CANE: SkyBlockBazaarProduct;
        ENCHANTED_WATER_LILY: SkyBlockBazaarProduct;
        ENCHANTED_WET_SPONGE: SkyBlockBazaarProduct;
        ENDER_PEARL: SkyBlockBazaarProduct;
        ENDER_STONE: SkyBlockBazaarProduct;
        FEATHER: SkyBlockBazaarProduct;
        FISH_BAIT: SkyBlockBazaarProduct;
        FLINT: SkyBlockBazaarProduct;
        FOUL_FLESH: SkyBlockBazaarProduct;
        FUMING_POTATO_BOOK: SkyBlockBazaarProduct;
        GHAST_TEAR: SkyBlockBazaarProduct;
        GLOWSTONE_DUST: SkyBlockBazaarProduct;
        GOLD_INGOT: SkyBlockBazaarProduct;
        GOLDEN_TOOTH: SkyBlockBazaarProduct;
        GRAVEL: SkyBlockBazaarProduct;
        GREAT_WHITE_SHARK_TOOTH: SkyBlockBazaarProduct;
        GREEN_CANDY: SkyBlockBazaarProduct;
        GREEN_GIFT: SkyBlockBazaarProduct;
        GRIFFIN_FEATHER: SkyBlockBazaarProduct;
        HAMSTER_WHEEL: SkyBlockBazaarProduct;
        HAY_BLOCK: SkyBlockBazaarProduct;
        HOLY_FRAGMENT: SkyBlockBazaarProduct;
        HOT_POTATO_BOOK: SkyBlockBazaarProduct;
        HUGE_MUSHROOM_1: SkyBlockBazaarProduct;
        HUGE_MUSHROOM_2: SkyBlockBazaarProduct;
        HYPER_CATALYST: SkyBlockBazaarProduct;
        ICE: SkyBlockBazaarProduct;
        ICE_BAIT: SkyBlockBazaarProduct;
        INK_SACK: SkyBlockBazaarProduct;
        "INK_SACK:3": SkyBlockBazaarProduct;
        "INK_SACK:4": SkyBlockBazaarProduct;
        IRON_INGOT: SkyBlockBazaarProduct;
        JACOBS_TICKET: SkyBlockBazaarProduct;
        LEATHER: SkyBlockBazaarProduct;
        LIGHT_BAIT: SkyBlockBazaarProduct;
        LOG: SkyBlockBazaarProduct;
        "LOG:1": SkyBlockBazaarProduct;
        "LOG:2": SkyBlockBazaarProduct;
        "LOG:3": SkyBlockBazaarProduct;
        LOG_2: SkyBlockBazaarProduct;
        "LOG_2:1": SkyBlockBazaarProduct;
        MAGMA_CREAM: SkyBlockBazaarProduct;
        MELON: SkyBlockBazaarProduct;
        MINNOW_BAIT: SkyBlockBazaarProduct;
        MUTTON: SkyBlockBazaarProduct;
        NETHER_STALK: SkyBlockBazaarProduct;
        NETHERRACK: SkyBlockBazaarProduct;
        NURSE_SHARK_TOOTH: SkyBlockBazaarProduct;
        OBSIDIAN: SkyBlockBazaarProduct;
        OLD_FRAGMENT: SkyBlockBazaarProduct;
        PACKED_ICE: SkyBlockBazaarProduct;
        PORK: SkyBlockBazaarProduct;
        POTATO_ITEM: SkyBlockBazaarProduct;
        PRISMARINE_CRYSTALS: SkyBlockBazaarProduct;
        PRISMARINE_SHARD: SkyBlockBazaarProduct;
        PROTECTOR_FRAGMENT: SkyBlockBazaarProduct;
        PUMPKIN: SkyBlockBazaarProduct;
        PUMPKIN_GUTS: SkyBlockBazaarProduct;
        PURPLE_CANDY: SkyBlockBazaarProduct;
        QUARTZ: SkyBlockBazaarProduct;
        RABBIT: SkyBlockBazaarProduct;
        RABBIT_FOOT: SkyBlockBazaarProduct;
        RABBIT_HIDE: SkyBlockBazaarProduct;
        RAW_BEEF: SkyBlockBazaarProduct;
        RAW_CHICKEN: SkyBlockBazaarProduct;
        RAW_FISH: SkyBlockBazaarProduct;
        "RAW_FISH:1": SkyBlockBazaarProduct;
        "RAW_FISH:2": SkyBlockBazaarProduct;
        "RAW_FISH:3": SkyBlockBazaarProduct;
        RECOMBOBULATOR_3000: SkyBlockBazaarProduct;
        RED_GIFT: SkyBlockBazaarProduct;
        RED_MUSHROOM: SkyBlockBazaarProduct;
        REDSTONE: SkyBlockBazaarProduct;
        REFINED_MINERAL: SkyBlockBazaarProduct;
        REVENANT_FLESH: SkyBlockBazaarProduct;
        REVENANT_VISCERA: SkyBlockBazaarProduct;
        ROTTEN_FLESH: SkyBlockBazaarProduct;
        SAND: SkyBlockBazaarProduct;
        SEEDS: SkyBlockBazaarProduct;
        SHARK_BAIT: SkyBlockBazaarProduct;
        SHARK_FIN: SkyBlockBazaarProduct;
        SLIME_BALL: SkyBlockBazaarProduct;
        SNOW_BALL: SkyBlockBazaarProduct;
        SNOW_BLOCK: SkyBlockBazaarProduct;
        SOUL_FRAGMENT: SkyBlockBazaarProduct;
        SPIDER_EYE: SkyBlockBazaarProduct;
        SPIKED_BAIT: SkyBlockBazaarProduct;
        SPONGE: SkyBlockBazaarProduct;
        SPOOKY_BAIT: SkyBlockBazaarProduct;
        SPOOKY_SHARD: SkyBlockBazaarProduct;
        STOCK_OF_STONKS: SkyBlockBazaarProduct;
        STRING: SkyBlockBazaarProduct;
        STRONG_FRAGMENT: SkyBlockBazaarProduct;
        SUGAR_CANE: SkyBlockBazaarProduct;
        SULPHUR: SkyBlockBazaarProduct;
        SUMMONING_EYE: SkyBlockBazaarProduct;
        SUPER_COMPACTOR_3000: SkyBlockBazaarProduct;
        SUPER_EGG: SkyBlockBazaarProduct;
        SUPERIOR_FRAGMENT: SkyBlockBazaarProduct;
        TARANTULA_SILK: SkyBlockBazaarProduct;
        TARANTULA_WEB: SkyBlockBazaarProduct;
        TIGER_SHARK_TOOTH: SkyBlockBazaarProduct;
        UNSTABLE_FRAGMENT: SkyBlockBazaarProduct;
        WATER_LILY: SkyBlockBazaarProduct;
        WEREWOLF_SKIN: SkyBlockBazaarProduct;
        WHALE_BAIT: SkyBlockBazaarProduct;
        WHEAT: SkyBlockBazaarProduct;
        WHITE_GIFT: SkyBlockBazaarProduct;
        WISE_FRAGMENT: SkyBlockBazaarProduct;
        WOLF_TOOTH: SkyBlockBazaarProduct;
        YOUNG_FRAGMENT: SkyBlockBazaarProduct;
      };
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
    export type SkyBlockProfile = {
      autodelete?: boolean;
      banking?: /* Profile banking information. Only shows up if their banking API is enabled. */ SkyBlockProfileBanking;
      community_upgrades?: SkyBlockProfileCommunityUpgrades;
      /**
       * Often this field is "ironman".
       */
      game_mode?: string;
      /**
       * The members of this profile. The object key is their Minecraft UUID.
       */
      members: {
        [name: string]: SkyBlockProfileMember;
      };
      profile_id: string;
    } | null;
    /**
     * Profile banking information. Only shows up if their banking API is enabled.
     */
    export interface SkyBlockProfileBanking {
      balance: number;
      transactions: SkyBlockProfileBankingTransaction[];
    }
    export interface SkyBlockProfileBankingTransaction {
      action: string;
      amount: number;
      initiator_name: string;
      timestamp: number;
    }
    /**
     * Each property key is the collection's item, and the value is the XP.
     */
    export interface SkyBlockProfileCollection {
      [name: string]: undefined | number;
      BLAZE_ROD?: number;
      BONE?: number;
      CACTUS?: number;
      CARROT_ITEM?: number;
      CLAY_BALL?: number;
      COAL?: number;
      COBBLESTONE?: number;
      DIAMOND?: number;
      EMERALD?: number;
      ENCHANTED_CLAY_BALL?: number;
      ENCHANTED_DIAMOND?: number;
      ENDER_PEARL?: number;
      ENDER_STONE?: number;
      FEATHER?: number;
      GHAST_TEAR?: number;
      GLOWSTONE_DUST?: number;
      GOLD_INGOT?: number;
      GRAVEL?: number;
      ICE?: number;
      INK_SACK?: number;
      "INK_SACK:3"?: number;
      "INK_SACK:4"?: number;
      IRON_INGOT?: number;
      LEATHER?: number;
      LOG?: number;
      "LOG:1"?: number;
      "LOG:2"?: number;
      "LOG:3"?: number;
      LOG_2?: number;
      "LOG_2:1"?: number;
      MAGMA_CREAM?: number;
      MELON?: number;
      MUSHROOM_COLLECTION?: number;
      MUTTON?: number;
      NETHERRACK?: number;
      NETHER_STALK?: number;
      OBSIDIAN?: number;
      PORK?: number;
      POTATO_ITEM?: number;
      PRISMARINE_CRYSTALS?: number;
      PRISMARINE_SHARD?: number;
      PUMPKIN?: number;
      QUARTZ?: number;
      RABBIT?: number;
      RABBIT_HIDE?: number;
      RAW_CHICKEN?: number;
      RAW_FISH?: number;
      "RAW_FISH:1"?: number;
      "RAW_FISH:2"?: number;
      "RAW_FISH:3"?: number;
      REDSTONE?: number;
      ROTTEN_FLESH?: number;
      SAND?: number;
      SEEDS?: number;
      SLIME_BALL?: number;
      SNOW_BLOCK?: number;
      SPIDER_EYE?: number;
      SPONGE?: number;
      STRING?: number;
      SUGAR_CANE?: number;
      SULPHUR?: number;
      WATER_LILY?: number;
      WHEAT?: number;
      WOOL?: number;
    }
    export interface SkyBlockProfileCollectionsAPI {
      collection?: /* Each property key is the collection's item, and the value is the XP. */ SkyBlockProfileCollection;
      /**
       * An array of values, each value describing a collection tier that has been unlocked.
       */
      unlocked_coll_tiers?: string[];
    }
    export interface SkyBlockProfileCommunityUpgrades {
      currently_upgrading: SkyBlockProfileCommunityUpgradesCurrent;
      upgrade_states?: SkyBlockProfileCommunityUpgradesState[];
    }
    export interface SkyBlockProfileCommunityUpgradesCurrent {
      new_tier: number;
      /**
       * Timestamp of when it was started.
       */
      start_ms: number;
      upgrade: string;
      /**
       * Minecraft UUID of the player that started this.
       */
      who_started: string;
    }
    export interface SkyBlockProfileCommunityUpgradesState {
      /**
       * Minecraft UUID of the player that claimed this.
       */
      claimed_by: string;
      /**
       * Timestamp of when it was claimed.
       */
      claimed_ms: number;
      fasttracked: boolean;
      /**
       * Minecraft UUID of the player that started this.
       */
      started_by: string;
      /**
       * Timestamp of when it was started.
       */
      started_ms: number;
      tier: number;
      upgrade: string;
    }
    /**
     * Coop invitation that the member accepted.
     */
    export interface SkyBlockProfileCoopInvitation {
      confirmed?: boolean;
      /**
       * The timestamp of when the player accepted the invite.
       */
      confirmed_timestamp?: number;
      /**
       * The Minecraft UUID of the player who invited them.
       */
      invited_by: string;
      /**
       * When the invitation was created.
       */
      timestamp: number;
    }
    export type SkyBlockProfileCuteName = {
      autodelete?: boolean;
      banking?: /* Profile banking information. Only shows up if their banking API is enabled. */ SkyBlockProfileBanking;
      community_upgrades?: SkyBlockProfileCommunityUpgrades;
      /**
       * Often this field is "ironman".
       */
      game_mode?: string;
      /**
       * The members of this profile. The object key is their Minecraft UUID.
       */
      members: {
        [name: string]: SkyBlockProfileMember;
      };
      profile_id: string;
      /**
       * Cute name of the profile. e.g. "Strawberry"
       * example:
       * Strawberry
       */
      cute_name: string;
    } | null;
    /**
     * Array of values, each value describing a dungeon NPC the profile member has spoken to.
     */
    export type SkyBlockProfileDungeonBlahBlah = string[];
    export interface SkyBlockProfileDungeonClass {
      experience: number;
    }
    export interface SkyBlockProfileDungeonJournal {
      journal_entries?: {
        [name: string]: undefined | SkyBlockProfileDungeonJournalEntries;
        expedition_volume_1?: SkyBlockProfileDungeonJournalEntries;
        expedition_volume_2?: SkyBlockProfileDungeonJournalEntries;
        karylles_diary?: SkyBlockProfileDungeonJournalEntries;
        the_study?: SkyBlockProfileDungeonJournalEntries;
        uncanny_remains?: SkyBlockProfileDungeonJournalEntries;
      };
    }
    export type SkyBlockProfileDungeonJournalEntries = number[];
    export interface SkyBlockProfileDungeonType {
      /**
       * The property key is the floor these run stats were achieved on.
       */
      best_runs?: {
        [name: string]: SkyBlockProfileDungeonTypeFloorRun;
      };
      /**
       * The property key is the floor number this score was achieved on.
       */
      best_score?: {
        [name: string]: number;
      };
      /**
       * The amount of exp this profile member has in this dungeon type.
       */
      experience?: number;
      /**
       * The property key is the floor number this time was achieved on.
       */
      fastest_time?: {
        [name: string]: number;
      };
      /**
       * Fastest time for an S completion. The property key is the floor number this time was achieved on.
       */
      fastest_time_s?: {
        [name: string]: number;
      };
      /**
       * Fastest time for an S+ completion. The property key is the floor number this time was achieved on.
       */
      fastest_time_s_plus?: {
        [name: string]: number;
      };
      /**
       * Highest dungeon tier the profile member has completed of this type.
       */
      highest_tier_completed?: number;
      /**
       * The property key is the floor number these mobs were killed on.
       */
      mobs_killed?: {
        [name: string]: number;
      };
      /**
       * The most damage this profile member has dealt in a single run as an archer. The object key is the floor number.
       */
      most_damage_archer?: {
        [name: string]: number;
      };
      /**
       * The most damage this profile member has dealt in a single run as a berserker. The object key is the floor number.
       */
      most_damage_berserk?: {
        [name: string]: number;
      };
      /**
       * The most damage this profile member has dealt in a single run as a mage. The object key is the floor number.
       */
      most_damage_mage?: {
        [name: string]: number;
      };
      /**
       * The most damage this profile member has dealt in a single run as a tank. The object key is the floor number.
       */
      most_damage_tank?: {
        [name: string]: number;
      };
      /**
       * The most healing this profile member has performed in a single run. The object key is the floor number.
       */
      most_healing?: {
        [name: string]: number;
      };
      /**
       * The most mobs this profile member has killed in a single run. The object key is the floor number.
       */
      most_mobs_killed?: {
        [name: string]: number;
      };
      /**
       * The amount of times this profile member has completed each floor. The object key is the floor number.
       */
      tier_completions?: {
        [name: string]: number;
      };
      /**
       * The amount of times this profile member has attempted each floor. The object key is the floor number.
       */
      times_played?: {
        [name: string]: number;
      };
      /**
       * The amount of times this profile member has killed the watcher. The object key is the floor number.
       */
      watcher_kills?: {
        [name: string]: number;
      };
    }
    export type SkyBlockProfileDungeonTypeFloorRun = {
      ally_healing?: number;
      damage_dealt: number;
      damage_mitigated: number;
      deaths: number;
      dungeon_class: string;
      elapsed_time: number;
      mobs_killed: number;
      score_bonus: number;
      score_exploration: number;
      score_skill: number;
      score_speed: number;
      secrets_found: number;
      teammates: string[];
      timestamp: number;
    }[];
    export interface SkyBlockProfileInventoryAPI {
      candy_inventory_contents?: SkyBlockProfileInventoryData;
      ender_chest_contents?: SkyBlockProfileInventoryData;
      fishing_bag?: SkyBlockProfileInventoryData;
      inv_contents?: SkyBlockProfileInventoryData;
      potion_bag?: SkyBlockProfileInventoryData;
      quiver?: SkyBlockProfileInventoryData;
      sacks_counts?: /* The contents of their sacks. */ SkyBlockProfileSacksCounts;
      talisman_bag?: SkyBlockProfileInventoryData;
      wardrobe_contents?: SkyBlockProfileInventoryData;
      wardrobe_equipped_slot?: number;
    }
    export interface SkyBlockProfileInventoryData {
      data: string;
      type: number;
    }
    export interface SkyBlockProfileMember {
      /**
       * An array of values, each value describing an island that has been spawned by the member. e.g. "Pond Island"
       */
      achievement_spawned_island_types?: string[];
      coin_purse: number;
      coop_invitation?: /* Coop invitation that the member accepted. */ SkyBlockProfileCoopInvitation;
      /**
       * An array of values, each value describing a minion and it's tier that the player has upgraded / crafted.
       */
      crafted_generators?: string[];
      death_count?: number;
      dungeons?: {
        dungeon_journal: SkyBlockProfileDungeonJournal;
        dungeon_types: {
          [name: string]: SkyBlockProfileDungeonType;
          catacombs: SkyBlockProfileDungeonType;
        };
        dungeons_blah_blah?: /* Array of values, each value describing a dungeon NPC the profile member has spoken to. */ SkyBlockProfileDungeonBlahBlah;
        player_classes: {
          [name: string]: SkyBlockProfileDungeonClass;
          archer: SkyBlockProfileDungeonClass;
          berserk: SkyBlockProfileDungeonClass;
          healer: SkyBlockProfileDungeonClass;
          mage: SkyBlockProfileDungeonClass;
          tank: SkyBlockProfileDungeonClass;
        };
        selected_dungeon_class?: string;
      };
      fairy_exchanges?: number;
      fairy_souls?: number;
      fairy_souls_collected?: number;
      first_join: number;
      first_join_hub: number;
      fishing_treasure_caught?: number;
      inv_armor: SkyBlockProfileInventoryData;
      last_death: number;
      last_save: number;
      objectives: SkyBlockProfileObjectives;
      pets?: SkyBlockProfilePets;
      quests: SkyBlockProfileQuests;
      slayer_bosses?: SkyBlockProfileSlayerBosses;
      slayer_quest?: /* Details on the profile member's currently active slayer quest. */ SkyBlockProfileSlayerQuest;
      stats: SkyBlockProfileStats;
      tutorial: string[];
      visited_zones: string[];
      collection?: /* Each property key is the collection's item, and the value is the XP. */ SkyBlockProfileCollection;
      /**
       * An array of values, each value describing a collection tier that has been unlocked.
       */
      unlocked_coll_tiers?: string[];
      candy_inventory_contents?: SkyBlockProfileInventoryData;
      ender_chest_contents?: SkyBlockProfileInventoryData;
      fishing_bag?: SkyBlockProfileInventoryData;
      inv_contents?: SkyBlockProfileInventoryData;
      potion_bag?: SkyBlockProfileInventoryData;
      quiver?: SkyBlockProfileInventoryData;
      sacks_counts?: /* The contents of their sacks. */ SkyBlockProfileSacksCounts;
      talisman_bag?: SkyBlockProfileInventoryData;
      wardrobe_contents?: SkyBlockProfileInventoryData;
      wardrobe_equipped_slot?: number;
      experience_skill_alchemy?: number;
      experience_skill_carpentry?: number;
      experience_skill_combat?: number;
      experience_skill_enchanting?: number;
      experience_skill_farming?: number;
      experience_skill_fishing?: number;
      experience_skill_foraging?: number;
      experience_skill_mining?: number;
      experience_skill_runecrafting?: number;
      experience_skill_taming?: number;
    }
    export interface SkyBlockProfileMemberBase {
      /**
       * An array of values, each value describing an island that has been spawned by the member. e.g. "Pond Island"
       */
      achievement_spawned_island_types?: string[];
      coin_purse: number;
      coop_invitation?: /* Coop invitation that the member accepted. */ SkyBlockProfileCoopInvitation;
      /**
       * An array of values, each value describing a minion and it's tier that the player has upgraded / crafted.
       */
      crafted_generators?: string[];
      death_count?: number;
      dungeons?: {
        dungeon_journal: SkyBlockProfileDungeonJournal;
        dungeon_types: {
          [name: string]: SkyBlockProfileDungeonType;
          catacombs: SkyBlockProfileDungeonType;
        };
        dungeons_blah_blah?: /* Array of values, each value describing a dungeon NPC the profile member has spoken to. */ SkyBlockProfileDungeonBlahBlah;
        player_classes: {
          [name: string]: SkyBlockProfileDungeonClass;
          archer: SkyBlockProfileDungeonClass;
          berserk: SkyBlockProfileDungeonClass;
          healer: SkyBlockProfileDungeonClass;
          mage: SkyBlockProfileDungeonClass;
          tank: SkyBlockProfileDungeonClass;
        };
        selected_dungeon_class?: string;
      };
      fairy_exchanges?: number;
      fairy_souls?: number;
      fairy_souls_collected?: number;
      first_join: number;
      first_join_hub: number;
      fishing_treasure_caught?: number;
      inv_armor: SkyBlockProfileInventoryData;
      last_death: number;
      last_save: number;
      objectives: SkyBlockProfileObjectives;
      pets?: SkyBlockProfilePets;
      quests: SkyBlockProfileQuests;
      slayer_bosses?: SkyBlockProfileSlayerBosses;
      slayer_quest?: /* Details on the profile member's currently active slayer quest. */ SkyBlockProfileSlayerQuest;
      stats: SkyBlockProfileStats;
      tutorial: string[];
      visited_zones: string[];
    }
    export interface SkyBlockProfileObjective {
      [name: string]: undefined | boolean | number | string;
      completed_at: number;
      progress: number;
      status: string;
    }
    export interface SkyBlockProfileObjectives {
      [name: string]: undefined | SkyBlockProfileObjective;
      chop_tree?: SkyBlockProfileObjective;
      collect_birch_logs?: SkyBlockProfileObjective;
      collect_clay?: SkyBlockProfileObjective;
      collect_dark_oak_logs?: SkyBlockProfileObjective;
      collect_diamond?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        DIAMOND?: boolean;
      };
      collect_emerald?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        EMERALD?: boolean;
      };
      collect_end_stone?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        ENDER_STONE?: boolean;
      };
      collect_farm_animal_resources?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        LEATHER?: boolean;
        PORK?: boolean;
        RAW_CHICKEN?: boolean;
      };
      collect_farm_animal_resources_2?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        MUTTON?: boolean;
        RABBIT?: boolean;
      };
      collect_farming_resources?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        CARROT_ITEM?: boolean;
        MELON?: boolean;
        POTATO_ITEM?: boolean;
        PUMPKIN?: boolean;
      };
      collect_farming_resources_2?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        CACTUS?: boolean;
        "INK_SACK:3"?: boolean;
        SUGAR_CANE?: boolean;
      };
      collect_ingots?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        GOLD_INGOT?: boolean;
        IRON_INGOT?: boolean;
      };
      collect_lapis?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        "INK_SACK:4"?: boolean;
      };
      collect_log?: SkyBlockProfileObjective;
      collect_nether_resources?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        BLAZE_ROD?: boolean;
        NETHER_STALK?: boolean;
      };
      collect_nether_resources_2?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        GLOWSTONE_DUST?: boolean;
        MAGMA_CREAM?: boolean;
        QUARTZ?: boolean;
      };
      collect_obsidian?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        OBSIDIAN?: boolean;
      };
      collect_redstone?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        REDSTONE?: boolean;
      };
      collect_spider?: {
        [name: string]: undefined | boolean | number | string;
        completed_at: number;
        progress: number;
        status: string;
        SPIDER_EYE?: boolean;
        STRING?: boolean;
      };
      collect_wheat?: SkyBlockProfileObjective;
      collect_wool_carpenter?: SkyBlockProfileObjective;
      complete_the_chicken_race_1?: SkyBlockProfileObjective;
      complete_the_chicken_race_2?: SkyBlockProfileObjective;
      complete_the_chicken_race_3?: SkyBlockProfileObjective;
      complete_the_chicken_race_4?: SkyBlockProfileObjective;
      complete_the_crystal_core_anything_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_anything_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_crystal_core_anything_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_crystal_core_anything_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_crystal_core_anything_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_abilities_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_abilities_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_abilities_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_abilities_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_abilities_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_no_pearls_with_return_race_2?: SkyBlockProfileObjective;
      complete_the_crystal_core_nothing_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_crystal_core_nothing_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_crystal_core_nothing_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_crystal_core_nothing_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_crystal_core_nothing_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_end_race_1?: SkyBlockProfileObjective;
      complete_the_end_race_2?: SkyBlockProfileObjective;
      complete_the_end_race_3?: SkyBlockProfileObjective;
      complete_the_end_race_4?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_anything_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_anything_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_anything_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_anything_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_anything_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_abilities_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_abilities_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_abilities_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_abilities_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_abilities_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_pearls_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_pearls_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_pearls_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_pearls_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_no_pearls_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_nothing_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_nothing_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_nothing_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_nothing_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_giant_mushroom_nothing_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_anything_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_anything_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_anything_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_anything_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_anything_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_abilities_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_abilities_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_abilities_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_abilities_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_abilities_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_pearls_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_pearls_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_pearls_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_pearls_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_no_pearls_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_nothing_no_return_race_1?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_nothing_no_return_race_2?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_nothing_no_return_race_3?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_nothing_no_return_race_4?: SkyBlockProfileObjective;
      complete_the_precursor_ruins_nothing_with_return_race_1?: SkyBlockProfileObjective;
      complete_the_woods_race_1?: SkyBlockProfileObjective;
      complete_the_woods_race_2?: SkyBlockProfileObjective;
      complete_the_woods_race_3?: SkyBlockProfileObjective;
      complete_the_woods_race_4?: SkyBlockProfileObjective;
      craft_wheat_minion?: SkyBlockProfileObjective;
      craft_wood_pickaxe?: SkyBlockProfileObjective;
      craft_workbench?: SkyBlockProfileObjective;
      deposit_coins?: SkyBlockProfileObjective;
      enchant_item?: SkyBlockProfileObjective;
      explore_hub?: SkyBlockProfileObjective;
      explore_village?: SkyBlockProfileObjective;
      fight_dragon?: SkyBlockProfileObjective;
      find_pickaxe?: SkyBlockProfileObjective;
      give_fairy_souls?: SkyBlockProfileObjective;
      give_pickaxe_lapis_miner?: SkyBlockProfileObjective;
      give_rick_ingots?: SkyBlockProfileObjective;
      increase_combat_skill?: SkyBlockProfileObjective;
      increase_combat_skill_5?: SkyBlockProfileObjective;
      increase_farming_skill?: SkyBlockProfileObjective;
      increase_farming_skill_5?: SkyBlockProfileObjective;
      increase_foraging_skill?: SkyBlockProfileObjective;
      increase_foraging_skill_5?: SkyBlockProfileObjective;
      increase_mining_skill?: SkyBlockProfileObjective;
      increase_mining_skill_5?: SkyBlockProfileObjective;
      kill_danger_mobs?: SkyBlockProfileObjective;
      mine_coal?: SkyBlockProfileObjective;
      paint_canvas?: SkyBlockProfileObjective;
      public_island?: SkyBlockProfileObjective;
      reach_diamond_reserve?: SkyBlockProfileObjective;
      reach_dragons_nest?: SkyBlockProfileObjective;
      reach_lapis_quarry?: SkyBlockProfileObjective;
      reach_obsidian_sanctuary?: SkyBlockProfileObjective;
      reach_pigmens_den?: SkyBlockProfileObjective;
      reach_slimehill?: SkyBlockProfileObjective;
      reforge_item?: SkyBlockProfileObjective;
      talk_to_artist_1?: SkyBlockProfileObjective;
      talk_to_artist_2?: SkyBlockProfileObjective;
      talk_to_auction_master?: SkyBlockProfileObjective;
      talk_to_banker?: SkyBlockProfileObjective;
      talk_to_bartender?: SkyBlockProfileObjective;
      talk_to_blacksmith?: SkyBlockProfileObjective;
      talk_to_blacksmith_2?: SkyBlockProfileObjective;
      talk_to_carpenter?: SkyBlockProfileObjective;
      talk_to_charlie?: SkyBlockProfileObjective;
      talk_to_charlie_2?: SkyBlockProfileObjective;
      talk_to_elle?: SkyBlockProfileObjective;
      talk_to_end_dealer?: SkyBlockProfileObjective;
      talk_to_event_master?: SkyBlockProfileObjective;
      talk_to_fairy?: SkyBlockProfileObjective;
      talk_to_farmer?: SkyBlockProfileObjective;
      talk_to_farmer_2?: SkyBlockProfileObjective;
      talk_to_farmhand_1?: SkyBlockProfileObjective;
      talk_to_farmhand_2?: SkyBlockProfileObjective;
      talk_to_fisherman_1?: SkyBlockProfileObjective;
      talk_to_fisherman_2?: SkyBlockProfileObjective;
      talk_to_frosty?: SkyBlockProfileObjective;
      talk_to_guber_1?: SkyBlockProfileObjective;
      talk_to_guber_2?: SkyBlockProfileObjective;
      talk_to_guber_3?: SkyBlockProfileObjective;
      talk_to_guber_4?: SkyBlockProfileObjective;
      talk_to_guber_5?: SkyBlockProfileObjective;
      talk_to_guide?: SkyBlockProfileObjective;
      talk_to_guildford_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_anything_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_anything_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_anything_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_anything_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_abilities_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_abilities_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_abilities_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_abilities_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_pearls_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_pearls_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_pearls_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_pearls_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_no_pearls_with_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_nothing_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_nothing_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_nothing_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_crystal_core_nothing_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_anything_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_anything_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_anything_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_anything_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_abilities_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_abilities_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_abilities_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_abilities_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_pearls_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_pearls_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_pearls_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_no_pearls_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_nothing_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_nothing_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_nothing_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_giant_mushroom_nothing_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_anything_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_anything_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_anything_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_anything_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_abilities_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_abilities_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_abilities_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_abilities_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_pearls_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_pearls_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_pearls_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_no_pearls_no_return_4?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_nothing_no_return_1?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_nothing_no_return_2?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_nothing_no_return_3?: SkyBlockProfileObjective;
      talk_to_guildford_precursor_ruins_nothing_no_return_4?: SkyBlockProfileObjective;
      talk_to_gulliver_1?: SkyBlockProfileObjective;
      talk_to_gulliver_2?: SkyBlockProfileObjective;
      talk_to_gulliver_3?: SkyBlockProfileObjective;
      talk_to_gulliver_4?: SkyBlockProfileObjective;
      talk_to_gulliver_5?: SkyBlockProfileObjective;
      talk_to_gustave_1?: SkyBlockProfileObjective;
      talk_to_gustave_2?: SkyBlockProfileObjective;
      talk_to_gustave_3?: SkyBlockProfileObjective;
      talk_to_gustave_4?: SkyBlockProfileObjective;
      talk_to_gustave_5?: SkyBlockProfileObjective;
      talk_to_haymitch?: SkyBlockProfileObjective;
      talk_to_lapis_miner?: SkyBlockProfileObjective;
      talk_to_lazy_miner?: SkyBlockProfileObjective;
      talk_to_librarian?: SkyBlockProfileObjective;
      talk_to_lift_operator?: SkyBlockProfileObjective;
      talk_to_lumberjack?: SkyBlockProfileObjective;
      talk_to_lumberjack_2?: SkyBlockProfileObjective;
      talk_to_melody?: SkyBlockProfileObjective;
      talk_to_pet_collector?: SkyBlockProfileObjective;
      talk_to_pet_sitter?: SkyBlockProfileObjective;
      talk_to_rick?: SkyBlockProfileObjective;
      talk_to_telekinesis_applier?: SkyBlockProfileObjective;
      warp_barn_island?: SkyBlockProfileObjective;
      warp_blazing_fortress?: SkyBlockProfileObjective;
      warp_deep_caverns?: SkyBlockProfileObjective;
      warp_foraging_islands?: SkyBlockProfileObjective;
      warp_gold_mine?: SkyBlockProfileObjective;
      warp_mushroom_desert?: SkyBlockProfileObjective;
      warp_spiders_den?: SkyBlockProfileObjective;
      warp_the_end?: SkyBlockProfileObjective;
    }
    export interface SkyBlockProfilePet {
      active: boolean;
      candyUsed?: number;
      exp: number;
      heldItem?: string | null;
      skin?: string | null;
      tier: string;
      type: string;
      uuid?: string;
    }
    export type SkyBlockProfilePets = SkyBlockProfilePet[];
    export interface SkyBlockProfileQuest {
      activated_at: number;
      activated_at_sb: number;
      completed_at: number;
      completed_at_sb: number;
      status: string;
    }
    export interface SkyBlockProfileQuests {
      [name: string]: undefined | SkyBlockProfileQuest;
      collect_log?: SkyBlockProfileQuest;
      explore_hub?: SkyBlockProfileQuest;
      explore_village?: SkyBlockProfileQuest;
      increase_combat_skill_5?: SkyBlockProfileQuest;
      increase_farming_skill_5?: SkyBlockProfileQuest;
      increase_foraging_skill_5?: SkyBlockProfileQuest;
      increase_mining_skill_5?: SkyBlockProfileQuest;
      kill_danger_mobs?: SkyBlockProfileQuest;
      reforge_item?: SkyBlockProfileQuest;
      talk_to_artist_1?: SkyBlockProfileQuest;
      talk_to_auction_master?: SkyBlockProfileQuest;
      talk_to_banker?: SkyBlockProfileQuest;
      talk_to_blacksmith?: SkyBlockProfileQuest;
      talk_to_carpenter?: SkyBlockProfileQuest;
      talk_to_end_dealer?: SkyBlockProfileQuest;
      talk_to_farmer?: SkyBlockProfileQuest;
      talk_to_farmhand_1?: SkyBlockProfileQuest;
      talk_to_guber_1?: SkyBlockProfileQuest;
      talk_to_guildford_1?: SkyBlockProfileQuest;
      talk_to_gulliver_1?: SkyBlockProfileQuest;
      talk_to_gustave_1?: SkyBlockProfileQuest;
      talk_to_lapis_miner?: SkyBlockProfileQuest;
      talk_to_lazy_miner?: SkyBlockProfileQuest;
      talk_to_librarian?: SkyBlockProfileQuest;
      talk_to_lumberjack?: SkyBlockProfileQuest;
      talk_to_rick?: SkyBlockProfileQuest;
    }
    /**
     * The contents of their sacks.
     */
    export interface SkyBlockProfileSacksCounts {
      [name: string]: undefined | number;
      BLAZE_ROD?: number;
      BONE?: number;
      CACTUS?: number;
      CARROT_ITEM?: number;
      CLAY_BALL?: number;
      COAL?: number;
      COBBLESTONE?: number;
      DIAMOND?: number;
      DUNGEON_TRAP?: number;
      EMERALD?: number;
      ENDER_PEARL?: number;
      ENDER_STONE?: number;
      GHAST_TEAR?: number;
      GLOWSTONE_DUST?: number;
      GOLD_INGOT?: number;
      GRAVEL?: number;
      ICE?: number;
      INK_SACK?: number;
      "INK_SACK:3"?: number;
      "INK_SACK:4"?: number;
      IRON_INGOT?: number;
      LEATHER?: number;
      LOG?: number;
      "LOG:1"?: number;
      "LOG:2"?: number;
      "LOG:3"?: number;
      LOG_2?: number;
      "LOG_2:1"?: number;
      MAGMA_CREAM?: number;
      MELON?: number;
      MUSHROOM_COLLECTION?: number;
      MUTTON?: number;
      NETHERRACK?: number;
      NETHER_STALK?: number;
      OBSIDIAN?: number;
      PORK?: number;
      POTATO_ITEM?: number;
      PRISMARINE_CRYSTALS?: number;
      PRISMARINE_SHARD?: number;
      PUMPKIN?: number;
      QUARTZ?: number;
      RABBIT?: number;
      RAW_FISH?: number;
      "RAW_FISH:1"?: number;
      "RAW_FISH:2"?: number;
      "RAW_FISH:3"?: number;
      REDSTONE?: number;
      REVENANT_FLESH?: number;
      ROTTEN_FLESH?: number;
      SAND?: number;
      SEEDS?: number;
      SLIME_BALL?: number;
      SPIDER_EYE?: number;
      SPONGE?: number;
      STRING?: number;
      SUGAR_CANE?: number;
      SULPHUR?: number;
      TARANTULA_WEB?: number;
      WATER_LILY?: number;
      WHEAT?: number;
      WOLF_TOOTH?: number;
    }
    export interface SkyBlockProfileSkillsAPI {
      experience_skill_alchemy?: number;
      experience_skill_carpentry?: number;
      experience_skill_combat?: number;
      experience_skill_enchanting?: number;
      experience_skill_farming?: number;
      experience_skill_fishing?: number;
      experience_skill_foraging?: number;
      experience_skill_mining?: number;
      experience_skill_runecrafting?: number;
      experience_skill_taming?: number;
    }
    export interface SkyBlockProfileSlayerBoss {
      [name: string]:
        | undefined
        | number
        | {
            [name: string]: undefined | boolean;
          };
      boss_kills_tier_0?: number;
      boss_kills_tier_1?: number;
      boss_kills_tier_2?: number;
      boss_kills_tier_3?: number;
      claimed_levels: {
        [name: string]: undefined | boolean;
        level_1?: boolean;
        level_2?: boolean;
        level_3?: boolean;
        level_4?: boolean;
        level_5?: boolean;
        level_6?: boolean;
      };
      xp?: number;
    }
    export interface SkyBlockProfileSlayerBosses {
      [name: string]: SkyBlockProfileSlayerBoss;
      spider: SkyBlockProfileSlayerBoss;
      wolf: SkyBlockProfileSlayerBoss;
      zombie: SkyBlockProfileSlayerBoss;
    }
    /**
     * Details on the profile member's currently active slayer quest.
     */
    export interface SkyBlockProfileSlayerQuest {
      combat_xp?: number;
      completion_state: number;
      kill_timestamp?: number;
      last_killed_mob_island?: string;
      recent_mob_kills?: {
        timestamp: number;
        xp: number;
      }[];
      spawn_timestamp?: number;
      start_timestamp: number;
      tier: number;
      type: string;
      xp_on_last_follower_spawn?: number;
    }
    export interface SkyBlockProfileStats {
      [name: string]: undefined | number;
      auctions_bids?: number;
      auctions_bought_common?: number;
      auctions_bought_epic?: number;
      auctions_bought_legendary?: number;
      auctions_bought_rare?: number;
      auctions_bought_special?: number;
      auctions_bought_uncommon?: number;
      auctions_completed?: number;
      auctions_created?: number;
      auctions_fees?: number;
      auctions_gold_earned?: number;
      auctions_gold_spent?: number;
      auctions_highest_bid?: number;
      auctions_no_bids?: number;
      auctions_sold_common?: number;
      auctions_sold_epic?: number;
      auctions_sold_legendary?: number;
      auctions_sold_rare?: number;
      auctions_sold_special?: number;
      auctions_sold_uncommon?: number;
      auctions_won?: number;
      chicken_race_best_time_2?: number;
      deaths?: number;
      deaths_blaze?: number;
      deaths_cactus?: number;
      deaths_catfish?: number;
      deaths_corrupted_protector?: number;
      deaths_crypt_dreadlord?: number;
      deaths_crypt_lurker?: number;
      deaths_crypt_souleater?: number;
      deaths_diamond_guy?: number;
      deaths_diamond_skeleton?: number;
      deaths_diamond_zombie?: number;
      deaths_dungeon_respawning_skeleton?: number;
      deaths_emerald_slime?: number;
      deaths_enderman?: number;
      deaths_endermite?: number;
      deaths_fall?: number;
      deaths_fire?: number;
      deaths_fireball_magma_cube?: number;
      deaths_gaia_construct?: number;
      deaths_generator_magma_cube?: number;
      deaths_generator_slime?: number;
      deaths_howling_spirit?: number;
      deaths_king_midas?: number;
      deaths_lapis_zombie?: number;
      deaths_liquid_hot_magma?: number;
      deaths_livid_clone?: number;
      deaths_lost_adventurer?: number;
      deaths_magma_cube?: number;
      deaths_magma_cube_boss?: number;
      deaths_obsidian_wither?: number;
      deaths_old_dragon?: number;
      deaths_old_wolf?: number;
      deaths_player?: number;
      deaths_professor?: number;
      deaths_professor_guardian_summon?: number;
      deaths_professor_mage_guardian?: number;
      deaths_protector_dragon?: number;
      deaths_random_slime?: number;
      deaths_redstone_pigman?: number;
      deaths_revenant_zombie?: number;
      deaths_ruin_wolf?: number;
      deaths_sadan_statue?: number;
      deaths_scared_skeleton?: number;
      deaths_scarf?: number;
      deaths_scarf_mage?: number;
      deaths_scarf_warrior?: number;
      deaths_sea_guardian?: number;
      deaths_shadow_assassin?: number;
      deaths_skeleton?: number;
      deaths_skeleton_emperor?: number;
      deaths_skeleton_grunt?: number;
      deaths_skeleton_master?: number;
      deaths_skeleton_soldier?: number;
      deaths_skeletor?: number;
      deaths_sniper_skeleton?: number;
      deaths_soul_of_the_alpha?: number;
      deaths_spider?: number;
      deaths_spider_jockey?: number;
      deaths_spirit_bat?: number;
      deaths_spirit_rabbit?: number;
      deaths_strong_dragon?: number;
      deaths_suffocation?: number;
      deaths_superior_dragon?: number;
      deaths_tarantula_spider?: number;
      deaths_tentaclees?: number;
      deaths_trap?: number;
      deaths_unburried_zombie?: number;
      deaths_unknown?: number;
      deaths_unstable_dragon?: number;
      deaths_void?: number;
      deaths_voracious_spider?: number;
      deaths_watcher?: number;
      deaths_watcher_summon_undead?: number;
      deaths_weaver_spider?: number;
      deaths_wise_dragon?: number;
      deaths_wither_skeleton?: number;
      deaths_wolf?: number;
      deaths_young_dragon?: number;
      deaths_zealot_enderman?: number;
      deaths_zombie?: number;
      deaths_zombie_deep?: number;
      deaths_zombie_grunt?: number;
      deaths_zombie_soldier?: number;
      dungeon_hub_crystal_core_anything_no_return_best_time?: number;
      dungeon_hub_crystal_core_anything_with_return_best_time?: number;
      dungeon_hub_crystal_core_no_abilities_no_return_best_time?: number;
      dungeon_hub_crystal_core_no_pearls_no_return_best_time?: number;
      dungeon_hub_crystal_core_no_pearls_with_return_best_time?: number;
      dungeon_hub_crystal_core_nothing_no_return_best_time?: number;
      dungeon_hub_giant_mushroom_anything_no_return_best_time?: number;
      dungeon_hub_giant_mushroom_no_abilities_no_return_best_time?: number;
      dungeon_hub_giant_mushroom_no_pearls_no_return_best_time?: number;
      dungeon_hub_giant_mushroom_nothing_no_return_best_time?: number;
      dungeon_hub_precursor_ruins_anything_no_return_best_time?: number;
      dungeon_hub_precursor_ruins_no_abilities_no_return_best_time?: number;
      dungeon_hub_precursor_ruins_no_pearls_no_return_best_time?: number;
      dungeon_hub_precursor_ruins_nothing_no_return_best_time?: number;
      end_race_best_time?: number;
      ender_crystals_destroyed?: number;
      foraging_race_best_time?: number;
      gifts_given?: number;
      gifts_received?: number;
      highest_crit_damage?: number;
      highest_critical_damage?: number;
      items_fished?: number;
      items_fished_large_treasure?: number;
      items_fished_normal?: number;
      items_fished_treasure?: number;
      kills?: number;
      kills_bat_pinata?: number;
      kills_bat_spooky?: number;
      kills_batty_witch?: number;
      kills_blaze?: number;
      kills_blaze_higher_or_lower?: number;
      kills_blue_shark?: number;
      kills_bonzo_summon_undead?: number;
      kills_brood_mother_cave_spider?: number;
      kills_brood_mother_spider?: number;
      kills_carrot_king?: number;
      kills_catfish?: number;
      kills_cave_spider?: number;
      kills_cellar_spider?: number;
      kills_chicken?: number;
      kills_chicken_deep?: number;
      kills_corrupted_protector?: number;
      kills_cow?: number;
      kills_creeper?: number;
      kills_crypt_dreadlord?: number;
      kills_crypt_lurker?: number;
      kills_crypt_souleater?: number;
      kills_crypt_tank_zombie?: number;
      kills_crypt_undead?: number;
      kills_crypt_undead_alexander?: number;
      kills_crypt_undead_apunch?: number;
      kills_crypt_undead_bernhard?: number;
      kills_crypt_undead_christian?: number;
      kills_crypt_undead_codename_b?: number;
      kills_crypt_undead_connorlinfoot?: number;
      kills_crypt_undead_dctr?: number;
      kills_crypt_undead_friedrich?: number;
      kills_crypt_undead_jayavarmen?: number;
      kills_crypt_undead_likaos?: number;
      kills_crypt_undead_marius?: number;
      kills_crypt_undead_nicholas?: number;
      kills_crypt_undead_nitroholic_?: number;
      kills_crypt_undead_pieter?: number;
      kills_crypt_undead_relenter?: number;
      kills_crypt_undead_sfarnham?: number;
      kills_crypt_undead_valentin?: number;
      kills_crypt_witherskeleton?: number;
      kills_dasher_spider?: number;
      kills_deep_sea_protector?: number;
      kills_diamond_guy?: number;
      kills_diamond_skeleton?: number;
      kills_diamond_zombie?: number;
      kills_dungeon_respawning_skeleton?: number;
      kills_dungeon_respawning_skeleton_skull?: number;
      kills_dungeon_secret_bat?: number;
      kills_emerald_slime?: number;
      kills_enderman?: number;
      kills_endermite?: number;
      kills_fireball_magma_cube?: number;
      kills_forest_island_bat?: number;
      kills_frosty_the_snowman?: number;
      kills_frozen_steve?: number;
      kills_gaia_construct?: number;
      kills_generator_ghast?: number;
      kills_generator_magma_cube?: number;
      kills_generator_slime?: number;
      kills_ghast?: number;
      kills_guardian_defender?: number;
      kills_guardian_emperor?: number;
      kills_horseman_bat?: number;
      kills_horseman_horse?: number;
      kills_horseman_zombie?: number;
      kills_howling_spirit?: number;
      kills_invisible_creeper?: number;
      kills_jockey_shot_silverfish?: number;
      kills_jockey_skeleton?: number;
      kills_king_midas?: number;
      kills_lapis_zombie?: number;
      kills_liquid_hot_magma?: number;
      kills_lonely_spider?: number;
      kills_lost_adventurer?: number;
      kills_magma_cube?: number;
      kills_magma_cube_boss?: number;
      kills_minos_hunter?: number;
      kills_minotaur?: number;
      kills_night_respawning_skeleton?: number;
      kills_night_squid?: number;
      kills_nurse_shark?: number;
      kills_obsidian_wither?: number;
      kills_old_wolf?: number;
      kills_pack_spirit?: number;
      kills_parasite?: number;
      kills_phantom_spirit?: number;
      kills_pig?: number;
      kills_pigman?: number;
      kills_player?: number;
      kills_pond_squid?: number;
      kills_professor_guardian_summon?: number;
      kills_protector_dragon?: number;
      kills_rabbit?: number;
      kills_random_slime?: number;
      kills_redstone_pigman?: number;
      kills_respawning_skeleton?: number;
      kills_revenant_zombie?: number;
      kills_ruin_wolf?: number;
      kills_scared_skeleton?: number;
      kills_scarf_archer?: number;
      kills_scarf_mage?: number;
      kills_scarf_priest?: number;
      kills_scarf_warrior?: number;
      kills_scary_jerry?: number;
      kills_sea_archer?: number;
      kills_sea_guardian?: number;
      kills_sea_leech?: number;
      kills_sea_walker?: number;
      kills_sea_witch?: number;
      kills_shadow_assassin?: number;
      kills_sheep?: number;
      kills_siamese_lynx?: number;
      kills_skeleton?: number;
      kills_skeleton_emperor?: number;
      kills_skeleton_grunt?: number;
      kills_skeleton_master?: number;
      kills_skeleton_soldier?: number;
      kills_skeletor?: number;
      kills_slime?: number;
      kills_sniper_skeleton?: number;
      kills_soul_of_the_alpha?: number;
      kills_spider?: number;
      kills_spider_jockey?: number;
      kills_spirit_bat?: number;
      kills_spirit_bull?: number;
      kills_spirit_chicken?: number;
      kills_spirit_miniboss?: number;
      kills_spirit_rabbit?: number;
      kills_spirit_sheep?: number;
      kills_spirit_wolf?: number;
      kills_splitter_spider?: number;
      kills_splitter_spider_silverfish?: number;
      kills_strong_dragon?: number;
      kills_super_archer?: number;
      kills_super_tank_zombie?: number;
      kills_tarantula_spider?: number;
      kills_tentaclees?: number;
      kills_tiger_shark?: number;
      kills_trick_or_treater?: number;
      kills_unburried_zombie?: number;
      kills_voracious_spider?: number;
      kills_watcher?: number;
      kills_watcher_bonzo?: number;
      kills_watcher_summon_undead?: number;
      kills_water_hydra?: number;
      kills_weaver_spider?: number;
      kills_witch?: number;
      kills_witch_bat?: number;
      kills_wither_gourd?: number;
      kills_wither_skeleton?: number;
      kills_wraith?: number;
      kills_zealot_enderman?: number;
      kills_zombie?: number;
      kills_zombie_deep?: number;
      kills_zombie_grunt?: number;
      kills_zombie_knight?: number;
      kills_zombie_soldier?: number;
      kills_zombie_villager?: number;
      most_winter_cannonballs_hit?: number;
      most_winter_damage_dealt?: number;
      most_winter_magma_damage_dealt?: number;
      most_winter_snowballs_hit?: number;
      mythos_burrows_chains_complete?: number;
      mythos_burrows_chains_complete_COMMON?: number;
      mythos_burrows_chains_complete_RARE?: number;
      mythos_burrows_chains_complete_null?: number;
      mythos_burrows_dug_combat?: number;
      mythos_burrows_dug_combat_COMMON?: number;
      mythos_burrows_dug_combat_RARE?: number;
      mythos_burrows_dug_combat_null?: number;
      mythos_burrows_dug_next?: number;
      mythos_burrows_dug_next_COMMON?: number;
      mythos_burrows_dug_next_RARE?: number;
      mythos_burrows_dug_next_null?: number;
      mythos_burrows_dug_treasure?: number;
      mythos_burrows_dug_treasure_COMMON?: number;
      mythos_burrows_dug_treasure_RARE?: number;
      mythos_burrows_dug_treasure_null?: number;
      mythos_kills?: number;
      pet_milestone_ores_mined?: number;
      pet_milestone_sea_creatures_killed?: number;
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
        export type $200 = Components.Schemas.GuildResponse;
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
          player: Components.Schemas.NullablePlayer;
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
         *   "success": true,
         *   "lastUpdated": 1604706817946,
         *   "achievements": {
         *     "arcade": {
         *       "one_time": {
         *         "CREEPER_ATTACK_SURVIVAL": {
         *           "points": 10,
         *           "name": "Creeper Attack: Creeeep",
         *           "description": "Survive Creeper Attack without dying",
         *           "gamePercentUnlocked": 7.016806390981579,
         *           "globalPercentUnlocked": 3.194439338105325
         *         }
         *       },
         *       "tiered": {
         *         "ZOMBIES_NICE_SHOT": {
         *           "name": "Zombies: Nice Shot",
         *           "description": "Get %s zombie kills",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 1000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 2500
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1600,
         *       "total_legacy_points": 5
         *     },
         *     "arena": {
         *       "one_time": {
         *         "MY_NEW_HAT": {
         *           "points": 5,
         *           "name": "My New Hat",
         *           "description": "Win wearing an Epic hat",
         *           "gamePercentUnlocked": 0.40878630320523257,
         *           "globalPercentUnlocked": 0.03239382978262079
         *         }
         *       },
         *       "tiered": {
         *         "POWERUP": {
         *           "name": "Powerup!",
         *           "description": "Activate %s powerups",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 250
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 500
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 710,
         *       "total_legacy_points": 0
         *     },
         *     "bedwars": {
         *       "one_time": {
         *         "IRON_PUNCH": {
         *           "points": 5,
         *           "name": "Iron Punch",
         *           "description": "Get a kill with an Iron Golem",
         *           "gamePercentUnlocked": 18.516916616446323,
         *           "globalPercentUnlocked": 11.081223315450147
         *         }
         *       },
         *       "tiered": {
         *         "COLLECTORS_EDITION": {
         *           "name": "Collectors Edition",
         *           "description": "Collect %s wool from enemy teams",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 795,
         *       "total_legacy_points": 0
         *     },
         *     "blitz": {
         *       "one_time": {
         *         "DONKEYTAMER_MASTER": {
         *           "points": 10,
         *           "name": "Donkeytamer Master",
         *           "description": "Max out the Donkeytamer Kit",
         *           "gamePercentUnlocked": 0.01,
         *           "globalPercentUnlocked": 0.01
         *         }
         *       },
         *       "tiered": {
         *         "KIT_COLLECTOR": {
         *           "name": "Kit Collector",
         *           "description": "Unlock %s Advanced or Ultimate kits",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 1
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 15
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1650,
         *       "total_legacy_points": 0
         *     },
         *     "buildbattle": {
         *       "one_time": {
         *         "GUESSING_STREAK": {
         *           "points": 5,
         *           "name": "Guessing Streak",
         *           "description": "Guess every theme correctly in Guess the Build",
         *           "gamePercentUnlocked": 5.4412406051235,
         *           "globalPercentUnlocked": 1.8679243815594853
         *         }
         *       },
         *       "tiered": {
         *         "BUILD_BATTLE_VOTER": {
         *           "name": "Judge",
         *           "description": "Vote on %s builds in Build Battle",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 40
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 200
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 1000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 560,
         *       "total_legacy_points": 0
         *     },
         *     "christmas2017": {
         *       "one_time": {
         *         "GREED_INCARNATE": {
         *           "points": 15,
         *           "name": "Greed Incarnate",
         *           "description": "Steal 42 presents in a single game of Grinch Simulator",
         *           "globalPercentUnlocked": 0.21662858123274253
         *         }
         *       },
         *       "tiered": {
         *         "SECRET_SANTA": {
         *           "name": "Secret Santa",
         *           "description": "Fill %s stockings in Santa Simulator",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 60
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 150
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 660,
         *       "total_legacy_points": 200
         *     },
         *     "copsandcrims": {
         *       "one_time": {
         *         "OH_BABY_A_TRIPLE": {
         *           "points": 15,
         *           "name": "A Player's Nightmare",
         *           "description": "Get a double kill using a grenade",
         *           "gamePercentUnlocked": 0.307022864814434,
         *           "globalPercentUnlocked": 0.06307310800708539
         *         }
         *       },
         *       "tiered": {
         *         "CAC_BANKER": {
         *           "name": "Bounty Collector",
         *           "description": "Earn %s Coins",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10000
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 50000
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 965,
         *       "total_legacy_points": 0
         *     },
         *     "duels": {
         *       "one_time": {
         *         "GONE_FISHING": {
         *           "points": 5,
         *           "name": "Gone Fishing",
         *           "description": "Catch a fish",
         *           "gamePercentUnlocked": 0.8309436623932128,
         *           "globalPercentUnlocked": 0.27000946479595545
         *         }
         *       },
         *       "tiered": {
         *         "DUELS_DIVISION": {
         *           "name": "Climbing the Ranks",
         *           "description": "Achieve %s Title in any mode",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 1
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 2
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 3
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 4
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1200,
         *       "total_legacy_points": 110
         *     },
         *     "easter": {
         *       "one_time": {
         *         "ALL_EGGS_2019": {
         *           "points": 30,
         *           "name": "Egghunter (2019)",
         *           "description": "Find all easter eggs in the Main Lobby",
         *           "legacy": true
         *         }
         *       },
         *       "tiered": {
         *         "THROW_EGGS": {
         *           "name": "Egg Thrower",
         *           "description": "Throw %s eggs",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 8
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 32
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 128
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 512
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 430,
         *       "total_legacy_points": 40
         *     },
         *     "general": {
         *       "one_time": {
         *         "YOUTUBER": {
         *           "points": 10,
         *           "name": "EEEEKK!",
         *           "description": "Be in the same lobby as a YouTuber",
         *           "globalPercentUnlocked": 62.84929127155385
         *         }
         *       },
         *       "tiered": {
         *         "CHALLENGER": {
         *           "name": "Challenger",
         *           "description": "Complete a total of %s challenges",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 410,
         *       "total_legacy_points": 0
         *     },
         *     "gingerbread": {
         *       "one_time": {
         *         "IS_THIS_SURVIVAL_GAMES": {
         *           "points": 5,
         *           "name": "Is this Survival Games?",
         *           "description": "Hit 5 players with the \"Notched Sword\" in 1 race",
         *           "gamePercentUnlocked": 1.1200450672852627,
         *           "globalPercentUnlocked": 0.12229878588538734
         *         }
         *       },
         *       "tiered": {
         *         "WINNER": {
         *           "name": "Medalist",
         *           "description": "Get %s trophies",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 600,
         *       "total_legacy_points": 0
         *     },
         *     "halloween2017": {
         *       "one_time": {
         *         "FIRE_FROM_HELL": {
         *           "points": 5,
         *           "name": "Fire from Hell",
         *           "description": "Win a game of Smash Heroes using Skullfire",
         *           "globalPercentUnlocked": 0.05622079370421381
         *         }
         *       },
         *       "tiered": {
         *         "PUMPKINATOR": {
         *           "name": "Pumpkinator Collector",
         *           "description": "Collect %s pumpkins in Bedwars",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 710,
         *       "total_legacy_points": 130
         *     },
         *     "housing": {
         *       "one_time": {
         *         "RECIEVE_COOKIE": {
         *           "points": 5,
         *           "name": "Filling the Cookie Jar",
         *           "description": "Receive a cookie.",
         *           "gamePercentUnlocked": 23.130059864883275,
         *           "globalPercentUnlocked": 4.2513101294999025
         *         }
         *       },
         *       "tiered": [],
         *       "total_points": 55,
         *       "total_legacy_points": 0
         *     },
         *     "murdermystery": {
         *       "one_time": {
         *         "BLESSING_AND_CURSE": {
         *           "points": 5,
         *           "name": "Mixed Messages",
         *           "description": "Receive a blessing and a curse from Kali in the same game on Ancient Tomb",
         *           "gamePercentUnlocked": 13.157039514340763,
         *           "globalPercentUnlocked": 4.265014758105646
         *         }
         *       },
         *       "tiered": {
         *         "WINS_AS_SURVIVOR": {
         *           "name": "Peace Is Mine",
         *           "description": "Win %s games as innocent or detective without dying",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 1
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 40
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 805,
         *       "total_legacy_points": 0
         *     },
         *     "paintball": {
         *       "one_time": {
         *         "ACTIVATE_KILLSTREAKS": {
         *           "points": 10,
         *           "name": "Unstoppable",
         *           "description": "Activate ten killstreaks",
         *           "gamePercentUnlocked": 1.0260724023328596,
         *           "globalPercentUnlocked": 0.2519742678216734
         *         }
         *       },
         *       "tiered": {
         *         "WINS": {
         *           "name": "Paintball Superstar",
         *           "description": "Win %s games",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 1000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 685,
         *       "total_legacy_points": 0
         *     },
         *     "pit": {
         *       "one_time": {
         *         "PUNCH_SWORD": {
         *           "points": 5,
         *           "name": "The Punch",
         *           "description": "Hit a player with The Punch",
         *           "gamePercentUnlocked": 0.3629933575223368,
         *           "globalPercentUnlocked": 0.013510194923890408
         *         }
         *       },
         *       "tiered": {
         *         "MYSTICISM": {
         *           "name": "Mysticism",
         *           "description": "Enchant %s items",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 250
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1080,
         *       "total_legacy_points": 0
         *     },
         *     "quake": {
         *       "one_time": {
         *         "SHOW_ME_THE_MONEY": {
         *           "points": 15,
         *           "name": "Show me the money!",
         *           "description": "Unlock the Polished Bling Case or the 1.0s trigger",
         *           "gamePercentUnlocked": 0.5984048114967335,
         *           "globalPercentUnlocked": 0.10115854193121432
         *         }
         *       },
         *       "tiered": {
         *         "COINS": {
         *           "name": "Quake Banker",
         *           "description": "Earn %s coins",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5000
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 25000
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 100000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 200000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 940,
         *       "total_legacy_points": 0
         *     },
         *     "skyblock": {
         *       "one_time": {
         *         "EXPLOSIVE_ENDING": {
         *           "points": 5,
         *           "name": "Explosive Ending",
         *           "description": "Survive the Blast from the Unstable Dragon",
         *           "gamePercentUnlocked": 3.273060341189789,
         *           "globalPercentUnlocked": 1.0396722484452376
         *         }
         *       },
         *       "tiered": {
         *         "ANGLER": {
         *           "name": "Angler",
         *           "description": "Achieve fishing level %s",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 2,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 3,
         *               "points": 10,
         *               "amount": 15
         *             },
         *             {
         *               "tier": 4,
         *               "points": 10,
         *               "amount": 20
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1700,
         *       "total_legacy_points": 0
         *     },
         *     "skyclash": {
         *       "one_time": {
         *         "WHATS_NEXT": {
         *           "points": 10,
         *           "name": "What's next?",
         *           "description": "Max out a Card",
         *           "legacy": true
         *         }
         *       },
         *       "tiered": {
         *         "CARDS_UNLOCKED": {
         *           "name": "Collector!",
         *           "description": "Unlock %s different Cards",
         *           "legacy": true,
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 15
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 25
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 35
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 0,
         *       "total_legacy_points": 715
         *     },
         *     "skywars": {
         *       "one_time": {
         *         "PEACEMAKER": {
         *           "points": 10,
         *           "name": "Peacemaker",
         *           "description": "Win a game without killing anyone",
         *           "gamePercentUnlocked": 35.91945665528181,
         *           "globalPercentUnlocked": 23.00161061791731
         *         }
         *       },
         *       "tiered": {
         *         "KILLS_TEAM": {
         *           "name": "Team Killer",
         *           "description": "Kill %s players in Team mode",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 250
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 1000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 5000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1555,
         *       "total_legacy_points": 0
         *     },
         *     "speeduhc": {
         *       "one_time": null,
         *       "tiered": {
         *         "SALTY": {
         *           "name": "Salty",
         *           "description": "Collect %s Salt",
         *           "legacy": true,
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 200
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 1000
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 5000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 10000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 485,
         *       "total_legacy_points": 90
         *     },
         *     "summer": {
         *       "one_time": {
         *         "HOME_RUN": {
         *           "points": 5,
         *           "name": "Home Run",
         *           "description": "Knock a player into the void while using the Baseball Player Kit in SkyWars",
         *           "globalPercentUnlocked": 0.438836819941684
         *         }
         *       },
         *       "tiered": {
         *         "GONE_FISHING": {
         *           "name": "Gone Fishing",
         *           "description": "Fish %s treasure items while fishing in the Main Lobby",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 15,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 3,
         *               "points": 25,
         *               "amount": 100
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 365,
         *       "total_legacy_points": 20
         *     },
         *     "supersmash": {
         *       "one_time": {
         *         "GENCLUCK_CHALLENGE": {
         *           "points": 5,
         *           "name": "General Cluck Challenge",
         *           "description": "Kill 2 enemy heroes with your Chicken Army",
         *           "gamePercentUnlocked": 5.009991257649556,
         *           "globalPercentUnlocked": 0.5199804765015701
         *         }
         *       },
         *       "tiered": {
         *         "SMASH_CHAMPION": {
         *           "name": "Smash Champion",
         *           "description": "Reach Smash Level %s",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 20
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 250
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 500
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 430,
         *       "total_legacy_points": 0
         *     },
         *     "tntgames": {
         *       "one_time": {
         *         "TNT_TAG_DIFFERENTTAGS": {
         *           "points": 10,
         *           "name": "One for you and for you and for you ...",
         *           "description": "Tag 5 different people in a game of TNT Tag",
         *           "gamePercentUnlocked": 22.24612356942583,
         *           "globalPercentUnlocked": 10.263423465717924
         *         }
         *       },
         *       "tiered": {
         *         "PVP_RUN_WINS": {
         *           "name": "Running Killer",
         *           "description": "Win %s games of PVP Run",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 20
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 100
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1680,
         *       "total_legacy_points": 0
         *     },
         *     "truecombat": {
         *       "one_time": {
         *         "GOLD_FORAGER": {
         *           "points": 15,
         *           "name": "Gold Forager",
         *           "description": "Max out a Gold Dust perk",
         *           "legacy": true
         *         }
         *       },
         *       "tiered": {
         *         "SOLO_KILLER": {
         *           "name": "Crazy Killer",
         *           "description": "Kill %s players in Solo Normal or Lucky modes",
         *           "legacy": true,
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 200
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 1000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 0,
         *       "total_legacy_points": 785
         *     },
         *     "uhc": {
         *       "one_time": {
         *         "CRAFTING_REVOLUTION": {
         *           "points": 5,
         *           "name": "Crafting revolution",
         *           "description": "Use a custom recipe in game",
         *           "gamePercentUnlocked": 37.00093709225066,
         *           "globalPercentUnlocked": 3.9130367665843684
         *         }
         *       },
         *       "tiered": {
         *         "HUNTER": {
         *           "name": "Hunter",
         *           "description": "Kill %s players",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 10
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 1000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 855,
         *       "total_legacy_points": 0
         *     },
         *     "vampirez": {
         *       "one_time": {
         *         "PURCHASE_BLOOD": {
         *           "points": 5,
         *           "name": "Cash4Blood",
         *           "description": "Purchase Blood from the shop",
         *           "gamePercentUnlocked": 24.465217949718827,
         *           "globalPercentUnlocked": 5.723903700414698
         *         }
         *       },
         *       "tiered": {
         *         "ZOMBIE_KILLER": {
         *           "name": "Zombie Hunter",
         *           "description": "Kill %s Zombies",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 250
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 2500
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 7500
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 610,
         *       "total_legacy_points": 0
         *     },
         *     "walls": {
         *       "one_time": {
         *         "FIRST_KIT": {
         *           "points": 5,
         *           "name": "Getting Ready",
         *           "description": "Unlock your first starter kit",
         *           "gamePercentUnlocked": 13.703430301410933,
         *           "globalPercentUnlocked": 1.4262594353363067
         *         }
         *       },
         *       "tiered": {
         *         "DIAMOND_MINER": {
         *           "name": "Rare Ore Miner",
         *           "description": "Mine %s Diamonds",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 20
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 50
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 100
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 520,
         *       "total_legacy_points": 0
         *     },
         *     "walls3": {
         *       "one_time": {
         *         "WHATS_THE_BIG_IDEA": {
         *           "points": 10,
         *           "name": "What's the big idea!?",
         *           "description": "Final kill an enemy after splashing them with a regen potion as Phoenix, before the potion expires",
         *           "gamePercentUnlocked": 0.036183601274772714,
         *           "globalPercentUnlocked": 0.01
         *         }
         *       },
         *       "tiered": {
         *         "COINS": {
         *           "name": "Mega Walls Banker",
         *           "description": "Earn %s coins in Mega Walls",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 5000
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 10000
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 35000
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 55000
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 2150,
         *       "total_legacy_points": 0
         *     },
         *     "warlords": {
         *       "one_time": {
         *         "MEDIUM_RARE": {
         *           "points": 5,
         *           "name": "Medium Rare",
         *           "description": "Receive a Rare weapon from The Weaponsmith.",
         *           "gamePercentUnlocked": 50.02137436405603,
         *           "globalPercentUnlocked": 3.902172048119626
         *         }
         *       },
         *       "tiered": {
         *         "ASSIST": {
         *           "name": "Quit Stealing My Kills!",
         *           "description": "Earn %s assists in any game mode",
         *           "tiers": [
         *             {
         *               "tier": 1,
         *               "points": 5,
         *               "amount": 20
         *             },
         *             {
         *               "tier": 2,
         *               "points": 10,
         *               "amount": 100
         *             },
         *             {
         *               "tier": 3,
         *               "points": 15,
         *               "amount": 500
         *             },
         *             {
         *               "tier": 4,
         *               "points": 20,
         *               "amount": 2500
         *             }
         *           ]
         *         }
         *       },
         *       "total_points": 1380,
         *       "total_legacy_points": 0
         *     }
         *   }
         * }
         */
        export type $200 = Components.Schemas.AchievementsResourceResponse;
      }
    }
  }
  namespace ResourcesChallenges {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.ChallengesResourceResponse;
      }
    }
  }
  namespace ResourcesGuildsAchievements {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.GuildsAchievementsResourceResponse;
      }
    }
  }
  namespace ResourcesGuildsPermissions {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.GuildsPermissionsResourceResponse;
      }
    }
  }
  namespace ResourcesQuests {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.QuestsResourceResponse;
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
  namespace SkyblockAuction {
    namespace Get {
      namespace Parameters {
        /**
         * example:
         * 347ef6c1daac45ed9d1fa02818cf0fb6
         */
        export type Player = string;
        /**
         * example:
         * 347ef6c1daac45ed9d1fa02818cf0fb6
         */
        export type Profile = string;
        /**
         * example:
         * 409a1e0f261a49849493278d6cd9305a
         */
        export type Uuid = string;
      }
      export interface QueryParameters {
        player?: /**
         * example:
         * 347ef6c1daac45ed9d1fa02818cf0fb6
         */
        Parameters.Player;
        profile?: /**
         * example:
         * 347ef6c1daac45ed9d1fa02818cf0fb6
         */
        Parameters.Profile;
        uuid?: /**
         * example:
         * 409a1e0f261a49849493278d6cd9305a
         */
        Parameters.Uuid;
      }
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockAuctionResponse;
        export type $400 = Components.Schemas.ApiError;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace SkyblockAuctions {
    namespace Get {
      namespace Parameters {
        /**
         * example:
         * 1
         */
        export type Page = number;
      }
      export interface QueryParameters {
        page?: /**
         * example:
         * 1
         */
        Parameters.Page;
      }
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockAuctionsResponse;
      }
    }
  }
  namespace SkyblockAuctionsEnded {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockAuctionsEndedResponse;
      }
    }
  }
  namespace SkyblockBazaar {
    namespace Get {
      namespace Responses {
        export type $200 = Components.Schemas.SkyBlockBazaarResponse;
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
  namespace SkyblockProfile {
    namespace Get {
      namespace Parameters {
        /**
         * example:
         * 20934ef9488c465180a78f861586b4cf
         */
        export type Profile = string;
      }
      export interface QueryParameters {
        profile: /**
         * example:
         * 20934ef9488c465180a78f861586b4cf
         */
        Parameters.Profile;
      }
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          profile: Components.Schemas.SkyBlockProfile;
        }
        export type $400 = Components.Responses.MissingFields;
        export type $403 = Components.Responses.Unauthorized;
        export type $429 = Components.Responses.RateLimitError;
      }
    }
  }
  namespace SkyblockProfiles {
    namespace Get {
      namespace Responses {
        export interface $200 {
          /**
           * Whether or not the request succeeded.
           */
          success: boolean;
          profiles: Components.Schemas.SkyBlockProfileCuteName[] | null;
        }
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
