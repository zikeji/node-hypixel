import { expect } from "chai";
import { Client } from "../src";
import { getResultArray } from "../src/util/ResultArray";
import { getResultObject } from "../src/util/ResultObject";

describe("Client throws invali api key", function () {
  it("should throw invalid API key", function () {
    try {
      new Client((123 as unknown) as string);
    } catch (e) {
      expect(e.message).to.equal("Invalid API key");
    }
  });
});

describe("getResultObject throws", function () {
  it("should throw key not in response", function () {
    try {
      getResultObject({ success: true }, ("test" as unknown) as "success");
    } catch (e) {
      expect(e.message).to.equal('Key "test" was not in the response.');
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
