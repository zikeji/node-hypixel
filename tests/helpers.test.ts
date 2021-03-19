/// <reference path="../src/globals.d.ts" />

import { expect } from "chai";
import {
  Components,
  getBedwarsLevelInfo,
  getExpFromNetworkLevel,
  getGuildLevel,
  getNetworkLevel,
  getPlayerRank,
  getSkyBlockProfileMemberCollections,
  getSkyBlockProfileMemberSkills,
  getSkyWarsLevelInfo,
  getSkyWarsPrestigeForLevel,
  NBTInventory,
  removeMinecraftFormatting,
  romanize,
  SkyBlockProfileTransformedInventories,
  SkyWarsPrestiges,
  transformItemData,
  transformSkyBlockProfileMemberInventories,
} from "../src";
import { getResultArray } from "../src/util/ResultArray";
import { getResultObject } from "../src/util/ResultObject";
import { AsyncReturnType } from "./client.test";

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
  it("should return MVP++ with a blue ++", function () {
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
  it("should return MVP++ with a aqua color and black ++", function () {
    const rank = getPlayerRank(
      {
        monthlyPackageRank: "SUPERSTAR",
        newPackageRank: "MVP_PLUS",
        monthlyRankColor: "AQUA",
        rankPlusColor: "BLACK",
      } as never,
      false
    );
    expect(rank.prefix).to.be.a("string").that.equals("§b[MVP§0++§b]");
  });
  it("should return MVP++ with a aqua color", function () {
    const rank = getPlayerRank(
      {
        monthlyPackageRank: "SUPERSTAR",
        newPackageRank: "MVP_PLUS",
        monthlyRankColor: "AQUA",
      } as never,
      false
    );
    expect(rank.prefix).to.be.a("string").that.equals("§b[MVP§c++§b]");
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

describe("Test transformSkyBlockProfileMemberInventories", function () {
  this.slow(250);
  const profiles: Components.Schemas.SkyBlockProfileCuteName[] = require("./data/profiles.json");
  const members: AsyncReturnType<
    typeof transformSkyBlockProfileMemberInventories
  >[] = [];
  it("should transform members without throwing", async function () {
    for (const profile of profiles) {
      if (profile === null) continue;
      for (const member of Object.values(profile.members)) {
        members.push(await transformSkyBlockProfileMemberInventories(member));
      }
    }
  });
  it("transformed members should have transformed inventories with appropriate keys", function () {
    for (const member of members) {
      expect(member).to.be.an("object");
      for (const inventoryName of [
        "inv_armor",
        "candy_inventory_contents",
        "ender_chest_contents",
        "fishing_bag",
        "inv_contents",
        "potion_bag",
        "quiver",
        "talisman_bag",
        "wardrobe_contents",
      ] as (keyof SkyBlockProfileTransformedInventories)[]) {
        const inventory = member[inventoryName];
        if (typeof inventory === "undefined") continue;
        expect(inventory).to.be.an("array");
        // merge backpacks/bags items into inventory arr
        inventory.forEach((i) => {
          if (i === null || !i.tag || !i.tag.ExtraAttributes) return;
          for (const key of Object.keys(i.tag.ExtraAttributes)) {
            if (key.endsWith("_backpack_data") || key.endsWith("_bag_data")) {
              const contents = i.tag.ExtraAttributes[key] as NBTInventory;
              for (const item of contents) {
                inventory.push(item);
              }
            }
          }
        });
        for (const item of inventory) {
          if (item === null) continue;
          expect(item.id).to.be.a("number");
          expect(item.Count).to.be.a("number");
          expect(item.Damage).to.be.a("number");
          if (item.tag) {
            expect(item.tag).to.be.an("object");

            if (item.tag.Unbreakable) {
              expect(item.tag.Unbreakable).to.be.a("number");
            }
            if (item.tag.HideFlags) {
              expect(item.tag.HideFlags).to.be.a("number");
            }
            if (item.tag.display) {
              const display = item.tag.display;
              expect(display).to.be.an("object");
              if (display.Name) {
                expect(display.Name).to.be.a("string");
              }
              if (display.Lore) {
                expect(display.Lore)
                  .to.be.an("array")
                  .that.satisfies(function (arr: string[]) {
                    return arr.every((s) => typeof s === "string");
                  });
              }
              if (display.color) expect(display.color).to.be.a("number");
            }
            if (item.tag.ExtraAttributes) {
              const ExtraAttributes = item.tag.ExtraAttributes;
              for (const key of Object.keys(ExtraAttributes)) {
                const value = ExtraAttributes[key];
                if (
                  [
                    "id",
                    "uuid",
                    "timestamp",
                    "originTag",
                    "modifier",
                    "color",
                    "backpack_color",
                    "potion_type",
                    "potion_name",
                  ].includes(key)
                ) {
                  expect(value).to.be.a("string");
                  continue;
                }
                if (
                  [
                    "anvil_uses",
                    "hot_potato_count",
                    "rarity_upgrades",
                    "dungeon_item_level",
                    "potion_level",
                    "splash",
                  ].includes(key)
                ) {
                  expect(value).to.be.a("number");
                  continue;
                }
                if (key === "runes" || key === "enchantments") {
                  expect(value)
                    .to.be.an("object")
                    .that.satisfies(function (obj: { [key: string]: number }) {
                      return Object.values(obj).every(
                        (v) => typeof v === "number"
                      );
                    });
                  continue;
                }
                if (key === "effects") {
                  expect(value).to.be.an("array");
                  for (const v of value as NonNullable<
                    typeof ExtraAttributes.effects
                  >) {
                    expect(v.effect).to.be.a("string");
                    expect(v.duration_ticks).to.be.a("number");
                    expect(v.level).to.be.a("number");
                  }
                  continue;
                }

                if (Array.isArray(value)) {
                  for (const v of value) {
                    if (typeof v === "object") {
                      if (
                        v === null ||
                        typeof (v as { tag: unknown }).tag === "object"
                      ) {
                        // It's a NBTInventoryItem, ignore as we already merged it in to check.
                        continue;
                      }
                      // expect NBTExtraAttributesPotionEffect
                      const effect = v as NonNullable<
                        typeof ExtraAttributes.effects
                      >[number];
                      console.log(value);
                      expect(effect.effect).to.be.a("string");
                      expect(effect.duration_ticks).to.be.a("number");
                      expect(effect.level).to.be.a("number");
                    } else {
                      // expect number
                      expect(v).to.be.a("number");
                    }
                  }
                  continue;
                }

                if (typeof value === "object") {
                  expect(value)
                    .to.be.an("object")
                    .that.satisfies(function (val: { [name: string]: number }) {
                      return Object.values(val).every(
                        (v) => typeof v === "number"
                      );
                    });
                  continue;
                }

                if (typeof value === "string" || typeof value === "number") {
                  continue;
                }

                expect(value).to.be.undefined;
              }
            }
            if (item.tag.ench) {
              expect(item.tag.ench).to.be.an("array");
              for (const value of item.tag.ench) {
                expect(value.id).to.be.a("number");
                expect(value.lvl).to.be.a("number");
              }
            }
            if (item.tag.SkullOwner) {
              const skull = item.tag.SkullOwner;
              expect(skull).to.be.an("object");
              expect(skull.Id).to.be.a("string");
              if (skull.Properties !== null) {
                if (skull.Properties.profileId) {
                  expect(skull.Properties.profileId).to.be.a("string");
                }
                if (skull.Properties.profileName) {
                  expect(skull.Properties.profileName).to.be.a("string");
                }
                if (skull.Properties.signatureRequired) {
                  expect(skull.Properties.signatureRequired).to.be.a("boolean");
                }
                if (skull.Properties.timestamp) {
                  expect(skull.Properties.timestamp).to.be.a("number");
                }
                expect(skull.Properties.textures)
                  .to.be.an("object")
                  .that.has.property("SKIN")
                  .that.is.an("object")
                  .that.has.property("url")
                  .that.is.a("string");
              }
            }
            if (item.tag.CustomPotionEffects) {
              expect(item.tag.CustomPotionEffects).to.be.an("array");
              for (const potion of item.tag.CustomPotionEffects) {
                expect(potion.Id).to.be.a("number");
                expect(potion.Ambient).to.be.a("number");
                expect(potion.Amplifier).to.be.a("number");
                expect(potion.Duration).to.be.a("number");
              }
            }
          }
        }
      }
    }
  });
});

describe("Test transformItemData", function () {
  const player: Components.Schemas.Player = require("./data/player.json");
  it("should transform Pit inventory without throwing", async function () {
    await transformItemData(
      player.stats.Pit?.profile.inv_armor.data as number[]
    );
  });
  it("should throw as invalid data is being given", async function () {
    try {
      await transformItemData("");
    } catch (e) {
      expect(e).to.be.instanceOf(Error);
    }
  });
  it("should return an array 4 in length", async function () {
    const result = await transformItemData(
      Buffer.from("H4sIAAAAAAAAAONiYOBkYMzkYmBgYGEAAQCp5xppEQAAAA==", "base64")
    );
    expect(result)
      .to.be.an("array")
      .and.that.satisfies(function (arr: null[]) {
        return arr.every((v) => v === null);
      });
    expect(result.length).to.be.a("number").that.equals(4);
  });
});

describe("Test getNetworkLevel", function () {
  it("should return level 32", function () {
    const levelInfo = getNetworkLevel(1514993);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(32);
    expect(levelInfo.preciseLevel)
      .to.be.a("number")
      .that.equals(32.48563428571428);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(1514993);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(1472500);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(87500);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(45007);
  });
  it("should return level 127", function () {
    const levelInfo = getNetworkLevel({ networkExp: 20955390 } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(127);
    expect(levelInfo.preciseLevel)
      .to.be.a("number")
      .that.equals(127.02427692307693);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(20955390);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(20947500);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(325000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(317110);
  });
  it("should return level 1 with negative exp", function () {
    const levelInfo = getNetworkLevel(-9001);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(1);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(1);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(0);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(0);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(10000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(10000);
  });
  it("should return level 1 with playerdata and no exp", function () {
    const levelInfo = getNetworkLevel({} as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(1);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(1);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(0);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(0);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(10000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(10000);
  });
});

describe("Test getExpToNetworkLevel with float", function () {
  it("should equal 299799.99999999994", function () {
    expect(getExpFromNetworkLevel(13.37))
      .to.be.a("number")
      .that.equals(299799.99999999994);
  });
});

describe("Test getGuildLevel", function () {
  it("should return level 0", function () {
    for (const exp of [{}, -42]) {
      const levelInfo = getGuildLevel(exp as never);
      expect(levelInfo).to.be.a("object");
      expect(levelInfo.level).to.be.a("number").that.equals(0);
      expect(levelInfo.preciseLevel).to.be.a("number").that.equals(0);
      expect(levelInfo.currentExp).to.be.a("number").that.equals(0);
      expect(levelInfo.expToLevel).to.be.a("number").that.equals(0);
      expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(100000);
      expect(levelInfo.remainingExpToNextLevel)
        .to.be.a("number")
        .that.equals(100000);
    }
  });
  it("should return level 0 with flair", function () {
    const levelInfo = getGuildLevel({ exp: 1337 } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(0);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(0.01337);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(1337);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(0);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(100000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(98663);
  });
  it("should return level 42", function () {
    const levelInfo = getGuildLevel(104401100);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(42);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(42.1337);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(104401100);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(104000000);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(3000000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(2598900);
  });
  it("should return level 9001", function () {
    const levelInfo = getGuildLevel(26983700300);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(9001);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(9001.9001);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(26983700300);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(26981000000);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(3000000);
    expect(levelInfo.remainingExpToNextLevel)
      .to.be.a("number")
      .that.equals(299700);
  });
});

describe("Test getBedwarsLevelInfo", function () {
  it("should return prestige 0", function () {
    const levelInfo = getBedwarsLevelInfo({
      stats: { Bedwars: { Experience_new: 0 } },
    } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(0);
    expect(levelInfo.prestige).to.be.a("number").that.equals(0);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("None");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§7");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("AAAAAA");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(0);
  });
  it("should return prestige 1", function () {
    const levelInfo = getBedwarsLevelInfo({
      stats: { Bedwars: { Experience: null, Experience_new: 615361 } },
    } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(128);
    expect(levelInfo.prestige).to.be.a("number").that.equals(1);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Iron");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§f");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("FFFFFF");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(28);
  });
  it("should return prestige 2", function () {
    const levelInfo = getBedwarsLevelInfo(1075728);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(222);
    expect(levelInfo.prestige).to.be.a("number").that.equals(2);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Gold");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§6");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("FFAA00");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(22);
  });
  it("should return prestige 3", function () {
    const levelInfo = getBedwarsLevelInfo(1515127);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(313);
    expect(levelInfo.prestige).to.be.a("number").that.equals(3);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Diamond");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§b");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("55FFFF");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(13);
  });
  it("should return prestige 4", function () {
    const levelInfo = getBedwarsLevelInfo(2126213);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(438);
    expect(levelInfo.prestige).to.be.a("number").that.equals(4);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Emerald");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§2");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("00AA00");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(38);
  });
  it("should return prestige 5", function () {
    const levelInfo = getBedwarsLevelInfo(2441234);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(503);
    expect(levelInfo.prestige).to.be.a("number").that.equals(5);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Sapphire");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§3");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("00AAAA");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(3);
  });
  it("should return prestige 6", function () {
    const levelInfo = getBedwarsLevelInfo(3172582);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(652);
    expect(levelInfo.prestige).to.be.a("number").that.equals(6);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Ruby");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§4");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("AA0000");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(52);
  });
  it("should return prestige 7", function () {
    const levelInfo = getBedwarsLevelInfo(3511245);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(723);
    expect(levelInfo.prestige).to.be.a("number").that.equals(7);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Crystal");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§d");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("FF55FF");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(23);
  });
  it("should return prestige 8", function () {
    const levelInfo = getBedwarsLevelInfo(4321000);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(887);
    expect(levelInfo.prestige).to.be.a("number").that.equals(8);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Opal");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§9");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("5555FF");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(87);
  });
  it("should return prestige 9", function () {
    const levelInfo = getBedwarsLevelInfo(4567890);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(939);
    expect(levelInfo.prestige).to.be.a("number").that.equals(9);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Amethyst");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§5");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("AA00AA");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(39);
  });
  it("should return prestige 10", function () {
    const levelInfo = getBedwarsLevelInfo({
      stats: { Bedwars: { Experience: 7273056 } },
    } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(1493);
    expect(levelInfo.prestige).to.be.a("number").that.equals(10);
    expect(levelInfo.prestigeName).to.be.a("string").that.equals("Rainbow");
    expect(levelInfo.prestigeColor).to.be.a("string").that.equals("§f");
    expect(levelInfo.prestigeColorHex).to.be.a("string").that.equals("FFFFFF");
    expect(levelInfo.levelInCurrentPrestige).to.be.a("number").that.equals(493);
  });
  it("should throw typeError", function () {
    try {
      getBedwarsLevelInfo({
        stats: {},
      } as never);
    } catch (e) {
      expect(e.message).to.equal(
        "Data supplied does not contain player Bedwars experience."
      );
    }
  });
});

describe("Test SkyWarsLevelInfo & SkyWarsPrestige", function () {
  it("should return level 1", function () {
    const levelInfo = getSkyWarsLevelInfo({
      stats: { SkyWars: { skywars_experience: 0 } },
    } as never);
    expect(levelInfo).to.be.a("object");
    expect(levelInfo.level).to.be.a("number").that.equals(1);
    expect(levelInfo.preciseLevel).to.be.a("number").that.equals(1);
    expect(levelInfo.currentExp).to.be.a("number").that.equals(0);
    expect(levelInfo.expToLevel).to.be.a("number").that.equals(0);
    expect(levelInfo.expToNextLevel).to.be.a("number").that.equals(20);
    expect(levelInfo.remainingExpToNextLevel).to.be.a("number").that.equals(20);
  });
  const exp = [
    83,
    2638,
    15179,
    54715,
    131139,
    147585,
    230200,
    253038,
    301656,
    390383,
    418689,
    1462522,
  ];
  for (let i = 0; i < exp.length; i += 1) {
    const prestige = SkyWarsPrestiges[i];
    it(`should return ${prestige.name} prestige`, function () {
      const levelInfo = getSkyWarsLevelInfo(exp[i], true);
      expect(levelInfo).to.be.a("object");
      expect(levelInfo.prestige).to.be.a("object").that.equals(prestige);
      if (i + 1 < exp.length) {
        expect(levelInfo.nextPrestige)
          .to.be.a("object")
          .that.equals(SkyWarsPrestiges[i + 1]);
      }
      // console.log(levelInfo);
    });
  }
  it("getSkyWarsPrestigeForLevel should throw typeError", function () {
    try {
      getSkyWarsPrestigeForLevel({
        stats: {},
      } as never);
    } catch (e) {
      expect(e.message).to.equal("Not a valid level.");
    }
  });
  it("getSkyWarsLevelInfo should throw typeError", function () {
    try {
      getSkyWarsLevelInfo({
        stats: {},
      } as never);
    } catch (e) {
      expect(e.message).to.equal(
        "Data supplied does not contain player SkyWars experience."
      );
    }
  });
});

describe("Test getSkyBlockProfileMemberCollections", function () {
  const collectionsResource: Components.Schemas.SkyBlockResourcesParentCollections = require("./data/resources/collections.json");
  const profiles: NonNullable<Components.Schemas.SkyBlockProfileCuteName>[] = require("./data/profiles.json");
  let collections: ReturnType<typeof getSkyBlockProfileMemberCollections>;
  it("should go over data without throwing", function () {
    const profile = profiles[0];
    collections = getSkyBlockProfileMemberCollections(
      profile,
      collectionsResource
    );
  });
  it("should not be a boolean", function () {
    expect(collections).to.not.be.a("boolean");
  });
  it("should contain required properties", function () {
    if (typeof collections === "boolean") return;
    for (const category of collections) {
      expect(category.id).to.be.a("string");
      expect(category.name).to.be.a("string");
      expect(category.progress).to.be.a("number");
      expect(category.maxedChildCollections).to.be.a("number");
      expect(category.totalCollections).to.be.a("number");
      expect(category.children).to.be.an("array");
      for (const collection of category.children) {
        expect(collection.id).to.be.a("string");
        expect(collection.name).to.be.a("string");
        expect(collection.tier).to.be.a("number");
        expect(collection.maxTier).to.be.a("number");
        expect(collection.amount).to.be.a("number");
        expect(collection.progress).to.be.a("number");
        if (collection.nextTier) {
          expect(collection.nextTier).to.be.a("number");
        }
        if (collection.nextTierAmountRequired) {
          expect(collection.nextTierAmountRequired).to.be.a("number");
        }
      }
    }
  });
  it("should return false", function () {
    const result = getSkyBlockProfileMemberCollections(
      { members: { null: {} as never } },
      collectionsResource
    );
    expect(result).to.be.false;
  });
});

describe("Test romanize", function () {
  it("should return X", function () {
    expect(romanize(10)).to.be.a("string").that.equals("X");
  });
});

describe("Test getSkyBlockProfileMemberSkills", function () {
  const skillsResource: Components.Schemas.SkyBlockResourcesSkills = require("./data/resources/skills.json");
  const profiles: NonNullable<Components.Schemas.SkyBlockProfileCuteName>[] = require("./data/profiles.json");
  let skills: ReturnType<typeof getSkyBlockProfileMemberSkills>;
  it("should go over data without throwing", function () {
    const profile = profiles[0];
    skills = getSkyBlockProfileMemberSkills(
      Object.values(profile.members)[0],
      skillsResource
    );
  });
  it("should not be a boolean", function () {
    expect(skills).to.not.be.a("boolean");
  });
  it("should contain required properties", function () {
    if (typeof skills === "boolean") return;

    for (const skillName of Object.keys(skills)) {
      const skill = skills[skillName];
      expect(skillName).to.be.a("string");
      expect(skill.name).to.be.a("string");
      expect(skill.description).to.be.a("string");
      expect(skill.level).to.be.a("number");
      expect(skill.exp).to.be.a("number");
      expect(skill.totalExpToLevel).to.be.a("number");
      expect(skill.expToNextLevel).to.be.a("number");
      expect(skill.maxLevel).to.be.a("number");
    }

    expect(skills.FARMING).to.be.a("object");
    expect(skills.MINING).to.be.a("object");
    expect(skills.COMBAT).to.be.a("object");
    expect(skills.DUNGEONEERING).to.be.a("object");
    expect(skills.FORAGING).to.be.a("object");
    expect(skills.FISHING).to.be.a("object");
    expect(skills.ENCHANTING).to.be.a("object");
    expect(skills.ALCHEMY).to.be.a("object");
    expect(skills.CARPENTRY).to.be.a("object");
    expect(skills.RUNECRAFTING).to.be.a("object");
    expect(skills.SOCIAL).to.be.a("object");
    expect(skills.TAMING).to.be.a("object");
  });
  it("should return false", function () {
    const result = getSkyBlockProfileMemberSkills({} as never, skillsResource);
    expect(result).to.be.false;
  });
});
