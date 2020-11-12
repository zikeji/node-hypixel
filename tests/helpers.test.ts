import { expect } from "chai";
import { getPlayerRank, removeMinecraftFormatting } from "../src";
import { getResultArray } from "../src/util/ResultArray";
import { getResultObject } from "../src/util/ResultObject";

describe("Test getResultArray", function () {
  const obj = getResultArray({ success: true, items: [] }, "items");
  it("should not have cloudflare meta", function () {
    expect(obj.meta.cloudflareCache).to.be.undefined;
  });
});
describe("Test getResultObject", function () {
  const obj = getResultObject({ success: true, items: [] }, ["success"]);
  it("should not have cloudflare meta", function () {
    expect(obj.meta.cloudflareCache).to.be.undefined;
  });
});

describe("Test PlayerRank helper", function () {
  it("should return admin", function () {
    const rank = getPlayerRank({ rank: "ADMIN" } as never, false);
    expect(rank.name).to.be.a("string").that.equals("ADMIN");
  });
  it("should return mod", function () {
    const rank = getPlayerRank({ rank: "MODERATOR" } as never, false);
    expect(rank.name).to.be.a("string").that.equals("MODERATOR");
  });
  it("should return helper", function () {
    const rank = getPlayerRank({ rank: "HELPER" } as never, false);
    expect(rank.name).to.be.a("string").that.equals("HELPER");
  });
  it("should return jr helper", function () {
    const rank = getPlayerRank({ rank: "JR_HELPER" } as never, false);
    expect(rank.name).to.be.a("string").that.equals("JR_HELPER");
  });
  it("should return youtuber", function () {
    const rank = getPlayerRank(
      { rank: "YOUTUBER", newPackageRank: "MVP_PLUS" } as never,
      false
    );
    expect(rank.name).to.be.a("string").that.equals("YOUTUBER");
  });
  it("should return MVP++", function () {
    const rank = getPlayerRank(
      {
        monthlyPackageRank: "SUPERSTAR",
        newPackageRank: "MVP_PLUS",
      } as never,
      false
    );
    expect(rank.name).to.be.a("string").that.equals("SUPERSTAR");
  });
  it("should return MVP++ with a blue prefix", function () {
    const rank = getPlayerRank(
      {
        monthlyPackageRank: "SUPERSTAR",
        newPackageRank: "MVP_PLUS",
        rankPlusColor: "BLUE",
      } as never,
      false
    );
    expect(rank.prefix).to.be.a("string").that.equals("§6[MVP§9++§6]");
  });
  it("should return MVP+", function () {
    const rank = getPlayerRank(
      { newPackageRank: "MVP_PLUS", rankPlusColor: "BLACK" } as never,
      false
    );
    expect(rank.name).to.be.a("string").that.equals("MVP_PLUS");
  });
  it("should return MVP", function () {
    const rank = getPlayerRank(
      { newPackageRank: "MVP", packageRank: "VIP" } as never,
      false
    );
    expect(rank.name).to.be.a("string").that.equals("MVP");
  });
  it("should return VIP+", function () {
    const rank = getPlayerRank({ newPackageRank: "VIP_PLUS" } as never, false);
    expect(rank.name).to.be.a("string").that.equals("VIP_PLUS");
  });
  it("should return VIP", function () {
    const rank = getPlayerRank({ packageRank: "VIP", rank: "NONE" } as never);
    expect(rank.name).to.be.a("string").that.equals("VIP");
  });
  it("should return non donor", function () {
    const rank = getPlayerRank(
      {
        monthlyPackageRank: "PURPLE",
        newPackageRank: "PURPLE",
        packageRank: "PURPLE",
        rank: "PURPLE",
        rankPlusColor: "BLURPLE",
      } as never,
      true
    );
    expect(rank.name).to.be.a("string").that.equals("NON_DONOR");
  });
});

describe("Test removeMinecraftFormatting", function () {
  it("should return MVP++ without formatting", function () {
    expect(removeMinecraftFormatting("§6[MVP§9++§6]"))
      .to.be.a("string")
      .that.equals("[MVP++]");
  });
});
