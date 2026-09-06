import { Components } from "../../api";

export type SkyBlockAuction = Omit<
  Components.Schemas.SkyBlockAuction,
  "item_bytes"
> & {
  bin?: boolean;
  categories?: string[];
  item_uuid?: string;
  last_updated?: number;
  item_bytes?: string;
};
