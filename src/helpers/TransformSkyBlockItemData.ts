import { Components } from "../types/api";

/**
 * Array of inventory slots. If that slot is empty it will be null, otherwise it will be an object containing the data.
 */
export type NBTInventory = (NBTInventoryItem | null)[];

export interface NBTInventoryItem {
  /** Minecraft Item ID of this item. */
  id: number;
  /** Amount of items in this inventory slot. */
  Count: number;
  Damage: number;
  /** NBT tag data for this item. */
  tag: NBTTag;
}

export interface NBTTag {
  Unbreakable?: number;
  HideFlags: number;
  display: NBTDisplay;
  ExtraAttributes?: NBTExtraAttributes;
  ench?: NBTEnch[];
  SkullOwner?: NBTSkullOwner;
  CustomPotionEffects?: NBTCustomPotionEffect[];
}

export interface NBTDisplay {
  Lore: string[];
  Name: string;
  color?: number;
}

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

export interface NBTExtraAttributesPotionEffect {
  level: number;
  effect: string;
  duration_ticks: number;
}

export interface NBTEnch {
  id: number;
  lvl: number;
}

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

export interface NBTCustomPotionEffect {
  Ambient: number;
  Duration: number;
  Id: number;
  Amplifier: number;
}

/**
 * This helper will transform NBT data into a typed object using prismarine-nbt. It will also transform any backpacks/bags with item data so you can explore those as well.
 * @param value A Base64 item data string, NBT byte array, or buffer.
 */
export async function transformSkyBlockItemData(
  value: number[] | string | Buffer
): Promise<NBTInventory> {
  let nbt: typeof import("prismarine-nbt");
  try {
    nbt = await import("prismarine-nbt");
  } catch (e) {
    /* istanbul ignore next */
    throw new Error("prismarine-nbt must be installed to use this helper");
  }
  let buffer: Buffer;
  if (Buffer.isBuffer(value)) {
    buffer = value;
  } else {
    buffer = Array.isArray(value)
      ? Buffer.from(value)
      : Buffer.from(value, "base64");
  }
  const rawNBT: Parameters<
    Parameters<typeof nbt.parse>[1]
  >[1] = await new Promise((resolve, reject) =>
    nbt.parse(buffer, (err, nbtData) => {
      /* istanbul ignore if */
      if (err) {
        return reject(err);
      }
      return resolve(nbtData);
    })
  );
  const data: NBTInventoryItem[] = nbt.simplify(rawNBT.value.i);
  return Promise.all(
    data.map(
      async (item): Promise<NBTInventory[number]> => {
        if (Object.entries(item).length === 0 || !item.tag.ExtraAttributes) {
          return null;
        }
        /* istanbul ignore else */
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
        await Promise.all(
          Object.keys(item.tag.ExtraAttributes).map(async (key) => {
            /* istanbul ignore if */
            if (!item.tag.ExtraAttributes) return;
            if (key.endsWith("_backpack_data") || key.endsWith("_bag_data")) {
              item.tag.ExtraAttributes[key] = await transformSkyBlockItemData(
                item.tag.ExtraAttributes[key] as number[]
              );
            }
          })
        );
        return item;
      }
    )
  );
}

export interface SkyBlockProfileTransformedInventories {
  inv_armor: NBTInventory;
  candy_inventory_contents?: NBTInventory;
  ender_chest_contents?: NBTInventory;
  fishing_bag?: NBTInventory;
  inv_contents?: NBTInventory;
  potion_bag?: NBTInventory;
  quiver?: NBTInventory;
  talisman_bag?: NBTInventory;
  wardrobe_contents?: NBTInventory;
}

export type SkyBlockProfileMemberWithTransformedInventories = Omit<
  Components.Schemas.SkyBlockProfileMember,
  keyof SkyBlockProfileTransformedInventories
> &
  SkyBlockProfileTransformedInventories;

const SKYBLOCK_INVENTORIES: (keyof SkyBlockProfileTransformedInventories)[] = [
  "inv_armor",
  "candy_inventory_contents",
  "ender_chest_contents",
  "fishing_bag",
  "inv_contents",
  "potion_bag",
  "quiver",
  "talisman_bag",
  "wardrobe_contents",
];

/**
 * This helper will loop over all the possible inventories on a profile and run the {@link transformSkyBlockItemData} helper on them, returning the member object with the transformed properties.
 * @param member The profile member object that you want to transform the inventory data of.
 */
export async function transformSkyBlockProfileMemberInventories(
  member: Components.Schemas.SkyBlockProfileMember
): Promise<SkyBlockProfileMemberWithTransformedInventories> {
  const transformedMember: SkyBlockProfileMemberWithTransformedInventories = member as never;
  await Promise.all(
    SKYBLOCK_INVENTORIES.map(async (key) => {
      const inventoryData: Components.Schemas.SkyBlockProfileInventoryData = transformedMember[
        key
      ] as never;
      if (inventoryData && inventoryData.data) {
        transformedMember[key] = await transformSkyBlockItemData(
          inventoryData.data
        );
      }
    })
  );
  return transformedMember;
}
