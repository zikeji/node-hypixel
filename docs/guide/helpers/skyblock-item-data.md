# SkyBlock Item Data

## Introduction

The [<code class="language-javascript"><span class="token function">transformSkyBlockItemData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformskyblockitemdata) and [<code class="language-javascript"><span class="token function">transformSkyBlockProfileMemberInventories</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformskyblockprofilememberinventories) helpers exist to ease the process of consuming NBT data. NBT data is what is returned in the API result for SkyBlock profile/profiles inventory information.

These helpers will transform the NBT data into objects that conform to the [InventoryItem interface](/ts-api/interfaces/nbtinventoryitem/#hierarchy). You can make use of type hinting to figure out what is available, or browse the type definitions. These definitions cover what I found during discovery, with some unecessary definitions left out. As always you can use <code class="language-javascript"><span class="token function">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code> to view the data if you are looking for something specific.

## Requirements

This library does not require the [prismarine-nbt](https://www.npmjs.com/package/prismarine-nbt) library as a dependency when installed. If you would like to make use of these helpers you should install [prismarine-nbt](https://www.npmjs.com/package/prismarine-nbt).

```bash
npm install --save prismarine-nbt
```

## Type Hinting (IntelliSense)

The primary function of this helper aside from converting the data using [prismarine-nbt](https://www.npmjs.com/package/prismarine-nbt) is to add type definitions to the data itself, allowing you to easily use the data. The helper goes as far as resolving backpack and bag data into inventory data as well. This means you get intellisense to help you explore the data and find what you need.

![Type hinting example](./inventorydata.example.webp)

## Examples

### Specific Inventory

There is a processing overhead when transforming this information, as such - if you only need a specific inventory you should use the [<code class="language-javascript"><span class="token function">transformSkyBlockItemData</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/#transformskyblockitemdata) helper.

```typescript
import { Client as Hypixel, transformSkyBlockItemData } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const profile = await client.skyblock.profile("ec1811e6822b4843bcd4fef82f75deb7");
  const member = profile.members.ec1811e6822b4843bcd4fef82f75deb7;
  const armor = await transformSkyBlockItemData(member.inv_armor.data);

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

### All Inventories

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