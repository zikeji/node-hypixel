import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type {
  ResourcesSkyblockBingoResponse,
  ResourcesSkyblockCollectionsResponse,
  ResourcesSkyblockElectionResponse,
  ResourcesSkyblockItemsResponse,
  ResourcesSkyblockSkillsResponse,
} from "../../types/AugmentedTypes";

export class SkyBlockResources extends Method {
  /**
   * Information regarding the current bingo event and its goals.
   * @category API
   */
  public async bingo(): Promise<
    ResultObject<
      ResourcesSkyblockBingoResponse,
      ["id", "name", "start", "end", "modifier", "goals"]
    >
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockBingoResponse>(
        "resources/skyblock/bingo"
      ),
      ["id", "name", "start", "end", "modifier", "goals"]
    );
  }

  /**
   * Returns the list of ingame collections.
   * @category API
   */
  public async collections(): Promise<
    ResultObject<ResourcesSkyblockCollectionsResponse, ["collections"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockCollectionsResponse>(
        "resources/skyblock/collections"
      ),
      ["collections"]
    );
  }

  /**
   * Information regarding the current mayor and ongoing election in SkyBlock.
   * @category API
   */
  public async election(): Promise<
    ResultObject<ResourcesSkyblockElectionResponse, ["mayor", "current"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockElectionResponse>(
        "resources/skyblock/election"
      ),
      ["mayor", "current"]
    );
  }

  /**
   * Returns the current items from the SkyBlock gamemode.
   * @category API
   */
  public async items(): Promise<
    ResultObject<ResourcesSkyblockItemsResponse, ["items"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockItemsResponse>(
        "resources/skyblock/items"
      ),
      ["items"]
    );
  }

  /**
   * Returns the current skills from the SkyBlock gamemode.
   * @category API
   */
  public async skills(): Promise<
    ResultObject<ResourcesSkyblockSkillsResponse, ["skills"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockSkillsResponse>(
        "resources/skyblock/skills"
      ),
      ["skills"]
    );
  }
}
