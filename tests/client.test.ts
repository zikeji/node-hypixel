import { expect } from "chai";
import { HypixelSkyBlock } from "../src";
import { Profile } from "../src/types/Profile";

const client = new HypixelSkyBlock(process.env.HYPIXEL_KEY || "");

describe("Run basic call to non-SkyBlock method", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: { success: boolean; guild?: string };
  it("expect success", async function () {
    result = await client.call("findGuild", { byName: "Mini Squid" });
    expect(result.success).to.equal(true);
  });
  it("expect resulting guild id", function () {
    expect(result.guild).to.equal("553490650cf26f12ae5bac8f");
  });
});

describe("Query SkyBlock profiles by mc uuid", function () {
  this.timeout(30000);
  this.slow(1000);
  let result;
  it("expect success", async function () {
    result = await client.profiles("ec1811e6822b4843bcd4fef82f75deb7");
    expect(result.length).not.to.equal(0);
  });
});

describe("Query SkyBlock profile by mc uuid", function () {
  this.timeout(30000);
  this.slow(1000);
  let profileId = "74c72b90bdd84b668ccb5a20752030cc";
  let result: Profile;
  it("expect not to throw", async function () {
    result = await client.profile(profileId);
  });
  it("expect profile to have members", function () {
    expect(result?.members?.length).not.to.equal(0);
  });
  it("expect profile id to equal provided id", function () {
    expect(result?.profile_id).to.equal(profileId);
  });
});
