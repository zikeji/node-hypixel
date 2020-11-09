import { expect } from "chai";
import { Client, Components } from "../src";
import { Guild } from "../src/methods/guild";
import type { ResultArray } from "../src/util/ResultArray";
import type { ResultObject } from "../src/util/ResultObject";

type AsyncReturnType<T extends (...args: any) => any> = T extends (
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
    | ResultObject<Components.Schemas.ApiSuccess & { n: unknown }, ["n"]>
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
  it("ratelimit data should exist", function () {
    expect(result.meta.ratelimit).to.be.an("object");
    expect(result.meta.ratelimit.limit).to.be.a("number");
    expect(result.meta.ratelimit.reset).to.be.a("number");
    expect(result.meta.ratelimit.remaining).to.be.a("number");
  });
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
      expect(guild).to.be.an("object");
      if (!guild) throw new Error("no guild returned");
      expect(guild._id).to.be.a("string");
      expect(guild.achievements).to.be.a("object");
      expect(guild.achievements.EXPERIENCE_KINGS).to.be.a("number");
      expect(guild.achievements.ONLINE_PLAYERS).to.be.a("number");
      expect(guild.achievements.WINNERS).to.be.a("number");
      if (guild.banner) {
        expect(guild.banner).to.be.a("object");
        expect(guild.banner.Base).to.satisfy(function (base: number | string) {
          return typeof base === "number" || typeof base === "string";
        });
        expect(guild.banner.Patterns).to.be.a("array");
        for (const pattern of guild.banner.Patterns) {
          expect(pattern.Color).to.satisfy(function (color: number | string) {
            return typeof color === "number" || typeof color === "string";
          });
          expect(pattern.Pattern).to.be.a("string");
        }
      }
      if (guild.chatMute) expect(guild.chatMute).to.be.a("number");
      expect(guild.coins).to.be.a("number");
      expect(guild.coinsEver).to.be.a("number");
      expect(guild.created).to.be.a("number");
      if (guild.description) expect(guild.description).to.be.a("string");
      expect(guild.exp).to.be.a("number");
      expect(guild.guildExpByGameType).to.be.a("object");
      for (const gameType of Object.keys(guild.guildExpByGameType)) {
        expect(
          guild.guildExpByGameType[
            gameType as keyof typeof guild.guildExpByGameType
          ]
        ).to.be.a("number");
      }
      if (guild.joinable) expect(guild.joinable).to.be.a("boolean");
      if (guild.legacyRanking) expect(guild.legacyRanking).to.be.a("number");
      expect(guild.members).to.be.an("array");
      for (const member of guild.members) {
        expect(member.expHistory).to.be.an("object");
        for (const date of Object.keys(member.expHistory)) {
          expect(date).to.be.not.null.and.satisfy(function (date: string) {
            expect(new Date(date).getTime()).to.be.a("number").and.not.be.NaN;
          });
          expect(member.expHistory[date]).to.be.a("number");
        }
        expect(member.joined).to.be.a("number");
        expect(member.mutedTill).to.satisfy(function (
          mutedTill: undefined | number
        ) {
          return (
            typeof mutedTill === "undefined" || typeof mutedTill === "number"
          );
        });
        expect(member.questParticipation).to.satisfy(function (
          questParticipation: undefined | number
        ) {
          return (
            typeof questParticipation === "undefined" ||
            typeof questParticipation === "number"
          );
        });
        expect(member.rank).to.be.a("string");
        expect(member.uuid).to.be.a("string");
      }
      expect(guild.name).to.be.a("string");
      expect(guild.name_lower).to.be.a("string");
      if (guild.preferredGames) {
        expect(guild.preferredGames).to.be.a("array");
        for (const game of guild.preferredGames) {
          expect(game).to.be.a("string");
        }
      }
      expect(guild.publiclyListed).to.be.a("boolean");
      expect(guild.ranks).to.be.an("array");
      for (const rank of guild.ranks) {
        expect(rank.created).to.be.a("number");
        expect(rank.default).to.be.a("boolean");
        expect(rank.name).to.be.a("string");
        expect(rank.priority).to.be.a("number");
        expect(rank.tag).to.satisfy(function (tag: null | string) {
          return tag === null || typeof tag === "string";
        });
      }
      expect(guild.tag).to.be.a("string");
      expect(guild.tagColor).to.be.a("string");
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
  let result: AsyncReturnType<typeof client.player.uuid>;
  it("expect not to throw", async function () {
    result = await client.player.uuid("20934ef9488c465180a78f861586b4cf");
  });
  CheckMeta(() => result);
  it("required keys should exist", function () {
    expect(result._id).to.be.a("string");
    expect(result.uuid).to.be.a("string");
    expect(result.firstLogin).to.be.a("number");
    expect(result.playername).to.be.a("string");
    expect(result.displayname).to.be.a("string");
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
  CheckMeta(() => result);
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
              typeof bid.profile_id === "string" &&
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
  CheckMeta(() => response);
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

describe("Get SkyBlock bazaar products", function () {
  this.timeout(30000);
  this.slow(1000);
  let response: AsyncReturnType<typeof client.skyblock.bazaar>;
  it("expect success", async function () {
    response = await client.skyblock.bazaar();
  });
  CheckMeta(() => response);
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

// describe("Query SkyBlock profiles by mc uuid", function () {
//   this.timeout(30000);
//   this.slow(1000);
//   let result: AsyncReturnType<typeof client.profiles>;
//   it("expect success", async function () {
//     result = await client.profiles("ec1811e6822b4843bcd4fef82f75deb7");
//     expect(result.length).not.to.equal(0);
//   });
// });

// describe("Query SkyBlock profile by mc uuid", function () {
//   this.timeout(30000);
//   this.slow(1000);
//   let profileId = "74c72b90bdd84b668ccb5a20752030cc";
//   let result: AsyncReturnType<typeof client.profile>;
//   it("expect not to throw", async function () {
//     result = await client.profile(profileId);
//   });
//   it("expect profile to have members", function () {
//     expect(result?.members?.length).not.to.equal(0);
//   });
//   it("expect profile id to equal provided id", function () {
//     expect(result?.profile_id).to.equal(profileId);
//   });
// });
