import { Paths } from "../types/api";
import { Method } from "../util/Method";
import { ResultObject, getResultObject } from "../util/ResultObject";
import type { StatusResponse } from "../types/AugmentedTypes";

/**
 * @category Client
 */
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
    uuid: Paths.V2Status.Get.Parameters.Uuid
  ): Promise<ResultObject<StatusResponse, ["session"]>> {
    return getResultObject(
      await this.client.call<StatusResponse>("status", {
        uuid,
      }),
      ["session"]
    );
  }
}
