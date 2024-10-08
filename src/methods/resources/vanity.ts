import { Method } from "../../util/Method";
import { getResultObject, ResultObject } from "../../util/ResultObject";
import type {
  ResourcesVanityCompanionsResponse,
  ResourcesVanityPetsResponse,
} from "../../types/AugmentedTypes";

/**
 * @example
 * ```typescript
 * const bingo = await client.resources.vanity.companions();
 * ```
 * @category Client
 */
export class VanityResources extends Method {
  /**
   * Retrieve a list of vanity companions.
   * @example
   * ```typescript
   * const companions = await client.resources.vanity.companions();
   * ```
   * @category API
   */
  public async companions(): Promise<
    ResultObject<ResourcesVanityCompanionsResponse, ["success", "lastUpdated"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesVanityCompanionsResponse>(
        "resources/vanity/companions"
      ),
      ["success", "lastUpdated"]
    );
  }

  /**
   * Retrieve a list of vanity pets.
   * @example
   * ```typescript
   * const pets = await client.resources.vanity.pets();
   * ```
   * @category API
   */
  public async pets(): Promise<
    ResultObject<ResourcesVanityPetsResponse, ["success", "lastUpdated"]>
  > {
    return getResultObject(
      await this.client.call<ResourcesVanityPetsResponse>(
        "resources/vanity/pets"
      ),
      ["success", "lastUpdated"]
    );
  }
}
