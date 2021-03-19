// @deno-types="../Client.ts"
import type { Client } from "../Client";

/** @internal */
export abstract class Method {
  /** @internal */
  protected client: Client;

  /** @internal */
  constructor(client: Client) {
    this.client = client;
  }
}
