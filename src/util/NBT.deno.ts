/* istanbul ignore file */
import { toUint8Array } from "https://denopkg.com/chiefbiiko/base64/mod.ts";
import {
  parse as nbtParse,
  simplify,
} from "https://deno.land/x/nbt_parser@v1.3.0/index.ts";
import type { NBTInventoryItem } from "../helpers/TransformItemData.ts";

export async function parse(
  value: Uint8Array | number[] | string
): Promise<NBTInventoryItem[]> {
  let uint8array: Uint8Array;
  if (value instanceof Uint8Array) {
    uint8array = value;
  } else if (Array.isArray(value)) {
    uint8array = Uint8Array.from(value);
  } else {
    uint8array = toUint8Array(value);
  }

  return simplify(nbtParse(uint8array).value.i as never);
}
