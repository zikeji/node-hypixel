/// <reference path="../src/globals.d.ts" />

import { expect } from "chai";
import {
  Components,
  getPlayerRank,
  NBTInventory,
  removeMinecraftFormatting,
  SkyBlockProfileTransformedInventories,
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

describe("Test TransformSkyBlockItemData", function () {
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
          if (i === null) return;
          if (i.tag.ExtraAttributes) {
            for (const key of Object.keys(i.tag.ExtraAttributes)) {
              if (key.endsWith("_backpack_data") || key.endsWith("_bag_data")) {
                const contents = i.tag.ExtraAttributes[key] as NBTInventory;
                for (const item of contents) {
                  inventory.push(item);
                }
              }
            }
          }
        });
        for (const item of inventory) {
          if (item === null) continue;
          expect(item.id).to.be.a("number");
          expect(item.Count).to.be.a("number");
          expect(item.Damage).to.be.a("number");
          expect(item.tag).to.be.an("object");

          if (item.tag.Unbreakable)
            expect(item.tag.Unbreakable).to.be.a("number");
          expect(item.tag.HideFlags).to.be.a("number");
          const display = item.tag.display;
          expect(display).to.be.an("object");
          expect(display.Name).to.be.a("string");
          expect(display.Lore)
            .to.be.an("array")
            .that.satisfies(function (arr: string[]) {
              return arr.every((s) => typeof s === "string");
            });
          if (display.color) expect(display.color).to.be.a("number");
          if (item.tag.ExtraAttributes) {
            const ExtraAttributes: NonNullable<typeof item.tag.ExtraAttributes> =
              item.tag.ExtraAttributes;
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
            expect(item.tag.ench)
              .to.be.an("array")
              .that.satisfies(function (
                ench: NonNullable<typeof item.tag.ench>
              ) {
                return ench.every(
                  (e) => typeof e.id === "number" && typeof e.lvl === "number"
                );
              });
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
            expect(item.tag.CustomPotionEffects)
              .to.be.an("array")
              .that.satisfies(function (
                effects: NonNullable<typeof item.tag.CustomPotionEffects>
              ) {
                return effects.every(
                  (e) =>
                    typeof e.Id === "number" &&
                    typeof e.Ambient === "number" &&
                    typeof e.Amplifier === "number" &&
                    typeof e.Duration === "number"
                );
              });
          }
        }
      }
    }
  });
});
