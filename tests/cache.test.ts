import { expect } from "chai";
import { Client } from "../src";
import { AsyncReturnType } from "./client.test";

const basicCache = new Map<string, never>();
const client = new Client(process.env.HYPIXEL_KEY || "", {
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
  let result: AsyncReturnType<typeof client.watchdogstats>;
  let resultCached: AsyncReturnType<typeof client.watchdogstats>;
  it("expect success", async function () {
    result = await client.watchdogstats();
    resultCached = await client.watchdogstats();
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
  let result: AsyncReturnType<typeof client.findGuild.byUuid>;
  let resultCached: AsyncReturnType<typeof client.findGuild.byUuid>;
  it("expect success", async function () {
    result = await client.findGuild.byUuid("20934ef9488c465180a78f861586b4cf");
    resultCached = await client.findGuild.byUuid(
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
