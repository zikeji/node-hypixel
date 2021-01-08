---
category: Helpers
tags:
  - helper
  - bedwars
  - level
  - prestige
---
# Bedwars Level & Prestige Info

## Introduction

The [<code class="language-javascript"><span class="token function">getBedwarsLevelInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_bedwarslevelinfo/#getbedwarslevelinfo) helper allows you to earily extract Bedwars level & prestige info from the [`/api/player`](/ts-api/classes/methods/player.player/#uuid) endpoint. If provided a player object, will throw an error if no Bedwars stats are found.

## Example

```typescript
import { Client as Hypixel, getBedwarsLevelInfo } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  let player = await client.player.uuid("b876ec32e396476ba1158438d83c67d4"); // Technoblade
  let levelInfo = getBedwarsLevelInfo(player);
  console.log(levelInfo);
  // output:
  {
    level: 222,
    prestige: 2,
    prestigeName: 'Gold',
    prestigeColor: '§6',
    prestigeColorHex: 'FFAA00',
    levelInCurrentPrestige: 22
  }
  
  player = await client.player.uuid("24c182c6716b47c68f60a1be9045c449"); // gamerboy80
  levelInfo = getBedwarsLevelInfo(player);
  console.log(levelInfo);
  // output:
  {
    level: 1493,
    prestige: 10,
    prestigeName: 'Rainbow',
    prestigeColor: '§f',
    prestigeColorHex: 'FFFFFF',
    levelInCurrentPrestige: 493
  }
})();
```