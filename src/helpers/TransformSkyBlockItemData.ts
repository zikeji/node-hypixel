import { Components } from "../types/api";
import { NBTInventory, transformItemData } from "./TransformItemData";

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
        transformedMember[key] = await transformItemData(inventoryData.data);
      }
    })
  );
  return transformedMember;
}
