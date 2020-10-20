import type { RateLimitData } from "../Client";
import type { Components } from "../types/api";

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
  K extends keyof T
> = (T[K] extends string | number | boolean ? Omit<T, K> : T[K]) & {
  meta: (T[K] extends string | number | boolean ? Pick<T, K> : Omit<T, K>) & {
    ratelimit: RateLimitData;
  };
};

/** @hidden */
export function getResultObject<
  T extends Components.Schemas.ApiSuccess,
  K extends keyof T
>(response: T, key: K): ResultObject<T, K> {
  if (!(key in response)) {
    throw new TypeError(`Key "${key}" was not in the response.`);
  }
  const obj: ResultObject<T, K> = {} as ResultObject<T, K>;
  const items = response[key];
  const { ratelimit } = (response as never) as { ratelimit: RateLimitData };
  if (typeof items !== "object") {
    // we just want a single property (the key)
    const meta: Record<string | number | symbol, unknown> = {};
    meta[key] = response[key];
    meta.ratelimit = ratelimit;
    Object.defineProperty(obj, "meta", {
      enumerable: false,
      value: meta,
    });
    delete response[key];
    Object.assign(obj, response);
    return obj;
  }

  // we want all remaining properties
  delete response[key];
  Object.assign(obj, items);
  Object.defineProperty(obj, "meta", {
    enumerable: false,
    value: { ...response, ratelimit },
  });
  return obj;
}
