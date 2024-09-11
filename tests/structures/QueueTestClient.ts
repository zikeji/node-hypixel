import { Client } from "../../src";

export class QueueTestClient extends Client {
  private static firstResponseHeaders = {
    "ratelimit-limit": "120",
    "ratelimit-remaining": "119",
    "ratelimit-reset": "10",
  };

  private simulatedResetKeyInterval: NodeJS.Timeout;
  constructor() {
    super("FAKE-KEY");
    this.simulatedResetKeyInterval = setInterval(() => {
      this.rateLimit.reset -= 1;
      if (this.rateLimit.reset === 0) {
        this.rateLimit.reset = 10;
        this.rateLimit.remaining = this.rateLimit.limit;
      }
    }, 1000);
  }

  public cleanup(): void {
    clearTimeout(this.simulatedResetKeyInterval);
  }

  // @ts-ignore
  public async callMethod(index: string): number {
    await new Promise((resolve) => {
      setTimeout(resolve, 15);
    });
    // @ts-ignore
    this.getRateLimitHeaders(
      this.rateLimit.limit === -1
        ? QueueTestClient.firstResponseHeaders
        : {
            "ratelimit-limit": "120",
            "ratelimit-remaining": (this.rateLimit.remaining - 1).toString(),
            "ratelimit-reset": this.rateLimit.reset.toString(10),
          }
    );
    return parseInt(index, 10);
  }
}
