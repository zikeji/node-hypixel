import type { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { ResultObject, getResultObject } from "../util/ResultObject";

export class Player extends Method {
  async uuid(
    uuid: Components.Parameters.PlayerUuid.Uuid
  ): Promise<ResultObject<Paths.Player.Get.Responses.$200, ["player"]>> {
    return getResultObject(
      await this.client.call<Paths.Player.Get.Responses.$200>("player", {
        uuid,
      }),
      ["player"]
    ) as never;
  }
}
