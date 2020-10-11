/**
 * @category Profile Member
 */
export interface InventoryData {
  type: number;
  data: string;
}

/**
 * @category Profile
 */
export interface ProfileMember {
  last_save: Date;
  first_join: Date;
  first_join_hub: number;
  stats: {
    [key: string]: number;
  };
  objectives: {
    [key: string]: {
      status: "COMPLETE" | "ACTIVE";
      progress: number;
      completed_at?: Date;
      (key: string): boolean;
    };
  };
  tutorial: string[];
  quests: {
    [key: string]: {
      status: "COMPLETE" | "ACTIVE";
      activated_at: Date;
      activated_at_sb: number;
      completed_at: Date;
      completed_at_sb: number;
    };
  };
  coin_purse: number;
  last_death: number;
  crafted_generators: string[];
  visited_zones: string[];
  fairy_souls_collected: number;
  fairy_souls: number;
  fairy_exchanged: number;
  fishing_treasure_caught: number;
  death_count: number;
  slayer_quest?: unknown; // track active slayer quest
  slayer_bosses: {
    [key: string]: {
      claimed_levels: {
        [key: string]: boolean;
      };
      (key: string): number;
      xp: number;
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

  // Inventory API
  inv_armor: InventoryData;
  inv_contents: InventoryData;
  ender_chest_contents: InventoryData;
  candy_inventory_contents: InventoryData;
  talisman_bag: InventoryData;
  potion_bag: InventoryData;
  fishing_bag: InventoryData;
  quiver: InventoryData;
}
