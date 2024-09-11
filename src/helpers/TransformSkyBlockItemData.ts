import type {
  SkyBlockProfileMember,
  MinecraftInventoryData,
} from "../types/AugmentedTypes";
import { NBTInventory, transformItemData } from "./TransformItemData";

/**
 * Interface used in the {@link SkyBlockProfileMemberWithTransformedInventories} intersection to describe the intellisense for the inventory after being transformed.
 */
export interface SkyBlockProfileTransformedInventories {
  inv_contents?: NBTInventory;
  ender_chest_contents?: NBTInventory;
  backpack_icons?: {
    [key: string]: NBTInventory;
  };
  backpack_contents?: {
    [key: string]: NBTInventory;
  };
  bag_contents?: {
    fishing_bag?: NBTInventory;
    potion_bag?: NBTInventory;
    talisman_bag?: NBTInventory;
    sacks_bag?: NBTInventory;
    quiver?: NBTInventory;
  };
  inv_armor?: NBTInventory;
  equipment_contents?: NBTInventory;
  personal_vault_contents?: NBTInventory;
  wardrobe_equipped_slots: number;
  sacks_counts: {
    [key: string]: number;
  };
  wardrobe_contents?: NBTInventory;
}

/**
 * This type is a intersection type omitting the default inventory types and including the transformed inventory types.
 */
export type SkyBlockProfileMemberWithTransformedInventories = Omit<
  SkyBlockProfileMember,
  "inventory"
> & {
  inventory: SkyBlockProfileTransformedInventories;
};

/** @internal */
const SKYBLOCK_INVENTORIES: [
  keyof SkyBlockProfileTransformedInventories,
  boolean
][] = [
  ["inv_contents", false],
  ["ender_chest_contents", false],
  ["backpack_icons", true],
  ["backpack_contents", true],
  ["bag_contents", true],
  ["inv_armor", false],
  ["equipment_contents", false],
  ["personal_vault_contents", false],
  ["wardrobe_contents", false],
];

/**
 * This helper will loop over all the possible inventories on a profile and run the {@link transformSkyBlockItemData} helper on them, returning the member object with the transformed properties.
 * @param member The profile member object that you want to transform the inventory data of.
 * @category Helper
 */
export async function transformSkyBlockProfileMemberInventories(
  member: SkyBlockProfileMember
): Promise<SkyBlockProfileMemberWithTransformedInventories> {
  const transformedMember: SkyBlockProfileMemberWithTransformedInventories = member as never;
  await Promise.all(
    SKYBLOCK_INVENTORIES.map(async ([key, hasKeys]) => {
      if (!hasKeys) {
        const inventoryData = transformedMember.inventory[
          key
        ] as MinecraftInventoryData;
        if (inventoryData && (inventoryData as MinecraftInventoryData).data) {
          try {
            transformedMember.inventory[key] = (await transformItemData(
              (inventoryData as MinecraftInventoryData).data
            )) as never;
          } catch (e) {
            /* istanbul ignore next */
            delete transformedMember.inventory[key];
          }
        }
      } else {
        const inventoryData = transformedMember.inventory[key] as Record<
          string,
          MinecraftInventoryData
        >;
        await Promise.all(
          Object.keys(inventoryData).map(async (subKey) => {
            if (inventoryData[subKey] && inventoryData[subKey].data) {
              try {
                (transformedMember.inventory[key] as never)[
                  subKey
                ] = (await transformItemData(
                  inventoryData[subKey].data
                )) as never;
              } catch (e) {
                /* istanbul ignore next */
                delete (transformedMember.inventory[key] as never)[subKey];
              }
            }
          })
        );
      }
    })
  );
  return transformedMember;
}
