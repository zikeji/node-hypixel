import type { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { returnResponseObject } from "../util/ReturnResponseObject";

export class Status extends Method {
  async uuid(
    uuid: Paths.Status.Get.Parameters.Uuid
  ): Promise<Components.Schemas.Session> {
    return returnResponseObject(
      await this.client.call<Paths.Status.Get.Responses.$200>("status", {
        uuid,
      }),
      "session"
    );
  }
}
