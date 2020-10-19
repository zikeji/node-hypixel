import type { Components } from "../types/api";
import { Method } from "../util/Method";
import { returnResponseObject } from "../util/ReturnResponseObject";

export class Guild extends Method {
  async id(id: string): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>("guild", { id }),
      "success"
    );
  }

  async player(player: string): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>("guild", {
        player,
      }),
      "success"
    );
  }

  async name(name: string): Promise<boolean> {
    return returnResponseObject(
      await this.client.call<Components.Schemas.ApiSuccess>("guild", { name }),
      "success"
    );
  }
}
