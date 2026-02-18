import type { Components } from "../../api";
import type { MinecraftInventoryData } from "../../AugmentedTypes";

export type SkyBlockProfileMember = NonNullable<
  Components.Schemas.SkyBlockProfile["members"]
> &
  Record<string, unknown> & {
    accessory_bag_storage: {
      tuning?: {
        [key: string]:
          | {
              health?: number;
              defense?: number;
              walk_speed?: number;
              strength?: number;
              critical_damage?: number;
              critical_chance?: number;
              attack_speed?: number;
              intelligence?: number;
            }
          | undefined;
      };
      highest_magical_power?: number;
      selected_power?: string;
      unlocked_powers?: string[];
      bag_upgrades_purchased?: number;
      [key: string]: string | number | string[] | unknown;
    };
    bestiary?: SkyBlockProfileMemberBestiary;
    collection?: {
      [key: string]: number;
    };
    contests?: {
      [key: string]:
        | {
            collected: number;
            claimed_medal?: string;
            claimed_participants?: number;
            claimed_position?: number;
            claimed_rewards?: boolean;
          }
        | undefined;
    };
    currencies?: {
      coin_purse?: number;
      essence?: {
        [key: string]:
          | {
              current?: number;
            }
          | unknown;
      };
      motes_purse?: number;
      [key: string]: number | unknown;
    };
    dungeons?: SkyBlockProfileMemberDungeons;
    experimentation?: SkyBlockProfileMemberExperimentation;
    events: SkyBlockProfileMemberEvents;
    fairy_soul?: {
      unspent_souls?: number;
      total_collected?: number;
      fairy_exchanges?: number;
    };
    forge?: {
      forge_processes: {
        [key: string]: unknown;
      };
      [key: string]: unknown;
    };
    garden_player_data?: {
      copper?: number;
      larva_consumed?: number;
      analyzed_greenhouse_crops?: string[];
      discovered_greenhouse_crops?: string[];
    };
    glacite_player_data?: {
      fossils_donated?: Array<string>;
      fossil_dust?: number;
      corpses_looted?: {
        lapis?: number;
        vanguard?: number;
      };
      mineshafts_entered?: number;
    };
    inventory?: SkyBlockProfileMemberInventory;
    item_data?: {
      soulflow?: number;
      favorite_arrow?: string;
    };
    jacobs_contest?: {
      medals_inv: {
        bronze?: number;
        silver?: number;
        gold?: number;
      };
      perks: {
        double_drops?: number;
        farming_level_cap?: number;
      };
      unique_brackets?: {
        bronze?: string[];
        silver?: string[];
        gold?: string[];
        platinum?: string[];
        diamond?: string[];
        [key: string]: string[] | unknown;
      };
      personal_bests?: {
        [key: string]: number | undefined;
      };
      talked?: boolean;
      migration?: boolean;
      [key: string]: boolean | unknown;
    };
    leveling: {
      completions?: {
        [key: string]: number | undefined;
      };
      experience?: number;
      completed_tasks?: string[];
      highest_pet_score?: number;
      claimed_talisman?: boolean;
      bop_bonus?: string;
      mining_fiesta_ores_mined?: number;
      fishing_festival_sharks_killed?: number;
      migrated?: boolean;
      migrated_completions_2?: boolean;
      selected_symbol?: string;
      emblem_unlocks?: string[];
      last_viewed_tasks?: string[];
      [key: string]: string | string[] | boolean | number | unknown;
    };
    mining_core?: SkyBlockProfileMemberMiningCore;
    nether_island_player_data?: SkyBlockProfileMemberNetherIslandPlayerData;
    objectives?: SkyBlockProfileMemberObjectives;
    pets_data?: SkyBlockProfilePetsData;
    player_data?: SkyBlockProfileMemberPlayerData;
    player_id?: string;
    player_stats?: SkyBlockProfileMemberPlayerStats;
    profile?: {
      first_join?: number;
      coop_invitation?: {
        timestamp: number;
        invited_by: string;
        confirmed: boolean;
        confirmed_timestamp: number;
      };
      cookie_buff_active?: boolean;
      deletion_notice?: {
        timestamp: number;
      };
      personal_bank_upgrade?: number;
      bank_account?: number;
    };
    quests?: SkyBlockProfileMemberQuests;
    rift?: SkyBlockProfileMemberRift;
    shared_inventory: SkyBlockProfileMemberSharedInventory;
    slayer?: SkyBlockProfileMemberSlayer;
    trophy_fish?: SkyBlockProfileMemberTrophyFish;
    skill_trees?: SkyBlockProfileMemberSkillTrees;
    foraging?: SkyBlockProfileMemberForaging;
    foraging_core?: SkyBlockProfileMemberForagingCore;
    shards?: SkyBlockProfileMemberShards;
    temples?: {
      unlocked_temples?: string[];
    };
    attributes?: SkyBlockProfileMemberAttributes;
  };

export type SkyBlockProfileMemberPlayerData = {
  achievement_spawned_island_types: string[];
  active_effects?: {
    effect: string;
    infinite: boolean;
    level: number;
    modifiers: {
      key: string;
      amp: number;
    }[];
    ticks_remaining: number;
  }[];
  crafted_generators?: string[];
  death_count?: number;
  disabled_potion_effects: string[];
  experience?: {
    SKILL_FISHING?: number;
    SKILL_ALCHEMY?: number;
    SKILL_RUNECRAFTING?: number;
    SKILL_HUNTING?: number;
    SKILL_MINING?: number;
    SKILL_FARMING?: number;
    SKILL_ENCHANTING?: number;
    SKILL_TAMING?: number;
    SKILL_FORAGING?: number;
    SKILL_SOCIAL?: number;
    SKILL_CARPENTRY?: number;
    SKILL_COMBAT?: number;
    [key: string]: number | undefined;
  };
  fishing_treasure_caught?: number;
  last_death?: number;
  paused_effects?: unknown[];
  perks?: {
    flat_damage_vs_ender?: number;
    catacombs_boss_luck?: number;
    permanent_strength?: number;
    inc_zealots_odds?: number;
    catacombs_defense?: number;
    catacombs_strength?: number;
    eager_miner?: number;
    treasures_of_the_earth?: number;
    high_roller?: number;
    unbreaking?: number;
    permanent_speed?: number;
    permanent_health?: number;
    permanent_intelligence?: number;
    forbidden_blessing?: number;
    permanent_defense?: number;
    bane?: number;
    catacombs_intelligence?: number;
    catacombs_looting?: number;
    catacombs_health?: number;
    catacombs_crit_damage?: number;
    fero_vs_dragons?: number;
    headstart_kuudra?: number;
    crimson_training?: number;
    fresh_tools_kuudra?: number;
    strongarm_kuudra?: number;
    radiant_fisher?: number;
    midas_lure?: number;
    master_kuudra?: number;
    rhinestone_infusion?: number;
    cold_efficiency?: number;
    wither_piper?: number;
    drake_piper?: number;
    return_to_sender?: number;
    under_pressure?: number;
    dwarven_training?: number;
    heart_of_gold?: number;
    empowered_agility?: number;
    vermin_control?: number;
    harena_fortuna?: number;
    fungus_fortuna?: number;
    combat_wisdom_in_end?: number;
    edrag_cd?: number;
    mana_after_ender_kill?: number;
    spider_training?: number;
    cooled_forges?: number;
    season_of_joy?: number;
    frozen_skin?: number;
    diamond_in_the_rough?: number;
    toxophilite?: number;
    increased_sup_chances?: number;
    unbridled_rage?: number;
    [key: string]: number | undefined;
  };
  temp_stat_buffs?: {
    stat: number;
    key: string;
    amount: number;
    expire_at: number;
  }[];
  unlocked_coll_tiers?: string[];
  visited_modes?: string[];
  visited_zones?: string[];
  garden_chips?: {
    cropshot?: number;
    mechamind?: number;
    overdrive?: number;
    quickdraw?: number;
    sowledge?: number;
    hypercharge?: number;
    rarefinder?: number;
    synthesis?: number;
    evergreen?: number;
    vermin_vaporize?: number;
    [key: string]: number | undefined;
  };
  reaper_peppers_eaten?: number;
};

export type SkyBlockProfilePetsData = {
  autopet?: {
    rules?: {
      uuid?: string;
      id?: string;
      pet?: string;
      exceptions?: unknown[];
      disabled?: boolean;
      data?: {
        slot?: string;
        entity_type?: string;
      };
      name?: string;
      uniqueId?: string;
    }[];
    rules_limit?: number;
    migrated?: boolean;
    migrated_2?: boolean;
  };
  pets?: {
    uuid?: string;
    uniqueId?: string;
    type?: string;
    exp?: number;
    active?: boolean;
    tier?: string;
    heldItem?: string;
    candyUsed?: number;
    skin?: string;
    extra?: unknown;
  }[];
  pet_care?: {
    pet_types_sacrificed?: string[];
  };
};

export type SkyBlockProfileMemberInventory = {
  inv_contents?: MinecraftInventoryData;
  ender_chest_contents?: MinecraftInventoryData;
  backpack_icons?: Record<string, MinecraftInventoryData>;
  backpack_contents?: Record<string, MinecraftInventoryData>;
  bag_contents?: {
    potion_bag?: MinecraftInventoryData;
    talisman_bag?: MinecraftInventoryData;
    fishing_bag?: MinecraftInventoryData;
    sacks_bag?: MinecraftInventoryData;
  };
  inv_armor?: MinecraftInventoryData;
  equipment_contents?: MinecraftInventoryData;
  personal_vault_contents?: MinecraftInventoryData;
  wardrobe_equipped_slot?: number;
  sacks_counts?: Record<string, number>;
  wardrobe_contents?: MinecraftInventoryData;
};

export type SkyBlockProfileMemberSharedInventory = {
  candy_inventory_contents: MinecraftInventoryData;
  carnival_mask_inventory_contents: MinecraftInventoryData;
};

export type SkyBlockProfileMemberEvents = {
  easter?: {
    rabbits?: {
      collected_locations?: {
        [key: string]: string[];
      };
      collected_eggs?: {
        breakfast?: number;
        lunch?: number;
        dinner?: number;
      };
      [key: string]: number | undefined | unknown;
    };
    time_tower: {
      activation_time?: number;
      charges?: number;
      last_charge_time?: number;
      level?: number;
    };
    shop?: {
      chocolate_spent?: number;
      year?: number;
      rabbits?: string[];
      rabbits_purchased?: string[];
    };
    employees?: {
      rabbit_bro?: number;
      rabbit_cousin?: number;
      rabbit_dog?: number;
      rabbit_father?: number;
      rabbit_grandma?: number;
      rabbit_sis?: number;
      rabbit_uncle?: number;
      [key: string]: number | undefined;
    };
    chocolate?: number;
    total_chocolate?: number;
    chocolate_since_prestige?: number;
    last_viewed_chocolate_factory?: number;
    rabbit_barn_capacity_level?: number;
    click_upgrades?: number;
    chocolate_level?: number;
    rabbit_sort?: string;
    chocolate_multiplier_upgrades?: number;
    rabbit_rarity_upgrades?: number;
    [key: string]: number | string | unknown | undefined;
  };
};

export type SkyBlockProfileMemberDungeonTypeStats = {
  total?: number;
  best?: number;
  /** typically the tier (e.g. 1, 3, 5) as a string */
  [key: string]: number | undefined;
};

export type SkyBlockProfileMemberDungeonBestRuns = {
  /** typically a number (e.g. 1, 3, 5) as a string */
  [key: string]: {
    timestamp: number;
    score_exploration: number;
    score_speed: number;
    score_skill: number;
    score_bonus: number;
    dungeon_class: string;
    teammates: string[];
    elapsed_time: number;
    damage_dealt: number;
    deaths: number;
    mobs_killed: number;
    secrets_found: number;
    damage_mitigated: number;
    ally_healing?: number;
  };
};

export type SkyBlockProfileMemberDungeons = {
  dungeon_types?: {
    catacombs?: {
      tier_completions?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_tank?: SkyBlockProfileMemberDungeonTypeStats;
      fastest_time_s?: SkyBlockProfileMemberDungeonTypeStats;
      watcher_kills?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_mage?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_healer?: SkyBlockProfileMemberDungeonTypeStats;
      most_healing?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_archer?: SkyBlockProfileMemberDungeonTypeStats;
      most_mobs_killed?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_berserk?: SkyBlockProfileMemberDungeonTypeStats;
      fastest_time?: SkyBlockProfileMemberDungeonTypeStats;
      fastest_time_s_plus?: SkyBlockProfileMemberDungeonTypeStats;
      best_score?: SkyBlockProfileMemberDungeonTypeStats;
      mobs_killed?: SkyBlockProfileMemberDungeonTypeStats;
      times_played?: SkyBlockProfileMemberDungeonTypeStats;
      milestone_completions?: SkyBlockProfileMemberDungeonTypeStats;
      experience?: number;
      best_runs?: SkyBlockProfileMemberDungeonBestRuns;
      highest_tier_completed?: number;
    };
    master_catacombs?: {
      tier_completions?: SkyBlockProfileMemberDungeonTypeStats;
      milestone_completions?: SkyBlockProfileMemberDungeonTypeStats;
      best_score?: SkyBlockProfileMemberDungeonTypeStats;
      fastest_time?: SkyBlockProfileMemberDungeonTypeStats;
      highest_tier_completed?: number;
      fastest_time_s?: SkyBlockProfileMemberDungeonTypeStats;
      best_runs?: SkyBlockProfileMemberDungeonBestRuns;
      mobs_killed?: SkyBlockProfileMemberDungeonTypeStats;
      most_mobs_killed?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_healer?: SkyBlockProfileMemberDungeonTypeStats;
      most_healing?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_archer?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_mage?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_berserk?: SkyBlockProfileMemberDungeonTypeStats;
      fastest_time_s_plus?: SkyBlockProfileMemberDungeonTypeStats;
      most_damage_tank?: SkyBlockProfileMemberDungeonTypeStats;
    };
  };
  player_classes: {
    healer: {
      experience?: number;
    };
    mage: {
      experience?: number;
    };
    berserk: {
      experience?: number;
    };
    archer: {
      experience?: number;
    };
    tank: {
      experience?: number;
    };
  };
  dungeon_journal: {
    unlocked_journals?: string[];
  };
  dungeons_blah_blah?: string[];
  selected_dungeon_class?: string;
  daily_runs?: {
    current_day_stamp: number;
    completed_runs_count: number;
  };
  treasures?: {
    runs?: {
      run_id: string;
      completion_ts: number;
      dungeon_type: string;
      dungeon_tier: number;
      participants: {
        player_uuid: string;
        display_name: string;
        class_milestone: number;
      }[];
    }[];
    chests?: {
      run_id: string;
      chest_id: string;
      treasure_type: string;
      rewards: {
        rewards: string[];
        rolled_rng_meter_randomly: boolean;
      };
      quality: number;
      shiny_eligible: boolean;
      paid: boolean;
      rerolls: number;
    }[];
  };
  dungeon_hub_race_settings?: {
    selected_race?: string;
    runback?: boolean;
    selected_setting?: string;
  };
  last_dungeon_run?: string;
  secrets?: number;
  [key: string]: string | number | unknown;
};

export type SkyBlockProfileMemberPlayerStats = {
  pets: {
    milestone?: {
      sea_creatures_killed?: number;
      ores_mined?: number;
      [key: string]: number | unknown;
    };
    total_exp_gained?: number;
    [key: string]: number | unknown;
  };
  mythos?: {
    [key in
      | "burrows_chains_complete"
      | "burrows_dug_combat"
      | "burrows_dug_next"
      | "burrows_dug_treasure"]:
      | {
          total: number;
          RARE?: number;
          none?: number;
          COMMON?: number;
          UNCOMMON?: number;
          LEGENDARY?: number;
          null?: number;
        }
      | undefined;
  } & {
    kills?: number;
    [key: string]: number | unknown;
  };
  end_island?: {
    dragon_fight: {
      [key in
        | "amount_summoned"
        | "summoning_eyes_contributed"
        | "most_damage"
        | "fastest_kill"
        | "highest_rank"]:
        | {
            total?: number;
            best?: number;
            young?: number;
            unstable?: number;
            wise?: number;
            strong?: number;
            old?: number;
            protector?: number;
            superior?: number;
          }
        | undefined;
    } & {
      ender_crystals_destroyed?: number;
      [key: string]: number | unknown;
    };
    special_zealot_loot_collected?: number;
    summoning_eyes_collected?: number;
    [key: string]: number | unknown;
  };
  candy_collected?: {
    total?: number;
    green_candy?: number;
    purple_candy?: number;
    [key: `spooky_festival_${number}`]: {
      total?: number;
      green_candy?: number;
      purple_candy?: number;
    };
    [key: `unanticipated_spooky_festival_${number}`]: {
      total?: number;
      green_candy?: number;
      purple_candy?: number;
    };
  };
  gifts?: {
    total_given?: number;
    total_received?: number;
  };
  deaths?: {
    total: number;
    void?: number;
    fall?: number;
    /** the type of death, e.g. to a mob could be "island_zombie", console log these to find the one you need */
    [key: string]: number | undefined;
  };
  highest_critical_damage?: number;
  highest_damage?: number;
  kills?: {
    total: number;
    /** the mob type killed, e.g. could be "island_zombie", console log these to find the one you need */
    [key: string]: number | undefined;
  };
  sea_creature_kills?: number;
  items_fished?: {
    total?: number;
    normal?: number;
    treasure?: number;
    large_treasure?: number;
    trophy_fish?: number;
  };
  auctions?: {
    bids?: number;
    highest_bid?: number;
    won?: number;
    total_bought?: {
      total?: number;
      RARE?: number;
      LEGENDARY?: number;
      EPIC?: number;
      COMMON?: number;
      UNCOMMON?: number;
      SPECIAL?: number;
      MYTHIC?: number;
    };
    gold_spent?: number;
    created?: number;
    fees?: number;
    completed?: number;
    gold_earned?: number;
    total_sold?: {
      total?: number;
      EPIC?: number;
      LEGENDARY?: number;
      SPECIAL?: number;
      UNCOMMON?: number;
      COMMON?: number;
      RARE: number;
      MYTHIC?: number;
    };
    no_bids?: number;
  };
  spooky?: {
    bats_spawned: {
      total?: number;
      /** the key here is the Spooky festival iteration */
      [key: `${number}`]: number | undefined;
    };
  };
  races?: {
    [key: string]:
      | {
          [key: string]: number | undefined;
        }
      | number
      | undefined;
  };
  glowing_mushrooms_broken?: number;
  winter?: {
    most_snowballs_hit?: number;
    most_damage_dealt?: number;
    most_magma_damage_dealt?: number;
  };
  shredder_rod?: {
    bait?: number;
    fished?: number;
  };
  rift?: {
    visits: number;
    [key: string]:
      | {
          [key: string]: number | undefined;
        }
      | number
      | undefined;
  };
  shard_combat_hunts?: number;
  unique_shards?: number;
  shard_fishing_hunts?: number;
  shard_forest_hunts?: number;
  shard_trap_hunts?: number;
};

export type SkyBlockProfileMemberObjectives = {
  /** each key is the specific objective completed, such as "explore_hub" */
  [key: string]:
    | {
        status: string;
        progress: number;
        completed_at: number;
        /**
         * additional values could be additional requirements, for example,. "collect_lapis" would have "INK_SACK:4": boolean.
         */
        [key: string]: number | string | boolean | unknown;
      }
    | string[]
    | undefined;
  tutorial: string[];
};

export type SkyBlockProfileMemberBestiary = {
  kills: {
    last_killed_mob?: string;
  } & {
    /** each additional key represents a type of mob */
    [key: string]: number;
  };
  deaths?: {
    /** each key represents a type of mob */
    [key: string]: number;
  };
  milestone?: {
    last_claimed_milestone?: number;
  };
  miscellaneous?: {
    max_kills_visible?: boolean;
  };
  migrated_stats?: boolean;
  migration?: boolean;
  [key: string]: unknown;
};

export type SkyBlockProfileMemberNetherIslandPlayerData = {
  kuudra_completed_tiers: {
    [key: string]: number;
  };
  abiphone: {
    contact_data: {
      [key: string]: {
        talked_to?: boolean;
        completed_quest?: boolean;
        incoming_calls_count?: number;
        last_call_incoming?: number;
        specific?: number;
      };
    };
    games: {
      tic_tac_toe_draws?: number;
      tic_tac_toe_losses?: number;
    };
    operator_chip: unknown;
    active_contacts?: string[];
    trio_contact_addons?: number;
    selected_sort?: string;
  };
  dojo: {
    [key: string]: number;
  };
  quests?: {
    quest_data?: {
      [key: string]: {
        status: string;
        progress: number;
        completed_at: number;
      };
    } & {
      quest_list?: string[];
    };
    miniboss_data?: {
      [key: string]: boolean;
    };
    quest_rewards?: {
      [key: string]: string | number;
    };
    alchemist_quest?: {
      alchemist_quest_start?: boolean;
      alchemist_quest_progress?: number;
    };
    rulenor?: {
      talked_to?: boolean;
      last_payment?: number;
    };
    chicken_quest?: {
      chicken_quest_start?: boolean;
      chicken_quest_progress?: number;
      chicken_quest_collected?: Array<string>;
    };
    pablo_quest?: {
      pablo_item?: string;
      pablo_active?: boolean;
      pablo_last_give?: number;
    };
    duel_training_quest?: {
      duel_training_phase_mages?: number;
      duel_training_last_complete_mages?: number;
    };
    last_reset?: number;
    paid_bruuh?: boolean;
    chicken_quest_handed_in?: number;
    last_vampire_blood?: number;
    [key: string]:
      | {
          talked_to_npc?: boolean;
          completed_quest?: boolean;
        }
      | string
      | number
      | boolean
      | unknown;
  };
  matriarch?: {
    pearls_collected?: number;
    last_attempt?: number;
    recent_refreshes?: number[];
  };
  kuudra_party_finder?: {
    search_settings?: {
      tier?: string;
    };
    group_builder?: {
      tier?: string;
      note?: string;
      combat_level_required?: number;
    };
  };
  last_minibosses_killed?: string[];
  selected_faction?: string;
  mages_reputation?: number;
  barbarians_reputation?: number;
  [key: string]: unknown;
};

export type SkyBlockProfileMemberExperimentation = {
  pairings: {
    last_claimed?: number;
    last_attempt?: number;
    key: `attempts_${number}` | `claims_${number}` | `best_score_${number}`;
  };
  simon: {
    last_attempt?: number;
    last_claimed?: number;
    [
      key: `attempts_${number}` | `claims_${number}` | `best_score_${number}`
    ]: number;
  };
  numbers: {
    last_attempt?: number;
    bonus_clicks?: number;
    key: `attempts_${number}` | `claims_${number}` | `best_score_${number}`;
  };
  claims_resets?: number;
  claims_resets_timestamp?: number;
  serums_drank?: number;
};

export type SkyBlockProfileMemberMiningCore = {
  nodes: {
    [key: string]: number | boolean;
  };
  received_free_tier?: boolean;
  last_reset?: number;
  experience?: number;
  tokens_spent?: number;
  crystals?: {
    [key in
      | "amber_crystal"
      | "amethyst_crystal"
      | "aquamarine_crystal"
      | "citrine_crystal"
      | "jade_crystal"
      | "jasper_crystal"
      | "onyx_crystal"
      | "opal_crystal"
      | "peridot_crystal"
      | "ruby_crystal"
      | "sapphire_crystal"
      | "topaz_crystal"]: {
      state?: string;
      total_found?: number;
      total_placed?: number;
    } & {
      [key: string]:
        | {
            state?: string;
            total_found?: number;
            total_placed?: number;
          }
        | unknown;
    };
  };
  biomes?: unknown;
  [key: string]: string | number | boolean | unknown;
};

export type SkyBlockProfileMemberQuests = {
  trapper_quest?: {
    last_task_time: number;
    pelt_count?: number;
  };
  [key: string]: unknown;
};

export type SkyBlockProfileMemberTrophyFish = {
  rewards?: number[];
  total_caught?: number;
  last_caught?: string;
  [key: string]: string | number | number[] | undefined;
};

export type SkyBlockProfileMemberSlayer = {
  slayer_bosses: {
    [
      key:
        | string
        | "zombie"
        | "enderman"
        | "spider"
        | "wolf"
        | "vampie"
        | "blaze"
    ]: {
      xp?: number;
      claimed_levels?: {
        [key: `level_${number}`]: boolean;
      };
      [key: `boss_kills_tier_${number}`]: number;
      [key: `boss_attempts_tier_${number}`]: number;
    };
  };
  slayer_quest?: {
    type?: string;
    tier?: number;
    start_timestamp?: number;
    completion_state?: number;
    used_armor?: boolean;
    solo?: boolean;
    combat_xp?: number;
    recent_mob_kills?: {
      xp: number;
      timestamp: number;
    }[];
    last_killed_mob_island?: string;
  };
};

export type SkyBlockProfileMemberRift = {
  village_plaza?: {
    murder?: {
      step_index?: number;
      room_clues?: Array<string>;
    };
    barry_center?: {
      first_talk_to_barry?: boolean;
      convinced?: Array<string>;
      received_reward?: boolean;
    };
    cowboy?: {
      stage?: number;
      hay_eaten?: number;
      rabbit_name?: string;
    };
    barter_bank?: unknown;
    lonely?: {
      seconds_sitting?: number;
    };
    seraphine?: {
      step_index?: number;
    };
    got_scammed?: boolean;
    [key: string]: unknown;
  };
  wither_cage?: {
    killed_eyes?: string[];
    [key: string]: unknown;
  };
  black_lagoon?: {
    talked_to_edwin?: boolean;
    received_science_paper?: boolean;
    delivered_science_paper?: boolean;
    completed_step?: number;
    [key: string]: unknown;
  };
  dead_cats: {
    talked_to_jacquelle?: boolean;
    picked_up_detector?: boolean;
    found_cats?: string[];
    unlocked_pet?: boolean;
    montezuma?: {
      uuid?: unknown;
      uniqueId?: string;
      type?: string;
      exp?: number;
      active?: boolean;
      tier?: string;
      heldItem?: unknown;
      candyUsed?: number;
      skin?: unknown;
      [key: string]: unknown;
    };
    [key: string]: unknown;
  };
  wizard_tower?: {
    wizard_quest_step?: number;
    crumbs_laid_out?: number;
    [key: string]: unknown;
  };
  enigma?: {
    bought_cloak?: boolean;
    found_souls?: string[];
    claimed_bonus_index?: number;
    [key: string]: unknown;
  };
  gallery: {
    elise_step?: number;
    secured_trophies?: {
      type: string;
      timestamp: number;
      visits: number;
    }[];
    sent_trophy_dialogues?: string[];
    [key: string]: unknown;
  };
  west_village?: {
    crazy_kloon?: {
      selected_colors: {
        seven?: string;
        six?: string;
        five?: string;
        eight?: string;
        four?: string;
        one?: string;
        three?: string;
        two?: string;
        [key: string]: unknown;
      };
      talked?: boolean;
      hacked_terminals?: string[];
      quest_complete?: boolean;
      [key: string]: unknown;
    };
    mirrorverse?: {
      visited_rooms?: string[];
      claimed_chest_items?: string[];
      claimed_reward?: boolean;
      [key: string]: unknown;
    };
    kat_house?: {
      bin_collected_silverfish?: number;
      bin_collected_spider?: number;
      bin_collected_mosquito?: number;
      [key: string]: unknown;
    };
    glyphs?: {
      claimed_wand?: boolean;
      current_glyph_delivered?: boolean;
      current_glyph_completed?: boolean;
      current_glyph?: number;
      completed?: boolean;
      claimed_bracelet?: boolean;
      [key: string]: unknown;
    };
  };
  wyld_woods?: {
    sirius_started_q_a?: boolean;
    talked_threebrothers?: string[];
    bughunter_step?: number;
    sirius_q_a_chain_done?: boolean;
    sirius_completed_q_a?: boolean;
    sirius_claimed_doubloon?: boolean;
    [key: string]: unknown;
  };
  castle?: {
    unlocked_pathway_skip?: boolean;
    fairy_step?: number;
    [key: string]: unknown;
  };
  access?: {
    last_free?: number;
    [key: string]: unknown;
  };
  dreadfarm?: {
    caducous_feeder_uses?: number[];
    shania_stage?: number;
    [key: string]: unknown;
  };
  slayer_quest?: {
    type: string;
    tier: number;
    start_timestamp: number;
    completion_state: number;
    used_armor: boolean;
    solo: boolean;
    combat_xp: number;
    last_killed_mob_island: string;
    recent_mob_kills: {
      xp: number;
      timestamp: number;
    }[];
    [key: string]: unknown;
  };
  lifetime_purchased_boundaries?: string[];
  inventory?: {
    inv_contents?: MinecraftInventoryData;
    inv_armor?: MinecraftInventoryData;
    ender_chest_contents?: MinecraftInventoryData;
    ender_chest_page_icons?: unknown[];
    equipment_contents?: MinecraftInventoryData;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type SkyBlockProfileMemberSkillTrees = {
  nodes?: {
    mining?: {
      core_of_the_mountain?: number;
      toggle_core_of_the_mountain?: boolean;
      mining_madness?: number;
      toggle_mining_madness?: boolean;
      mining_speed?: number;
      toggle_mining_speed?: boolean;
      mining_fortune?: number;
      pickobulus?: number;
      quick_forge?: number;
      titanium_insanium?: number;
      toggle_mining_fortune?: boolean;
      toggle_pickobulus?: boolean;
      toggle_quick_forge?: boolean;
      toggle_titanium_insanium?: boolean;
      blockhead?: number;
      efficient_miner?: number;
      fortunate_mineman?: number;
      gem_lover?: number;
      gifts_from_the_departed?: number;
      great_explorer?: number;
      keep_it_cool?: number;
      maniac_miner?: number;
      metal_head?: number;
      mining_master?: number;
      mole?: number;
      no_stone_unturned?: number;
      old_school?: number;
      powder_buff?: number;
      professional?: number;
      rags_to_riches?: number;
      sky_mall?: number;
      speedy_mineman?: number;
      steady_hand?: number;
      strong_arm?: number;
      surveyor?: number;
      toggle_blockhead?: boolean;
      toggle_efficient_miner?: boolean;
      toggle_fortunate_mineman?: boolean;
      toggle_gem_lover?: boolean;
      toggle_gifts_from_the_departed?: boolean;
      toggle_great_explorer?: boolean;
      toggle_keep_it_cool?: boolean;
      toggle_maniac_miner?: boolean;
      toggle_metal_head?: boolean;
      toggle_mining_master?: boolean;
      toggle_mole?: boolean;
      toggle_no_stone_unturned?: boolean;
      toggle_old_school?: boolean;
      toggle_powder_buff?: boolean;
      toggle_professional?: boolean;
      toggle_rags_to_riches?: boolean;
      toggle_sky_mall?: boolean;
      toggle_speedy_mineman?: boolean;
      toggle_steady_hand?: boolean;
      toggle_strong_arm?: boolean;
      toggle_surveyor?: boolean;
      toggle_warm_heart?: boolean;
      warm_heart?: number;
      eager_adventurer?: number;
      toggle_eager_adventurer?: boolean;
      subzero_mining?: number;
      toggle_subzero_mining?: boolean;
      daily_powder?: number;
      seasoned_mineman?: number;
      toggle_daily_powder?: boolean;
      toggle_seasoned_mineman?: boolean;
      crystalline?: number;
      daily_grind?: number;
      toggle_crystalline?: boolean;
      toggle_daily_grind?: boolean;
      subterranean_fisher?: number;
      toggle_subterranean_fisher?: boolean;
      miners_blessing?: number;
      toggle_miners_blessing?: boolean;
      vanguard_seeker?: number;
      toggle_vanguard_seeker?: boolean;
      dead_mans_chest?: number;
      toggle_dead_mans_chest?: boolean;
      goblin_killer?: number;
      toggle_goblin_killer?: boolean;
      toggle_pickaxe_toss?: boolean;
      lonesome_miner?: number;
      toggle_lonesome_miner?: boolean;
      anomalous_desire?: number;
      toggle_anomalous_desire?: boolean;
      excavator?: number;
      toggle_excavator?: boolean;
      orbiter?: number;
      toggle_orbiter?: boolean;
      frozen_solid?: number;
      toggle_frozen_solid?: boolean;
      vein_seeker?: number;
      toggle_vein_seeker?: boolean;
      keen_eye?: number;
      toggle_keen_eye?: boolean;
    } & {
      [key: string]: number | boolean;
    };
    foraging?: {
      center_of_the_forest?: number;
      toggle_center_of_the_forest?: boolean;
      sweep?: number;
      toggle_sweep?: boolean;
      foraging_fortune?: number;
      toggle_foraging_fortune?: boolean;
      daily_wishes?: number;
      toggle_daily_wishes?: boolean;
      efficient_forager?: number;
      toggle_efficient_forager?: boolean;
      collector?: number;
      toggle_collector?: boolean;
      deep_waters?: number;
      toggle_deep_waters?: boolean;
      foraging_madness?: number;
      toggle_foraging_madness?: boolean;
      monster_hunter?: number;
      toggle_monster_hunter?: boolean;
      early_bird?: number;
      toggle_early_bird?: boolean;
      tree_whisperer?: number;
      toggle_tree_whisperer?: boolean;
      lottery?: number;
      toggle_lottery?: boolean;
      galateas_might?: number;
      toggle_galateas_might?: boolean;
      hunters_luck?: number;
      toggle_hunters_luck?: boolean;
      forest_strength?: number;
      toggle_forest_strength?: boolean;
      essence_fortune?: number;
      toggle_essence_fortune?: boolean;
      forest_speed?: number;
      toggle_forest_speed?: boolean;
      half_empty?: number;
      toggle_half_empty?: boolean;
      toggle_half_full?: boolean;
      luck_of_the_forest?: number;
      toggle_luck_of_the_forest?: boolean;
      "250_gifts"?: number;
      toggle_250_gifts?: boolean;
      strength_boost?: number;
      toggle_strength_boost?: boolean;
      maniac_slicer?: number;
      toggle_maniac_slicer?: boolean;
    } & {
      [key: string]: number | boolean;
    };
  };
  selected_ability?: {
    mining?: string;
    foraging?: string;
    [key: string]: string | undefined;
  };
  tokens_spent?: {
    mountain?: number;
    forest?: number;
    [key: string]: number | undefined;
  };
  experience?: {
    mining?: number;
    foraging?: number;
    [key: string]: number | undefined;
  };
  last_reset?: {
    mining?: number;
    foraging?: number;
    [key: string]: number | undefined;
  };
  refund_ability_free?: boolean;
};

export type SkyBlockProfileMemberForaging = {
  hina?: {
    tasks?: {
      task_progress?: {
        FIG_GIFTS?: number;
        MANGROVE_GIFTS?: number;
        SHARD_FROM_HUNTRAP?: number;
        REACH_SWEEP?: number;
        CATCH_AZURE_5?: number;
        CATCH_VERDANT_5?: number;
        KILL_CHILLSHOTS_10?: number;
        CATCH_INVISIBUG_1?: number;
        COLLECT_50_BERRIES?: number;
        AGATHA_CONTEST_POINTS?: number;
        CATCH_MOSSYBIT_5?: number;
        OBTAIN_SHARD_WITH_LUSHLILAC_BONBON?: number;
        COLLECT_50_SEA_LUMIES?: number;
        CATCH_COD_5?: number;
        CATCH_SALMON_5?: number;
        CATCH_HIDEONLEAF_5?: number;
        CATCH_CORALOT_5?: number;
        CATCH_DREADWING_3?: number;
        CATCH_MUDWORM_1?: number;
        KILL_25_DROWNED?: number;
        CATCH_STRIDER_SURFER_10?: number;
        FUSE_5_ELEMENTAL_SHARDS?: number;
        CATCH_JOYDIVE_10?: number;
        CATCH_LUMISQUID_10?: number;
        CATCH_SHELLWISE_10?: number;
        CATCH_SPIKE_10?: number;
        [key: string]: number | undefined;
      };
      completed_tasks?: string[];
      claimed_rewards?: string[];
      tier_claimed?: number;
    };
  };
  tree_gifts?: {
    FIG?: number;
    MANGROVE?: number;
    [key: string]: number | undefined;
  } & {
    milestone_tier_claimed?: {
      FIG?: number;
      MANGROVE?: number;
      [key: string]: number | undefined;
    };
  };
  songs?: {
    harp?: {
      song_joy_world_completions?: number;
      song_jeopardy_best_completion?: number;
      song_joy_world_perfect_completions?: number;
      song_pure_imagination_completions?: number;
      song_fire_and_flames_perfect_completions?: number;
      song_happy_birthday_perfect_completions?: number;
      song_minuet_completions?: number;
      selected_song_epoch?: number;
      song_fire_and_flames_completions?: number;
      song_amazing_grace_completions?: number;
      song_greensleeves_perfect_completions?: number;
      song_greensleeves_completions?: number;
      song_vie_en_rose_perfect_completions?: number;
      song_jeopardy_perfect_completions?: number;
      song_amazing_grace_best_completion?: number;
      claimed_talisman?: boolean;
      song_brahms_best_completion?: number;
      song_minuet_perfect_completions?: number;
      song_happy_birthday_best_completion?: number;
      song_jeopardy_completions?: number;
      song_amazing_grace_perfect_completions?: number;
      song_frere_jacques_perfect_completions?: number;
      song_pure_imagination_best_completion?: number;
      selected_song?: string;
      song_hymn_joy_completions?: number;
      song_frere_jacques_best_completion?: number;
      song_pachelbel_completions?: number;
      song_greensleeves_best_completion?: number;
      song_vie_en_rose_best_completion?: number;
      song_frere_jacques_completions?: number;
      song_brahms_completions?: number;
      song_fire_and_flames_best_completion?: number;
      song_pachelbel_perfect_completions?: number;
      song_vie_en_rose_completions?: number;
      song_pure_imagination_perfect_completions?: number;
      song_minuet_best_completion?: number;
      song_pachelbel_best_completion?: number;
      song_hymn_joy_perfect_completions?: number;
      song_hymn_joy_best_completion?: number;
      song_happy_birthday_completions?: number;
      song_brahms_perfect_completions?: number;
      song_joy_world_best_completion?: number;
      [
        key:
          | `song_${string}_completions`
          | `song_${string}_perfect_completions`
          | `song_${string}_best_completion`
      ]: number | undefined;
    };
  };
  fish_family?: string[];
};

export type SkyBlockProfileMemberForagingCore = {
  daily_trees_cut_day?: number;
  daily_trees_cut?: number;
  daily_gifts?: number;
  daily_log_cut_day?: number;
  daily_log_cut?: unknown[];
  forests_whispers?: number;
  forests_whispers_spent?: number;
  current_daily_effect?: string;
  current_daily_effect_last_changed?: number;
};

export type SkyBlockProfileMemberShards = {
  traps?: {
    active_traps?: {
      trap_item?: string;
      capture_time?: number;
      mode?: string;
      location?: string;
      placed_at?: number;
      shard?: string;
      captured?: boolean;
      uuid?: string;
      hunting_toolkit?: boolean;
      hunting_toolkit_index?: number;
    }[];
  };
  owned?: {
    type?: string;
    amount_owned?: number;
    captured?: number;
  }[];
  shard_sort?: string;
  fused?: number;
  fusion_result_sort?: string;
};

export type SkyBlockProfileMemberAttributes = {
  stacks?: {
    nocturnal_animal?: number;
    moonglade_mastery?: number;
    cheapstake?: number;
    forest_fishing?: number;
    forest_trap?: number;
    skeletal_ruler?: number;
    visitor_bait?: number;
    strong_legs?: number;
    veteran?: number;
    arachno_resistance?: number;
    blazing_resistance?: number;
    dominance?: number;
    double_hook?: number;
    ender_resistance?: number;
    frost_elemental?: number;
    ice_essence?: number;
    life_regeneration?: number;
    light_elemental?: number;
    lightning_elemental?: number;
    mana_regeneration?: number;
    mending?: number;
    snow_elemental?: number;
    speed?: number;
    torrent_elemental?: number;
    undead?: number;
    undead_resistance?: number;
    yummy?: number;
    bone_font?: number;
    breeze?: number;
    echo_of_sharpening?: number;
    eelastic?: number;
    experience?: number;
    hunters_fangs?: number;
    lifeline?: number;
    pure_reptile?: number;
    fancy_visit?: number;
    fig_sharpening?: number;
    fortitude?: number;
    ignition?: number;
    arachno?: number;
    blazing?: number;
    combo?: number;
    deep_technique?: number;
    fishing_experience?: number;
    fishing_speed?: number;
    forest_essence?: number;
    forest_strength?: number;
    hunter?: number;
    infection?: number;
    life_recovery?: number;
    midas_touch?: number;
    moonglade_serendipity?: number;
    storm_elemental?: number;
    trophy_hunter?: number;
    warrior?: number;
    water_elemental?: number;
    wind_elemental?: number;
    bucket_lover?: number;
    fisherman?: number;
    fog_elemental?: number;
    lost_and_found?: number;
    mossy_box?: number;
    rotten_pickaxe?: number;
    unity_is_strength?: number;
    yog_membrane?: number;
    extreme_pressure?: number;
    cookie_eater?: number;
    strong_arms?: number;
    beacon_zealot?: number;
    deep_diving?: number;
    animal_expertise?: number;
    atomized_mithril?: number;
    battle_frog?: number;
    bigger_box?: number;
    catacomb_box?: number;
    crop_bug?: number;
    decent_karma?: number;
    dragon_shortbow_improvement?: number;
    echo_of_boxes?: number;
    ender?: number;
    fig_collector?: number;
    forest_elemental?: number;
    frog_legs?: number;
    gold_bait?: number;
    good_karma?: number;
    great_karma?: number;
    happy_box?: number;
    humanoid_ruler?: number;
    hunters_pressure?: number;
    infiltration?: number;
    insect_power?: number;
    kat_favorite?: number;
    magmatic_ruler?: number;
    mana_steal?: number;
    mangrove_collector?: number;
    mangrove_sharpening?: number;
    mountain_climber?: number;
    nature_elemental?: number;
    owl_friend?: number;
    pest_luck?: number;
    spirit_axe?: number;
    stone_elemental?: number;
    tree_lurker?: number;
    wood_elemental?: number;
    accessory_size?: number;
    atomized_crystals?: number;
    atomized_glacite?: number;
    battle_experience?: number;
    berry_enjoyer?: number;
    berry_mogul?: number;
    blazing_fortune?: number;
    crimson_serendipity?: number;
    crystal_serendipity?: number;
    deadeye?: number;
    dragon_essence?: number;
    dwarven_serendipity?: number;
    earth_elemental?: number;
    echo_of_atomized?: number;
    echo_of_essence?: number;
    echo_of_resistance?: number;
    excellent_karma?: number;
    faker?: number;
    foraging_wisdom?: number;
    fungy_luck?: number;
    hunt_wisdom?: number;
    hunters_grasp?: number;
    hunters_suppress?: number;
    kuudra_box?: number;
    lucky_rod?: number;
    lunar_power?: number;
    matriarch_cubs?: number;
    pretty_clothes?: number;
    quartz_speed?: number;
    rabbit_crew?: number;
    reborn?: number;
    sack_size?: number;
    shell?: number;
    spider_essence?: number;
    undead_essence?: number;
    why_not_more?: number;
    winter_serendipity?: number;
    wither_essence?: number;
    garden_wisdom?: number;
    cavern_wisdom?: number;
    veil?: number;
    magic_find?: number;
    almighty?: number;
    attack_speed?: number;
    book_wisdom?: number;
    charmed?: number;
    cloak_improvement?: number;
    echo_of_echoes?: number;
    echo_of_elemental?: number;
    echo_of_wisdom?: number;
    hunter_karma?: number;
    maximal_torment?: number;
    payback?: number;
    pet_wisdom?: number;
    pity?: number;
    rare_bird?: number;
    shadow_elemental?: number;
    star_bait?: number;
    starborn?: number;
    tuning_box?: number;
    ultimate_dna?: number;
    unlimited_energy?: number;
    unlimited_power?: number;
    wart_eater?: number;
    wings_of_destiny?: number;
    elite?: number;
    catacombs_graduate?: number;
    mythological_resistance?: number;
    big_game_hunter?: number;
    mythological_fortune?: number;
    solar_power?: number;
    echo_of_hunter?: number;
    echo_of_ruler?: number;
    chop?: number;
    bayou_biter?: number;
    king_of_greed?: number;
    [key: string]: number | undefined;
  };
};
