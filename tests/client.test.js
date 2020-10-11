const { expect } = require("chai");
const { HypixelSkyBlock } = require("../dist");
const { writeFileSync } = require("fs");

const client = new HypixelSkyBlock(process.env.HYPIXEL_KEY || "");

describe("Run basic call to non-SkyBlock method", function () {
  this.timeout(30000);
  this.slow(500);
  let result;
  it("expect success", async function () {
    result = await client.call("findGuild", {"byName": "Mini Squid"});
    expect(result.success).to.equal(true);
  });
  it ("expect resulting guild id", function() {
    expect(result.guild).to.equal("553490650cf26f12ae5bac8f");
  });
});

describe("Query SkyBlock profiles by mc uuid", function() {
  this.timeout(30000);
  this.slow(500);
  let result;
  it("expect success", async function () {
    result = await client.profiles("ec1811e6-822b-4843-bcd4-fef82f75deb7");
    expect(result.length).not.to.equal(0);
  });
});

describe("Query SkyBlock profile by mc uuid", function() {
  this.timeout(30000);
  this.slow(500);
  let result;
  it("expect success", async function () {
    result = await client.profile("74c72b90bdd84b668ccb5a20752030cc");
    expect(result.length).not.to.equal(0);
  });
});