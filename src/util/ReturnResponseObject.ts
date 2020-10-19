import type { Components } from "../types/api";

/** @internal */
export async function returnResponseObject<
  T extends Components.Schemas.ApiSuccess,
  K extends keyof T
>(response: T, key: K): Promise<T[K]> {
  if (key in response) {
    return response[key];
  }
  throw new Error(`Key "${key}" was not in the response.`);
}
