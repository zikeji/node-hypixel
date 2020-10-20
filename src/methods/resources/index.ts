import { Method } from "../../util/Method";
import { GuildsResources } from "./guilds";
import { SkyBlockResources } from "./skyblock";

export class Resources extends Method {
  // async achievements(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>(
  //       "resources/achievements"
  //     ),
  //     "success"
  //   );
  // }

  // async challenges(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>(
  //       "resources/challenges"
  //     ),
  //     "success"
  //   );
  // }

  public guilds: GuildsResources = new GuildsResources(this.client);

  public skyblock: SkyBlockResources = new SkyBlockResources(this.client);

  // async quests(): Promise<boolean> {
  //   return returnResponseObject(
  //     await this.client.call<Components.Schemas.ApiSuccess>("resources/quests"),
  //     "success"
  //   );
  // }
}
