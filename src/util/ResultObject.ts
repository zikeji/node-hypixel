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
  K extends (keyof T)[]
> = (T[K[number]] extends string | number | boolean
  ? Omit<T, K[number]>
  : T[K[number]]) & {
  meta: (T[K[number]] extends string | number | boolean
    ? Pick<T, K[number]>
    : Omit<T, K[number]>) & {
    ratelimit: RateLimitData;
  };
};

/** @hidden */
export function getResultObject<
  T extends Components.Schemas.ApiSuccess,
  K extends (keyof T)[]
>(response: T, keys: K): ResultObject<T, K> {
  if (!keys.every((key) => key in response)) {
    throw new TypeError(
      `One or more key in "${keys.join('"," ')}" was not in the response.`
    );
  }

  const obj: ResultObject<T, K> = {} as ResultObject<T, K>;
  const { ratelimit } = (response as never) as { ratelimit: RateLimitData };
  const meta: Record<string | number | symbol, unknown> = {
    ratelimit,
  };

  let assignedMeta = false;
  keys.forEach((key) => {
    const value = response[key];

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean"
    ) {
      delete response[key];
      assignedMeta = true;
      meta[key] = value;
    }
  });

  if (assignedMeta) {
    // we want the remainder merged into the object.
    Object.assign(obj, response);
    Object.defineProperty(obj, "meta", {
      enumerable: false,
      value: meta,
    });
    return obj;
  }

  // we want all the keys merged with the root and the remainder assigned to meta.
  keys.forEach((key) => {
    Object.assign(obj, response[key]);
    delete response[key];
  });
  Object.assign(meta, response);
  Object.defineProperty(obj, "meta", {
    enumerable: false,
    value: meta,
  });
  return obj;
}
