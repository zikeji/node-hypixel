import { DefaultMeta } from "../types/DefaultMeta";
import { Components } from "../types/api";

/**
 * Generic intersection type for result arrays to include metadata as a non-enumerable property.
 * @example
 * ```typescript
 * const result = await client.skyblock.news();
 * console.log(result);
 * // (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
 * console.log(result.meta)
 * // {success: true}
 * ```
 */
export type ResultArray<
  T extends Components.Schemas.ApiSuccess,
  K extends keyof T
> = T[K] & {
  meta: Omit<T, K> & DefaultMeta;
};

/** @hidden */
export function getResultArray<
  T extends Components.Schemas.ApiSuccess,
  K extends keyof T
>(response: T & DefaultMeta, key: K): ResultArray<T, K> {
  const clonedResponse: typeof response = JSON.parse(JSON.stringify(response));
  if (!(key in clonedResponse)) {
    throw new TypeError(`Key "${key}" was not in the response.`);
  }
  const items = clonedResponse[key];
  const { ratelimit, cached, cloudflareCache } = clonedResponse;
  if (!Array.isArray(items)) {
    throw new TypeError(`Key "${key}" is not an array.`);
  }
  delete clonedResponse[key];
  const arr = ([...items] as never) as ResultArray<T, K>;
  const meta: Omit<T, K> & DefaultMeta = {
    ...clonedResponse,
  };
  if (cached) {
    meta.cached = true;
  }
  if (cloudflareCache) {
    meta.cloudflareCache = cloudflareCache;
  }
  if (ratelimit) {
    if (
      !cached &&
      (!meta.cloudflareCache || meta.cloudflareCache.status !== "HIT")
    ) {
      meta.ratelimit = ratelimit;
    }
  }
  Object.defineProperty(arr, "meta", {
    enumerable: false,
    value: meta,
  });
  return arr;
}
