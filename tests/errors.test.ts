import { expect } from "chai";
import { Client, InvalidKeyError } from "../src";

const invalidApiClient = new Client("1234");
const timeoutClient = new Client("1234", {
  timeout: 1,
  retries: 3,
  userAgent: "@test/client",
});

describe("Client throws invalid api key", function () {
  it("should throw invalid API key on construction", function () {
    try {
      new Client((123 as unknown) as string);
    } catch (e) {
      expect(e.message).to.equal("Invalid API key");
    }
  });
  it("should throw invalid API key on call", async function () {
    try {
      await invalidApiClient.guild.id("asda");
    } catch (e) {
      expect(e).to.be.instanceOf(InvalidKeyError);
    }
  });
});

describe("A timeout of 1 should throw configured timeout.", function () {
  it("should throw a Error", async function () {
    try {
      await timeoutClient.guild.id("asda");
    } catch (e) {
      expect(e).instanceOf(Error);
      expect(e.message).to.equal("Hit configured timeout.");
    }
  });
});