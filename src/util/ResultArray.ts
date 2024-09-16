import { DefaultMeta } from "../types/DefaultMeta";

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
  T extends Record<string, unknown>,
  K extends keyof T
> = T[K] & {
  meta: Omit<T, K> & DefaultMeta;
};

/** @hidden */
export function getResultArray<
  T extends Record<string, unknown>,
  K extends keyof T
>(response: T & DefaultMeta, key: K): ResultArray<T, K> {
  const clonedResponse: typeof response = JSON.parse(JSON.stringify(response));
  if (!(key in clonedResponse)) {
    throw new TypeError(`Key "${String(key)}" was not in the response.`);
  }
  let items = clonedResponse[key];
  const { ratelimit, cached, cloudflareCache } = clonedResponse;
  if (!Array.isArray(items)) {
    if (items !== null) {
      throw new TypeError(
        `Key "${String(key)}" has an unexpected type ${typeof items}.`
      );
    }
    items = [] as never;
  }
  delete clonedResponse[key];
  const arr = [...(items as never[])] as ResultArray<T, K>;
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

export type FlatResultArray<T> = T & {
  meta: DefaultMeta;
};

/** @hidden */
export function getFlatResultArray<T>(
  response: T & DefaultMeta
): FlatResultArray<T> {
  if (!Array.isArray(response)) {
    throw new TypeError(`Response was not an array!`);
  }
  const { ratelimit, cached, cloudflareCache } = response;
  delete response.ratelimit;
  delete response.cached;
  delete response.cloudflareCache;
  const meta: DefaultMeta = {};
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
  Object.defineProperty(response, "meta", {
    enumerable: false,
    value: meta,
  });
  return response as never;
}
