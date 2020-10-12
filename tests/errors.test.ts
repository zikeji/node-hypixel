import { expect } from "chai";
import { Client } from "../src";

describe("Throws invalid key?", function () {
  it("should throw invalid API key", function () {
    try {
      new Client((123 as unknown) as string);
    } catch (e) {
      expect(e.message).to.equal("Invalid API key");
    }
  });
});
