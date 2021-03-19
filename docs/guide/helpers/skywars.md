---
category: Helpers
tags:
  - helper
  - skywars
  - level
  - prestige
---
# SkyWars Level & Prestige Info

## Introduction

The [<code class="language-javascript"><span class="token function">getSkyWarsLevelInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#getskywarslevelinfo) helper calculates level & prestige info from SkyWars experience or the [`/api/player`](/ts-api/classes/player/#uuid) endpoint. If you supply a player object it will throw an error if they have no SkyWars experience. You can also get the prestige for a certain level using the [<code class="language-javascript"><span class="token function">getSkyWarsPrestigeForLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#getskywarsprestigeforlevel) helper.

## Example

```typescript
import { Client as Hypixel, getSkyWarsLevelInfo, getSkyWarsPrestigeForLevel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const virmah = await client.player.uuid("3cdbba7d55f8484e81a30a74a6fb7998"); // Virmah
  const typify = await client.player.uuid("deb8dbdbce1e4ec7addf93bce1b3dbb3"); // Typify

  const virmahSkywars = NodeHypixel.getSkyWarsLevelInfo(virmah, true);
  console.log(virmahSkywars);
  // output:
  {
    level: 88,
    preciseLevel: 88.409,
    currentExp: 779090,
    expToLevel: 775000,
    expToNextLevel: 10000,
    remainingExpToNextLevel: 5910,
    prestige: {
      id: 'MYTHIC',
      name: 'Mythic',
      color: '§f',
      colorHex: 'FFFFFF',
      minimumLevel: 60,
      icon: { version: 1, material: 'SKULL_ITEM', typeId: 397, data: 1 },
      textIcon: 'ಠ_ಠ'
    },
    expToPrestige: 495000
  }

  const typifySkywars = NodeHypixel.getSkyWarsLevelInfo(typify, true);
  console.log(typifySkywars);
  // output:
  {
    level: 25,
    preciseLevel: 25.936,
    currentExp: 154360,
    expToLevel: 145000,
    expToNextLevel: 10000,
    remainingExpToNextLevel: 640,
    prestige: {
      id: 'SAPPHIRE',
      name: 'Sapphire',
      color: '§3',
      colorHex: '00AAAA',
      minimumLevel: 25,
      icon: { version: 1, material: 'SKULL_ITEM', typeId: 397, data: 3 },
      textIcon: '✌'
    },
    expToPrestige: 145000,
    nextPrestige: {
      id: 'RUBY',
      name: 'Ruby',
      color: '§4',
      colorHex: 'AA0000',
      minimumLevel: 30,
      icon: { version: 1, material: 'SKULL_ITEM', typeId: 397, data: 3 },
      textIcon: '❦'
    },
    expToNextPrestige: 195000,
    remainingExpToNextPrestige: 40640,
    progressToNextPrestige: 0.7915897435897435
  }

  const skyWarsData = NodeHypixel.getSkyWarsLevelInfo(696969);
  console.log(skyWarsData);
  // output:
  {
    level: 80,
    preciseLevel: 80.1969,
    currentExp: 696969,
    expToLevel: 695000,
    expToNextLevel: 10000,
    remainingExpToNextLevel: 8031
  }

  const prestige = NodeHypixel.getSkyWarsPrestigeForLevel(69);
  console.log(prestige);
  // output:
  {
    id: 'MYTHIC',
    name: 'Mythic',
    color: '§f',
    colorHex: 'FFFFFF',
    minimumLevel: 60,
    icon: { version: 1, material: 'SKULL_ITEM', typeId: 397, data: 1 },
    textIcon: 'ಠ_ಠ'
  }
})();
```