import { expect } from "chai";
import { TestClient } from "./structures/TestClient";
import { AsyncReturnType } from "./structures/AsyncReturnType";

const basicCache = new Map<string, never>();
const client = new TestClient({
  cache: {
    async get(key) {
      if (basicCache.has(key)) {
        return basicCache.get(key);
      }
    },
    async set(key, value) {
      basicCache.set(key, value as never);
    },
  },
});

describe("Test cache on a ResultObject", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.punishmentstats>;
  let resultCached: AsyncReturnType<typeof client.punishmentstats>;
  it("expect success", async function () {
    result = await client.punishmentstats();
    resultCached = await client.punishmentstats();
  });
  it("expect result not cached", async function () {
    expect(result.meta.cached).to.be.undefined;
  });
  it("expect resultCached cached", async function () {
    expect(resultCached.meta.cached).to.be.a("boolean").that.equals(true);
  });
});

describe("Test cache on a ResultArray", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.skyblock.news>;
  let resultCached: AsyncReturnType<typeof client.skyblock.news>;
  it("expect success", async function () {
    result = await client.skyblock.news();
    resultCached = await client.skyblock.news();
  });
  it("expect result not cached", async function () {
    expect(result.meta.cached).to.be.undefined;
  });
  it("expect resultCached cached", async function () {
    expect(resultCached.meta.cached).to.be.a("boolean").that.equals(true);
  });
});

describe("Test cache with parameter", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.guild.player>;
  let resultCached: AsyncReturnType<typeof client.guild.player>;
  it("expect success", async function () {
    result = await client.guild.player("20934ef9488c465180a78f861586b4cf");
    resultCached = await client.guild.player(
      "20934ef9488c465180a78f861586b4cf"
    );
  });
  it("expect result not cached", async function () {
    expect(result.meta.cached).to.be.undefined;
  });
  it("expect resultCached cached", async function () {
    expect(resultCached.meta.cached).to.be.a("boolean").that.equals(true);
  });
});
