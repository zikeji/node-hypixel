import { APIResponse } from "./APIResponse";

/** @internal */
export interface ActionableCall<T extends APIResponse> {
  execute: () => Promise<T>;
  retries: number;
}
