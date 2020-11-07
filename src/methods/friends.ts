import type { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultArray, ResultArray } from "../util/ResultArray";

export class Friends extends Method {
  /**
   * @inheritdoc
   */
  async uuid(
    uuid: Components.Parameters.PlayerUuid.Uuid
  ): Promise<ResultArray<Paths.Friends.Get.Responses.$200, "records">> {
    return getResultArray(
      await this.client.call<Paths.Friends.Get.Responses.$200>("friends", {
        uuid,
      }),
      "records"
    ) as never;
  }
}
