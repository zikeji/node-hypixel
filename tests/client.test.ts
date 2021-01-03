/// <reference path="../src/globals.d.ts" />

import { expect } from "chai";
import { Client, Components } from "../src";
import type { ResultArray } from "../src/util/ResultArray";
import type { ResultObject } from "../src/util/ResultObject";

export type AsyncReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => Promise<infer U>
  ? U
  : T extends (...args: any) => infer U
  ? U
  : any;

const client = new Client(process.env.HYPIXEL_KEY || "");

const CheckMeta = (
  data: () =>
    | ResultArray<Components.Schemas.ApiSuccess & { n: unknown }, "n">
    | ResultObject<Components.Schemas.ApiSuccess & { n: unknown }, ["n"]>,
  noRateLimit = false
) => {
  let result: ReturnType<typeof data>;
  beforeEach(function () {
    result = data();
  });
  it("meta should exist", function () {
    expect(result.meta).to.be.an("object");
  });
  it("success should be true", function () {
    expect(result.meta.success).to.equal(true);
  });
  it("cloudflareCache data should exist", function () {
    expect(result.meta.cloudflareCache).to.be.an("object");
    expect(result.meta.cloudflareCache?.status)
      .to.be.a("string")
      .and.that.is.oneOf(["HIT", "MISS", "BYPASS", "EXPIRED", "DYNAMIC"]);
    if (result.meta.cloudflareCache?.status === "HIT") {
      expect(result.meta.cloudflareCache?.age).to.be.a("number");
      expect(result.meta.cloudflareCache?.maxAge).to.be.a("number");
    } else if (
      result.meta.cloudflareCache?.status === "EXPIRED" ||
      result.meta.cloudflareCache?.status === "MISS"
    ) {
      expect(result.meta.cloudflareCache?.age).to.be.undefined;
      expect(result.meta.cloudflareCache?.maxAge).to.be.a("number");
    } else {
      expect(result.meta.cloudflareCache?.age).to.be.undefined;
      expect(result.meta.cloudflareCache?.maxAge).to.be.undefined;
    }
  });
  if (noRateLimit) {
    it("ratelimit data should not exist", function () {
      expect(result.meta.ratelimit).to.be.undefined;
    });
  } else {
    it("ratelimit data should exist", function () {
      expect(result.meta.ratelimit).to.be.an("object");
      expect(result.meta.ratelimit?.limit).to.be.a("number");
      expect(result.meta.ratelimit?.reset).to.be.a("number");
      expect(result.meta.ratelimit?.remaining).to.be.a("number");
    });
  }
};

describe("Run basic undocumented call", function () {
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

describe("Get boosters", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.boosters>;
  it("expect not to throw", async function () {
    result = await client.boosters();
  });
  CheckMeta(() => result);
  it("check that result has booster state", function () {
    expect(result.boosterState).to.be.a("object");
    expect(result.boosterState.decrementing).to.be.a("boolean");
  });
  it("required booster keys should exist", function () {
    for (const booster of result.boosters) {
      expect(booster._id).to.be.a("string");
      expect(booster.amount).to.be.a("number");
      expect(booster.dateActivated).to.be.a("number");
      expect(booster.gameType).to.be.a("number");
      expect(booster.length).to.be.a("number");
      expect(booster.originalLength).to.be.a("number");
      expect(booster.purchaserUuid).to.be.a("string");
      expect(booster.stacked).to.satisfy(function (
        stacked: undefined | typeof booster.stacked
      ) {
        return (
          typeof stacked === "undefined" ||
          typeof stacked === "boolean" ||
          (typeof stacked === "object" &&
            Array.isArray(stacked) &&
            stacked.every((v) => typeof v === "string"))
        );
      });
    }
  });
});

describe("Get guild id by guild name", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.findGuild.byName>;
  it("expect not to throw", async function () {
    result = await client.findGuild.byName("Mini Squid");
  });
  CheckMeta(() => result);
  it("check that result has the guild id", function () {
    expect(result.guild)
      .to.be.a("string")
      .and.to.equal("553490650cf26f12ae5bac8f");
  });
});

describe("Get guild id by player uuid", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.findGuild.byUuid>;
  it("expect not to throw", async function () {
    result = await client.findGuild.byUuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => result);
  it("check that result has the guild id", function () {
    expect(result.guild)
      .to.be.a("string")
      .and.to.equal("553490650cf26f12ae5bac8f");
  });
});

describe("Get player's friends", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.friends.uuid>;
  it("expect not to throw", async function () {
    result = await client.friends.uuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    expect(result).to.be.an("array");
    for (const friend of result) {
      expect(friend._id).to.be.a("string");
      expect(friend.started).to.be.a("number");
      expect(friend.uuidReceiver).to.be.a("string");
      expect(friend.uuidSender).to.be.a("string");
    }
  });
});

describe("Get game counts", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.gameCounts>;
  it("expect not to throw", async function () {
    result = await client.gameCounts();
  });
  CheckMeta(() => result);
  it("check that result has player count", function () {
    expect(result.playerCount).to.be.a("number");
  });
  it("required keys should exist", function () {
    for (const gameName of Object.keys(result.games)) {
      const game = result.games[gameName];
      expect(game.players).to.be.a("number");
      if (game.modes) {
        for (const modeName of Object.keys(game.modes)) {
          const mode = game.modes[modeName];
          expect(mode).to.be.a("number");
        }
      }
    }
  });
});

describe("Get guild by id", function () {
  this.timeout(30000);
  this.slow(1000);
  let results: AsyncReturnType<typeof client.guild.id>[] = [];
  it("expect not to throw", async function () {
    results.push(await client.guild.id("553490650cf26f12ae5bac8f"));
    results.push(await client.guild.player("d705483c5157460dad39712e4d74dfe1"));
    results.push(await client.guild.name("SkyBlockZ"));
  });
  CheckMeta(() => results[0]);
  CheckMeta(() => results[1]);
  CheckMeta(() => results[2]);
  it("required keys should exist", function () {
    for (const guild of results) {
      expect(guild._id).to.be.a("string");
      const achievements = guild.achievements;
      expect(achievements).to.be.an("object");
      expect(achievements.WINNERS).to.be.a("number");
      expect(achievements.EXPERIENCE_KINGS).to.be.a("number");
      expect(achievements.ONLINE_PLAYERS).to.be.a("number");
      if (guild.banner) {
        const banner = guild.banner;
        expect(banner).to.be.an("object");
        expect(banner.Base).to.satisfy(function (val: number | string) {
          return typeof val === "number" || typeof val === "string";
        });
        expect(banner.Patterns).to.be.an("array");
        for (const pattern of banner.Patterns) {
          expect(pattern.Color).to.satisfy(function (val: number | string) {
            return typeof val === "number" || typeof val === "string";
          });
          expect(pattern.Pattern).to.be.a("string");
        }
      }
      if (guild.chatMute) {
        expect(guild.chatMute).to.be.a("number");
      }
      expect(guild.coins).to.be.a("number");
      expect(guild.coinsEver).to.be.a("number");
      expect(guild.created).to.be.a("number");
      expect(new Date(guild.created).getFullYear()).to.be.greaterThan(2010);
      if (typeof guild.description !== "undefined") {
        expect(guild.description).to.satisfy(function (val: string | null) {
          return typeof val === "string" || val === null;
        });
      }
      expect(guild.exp).to.be.a("number");
      const guildExpByGameType = guild.guildExpByGameType;
      expect(guildExpByGameType).to.be.an("object");
      for (const gameType of Object.keys(guildExpByGameType) as [
        keyof typeof guildExpByGameType
      ]) {
        expect(gameType)
          .to.be.a("string")
          .that.satisfies(function (val: string) {
            return val === val.toUpperCase();
          });
        expect(guildExpByGameType[gameType]).to.be.a("number");
      }
      if (guild.hideGmTag) {
        expect(guild.hideGmTag).to.be.a("boolean");
      }
      if (guild.joinable) {
        expect(guild.joinable).to.be.a("boolean");
      }
      if (guild.legacyRanking) {
        expect(guild.legacyRanking).to.be.a("number");
      }
      const members = guild.members;
      expect(members).to.be.an("array");
      for (const member of members) {
        for (const date of Object.keys(member.expHistory)) {
          expect(new Date(date).getFullYear()).to.be.greaterThan(2010);
          expect(member.expHistory[date]).to.be.a("number");
        }
        expect(member.joined).to.be.a("number");
        expect(new Date(member.joined).getFullYear()).to.be.greaterThan(2010);
        if (member.mutedTill) {
          expect(member.mutedTill).to.be.a("number");
          expect(new Date(member.mutedTill).getFullYear()).to.be.greaterThan(
            2010
          );
        }
        if (member.name) {
          expect(member.name).to.be.a("string");
        }
        if (member.questParticipation) {
          expect(member.questParticipation).to.be.a("number");
        }
        expect(member.rank).to.be.a("string");
        expect(member.uuid).to.be.a("string");
      }
      expect(guild.name).to.be.a("string");
      expect(guild.name_lower)
        .to.be.a("string")
        .that.satisfies(function (val: string) {
          return val === val.toLowerCase();
        });
      if (guild.preferredGames) {
        expect(guild.preferredGames)
          .to.be.an("array")
          .that.satisfies(function (value: string[]) {
            return value.every((v) => typeof v === "string");
          });
      }
      if (guild.publiclyListed) {
        expect(guild.publiclyListed).to.be.a("boolean");
      }
      const ranks = guild.ranks;
      expect(ranks).to.be.an("array");
      for (const rank of ranks) {
        expect(rank.created).to.be.a("number");
        expect(new Date(rank.created).getFullYear()).to.be.greaterThan(2010);
        if (typeof rank.default !== "undefined") {
          expect(rank.default).to.be.a("boolean");
        }
        expect(rank.name).to.be.a("string");
        expect(rank.priority).to.be.a("number");
        if (typeof rank.tag !== "undefined") {
          expect(rank.tag).to.satisfy(function (val: string | null) {
            return typeof val === "string" || val === null;
          });
        }
      }
      if (guild.tag) {
        expect(guild.tag).to.be.a("string");
      }
      if (guild.tagColor) {
        expect(guild.tagColor).to.be.a("string");
      }
    }
  });
});

describe("Get key info", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.key>;
  it("expect not to throw", async function () {
    result = await client.key();
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    expect(result.key).to.be.a("string");
    expect(result.limit).to.be.a("number");
    expect(result.owner).to.be.a("string");
    expect(result.queriesInPastMin).to.be.a("number");
    expect(result.totalQueries).to.be.a("number");
  });
});

describe("Get leaderboards", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.leaderboards>;
  it("expect not to throw", async function () {
    result = await client.leaderboards();
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    for (const gameMode of Object.keys(result)) {
      const leaderboard = result[gameMode];
      expect(leaderboard).to.be.an("array");
      for (const entry of leaderboard) {
        expect(entry.count).to.be.a("number");
        expect(entry.leaders)
          .to.be.an("array")
          .and.to.satisfy(function (leaders: (string | null)[]) {
            return leaders.every((v) => v === null || typeof v === "string");
          });
        expect(entry.location).to.be.a("string");
        expect(entry.path).to.be.a("string");
        expect(entry.prefix).to.be.a("string");
        expect(entry.title).to.be.a("string");
      }
    }
  });
});

describe("Get player", function () {
  this.timeout(30000);
  this.slow(1000);
  let player: AsyncReturnType<typeof client.player.uuid>;
  it("expect not to throw", async function () {
    player = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => player);
  it("required keys should exist", function () {
    expect(player._id).to.be.a("string");
    expect(player.uuid).to.be.a("string");
    expect(player.playername).to.be.a("string");
    expect(player.displayname).to.be.a("string");
    if (player.firstLogin) {
      expect(player.firstLogin).to.be.a("number");
    }
    if (player.lastLogin) {
      expect(player.lastLogin).to.be.a("number");
    }
    if (player.lastLogout) {
      expect(player.lastLogout).to.be.a("number");
    }
    expect(player.knownAliases)
      .to.be.an("array")
      .that.satisfies(function (value: string[]) {
        return value.every((v) => typeof v === "string");
      });
    expect(player.knownAliasesLower)
      .to.be.an("array")
      .that.satisfies(function (value: string[]) {
        return value.every((v) => typeof v === "string");
      });
    if (player.claimed_century_cake) {
      expect(player.claimed_century_cake).to.be.a("number");
    }
    if (player.claimed_potato_basket) {
      expect(player.claimed_potato_basket).to.be.a("number");
    }
    if (player.claimed_potato_talisman) {
      expect(player.claimed_potato_talisman).to.be.a("number");
    }
    if (player.monthlyPackageRank) {
      expect(player.monthlyPackageRank).to.be.a("string");
    }
    if (player.monthlyRankColor) {
      expect(player.monthlyRankColor).to.be.a("string");
    }
    if (player.newPackageRank) {
      expect(player.newPackageRank).to.be.a("string");
    }
    if (player.packageRank) {
      expect(player.packageRank).to.be.a("string");
    }
    if (player.rank) {
      expect(player.rank).to.be.a("string");
    }
    if (player.rankPlusColor) {
      expect(player.rankPlusColor).to.be.a("string");
    }
    if (player.levelUp_NONE) {
      expect(player.levelUp_NONE).to.be.a("number");
    }
    if (player.levelUp_VIP) {
      expect(player.levelUp_VIP).to.be.a("number");
    }
    if (player.levelUp_VIP_PLUS) {
      expect(player.levelUp_VIP_PLUS).to.be.a("number");
    }
    if (player.levelUp_MVP) {
      expect(player.levelUp_MVP).to.be.a("number");
    }
    if (player.levelUp_MVP_PLUS) {
      expect(player.levelUp_MVP_PLUS).to.be.a("number");
    }
    if (player.lastClaimedReward) {
      expect(player.lastClaimedReward).to.be.a("number");
    }
    if (player.lastAdsenseGenerateTime) {
      expect(player.lastAdsenseGenerateTime).to.be.a("number");
    }
    if (player.lastMapVote) {
      expect(player.lastMapVote).to.be.a("number");
    }
    if (player.mcVersionRp) {
      expect(player.mcVersionRp).to.be.a("string");
    }
    if (player.mostRecentGameType) {
      expect(player.mostRecentGameType).to.be.a("string");
    }
    if (player.mostRecentMinecraftVersion) {
      expect(player.mostRecentMinecraftVersion).to.be.a("number");
    }
    if (player.mostRecentMonthlyPackageRank) {
      expect(player.mostRecentMonthlyPackageRank).to.be.a("string");
    }
    if (player.mostRecentlyThanked) {
      expect(player.mostRecentlyThanked).to.be.a("string");
    }
    if (player.mostRecentlyThankedUuid) {
      expect(player.mostRecentlyThankedUuid).to.be.a("string");
    }
    if (player.mostRecentlyTipped) {
      expect(player.mostRecentlyTipped).to.be.a("string");
    }
    if (player.mostRecentlyTippedUuid) {
      expect(player.mostRecentlyTippedUuid).to.be.a("string");
    }
    if (player.petConsumables) {
      const petConsumables = player.petConsumables;
      expect(petConsumables)
        .to.be.an("object")
        .that.satisfies(function (
          value: NonNullable<typeof player.petConsumables>
        ) {
          return Object.values(value).every((v) => typeof v === "number");
        });
    }
    if (player.petJourneyTimestamp) {
      expect(player.petJourneyTimestamp).to.be.a("number");
    }
    if (player.quickjoin_timestamp) {
      expect(player.quickjoin_timestamp).to.be.a("number");
    }
    if (player.quickjoin_uses) {
      expect(player.quickjoin_uses).to.be.a("number");
    }
    if (player.scorpius_bribe_96) {
      expect(player.scorpius_bribe_96).to.be.a("number");
    }
    if (player.testPass) {
      expect(player.testPass).to.be.a("boolean");
    }
    if (player.watchdogBlockTimestamp) {
      expect(player.watchdogBlockTimestamp).to.be.a("number");
    }
    if (player.adsense_tokens) {
      expect(player.adsense_tokens).to.be.a("number");
    }
    if (player.networkExp) {
      expect(player.networkExp).to.be.a("number");
    }
    if (player.karma) {
      expect(player.karma).to.be.a("number");
    }
    if (player.coins) {
      expect(player.coins).to.be.a("number");
    }
    if (player.eulaCoins) {
      expect(player.eulaCoins).to.be.a("boolean");
    }
    if (player.kills) {
      expect(player.kills).to.be.a("number");
    }
    if (player.killstreaks) {
      expect(player.killstreaks).to.be.a("number");
    }
    if (player.deaths) {
      expect(player.deaths).to.be.a("number");
    }
    if (player.wins) {
      expect(player.wins).to.be.a("number");
    }
    if (player.fortuneBuff) {
      expect(player.fortuneBuff).to.be.a("number");
    }
    if (player.gifts_grinch) {
      expect(player.gifts_grinch).to.be.a("number");
    }
    if (player.hasTheHotPotato) {
      expect(player.hasTheHotPotato).to.be.a("boolean");
    }
    if (player.main2017Tutorial) {
      expect(player.main2017Tutorial).to.be.a("boolean");
    }
    if (player.monthlycrates) {
      const monthlycrates = player.monthlycrates;
      expect(monthlycrates)
        .to.be.an("object")
        .that.satisfies(function (
          value: NonNullable<typeof player.monthlycrates>
        ) {
          return Object.values(value).every((v) =>
            Object.values(v).every((iV) => typeof iV === "boolean")
          );
        });
    }
    if (player.network_update_book) {
      expect(player.network_update_book).to.be.a("string");
    }
    if (player.parkourCheckpointBests) {
      const parkourCheckpointBests = player.parkourCheckpointBests;
      expect(parkourCheckpointBests)
        .to.be.an("object")
        .that.satisfies(function (
          value: NonNullable<typeof player.parkourCheckpointBests>
        ) {
          return Object.values(value).every((v) =>
            Object.values(v).every((iV) => typeof iV === "number")
          );
        });
    }
    if (player.parkourCompletions) {
      const parkourCompletions = player.parkourCompletions;
      expect(parkourCompletions)
        .to.be.an("object")
        .that.satisfies(function (
          value: NonNullable<typeof player.parkourCompletions>
        ) {
          return Object.values(value).every((v) =>
            Object.values(v).every(
              (iV) =>
                typeof iV.timeStart === "number" &&
                typeof iV.timeTook === "number"
            )
          );
        });
    }
    if (player.petStats) {
      const petStats = player.petStats;
      expect(petStats).to.be.an("object");
      for (const petName of Object.keys(petStats)) {
        const pet = petStats[petName];
        if (pet.EXERCISE) {
          const EXERCISE = pet.EXERCISE;
          expect(EXERCISE).to.be.an("object");
          expect(EXERCISE.timestamp).to.be.a("number");
          expect(EXERCISE.value).to.be.a("number");
        }
        if (pet.HUNGER) {
          const HUNGER = pet.HUNGER;
          expect(HUNGER).to.be.an("object");
          expect(HUNGER.timestamp).to.be.a("number");
          expect(HUNGER.value).to.be.a("number");
        }
        if (pet.THIRST) {
          const THIRST = pet.THIRST;
          expect(THIRST).to.be.an("object");
          expect(THIRST.timestamp).to.be.a("number");
          expect(THIRST.value).to.be.a("number");
        }
        if (pet.experience) {
          expect(pet.experience).to.be.a("number");
        }
        if (pet.name) {
          expect(pet.name).to.be.a("string");
        }
      }
    }
    if (player.rewardConsumed) {
      expect(player.rewardConsumed).to.be.a("boolean");
    }
    if (player.rewardHighScore) {
      expect(player.rewardHighScore).to.be.a("number");
    }
    if (player.rewardScore) {
      expect(player.rewardScore).to.be.a("number");
    }
    if (player.rewardStreak) {
      expect(player.rewardStreak).to.be.a("number");
    }
    if (player.skyblock_free_cookie) {
      expect(player.skyblock_free_cookie).to.be.a("number");
    }
    if (player.shots_fired) {
      expect(player.shots_fired).to.be.a("number");
    }
    if (player.snowball_fight_intro_2019) {
      expect(player.snowball_fight_intro_2019).to.be.a("boolean");
    }
    const stats = player.stats;
    expect(stats).to.be.an("object");
    for (const gameModeName of Object.keys(stats)) {
      if (gameModeName === "Housing") {
        const gameMode: NonNullable<typeof stats.Housing> = stats[
          gameModeName
        ] as never;
        expect(gameMode).to.be.an("object");
        for (const layoutItems of Object.values(gameMode)) {
          if (typeof layoutItems !== "object")
            throw new Error("This shouldn't throw, just a typeguard.");
          for (const item of Object.values(layoutItems)) {
            expect(item).to.be.a("string");
          }
        }
      } else if (gameModeName === "SkyBlock") {
        const gameMode: NonNullable<typeof stats.SkyBlock> = stats[
          gameModeName
        ] as never;
        expect(gameMode.profiles).to.be.an("object");
        for (const key of Object.keys(gameMode.profiles)) {
          expect(key)
            .to.be.a("string")
            .that.satisfies(function (val: string) {
              return /[0-9a-z]{32}/.test(val);
            });
          const profile = gameMode.profiles[key];
          expect(profile).to.be.an("object");
          expect(profile.cute_name).to.be.a("string");
          expect(profile.profile_id).to.be.a("string");
        }
      } else if (gameModeName === "Walls3") {
        const gameMode: NonNullable<typeof stats.Walls3> = stats[
          gameModeName
        ] as never;
        expect(gameMode).to.be.an("object");
        for (const key of Object.keys(gameMode) as (keyof typeof gameMode)[]) {
          if (key === "packages") {
            expect(gameMode[key]).to.be.an("array");
            for (const val of gameMode[key] as NonNullable<
              typeof gameMode.packages
            >) {
              expect(val).to.be.a("string");
            }
          } else if (key === "classes") {
            expect(gameMode[key]).to.be.an("object");
            for (const wallsClass of Object.values(
              gameMode[key] as NonNullable<typeof gameMode.classes>
            )) {
              expect(wallsClass).to.be.an("object");
              for (const property of Object.values(wallsClass)) {
                expect(property).to.satisfy(function (val: unknown) {
                  return typeof val === "number" || typeof val === "boolean";
                });
              }
            }
          } else {
            expect(gameMode[key]).to.satisfy(function (val: unknown) {
              return (
                typeof val === "string" ||
                typeof val === "boolean" ||
                typeof val === "number"
              );
            });
          }
        }
      } else if (gameModeName === "Pit") {
        const gameMode: NonNullable<typeof stats.Pit> = stats[
          gameModeName
        ] as never;
        for (const key of Object.keys(gameMode)) {
          if (key === "packages") {
            expect(gameMode[key]).to.be.an("array");
            for (const value of gameMode[key] as NonNullable<
              typeof gameMode.packages
            >) {
              expect(value).to.be.a("string");
            }
          } else if (key === "profile") {
            const profile = gameMode[
              key
            ] as Components.Schemas.PlayerStatsPitProfile;
            expect(profile).to.be.an("object");
            for (const profileKey of Object.keys(profile)) {
              let property = profile[profileKey];
              if (["packages", "login_messages"].includes(profileKey)) {
                for (const val of property as string[]) {
                  expect(val).to.be.a("string");
                }
              } else if (profileKey === "bounties") {
                for (const bounty of property as Components.Schemas.PlayerStatsPitProfileBounty[]) {
                  expect(bounty.amount).to.be.a("number");
                  expect(bounty.issuer).to.be.a("string");
                  expect(bounty.remainingTicks).to.be.a("number");
                  expect(bounty.timestamp).to.be.a("number");
                  expect(
                    new Date(bounty.timestamp).getFullYear()
                  ).to.be.greaterThan(2010);
                }
              } else if (profileKey === "contract") {
                const contract = property as Components.Schemas.PlayerStatsPitProfileContract;
                if (contract.chunk_of_viles_reward) {
                  expect(contract.chunk_of_viles_reward).to.be.a("number");
                }
                expect(contract.completion_date).to.be.a("number");
                expect(
                  new Date(contract.completion_date).getFullYear()
                ).to.be.greaterThan(2010);
                expect(contract.difficulty).to.be.a("string");
                expect(contract.progress).to.be.an("object");
                for (const val of Object.values(contract.progress)) {
                  expect(val).to.be.a("number");
                }
                expect(contract.remaining_ticks).to.be.a("number");
                expect(contract.requirements).to.be.an("object");
                for (const val of Object.values(contract.requirements)) {
                  expect(val).to.be.a("number");
                }
                expect(contract.gold_reward).to.be.a("number");
                expect(contract.key).to.be.a("string");
              } else if (profileKey === "contract_choices") {
                for (const contract of property as Components.Schemas.PlayerStatsPitProfileContract[]) {
                  if (contract.chunk_of_viles_reward) {
                    expect(contract.chunk_of_viles_reward).to.be.a("number");
                  }
                  expect(contract.completion_date).to.be.a("number");
                  expect(
                    new Date(contract.completion_date).getFullYear()
                  ).to.be.greaterThan(2010);
                  expect(contract.difficulty).to.be.a("string");
                  expect(contract.progress).to.be.an("object");
                  for (const val of Object.values(contract.progress)) {
                    expect(val).to.be.a("number");
                  }
                  expect(contract.remaining_ticks).to.be.a("number");
                  expect(contract.requirements).to.be.an("object");
                  for (const val of Object.values(contract.requirements)) {
                    expect(val).to.be.a("number");
                  }
                  expect(contract.gold_reward).to.be.a("number");
                  expect(contract.key).to.be.a("string");
                }
              } else if (profileKey === "ended_contracts") {
                for (const contract of property as Components.Schemas.PlayerStatsPitProfileEndedContract[]) {
                  if (contract.chunk_of_viles_reward) {
                    expect(contract.chunk_of_viles_reward).to.be.a("number");
                  }
                  expect(contract.completion_date).to.be.a("number");
                  expect(
                    new Date(contract.completion_date).getFullYear()
                  ).to.be.greaterThan(2010);
                  expect(contract.difficulty).to.be.a("string");
                  expect(contract.progress).to.be.an("object");
                  for (const val of Object.values(contract.progress)) {
                    expect(val).to.be.a("number");
                  }
                  expect(contract.remaining_ticks).to.be.a("number");
                  expect(contract.requirements).to.be.an("object");
                  for (const val of Object.values(contract.requirements)) {
                    expect(val).to.be.a("number");
                  }
                }
              } else if (profileKey === "gold_transactions") {
                for (const transaction of property as Components.Schemas.PlayerStatsPitProfileTransaction[]) {
                  expect(transaction.amount).to.be.a("number");
                  expect(transaction.timestamp).to.be.a("number");
                  expect(
                    new Date(transaction.timestamp).getFullYear()
                  ).to.be.greaterThan(2010);
                }
              } else if (["cash", "renown", "xp"].includes(profileKey)) {
                expect(property).to.be.a("number");
              } else if (
                [
                  "last_contract",
                  "last_midfight_disconnect",
                  "last_save",
                  "reconessence_day",
                ].includes(profileKey)
              ) {
                property = property as number;
                expect(property).to.be.a("number");
                expect(new Date(property).getFullYear()).to.be.greaterThan(
                  2010
                );
              } else if (profileKey === "hotbar_favorites") {
                for (const value of property as number[]) {
                  expect(value).to.be.a("number");
                }
              } else if (profileKey === "trade_timestamps") {
                for (const value of property as number[]) {
                  expect(value).to.be.a("number");
                  expect(new Date(value).getFullYear()).to.be.greaterThan(2010);
                }
              } else if (
                [
                  "death_recaps",
                  "inv_armor",
                  "inv_contents",
                  "inv_enderchest",
                  "item_stash",
                  "spire_stash_armor",
                  "spire_stash_inv",
                ].includes(profileKey)
              ) {
                property = property as Components.Schemas.PlayerStatsPitProfileInventory;
                expect(property.data).to.be.an("array");
                for (const byte of property.data) {
                  expect(byte).to.be.a("number");
                }
                expect(property.type).to.be.a("number");
              } else if (
                profileKey.startsWith("selected_killstreak_") ||
                profileKey.startsWith("selected_perk_")
              ) {
                expect(property).to.satisfy(function (val: string | null) {
                  return val === null || typeof val === "string";
                });
              } else if (profileKey === "items_last_buy") {
                property = property as Components.Schemas.PlayerStatsPitProfileLastBoughtItems;
                for (const item of Object.values(property)) {
                  expect(item).to.be.a("number");
                }
              } else if (profileKey === "leaderboard_stats") {
                property = property as Components.Schemas.PlayerStatsPitProfileLeaderboardStats;
                for (const stat of Object.values(property)) {
                  expect(stat).to.be.a("number");
                }
              } else if (profileKey === "outgoing_offers") {
                property = property as Components.Schemas.PlayerStatsPitProfileOutgoingOffer[];
                expect(property).to.be.an("array").that.is.empty;
              } else if (profileKey === "prestiges") {
                for (const prestige of property as Components.Schemas.PlayerStatsPitProfilePrestige[]) {
                  expect(prestige.index).to.be.a("number");
                  expect(prestige.timestamp).to.be.a("number");
                  expect(
                    new Date(prestige.timestamp).getFullYear()
                  ).to.be.greaterThan(2010);
                  expect(prestige.xp_on_prestige).to.be.a("number");
                }
              } else if (
                ["unlocks", "renown_unlocks"].includes(profileKey) ||
                profileKey.startsWith("unlocks_")
              ) {
                for (const unlock of property as Components.Schemas.PlayerStatsPitProfileUnlock[]) {
                  expect(unlock.acquireDate).to.be.a("number");
                  expect(unlock.key).to.be.a("string");
                  expect(unlock.tier).to.be.a("number");
                }
              } else if (profileKey === "zero_point_three_gold_transfer") {
                expect(property).to.be.a("boolean");
              } else {
                if (Array.isArray(property)) {
                  console.error(property);
                  throw new Error(`unexpected array with key ${profileKey}`);
                } else if (typeof property === "object") {
                  for (const value of Object.values(
                    property as Record<string, number>
                  )) {
                    expect(value).to.be.a("number");
                  }
                } else {
                  expect(property).to.satisfy(function (
                    val: boolean | number | string
                  ) {
                    return (
                      typeof val === "boolean" ||
                      typeof val === "number" ||
                      typeof val === "string"
                    );
                  });
                }
              }
            }
          } else {
            if (typeof gameMode[key] === "object") {
              if (Array.isArray(gameMode[key])) {
                expect(gameMode[key]).to.be.an("array");
                for (const value of gameMode[key] as string[]) {
                  expect(value).to.be.a("string");
                }
              } else {
                const property = gameMode[
                  key
                ] as Components.Schemas.PlayerStatsGameMode;
                expect(property).to.be.an("object");
                if (property.packages) {
                  expect(property.packages).to.be.an("array");
                  for (const value of property.packages) {
                    expect(value).to.be.a("string");
                  }
                }
                for (const propertyKey of Object.keys(property)) {
                  if (propertyKey === "packages") continue;
                  expect(property[propertyKey]).to.satisfy(function (
                    val: unknown
                  ) {
                    return (
                      typeof val === "number" ||
                      typeof val === "boolean" ||
                      typeof val === "string"
                    );
                  });
                }
              }
            } else {
              expect(gameMode[key]).to.satisfy(function (value: unknown) {
                return (
                  typeof value === "number" ||
                  typeof value === "boolean" ||
                  typeof value === "string"
                );
              });
            }
          }
        }
      } else {
        const gameMode = stats[gameModeName] as NonNullable<
          typeof stats.Arcade
        >;
        expect(gameMode)
          .to.be.an("object")
          .that.satisfies(function (value: typeof gameMode) {
            return Object.values(value).every((v) => {
              if (Array.isArray(v)) {
                return v.every((vI) => typeof vI === "string");
              }
              return (
                typeof v === "number" ||
                typeof v === "boolean" ||
                typeof v === "string"
              );
            });
          });
      }
    }
    if (player.thanksReceived) {
      expect(player.thanksReceived).to.be.a("number");
    }
    if (player.thanksSent) {
      expect(player.thanksSent).to.be.a("number");
    }
    if (player.timePlaying) {
      expect(player.timePlaying).to.be.a("number");
    }
    if (player.totalDailyRewards) {
      expect(player.totalDailyRewards).to.be.a("number");
    }
    if (player.totalRewards) {
      expect(player.totalRewards).to.be.a("number");
    }
    if (player.tourney) {
      const tourney = player.tourney;
      expect(tourney).to.be.an("object");
      for (const key of Object.keys(tourney)) {
        if (key === "first_join_lobby" || key === "total_tributes") {
          expect(tourney[key]).to.be.a("number");
        } else if (key === "hide_purchased") {
          expect(tourney[key]).to.be.a("boolean");
        } else if (key == "shop_sort") {
          expect(tourney[key]).to.be.a("string");
        } else if (key == "playtime") {
          expect(tourney[key]).to.be.an("object");
          const playtime = tourney[key] as NonNullable<typeof tourney.playtime>;
          for (const val of Object.values(playtime)) {
            expect(val).to.be.a("number");
          }
        } else {
          expect(key)
            .to.be.a("string")
            .that.satisfies(function (val: string) {
              return val.match(/(?:\w+_)+-?\d+/);
            });
          const tourneyGameModeData: Components.Schemas.PlayerTourneyGameData = tourney[
            key
          ] as never;
          expect(tourneyGameModeData).to.be.an("object");
          if (tourneyGameModeData.claimed_ranking_reward) {
            expect(tourneyGameModeData.claimed_ranking_reward).to.be.a(
              "number"
            );
          }
          if (tourneyGameModeData.first_win) {
            expect(tourneyGameModeData.first_win).to.be.a("number");
          }
          if (tourneyGameModeData.games_played) {
            expect(tourneyGameModeData.games_played).to.be.a("number");
          }
          if (tourneyGameModeData.playtime) {
            expect(tourneyGameModeData.playtime).to.be.a("number");
          }
          if (tourneyGameModeData.seenRPbook) {
            expect(tourneyGameModeData.seenRPbook).to.be.a("boolean");
          }
          if (tourneyGameModeData.tributes_earned) {
            expect(tourneyGameModeData.tributes_earned).to.be.a("number");
          }
        }
      }
    }
    if (player.tournamentTokens) {
      expect(player.tournamentTokens).to.be.a("number");
    }
    if (player.vanityConvertedBoxToday) {
      expect(player.vanityConvertedBoxToday).to.be.a("number");
    }
    if (player.vanityFirstConvertedBox) {
      expect(player.vanityFirstConvertedBox).to.be.a("number");
    }
    if (player.voting) {
      const voting = player.voting;
      expect(voting).to.be.an("object");
      expect(voting.total).to.exist;
      for (const value of Object.values(voting)) {
        expect(value).to.be.a("number");
      }
    }
    if (player.vanityTokens) {
      expect(player.vanityTokens).to.be.a("number");
    }
    if (player.language) {
      expect(player.language).to.be.a("string");
    }
    if (player.autoDetectLanguage) {
      expect(player.autoDetectLanguage).to.be.a("boolean");
    }
    if (player.auto_spawn_pet) {
      expect(player.auto_spawn_pet).to.be.a("boolean");
    }
    if (player.battlePassGlowStatus) {
      expect(player.battlePassGlowStatus).to.be.a("boolean");
    }
    if (player.channel) {
      expect(player.channel).to.be.a("string");
    }
    if (player.chat) {
      expect(player.chat).to.be.a("boolean");
    }
    if (player.clock) {
      expect(player.clock).to.be.a("boolean");
    }
    if (player.collectibles_menu_sort) {
      expect(player.collectibles_menu_sort).to.be.a("string");
    }
    if (player.collectibles_menu_visibility_sort) {
      expect(player.collectibles_menu_visibility_sort).to.be.a("string");
    }
    if (player.combatTracker) {
      expect(player.combatTracker).to.be.a("boolean");
    }
    if (player.currentClickEffect) {
      expect(player.currentClickEffect).to.be.a("string");
    }
    if (player.currentCloak) {
      expect(player.currentCloak).to.be.a("string");
    }
    if (player.currentEmote) {
      expect(player.currentEmote).to.be.a("string");
    }
    if (player.currentGadget) {
      expect(player.currentGadget).to.be.a("string");
    }
    if (player.currentHat) {
      expect(player.currentHat).to.be.a("string");
    }
    if (player.currentPet) {
      expect(player.currentPet).to.be.a("string");
    }
    if (player.customFilter) {
      expect(player.customFilter).to.be.a("string");
    }
    if (player.disableTipMessages) {
      expect(player.disableTipMessages).to.be.a("boolean");
    }
    if (player.disguise) {
      expect(player.disguise).to.be.a("string");
    }
    if (player.gadget) {
      expect(player.gadget).to.be.a("string");
    }
    if (player.notifications) {
      expect(player.notifications).to.be.a("boolean");
    }
    if (player.outfit) {
      const outfit = player.outfit;
      expect(outfit).to.be.an("object");
      for (const piece of Object.keys(
        player.outfit
      ) as (keyof typeof player.outfit)[]) {
        expect(piece)
          .to.be.a("string")
          .that.satisfies(function (val: string) {
            return val === val.toUpperCase();
          });
        expect(player.outfit[piece]).to.be.a("string");
      }
    }
    if (player.onetime_achievement_menu_sort) {
      expect(player.onetime_achievement_menu_sort).to.be.a("string");
    }
    if (player.onetime_achievement_menu_sort_completion_sort) {
      expect(player.onetime_achievement_menu_sort_completion_sort).to.be.a(
        "string"
      );
    }
    if (player.particlePack) {
      expect(player.particlePack).to.be.a("string");
    }
    if (player.petActive) {
      expect(player.petActive).to.be.a("boolean");
    }
    if (player.pp) {
      expect(player.pp).to.be.a("string");
    }
    if (player.questSettings) {
      const questSettings = player.questSettings;
      expect(questSettings).to.be.an("object");
      if (questSettings.autoActivate) {
        expect(questSettings.autoActivate).to.be.a("boolean");
      }
      for (const key of Object.keys(questSettings)) {
        expect(key).to.be.a("string").that.equals("autoActivate");
      }
    }
    if (player.seeRequests) {
      expect(player.seeRequests).to.be.a("boolean");
    }
    if (player.sendCerberusMessages) {
      expect(player.sendCerberusMessages).to.be.a("boolean");
    }
    if (player.settings) {
      const settings = player.settings;
      expect(settings).to.be.an("object");
      if (settings.compass) {
        expect(settings.compass).to.be.an("object");
        for (const val of Object.values(settings.compass)) {
          expect(val).to.be.a("string");
        }
      }
      for (const key of Object.keys(settings)) {
        if (key === "compass") continue;
        expect(settings[key]).to.satisfy(function (
          val: string | number | boolean
        ) {
          return (
            typeof val === "string" ||
            typeof val === "number" ||
            typeof val === "boolean"
          );
        });
      }
    }
    if (player.skin) {
      const skin = player.skin;
      expect(skin).to.be.an("object");
      expect(skin.signature).to.be.a("string");
      expect(skin.timeoutStart).to.be.a("number");
      expect(skin.value).to.be.a("string");
    }
    if (player.socialMedia) {
      const socialMedia = player.socialMedia;
      expect(socialMedia).to.be.an("object");
      expect(socialMedia.links).to.be.an("object");
      for (const key of Object.keys(socialMedia.links)) {
        expect(key).to.satisfy(function (val: string) {
          return val.toUpperCase() === val;
        });
        expect(socialMedia.links[key]).to.be.a("string");
      }
      expect(socialMedia.prompt).to.be.a("boolean");
      for (const key of Object.keys(socialMedia)) {
        if (key === "prompt" || key === "links") {
          continue;
        }
        expect(key).to.satisfy(function (val: string) {
          return val.toUpperCase() === val;
        });
        expect(socialMedia[key]).to.be.a("string");
      }
    }
    if (player.spec_always_flying) {
      expect(player.spec_always_flying).to.be.a("boolean");
    }
    if (player.spec_auto_teleport) {
      expect(player.spec_auto_teleport).to.be.a("boolean");
    }
    if (player.spec_first_person) {
      expect(player.spec_first_person).to.be.a("boolean");
    }
    if (player.spectators_invisible) {
      expect(player.spectators_invisible).to.be.a("boolean");
    }
    if (player.tiered_achievement_menu_sort) {
      expect(player.tiered_achievement_menu_sort).to.be.a("string");
    }
    if (player.transformation) {
      expect(player.transformation).to.be.a("string");
    }
    if (player.userLanguage) {
      expect(player.userLanguage).to.be.a("string");
    }
    if (player.vanityFavorites) {
      expect(player.vanityFavorites).to.be.a("string");
    }
    if (player.wardrobe) {
      expect(player.wardrobe).to.be.a("string");
    }
    if (player.friendBlocksUuid) {
      expect(player.friendBlocksUuid)
        .to.be.an("array")
        .that.satisfies(function (value: string[]) {
          return value.every((v) => typeof v === "string");
        });
    }
    if (player.friendRequests) {
      expect(player.friendRequests)
        .to.be.an("array")
        .that.satisfies(function (value: string[]) {
          return value.every((v) => typeof v === "string");
        });
    }
    if (player.friendRequestsUuid) {
      expect(player.friendRequestsUuid)
        .to.be.an("array")
        .that.satisfies(function (value: string[]) {
          return value.every((v) => typeof v === "string");
        });
    }
    if (player.guildInvites) {
      expect(player.guildInvites)
        .to.be.an("array")
        .that.satisfies(function (value: string[]) {
          return value.every((v) => typeof v === "string");
        });
    }
    if (player.guildKickReason) {
      expect(player.guildKickReason).to.be.a("string");
    }
    if (player.guildNotifications) {
      expect(player.guildNotifications).to.be.a("boolean");
    }
    if (player.challenges) {
      const challenges = player.challenges;
      expect(challenges).to.be.an("object");
      for (const challenge of Object.values(challenges)) {
        for (const value of Object.values(challenge)) {
          expect(value).to.be.a("number");
        }
      }
    }
    if (player.quests) {
      const quests = player.quests;
      expect(quests).to.be.an("object");
      for (const quest of Object.values(quests)) {
        expect(quest).to.be.an("object");
        if (quest.active) {
          expect(quest.active.objectives).to.be.an("object");
          for (const objective of Object.values(quest.active.objectives)) {
            expect(objective).to.satisfy(function (value: string | number) {
              return typeof value === "string" || typeof value === "number";
            });
          }
          if (quest.active.started) {
            expect(quest.active.started).to.be.a("number");
          }
        }
        if (quest.completions) {
        }
      }
    }
    if (player.aprilFoolsStaffClicked_0) {
      expect(player.aprilFoolsStaffClicked_0)
        .to.be.an("array")
        .that.satisfies(function (value: string[]) {
          return value.every((v) => typeof v === "string");
        });
    }
    if (player.anniversaryNPCProgress2020) {
      expect(player.anniversaryNPCProgress2020).to.be.a("number");
    }
    if (player.anniversaryNPCVisited2020) {
      expect(player.anniversaryNPCVisited2020)
        .to.be.an("array")
        .that.satisfies(function (value: number[]) {
          return value.every((v) => typeof v === "number");
        });
    }
    if (player.SANTA_FINISHED) {
      expect(player.SANTA_FINISHED).to.be.a("boolean");
    }
    if (player.SANTA_QUEST_STARTED) {
      expect(player.SANTA_QUEST_STARTED).to.be.a("boolean");
    }
    if (player.compassStats) {
      const compassStats = player.compassStats;
      expect(compassStats).to.be.an("object");
      for (const stats of Object.values(
        compassStats as { [name: string]: NonNullable<typeof compassStats.npc> }
      )) {
        for (const stat of Object.values(stats)) {
          expect(stat).to.be.a("number");
        }
      }
    }
    if (player.cooldowns) {
      const cooldowns = player.cooldowns;
      expect(cooldowns).to.be.an("object");
      expect(cooldowns.fun).to.be.an("object");
      for (const cooldown of Object.values(cooldowns.fun)) {
        expect(cooldown).to.be.a("number");
      }
    }
    if (player.fireworksStorage) {
      const fireworksStorage = player.fireworksStorage;
      expect(fireworksStorage).to.be.an("array");
      for (const firework of fireworksStorage) {
        expect(firework.colors).to.be.a("string");
        expect(firework.fade_colors).to.be.a("string");
        expect(firework.flight_duration).to.be.a("number");
        expect(firework.selected).to.be.a("boolean");
        if (firework.shape) {
          expect(firework.shape).to.be.a(" string");
        }
        expect(firework.trail).to.be.a("boolean");
        expect(firework.twinkle).to.be.a("boolean");
      }
    }
    if (player.giftingMeta) {
      const giftingMeta = player.giftingMeta;
      expect(giftingMeta).to.be.an("object");
      if (giftingMeta.bundlesReceived) {
        expect(giftingMeta.bundlesReceived).to.be.a("number");
      }
      if (giftingMeta.bundlesGiven) {
        expect(giftingMeta.bundlesGiven).to.be.a("number");
      }
      if (giftingMeta.giftsGiven) {
        expect(giftingMeta.giftsGiven).to.be.a("number");
      }
      if (giftingMeta.milestones) {
        expect(giftingMeta.milestones).to.be.an("array");
        for (const milestone of giftingMeta.milestones) {
          expect(milestone).to.be.a("string");
        }
      }
      if (giftingMeta.realBundlesGiven) {
        expect(giftingMeta.realBundlesGiven).to.be.a("number");
      }
      if (giftingMeta.realBundlesReceived) {
        expect(giftingMeta.realBundlesReceived).to.be.a("number");
      }
      if (giftingMeta.realBundlesReceivedInc) {
        expect(giftingMeta.realBundlesReceivedInc).to.be.a("number");
      }
    }
    if (player.housingMeta) {
      const housingMeta = player.housingMeta;
      expect(housingMeta).to.be.an("object");
      for (const meta of Object.values(housingMeta)) {
        if (typeof meta === "object") {
          if (Array.isArray(meta)) {
            for (const val of meta) {
              expect(val).to.be.a("string");
            }
            continue;
          }
          for (const setting of Object.values(meta)) {
            expect(setting).to.satisfy(function (val: typeof setting) {
              return typeof val === "string" || typeof val === "number";
            });
          }
          continue;
        }
        expect(meta).to.satisfy(function (val: typeof meta) {
          return (
            typeof val === "string" ||
            typeof val === "number" ||
            typeof val === "boolean"
          );
        });
      }
    }
    if (player.vanityMeta) {
      const vanityMeta = player.vanityMeta;
      expect(vanityMeta).to.be.an("object");
      expect(vanityMeta.packages).to.be.an("array");
      for (const val of vanityMeta.packages) {
        expect(val).to.be.a("string");
      }
    }
    if (player.flashingSaleClicks) {
      expect(player.flashingSaleClicks).to.be.a("number");
    }
    if (player.flashingSaleOpens) {
      expect(player.flashingSaleOpens).to.be.a("number");
    }
    if (player.flashingSalePoppedUp) {
      expect(player.flashingSalePoppedUp).to.be.a("number");
    }
    if (player.flashingSalePopup) {
      expect(player.flashingSalePopup).to.be.a("number");
    }
    if (player.adventRewards2017) {
      const adventRewards2017 = player.adventRewards2017;
      expect(adventRewards2017).to.be.an("object");
      for (const val of Object.values(adventRewards2017)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.adventRewards2018) {
      const adventRewards2018 = player.adventRewards2018;
      expect(adventRewards2018).to.be.an("object");
      for (const val of Object.values(adventRewards2018)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.adventRewards_v2_2018) {
      const adventRewards_v2_2018 = player.adventRewards_v2_2018;
      expect(adventRewards_v2_2018).to.be.an("object");
      for (const val of Object.values(adventRewards_v2_2018)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.adventRewards2019) {
      const adventRewards2019 = player.adventRewards2019;
      expect(adventRewards2019).to.be.an("object");
      for (const val of Object.values(adventRewards2019)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.adventRewards_v2_2019) {
      const adventRewards_v2_2019 = player.adventRewards_v2_2019;
      expect(adventRewards_v2_2019).to.be.an("object");
      for (const val of Object.values(adventRewards_v2_2019)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.christmas2019Cooldowns) {
      const christmas2019Cooldowns = player.christmas2019Cooldowns;
      expect(christmas2019Cooldowns).to.be.an("object");
      for (const val of Object.values(christmas2019Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.summer2020Cooldowns) {
      const summer2020Cooldowns = player.summer2020Cooldowns;
      expect(summer2020Cooldowns).to.be.an("object");
      for (const val of Object.values(summer2020Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.easter2020Cooldowns) {
      const easter2020Cooldowns = player.easter2020Cooldowns;
      expect(easter2020Cooldowns).to.be.an("object");
      for (const val of Object.values(easter2020Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.easter2020Cooldowns2) {
      const easter2020Cooldowns2 = player.easter2020Cooldowns2;
      expect(easter2020Cooldowns2).to.be.an("object");
      for (const val of Object.values(easter2020Cooldowns2)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.halloween2016Cooldowns) {
      const halloween2016Cooldowns = player.halloween2016Cooldowns;
      expect(halloween2016Cooldowns).to.be.an("object");
      for (const val of Object.values(halloween2016Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.halloween2020Cooldowns) {
      const halloween2020Cooldowns = player.halloween2020Cooldowns;
      expect(halloween2020Cooldowns).to.be.an("object");
      for (const val of Object.values(halloween2020Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.holiday2016Cooldowns) {
      const holiday2016Cooldowns = player.holiday2016Cooldowns;
      expect(holiday2016Cooldowns).to.be.an("object");
      for (const val of Object.values(holiday2016Cooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.specialtyCooldowns) {
      const specialtyCooldowns = player.specialtyCooldowns;
      expect(specialtyCooldowns).to.be.an("object");
      for (const val of Object.values(specialtyCooldowns)) {
        expect(val).to.be.a("boolean");
      }
    }
    if (player.upcomingLanguageRelease_Korean) {
      const upcomingLanguageRelease_Korean =
        player.upcomingLanguageRelease_Korean;
      expect(upcomingLanguageRelease_Korean).to.be.an("object");
      expect(upcomingLanguageRelease_Korean.logins).to.be.a("number");
    }
    if (player.upcomingLanguageRelease_Portuguese) {
      const upcomingLanguageRelease_Portuguese =
        player.upcomingLanguageRelease_Portuguese;
      expect(upcomingLanguageRelease_Portuguese).to.be.an("object");
      expect(upcomingLanguageRelease_Portuguese.logins).to.be.a("number");
    }
    if (player.upcomingLanguageRelease_Russian) {
      const upcomingLanguageRelease_Russian =
        player.upcomingLanguageRelease_Russian;
      expect(upcomingLanguageRelease_Russian).to.be.an("object");
      expect(upcomingLanguageRelease_Russian.logins).to.be.a("number");
    }
    if (player.plotResets) {
      const plotResets = player.plotResets;
      expect(plotResets).to.be.an("object");
      expect(plotResets.time).to.be.a("number");
      expect(plotResets.uuid).to.be.a("string");
    }
    expect(player.achievementPoints).to.be.a("number");
    if (player.achievementRewardsNew) {
      const achievementRewardsNew = player.achievementRewardsNew;
      expect(achievementRewardsNew).to.be.an("object");
      for (const val of Object.values(achievementRewardsNew)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.achievementSync) {
      const achievementSync = player.achievementSync;
      expect(achievementSync).to.be.an("object");
      expect(achievementSync.quake_tiered).to.be.a("number");
      for (const val of Object.values(achievementSync)) {
        expect(val).to.be.a("number");
      }
    }
    if (player.achievementTotem) {
      const achievementTotem = player.achievementTotem;
      expect(achievementTotem).to.be.an("object");
      expect(achievementTotem.allowed_max_height).to.be.a("number");
      expect(achievementTotem.canCustomize).to.be.a("boolean");
      expect(achievementTotem.selectedColors).to.be.an("object");
      for (const key of Object.keys(achievementTotem.selectedColors)) {
        expect(key)
          .to.be.a("string")
          .that.satisfies(function (val: string) {
            return val.startsWith("slotcolor_");
          });
        expect(achievementTotem.selectedColors[key]).to.be.a("string");
      }
      expect(achievementTotem.selectedParts).to.be.an("object");
      for (const key of Object.keys(achievementTotem.selectedParts)) {
        expect(key)
          .to.be.a("string")
          .that.satisfies(function (val: string) {
            return val.startsWith("slot_");
          });
        expect(achievementTotem.selectedParts[key]).to.be.a("string");
      }
      for (const color of achievementTotem.unlockedColors) {
        expect(color).to.be.a("string");
      }
      for (const part of achievementTotem.unlockedParts) {
        expect(part).to.be.a("string");
      }
    }
    expect(player.achievementTracking)
      .to.be.an("array")
      .that.satisfies(function (value: string[]) {
        return value.every((v) => typeof v === "string");
      });
    if (player.achievementTrackingHideMessages) {
      expect(player.achievementTrackingHideMessages).to.be.a("boolean");
    }
    const achievements = player.achievements;
    expect(achievements)
      .to.be.an("object")
      .that.satisfies(function (value: typeof player.achievements) {
        return Object.values(value).every((v) => typeof v === "number");
      });
    expect(player.achievementsOneTime)
      .to.be.an("array")
      .that.satisfies(function (value: string[]) {
        return value.every((v) => typeof v === "string");
      });
  });
});

describe("Get player count", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.playerCount>;
  it("expect not to throw", async function () {
    result = await client.playerCount();
  });
  CheckMeta(() => result);
  it("check that result has player count", function () {
    expect(result.playerCount).to.be.a("number");
  });
});

describe("Get player recent games", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.recentGames.uuid>;
  it("expect not to throw", async function () {
    result = await client.recentGames.uuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => result);
  it("check that result is array", function () {
    // can't reliably check array items for keys as a player's uuid can't be guaranteed to always be playing games
    expect(result).to.be.an("array");
  });
});

describe("Query achievements resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.achievements>;
  it("expect not to throw", async function () {
    result = await client.resources.achievements();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    expect(result).to.be.an("object");
    for (const gameModeName of Object.keys(result)) {
      expect(gameModeName).to.be.a("string");
      const gameMode = result[gameModeName];
      expect(gameMode).to.be.an("object");
      expect(gameMode)
        .to.be.an("object")
        .that.has.all.keys(
          "one_time",
          "tiered",
          "total_points",
          "total_legacy_points"
        );
      expect(gameMode).to.have.property("one_time").that.is.an("object");
      for (const achievementKey of Object.keys(gameMode.one_time)) {
        expect(achievementKey).to.be.a("string");
        const achievement = gameMode.one_time[achievementKey];
        expect(achievement).to.be.an("object");
        expect(achievement.name).to.be.a("string");
        expect(achievement.description).to.be.a("string");
        expect(achievement.points).to.be.a("number");
        if (achievement.secret) {
          expect(achievement.secret).to.be.a("boolean");
        }
        if (achievement.legacy) {
          expect(achievement.legacy).to.be.a("boolean");
        }
        if (achievement.gamePercentUnlocked) {
          expect(achievement.gamePercentUnlocked).to.be.a("number");
        }
        if (achievement.globalPercentUnlocked) {
          expect(achievement.globalPercentUnlocked).to.be.a("number");
        }
      }
      expect(gameMode).to.have.property("tiered").that.is.an("object");
      for (const achievementKey of Object.keys(gameMode.tiered)) {
        expect(achievementKey).to.be.a("string");
        const achievement = gameMode.tiered[achievementKey];
        expect(achievement).to.be.an("object");
        expect(achievement.name).to.be.a("string");
        expect(achievement.description).to.be.a("string");
        if (achievement.legacy) {
          expect(achievement.legacy).to.be.a("boolean");
        }
        for (const tier of achievement.tiers) {
          expect(tier.tier).to.be.a("number");
          expect(tier.points).to.be.a("number");
          expect(tier.amount).to.be.a("number");
        }
      }
      expect(gameMode.total_points).to.be.a("number");
      expect(gameMode.total_legacy_points).to.be.a("number");
    }
  });
});

describe("Query challenges resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.challenges>;
  it("expect not to throw", async function () {
    result = await client.resources.challenges();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    expect(result).to.be.an("object");
    for (const gameModeName of Object.keys(result)) {
      expect(gameModeName).to.be.a("string");
      const gameMode = result[gameModeName];
      expect(gameMode).to.be.an("array");
      for (const challenge of gameMode) {
        expect(challenge.id).to.be.a("string");
        expect(challenge.name).to.be.a("string");
        expect(challenge.rewards).to.be.an("array");
        for (const reward of challenge.rewards) {
          expect(reward.type).to.be.a("string");
          expect(reward.amount).to.be.a("number");
        }
      }
    }
  });
});

describe("Query quests resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.quests>;
  it("expect not to throw", async function () {
    result = await client.resources.quests();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    expect(result).to.be.an("object");
    for (const gameModeName of Object.keys(result)) {
      expect(gameModeName).to.be.a("string");
      const gameMode = result[gameModeName];
      expect(gameMode).to.be.an("array");
      for (const quest of gameMode) {
        expect(quest.id).to.be.a("string");
        expect(quest.name).to.be.a("string");
        expect(quest.description).to.be.a("string");
        expect(quest.objectives).to.be.an("array");
        for (const objective of quest.objectives) {
          expect(objective.id).to.be.a("string");
          expect(objective.type).to.be.a("string");
          if (objective.integer) expect(objective.integer).to.be.a("number");
        }
        expect(quest.requirements).to.be.an("array");
        for (const requirement of quest.requirements) {
          expect(requirement)
            .to.be.an("object")
            .that.has.all.keys("type")
            .and.has.property("type")
            .that.is.a("string");
        }
        expect(quest.rewards).to.be.an("array");
        for (const reward of quest.rewards) {
          expect(reward.type).to.be.a("string");
          if (reward.package) expect(reward.package).to.be.a("string");
          if (reward.amount) expect(reward.amount).to.be.a("number");
        }
      }
    }
  });
});

describe("Query guild achievements resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.guilds.achievements>;
  it("expect not to throw", async function () {
    result = await client.resources.guilds.achievements();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    expect(result).to.be.an("object");
    expect(result.one_time).to.be.an("object").that.is.empty;
    // one_time is presently empty - we should change our approach if it ever gets filled
    for (const achievementName of Object.keys(result.tiered)) {
      expect(achievementName).to.be.a("string");
      const achievement = result.tiered[achievementName];
      expect(achievement).to.be.an("object");
      expect(achievement.name).to.be.a("string");
      expect(achievement.description).to.be.a("string");
      expect(achievement.tiers).to.be.an("array");
      for (const tier of achievement.tiers) {
        expect(tier.amount).to.be.a("number");
        expect(tier.tier).to.be.a("number");
      }
    }
  });
});

describe("Query guild permissions resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.guilds.permissions>;
  it("expect not to throw", async function () {
    result = await client.resources.guilds.permissions();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    expect(result).to.be.an("array");
    for (const permission of result) {
      expect(permission)
        .to.be.an("object")
        .that.has.property("en_us")
        .that.is.an("object");
      expect(permission.en_us.name).to.be.a("string");
      expect(permission.en_us.description).to.be.a("string");
      expect(permission.en_us.item)
        .to.be.an("object")
        .that.has.property("name")
        .that.is.a("string");
    }
  });
});

describe("Query SkyBlock collections resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.skyblock.collections>;
  it("expect not to throw", async function () {
    result = await client.resources.skyblock.collections();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    for (const key of Object.keys(result)) {
      const collection = result[key];
      expect(collection.name).to.be.a("string").and.not.be.empty;
      expect(collection.items).to.be.an("object");
      expect(Object.keys(collection.items)).not.be.empty;
      for (const itemName of Object.keys(collection.items)) {
        const item = collection.items[itemName];
        expect(item.name).to.be.a("string").and.not.be.empty;
        expect(item.maxTiers).to.be.a("number");
        expect(item.tiers).to.be.an("array").and.not.be.empty;
      }
    }
  });
});

describe("Query SkyBlock skills resource", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.resources.skyblock.skills>;
  it("expect not to throw", async function () {
    result = await client.resources.skyblock.skills();
  });
  CheckMeta(() => result, true);
  it("required keys should exist", function () {
    for (const key of Object.keys(result)) {
      const skill = result[key];
      expect(skill.name).to.be.a("string").and.not.be.empty;
      expect(skill.description).to.be.a("string").and.not.be.empty;
      expect(skill.maxLevel).to.be.a("number");
      expect(skill.levels).to.be.an("array").and.not.be.empty;
      for (const level of skill.levels) {
        expect(level.level).to.be.a("number");
        expect(level.totalExpRequired).to.be.a("number");
        expect(level.unlocks).to.be.an("array");
      }
    }
  });
});

const CheckAuctions = (
  data: () =>
    | AsyncReturnType<typeof client.skyblock.auction.player>
    | AsyncReturnType<typeof client.skyblock.auction.profile>
    | AsyncReturnType<typeof client.skyblock.auction.uuid>
    | AsyncReturnType<typeof client.skyblock.auctions.page>,
  msg: string
) => {
  let value: ReturnType<typeof data>;
  beforeEach(function () {
    value = data() as never;
  });
  it(msg, function () {
    if (Array.isArray(value)) {
    }
    for (const auction of Array.isArray(value) ? value : value.auctions) {
      expect(auction.uuid).to.be.a("string");
      expect(auction.auctioneer).to.be.a("string");
      expect(auction.profile_id).to.be.a("string");
      expect(auction.coop)
        .to.be.an("array")
        .that.satisfies(function (coop: typeof auction.coop) {
          return coop.every((c) => typeof c === "string");
        });
      expect(auction.category).to.be.a("string");
      expect(auction.bids)
        .to.be.an("array")
        .that.satisfies(function (bids: typeof auction.bids) {
          return bids.every(
            (bid) =>
              typeof bid.amount === "number" &&
              typeof bid.auction_id === "string" &&
              typeof bid.bidder === "string" &&
              (!bid.profile_id || typeof bid.profile_id === "string") &&
              typeof bid.timestamp === "number"
          );
        });
      expect(auction.claimed).to.be.a("boolean");
      expect(auction.claimed_bidders)
        .to.be.an("array")
        .that.satisfies(function (coop: typeof auction.coop) {
          return coop.every((c) => typeof c === "string");
        });
      expect(auction.starting_bid).to.be.a("number");
      expect(auction.highest_bid_amount).to.be.a("number");
      expect(auction.start).to.be.a("number");
      expect(auction.end).to.be.a("number");
      expect(auction.extra).to.be.a("string");
      expect(auction.item_name).to.be.a("string");
      expect(auction.item_lore).to.be.a("string");
      let bytes: string;
      if (Array.isArray(value)) {
        const auctionEndpoint: AsyncReturnType<
          typeof client.skyblock.auction.player
        >[number] = auction as never;
        expect(auctionEndpoint._id).to.be.a("string");
        expect(auctionEndpoint.item_bytes)
          .to.be.an("object")
          .that.satisfies(function (
            item_bytes: typeof auctionEndpoint.item_bytes
          ) {
            return (
              typeof item_bytes.data === "string" &&
              typeof item_bytes.type === "number"
            );
          });
      } else {
        expect(auction.item_bytes).to.be.a("string");
      }
      bytes =
        typeof auction.item_bytes === "string"
          ? auction.item_bytes
          : auction.item_bytes.data;
      const buffer = Buffer.from(bytes, "base64");
      const text = buffer.toString("utf-8");
      expect(text).to.be.a("string");
      expect(auction.tier).to.be.a("string");
      if (auction.bin) expect(auction.bin).to.be.a("boolean");
    }
  });
};

describe("Get SkyBlock auctions page 1 & each skyblock.auction method once", function () {
  this.timeout(30000);
  this.slow(1000);
  let response: AsyncReturnType<typeof client.skyblock.auctions.page>;
  it("expect success on /skyblock/auctions", async function () {
    response = await client.skyblock.auctions.page();
  });
  CheckMeta(() => response, true);
  it("required keys should exist on auctions response", function () {
    expect(response.lastUpdated).to.be.a("number");
    expect(response.page).to.be.a("number");
    expect(response.totalAuctions).to.be.a("number");
    expect(response.totalPages).to.be.a("number");
    expect(response.auctions).to.be.an("array");
  });
  CheckAuctions(
    () => response,
    "auctions from /skyblock/auctions should have required keys"
  );
  let responsePlayer: AsyncReturnType<typeof client.skyblock.auction.player>;
  let responseProfile: AsyncReturnType<typeof client.skyblock.auction.profile>;
  let responseUuid: AsyncReturnType<typeof client.skyblock.auction.uuid>;
  it("call /skyblock/auction player, profile, uuid and expect success", async function () {
    responsePlayer = await client.skyblock.auction.player(
      response.auctions[0].auctioneer
    );
    responseProfile = await client.skyblock.auction.profile(
      response.auctions[0].profile_id
    );
    responseUuid = await client.skyblock.auction.uuid(
      response.auctions[0].uuid
    );
  });
  CheckMeta(() => responsePlayer);
  CheckMeta(() => responseProfile);
  CheckMeta(() => responseUuid);
  CheckAuctions(
    () => responsePlayer,
    "auctions from /skyblock/auction?player should have required keys"
  );
  CheckAuctions(
    () => responseProfile,
    "auctions from /skyblock/auction?profile should have required keys"
  );
  CheckAuctions(
    () => responseUuid,
    "auctions from /skyblock/auction?uuid should have required keys"
  );
});

describe("Get ended SkyBlock auctions", function () {
  this.timeout(30000);
  this.slow(1000);
  let response: AsyncReturnType<typeof client.skyblock.auctions_ended>;
  it("expect success on /skyblock/auctions_ended", async function () {
    response = await client.skyblock.auctions_ended();
  });
  CheckMeta(() => response, true);
  it("required keys should exist on auctions response", function () {
    expect(response.lastUpdated).to.be.a("number");
    for (const auction of response.auctions) {
      expect(auction.auction_id).to.be.a("string");
      expect(auction.seller).to.be.a("string");
      expect(auction.seller_profile).to.be.a("string");
      expect(auction.buyer).to.be.a("string");
      expect(auction.timestamp).to.be.a("number");
      expect(auction.price).to.be.a("number");
      expect(auction.bin).to.be.a("boolean");
      expect(auction.item_bytes).to.be.a("string");
    }
  });
});

describe("Get SkyBlock bazaar products", function () {
  this.timeout(30000);
  this.slow(1000);
  let response: AsyncReturnType<typeof client.skyblock.bazaar>;
  it("expect success", async function () {
    response = await client.skyblock.bazaar();
  });
  CheckMeta(() => response, true);
  it("required keys should exist on response", function () {
    expect(response).to.be.an("object");
    for (const itemId of Object.keys(response)) {
      expect(itemId).to.be.a("string");
      const item = response[itemId];
      expect(item).to.be.an("object");
      expect(item.product_id).to.be.a("string");
      expect(item.buy_summary).to.be.an("array");
      for (const obj of item.buy_summary) {
        expect(obj.amount).to.be.a("number");
        expect(obj.orders).to.be.a("number");
        expect(obj.pricePerUnit).to.be.a("number");
      }
      expect(item.sell_summary).to.be.an("array");
      for (const obj of item.sell_summary) {
        expect(obj.amount).to.be.a("number");
        expect(obj.orders).to.be.a("number");
        expect(obj.pricePerUnit).to.be.a("number");
      }
      expect(item.quick_status).to.be.an("object");
      expect(item.quick_status.productId).to.be.a("string");
      expect(item.quick_status.buyMovingWeek).to.be.a("number");
      expect(item.quick_status.buyOrders).to.be.a("number");
      expect(item.quick_status.buyPrice).to.be.a("number");
      expect(item.quick_status.buyVolume).to.be.a("number");
      expect(item.quick_status.sellMovingWeek).to.be.a("number");
      expect(item.quick_status.sellOrders).to.be.a("number");
      expect(item.quick_status.sellPrice).to.be.a("number");
      expect(item.quick_status.sellVolume).to.be.a("number");
    }
  });
});

describe("Check SkyBlock news", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.skyblock.news>;
  it("expect success", async function () {
    result = await client.skyblock.news();
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    for (const news of result) {
      expect(news.title).to.be.a("string").and.not.be.empty;
      expect(news.link).to.be.a("string").and.not.be.empty;
      expect(news.text).to.be.a("string").and.not.be.empty;
      expect(news.item).to.be.an("object").and.not.be.empty;
      expect(news.item.material).to.be.a("string").and.not.be.empty;
      expect(news.item.data).to.satisfy(function (v: unknown) {
        return typeof v === "undefined" || typeof v === "number";
      });
    }
  });
});

describe("Get SkyBlock profiles", function () {
  this.timeout(30000);
  this.slow(1000);
  let responseProfile: AsyncReturnType<typeof client.skyblock.profile>;
  let responseProfiles: AsyncReturnType<typeof client.skyblock.profiles.uuid>;
  it("expect success", async function () {
    responseProfile = await client.skyblock.profile(
      "20934ef9488c465180a78f861586b4cf"
    );
    responseProfiles = await client.skyblock.profiles.uuid(
      "20934ef9488c465180a78f861586b4cf"
    );
  });
  CheckMeta(() => responseProfile);
  CheckMeta(() => responseProfiles);
  it("required keys should exist on response", function () {
    expect(responseProfile).to.be.an("object");
    expect(responseProfiles).to.be.an("array");
    const profiles = [responseProfile, ...responseProfiles];
    for (const profile of profiles) {
      if (profile === null) throw new Error("Profile should not be null.");
      if ((profile as { cute_name?: string }).cute_name) {
        expect((profile as { cute_name: string }).cute_name).to.be.a("string");
      }
      if (profile.autodelete) expect(profile.autodelete).to.be.a("boolean");
      if (profile.banking) {
        expect(profile.banking.balance).to.be.a("number");
        for (const transaction of profile.banking.transactions) {
          expect(transaction.action).to.be.a("string");
          expect(transaction.initiator_name).to.be.a("string");
          expect(transaction.amount).to.be.a("number");
          expect(transaction.timestamp).to.be.a("number");
        }
      }
      if (profile.community_upgrades) {
        profile.community_upgrades.currently_upgrading;
        if (profile.community_upgrades.upgrade_states) {
          for (const state of profile.community_upgrades.upgrade_states) {
            expect(state.fasttracked).to.be.a("boolean");
            expect(state.claimed_by).to.be.a("string");
            expect(state.started_by).to.be.a("string");
            expect(state.upgrade).to.be.a("string");
            expect(state.started_ms).to.be.a("number");
            expect(state.claimed_ms).to.be.a("number");
            expect(state.tier).to.be.a("number");
          }
        }
      }
      if (profile.game_mode) expect(profile.game_mode).to.be.a("string");
      for (const memberUuid of Object.keys(profile.members)) {
        expect(memberUuid).to.be.a("string");
        const member = profile.members[memberUuid];
        expect(member).to.be.an("object");
        expect(member.coin_purse).to.be.a("number");
        expect(member.first_join).to.be.a("number");
        expect(member.first_join_hub).to.be.a("number");
        expect(member.last_death).to.be.a("number");
        expect(member.last_save).to.be.a("number");
        expect(member.inv_armor)
          .to.be.an("object")
          .that.satisfies(function (
            value: Components.Schemas.SkyBlockProfileInventoryData
          ) {
            return (
              typeof value.type === "number" && typeof value.data === "string"
            );
          });
        member.objectives;
        member.quests;
        member.stats;

        expect(member.tutorial)
          .to.be.an("array")
          .that.satisfies(function (val: string[]) {
            return val.every((v) => typeof v === "string");
          });
        expect(member.visited_zones)
          .to.be.an("array")
          .that.satisfies(function (val: string[]) {
            return val.every((v) => typeof v === "string");
          });

        if (member.achievement_spawned_island_types) {
          expect(member.achievement_spawned_island_types)
            .to.be.an("array")
            .that.satisfies(function (val: string[]) {
              return val.every((v) => typeof v === "string");
            });
        }
        if (member.coop_invitation) {
          expect(member.coop_invitation.invited_by).to.be.a("string");
          expect(member.coop_invitation.timestamp).to.be.a("number");
          if (member.coop_invitation.confirmed) {
            expect(member.coop_invitation.confirmed).to.be.a("boolean");
          }
          if (member.coop_invitation.confirmed_timestamp) {
            expect(member.coop_invitation.confirmed_timestamp).to.be.a(
              "number"
            );
          }
        }
        if (member.crafted_generators) {
          expect(member.crafted_generators)
            .to.be.an("array")
            .that.satisfies(function (val: string[]) {
              return val.every((v) => typeof v === "string");
            });
        }
        if (member.death_count) {
          expect(member.death_count).to.be.a("number");
        }
        if (member.dungeons) {
          expect(member.dungeons.dungeon_journal).to.be.an("object");

          if (member.dungeons.dungeon_journal.journal_entries) {
            expect(member.dungeons.dungeon_journal.journal_entries)
              .to.be.an("object")
              .that.satisfies(function (
                val: Components.Schemas.SkyBlockProfileDungeonJournal["journal_entries"]
              ) {
                return (
                  typeof val !== "undefined" &&
                  Object.keys(val).every(
                    (v) =>
                      typeof v === "string" &&
                      Array.isArray(val[v]) &&
                      (val[v] as number[]).every((p) => typeof p === "number")
                  )
                );
              });
          }
          expect(member.dungeons.dungeon_types)
            .to.be.an("object")
            .that.has.property("catacombs")
            .that.is.an("object");

          if (member.dungeons.dungeon_types.catacombs) {
            if (
              member.dungeons.dungeon_types.catacombs.highest_tier_completed
            ) {
              expect(
                member.dungeons.dungeon_types.catacombs.highest_tier_completed
              ).to.be.a("number");
            }
            if (member.dungeons.dungeon_types.catacombs.experience) {
              expect(
                member.dungeons.dungeon_types.catacombs.experience
              ).to.be.a("number");
            }
            if (member.dungeons.dungeon_types.catacombs.best_runs) {
              expect(
                member.dungeons.dungeon_types.catacombs.best_runs
              ).to.be.an("object");
              for (const key of Object.keys(
                member.dungeons.dungeon_types.catacombs.best_runs
              )) {
                const runs =
                  member.dungeons.dungeon_types.catacombs.best_runs[key];
                for (const run of runs) {
                  expect(run.damage_dealt).to.be.a("number");
                  expect(run.damage_mitigated).to.be.a("number");
                  expect(run.deaths).to.be.a("number");
                  expect(run.elapsed_time).to.be.a("number");
                  expect(run.mobs_killed).to.be.a("number");
                  expect(run.score_bonus).to.be.a("number");
                  expect(run.score_exploration).to.be.a("number");
                  expect(run.score_skill).to.be.a("number");
                  expect(run.score_speed).to.be.a("number");
                  expect(run.secrets_found).to.be.a("number");
                  expect(run.timestamp).to.be.a("number");
                  expect(run.dungeon_class).to.be.a("string");
                  expect(run.teammates)
                    .to.be.an("array")
                    .that.satisfies(function (value: string[]) {
                      return value.every((v) => typeof v === "string");
                    });
                  if (run.ally_healing) {
                    expect(run.ally_healing).to.be.a("number");
                  }
                }
              }
            }

            for (const key of Object.keys(
              member.dungeons.dungeon_types.catacombs
            )) {
              if (
                [
                  "times_played",
                  "best_score",
                  "fastest_time",
                  "fastest_time_s",
                  "fastest_time_s_plus",
                  "mobs_killed",
                  "most_damage_archer",
                  "most_damage_berserk",
                  "most_damage_mage",
                  "most_damage_tank",
                  "most_healing",
                  "most_mobs_killed",
                  "tier_completions",
                  "watcher_kills",
                ].includes(key)
              ) {
                expect(
                  ((member.dungeons.dungeon_types.catacombs as never) as {
                    [name: string]: never;
                  })[key]
                )
                  .to.be.an("object")
                  .that.satisfies(function (
                    val: Components.Schemas.SkyBlockProfileDungeonType["times_played"]
                  ) {
                    return (
                      typeof val !== "undefined" &&
                      Object.keys(val).every((v) => typeof val[v] === "number")
                    );
                  });
              }
            }
          }

          if (member.dungeons.dungeons_blah_blah) {
            expect(member.dungeons.dungeons_blah_blah)
              .to.be.an("array")
              .that.satisfies(function (
                value: Components.Schemas.SkyBlockProfileDungeonBlahBlah
              ) {
                return value.every((v) => typeof v === "string");
              });
          }

          expect(member.dungeons.player_classes).to.be.an("object");
          for (const className of Object.keys(member.dungeons.player_classes)) {
            expect(className).to.be.a("string").be;
            const playerClass = member.dungeons.player_classes[className];
            expect(playerClass.experience).to.be.a("number");
          }
          if (member.dungeons.selected_dungeon_class) {
            expect(member.dungeons.selected_dungeon_class).to.be.a("string");
          }
        }
        if (member.fairy_exchanges) {
          expect(member.fairy_exchanges).to.be.a("number");
        }
        if (member.fairy_souls) {
          expect(member.fairy_souls).to.be.a("number");
        }
        if (member.fairy_souls_collected) {
          expect(member.fairy_souls_collected).to.be.a("number");
        }
        if (member.fishing_treasure_caught) {
          expect(member.fishing_treasure_caught).to.be.a("number");
        }
        if (member.pets) {
          expect(member.pets).to.be.an("array");
          for (const pet of member.pets) {
            expect(pet.active).to.be.a("boolean");
            expect(pet.tier).to.be.a("string");
            expect(pet.type).to.be.a("string");
            expect(pet.exp).to.be.a("number");
            if (pet.candyUsed) expect(pet.candyUsed).to.be.a("number");
            if (pet.heldItem) expect(pet.heldItem).to.be.a("string");
            if (pet.uuid) expect(pet.uuid).to.be.a("string");
            if (pet.skin) expect(pet.skin).to.be.a("string");
          }
        }
        if (member.slayer_bosses) {
          expect(member.slayer_bosses).to.be.an("object");
          for (const bossName of Object.keys(member.slayer_bosses)) {
            expect(bossName).to.be.a("string");
            const boss = member.slayer_bosses[bossName];
            expect(boss).to.be.an("object");
            for (const key of Object.keys(boss)) {
              if (key === "claimed_levels") {
                for (const level of Object.keys(boss.claimed_levels)) {
                  expect(level).to.be.a("string");
                  expect(boss.claimed_levels[level]).to.be.a("boolean");
                }
              } else {
                expect(boss[key]).to.be.a("number");
              }
            }
          }
        }
        if (member.slayer_quest) {
          expect(member.slayer_quest).to.be.an("object");
          expect(member.slayer_quest.completion_state).to.be.a("number");
          expect(member.slayer_quest.start_timestamp).to.be.a("number");
          expect(member.slayer_quest.tier).to.be.a("number");
          expect(member.slayer_quest.type).to.be.a("string");
          if (member.slayer_quest.combat_xp) {
            expect(member.slayer_quest.combat_xp).to.be.a("number");
          }
          if (member.slayer_quest.kill_timestamp) {
            expect(member.slayer_quest.kill_timestamp).to.be.a("number");
          }
          if (member.slayer_quest.last_killed_mob_island) {
            expect(member.slayer_quest.last_killed_mob_island).to.be.a(
              "string"
            );
          }
          if (member.slayer_quest.spawn_timestamp) {
            expect(member.slayer_quest.spawn_timestamp).to.be.a("number");
          }
          if (member.slayer_quest.xp_on_last_follower_spawn) {
            expect(member.slayer_quest.xp_on_last_follower_spawn).to.be.a(
              "number"
            );
          }
          if (member.slayer_quest.recent_mob_kills) {
            expect(member.slayer_quest.recent_mob_kills)
              .to.be.an("array")
              .that.satisfies(function (
                value: Components.Schemas.SkyBlockProfileSlayerQuest["recent_mob_kills"]
              ) {
                return (
                  typeof value !== "undefined" &&
                  value.every(
                    (v) =>
                      typeof v.timestamp === "number" &&
                      typeof v.xp === "number"
                  )
                );
              });
          }
        }
        if (member.collection) {
          expect(member.collection)
            .to.be.an("object")
            .that.satisfies(function (
              val: Components.Schemas.SkyBlockProfileCollection
            ) {
              return Object.keys(val).every(
                (key) => typeof val[key] === "number"
              );
            });
        }
        if (member.unlocked_coll_tiers) {
          expect(member.unlocked_coll_tiers)
            .to.be.an("array")
            .that.satisfies(function (val: string[]) {
              return val.every((v) => typeof v === "string");
            });
        }
        if (member.candy_inventory_contents) {
          expect(member.candy_inventory_contents)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.ender_chest_contents) {
          expect(member.ender_chest_contents)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.fishing_bag) {
          expect(member.fishing_bag)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.inv_contents) {
          expect(member.inv_contents)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.potion_bag) {
          expect(member.potion_bag)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.quiver) {
          expect(member.quiver)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.sacks_counts) {
          expect(member.sacks_counts)
            .to.be.an("object")
            .that.satisfies(function (
              val: Components.Schemas.SkyBlockProfileSacksCounts
            ) {
              return Object.keys(val).every(
                (key) => typeof val[key] === "number"
              );
            });
        }
        if (member.talisman_bag) {
          expect(member.talisman_bag)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.wardrobe_contents) {
          expect(member.wardrobe_contents)
            .to.be.an("object")
            .that.satisfies(function (
              value: Components.Schemas.SkyBlockProfileInventoryData
            ) {
              return (
                typeof value.type === "number" && typeof value.data === "string"
              );
            });
        }
        if (member.wardrobe_equipped_slot) {
          expect(member.wardrobe_equipped_slot).to.be.a("number");
        }
        if (member.experience_skill_alchemy) {
          expect(member.experience_skill_alchemy).to.be.a("number");
        }
        if (member.experience_skill_carpentry) {
          expect(member.experience_skill_carpentry).to.be.a("number");
        }
        if (member.experience_skill_combat) {
          expect(member.experience_skill_combat).to.be.a("number");
        }
        if (member.experience_skill_enchanting) {
          expect(member.experience_skill_enchanting).to.be.a("number");
        }
        if (member.experience_skill_farming) {
          expect(member.experience_skill_farming).to.be.a("number");
        }
        if (member.experience_skill_fishing) {
          expect(member.experience_skill_fishing).to.be.a("number");
        }
        if (member.experience_skill_foraging) {
          expect(member.experience_skill_foraging).to.be.a("number");
        }
        if (member.experience_skill_mining) {
          expect(member.experience_skill_mining).to.be.a("number");
        }
        if (member.experience_skill_runecrafting) {
          expect(member.experience_skill_runecrafting).to.be.a("number");
        }
        if (member.experience_skill_taming) {
          expect(member.experience_skill_taming).to.be.a("number");
        }
      }
      expect(profile.profile_id).to.be.a("string");
    }
  });
});

describe("Get player status", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.status.uuid>;
  it("expect not to throw", async function () {
    result = await client.status.uuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    expect(result.online).to.be.an("boolean");
  });
});

describe("Get watchdog stats", function () {
  this.timeout(30000);
  this.slow(1000);
  let result: AsyncReturnType<typeof client.watchdogstats>;
  it("expect not to throw", async function () {
    result = await client.watchdogstats();
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    expect(result.watchdog_lastMinute).to.be.greaterThan(-1);
    expect(result.staff_rollingDaily).to.be.greaterThan(-1);
    expect(result.watchdog_total).to.be.greaterThan(-1);
    expect(result.watchdog_rollingDaily).to.be.greaterThan(-1);
    expect(result.staff_total).to.be.greaterThan(-1);
  });
});
