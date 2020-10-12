export interface InventoryData {
  type: number;
  data: string;
}

export interface Stats {
  /** The statistic described. e.g. "kills_zombie" */
  [stat: string]: number;
}

export interface Objective {
  /** Whether or not the objective is complete. */
  status?: "COMPLETE" | "ACTIVE";
  /** Progress toward the goal of the objective. */
  progress?: number;
  /** Javascript timestamp of the time this objective was completed. */
  completed_at?: number;
  /** Generally if the objective contains extra info this will be an MC item name. */
  (resource: string): boolean;
}

export interface Objectives {
  /** The name of the objective. e.g. "complete_the_crystal_core_anything_no_return_race_3" */
  [objective: string]: Objective;
}

export interface Quest {
  /** Status of this quest. */
  status?: "COMPLETE" | "ACTIVE";
  /** Javascript timestamp of when the quest was started. */
  activated_at?: number;
  /** Unique number indicated "timestamp" within SkyBlock. */
  activated_at_sb?: number;
  /** Javascript timestamp of when the quest was finished. */
  completed_at?: number;
  /** Unique number indicated "timestamp" within SkyBlock. */
  completed_at_sb?: number;
}

export interface Quests {
  /** The name of the quest. e.g. "collection_log" */
  [quest_name: string]: Quest;
}

export interface Member {
  /** Javascript timestamp of the last time their profile was saved. */
  last_save?: number;
  /** Javascript timestamp of the first time they played. */
  first_join?: number;
  /** Javascript timestamp of the first time they played in the SkyBlock hub. */
  first_join_hub?: number;
  /** Numeric list of stats for the player on this profile. */
  stats?: Stats;
  /** Objectives the profile member has completed. */
  objectives?: Objectives;
  /** Array of strings that each describe a completed tutorial. */
  tutorial?: string[];
  /** Quests the player is doing or has completed. */
  quests?: Quests;
  /** The amount of coins in their purse. */
  coin_purse?: number;
  /** Unique SkyBlock timestamp of their last death. */
  last_death?: number;
  /** "Generators" (minions) this profile member has contributed to the coop. e.g. "COBBLESTONE_9" would be Cobblestone IX */
  crafted_generators?: string[];
  /** Array of SkyBlock zones visited. e.g. "deep_caverns_room_5" would be Obsidian Mines in Deep Caverns. */
  visited_zones?: string[];
  /** Total number of fairy souls collected in their lifetime. */
  fairy_souls_collected?: number;
  /** Unexchanged fairy souls. */
  fairy_souls?: number;
  /** Amount of times groups of 5 fairy souls have been turned in to Tia the fairy. */
  fairy_exchanged?: number;

  fishing_treasure_caught?: number;
  death_count?: number;
  slayer_quest?: unknown; // track active slayer quest
  slayer_bosses?: {
    [key: string]: {
      claimed_levels?: {
        [key: string]: boolean;
      };
      (key: string): number;
      xp?: number;
    };
  };
  dungeons?: unknown; // SkyBlockProfileDungeons;

  // Skills API
  experience_skill_runecrafting?: number;
  experience_skill_combat?: number;
  experience_skill_mining?: number;
  experience_skill_alchemy?: number;
  experience_skill_farming?: number;
  experience_skill_enchanting?: number;
  experience_skill_fishing?: number;
  experience_skill_foraging?: number;
  experience_skill_carpentry?: number;
  experience_skill_taming?: number;

  // Collections API
  unlocked_coll_tiers?: string[];
  collection?: unknown; // SkyBlockProfileCollection;

  /**
   * Their currently equipped armor. This is available without the inventory API being enabled.
   * @Category Public
   */
  inv_armor?: InventoryData;

  /**
   * The contents of their player inventory.
   * @Category Inventory API
   */
  inv_contents?: InventoryData;
  /**
   * Which slot from their wardrobe is currently equipped.
   * @Category Inventory API
   */
  wardrobe_equipped_slot?: number;
  /**
   * The contents of their wardrobe.
   * @Category Inventory API
   */
  wardrobe_contents?: InventoryData;
  /**
   * The contents of their ender chest.
   * @Category Inventory API
   */
  ender_chest_contents?: InventoryData;
  /**
   * The content of their candy inventory. This is the candy they see in their Trick or Treat bag.
   * @Category Inventory API
   */
  candy_inventory_contents?: InventoryData;
  /**
   * The contents of their talisman bag (which talismans they have equipped).
   * @Category Inventory API
   */
  talisman_bag?: InventoryData;
  /**
   * The contents of their potion bag.
   * @Category Inventory API
   */
  potion_bag?: InventoryData;
  /**
   * The contents of their fishing bag. (e.g. bait)
   * @Category Inventory API
   */
  fishing_bag?: InventoryData;
  /**
   * The contents of their quiver. This will usually be arrows.
   * @Category Inventory API
   */
  quiver?: InventoryData;
}
