import { parse } from "../util/NBT";

/**
 * Array of inventory slots. If that slot is empty it will be null, otherwise it will be an object containing the data.
 */
export type NBTInventory = (NBTInventoryItem | null)[];

/**
 * The NBT information for a slot in the inventory you are reading.
 */
export interface NBTInventoryItem {
  /** Minecraft Item ID of this item. */
  id: number;
  /** Amount of items in this inventory slot. */
  Count: number;
  Damage: number;
  /** NBT tag data for this item. */
  tag?: NBTTag;
}

/**
 * If an inventory slot contains tag data, this interface describes possible values commonly seen in observations of the inventory data.
 */
export interface NBTTag {
  Unbreakable?: number;
  HideFlags?: number;
  display?: NBTDisplay;
  ExtraAttributes?: NBTExtraAttributes;
  ench?: NBTEnch[];
  SkullOwner?: NBTSkullOwner;
  CustomPotionEffects?: NBTCustomPotionEffect[];
}

/**
 * An extremely common {@link NBTTag} property containing the name and lore that show up when you hover over the item.
 */
export interface NBTDisplay {
  Lore?: string[];
  Name?: string;
  color?: number;
}

/**
 * Extra attributes that appear on extraAttributes property of the {@link NBTTag} property. Commonly used to describe items in more detail and their underlying settings.
 */
export interface NBTExtraAttributes {
  [key: string]:
    | string
    | number
    | number[]
    | { [name: string]: number }
    | NBTExtraAttributesPotionEffect[]
    | NBTInventory
    | undefined;
  id: string;
  uuid?: string;
  timestamp?: string;
  originTag?: string;
  modifier?: string;
  color?: string;
  anvil_uses?: number;
  /**
   * Each key is an enchantment type and the level. e.g. "telekinesis" or "impaling"
   */
  enchantments: {
    [name: string]: number;
  };
  hot_potato_count?: number;
  rarity_upgrades?: number;
  dungeon_item_level?: number;
  backpack_color?: string;
  runes?: { [name: string]: number };
  potion_level?: number;
  potion?: string;
  effects?: NBTExtraAttributesPotionEffect[];
  potion_type?: string;
  splash?: number;
  potion_name?: string;
  /** The contents of the backpack. */
  small_backpack_data?: NBTInventory;
  /** The contents of the backpack. */
  medium_backpack_data?: NBTInventory;
  /** The contents of the backpack. */
  large_backpack_data?: NBTInventory;
  /** The contents of the backpack. */
  greater_backpack_data?: NBTInventory;
  /** The contents of the backpack. */
  jumbo_backpack_data?: NBTInventory;
  /** The contents of the cake bag. */
  new_year_cake_bag_data?: NBTInventory;
}

/**
 * If the inventory item is a potion, this property will describe the effects of that potion.
 */
export interface NBTExtraAttributesPotionEffect {
  level: number;
  effect: string;
  duration_ticks: number;
}

/**
 * Basic enchantment information for the inventory item.
 */
export interface NBTEnch {
  id: number;
  lvl: number;
}

/**
 * If the {@link NBTInventoryItem} is a skull type this will describe it's skull information.
 */
export interface NBTSkullOwner {
  Id: string;
  Properties: {
    timestamp?: number;
    profileId?: number;
    profileName?: number;
    signatureRequired?: boolean;
    textures: {
      SKIN: {
        /** Minecraft CDN link to the texture. */
        url: string;
      };
    };
  } | null;
  /**
   * If the original textures array had more than 1 element, the first will appear under Properties and the remainder will appear in this array below.
   */
  ExtraProperties?: NonNullable<NBTSkullOwner["Properties"]>[];
}

/**
 * Generally shows up on SkyBlock unique potions.
 */
export interface NBTCustomPotionEffect {
  Ambient: number;
  Duration: number;
  Id: number;
  Amplifier: number;
}

/**
 * This helper will transform NBT data into a typed object using prismarine-nbt. It will also transform any backpacks/bags with item data so you can explore those as well.
 * @param value A Base64 item data string, NBT byte array, or buffer. If Deno, no Buffer but a Uint8Array is supported.
 * @category Helper
 */
export async function transformItemData(
  value: Parameters<typeof parse>[number]
): Promise<NBTInventory> {
  const data = await parse(value);
  return Promise.all(
    data.map(
      async (item): Promise<NBTInventory[number]> => {
        if (Object.entries(item).length === 0) {
          return null;
        }
        /* istanbul ignore else */
        if (item.tag) {
          if (item.tag.SkullOwner) {
            const skullOwner: {
              Properties: { textures: { Value: string }[] };
            } = item.tag.SkullOwner as never;
            const propertiesData = skullOwner.Properties.textures.shift();
            /* istanbul ignore else */
            if (propertiesData) {
              item.tag.SkullOwner.Properties = JSON.parse(
                Buffer.from(propertiesData.Value, "base64").toString()
              );
              /* istanbul ignore if */
              if (skullOwner.Properties.textures.length > 0) {
                item.tag.SkullOwner.ExtraProperties = skullOwner.Properties.textures.map(
                  ({ Value }) =>
                    JSON.parse(Buffer.from(Value, "base64").toString())
                );
              }
            } else {
              item.tag.SkullOwner.Properties = null;
            }
          }
          if (item.tag.ExtraAttributes) {
            const extraAttributes = item.tag
              .ExtraAttributes as NBTExtraAttributes;
            await Promise.all(
              Object.keys(extraAttributes).map(async (key) => {
                /* istanbul ignore if */
                if (
                  key.endsWith("_backpack_data") ||
                  key.endsWith("_bag_data")
                ) {
                  extraAttributes[key] = await transformItemData(
                    extraAttributes[key] as number[]
                  );
                }
              })
            );
          }
        }
        return item;
      }
    )
  );
}
