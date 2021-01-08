---
category: Helpers
tags:
  - helper
  - guild
  - level
---
# Guild Level

## Introduction

The [<code class="language-javascript"><span class="token function">getGuildLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_guildlevel/#getguildlevel) helper calculates the level of a guild from either a [Guild object](/ts-api/interfaces/types/api.components.schemas.guild/#hierarchy) or a guild exp value.

## Example

```typescript
import { Client as Hypixel, getGuildLevel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const guild = await client.guild.name("Mini Squid");
  const info = getGuildLevel(guild);
  console.log(info);
  // output:
  {
    level: 99,
    preciseLevel: 99.88182633333334,
    currentExp: 277645479,
    expToLevel: 275000000,
    expToNextLevel: 3000000,
    remainingExpToNextLevel: 354521
  }
})();
```