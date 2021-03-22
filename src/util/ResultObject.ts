import { DefaultMeta } from "../types/DefaultMeta";
import { Components } from "../types/api";

/**
 * Generic intersection type for result objects to include metadata as a non-enumerable property.
 * @example
 * ```typescript
 * const result = await client.watchdogstats();
 * console.log(result);
 * // {watchdog_lastMinute: 1, staff_rollingDaily: 2609, watchdog_total: 5591714, watchdog_rollingDaily: 4213, …}
 * console.log(result.meta)
 * // {success: true}
 * ```
 */
export type ResultObject<
  T extends Components.Schemas.ApiSuccess,
  K extends (keyof T)[]
> = (T[K[number]] extends string | number | boolean
  ? Omit<T, K[number]>
  : T[K[number]]) & {
  meta: (T[K[number]] extends string | number | boolean
    ? Pick<T, K[number]>
    : Omit<T, K[number]>) &
    DefaultMeta;
};

/** @hidden */
export function getResultObject<
  T extends Components.Schemas.ApiSuccess,
  K extends (keyof T)[]
>(response: T & DefaultMeta, keys: K): ResultObject<T, K> {
  const clonedResponse: typeof response = JSON.parse(JSON.stringify(response));
  if (!keys.every((key) => key in clonedResponse)) {
    throw new TypeError(
      `One or more key in "${keys.join('"," ')}" was not in the response.`
    );
  }

  const obj: ResultObject<T, K> = {} as ResultObject<T, K>;
  const { ratelimit, cached, cloudflareCache } = clonedResponse;
  const meta: DefaultMeta & Record<string | number | symbol, unknown> = {};
  if (cached) {
    meta.cached = true;
    delete clonedResponse.cached;
  }
  if (cloudflareCache) {
    meta.cloudflareCache = cloudflareCache;
    delete clonedResponse.cloudflareCache;
  }
  if (ratelimit) {
    if (
      !cached &&
      (!meta.cloudflareCache || meta.cloudflareCache.status !== "HIT")
    ) {
      meta.ratelimit = ratelimit;
    }
    delete clonedResponse.ratelimit;
  }

  let assignedMeta = false;
  keys.forEach((key) => {
    const value = clonedResponse[key];

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      delete clonedResponse[key];
      assignedMeta = true;
      meta[key] = value;
    }
  });

  if (assignedMeta) {
    // we want the remainder merged into the object.
    Object.assign(obj, clonedResponse);
    Object.defineProperty(obj, "meta", {
      enumerable: false,
      value: meta,
    });
    return obj;
  }

  // we want all the keys merged with the root and the remainder assigned to meta.
  keys.forEach((key) => {
    Object.assign(obj, clonedResponse[key]);
    delete clonedResponse[key];
  });
  Object.assign(meta, clonedResponse);
  Object.defineProperty(obj, "meta", {
    enumerable: false,
    value: meta,
  });
  return obj;
}
