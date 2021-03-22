import {
  assertStrictEquals,
  assert,
  assertThrowsAsync,
} from "https://deno.land/std@0.90.0/testing/asserts.ts";
import { join, fromFileUrl, dirname } from "https://deno.land/std/path/mod.ts";
import {
  getPlayerRank,
  removeMinecraftFormatting,
  Components,
  transformSkyBlockProfileMemberInventories,
  SkyBlockProfileTransformedInventories,
  NBTInventory,
  transformItemData,
  getNetworkLevel,
  getExpFromNetworkLevel,
  getGuildLevel,
} from "../deno_dist/mod.ts";
import { AsyncReturnType } from "./client.test.deno.ts";
import { getResultArray } from "../deno_dist/util/ResultArray.ts";
import { getResultObject } from "../deno_dist/util/ResultObject.ts";

Deno.test("getResultArray", () => {
  const obj = getResultArray({ success: true, items: [] }, "items");
  assertStrictEquals(
    obj.meta.cloudflareCache,
    undefined,
    "should not have cloudflare meta"
  );
});

Deno.test("getResultObject", () => {
  const obj = getResultObject({ success: true, items: [] }, ["success"]);
  assertStrictEquals(
    obj.meta.cloudflareCache,
    undefined,
    "should not have cloudflare meta"
  );
});

Deno.test("getPlayerRank", () => {
  let rank = getPlayerRank({ rank: "ADMIN" } as never, false);
  assertStrictEquals(rank.name, "ADMIN", "should return admin");

  rank = getPlayerRank({ rank: "MODERATOR" } as never, false);
  assertStrictEquals(rank.name, "MODERATOR", "should return moderator");

  rank = getPlayerRank({ rank: "HELPER" } as never, false);
  assertStrictEquals(rank.name, "HELPER", "should return helper");

  rank = getPlayerRank({ rank: "JR_HELPER" } as never, false);
  assertStrictEquals(rank.name, "JR_HELPER", "should return jr helper");

  rank = getPlayerRank(
    { rank: "YOUTUBER", newPackageRank: "MVP_PLUS" } as never,
    false
  );
  assertStrictEquals(rank.name, "YOUTUBER", "should return youtuber");

  rank = getPlayerRank(
    {
      monthlyPackageRank: "SUPERSTAR",
      newPackageRank: "MVP_PLUS",
    } as never,
    false
  );
  assertStrictEquals(rank.name, "SUPERSTAR", "should return MVP++");

  rank = getPlayerRank(
    {
      monthlyPackageRank: "SUPERSTAR",
      newPackageRank: "MVP_PLUS",
      rankPlusColor: "BLUE",
    } as never,
    false
  );
  assertStrictEquals(
    rank.prefix,
    "§6[MVP§9++§6]",
    "should return MVP++ with a blue ++"
  );

  rank = getPlayerRank(
    {
      monthlyPackageRank: "SUPERSTAR",
      newPackageRank: "MVP_PLUS",
      monthlyRankColor: "AQUA",
      rankPlusColor: "BLACK",
    } as never,
    false
  );
  assertStrictEquals(rank.prefix, "§b[MVP§0++§b]");

  rank = getPlayerRank(
    {
      monthlyPackageRank: "SUPERSTAR",
      newPackageRank: "MVP_PLUS",
      monthlyRankColor: "AQUA",
    } as never,
    false
  );
  assertStrictEquals(
    rank.prefix,
    "§b[MVP§c++§b]",
    "should return MVP++ with a aqua color"
  );

  rank = getPlayerRank(
    { newPackageRank: "MVP_PLUS", rankPlusColor: "BLACK" } as never,
    false
  );
  assertStrictEquals(rank.name, "MVP_PLUS", "should return MVP+");

  rank = getPlayerRank(
    { newPackageRank: "MVP", packageRank: "VIP" } as never,
    false
  );
  assertStrictEquals(rank.name, "MVP", "should return MVP");

  rank = getPlayerRank({ newPackageRank: "VIP_PLUS" } as never, false);
  assertStrictEquals(rank.name, "VIP_PLUS", "should return VIP+");

  rank = getPlayerRank({ packageRank: "VIP", rank: "NONE" } as never);
  assertStrictEquals(rank.name, "VIP", "should return VIP");

  rank = getPlayerRank(
    {
      monthlyPackageRank: "PURPLE",
      newPackageRank: "PURPLE",
      packageRank: "PURPLE",
      rank: "PURPLE",
      rankPlusColor: "BLURPLE",
    } as never,
    true
  );
  assertStrictEquals(rank.name, "NON_DONOR", "should return non donor");
});

Deno.test("removeMinecraftFormatting", () => {
  assertStrictEquals(
    removeMinecraftFormatting("§6[MVP§9++§6]"),
    "[MVP++]",
    "should return MVP++ without formatting"
  );
});

Deno.test("transformSkyBlockProfileMemberInventories", async () => {
  const profiles: Components.Schemas.SkyBlockProfileCuteName[] = JSON.parse(
    await Deno.readTextFile(
      join(dirname(fromFileUrl(import.meta.url)), "data", "profiles.json")
    )
  );
  const members: AsyncReturnType<
    typeof transformSkyBlockProfileMemberInventories
  >[] = [];

  for (const profile of profiles) {
    if (profile === null) continue;
    for (const member of Object.values(profile.members)) {
      members.push(await transformSkyBlockProfileMemberInventories(member));
    }
  }

  for (const member of members) {
    assert(
      typeof member === "object" && !Array.isArray(member),
      "member should be an object"
    );
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
      assert(Array.isArray(inventory), "inventory should be array");
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
        assert(typeof item.id === "number", "item id should be a number");
        assert(typeof item.Count === "number", "item count should be a number");
        assert(
          typeof item.Damage === "number",
          "item damage should be a number"
        );
        if (item.tag) {
          assert(
            typeof item.tag === "object" && !Array.isArray(item.tag),
            "tag should be an object"
          );

          if (item.tag.Unbreakable) {
            assert(
              typeof item.tag.Unbreakable === "number",
              "Unbreakable should a number"
            );
          }
          if (item.tag.HideFlags) {
            assert(
              typeof item.tag.HideFlags === "number",
              "HideFlags should a number"
            );
          }
          if (item.tag.display) {
            const display = item.tag.display;
            assert(
              typeof display === "object" && !Array.isArray(display),
              "tag display should be an object"
            );

            if (display.Name) {
              assert(typeof display.Name === "string", "name should a string");
            }
            if (display.Lore) {
              assert(Array.isArray(display.Lore), "lore should be array");
              assert(
                display.Lore.every((s) => typeof s === "string"),
                "lore should be string[]"
              );
            }
            if (display.color) {
              assert(
                typeof display.color === "number",
                "color should a number"
              );
            }
          }
          if (item.tag.ExtraAttributes) {
            assert(
              typeof item.tag.ExtraAttributes === "object" &&
                !Array.isArray(item.tag.ExtraAttributes),
              "member should be an object"
            );
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
                assert(typeof value === "string", "value should be string");
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
                assert(typeof value === "number", "value should be string");
                continue;
              }
              if (key === "runes" || key === "enchantments") {
                assert(
                  typeof value === "object" && !Array.isArray(value),
                  "value should be an object"
                );
                assert(
                  Object.values(value).every((v) => typeof v === "number"),
                  "all of value properties should be number"
                );
                continue;
              }
              if (key === "effects") {
                assert(Array.isArray(value), "value should be an array");
                assert(
                  ((value as never) as Record<string, number | string>[]).every(
                    (v) =>
                      typeof v.effect === "string" &&
                      typeof v.duration_ticks === "number" &&
                      typeof v.level === "number"
                  ),
                  "value properties should have correct types"
                );
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
                    assert(
                      typeof effect.effect === "string" &&
                        typeof effect.duration_ticks === "number" &&
                        typeof effect.level === "number",
                      "value should be potion effect"
                    );
                  } else {
                    // expect number
                    assert(typeof v === "number", "value should be number");
                  }
                }
                continue;
              }

              if (typeof value === "object") {
                assert(
                  Object.values(value).every((v) => typeof v === "number"),
                  "value properties should be numbers"
                );
                continue;
              }

              if (typeof value === "string" || typeof value === "number") {
                continue;
              }

              assertStrictEquals(value, undefined);
            }
          }
          if (item.tag.ench) {
            assert(Array.isArray(item.tag.ench), "should be array");
            assert(
              item.tag.ench.every(
                (v) => typeof v.id === "number" && typeof v.lvl === "number"
              ),
              "should have id and lvl number properties"
            );
          }
          if (item.tag.SkullOwner) {
            const skull = item.tag.SkullOwner;
            assert(
              typeof skull === "object" && !Array.isArray(skull),
              "should be an object"
            );
            assert(typeof skull.Id === "string", "id should be string");
            if (skull.Properties !== null) {
              if (skull.Properties.profileId) {
                assert(
                  typeof skull.Properties.profileId === "string",
                  "profile id should be string"
                );
              }
              if (skull.Properties.profileName) {
                assert(
                  typeof skull.Properties.profileName === "string",
                  "profile name should be string"
                );
              }
              if (skull.Properties.signatureRequired) {
                assert(
                  typeof skull.Properties.signatureRequired === "boolean",
                  "signature required should be boolean"
                );
              }
              if (skull.Properties.timestamp) {
                assert(
                  typeof skull.Properties.timestamp === "number",
                  "timestamp should be number"
                );
              }
              assert(
                typeof skull.Properties.textures === "object" &&
                  !Array.isArray(skull),
                "textures should be an object"
              );
              assert(
                typeof skull.Properties.textures.SKIN === "object" &&
                  !Array.isArray(skull),
                "SKIN should be an object"
              );
              assert(
                typeof skull.Properties.textures.SKIN.url === "string",
                "url should be a string"
              );
            }
          }
          if (item.tag.CustomPotionEffects) {
            assert(
              Array.isArray(item.tag.CustomPotionEffects),
              "should be array"
            );
            assert(
              item.tag.CustomPotionEffects.every(
                (v) =>
                  typeof v.Id === "number" &&
                  typeof v.Ambient === "number" &&
                  typeof v.Amplifier === "number" &&
                  typeof v.Duration === "number"
              ),
              "should have Id, Ambient, Amplifier, and Duration number properties"
            );
          }
        }
      }
    }
  }
});

Deno.test("transformItemData", async () => {
  const player: Components.Schemas.Player = JSON.parse(
    await Deno.readTextFile(
      join(dirname(fromFileUrl(import.meta.url)), "data", "player.json")
    )
  );
  const itemData = await transformItemData(
    player.stats.Pit?.profile.inv_armor.data as number[]
  );
  assert(Array.isArray(itemData), `should transform Pit data`);
  await assertThrowsAsync(
    () => {
      return transformItemData("");
    },
    undefined,
    undefined,
    "should throw as invalid data is given"
  );

  const b64data = "H4sIAAAAAAAAAONiYOBkYMzkYmBgYGEAAQCp5xppEQAAAA==";
  const uint8array = [
    31,
    139,
    8,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    227,
    98,
    96,
    224,
    100,
    96,
    204,
    228,
    98,
    96,
    96,
    96,
    97,
    0,
    1,
    0,
    169,
    231,
    26,
    105,
    17,
    0,
    0,
    0,
  ];

  const results = await Promise.all([
    transformItemData(b64data),
    transformItemData(Uint8Array.from(uint8array)),
    transformItemData(uint8array),
  ]);
  results.forEach((result) => {
    assert(
      Array.isArray(result) && result.length === 4,
      "should return an array that has 4 children"
    );
    assert(
      result.every((v) => v === null),
      "array should be null[]"
    );
  });
});

Deno.test("getNetworkLevel", async () => {
  () => {
    const levelInfo = getNetworkLevel(1514993);
    assertStrictEquals(levelInfo.level, 32);
    assertStrictEquals(levelInfo.preciseLevel, 32.48563428571428);
    assertStrictEquals(levelInfo.currentExp, 1514993);
    assertStrictEquals(levelInfo.expToLevel, 1472500);
    assertStrictEquals(levelInfo.expToNextLevel, 87500);
    assertStrictEquals(levelInfo.remainingExpToNextLevel, 45007);
  };
  () => {
    const levelInfo = getNetworkLevel({ networkExp: 20955390 } as never);
    assertStrictEquals(levelInfo.level, 127);
    assertStrictEquals(levelInfo.preciseLevel, 127.02427692307693);
    assertStrictEquals(levelInfo.currentExp, 20955390);
    assertStrictEquals(levelInfo.expToLevel, 20947500);
    assertStrictEquals(levelInfo.expToNextLevel, 325000);
    assertStrictEquals(levelInfo.remainingExpToNextLevel, 317110);
  };
  () => {
    for (const exp of [{}, -9001]) {
      const levelInfo = getNetworkLevel(exp as never);
      assertStrictEquals(levelInfo.level, 1);
      assertStrictEquals(levelInfo.preciseLevel, 1);
      assertStrictEquals(levelInfo.currentExp, 0);
      assertStrictEquals(levelInfo.expToLevel, 0);
      assertStrictEquals(levelInfo.expToNextLevel, 10000);
      assertStrictEquals(levelInfo.remainingExpToNextLevel, 10000);
    }
  };
  () => {
    assertStrictEquals(getExpFromNetworkLevel(13.37), 299799.99999999994);
  };
});

Deno.test("getNetworkLevel", async () => {
  () => {
    for (const exp of [{}, -42]) {
      const levelInfo = getGuildLevel(exp as never);
      assertStrictEquals(levelInfo.level, 0);
      assertStrictEquals(levelInfo.preciseLevel, 0);
      assertStrictEquals(levelInfo.currentExp, 0);
      assertStrictEquals(levelInfo.expToLevel, 0);
      assertStrictEquals(levelInfo.expToNextLevel, 100000);
      assertStrictEquals(levelInfo.remainingExpToNextLevel, 100000);
    }
  };
  () => {
    const levelInfo = getGuildLevel({ exp: 1337 } as never);
    assertStrictEquals(levelInfo.level, 0);
    assertStrictEquals(levelInfo.preciseLevel, 0.01337);
    assertStrictEquals(levelInfo.currentExp, 1337);
    assertStrictEquals(levelInfo.expToLevel, 0);
    assertStrictEquals(levelInfo.expToNextLevel, 100000);
    assertStrictEquals(levelInfo.remainingExpToNextLevel, 98663);
  };
  () => {
    const levelInfo = getGuildLevel(104401100);
    assertStrictEquals(levelInfo.level, 42);
    assertStrictEquals(levelInfo.preciseLevel, 42.1337);
    assertStrictEquals(levelInfo.currentExp, 104401100);
    assertStrictEquals(levelInfo.expToLevel, 104000000);
    assertStrictEquals(levelInfo.expToNextLevel, 3000000);
    assertStrictEquals(levelInfo.remainingExpToNextLevel, 2598900);
  };
  () => {
    const levelInfo = getGuildLevel(26983700300);
    assertStrictEquals(levelInfo.level, 9001);
    assertStrictEquals(levelInfo.preciseLevel, 9001.9001);
    assertStrictEquals(levelInfo.currentExp, 26983700300);
    assertStrictEquals(levelInfo.expToLevel, 26981000000);
    assertStrictEquals(levelInfo.expToNextLevel, 3000000);
    assertStrictEquals(levelInfo.remainingExpToNextLevel, 299700);
  };
});

/*

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
*/
