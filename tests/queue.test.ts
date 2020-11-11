import { expect } from "chai";
import { TestClient } from "./structures/TestClient";

describe("testClient sequential queue & rate limiting", function () {
  this.timeout(120000);
  this.slow(10000);
  const testClient = new TestClient();

  const limitedListener = () => {
    throw new Error("We should not have been hit.");
  };

  it("adds listener", function () {
    testClient.on("limited", limitedListener);
  });

  it("removes listener", function () {
    testClient.off("limited", limitedListener);
  });

  const promises: Promise<void>[] = [];
  before(function () {
    // @ts-ignore
    expect(testClient.queue.free()).to.equal();
    // @ts-ignore
    testClient.getRateLimitHeaders({});

    for (let i = 0; i < 125; i += 1) {
      // @ts-ignore
      promises.push(testClient.call(i.toString(10)));
    }
  });

  let limitedArgs: { limit: number; reset: Date };
  it("emitted limited?", function (done) {
    testClient.once("limited", (limit, reset) => {
      limitedArgs = { limit, reset };
      done();
    });
  });

  it("gave us the limit?", function () {
    expect(limitedArgs.limit).to.be.greaterThan(0);
  });

  it("gave us a reset date in the future?", function () {
    expect(limitedArgs.reset.getTime()).to.be.greaterThan(Date.now());
  });

  it("emitted reset?", function (done) {
    testClient.once("reset", () => {
      done();
    });
  });

  it("did all promises execute in order without fail?", async function () {
    const resultOrder = await Promise.all(promises);
    expect(
      resultOrder.every(
        (i, rI) => rI === resultOrder.length - 1 || i < resultOrder[rI + 1]
      )
    ).to.equal(true);
  });

  it("does the rate limit remaining calls make sense?", function () {
    // @ts-ignore
    expect(testClient.rateLimit.remaining).to.be.greaterThan(-1);
  });

  after(function () {
    testClient.cleanup();
  });
});
