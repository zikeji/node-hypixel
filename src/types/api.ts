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
