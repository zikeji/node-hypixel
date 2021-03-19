// @deno-types="../types/api.ts"
import type { Components, Paths } from "../types/api";
// @deno-types="../util/Method.ts"
import { Method } from "../util/Method";
// @deno-types="../util/ResultObject.ts"
import { ResultObject, getResultObject } from "../util/ResultObject";

export class Status extends Method {
  /**
   * Returns online status information for given player, including game, mode and map when available.
   * @example
   * ```typescript
   * const response = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(response);
   * ```
   * @category API
   */
  public async uuid(
    uuid: Components.Parameters.PlayerUuid.Uuid
  ): Promise<ResultObject<Paths.Status.Get.Responses.$200, ["session"]>> {
    return getResultObject(
      await this.client.call<Paths.Status.Get.Responses.$200>("status", {
        uuid,
      }),
      ["session"]
    ) as never;
  }
}
