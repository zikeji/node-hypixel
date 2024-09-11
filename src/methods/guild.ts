import { Paths } from "../types/api";
import { Method } from "../util/Method";
import { getResultObject, ResultObject } from "../util/ResultObject";
import type { GuildResponse } from "../types/AugmentedTypes";

export class Guild extends Method {
  /**
   * Returns the guild by the requested ID if found.
   * @example
   * ```typescript
   * const guild = await client.guild.id("553490650cf26f12ae5bac8f");
   * ```
   * @category API
   */
  public async id(
    id: Paths.V2Guild.Get.Parameters.Id
  ): Promise<ResultObject<GuildResponse, ["guild"]>> {
    return getResultObject(
      await this.client.call<GuildResponse>("guild", {
        id,
      }),
      ["guild"]
    );
  }

  /**
   * Returns the guild by the requested player's UUID if found.
   * @example
   * ```typescript
   * const guild = await client.guild.player("20934ef9488c465180a78f861586b4cf");
   * ```
   * @category API
   */
  public async player(
    player: Paths.V2Guild.Get.Parameters.Player
  ): Promise<ResultObject<GuildResponse, ["guild"]>> {
    return getResultObject(
      await this.client.call<GuildResponse>("guild", {
        player,
      }),
      ["guild"]
    );
  }

  /**
   * Returns the guild by the requested guild name if found.
   * @example
   * ```typescript
   * const guild = await client.guild.name("Mini Squid");
   * ```
   * @category API
   */
  public async name(
    name: Paths.V2Guild.Get.Parameters.Name
  ): Promise<ResultObject<GuildResponse, ["guild"]>> {
    return getResultObject(
      await this.client.call<GuildResponse>("guild", {
        name,
      }),
      ["guild"]
    );
  }
}
