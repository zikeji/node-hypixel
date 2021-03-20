---
category: Helpers
tags:
  - helper
  - nbt data
  - inventory
  - skyblock
  - pit
---
# Minecraft Item Data

## Introduction

The [<code class="language-javascript"><span class="token function">transformItemData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformitemdata) and [<code class="language-javascript"><span class="token function">transformSkyBlockProfileMemberInventories</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformskyblockprofilememberinventories) helpers exist to ease the process of consuming NBT data. You can find NBT data in the [`/skyblock/profile`](/ts-api/classes/skyblock/#profile) & [`/skyblock/profiles`](/ts-api/classes/skyblockprofiles/#uuid) endpoint as inventory data, in the [`/skyblock/auction`](/ts-api/classes/skyblockauction/#player), [`/skyblock/auctions`](/ts-api/classes/skyblockauctions/#page), & [`/skyblock/auctions_ended`](/classes/skyblock/#auctions-ended) endpoints as item data, and in the [`/player`](/ts-api/classes/player/#uuid) endpoint for Pit inventories under [`player.stats.Pit.profile`](/ts-api/interfaces/components.schemas.playerstatspitprofile/#hierarchy).

These helpers will transform the NBT data into objects that conform to the [InventoryItem interface](/ts-api/interfaces/nbtinventoryitem/#hierarchy). You can make use of type hinting to figure out what is available, or browse the type definitions. These definitions cover what I found during discovery, with some unecessary definitions left out. As always you can use <code class="language-javascript"><span class="token function">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> to view the data if you are looking for something specific.

## Requirements

### NodeJS

This library does not require the [prismarine-nbt](https://www.npmjs.com/package/prismarine-nbt) library as a dependency when installed. If you would like to make use of these helpers you should install [prismarine-nbt](https://www.npmjs.com/package/prismarine-nbt). Keep in mind later versions of prismarine-nbt may break this function, so install the latest version this is tested with. As of writing this version is 1.5.0.


```bash
npm install --save prismarine-nbt@1.5.0
```

### Deno

When used with Deno, this library imports the [nbt_paser](https://deno.land/x/nbt_parser) library. You do not need to install it separately.

## Type Hinting (IntelliSense)

The primary function of this helper aside from converting the raw NBT data, is to add type definitions to the data itself - allowing you to easily use the data. The helper goes as far as resolving backpack and bag data into inventory data as well. This means you get intellisense to help you explore the data and find what you need.

![Type hinting example](./inventorydata.example.webp)

## Examples

### SkyBlock Inventory

If you only need a specific inventory you should use the [<code class="language-javascript"><span class="token function">transformItemData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformitemdata) helper.

```typescript
import { Client as Hypixel, transformItemData } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const profile = await client.skyblock.profile("ec1811e6822b4843bcd4fef82f75deb7");
  const member = profile.members.ec1811e6822b4843bcd4fef82f75deb7;
  const armor = await transformItemData(member.inv_armor.data);

  console.log(armor);
  // output:
  [{…}, {…}, {…}, {…}]

  console.log(armor.map((item) => item.tag.display.Name));
  // output:
  [
    "§6Godly Diver's Boots",
    "§6Godly Diver's Trunks",
    "§6Godly Diver's Shirt",
    "§6Godly Diver's Mask"
  ]
})();
```

### SkyBlock Auction Item

You can get the specific item information on an item sold in an auction using this helper as well.

```typescript
import { Client as Hypixel, transformItemData } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const endedAuctions = await client.skyblock.auctions_ended();
  const item = await transformItemData(endedAuctions.auctions[0].item_bytes);

  console.log(item);
  // output:
  [{…}]

  console.log(item.map((item) => item.tag.display.Name));
  // output:
  [
    "§5Ender Leggings"
  ]
})();
```

### All SkyBlock Inventories

If you need all inventories resolved, the [<code class="language-javascript"><span class="token function">transformSkyBlockProfileMemberInventories</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformskyblockprofilememberinventories) helper will do that for you by transforming the member object you pass and adding the appropriate inventory data.

```typescript
import { Client as Hypixel, transformSkyBlockProfileMemberInventories } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const profile = await client.skyblock.profile("ec1811e6822b4843bcd4fef82f75deb7");
  let member = profile.members.ec1811e6822b4843bcd4fef82f75deb7;

  console.log(member.inv_armor);
  //output: 
  {
    type: 0,
    data: '…'
  }

  member = await transformSkyBlockProfileMemberInventories(member);

  console.log(member.inv_armor);
  // output:
  [{…}, {…}, {…}, {…}]

  console.log(member.inv_armor.map((item) => item.tag.display.Name));
  // output:
  [
    "§6Godly Diver's Boots",
    "§6Godly Diver's Trunks",
    "§6Godly Diver's Shirt",
    "§6Godly Diver's Mask"
  ]
})();
```

### Pit Inventory

Your can also use the helper to transform Pit inventory data. 

```typescript
import { Client as Hypixel, transformItemData } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const player = await client.player.uuid("ec1811e6822b4843bcd4fef82f75deb7");
  const armor = await transformItemData(player.stats.Pit.profile.inv_armor.data);

  console.log(armor);
  // output:
  [{…}, {…}, {…}, {…}]

  console.log(armor.map((item) => item.id));
  // output:
  [ 309, 300, 307, 298 ]
})();
```