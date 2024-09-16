export type Player = {
  _id?: string;
  uuid?: string;
  firstLogin?: number;
  playername?: string;
  displayname?: string;
  lastLogin?: number;
  achievementPoints?: number;
  achievementRewardsNew?: {
    [key: `for_points_${number}`]: number | undefined;
  };
  achievementSync?: { quake_tiered: number };
  achievementTotem?: {
    canCustomize?: boolean;
    allowed_max_height?: number;
    unlockedParts?: string[];
    selectedParts?: {
      [key: `slot_${number}`]: string | undefined;
    };
    unlockedColors?: string[];
    selectedColors?: {
      [key: `slotcolor_${number}`]: string;
    };
  };
  achievementTracking?: string[];
  achievements?: { [key: string]: number };
  achievementsOneTime?: string[];
  adsense_tokens?: number;
  channel?: string;
  challenges?: {
    all_time?: {
      [key: string]: number | undefined;
    };
    [key: string]: unknown;
  };
  collectibles_menu_sort?: string;
  currentClickEffect?: string;
  currentCloak?: string;
  currentGadget?: string;
  currentPet?: string;
  disabledProjectileTrails?: boolean;
  eugene?: { dailyTwoKExp?: number };
  fortuneBuff?: number;
  giftingMeta?: {
    bundlesReceived?: number;
    realBundlesReceived?: number;
    bundlesGiven?: number;
    giftsGiven?: number;
    realBundlesGiven?: number;
    milestones?: string[];
    [key: string]: unknown;
  };
  housingMeta?: {
    allowedBlocks: string[];
    firstHouseJoinMs?: number;
    packages: string[];
    playerSettings?: {
      TIPS?: string;
      VISIBILITY?: string;
      BORDER?: string;
      customVisibility?: number;
    };
    playlist?: string;
    plotSize?: string;
    selectedChannels_v3?: string[];
    tutorialStep?: string;
    [key: `given_cookies_${number}`]: string[];
    [key: string]: unknown;
  };
  karma?: number;
  lastAdsenseGenerateTime?: number;
  lastClaimedReward?: number;
  lastLogout?: number;
  levelUp_MVP_PLUS?: number;
  levelUp_VIP?: number;
  levelUp_VIP_PLUS?: number;
  leveling?: { claimedRewards: number };
  monthlycrates?: {
    /** keys are in the format of M-YYYY (month is non zero leading, so april 2024 would be 4-2024) */
    [key: `${number}-${number}`]:
      | {
          MVP_PLUS?: boolean;
          MVP?: boolean;
          VIP_PLUS?: boolean;
          VIP?: boolean;
          NORMAL?: boolean;
        }
      | undefined;
  };
  monthlyPackageRank?: string;
  monthlyRankColor?: string;
  mostRecentGameType?: string;
  mostRecentMonthlyPackageRank?: string;
  networkExp?: number;
  network_update_book?: string;
  newPackageRank?: string;
  onetime_achievement_menu_sort?: string;
  outfit?: {
    BOOTS?: string;
    CHESTPLATE?: string;
    LEGGINGS: string;
    HELMET?: string;
  };
  parkourCompletions?: {
    [key: string | "BuildBattle" | "TNT" | "BedWars"]:
      | {
          timeStart: number;
          timeTook: number;
        }[]
      | undefined;
  };
  parkourCheckpointBests?: {
    [
      key:
        | string
        | "BuildBattle"
        | "SkywarsAug2017"
        | "TNT"
        | "BedWars"
        | "Prototype"
        | "SkywarsStandard2022"
        | "BedwarsSpring2023"
    ]:
      | {
          [key: number]: number | undefined;
        }
      | undefined;
  };
  petConsumables: { [key: string]: string };
  petJourneyTimestamp?: number;
  petStatus?: {
    [
      key:
        | string
        | "BLACK_RABBIT"
        | "BLACK_WHITE_RABBIT"
        | "BROWN_HORSE_BABY"
        | "BROWN_RABBIT"
        | "CAT_BLACK"
        | "CAT_RED"
        | "CAT_SIAMESE"
        | "CHICKEN"
        | "COW"
        | "COW_BABY"
        | "DUCK"
        | "GROWING_ZOMBIE"
        | "HORSE_BROWN"
        | "KILLER_RABBIT"
        | "PIG"
        | "PIG_ZOMBIE"
        | "PIG_ZOMBIE_BABY"
        | "SHEEP_BROWN"
        | "SHEEP_CYAN_BABY"
        | "SHEEP_GRAY"
        | "SHEEP_LIGHT_BLUE_BABY"
        | "SHEEP_ORANGE"
        | "SHEEP_PINK"
        | "SHEEP_PURPLE"
        | "SHEEP_SILVER"
        | "SHEEP_WHITE"
        | "SHEEP_YELLOW_BABY"
        | "SILVERFISH"
        | "SLIME_SMALL"
        | "SPIDER"
        | "TOTEM"
        | "VILLAGER_BLACKSMITH_BABY"
        | "VILLAGER_BUTCHER"
        | "VILLAGER_BUTCHER_BABY"
        | "VILLAGER_LIBRARIAN_BABY"
        | "VILLAGER_PRIEST"
        | "WILD_OCELOT"
        | "WILD_OCELOT_BABY"
        | "WOLF"
        | "WOLF_BABY"
        | "ZOMBIE"
        | "ZOMBIE_BABY"
    ]:
      | {
          THIRST?: {
            timestamp: number;
            value: number;
          };
          HUNGER?: {
            timestamp: number;
            value: number;
          };
          EXERCISE?: {
            timestamp: number;
            value: number;
          };
          name?: string;
          experience?: number;
        }
      | undefined;
  };
  quests?: {
    [key: string]:
      | {
          active?: {
            objectives?: {
              [key: string]: number | undefined;
            };
            started?: number;
          };
          completions?: {
            time?: number;
          }[];
        }
      | undefined;
  };
  questSettings?: { autoActivate: boolean };
  rankPlusColor?: string;
  rewardHighScore?: number;
  rewardScore?: number;
  rewardStreak?: number;
  seasonal?: unknown;
  skyblock_free_cookie?: number;
  socialMedia?: {
    links?: {
      DISCORD?: string;
      [key: string]: string | undefined;
    };
    prompt?: boolean;
  };
  spec_first_person?: boolean;
  stats?: PlayerStats;
  totalDailyRewards?: number;
  totalRewards?: number;
  tourney?: {
    first_join_lobby?: number;
    total_tributes?: number;
    [key: string]:
      | {
          first_win?: number;
          games_played?: number;
          playtime?: number;
          seenRPbook?: boolean;
          tributes_earned?: number;
        }
      | number
      | undefined;
  };
  userLanguage?: string;
  vanityFavorites?: string;
  vanityMeta?: { packages: string[] };
  voting?: {
    last_mcsorg?: number;
    last_vote?: number;
    secondary_mcsorg?: number;
    total?: number;
    total_mcsorg?: number;
    votesToday?: number;
    last_mcmp?: number;
    secondary_mcmp?: number;
    total_mcmp?: number;
    last_mcsl?: number;
    secondary_mcsl?: number;
    total_mcsl?: number;
    [key: string]: number | undefined;
  };
  /**
   * There's actually quite a few undocumented types on here. I'm not about to document them, since most are seasonal or hyperspecific.
   */
  [key: string]: unknown;
};

export type PlayerStats = {
  Arcade?: PlayerStatsArcade;
  Arena?: PlayerStatsArena;
  Battleground?: PlayerStatsBattleground;
  Bedwars?: PlayerStatsBedwars;
  BuildBattle?: PlayerStatsBuildBattle;
  Duels?: PlayerStatsDuels;
  GingerBread?: PlayerStatsGingerBread;
  Housing?: PlayerStatsHousing;
  HungerGames?: PlayerStatsHungerGames;
  Legacy?: PlayerStatsLegacy;
  MCGO?: PlayerStatsMCGO;
  MainLobby?: PlayerStatsMainLobby;
  MurderMystery?: PlayerStatsMurderMystery;
  Paintball?: PlayerStatsPaintball;
  Pit?: PlayerStatsPit;
  Quake?: PlayerStatsQuake;
  SkyBlock?: PlayerStatsSkyBlock;
  SkyClash?: PlayerStatsSkyClash;
  SkyWars?: PlayerStatsSkyWars;
  SpeedUHC?: PlayerStatsSpeedUHC;
  SuperSmash?: PlayerStatsSuperSmash;
  TNTGames?: PlayerStatsTNTGames;
  TrueCombat?: PlayerStatsTrueCombat;
  UHC?: PlayerStatsUHC;
  VampireZ?: PlayerStatsVampireZ;
  Walls3?: PlayerStatsWalls3;
  Walls?: PlayerStatsWalls;
  WoolGames?: PlayerStatsWoolGames;
  /** they may add something else at some point */
  [key: string]: unknown;
};

export type PlayerStatsArcade = {
  coins: number;
  hints?: boolean;
  weekly_coins_a?: number;
  weekly_coins_b?: number;
  monthly_coins_a?: number;
  monthly_coins_b?: number;
  option_show_tutorial_book?: string;
  packages?: string[];
  active_movement_trail?: string;
  active_victory_dance?: string;
  [key: `wins_${string}`]: number | undefined;
  dropper?: {
    fails: number;
    fastest_game?: number;
    games_finished?: number;
    games_played: number;
    maps_completed: number;
    map_stats?: {
      [
        key:
          | "bbq"
          | "sewer"
          | "well"
          | "wester"
          | "atlantis"
          | "balloons"
          | "cabin"
          | "city"
          | string
      ]:
        | {
            best_time: number;
          }
        | undefined;
    };
    [key: string]: number | unknown;
  };
  pixel_party?: {
    games_played: number;
    games_played_normal: number;
    highest_round: number;
    power_ups_collected?: number;
    power_ups_collected_normal?: number;
    rounds_completed: number;
    rounds_completed_normal: number;
    wins: number;
    wins_normal: number;
    [key: string]: number | unknown;
  };
};

export type PlayerStatsArena = {
  active_rune?: string;
  coins: number;
  coins_spent?: number;
  [
    key:
      | `damage_${string}`
      | `deaths_${string}`
      | `games_${string}`
      | `heals_${string}`
      | `kills_${string}`
      | `losses_${string}`
      | `win_streaks_${string}`
  ]: number | undefined;
  hat?: string;
  keys?: number;
  lvl_cooldown?: number;
  lvl_damage?: number;
  lvl_energy?: number;
  lvl_health?: number;
  magical_chest?: number;
  offensive?: string;
  packages?: string[];
  rune_level_damage?: number;
  support?: string;
  ultimate?: string;
  utility?: string;
  wins?: number;
  [key: string]: number | string | unknown;
};

export type PlayerStatsBattleground = {
  assists?: number;
  [key: `${string}_plays`]: number | undefined;
  crusader_plays?: number;
  broken_inventory?: number;
  chosen_class?: string;
  coins: number;
  current_weapon?: number;
  damage?: number;
  [key: `damage_${string}`]: number | undefined;
  deaths?: number;
  [key: `flat_${string}`]: number | undefined;
  heal?: number;
  [key: `heal_${string}`]: number | undefined;
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  life_leeched?: number;
  [key: `life_leeched_${string}`]: number | undefined;
  losses?: number;
  [key: `losses_${string}`]: number | undefined;
  [key: `mage_${string}`]: number | string | undefined;
  magic_dust?: number;
  packages?: string[];
  [key: `paladin_${string}`]: number | string | undefined;
  play_streak?: number;
  powerups_collected?: number;
  repaired?: number;
  [key: `repaired_${string}`]: number | undefined;
  reroll?: number;
  reroll_common?: number;
  reward_inventory?: number;
  [key: `salvaged_${string}`]: number | undefined;
  selected_mount?: string;
  [key: `shaman_${string}`]: number | string | undefined;
  total_domination_score?: number;
  void_shards?: number;
  [key: `warrior_${string}`]: number | string | undefined;
  weapon_inventory?: {
    ability: number;
    abilityBoost: number;
    category: string;
    chance: number;
    cooldown: number;
    crafted: boolean;
    damage: number;
    energy: number;
    health: number;
    id: number;
    material: string;
    movement: number;
    multiplier: number;
    playStreak: boolean;
    spec: {
      spec: number;
      playerClass: number;
      [key: string]: unknown;
    };
    upgradeMax: number;
    upgradeTimes: number;
    [key: string]: unknown;
  }[];
  win_streak?: number;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
};

export type PlayerStatsBedwars = {
  Experience?: number;
  _items_purchased_bedwars?: number;
  activeNPCSkin?: string;
  bag_type: string;
  beds_lost_bedwars?: number;
  bedwars_boxes?: number;
  chest_history_new?: string[];
  coins?: number;
  deaths_bedwars?: number;
  entity_attack_deaths_bedwars?: number;
  entity_explosion_deaths_bedwars?: number;
  fall_deaths_bedwars?: number;
  favorite_slots?: string;
  favourites_2?: string;
  final_deaths_bedwars?: number;
  games_played_bedwars?: number;
  items_purchased_bedwars?: number;
  kills_bedwars?: number;
  lastTourneyAd?: number;
  losses_bedwars?: number;
  packages?: string[];
  selected_challenge_type?: string;
  selected_ultimate?: string;
  shop_sort?: string;
  tickets: number;
  tickets_given_doorman: number;
  tickets_requirement_met: boolean;
  total_challenges_completed?: number;
  total_tickets_earned: number;
  wins_bedwars?: number;
  winstreak?: number;
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
  activeProjectileTrail?: string;
  activeSprays?: string;
  activeVictoryDance?: string;
  beds_broken_bedwars?: number;
  bedwars_box?: number;
  bedwars_box_commons?: number;
  bedwars_box_rares?: number;
  bedwars_christmas_boxes?: number;
  bedwars_easter_boxes?: number;
  bedwars_halloween_boxes?: number;
  bedwars_lunar_boxes?: number;
  bw_challenge_woodworker?: number;
  bw_unique_challenges_completed?: number;
  diamond_resources_collected_bedwars?: number;
  emerald_resources_collected_bedwars?: number;
  entity_attack_final_deaths_bedwars?: number;
  entity_attack_final_kills_bedwars?: number;
  entity_attack_kills_bedwars?: number;
  entity_explosion_final_deaths_bedwars?: number;
  entity_explosion_final_kills_bedwars?: number;
  entity_explosion_kills_bedwars?: number;
  fall_final_deaths_bedwars?: number;
  fall_final_kills_bedwars?: number;
  fall_kills_bedwars?: number;
  final_kills_bedwars?: number;
  fire_deaths_bedwars?: number;
  fire_final_kills_bedwars?: number;
  fire_tick_deaths_bedwars?: number;
  first_join_7?: boolean;
  games_played_bedwars_1?: number;
  gold_resources_collected_bedwars?: number;
  iron_resources_collected_bedwars?: number;
  magic_deaths_bedwars?: number;
  magic_final_deaths_bedwars?: number;
  magic_final_kills_bedwars?: number;
  magic_kills_bedwars?: number;
  permanent_items_purchased_bedwars?: number;
  projectile_deaths_bedwars?: number;
  projectile_final_deaths_bedwars?: number;
  projectile_final_kills_bedwars?: number;
  projectile_kills_bedwars?: number;
  resources_collected_bedwars?: number;
  spooky_open_ach?: number;
  spray_glyph_field?: string;
  understands_resource_bank?: boolean;
  understands_streaks?: boolean;
  void_deaths_bedwars?: number;
  void_final_deaths_bedwars?: number;
  void_final_kills_bedwars?: number;
  void_kills_bedwars?: number;
  [key: `free_event_key_bedwars_${string}`]: boolean | undefined;
  [
    key:
      | `castle_${string}`
      | `eight_one_${string}`
      | `eight_two_${string}`
      | `four_four_${string}`
      | `four_three_${string}`
      | `two_four_${string}`
      | `tourney_bedwars4s_${string}`
      | `tourney_bedwars_${string}`
  ]: number | boolean | undefined;
  challenges?: {
    bw_challenge_woodworker_best_time?: number;
  };
  practice?: {
    selected: string;
    bridging?: {
      blocks_placed: number;
      failed_attempts: number;
    };
    fireball_jumping?: {
      failed_attempts: number;
      successful_attempts: number;
    };
    mlg?: {
      successful_attempts: number;
      failed_attempts: number;
      blocks_placed: number;
    };
    [key: string]: unknown;
  };
  slumber?: {
    quest: {
      lastStarted: {
        npc_reception_start: number;
        npc_general_daku: number;
        npc_john_pireso: number;
      };
      started: {
        npc_reception_start: boolean;
        npc_general_daku: boolean;
        npc_john_pireso: boolean;
      };
      npc: {
        talk: {
          DoorManNpc: boolean;
          TicketMachineNpc: boolean;
          HotelReceptionistNpc: boolean;
          FredericFerntonNpc: boolean;
          GeneralDakuNpc: boolean;
          JohnIndigosNpc: boolean;
          HostessKatrinaNpc: boolean;
        };
      };
      lastCompleted: {
        npc_reception_start: number;
      };
      completed: {
        npc_reception_start: boolean;
      };
      objective: {
        receptionist_introduction: boolean;
      };
    };
    fredgie?: {
      should_update_index: boolean;
      dialogue_index: number;
    };
  };
  [key: string]: number | boolean | unknown;
};

export type PlayerStatsBuildBattle = {
  buildbattle_loadout?: string[];
  coins?: number;
  correct_guesses?: number;
  games_played?: number;
  last_purchased_song?: string;
  monthly_coins_a?: number;
  monthly_coins_b?: number;
  music?: boolean;
  new_selected_hat?: string;
  new_suit?: string;
  new_victory_dance?: string;
  packages?: string[];
  score?: number;
  selected_backdrop?: string;
  solo_most_points?: number;
  super_votes?: number;
  teams_most_points?: number;
  [key: `votes_${string}`]: number | undefined;
  total_votes: number;
  weekly_coins_a: number;
  weekly_coins_b?: number;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
};

export type PlayerStatsDuels = {
  active_auras?: string;
  active_cage?: string;
  active_emblem?: string;
  active_goal?: string;
  active_hat?: string;
  active_kill_effect?: string;
  active_killmessages?: string;
  active_victory_dance?: string;
  active_weaponpacks?: string;
  blocks_placed?: number;
  chat_enabled?: string;
  coins?: number;
  current_winstreak?: number;
  custom_titles?: string[];
  damage_dealt?: number;
  deaths?: number;
  duels_chest_history?: string[];
  duels_chests?: number;
  duels_recently_played2?: string;
  duels_recently_played?: string;
  equipped_prefix_color?: string;
  equipped_prefix_icon?: string;
  favoriteGlyph?: string;
  games_played_duels?: number;
  goals?: number;
  health_regenerated?: number;
  kills?: number;
  leaderboardPage_goals?: number;
  leaderboardPage_win_streak?: number;
  leaderboardPage_wins?: number;
  losses?: number;
  maps_won_on?: string[];
  packages?: string[];
  progress_mode?: string;
  rematch_option_1?: string;
  rounds_played?: number;
  selected_1_new?: string;
  selected_2_new?: string;
  shop_sort?: string;
  shop_sort_enable_owned_first?: boolean;
  show_lb_option?: string;
  status_field?: string;
  wins?: number;
  /** alot of options here, too many to document without blowing this file up, log this data to find what you need */
  [key: string]:
    | string
    | number
    | boolean
    | {
        [key: number]: string | undefined;
      }
    | undefined;
};

export type PlayerStatsGingerBread = {
  booster_active?: string;
  box_pickups?: number;
  [key: `box_pickups_${string}`]: number | undefined;
  coins?: number;
  coins_picked_up?: number;
  engine_active?: string;
  frame_active?: string;
  helmet_active?: string;
  horn?: string;
  jacket_active?: string;
  laps_completed?: number;
  lastTourneyAd?: number;
  packages?: string[];
  pants_active?: string;
  parts?: string;
  shoes_active?: string;
  skin_active?: string;
  wins?: number;
  bronze_trophy?: number;
  [key: `bronze_trophy_${string}`]: number | undefined;
  silver_trophy?: number;
  [key: `silver_trophy_${string}`]: number | undefined;
  gold_trophy?: number;
  [key: `gold_trophy_${string}`]: number | undefined;
  [key: `${string}_plays`]: number | undefined;
  [key: string]: string | number | unknown;
};

export type PlayerStatsHousing = {
  packages: string[];
};

export type HungerGamesClasses =
  | "arachnologist"
  | "archer"
  | "armorer"
  | "astronaut"
  | "baker"
  | "blaze"
  | "creepertamer"
  | "diver"
  | "donkeytamer"
  | "florist"
  | "golem"
  | "guardian"
  | "hunter"
  | "knight"
  | "meatmaster"
  | "necromancer"
  | "paladin"
  | "phoenix"
  | "pigman"
  | "ranger"
  | "reddragon"
  | "rogue"
  | "scout"
  | "slimeyslime"
  | "snowman"
  | "speleologist"
  | "toxicologist"
  | "viking"
  | "warrior"
  | string;

export type PlayerStatsHungerGames = {
  ArcherInventory?: {
    [key: number]: number | undefined;
  };
  arrows_fired?: number;
  [key: `arrows_fired_${HungerGamesClasses}`]: number | undefined;
  arrows_hit?: number;
  [key: `arrows_hit_${HungerGamesClasses}`]: number | undefined;
  autoarmor?: boolean;
  chests_opened?: number;
  [key: `chests_opened_${HungerGamesClasses}`]: number | undefined;
  coins: number;
  damage?: number;
  [key: `damage_${HungerGamesClasses}`]: number | undefined;
  damage_taken?: number;
  [key: `damage_taken_${HungerGamesClasses}`]: number | undefined;
  deaths?: number;
  defaultkit?: string;
  [key: `exp_${HungerGamesClasses}`]: number | undefined;
  farmer?: number;
  florist?: number;
  games_played?: number;
  [key: `games_played_${HungerGamesClasses}`]: number | undefined;
  kills?: number;
  [key: `kills_${HungerGamesClasses}`]: number | undefined;
  lastTourneyAd?: number;
  mobs_spawned?: number;
  [key: `mobs_spawned_${HungerGamesClasses}`]: number | undefined;
  packages?: string[];
  paladin?: number;
  potions_drunk?: number;
  [key: `potions_drunk_${HungerGamesClasses}`]: number | undefined;
  tim?: number;
  time_played?: number;
  [key: `time_played_${HungerGamesClasses}`]: number | undefined;
  [key: `tnt_placed_${HungerGamesClasses}`]: number | undefined;
  warlock?: number;
  wins?: number;
  wins_backup?: number;
  wins_solo_normal?: number;
  wins_teams?: number;
  wins_teams_normal?: number;
  [key: `wins_teams_${HungerGamesClasses}`]: number | undefined;
  [key: string]: string | number | unknown;
};

export type PlayerStatsLegacy = {
  tokens?: number;
  total_tokens?: number;
  vampirez_tokens?: number;
  next_tokens_seconds?: number;
  walls_tokens?: number;
  gingerbread_tokens?: number;
  paintball_tokens?: number;
  quakecraft_tokens?: number;
  packages?: string[];
  arena_tokens?: number;
  preferredChannel?: string;
  leaderboardSettings?: {
    resetType: string;
  };
  [key: string]: number | string | unknown;
};

export type PlayerStatsMCGO = {
  coins: number;
  pocket_change?: number;
  assists?: number;
  [key: `assists_${string}`]: number | undefined;
  bombs_defused?: number;
  [key: `bombs_defused_${string}`]: number | undefined;
  bombs_planted?: number;
  [key: `bombs_planted_${string}`]: number | undefined;
  bounty_hunter?: number;
  cop_kills?: number;
  [key: `cop_kills_${string}`]: number | undefined;
  criminal_kills?: number;
  [key: `criminal_kills_${string}`]: number | undefined;
  deaths?: number;
  [key: `deaths_${string}`]: number | undefined;
  game_plays?: number;
  [key: `game_plays_${string}`]: number | undefined;
  game_wins?: number;
  [key: `game_wins_${string}`]: number | undefined;
  packages?: string[];
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  headshot_kills?: number;
  [key: `headshot_kills_${string}`]: number | undefined;
  round_wins?: number;
  [key: `round_wins_${string}`]: number | undefined;
  shots_fired?: number;
  [key: `shots_fired_${string}`]: number | undefined;
  body_armor_cost?: number;
  lastTourneyAd?: number;
  strength_training?: number;
  shoutTotal?: number;
  selectedAutoShotgunDev?: string;
  selectedBullpupDev?: string;
  selectedCarbineDev?: string;
  selectedCreeperHelmetDev?: string;
  selectedHandgunDev?: string;
  selectedKnifeDev?: string;
  selectedOcelotHelmetDev?: string;
  selectedPistolDev?: string;
  selectedRifleDev?: string;
  selectedScopedRifleDev?: string;
  selectedShotgunDev?: string;
  selectedSmgDev?: string;
  [
    key:
      | `${string}_cost_reduction`
      | `${string}_damage_increase`
      | `${string}_recoil_reduction`
      | `${string}_reload_speed_reduction`
  ]: number | undefined;
  knife_attack_delay?: number;
  knife_damage_increase?: number;
  [key: `${string}Headshots`]: number | undefined;
  [key: `${string}Kills`]: number | undefined;
};

export type PlayerStatsMainLobby = {
  discoveredZones?: {
    [key: string]: boolean | unknown;
  };
  fishing?: {
    special_fish?: {
      [key: string]: boolean | unknown;
    };
    stats?: {
      permanent?: {
        [key: string]: {
          [key: string]:
            | number
            | {
                [key: string]:
                  | number
                  | {
                      [key: string]: number | undefined;
                    }
                  | undefined;
              }
            | undefined;
        };
      };
    };
    enchants?: {
      [key: "mythical_hook" | "dumpster_diver" | "luck" | "lure" | string]: {
        level: number;
      };
    };
  };
  fishing_reward_tracked?: string;
  historicalRecords?: {
    [key: string]: boolean | unknown;
  };
  packages?: string[];
  questNPCTutorials?: {
    [key: string]: boolean | unknown;
  };
  relics?: {
    [key: string]: boolean | unknown;
  };
};

export type PlayerStatsMurderMystery = {
  MurderMystery_openedChests?: number;
  MurderMystery_openedCommons?: number;
  MurderMystery_openedEpics?: number;
  MurderMystery_openedLegendaries?: number;
  MurderMystery_openedRares?: number;
  active_animated_hat?: string;
  active_deathcry?: string;
  active_gesture?: string;
  active_kill_note?: string;
  active_knife_skin?: string;
  active_projectile_trail?: string;
  active_victory_dance?: string;
  alpha_chance?: number;
  bow_kills?: number;
  [key: `bow_kills_${string}`]: number | undefined;
  chest_history_new?: string[];
  coins: number;
  coins_pickedup: number;
  [key: `coins_pickedup_${string}`]: number | undefined;
  deaths?: number;
  deaths_MURDER_ASSASSINS?: number;
  deaths_MURDER_CLASSIC?: number;
  deaths_MURDER_DOUBLE_UP?: number;
  deaths_MURDER_INFECTION?: number;
  deaths_MURDER_SHOWDOWN?: number;
  [key: `deaths_${string}`]: number | undefined;
  detective_chance: number;
  detective_wins: number;
  [key: `detective_wins_${string}`]: number | undefined;
  games?: number;
  games_MURDER_ASSASSINS?: number;
  games_MURDER_CLASSIC?: number;
  games_MURDER_DOUBLE_UP?: number;
  games_MURDER_INFECTION?: number;
  games_MURDER_SHOWDOWN?: number;
  [key: `games_${string}`]: number | undefined;
  granted_chests?: number;
  kills?: number;
  kills_MURDER_ASSASSINS: number;
  kills_MURDER_CLASSIC?: number;
  kills_MURDER_DOUBLE_UP?: number;
  kills_MURDER_INFECTION?: number;
  kills_MURDER_SHOWDOWN?: number;
  [key: `kills_${string}`]: number | undefined;
  kills_as_infected?: number;
  [key: `kills_as_infected_${string}`]: number | undefined;
  kills_as_murderer?: number;
  [key: `kills_as_murderer_${string}`]: number | undefined;
  kills_as_survivor?: number;
  [key: `kills_as_survivor_${string}`]: number | undefined;
  knife_kills: number;
  [key: `knife_kills_${string}`]: number | undefined;
  last_one_alive?: number;
  [key: `last_one_alive_${string}`]: number | undefined;
  longest_time_as_survivor_seconds?: number;
  [key: `longest_time_as_survivor_seconds_${string}`]: number | undefined;
  mm_chests?: number;
  mm_christmas_chests?: number;
  mm_easter_chests?: number;
  mm_halloween_chests?: number;
  mm_lunar_chests?: number;
  murderer_chance: number;
  murderer_wins?: number;
  [key: `murderer_wins_${string}`]: number | undefined;
  murdermystery_books: string[];
  packages: string[];
  [key: `quickest_detective_win_time_seconds_${string}`]: number | undefined;
  [key: `quickest_murderer_win_time_seconds_${string}`]: number | undefined;
  [key: `quickest_showdown_win_time_seconds_${string}`]: number | undefined;
  showqueuebook: boolean;
  spooky_open_ach?: number;
  survivor_wins?: number;
  [key: `survivor_wins_${string}`]: number | undefined;
  thrown_knife_kills?: number;
  [key: `thrown_knife_kills_${string}`]: number | undefined;
  total_time_survived_seconds?: number;
  [key: `total_time_survived_${string}`]: number | undefined;
  trap_kills?: number;
  [key: `trap_kills_${string}`]: number | undefined;
  was_hero?: number;
  [key: `was_hero_${string}`]: number | undefined;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
  [key: string]: string | number | boolean | unknown;
};

export type PlayerStatsPaintball = {
  adrenaline?: number;
  coins?: number;
  deaths?: number;
  endurance?: number;
  favorite_slots?: string;
  forcefieldTime?: number;
  fortune?: number;
  godfather?: number;
  hat?: string;
  headstart?: number;
  kills?: number;
  killstreaks?: number;
  packages?: string[];
  selectedKillPrefix?: string;
  shots_fired?: number;
  showKillPrefix?: boolean;
  superluck?: number;
  transfusion?: number;
  wins?: number;
  [key: string]: string | number | boolean | unknown;
};

export type PlayerStatsPit = {
  pit_stats_ptl: {
    assists?: number;
    arrow_hits?: number;
    arrows_fired?: number;
    blocks_broken?: number;
    blocks_placed?: number;
    bounties_of_500g_with_bh?: number;
    bow_damage_dealt: number;
    bow_damage_received: number;
    cash_earned?: number;
    chat_messages?: number;
    contracts_completed?: number;
    contracts_started?: number;
    damage_dealt?: number;
    damage_received?: number;
    deaths?: number;
    diamond_items_purchased?: number;
    enchanted_tier1?: number;
    enchanted_tier2?: number;
    enchanted_tier3?: number;
    enderchest_opened?: number;
    endless_quiver_arrows?: number;
    extra_from_trickle_down?: number;
    fished_anything?: number;
    fishes_fished?: number;
    fishing_rod_launched?: number;
    gapple_eaten?: number;
    ghead_eaten?: number;
    ingots_cash?: number;
    ingots_picked_up?: number;
    joins?: number;
    jumped_into_pit?: number;
    kills?: number;
    king_quest_completion?: number;
    launched_by_angel_spawn?: number;
    launched_by_demon_spawn?: number;
    launched_by_launchers: number;
    lava_bucket_emptied?: number;
    left_clicks?: number;
    lucky_diamond_pieces?: number;
    max_streak?: number;
    melee_damage_dealt?: number;
    melee_damage_received?: number;
    night_quests_completed?: number;
    obsidian_broken?: number;
    playtime_minutes?: number;
    rage_pants_crafted?: number;
    rage_potatoes_eaten?: number;
    rambo_kills?: number;
    sewer_treasures_found?: number;
    soups_drank?: number;
    sword_hits: number;
    vampire_healed_hp?: number;
    wheat_farmed?: number;
    [key: string]: number | undefined;
  };
  profile: {
    autobuy_items?: unknown[];
    bounties: unknown[];
    cash: number;
    [key: `cash_during_prestige_${number}`]: number | undefined;
    cheap_milk?: boolean;
    contract_choices: unknown;
    death_recaps?: {
      type: number;
      data: number[];
    };
    drop_confirm_disabled?: boolean;
    ended_contracts?: {
      difficulty?: string;
      gold_reward?: number;
      requirements?: {
        ingots?: number;
        multikill?: number;
        kills?: number;
        shots?: number;
      };
      progress?: {
        ingots?: number;
        kills?: number;
        shots?: number;
      };
      chunk_of_viles_reward?: number;
      completion_date?: number;
      remaining_ticks?: number;
      key?: string;
    }[];
    genesis_allegiance?: string;
    genesis_allegiance_time?: number;
    genesis_perma_angel?: number;
    genesis_perma_demon?: number;
    genesis_points?: number;
    genesis_spawn_in_base?: boolean;
    genesis_weekly_perks_claim_item_angel?: number;
    genesis_weekly_perks_claim_item_demon?: number;
    genesis_weekly_perks_perma_gold?: number;
    genesis_weekly_perks_perma_xp?: number;
    gold_transactions?: Array<{ amount: number; timestamp: number }>;
    hat_color?: number;
    hotbar_favorites: number[];
    inv_armor: { type: number; data: number[] };
    inv_contents: { type: number; data: number[] };
    inv_enderchest: { type: number; data: number[] };
    item_stash?: { type: number; data: number[] };
    items_last_buy?: {
      obsidian?: number;
      combat_spade?: number;
      diamond_chestplate?: number;
      diamond_boots?: number;
      diamond_sword?: number;
      iron_pack?: number;
    };
    king_quest: {
      kills?: number;
      renown?: number;
      last_completed?: number;
      last_accepted?: number;
      last_contract: number;
      last_midfight_disconnect?: number;
      last_passive_xp?: number;
      last_save?: number;
      leaderboard_stats: {
        [key: `Pit_${string}`]: number | undefined;
      };
      login_messages: unknown[];
      [key: `moved_achievements_${number}`]: boolean | undefined;
      night_quests_enabled?: boolean;
      outgoing_offers: unknown[];
      prestiges?: {
        index: number;
        xp_on_prestige: number;
        timestamp: number;
      }[];
      [key: `selected_killstreak_${number}`]: string | unknown;
      selected_leaderboard?: string;
      [key: `selected_perk_${number}`]: string | undefined;
      spire_stash_armor: { type: number; data: number[] };
      spire_stash_inv: { type: number; data: number[] };
      trade_timestamps?: unknown[];
      xp?: number;
      zero_point_three_gold_transfer?: boolean;
      [key: string]: unknown;
    } & {
      [key in "unlocks" | `unlocks_${number}` | "renown_unlocks"]:
        | {
            tier: number;
            acquireDate: number;
            key: string;
          }[]
        | undefined;
    };
  };
  stats_move_1?: number;
  [key: string]: unknown;
};

export type PlayerStatsQuake = {
  alternative_gun_cooldown_indicator?: boolean;
  armor?: string;
  barrel?: string;
  beam?: string;
  boots?: string;
  case?: string;
  coins: number;
  compass_selected?: boolean;
  dash_cooldown?: string;
  deaths?: number;
  deaths_teams?: number;
  distance_travelled?: number;
  distance_travelled_teams?: number;
  enable_sound?: boolean;
  hat?: string;
  headshots?: number;
  headshots_teams?: number;
  highest_killstreak?: number;
  instantRespawn?: boolean;
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  killsound?: string;
  killstreaks?: number;
  killstreaks_teams?: number;
  lastTourneyAd?: number;
  leggings?: string;
  [key: `message${string}`]: boolean | undefined;
  muzzle?: string;
  packages?: string[];
  shots_fired?: number;
  shots_fired_teams?: number;
  showDashCooldown?: boolean;
  showKillPrefix?: boolean;
  sight?: string;
  trigger?: string;
  wins?: number;
  wins_teams?: number;
  [key: string]: unknown;
};

export type PlayerStatsSkyBlock = {
  profiles?: {
    [key: string]:
      | {
          profile_id: string;
          cute_name: string;
        }
      | undefined;
  };
};

export type PlayerStatsSkyClash = {
  coins?: number;
};

export type PlayerStatsSkyWars = {
  SkyWars_openedChests?: number;
  SkyWars_openedCommons?: number;
  SkyWars_openedEpics?: number;
  SkyWars_openedLegendaries?: number;
  SkyWars_openedRares?: number;
  [key: `SkyWars_skywars_rating_${number}_${number}_position`]:
    | number
    | undefined;
  [key: `SkyWars_skywars_rating_${number}_${number}_rating`]:
    | number
    | undefined;
  activeKit_MEGA?: string;
  activeKit_MEGA_random?: boolean;
  activeKit_RANKED?: string;
  activeKit_RANKED_random?: boolean;
  activeKit_SOLO?: string;
  activeKit_SOLO_random?: boolean;
  activeKit_TEAMS?: string;
  activeKit_TEAMS_random?: boolean;
  active_balloon?: string;
  active_cage?: string;
  active_deathcry?: string;
  active_killeffect?: string;
  active_killmessages?: string;
  active_projectiletrail?: string;
  active_sprays?: string;
  active_victorydance?: string;
  angel_of_death_level?: number;
  arrows_hit?: number;
  [key: `arrows_hit_${string}`]: number | undefined;
  arrows_shot?: number;
  [key: `arrows_shot_${string}`]: number | undefined;
  assists?: number;
  [key: `assists_${string}`]: number | undefined;
  avarice?: number;
  blocks_broken?: number;
  [key: `blocks_broken_${string}`]: number | undefined;
  blocks_placed?: number;
  [key: `blocks_placed_${string}`]: number | undefined;
  bow_kills?: number;
  [key: `bow_kills_${string}`]: number | undefined;
  challenge_attempts?: number;
  [key: `challenge_attempts_${string}`]: number | undefined;
  challenge_wins?: number;
  [key: `challenege_wins_${string}`]: number | undefined;
  chests_opened?: number;
  [key: `chests_opened_${string}`]: number | undefined;
  coins: number;
  [key: `coins_gained_${string}`]: number | undefined;
  cosmetic_tokens?: number;
  deaths?: number;
  [key: `deaths_${string}`]: number | undefined;
  deaths_tourney?: number;
  [key: `deaths_tourney_${string}`]: number | undefined;
  egg_thrown?: number;
  [key: `egg_thrown_${string}`]: number | undefined;
  enderpearls_thrown?: number;
  [key: `enderpearls_thrown_${string}`]: number | undefined;
  extra_wheels?: number;
  fall_kills?: number;
  [key: `fall_kills_${string}`]: number | undefined;
  fastest_win?: number;
  [key: `fastest_win_${string}`]: number | undefined;
  [key: `free_event_keys_${string}`]: boolean | undefined;
  games?: number;
  [key: `games_${string}`]: number | undefined;
  harvesting_season?: number;
  head_collection?: {
    recent?: {
      uuid: string;
      timestamp: number;
      mode: string;
      sacrifice: string;
    }[];
    prestigious?: {
      uuid: string;
      timestamp: number;
      mode: string;
      sacrifice: string;
    }[];
  };
  heads?: number;
  [key: `heads_${string}`]: number | undefined;
  hide_skywars_level?: boolean;
  hunters_vs_beasts_explained?: number;
  hunters_vs_beasts_explained_last?: number;
  [key: `inGamePresentsCap_${number}_${number}`]: number | undefined;
  items_enchanted?: number;
  items_enchanted_lab?: number;
  items_enchanted_tourney?: number;
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  killstreak?: number;
  [key: `killstreak_${string}`]: number | undefined;
  kit_defending_team_frog_inventory_auto_equip_armor?: boolean;
  [key: `kit_mega_mega_${string}`]: number | undefined;
  [key: `kit_${string}_inventory`]:
    | {
        [key: string]: string | undefined;
      }
    | undefined;
  [key: `lab_win_${string}`]: number | undefined;
  lastMode?: string;
  lastTourneyAd?: number;
  levelFormatted?: string;
  levelFormattedWithBrackets?: string;
  longest_bow_kill?: number;
  [key: `longest_bow_kill_${string}`]: number | undefined;
  longest_bow_shot?: number;
  [key: `longest_bow_shot_${string}`]: number | undefined;
  losses?: number;
  [key: `losses_${string}`]: number | undefined;
  luckyBlockResourcePackEnabled?: boolean;
  lucky_explained?: number;
  lucky_explained_last?: number;
  [key: `mega_${string}`]: number | undefined;
  melee_kills?: number;
  [key: `melee_kills_${string}`]: number | undefined;
  mob_kills?: number;
  [key: `mobs_kills_${string}`]: number | undefined;
  mobs_killed?: number;
  [key: `mobs_killed_${string}`]: number | undefined;
  most_kills_game?: number;
  [key: `most_kills_game_${string}`]: number | undefined;
  opals?: number;
  packages?: string[];
  paid_souls?: number;
  perkslot?: {
    normal: {
      [key: number]: string | undefined;
    };
    insane: {
      [key: number]: string | undefined;
    };
    [key: string]: unknown;
  };
  quits?: number;
  [key: `quits_${string}`]: number | undefined;
  refill_chest_destroy?: number;
  [key: `refill_chest_destroy_${string}`]: number | undefined;
  rush_explained?: number;
  rush_explained_last?: number;
  selected_prestige_icon?: string;
  shard?: number;
  [key: `shard_${string}`]: number | undefined;
  shop_sort?: string;
  shop_sort_enable_owned_first?: boolean;
  skywars_chest_history?: string[];
  skywars_chests?: number;
  skywars_christmas_boxes?: number;
  skywars_easter_boxes?: number;
  skywars_experience?: number;
  skywars_experience_pending?: number;
  skywars_halloween_boxes?: number;
  slime_explained?: number;
  slime_explained_last?: number;
  [key: `solo_${string}`]: number | undefined;
  soul_well?: number;
  [key: `soul_well_${string}`]: number | undefined;
  souls?: number;
  [key: `souls_${string}`]: number | undefined;
  survived_players?: number;
  [key: `survived_players_${string}`]: number | undefined;
  [key: `team_${string}`]: number | undefined;
  time_played?: number;
  [key: `time_played_${string}`]: number | undefined;
  tnt_madness_explained?: number;
  tnt_madness_explained_last?: number;
  [key: `toggle_${string}`]: boolean | undefined;
  [key: `tourney_sw_${string}`]: number | undefined;
  usedSoulWell?: boolean;
  void_kills?: number;
  void_kills_tourney_teams_tourney?: number;
  [key: `void_kills_${string}`]: number | undefined;
  win_streak?: number;
  [key: `wins_${string}`]: number | undefined;
  winstreak?: number;
  [key: `win_streak_${string}`]: number | undefined;
  [key: `winstreak_${string}`]: number | undefined;
  xezbeth_luck?: number;
  [key: string]: unknown;
};

export type PlayerStatsSpeedUHC = {
  [key: `activeKit_${string}`]: string | undefined;
  activeMasterPerk?: string;
  assists?: number;
  [key: `assists_${string}`]: number | undefined;
  blocks_broken?: number;
  blocks_placed?: number;
  coins?: number;
  deaths?: number;
  [key: `deaths_${string}`]: number | undefined;
  diamond_boots_drop?: number;
  diamond_chestplate_drop?: number;
  diamond_helmet_drop?: number;
  diamond_leggings_drop?: number;
  ender_pearl_drop?: number;
  firstJoinLobbyInt?: number;
  games?: number;
  [key: `games_${string}`]: number | undefined;
  gold_boots_drop?: number;
  gold_chestplate_drop?: number;
  gold_helmet_drop?: number;
  gold_leggings_drop?: number;
  highestKillstreak?: number;
  highestWinstreak?: number;
  iron_boots_drop?: number;
  iron_chestplate_drop?: number;
  iron_helmet_drop?: number;
  iron_leggings_drop?: number;
  items_enchanted?: number;
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  killstreak?: number;
  [key: `killstreak_${string}`]: number | undefined;
  leather_boots_drop?: number;
  leather_chestplate_drop?: number;
  leather_helmet_drop?: number;
  leather_leggings_drop?: number;
  losses?: number;
  [key: `losses_${string}`]: number | undefined;
  [key: `mastery_${string}`]: number | undefined;
  movedOver?: boolean;
  [key: `normal_${string}`]: number | undefined;
  packages?: string[];
  quits?: number;
  score: number;
  [key: `score_${string}`]: number | undefined;
  survived_players?: number;
  [key: `survived_players_${string}`]: number | undefined;
  tears?: number;
  win_streak?: number;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
  winstreak?: number;
  [key: `winstream_${string}`]: number | undefined;
  [key: string]: unknown;
};

export type PlayerStatsSuperSmash = {
  FRIENDS_firstGame?: number;
  FRIENDS_gamesDay?: number;
  ONE_V_JUAN_firstGame?: number;
  ONE_V_JUAN_gamesDay?: number;
  active_class?: string;
  assists?: number;
  [key: `assists_${string}`]: number | undefined;
  classes?: { MARAUDER: boolean };
  class_stats?: {
    [key in "THE_BULK" | "GENERAL_CLUCK" | "BOTMUN" | "MARAUDER"]:
      | ({
          damage_dealt?: number;
          [key: `damage_dealt_${string}`]: number | undefined;
          deaths?: number;
          [key: `deaths_${string}`]: number | undefined;
          friend_losses?: number;
          [key: `friend_losses_${string}`]: number | undefined;
          friend_wins?: number;
          [key: `friend_wins_${string}`]: number | undefined;
          games?: number;
          [key: `games_${string}`]: number | undefined;
          kills?: number;
          [key: `kills_${string}`]: number | undefined;
          losses?: number;
          [key: `losses_${string}`]: number | undefined;
          one_v_one_wins?: number;
          [key: `one_v_one_wins_${string}`]: number | undefined;
          smashed?: number;
          [key: `smashed_${string}`]: number | undefined;
          smasher?: number;
          [key: `smasher_${string}`]: number | undefined;
          win_streak?: number;
          [key: `win_streak_${string}`]: number | undefined;
          wins?: number;
          [key: `wins_${string}`]: number | undefined;
          [key: string]: unknown;
        } & {
          [weaponKey in
            | "batarang"
            | "bazooka"
            | "botmubile"
            | "boulder"
            | "charged_beam"
            | "desert_eagle"
            | "egg_bazooka"
            | "force_lightning"
            | "force_pull"
            | "frostbolt"
            | "grappling_hook"
            | "ki_blast"
            | "melee"
            | "monster_charge"
            | "monster_mash"
            | "reinforcements"
            | "seismic_slam"
            | "spider_kick"]: {
            damage_dealt?: number;
            [key: `damage_dealt_${string}`]: number | undefined;
            kills?: number;
            [key: `kills_${string}`]: number | undefined;
            smashed?: number;
            [key: `smashed_${string}`]: number | undefined;
            smasher?: number;
            [key: `smasher_${string}`]: number | undefined;
          }[];
        })
      | undefined;
  };
  coins: number;
  damage_dealt?: number;
  [key: `damage_dealt_${string}`]: number | undefined;
  deaths?: number;
  [key: `deaths_${string}`]: number | undefined;
  expBooster_purchases_10_plays?: number;
  friend_losses?: number;
  [key: `friend_losses_${string}`]: number | undefined;
  friend_wins?: number;
  [key: `friend_wins_${string}`]: number | undefined;
  games?: number;
  [key: `games_${string}`]: number | undefined;
  hero_level_booster_active?: {
    key: string;
    multiplier: number;
    value: number;
    plays: number;
  };
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  [key: `lastLevel_${string}`]: number | undefined;
  losses?: number;
  [key: `losses_${string}`]: number | undefined;
  one_v_one_losses?: number;
  [key: `one_v_one_losses_${string}`]: number | undefined;
  one_v_one_wins?: number;
  [key: `one_v_one_wins_${string}`]: number | undefined;
  quits?: number;
  smashLevel?: number;
  smash_level_total?: number;
  smashed?: number;
  [key: `smashed_${string}`]: number | undefined;
  smasher?: number;
  [key: `smasher_${string}`]: number | undefined;
  win_streak?: number;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
  [key: `xp_${string}`]: number | undefined;
  [key: string]: unknown;
};

export type PlayerStatsTNTGames = {
  air_time_capture?: number;
  assists_capture?: number;
  coins?: number;
  [key: `deaths_${string}`]: number | undefined;
  flags?: {
    show_tip_holograms?: boolean;
    show_tntrun_actionbar_info?: boolean;
    show_tnttag_actionbar_info?: boolean;
    enable_explosive_dash?: boolean;
    give_dj_feather?: boolean;
    [key: string]: boolean | undefined;
  };
  [key: `kills_${string}`]: number | undefined;
  kinetic_healing_capture?: number;
  lastTourneyAd?: number;
  new_active_particle_effect?: string;
  [key: `new_ancientwizard_${string}`]: number | undefined;
  [key: `new_bloodwizard_${string}`]: number | undefined;
  [key: `new_firewizard_${string}`]: number | undefined;
  [key: `new_hydrowizard_${string}`]: number | undefined;
  [key: `new_icewizard_${string}`]: number | undefined;
  [key: `new_kineticwizard_${string}`]: number | undefined;
  [key: `new_pvprun_${string}`]: number | undefined;
  new_selected_hat?: string;
  [key: `new_spleef_${string}`]: number | undefined;
  [key: `new_stormwizard_${string}`]: number | undefined;
  [key: `new_tntag_${string}`]: number | undefined;
  [key: `new_tntrun_${string}`]: number | undefined;
  [key: `new_toxicwizard_${string}`]: number | undefined;
  [key: `new_witherwizard_${string}`]: number | undefined;
  packages?: string[];
  points_capture?: number;
  privategames?: {
    speed?: string;
    tnt_run_snowballs?: boolean;
    maxed_perks?: boolean;
    low_gravity?: boolean;
    bowspleef_dj_multiplier?: string;
    [key: string]: string | boolean | undefined;
  };
  record_pvprun?: number;
  record_tntrun?: number;
  run_potions_splashed_on_players?: number;
  [key: `tag_${string}`]: number | undefined;
  wins: number;
  [key: `wins_${string}`]: number | undefined;
  winstreak?: number;
  wizards_selected_class?: string;
  [key: string]: unknown;
};

export type PlayerStatsTrueCombat = {
  coins?: number;
  [key: `crazywalls_${string}`]: number | undefined;
  deaths?: number;
  games?: number;
  kills?: number;
  kills_monthly_a?: number;
  kills_weekly_b?: number;
  losses?: number;
  packages?: string[];
  survived_players?: number;
  win_streak?: number;
  [key: string]: unknown;
};

export type PlayerStatsUHC = {
  clearup_achievement?: boolean;
  coins?: number;
  deaths?: number;
  deaths_solo?: number;
  equippedKit?: string;
  extra_ultimates_crafted?: number;
  heads_eaten_solo?: number;
  kills_solo?: number;
  [key: `kit_${string}`]: number | undefined;
  packages?: string[];
  [key: `perk_${string}`]: number | undefined;
  saved_stats?: boolean;
  score?: number;
  uhc_parkour_1?: boolean;
  uhc_parkour_2?: boolean;
  ultimates_crafted?: number;
  [key: `ultimates_crafted_${string}`]: number | undefined;
  [key: string]: unknown;
};

export type PlayerStatsVampireZ = {
  advanced_swag?: number;
  baby_hater?: number;
  basic_swag?: number;
  blood_booster?: number;
  blood_drinker?: number;
  coins: number;
  constitution?: number;
  drain_punch?: number;
  expert_swag?: number;
  explosive_killer?: number;
  final_breath?: number;
  fireproofing?: number;
  foresight?: number;
  frankensteins_monster?: number;
  gold_booster?: number;
  gold_bought?: number;
  gold_starter?: number;
  hellborn?: number;
  human_deaths?: number;
  human_kills?: number;
  human_wins?: number;
  kill_booster?: number;
  loot_drops?: number;
  [key: `monthly_${string}_wins_${string}`]: number | undefined;
  most_vampire_kills_new?: number;
  renfield?: number;
  terror_level?: number;
  transfusion?: number;
  updated_stats?: boolean;
  vampire_deaths?: number;
  vampire_doubler?: number;
  vampire_kills?: number;
  vampire_wins?: number;
  vampiric_minion?: number;
  vampiric_scream?: number;
  van_helsing?: number;
  wave_booster?: number;
  [key: `weekly_${string}_wins_${string}`]: number | undefined;
  zombie_doubler?: number;
  zombie_kills?: number;
  [key: string]: unknown;
};

export type PlayerStatsWalls3 = {
  automaton_final_deaths?: number;
  [key: `automaton_final_deaths_${string}`]: number | undefined;
  automaton_games_played?: number;
  [key: `automaton_games_played_${string}`]: number | undefined;
  automaton_losses?: number;
  [key: `automaton_losses_${string}`]: number | undefined;
  automaton_meters_fallen?: number;
  [key: `automaton_meters_fallen_${string}`]: number | undefined;
  automaton_meters_walked?: number;
  [key: `automaton_meters_walked_${string}`]: number | undefined;
  automaton_time_played?: number;
  [key: `automaton_time_played_${string}`]: number | undefined;
  automaton_total_deaths?: number;
  [key: `automaton_total_deaths_${string}`]: number | undefined;
  activations?: number;
  [key: `activations_${string}`]: number | undefined;
  activations_deathmatch?: number;
  [key: `activations_deathmatch_${string}`]: number | undefined;
  amount_healed?: number;
  [key: `amount_healed_${string}`]: number | undefined;
  apples_eaten?: number;
  [key: `apples_eaten_${string}`]: number | undefined;
  arrows_fired?: number;
  [key: `arrows_fired_${string}`]: number | undefined;
  arrows_hit?: number;
  [key: `arrows_hit_${string}`]: number | undefined;
  assists?: number;
  [key: `assists_${string}`]: number | undefined;
  blizzard_seconds_slow?: number;
  [key: `blizzard_seconds_slow_${string}`]: number | undefined;
  blocks_broken?: number;
  [key: `blocks_broken_${string}`]: number | undefined;
  blocks_placed?: number;
  [key: `blocks_placed_${string}`]: number | undefined;
  blocks_placed_preparation?: number;
  [key: `blocks_placed_preparation_${string}`]: number | undefined;
  bread_eaten?: number;
  [key: `bread_eaten_${string}`]: number | undefined;
  bucket_barriers_broken?: number;
  [key: `bucket_barriers_broken_${string}`]: number | undefined;
  cakes_found?: number;
  cakes_found_by_name?: string[];
  [key: `cakes_found_${string}`]: number | string[] | undefined;
  chosen_class?: string;
  [key: `chosen_skin_${string}`]: string | undefined;
  classes?: {
    [key in
      | "herobrine"
      | "skeleton"
      | "enderman"
      | "zombie"
      | "cow"
      | "hunter"
      | "snowman"
      | "shaman"]:
      | {
          [key: `checked${number}`]: boolean | undefined;
          enderchest_rows: number;
          [key: `skill_level_${string}`]: number | undefined | unknown;
          [key: `skill_level_${string}Checked${number}`]: boolean | undefined;
          unlocked?: boolean;
        }
      | undefined;
  };
  coins?: number;
  damage_dealt?: number;
  [key: `damage_dealt_${string}`]: number | undefined;
  deaths?: number;
  [key: `deaths_${string}`]: number | undefined;
  defender_assists?: number;
  [key: `defender_assists_${string}`]: number | undefined;
  defender_final_assists?: number;
  [key: `defender_final_assists_${string}`]: number | undefined;
  defender_final_kills?: number;
  [key: `defender_final_kills_${string}`]: number | undefined;
  defender_kills?: number;
  [key: `defender_kills_${string}`]: number | undefined;
  enemies_hit?: number;
  [key: `enemies_hit_${string}`]: number | undefined;
  exchange_favor_bought?: number;
  final_assists?: number;
  [key: `final_assists_${string}`]: number | undefined;
  final_assists_melee?: number;
  [key: `final_assists_melee_${string}`]: number | undefined;
  final_deaths?: number;
  [key: `final_deaths_${string}`]: number | undefined;
  final_kills?: number;
  [key: `final_kills_${string}`]: number | undefined;
  final_kills_melee?: number;
  [key: `finall_kills_melee_${string}`]: number | undefined;
  final_kills_melee_behind?: number;
  [key: `final_kills_melee_behind_${string}`]: number | undefined;
  fish_eaten?: number;
  [key: `fish_eaten_${string}`]: number | undefined;
  food_eaten?: number;
  [key: `food_eaten_${string}`]: number | undefined;
  games_played?: number;
  [key: `games_played_${string}`]: number | undefined;
  golden_apples_eaten?: number;
  [key: `golden_apples_eaten_${string}`]: number | undefined;
  heroism_triggers?: number;
  heroism_triggers_in_dm?: number;
  heroism_triggers_in_dm_standard?: number;
  heroism_triggers_standard?: number;
  iron_armor_gifted?: number;
  iron_armor_gifted_december?: number;
  iron_armor_gifted_december_standard?: number;
  iron_armor_gifted_standard?: number;
  iron_ore_broken?: number;
  iron_ore_broken_standard?: number;
  kills?: number;
  [key: `kills_${string}`]: number | undefined;
  kills_melee?: number;
  [key: `kills_melee_${string}`]: number | undefined;
  kills_melee_behind?: number;
  [key: `kills_melee_behind_${string}`]: number | undefined;
  kills_ranged?: number;
  [key: `kills_ranged_${string}`]: number | undefined;
  losses?: number;
  [key: `losses_${string}`]: number | undefined;
  meters_fallen?: number;
  [key: `meters_fallen_${string}`]: number | undefined;
  meters_walked?: number;
  [key: `meters_walked_${string}`]: number | undefined;
  meters_walked_speed?: number;
  [key: `meters_walked_speed_${string}`]: number | undefined;
  mythic_favor?: number;
  new_echest?: number;
  packages?: string[];
  potions_drunk?: number;
  [key: `potions_drunk_${string}`]: number | undefined;
  self_healed?: number;
  [key: `self_healed_${string}`]: number | undefined;
  shoutTotal?: number;
  snowmen_built?: number;
  [key: `snowmen_built_${string}`]: number | undefined;
  snowmen_players_hit?: number;
  [key: `snowmen_players_hit_${string}`]: number | undefined;
  steaks_eaten?: number;
  [key: `steaks_eaten_${string}`]: number | undefined;
  time_played?: number;
  [key: `time_played_${string}`]: number | undefined;
  total_deaths?: number;
  [key: `total_deaths_${string}`]: number | undefined;
  total_final_kills?: number;
  [key: `total_final_kills_${string}`]: number | undefined;
  total_kills?: number;
  [key: `total_kills_${string}`]: number | undefined;
  treasures_found?: number;
  [key: `treasures_found_${string}`]: number | undefined;
  ultra_pasteurized_drank?: number;
  [key: `ultra_pasteurized_drank_${string}`]: number | undefined;
  wins?: number;
  [key: `wins_${string}`]: number | undefined;
  wither_damage?: number;
  [key: `wither_damage_${string}`]: number | undefined;
  wood_chopped?: number;
  [key: `wood_chopped_${string}`]: number | undefined;
  [key: string]: unknown;
} & PlayerStatsWalls3Full;

export type PlayerStatsWalls3Type =
  | "cow"
  | "herobrine"
  | "hunter"
  | "moleman"
  | "shaman"
  | "shark"
  | "snowman";

export type PlayerStatsWalls3Letter = "a" | "b" | "c" | "d" | "g";

export type PlayerStatsWalls3StatType =
  | "activations"
  | "activations_deathmatch"
  | "amount_healed"
  | "apples_eaten"
  | "arrows_fired"
  | "arrows_hit"
  | "assists"
  | "blizzard_seconds_slow"
  | "blocks_broken"
  | "blocks_placed"
  | "blocks_placed_preparation"
  | "bread_eaten"
  | "bucket_barriers_broken"
  | "damage_dealt"
  | "deaths"
  | "defender_assists"
  | "defender_final_assists"
  | "defender_final_kills"
  | "defender_kills"
  | "enemies_hit"
  | "final_assists"
  | "final_assists_melee"
  | "final_deaths"
  | "final_kills"
  | "final_kills_melee"
  | "final_kills_melee_behind"
  | "fish_eaten"
  | "food_eaten"
  | "games_played"
  | "golden_apples_eaten"
  | "heroism_triggers"
  | "heroism_triggers_in_dm"
  | "infused"
  | "iron_armor_gifted"
  | "iron_armor_gifted_december"
  | "iron_ore_broken"
  | "kills"
  | "kills_melee"
  | "kills_melee_behind"
  | "kills_ranged"
  | "losses"
  | "meters_fallen"
  | "meters_walked"
  | "meters_walked_speed"
  | "meters_walked_standard"
  | "potions_drunk"
  | "self_healed"
  | "snowmen_built"
  | "snowmen_players_hit"
  | "steaks_eaten"
  | "time_played"
  | "total_deaths"
  | "total_final_kills"
  | "total_final_kills"
  | "total_kills"
  | "treasures_found"
  | "ultra_pasteurized_drank"
  | "wins"
  | "wither_damage"
  | "wood_chopped";

export type PlayerStatsWalls3Full = {
  [key in `${PlayerStatsWalls3Type}_${PlayerStatsWalls3Letter}_${PlayerStatsWalls3StatType}`]:
    | number
    | undefined;
} &
  {
    [key in `${PlayerStatsWalls3Type}_${PlayerStatsWalls3Letter}_${PlayerStatsWalls3StatType}_${string}`]:
      | number
      | undefined;
  } &
  {
    [key in `${PlayerStatsWalls3Letter}_${PlayerStatsWalls3StatType}`]:
      | number
      | undefined;
  } &
  {
    [key in `${PlayerStatsWalls3Letter}_${PlayerStatsWalls3StatType}_${string}`]:
      | number
      | undefined;
  };

export type PlayerStatsWalls = {
  adrenaline?: number;
  artisan?: number;
  assists?: number;
  attractor?: number;
  bacon?: number;
  berserk?: number;
  blacksmith?: number;
  blacksmith_starter?: number;
  bomberman?: number;
  burn_baby_burn?: number;
  cats_eye?: number;
  chainkiller?: number;
  chef?: number;
  chemist?: number;
  coins?: number;
  deaths?: number;
  ecologist?: number;
  einstein?: number;
  escapist?: number;
  expert_miner?: number;
  farmer?: number;
  fireproof?: number;
  fisherman?: number;
  fortune?: number;
  guitarist?: number;
  haste?: number;
  InventoryLayout2?: {
    [key: number]: string | undefined;
  };
  kills?: number;
  lazyman?: number;
  leather_worker?: number;
  losses?: number;
  [key: `monthly_${string}_${string}`]: number | undefined;
  necromancer?: number;
  opportunity?: number;
  packages?: string[];
  ready?: number;
  really_shiny?: number;
  redstone_expert?: number;
  sage?: number;
  smart_boy?: number;
  snack_lover?: number;
  soup_drinker?: number;
  step?: number;
  swift?: number;
  tenacity?: number;
  tragedy?: number;
  trap_engineer?: number;
  vampirism?: number;
  vitality?: number;
  [key: `weekly_${string}_${string}`]: number | undefined;
  wins?: number;
  [key: string]: unknown;
};

export type PlayerStatsWoolGames = {
  capture_the_wool?: {
    stats: {
      kills?: number;
      assists?: number;
      wools_stolen?: number;
      deaths_with_wool?: number;
      kills_with_wool?: number;
      kills_on_woolholder?: number;
      deaths_to_woolholder?: number;
      gold_spent?: number;
      experienced_wins?: number;
      participated_wins?: number;
      experienced_losses?: number;
      wools_captured?: number;
      participated_losses?: number;
      deaths?: number;
      fastest_wool_capture?: number;
      most_gold_earned?: number;
      gold_earned?: number;
      most_kills_and_assists?: number;
      fastest_win?: number;
      longest_game?: number;
      [key: string]: number | unknown;
    };
    settings?: {
      show_tip_hologram?: boolean;
      show_tutorial_book?: boolean;
      show_tips?: boolean;
      [key: string]: boolean | unknown;
    };
    [key: string]: unknown;
  };
  coins?: number;
  data_migration_version?: number;
  killmessages?: string;
  lastTourneyAd?: number;
  packages?: string[];
  progression?: {
    available_layers: number;
    experience?: number;
  };
  wool_wars?: {
    layouts?: {
      [key: string]:
        | {
            [key: number]: string | undefined;
          }
        | undefined;
    };
    selected_class?: string;
    stats: {
      assists?: number;
      blocks_broken?: number;
      classes: {
        [key: string]:
          | {
              assists?: number;
              blocks_broken?: number;
              deaths?: number;
              kills?: number;
              wool_placed?: number;
              powerups_gotten?: number;
            }
          | undefined;
      };
      deaths?: number;
      games_played?: number;
      kills?: number;
      powerups_gotten?: number;
      wins?: number;
      wool_placed?: number;
    };
  };
  [key: string]: unknown;
};
