// @deno-types="../types/api.ts"
import type { Components, Paths } from "../types/api";
// @deno-types="../util/Method.ts"
import { Method } from "../util/Method";
// @deno-types="../util/ResultArray.ts"
import { getResultArray, ResultArray } from "../util/ResultArray";

export class Friends extends Method {
  /**
   * Returns friendships for given player.
   * @example
   * ```typescript
   * const friends = await client.friends.uuid("20934ef9488c465180a78f861586b4cf");
   * console.log(friends);
   * ```
   * @category API
   */
  public async uuid(
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
