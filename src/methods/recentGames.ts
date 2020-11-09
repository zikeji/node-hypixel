import type { Components, Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultArray, ResultArray } from "../util/ResultArray";

export class RecentGames extends Method {
  async uuid(
    uuid: Components.Parameters.PlayerUuidRequired.Uuid
  ): Promise<ResultArray<Paths.RecentGames.Get.Responses.$200, "games">> {
    return getResultArray(
      await this.client.call<Paths.RecentGames.Get.Responses.$200>(
        "recentGames",
        {
          uuid,
        }
      ),
      "games"
    );
  }
}
