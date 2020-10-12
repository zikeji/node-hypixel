import { expect } from "chai";
import { HypixelSkyBlock } from "../src";

describe("Throws invalid key?", function () {
  it("should throw invalid API key", function () {
    try {
      new HypixelSkyBlock((123 as unknown) as string);
    } catch (e) {
      expect(e.message).to.equal("Invalid API key");
    }
  });
});
