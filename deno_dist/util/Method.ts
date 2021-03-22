import { BaseClient } from "./BaseClient.ts";

/** @internal */
export abstract class Method {
  /** @internal */
  protected client: BaseClient;

  /** @internal */
  constructor(client: BaseClient) {
    this.client = client;
  }
}
