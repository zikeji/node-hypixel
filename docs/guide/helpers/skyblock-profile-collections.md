---
category: Helpers
tags:
  - helper
  - skyblock
  - collections
---
# SkyBlock Profile Collections

## Introduction

The [<code class="language-javascript"><span class="token function">getSkyBlockProfileMemberCollections</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_skyblockcollections/#getskyblockprofilemembercollections) helper takes a SkyBlock profile object (obtained [here](/ts-api/classes/methods/skyblock.skyblock/#profile) or [here](/ts-api/classes/methods/skyblock/profiles.skyblockprofiles/#uuid)) and the [collections resource](http://localhost:8081/ts-api/classes/methods/resources/skyblock.skyblockresources/#collections) to get usable collection information from the profile. Additionally, for displaying collection tiers in roman numerals (as you would see ingame) you can use the [<code class="language-javascript"><span class="token function">romanize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_romanize/#romanize) helper.

## Example

```typescript
import { Client as Hypixel, getSkyBlockProfileMemberCollections, romanize } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const profile = await client.skyblock.profile("ec1811e6822b4843bcd4fef82f75deb7");
  const collectionsResource = await client.resources.skyblock.collections();

  const collections = getSkyBlockProfileMemberCollections(profile, collectionsResource);

  console.log(collections);
  // output:
  [{…}, {…}, {…}, {…}, {…}]

  console.log(collections[4]);
  // output:
  {id: "FISHING", name: "Fishing", progress: 100, maxedChildCollections: 10, totalCollections: 10, …}
  
  console.log(collections[4].children);
  // output:
  [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

  console.log(collections[4].children[0]);
  // output:
  {
    id: "RAW_FISH",
    name: "Raw Fish",
    tier: 11,
    maxTier: 11,
    amount: 121990,
    progress: 100
  }

  console.log(romanize(collections[4].children[0].tier));
  // output:
  "XI"
})();
```