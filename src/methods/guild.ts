import { Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultObject, ResultObject } from "../util/ResultObject";

export class Guild extends Method {
  /**
   * Returns the guild by the requested ID if found.
   * @example
   * ```typescript
   * const { guild } = await client.guild.id("553490650cf26f12ae5bac8f");
   * ```
   */
  async id(
    id: Paths.Guild.Get.Parameters.Id
  ): Promise<ResultObject<Paths.Guild.Get.Responses.$200, "success">> {
    return getResultObject(
      await this.client.call<Paths.Guild.Get.Responses.$200>("guild", {
        id,
      }),
      "success"
    ) as never;
  }

  /**
   * Returns the guild by the requested player's UUID if found.
   * @example
   * ```typescript
   * const { guild } = await client.guild.player("20934ef9488c465180a78f861586b4cf");
   * ```
   */
  async player(
    player: Paths.Guild.Get.Parameters.Player
  ): Promise<ResultObject<Paths.Guild.Get.Responses.$200, "success">> {
    return getResultObject(
      await this.client.call<Paths.Guild.Get.Responses.$200>("guild", {
        player,
      }),
      "success"
    ) as never;
  }

  /**
   * Returns the guild by the requested guild name if found.
   * @example
   * ```typescript
   * const { guild } = await client.guild.name("Mini Squid");
   * ```
   */
  async name(
    name: Paths.Guild.Get.Parameters.Name
  ): Promise<ResultObject<Paths.Guild.Get.Responses.$200, "success">> {
    return getResultObject(
      await this.client.call<Paths.Guild.Get.Responses.$200>("guild", {
        name,
      }),
      "success"
    ) as never;
  }
}
