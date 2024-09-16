import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type {
  ResourcesSkyblockBingoResponse,
  ResourcesSkyblockCollectionsResponse,
  ResourcesSkyblockElectionResponse,
  ResourcesSkyblockItemsResponse,
  ResourcesSkyblockSkillsResponse,
} from "../../types/AugmentedTypes";
import { getResultArray, ResultArray } from "../../util/ResultArray";

/**
 * @example
 * ```typescript
 * const achievements = await client.resources.achievements();
 * ```
 * @category Client
 */
export class SkyBlockResources extends Method {
  /**
   * Information regarding the current bingo event and its goals.
   * @example
   * ```typescript
   * const bingo = await client.resources.skyblock.bingo();
   * ```
   * @category API
   */
  public async bingo(): Promise<
    ResultObject<ResourcesSkyblockBingoResponse, ["success", "lastUpdated"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockBingoResponse>(
        "resources/skyblock/bingo"
      ),
      ["success", "lastUpdated"]
    );
  }

  /**
   * Returns the list of ingame collections.
   * @example
   * ```typescript
   * const collections = await client.resources.skyblock.collections();
   * console.log(collections.FARMING);
   * ```
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
   * @example
   * ```typescript
   * const electionInfo = await client.resources.skyblock.election();
   * ```
   * @category API
   */
  public async election(): Promise<
    ResultObject<ResourcesSkyblockElectionResponse, ["success", "lastUpdated"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesSkyblockElectionResponse>(
        "resources/skyblock/election"
      ),
      ["success", "lastUpdated"]
    );
  }

  /**
   * Returns the current items from the SkyBlock gamemode.
   * @example
   * ```typescript
   * const items = await client.resources.skyblock.items();
   * ```
   * @category API
   */
  public async items(): Promise<
    ResultArray<ResourcesSkyblockItemsResponse, "items">
  > {
    return getResultArray(
      await this.client.call<ResourcesSkyblockItemsResponse>(
        "resources/skyblock/items"
      ),
      "items"
    );
  }

  /**
   * Returns the current skills from the SkyBlock gamemode.
   * @example
   * ```typescript
   * const skills = await client.resources.skyblock.skills();
   * ```
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
