import type { Components } from "../../types/api";
import { Method } from "../../util/Method";
import { returnResponseObject } from "../../util/ReturnResponseObject";

export class GuildsResources extends Method {
  async achievements(): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>(
        "resources/guilds/achievements"
      ),
      "success"
    );
  }

  async permissions(): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>(
        "resources/guilds/permissions"
      ),
      "success"
    );
  }
}
