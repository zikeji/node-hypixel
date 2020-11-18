---
category: Helpers
tags:
  - helper
  - player
  - level
---
# Network Level

## Introduction

The [<code class="language-javascript"><span class="token function">getNetworkLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#getnetworklevel) helper calculates the network level from either a Player object or a network exp value.

## Example

```typescript
import { Client as Hypixel, getNetworkLevel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const player = await client.player.uuid("ec1811e6822b4843bcd4fef82f75deb7");
  const info = getNetworkLevel(player);
  console.log(info);
  // output:
  {
    level: 127,
    preciseLevel: 127.02427692307693,
    currentExp: 20955390,
    expToLevel: 20947500,
    expToNextLevel: 325000,
    remainingExpToNextLevel: 317110
  }
})();
```