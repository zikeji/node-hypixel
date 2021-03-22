/**
 * An enum describing color names and their Minecraft format variants.
 */
export enum MinecraftFormatting {
  BLACK = "§0",
  DARK_BLUE = "§1",
  DARK_GREEN = "§2",
  DARK_AQUA = "§3",
  DARK_RED = "§4",
  DARK_PURPLE = "§5",
  GOLD = "§6",
  GRAY = "§7",
  DARK_GRAY = "§8",
  BLUE = "§9",
  GREEN = "§a",
  AQUA = "§b",
  RED = "§c",
  LIGHT_PURPLE = "§d",
  YELLOW = "§e",
  WHITE = "§f",
  BOLD = "§l",
  STRIKETHROUGH = "§m",
  UNDERLINE = "§n",
  ITALIC = "§o",
  RESET = "§r",
  MAGIC = "§k",
}

/**
 * An enum that'll let you you get a hex color code for a specific Minecraft color formatting sequence.
 */
export enum MinecraftColorAsHex {
  "§0" = "000000",
  "§1" = "0000AA",
  "§2" = "00AA00",
  "§3" = "00AAAA",
  "§4" = "AA0000",
  "§5" = "AA00AA",
  "§6" = "FFAA00",
  "§7" = "AAAAAA",
  "§8" = "555555",
  "§9" = "5555FF",
  "§a" = "55FF55",
  "§b" = "55FFFF",
  "§c" = "FF5555",
  "§d" = "FF55FF",
  "§e" = "FFFF55",
  "§f" = "FFFFFF",
}

/** @internal */
const REMOVE_FORMATTING_REGEX = /§[0-9a-flmnokr]/gi;

/**
 * This helper will take a string and remove any of Minecraft's formatting sequence. Useful when parsing item lore or similar elements.
 * @param value Any string with minecraft formatting.
 * @category Helper
 */
export function removeMinecraftFormatting(value: string): string {
  return value.replace(REMOVE_FORMATTING_REGEX, "");
}
