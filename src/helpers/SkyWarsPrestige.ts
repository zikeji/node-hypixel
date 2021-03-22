/**
 * This portion of code was ported from the [hypixel-php](https://github.com/Plancke/hypixel-php) library.
 *
 * Copyright (c) 2021 Zikeji
 * Copyright (c) 2017 Aäron Plancke
 *
 * For the original full copyright and license information, please view the LICENSE-HYPIXEL-PHP.md that was distributed with this source code.
 */

import {
  MinecraftColorAsHex,
  MinecraftFormatting,
} from "./MinecraftFormatting";

/**
 * Describes the properties of a Prestige object returned by {@link getSkyWarsPrestigeForLevel}.
 */
export interface SkyWarsPrestige {
  id: string;
  name: string;
  color: MinecraftFormatting;
  colorHex: MinecraftColorAsHex;
  minimumLevel: number;
  icon: {
    version: number;
    material: string;
    typeId: number;
    data: number;
  };
  textIcon: string | null;
}

/**
 * An array of the prestiges in SkyWars, listed in order of lowest to highest.
 */
export const SkyWarsPrestiges: SkyWarsPrestige[] = [
  {
    id: "NONE",
    name: "None",
    color: MinecraftFormatting.GRAY,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.GRAY],
    minimumLevel: 1,
    icon: {
      version: 1,
      material: "COAL",
      typeId: 263,
      data: 0,
    },
    textIcon: null,
  },
  {
    id: "IRON",
    name: "Iron",
    color: MinecraftFormatting.WHITE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.WHITE],
    minimumLevel: 5,
    icon: {
      version: 1,
      material: "IRON_INGOT",
      typeId: 265,
      data: 0,
    },
    textIcon: "✙",
  },
  {
    id: "GOLD",
    name: "Gold",
    color: MinecraftFormatting.GOLD,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.GOLD],
    minimumLevel: 10,
    icon: {
      version: 1,
      material: "GOLD_INGOT",
      typeId: 266,
      data: 0,
    },
    textIcon: "❤",
  },
  {
    id: "DIAMOND",
    name: "Diamond",
    color: MinecraftFormatting.AQUA,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.AQUA],
    minimumLevel: 15,
    icon: {
      version: 1,
      material: "DIAMOND",
      typeId: 264,
      data: 0,
    },
    textIcon: "☠",
  },
  {
    id: "EMERALD",
    name: "Emerald",
    color: MinecraftFormatting.DARK_GREEN,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.DARK_GREEN],
    minimumLevel: 20,
    icon: {
      version: 1,
      material: "EMERALD",
      typeId: 388,
      data: 0,
    },
    textIcon: "✦",
  },
  {
    id: "SAPPHIRE",
    name: "Sapphire",
    color: MinecraftFormatting.DARK_AQUA,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.DARK_AQUA],
    minimumLevel: 25,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 3,
    },
    textIcon: "✌",
  },
  {
    id: "RUBY",
    name: "Ruby",
    color: MinecraftFormatting.DARK_RED,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.DARK_RED],
    minimumLevel: 30,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 3,
    },
    textIcon: "❦",
  },
  {
    id: "CRYSTAL",
    name: "Crystal",
    color: MinecraftFormatting.LIGHT_PURPLE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.LIGHT_PURPLE],
    minimumLevel: 35,
    icon: {
      version: 1,
      material: "QUARTZ",
      typeId: 406,
      data: 0,
    },
    textIcon: "✵",
  },
  {
    id: "OPAL",
    name: "Opal",
    color: MinecraftFormatting.BLUE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.BLUE],
    minimumLevel: 40,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 3,
    },
    textIcon: "❣",
  },
  {
    id: "AMETHYST",
    name: "Amethyst",
    color: MinecraftFormatting.DARK_PURPLE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.DARK_PURPLE],
    minimumLevel: 45,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 3,
    },
    textIcon: "☯",
  },
  {
    id: "RAINBOW",
    name: "Rainbow",
    color: MinecraftFormatting.WHITE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.WHITE],
    minimumLevel: 50,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 3,
    },
    textIcon: "✺",
  },
  {
    id: "MYTHIC",
    name: "Mythic",
    color: MinecraftFormatting.WHITE,
    colorHex: MinecraftColorAsHex[MinecraftFormatting.WHITE],
    minimumLevel: 60,
    icon: {
      version: 1,
      material: "SKULL_ITEM",
      typeId: 397,
      data: 1,
    },
    textIcon: "ಠ_ಠ",
  },
];

/**
 * Returns a {@link SkyWarsPrestige} object for the level you supplied.
 * @param level The level of the player you are checking. TODO: obtain
 */
export function getSkyWarsPrestigeForLevel(level: number): SkyWarsPrestige {
  if (typeof level !== "number" || level < 1) {
    throw new TypeError("Not a valid level.");
  }
  return SkyWarsPrestiges.reduceRight(
    (acc, prestige) =>
      acc.id === "NONE" && level >= prestige.minimumLevel ? prestige : acc,
    SkyWarsPrestiges[0]
  );
}
