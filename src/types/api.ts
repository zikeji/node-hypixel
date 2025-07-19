export declare namespace Components {
  namespace Responses {
    export interface DataMissing {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Missing one or more fields [...]
       */
      cause?: string;
    }
    export interface InvalidKey {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Invalid API key
       */
      cause?: string;
    }
    export interface InvalidPage {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Invalid page
       */
      cause?: string;
    }
    export interface MalformedData {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Malformed UUID
       */
      cause?: string;
    }
    export interface MissingPage {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Page not found
       */
      cause?: string;
    }
    export interface NoResult {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * No result was found
       */
      cause?: string;
    }
    export interface NotPopulated {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Leaderboard data has not yet been populated
       */
      cause?: string;
    }
    export interface RateLimited {
      /**
       * example:
       * false
       */
      success?: boolean;
      /**
       * example:
       * Key throttle
       */
      cause?: string;
      /**
       * example:
       * true
       */
      throttle?: boolean;
      /**
       * When this boolean exists and is true, the throttle occurring is a global throttle applied to all users
       * example:
       * true
       */
      global?: boolean;
    }
  }
  namespace Schemas {
    export interface ActiveBooster {
      _id?: string; // objectid
      /**
       * example:
       * ad8fefaa8351454bb739a4eaa872173f
       */
      purchaserUuid?: string; // uuid
      amount?: number;
      originalLength?: number;
      length?: number;
      gameType?: number;
      dateActivated?: number; // int64
      stacked?: string /* uuid */[] | null;
    }
    export interface Booster {
      _id?: string; // objectid
      /**
       * example:
       * ad8fefaa8351454bb739a4eaa872173f
       */
      purchaserUuid?: string; // uuid
      amount?: number;
      originalLength?: number;
      length?: number;
      gameType?: number;
      dateActivated?: number; // int64
    }
    /**
     * Information about a specific game. When a field is not present you should fallback to the provided default if there is one, required fields will always exist.
     * example:
     * {
     *   "id": 58,
     *   "name": "Bed Wars",
     *   "databaseName": "Bedwars",
     *   "modeNames": {
     *     "BEDWARS_TWO_FOUR": "4v4",
     *     "BEDWARS_EIGHT_ONE": "Solo"
     *   }
     * }
     */
    export interface Game {
      /**
       * The backend ID of the game.
       * example:
       * 1
       */
      id: number;
      /**
       * The display name of the game.
       * example:
       * Bed Wars
       */
      name: string;
      /**
       * The key used for database storage, such as for stats.
       * example:
       * Bedwars
       */
      databaseName: string;
      /**
       * A map of mode key to display name
       * example:
       * {
       *   "solo_normal": "Solo",
       *   "team_normal": "Doubles"
       * }
       */
      modeNames?: {
        [key: string]: unknown;
      };
      /**
       * True if the game is retired and no longer playable.
       */
      retired?: boolean;
      /**
       * True if the game is legacy and part of the Classic Lobby.
       */
      legacy?: boolean;
    }
    /**
     * Information about a player's house.
     */
    export interface HousingHouse {
      /**
       * The UUID of this house.
       */
      uuid: string; // uuid
      /**
       * The UUID of the owner of this house.
       */
      owner: string; // uuid
      /**
       * The name of this house, may contain Minecraft color symbols.
       */
      name: string | null;
      /**
       * The time this house was created.
       */
      createdAt: number; // int64
      /**
       * The number of players in this house.
       */
      players: number; // int32
      cookies: {
        /**
         * The current amount of cookies that this house has for the current week.
         */
        current?: number; // int32
      };
    }
    export interface QueuedBooster {
      _id?: string; // objectid
      /**
       * example:
       * ad8fefaa8351454bb739a4eaa872173f
       */
      purchaserUuid?: string; // uuid
      amount?: number;
      originalLength?: number;
      length?: number;
      gameType?: number;
      dateActivated?: number; // int64
      stacked?: boolean | null;
    }
    /**
     * example:
     * {
     *   "uuid": "409a1e0f261a49849493278d6cd9305a",
     *   "auctioneer": "347ef6c1daac45ed9d1fa02818cf0fb6",
     *   "profile_id": "347ef6c1daac45ed9d1fa02818cf0fb6",
     *   "coop": [
     *     "347ef6c1daac45ed9d1fa02818cf0fb6"
     *   ],
     *   "start": 1573760802637,
     *   "end": 1573761102637,
     *   "item_name": "Azure Bluet",
     *   "item_lore": "§f§lCOMMON",
     *   "extra": "Azure Bluet Red Rose",
     *   "category": "blocks",
     *   "tier": "COMMON",
     *   "starting_bid": 1,
     *   "item_bytes": {
     *     "type": 0,
     *     "data": "H4sIAAAAAAAAAB2NQQqCQBhGv1ErHaKu0KoLtGtnarRIhTpA/OGfDIwZ4wxUF/IeHiyyto/3eBKIIJQEIDx4qsJaYJK07m6FhG+p9hEdVMV7TXU3Wh+JWaW6h6ZXhODYGg5/LeZDfxt6nZR5XhYhgoIaxmKE8dsZXu20YwuJZfa0hmJrjbo6y134f8pTll5O5TnbbgAP05Qaqhk+8AVIrd2eoAAAAA=="
     *   },
     *   "claimed": true,
     *   "claimed_bidders": [],
     *   "highest_bid_amount": 7607533,
     *   "bids": [
     *     {
     *       "auction_id": "409a1e0f261a49849493278d6cd9305a",
     *       "bidder": "99748e629dee463892f68abf3a780094",
     *       "profile_id": "99748e629dee463892f68abf3a780094",
     *       "amount": 7607533,
     *       "timestamp": 1573760824844
     *     }
     *   ]
     * }
     */
    export interface SkyBlockAuction {
      _id?: string; // objectid
      uuid?: string; // uuid
      auctioneer?: string; // uuid
      profile_id?: string; // uuid
      coop?: string /* uuid */[];
      start?: number; // int64
      end?: number; // int64
      item_name?: string;
      item_lore?: string;
      extra?: string;
      category?: string;
      tier?: string;
      starting_bid?: number;
      item_bytes?: {
        type?: number;
        data?: string;
      };
      claimed?: boolean;
      claimed_bidders?: unknown[];
      highest_bid_amount?: number;
      bids?: {
        auction_id?: string; // uuid
        bidder?: string; // uuid
        profile_id?: string; // uuid
        amount?: number;
        timestamp?: number; // int64
      }[];
    }
    export interface SkyBlockFireSale {
      /**
       * The SkyBlock item ID for this sale
       */
      item_id?: string;
      /**
       * The start time in unix milliseconds for the sale
       */
      start?: number;
      /**
       * The end time in unix milliseconds for the sale
       */
      end?: number;
      /**
       * The amount of items available for this sale
       */
      amount?: number;
      /**
       * The price in Gems for this sale
       */
      price?: number;
    }
    /**
     * Information about a player's SkyBlock garden, the only guaranteed field is the `uuid` field.
     */
    export interface SkyBlockGarden {
      /**
       * The UUID of the profile for this garden.
       */
      uuid: string; // uuid
      commission_data?: {
        /**
         * A map of visitor identifier to visit count
         * example:
         * {
         *   "jerry": 1,
         *   "jacob": 2,
         *   "andrew": 3
         * }
         */
        visits?: {
          [key: string]: unknown;
        };
        /**
         * A map of visitor identifier to completed count
         * example:
         * {
         *   "jerry": 1,
         *   "jacob": 1,
         *   "andrew": 2
         * }
         */
        completed?: {
          [key: string]: unknown;
        };
        total_completed?: number; // int32
        unique_npcs_served?: number; // int32
      };
      /**
       * example:
       * {
       *   "organic_matter": 1772.8,
       *   "fuel_units": 17000,
       *   "compost_units": 0,
       *   "compost_items": 2,
       *   "conversion_ticks": 300,
       *   "last_save": 1721039418436,
       *   "upgrades": {
       *     "speed": 25,
       *     "multi_drop": 25,
       *     "fuel_cap": 22,
       *     "organic_matter_cap": 25,
       *     "cost_reduction": 25
       *   }
       * }
       */
      composter_data?: {
        [key: string]: unknown;
      };
      /**
       * example:
       * {
       *   "liam": {
       *     "requirement": [
       *       {
       *         "original_item": "NETHER_STALK",
       *         "original_amount": 93995,
       *         "item": "MUTANT_NETHER_STALK",
       *         "amount": 4
       *       }
       *     ],
       *     "status": "NOT_STARTED",
       *     "position": 1
       *   },
       *   "lumberjack": {
       *     "requirement": [
       *       {
       *         "original_item": "POTATO_ITEM",
       *         "original_amount": 81380,
       *         "item": "ENCHANTED_BAKED_POTATO",
       *         "amount": 3
       *       }
       *     ],
       *     "status": "NOT_STARTED",
       *     "position": 2
       *   },
       *   "oringo": {
       *     "requirement": [
       *       {
       *         "original_item": "WHEAT",
       *         "original_amount": 26798,
       *         "item": "ENCHANTED_HAY_BLOCK",
       *         "amount": 21
       *       }
       *     ],
       *     "status": "NOT_STARTED",
       *     "position": 3
       *   },
       *   "rhys": {
       *     "requirement": [
       *       {
       *         "original_item": "JACK_O_LANTERN",
       *         "original_amount": 512,
       *         "item": "JACK_O_LANTERN",
       *         "amount": 512
       *       }
       *     ],
       *     "status": "NOT_STARTED",
       *     "position": 4
       *   },
       *   "fear_mongerer": {
       *     "requirement": [
       *       {
       *         "original_item": "PUMPKIN",
       *         "original_amount": 27709,
       *         "item": "POLISHED_PUMPKIN",
       *         "amount": 1
       *       }
       *     ],
       *     "status": "NOT_STARTED",
       *     "position": 5,
       *     "extra_rewards": [
       *       {
       *         "candy": "PURPLE_CANDY"
       *       }
       *     ]
       *   }
       * }
       */
      active_commissions?: {
        [key: string]: unknown;
      };
      /**
       * A map of resource ID to amount collected
       * example:
       * {
       *   "WHEAT": 100,
       *   "POTATO_ITEM": 100,
       *   "INK_SACK:3": 100
       * }
       */
      resources_collected?: {
        [key: string]: unknown;
      };
      /**
       * example:
       * {
       *   "WHEAT": 1,
       *   "POTATO_ITEM": 2,
       *   "INK_SACK:3": 3
       * }
       */
      crop_upgrade_levels?: {
        [key: string]: unknown;
      };
      /**
       * example:
       * [
       *   "beginner_1",
       *   "intermediate_3"
       * ]
       */
      unlocked_plots_ids?: string[];
      garden_experience?: number; // double
      unlocked_barn_skins?: string[];
      selected_barn_skin?: string;
    }
    /**
     * example:
     * {
     *   "material": "LEATHER_CHESTPLATE",
     *   "color": "255,215,0",
     *   "name": "Farm Armor Chestplate",
     *   "category": "CHESTPLATE",
     *   "tier": "RARE",
     *   "stats": {
     *     "DEFENSE": 75,
     *     "HEALTH": 20
     *   },
     *   "npc_sell_price": 5200,
     *   "id": "FARM_ARMOR_CHESTPLATE"
     * }
     */
    export interface SkyBlockItem {
      /**
       * The unique identifier for this item
       */
      id?: string;
      /**
       * The Bukkit material enum value for the item
       */
      material?: string;
      /**
       * The name of the item
       */
      name?: string;
      /**
       * The rarity tier of the item
       */
      tier?:
        | "COMMON"
        | "UNCOMMON"
        | "RARE"
        | "EPIC"
        | "LEGENDARY"
        | "MYTHIC"
        | "SUPREME"
        | "SPECIAL"
        | "VERY_SPECIAL";
      /**
       * The color metadata to be applied to an item, usually leather armor pieces
       */
      color?: string; // ^(?:(?:^|,\s*)([01]?\d\d?|2[0-4]\d|25[0-5])){3}$
      /**
       * The skin value for a skull based item
       */
      skin?: string;
    }
    export interface SkyBlockMuseum {
      value?: number; // int64
      appraisal?: boolean;
      items?: {
        [key: string]: unknown;
      };
      special?: unknown[];
    }
    export interface SkyBlockProfile {
      profile_id?: string; // uuid
      /**
       * A map of member UUIDs to member profiles objects
       */
      members?: {
        player_id?: string; // uuid
        profile?: {
          /**
           * If this field exists, the member profile is marked as deleted
           */
          deletion_notice?: {
            timestamp?: number; // int64
          } | null;
        };
      };
      /**
       * The cute name of the profile, only provided on the profiles endpoint
       */
      cute_name?: string | null;
      /**
       * Whether or not this is the currently selected profile, only provided on the profiles endpoint
       */
      selected?: boolean | null;
      community_upgrades?: {
        [key: string]: unknown;
      } | null;
      /**
       * Information about the bank account for this profile, only present if the API banking setting is enabled
       */
      banking?: {
        balance?: number; // double
        transactions?: {
          timestamp?: number; // int64
          action?: "DEPOSIT" | "WITHDRAW";
          initiator_name?: string;
          amount?: number; // double
        }[];
      } | null;
      /**
       * The SkyBlock game mode of the profile, not present if normal mode
       */
      game_mode?: "ironman" | "island" | "bingo";
    }
  }
}
export declare namespace Paths {
  namespace V2Boosters {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          boosters?: (
            | Components.Schemas.ActiveBooster
            | Components.Schemas.QueuedBooster
          )[];
          boosterState?: {
            decrementing?: boolean;
          };
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2Counts {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          playerCount?: number;
          /**
           * example:
           * {
           *   "GAME_TYPE": {
           *     "players": 2,
           *     "modes": {
           *       "mode_1": 1,
           *       "mode_2": 1
           *     }
           *   }
           * }
           */
          games?: {
            [key: string]: unknown;
          };
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2Guild {
    namespace Get {
      namespace Parameters {
        export type Id = string; // objectid
        export type Name = string;
        export type Player = string; // uuid
      }
      export interface QueryParameters {
        id?: Parameters.Id /* objectid */;
        player?: Parameters.Player /* uuid */;
        name?: Parameters.Name;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          guild?: {
            [key: string]: unknown;
          };
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2HousingActive {
    namespace Get {
      namespace Responses {
        export type $200 = /* Information about a player's house. */ Components.Schemas.HousingHouse[];
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2HousingHouse {
    namespace Get {
      namespace Parameters {
        export type House = string;
      }
      export interface QueryParameters {
        house: Parameters.House;
      }
      namespace Responses {
        export type $200 = /* Information about a player's house. */ Components.Schemas.HousingHouse;
        export type $403 = Components.Responses.InvalidKey;
        export type $404 = Components.Responses.NoResult;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2HousingHouses {
    namespace Get {
      namespace Parameters {
        export type Player = string;
      }
      export interface QueryParameters {
        player?: Parameters.Player;
      }
      namespace Responses {
        export type $200 = /* Information about a player's house. */ Components.Schemas.HousingHouse[];
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2Leaderboards {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          leaderboards?: {
            [key: string]: unknown;
          };
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
        export type $503 = Components.Responses.NotPopulated;
      }
    }
  }
  namespace V2Player {
    namespace Get {
      namespace Parameters {
        export type Uuid = string;
      }
      export interface QueryParameters {
        uuid: Parameters.Uuid;
      }
      namespace Responses {
        export interface $200 {
          /**
           * example:
           * true
           */
          success?: boolean;
          player?: {
            /**
             * example:
             * 3fa85f6457174562b3fc2c963f66afa6
             */
            uuid?: string;
            displayname?: string | null;
            rank?: "ADMIN" | "MODERATOR" | "HELPER" | "NORMAL";
            packageRank?: "MVP_PLUS" | "MVP" | "VIP_PLUS" | "VIP" | "NONE";
            newPackageRank?: "MVP_PLUS" | "MVP" | "VIP_PLUS" | "VIP" | "NONE";
            monthlyPackageRank?: "SUPERSTAR" | "NONE";
            firstLogin?: number | null;
            lastLogin?: number | null;
            lastLogout?: number | null;
            stats?: {
              [key: string]: unknown;
            } | null;
          };
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2Punishmentstats {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          watchdog_lastMinute?: number;
          staff_rollingDaily?: number;
          watchdog_total?: number;
          watchdog_rollingDaily?: number;
          staff_total?: number;
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
        export type $503 = Components.Responses.NotPopulated;
      }
    }
  }
  namespace V2Recentgames {
    namespace Get {
      namespace Parameters {
        export type Uuid = string;
      }
      export interface QueryParameters {
        uuid: Parameters.Uuid;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          uuid?: string; // uuid
          games?: {
            date?: number; // int64
            gameType?: string;
            mode?: string;
            map?: string;
            ended?: number; // int64
          }[];
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2ResourcesAchievements {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          achievements?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesChallenges {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          challenges?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesGames {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          /**
           * A map where the key is the backend name of the game
           */
          games?: {
            [name: string]: /**
             * Information about a specific game. When a field is not present you should fallback to the provided default if there is one, required fields will always exist.
             * example:
             * {
             *   "id": 58,
             *   "name": "Bed Wars",
             *   "databaseName": "Bedwars",
             *   "modeNames": {
             *     "BEDWARS_TWO_FOUR": "4v4",
             *     "BEDWARS_EIGHT_ONE": "Solo"
             *   }
             * }
             */
            Components.Schemas.Game;
          };
        }
      }
    }
  }
  namespace V2ResourcesGuildsAchievements {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          one_time?: {
            [key: string]: unknown;
          };
          tiered?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesQuests {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          quests?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesSkyblockBingo {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success: boolean;
          /**
           * The unix milliseconds timestamp of the last time this data was updated
           */
          lastUpdated: number; // int64
          /**
           * The current bingo event ID, increments by 1 for each bingo hosted
           * example:
           * 27
           */
          id: number; // int32
          /**
           * The display name for the current bingo event
           * example:
           * March 2024
           */
          name: string;
          /**
           * The start time of the current bingo event in unix milliseconds
           * example:
           * 1709269200000
           */
          start: number; // int64
          /**
           * The end time of the current bingo event in unix milliseconds
           * example:
           * 1709874000000
           */
          end: number; // int64
          /**
           * The modifier for the current bingo event
           * example:
           * NORMAL
           */
          modifier: "NORMAL" | "EXTREME" | "SECRET";
          /**
           * The goals for the current bingo event, as well as their progress
           */
          goals: {
            /**
             * The backend ID for this goal
             */
            id: string;
            /**
             * The user friendly display name for this goal
             */
            name: string;
            /**
             * Description of this goal
             */
            lore?: string;
            /**
             * The full description of this goal
             */
            fullLore?: unknown[];
            /**
             * The tiers of this goal, if a global goal
             */
            tiers?: number /* int64 */[];
            /**
             * The global progress of this goal
             */
            progress?: number; // int64
            /**
             * The required amount for this specific goal
             */
            requiredAmount?: number; // int32
          }[];
        }
      }
    }
  }
  namespace V2ResourcesSkyblockCollections {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          /**
           * example:
           * 0.11.22
           */
          version?: string;
          collections?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesSkyblockElection {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          /**
           * Data regarding the current mayor
           */
          mayor?: {
            [key: string]: unknown;
          };
          /**
           * Data regarding the current election, will not be provided if there is no open election ongoing
           */
          current?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesSkyblockItems {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          items?: /**
           * example:
           * {
           *   "material": "LEATHER_CHESTPLATE",
           *   "color": "255,215,0",
           *   "name": "Farm Armor Chestplate",
           *   "category": "CHESTPLATE",
           *   "tier": "RARE",
           *   "stats": {
           *     "DEFENSE": 75,
           *     "HEALTH": 20
           *   },
           *   "npc_sell_price": 5200,
           *   "id": "FARM_ARMOR_CHESTPLATE"
           * }
           */
          Components.Schemas.SkyBlockItem[];
        }
      }
    }
  }
  namespace V2ResourcesSkyblockSkills {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          /**
           * example:
           * 0.11.22
           */
          version?: string;
          skills?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesVanityCompanions {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          types?: {
            [key: string]: unknown;
          };
          rarities?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2ResourcesVanityPets {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          lastUpdated?: number;
          types?: {
            [key: string]: unknown;
          };
          rarities?: {
            [key: string]: unknown;
          };
        }
      }
    }
  }
  namespace V2SkyblockAuction {
    namespace Get {
      namespace Parameters {
        export type Player = string;
        export type Profile = string;
        export type Uuid = string;
      }
      export interface QueryParameters {
        uuid?: Parameters.Uuid;
        player?: Parameters.Player;
        profile?: Parameters.Profile;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          auctions?: /**
           * example:
           * {
           *   "uuid": "409a1e0f261a49849493278d6cd9305a",
           *   "auctioneer": "347ef6c1daac45ed9d1fa02818cf0fb6",
           *   "profile_id": "347ef6c1daac45ed9d1fa02818cf0fb6",
           *   "coop": [
           *     "347ef6c1daac45ed9d1fa02818cf0fb6"
           *   ],
           *   "start": 1573760802637,
           *   "end": 1573761102637,
           *   "item_name": "Azure Bluet",
           *   "item_lore": "§f§lCOMMON",
           *   "extra": "Azure Bluet Red Rose",
           *   "category": "blocks",
           *   "tier": "COMMON",
           *   "starting_bid": 1,
           *   "item_bytes": {
           *     "type": 0,
           *     "data": "H4sIAAAAAAAAAB2NQQqCQBhGv1ErHaKu0KoLtGtnarRIhTpA/OGfDIwZ4wxUF/IeHiyyto/3eBKIIJQEIDx4qsJaYJK07m6FhG+p9hEdVMV7TXU3Wh+JWaW6h6ZXhODYGg5/LeZDfxt6nZR5XhYhgoIaxmKE8dsZXu20YwuJZfa0hmJrjbo6y134f8pTll5O5TnbbgAP05Qaqhk+8AVIrd2eoAAAAA=="
           *   },
           *   "claimed": true,
           *   "claimed_bidders": [],
           *   "highest_bid_amount": 7607533,
           *   "bids": [
           *     {
           *       "auction_id": "409a1e0f261a49849493278d6cd9305a",
           *       "bidder": "99748e629dee463892f68abf3a780094",
           *       "profile_id": "99748e629dee463892f68abf3a780094",
           *       "amount": 7607533,
           *       "timestamp": 1573760824844
           *     }
           *   ]
           * }
           */
          Components.Schemas.SkyBlockAuction[];
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockAuctions {
    namespace Get {
      namespace Parameters {
        export type Page = number;
      }
      export interface QueryParameters {
        page?: Parameters.Page;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          page?: number;
          /**
           * example:
           * 32
           */
          totalPages?: number;
          /**
           * example:
           * 31267
           */
          totalAuctions?: number;
          /**
           * example:
           * 1571065561345
           */
          lastUpdated?: number; // int64
          auctions?: /**
           * example:
           * {
           *   "uuid": "409a1e0f261a49849493278d6cd9305a",
           *   "auctioneer": "347ef6c1daac45ed9d1fa02818cf0fb6",
           *   "profile_id": "347ef6c1daac45ed9d1fa02818cf0fb6",
           *   "coop": [
           *     "347ef6c1daac45ed9d1fa02818cf0fb6"
           *   ],
           *   "start": 1573760802637,
           *   "end": 1573761102637,
           *   "item_name": "Azure Bluet",
           *   "item_lore": "§f§lCOMMON",
           *   "extra": "Azure Bluet Red Rose",
           *   "category": "blocks",
           *   "tier": "COMMON",
           *   "starting_bid": 1,
           *   "item_bytes": {
           *     "type": 0,
           *     "data": "H4sIAAAAAAAAAB2NQQqCQBhGv1ErHaKu0KoLtGtnarRIhTpA/OGfDIwZ4wxUF/IeHiyyto/3eBKIIJQEIDx4qsJaYJK07m6FhG+p9hEdVMV7TXU3Wh+JWaW6h6ZXhODYGg5/LeZDfxt6nZR5XhYhgoIaxmKE8dsZXu20YwuJZfa0hmJrjbo6y134f8pTll5O5TnbbgAP05Qaqhk+8AVIrd2eoAAAAA=="
           *   },
           *   "claimed": true,
           *   "claimed_bidders": [],
           *   "highest_bid_amount": 7607533,
           *   "bids": [
           *     {
           *       "auction_id": "409a1e0f261a49849493278d6cd9305a",
           *       "bidder": "99748e629dee463892f68abf3a780094",
           *       "profile_id": "99748e629dee463892f68abf3a780094",
           *       "amount": 7607533,
           *       "timestamp": 1573760824844
           *     }
           *   ]
           * }
           */
          Components.Schemas.SkyBlockAuction[];
        }
        export type $404 = Components.Responses.MissingPage;
        export type $422 = Components.Responses.InvalidPage;
        export type $503 = Components.Responses.NotPopulated;
      }
    }
  }
  namespace V2SkyblockAuctionsEnded {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          /**
           * example:
           * 1607456463916
           */
          lastUpdated?: number; // int64
          auctions?: unknown[];
        }
      }
    }
  }
  namespace V2SkyblockBazaar {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          /**
           * example:
           * 1590854517479
           */
          lastUpdated?: number; // int64
          /**
           * example:
           * {
           *   "INK_SACK:3": {
           *     "product_id": "INK_SACK:3",
           *     "sell_summary": [
           *       {
           *         "amount": 20569,
           *         "pricePerUnit": 4.2,
           *         "orders": 1
           *       },
           *       {
           *         "amount": 140326,
           *         "pricePerUnit": 3.8,
           *         "orders": 2
           *       }
           *     ],
           *     "buy_summary": [
           *       {
           *         "amount": 640,
           *         "pricePerUnit": 4.8,
           *         "orders": 1
           *       },
           *       {
           *         "amount": 640,
           *         "pricePerUnit": 4.9,
           *         "orders": 1
           *       },
           *       {
           *         "amount": 25957,
           *         "pricePerUnit": 5,
           *         "orders": 3
           *       }
           *     ],
           *     "quick_status": {
           *       "productId": "INK_SACK:3",
           *       "sellPrice": 4.2,
           *       "sellVolume": 409855,
           *       "sellMovingWeek": 8301075,
           *       "sellOrders": 11,
           *       "buyPrice": 4.99260315136572,
           *       "buyVolume": 1254854,
           *       "buyMovingWeek": 5830656,
           *       "buyOrders": 85
           *     }
           *   }
           * }
           */
          products?: {
            [key: string]: unknown;
          };
        }
        export type $503 = Components.Responses.NotPopulated;
      }
    }
  }
  namespace V2SkyblockBingo {
    namespace Get {
      namespace Parameters {
        export type Uuid = string; // uuid
      }
      export interface QueryParameters {
        uuid?: Parameters.Uuid /* uuid */;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          events?: {
            /**
             * The id for this event
             * example:
             * 2
             */
            key: number; // int32
            /**
             * The amount of points earned
             * example:
             * 117
             */
            points: number; // int32
            /**
             * The completed goal IDs
             */
            completed_goals: string[];
          }[];
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export interface $404 {
          /**
           * example:
           * false
           */
          success?: boolean;
          /**
           * example:
           * No bingo data could be found
           */
          cause?: string;
        }
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockFiresales {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          sales?: Components.Schemas.SkyBlockFireSale[];
        }
      }
    }
  }
  namespace V2SkyblockGarden {
    namespace Get {
      namespace Parameters {
        export type Profile = string; // uuid
      }
      export interface QueryParameters {
        profile?: Parameters.Profile /* uuid */;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          garden?: /* Information about a player's SkyBlock garden, the only guaranteed field is the `uuid` field. */ Components.Schemas.SkyBlockGarden;
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $404 = Components.Responses.NoResult;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockMuseum {
    namespace Get {
      namespace Parameters {
        export type Profile = string; // uuid
      }
      export interface QueryParameters {
        profile?: Parameters.Profile /* uuid */;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          profile?: Components.Schemas.SkyBlockMuseum;
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockNews {
    namespace Get {
      namespace Responses {
        export interface $200 {
          success?: boolean;
          items?: unknown;
        }
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockProfile {
    namespace Get {
      namespace Parameters {
        export type Profile = string; // uuid
      }
      export interface QueryParameters {
        profile?: Parameters.Profile /* uuid */;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          profile?: Components.Schemas.SkyBlockProfile;
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2SkyblockProfiles {
    namespace Get {
      namespace Parameters {
        export type Uuid = string; // uuid
      }
      export interface QueryParameters {
        uuid?: Parameters.Uuid /* uuid */;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          profiles?: Components.Schemas.SkyBlockProfile[];
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $422 = Components.Responses.MalformedData;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
  namespace V2Status {
    namespace Get {
      namespace Parameters {
        export type Uuid = string;
      }
      export interface QueryParameters {
        uuid: Parameters.Uuid;
      }
      namespace Responses {
        export interface $200 {
          success?: boolean;
          /**
           * example:
           * ad8fefaa8351454bb739a4eaa872173f
           */
          uuid?: string; // uuid
          session?: {
            online?: boolean;
            gameType?: string;
            mode?: string;
            map?: string;
          };
        }
        export type $400 = Components.Responses.DataMissing;
        export type $403 = Components.Responses.InvalidKey;
        export type $429 = Components.Responses.RateLimited;
      }
    }
  }
}
