import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type {
  ResourcesSkyblockBingo,
  ResourcesSkyblockCollections,
  ResourcesSkyblockElection,
  ResourcesSkyblockItems,
  ResourcesSkyblockSkills,
} from "../../types/AugmentedTypes";

export class SkyBlockResources extends Method {
  /**
   * Information regarding the current bingo event and its goals.
   * @category API
   */
  public async bingo(): Promise<
    ResultObject<
      ResourcesSkyblockBingo,
      ["id", "name", "start", "end", "modifier", "goals"]
    >
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockBingo>(
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
    ResultObject<ResourcesSkyblockCollections, ["collections"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockCollections>(
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
    ResultObject<ResourcesSkyblockElection, ["mayor", "current"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockElection>(
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
    ResultObject<ResourcesSkyblockItems, ["items"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockItems>(
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
    ResultObject<ResourcesSkyblockSkills, ["skils"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockSkills>(
        "resources/skyblock/skills"
      ),
      ["skills"]
    );
  }
}
