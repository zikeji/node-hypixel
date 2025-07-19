import type { Components } from "../../api";
import { MinecraftInventoryData } from "../../AugmentedTypes";

export type SkyBlockMuseumItem = {
  donated_time: number;
  featured_slot: string;
  borrowing?: boolean;
  items: MinecraftInventoryData;
};

/** augment the typing of items / special */
export type SkyBlockMuseumMember = Omit<
  Components.Schemas.SkyBlockMuseum,
  "items"
> & {
  items?: {
    [key: string]: SkyBlockMuseumItem | undefined;
  };
  special?: SkyBlockMuseumItem[];
};
