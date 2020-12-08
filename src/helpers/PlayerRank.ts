import { Components } from "../types/api";
import {
  MinecraftColorAsHex,
  MinecraftFormatting,
} from "./MinecraftFormatting";

/** @internal */
export enum PlayerRanks {
  NON_DONOR = 1,
  VIP = 2,
  VIP_PLUS = 3,
  MVP = 4,
  MVP_PLUS = 5,
  SUPERSTAR = 6,
  YOUTUBER = 60,
  JR_HELPER = 70,
  HELPER = 80,
  MODERATOR = 90,
  ADMIN = 100,
}

/**
 * Describes the results from the {@link getPlayerRank} helper.
 */
export interface PlayerRank {
  /**
   * The priority of this rank as it relates to other ranks.
   */
  priority: number;
  /**
   * Name of the rank as it appears in the data.
   */
  name: string;
  /**
   * Cleaned up version of the name.
   */
  cleanName: string;
  /**
   * The chat prefix with Minecraft formatting codes.
   */
  prefix: string;
  /**
   * The chat prefix _without_ Minecraft formatting codes.
   */
  cleanPrefix: string;
  /**
   * The Minecraft formatting color code of this rank.
   */
  colorCode: MinecraftFormatting;
  /**
   * The hex value of the color code.
   */
  colorHex: MinecraftColorAsHex;
  /**
   * If they have a custom color for their rank.
   * **Note:** this can be set when the player isn't MVP++. If you want to use this value, be sure to check if the rank is SUPERSTAR (MVP++).
   */
  customRankColor?: MinecraftFormatting;
  /**
   * Same as customRankColor, but the hex version of the color.
   */
  customRankColorHex?: MinecraftColorAsHex;
  /**
   * If they have a custom color for the pluses in their rank (++).
   * **Note:** this can be set when the player isn't MVP++. If you want to use this value, be sure to check if the rank is SUPERSTAR (MVP++).
   */
  customPlusColor?: MinecraftFormatting;
  /**
   * Same as customPlusColor, but the hex version of the color.
   */
  customPlusColorHex?: MinecraftColorAsHex;
  /**
   * Whether or not this is a staff only rank.
   */
  staff: boolean;
}

/**
 * Get an {@link PlayerRank} object describing the player's rank in more detail without the need to figure out how to parse it yourself.
 * @param player The result of `client.player.uuid()`.
 * @param onlyPackages Whether to ignore their staff / youtube rank and only get their donor rank.
 * @category Helper
 */
export function getPlayerRank(
  player: NonNullable<Components.Schemas.Player>,
  onlyPackages = false
): PlayerRank {
  let foundRank: PlayerRanks = PlayerRanks.NON_DONOR;
  if (onlyPackages) {
    if (player.monthlyPackageRank) {
      const rank =
        PlayerRanks[player.monthlyPackageRank as keyof typeof PlayerRanks];
      if (rank) {
        foundRank = rank;
      }
    }
    if (player.newPackageRank) {
      const rank =
        PlayerRanks[player.newPackageRank as keyof typeof PlayerRanks];
      if (rank && rank > foundRank) {
        foundRank = rank;
      }
    }
    if (player.packageRank) {
      const rank = PlayerRanks[player.packageRank as keyof typeof PlayerRanks];
      if (rank && rank > foundRank) {
        foundRank = rank;
      }
    }
  } else if (typeof player.rank !== "undefined" && player.rank !== "NORMAL") {
    const rank = PlayerRanks[player.rank as keyof typeof PlayerRanks];
    if (rank) {
      foundRank = rank;
    } else {
      return getPlayerRank(player, true);
    }
  } else {
    return getPlayerRank(player, true);
  }
  let out: PlayerRank;
  switch (foundRank) {
    case PlayerRanks.VIP:
      out = {
        priority: foundRank,
        name: "VIP",
        cleanName: "VIP",
        prefix: "§a[VIP]",
        cleanPrefix: "[VIP]",
        colorCode: MinecraftFormatting.GREEN,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.GREEN],
        staff: false,
      };
      break;
    case PlayerRanks.VIP_PLUS:
      out = {
        priority: foundRank,
        name: "VIP_PLUS",
        cleanName: "VIP+",
        prefix: "§a[VIP§6+§a]",
        cleanPrefix: "[VIP+]",
        colorCode: MinecraftFormatting.GREEN,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.GREEN],
        staff: false,
      };
      break;
    case PlayerRanks.MVP:
      out = {
        priority: foundRank,
        name: "MVP",
        cleanName: "MVP",
        prefix: "§b[MVP]",
        cleanPrefix: "[MVP]",
        colorCode: MinecraftFormatting.AQUA,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.AQUA],
        staff: false,
      };
      break;
    case PlayerRanks.MVP_PLUS:
      out = {
        priority: foundRank,
        name: "MVP_PLUS",
        cleanName: "MVP+",
        prefix: "§b[MVP§c+§b]",
        cleanPrefix: "[MVP+]",
        colorCode: MinecraftFormatting.AQUA,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.AQUA],
        staff: false,
      };
      break;
    case PlayerRanks.SUPERSTAR:
      out = {
        priority: foundRank,
        name: "SUPERSTAR",
        cleanName: "MVP++",
        prefix: "§6[MVP§c++§6]",
        cleanPrefix: "[MVP++]",
        colorCode: MinecraftFormatting.GOLD,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.GOLD],
        staff: false,
      };
      break;
    case PlayerRanks.YOUTUBER:
      out = {
        priority: foundRank,
        name: "YOUTUBER",
        cleanName: "YOUTUBER",
        prefix: "§c[§fYOUTUBE§c]",
        cleanPrefix: "[YOUTUBE]",
        colorCode: MinecraftFormatting.RED,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.RED],
        staff: false,
      };
      break;
    case PlayerRanks.JR_HELPER:
      out = {
        priority: foundRank,
        name: "JR_HELPER",
        cleanName: "JR HELPER",
        prefix: "§9[JR HELPER]",
        cleanPrefix: "[JR HELPER]",
        colorCode: MinecraftFormatting.BLUE,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.BLUE],
        staff: true,
      };
      break;
    case PlayerRanks.HELPER:
      out = {
        priority: foundRank,
        name: "HELPER",
        cleanName: "HELPER",
        prefix: "§9[HELPER]",
        cleanPrefix: "[HELPER]",
        colorCode: MinecraftFormatting.BLUE,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.BLUE],
        staff: true,
      };
      break;
    case PlayerRanks.MODERATOR:
      out = {
        priority: foundRank,
        name: "MODERATOR",
        cleanName: "MODERATOR",
        prefix: "§2[MOD]",
        cleanPrefix: "[MOD]",
        colorCode: MinecraftFormatting.DARK_GREEN,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.DARK_GREEN],
        staff: true,
      };
      break;
    case PlayerRanks.ADMIN:
      out = {
        priority: foundRank,
        name: "ADMIN",
        cleanName: "ADMIN",
        prefix: "§c[ADMIN]",
        cleanPrefix: "[ADMIN]",
        colorCode: MinecraftFormatting.RED,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.RED],
        staff: true,
      };
      break;
    default:
      out = {
        priority: foundRank,
        name: "NON_DONOR",
        cleanName: "DEFAULT",
        prefix: "§7",
        cleanPrefix: "",
        colorCode: MinecraftFormatting.GRAY,
        colorHex: MinecraftColorAsHex[MinecraftFormatting.GRAY],
        staff: false,
      };
      break;
  }
  if (player.monthlyRankColor || player.rankPlusColor) {
    const customRankColor =
      MinecraftFormatting[
        player.monthlyRankColor as keyof typeof MinecraftFormatting
      ];
    const customPlusColor =
      MinecraftFormatting[
        player.rankPlusColor as keyof typeof MinecraftFormatting
      ];
    if (customRankColor) {
      out.customRankColor = customRankColor;
      out.customRankColorHex =
        MinecraftColorAsHex[
          customRankColor as keyof typeof MinecraftColorAsHex
        ];
    }
    if (customPlusColor) {
      out.customPlusColor = customPlusColor;
      out.customPlusColorHex =
        MinecraftColorAsHex[
          customPlusColor as keyof typeof MinecraftColorAsHex
        ];
    }
    if (out.priority === PlayerRanks.SUPERSTAR) {
      out.prefix = `${customRankColor ?? "§6"}[MVP${customPlusColor ?? "§c"}++${
        customRankColor ?? "§6"
      }]`;
    }
  }
  return out;
}
