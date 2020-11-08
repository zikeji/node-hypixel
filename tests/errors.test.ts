import { expect } from "chai";
import { Agent } from "https";
import { Client, InvalidKeyError } from "../src";
import { GenericHTTPError } from "../src/errors/GenericHTTPError";
import { getResultArray } from "../src/util/ResultArray";
import { getResultObject } from "../src/util/ResultObject";

const client = new Client(process.env.HYPIXEL_KEY || "");
const invalidApiClient = new Client("1234");
const timeoutClient = new Client(process.env.HYPIXEL_KEY || "", {
  timeout: 1,
  retries: 3,
  userAgent: "@test/client",
  agent: new Agent({ timeout: 1 }),
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

describe("Getting a guild by an invalid guild ID", function () {
  this.timeout(30000);
  this.slow(1000);
  it("should throw a GenericHTTPError", async function () {
    try {
      await client.guild.id("asda");
    } catch (e) {
      expect(e).instanceOf(GenericHTTPError);
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

describe("getResultObject throws", function () {
  it("should throw key not in response", function () {
    try {
      getResultObject({ success: true }, ["test" as never]);
    } catch (e) {
      expect(e.message).to.equal(
        'One or more key in "test" was not in the response.'
      );
    }
  });
});

describe("getResultArray throws", function () {
  it("should throw key not in response", function () {
    try {
      getResultArray({ success: true }, ("test" as unknown) as "success");
    } catch (e) {
      expect(e.message).to.equal('Key "test" was not in the response.');
    }
  });

  it("should throw key is not an array", function () {
    try {
      getResultArray({ success: true }, "success");
    } catch (e) {
      expect(e.message).to.equal('Key "success" is not an array.');
    }
  });
});
