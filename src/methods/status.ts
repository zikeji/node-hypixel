import type { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { ResultObject, getResultObject } from "../util/ResultObject";

export class Status extends Method {
  /**
   * @inheritdoc
   */
  async uuid(
    uuid: Components.Parameters.PlayerUuid.Uuid
  ): Promise<ResultObject<Paths.Status.Get.Responses.$200, "session">> {
    return getResultObject(
      await this.client.call<Paths.Status.Get.Responses.$200>("status", {
        uuid,
      }),
      "session"
    ) as never;
  }
}
