// @deno-types="./BaseClient.ts"
import { BaseClient } from "./BaseClient";

/** @internal */
export abstract class Method {
  /** @internal */
  protected client: BaseClient;

  /** @internal */
  constructor(client: BaseClient) {
    this.client = client;
  }
}
