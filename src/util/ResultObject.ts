import { DefaultMeta } from "../types/DefaultMeta";

/**
 * A utility to properly Omit in newer Typescript
 * @internal
 */
type OmitRespectingRemapping<T, K extends PropertyKey> = {
  [P in keyof T as Exclude<P, K>]: T[P];
};

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
  T extends Record<string, unknown>,
  K extends (keyof T)[],
  // if this is true, the object won't omit/pick anything
  B extends true | void = void
> = (B extends true
  ? T
  : T[K[number]] extends string | number | boolean | undefined
  ? OmitRespectingRemapping<T, K[number]>
  : T[K[number]]) & {
  meta: B extends true
    ? DefaultMeta
    : (T[K[number]] extends string | number | boolean | undefined
        ? Pick<T, K[number]>
        : OmitRespectingRemapping<T, K[number]>) &
        DefaultMeta;
};

/** @hidden */
export function getResultObject<
  T,
  K extends (keyof T)[],
  B extends true | void = void
>(
  response: T & DefaultMeta,
  keys?: K
): ResultObject<T & Record<string, unknown>, K, B> {
  const clonedResponse: typeof response = JSON.parse(JSON.stringify(response));
  if (!(keys ?? []).every((key) => key in clonedResponse)) {
    throw new TypeError(
      `One or more key in "${(keys ?? []).join(
        '"," '
      )}" was not in the response.`
    );
  }

  const obj: ResultObject<
    T & Record<string, unknown>,
    K,
    B
  > = {} as ResultObject<T & Record<string, unknown>, K, B>;
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
  (keys ?? []).forEach((key) => {
    const value = clonedResponse[key];

    if (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "undefined"
    ) {
      delete clonedResponse[key];
      assignedMeta = true;
      meta[key] = value;
    }
  });

  if ((keys ?? []).length === 0 || assignedMeta) {
    // we want the remainder merged into the object.
    Object.assign(obj, clonedResponse);
    Object.defineProperty(obj, "meta", {
      enumerable: false,
      value: meta,
    });
    return obj;
  }

  // we want all the keys merged with the root and the remainder assigned to meta.
  (keys ?? []).forEach((key) => {
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
