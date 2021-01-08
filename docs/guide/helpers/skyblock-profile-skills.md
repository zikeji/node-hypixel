---
category: Helpers
tags:
  - helper
  - skyblock
  - skills
---
# SkyBlock Profile Skills

## Introduction

The [<code class="language-javascript"><span class="token function">getSkyBlockProfileMemberSkills</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_skyblockskills/#getskyblockprofilememberskills) helper takes a SkyBlock profile member object (obtained [here](/ts-api/classes/methods/skyblock.skyblock/#profile) or [here](/ts-api/classes/methods/skyblock/profiles.skyblockprofiles/#uuid)) and the [skills resource](/ts-api/classes/methods/resources/skyblock.skyblockresources/#skills) to get usable skill information of a profile member. Additionally, for displaying skill levels in roman numerals (as you would see ingame) you can use the [<code class="language-javascript"><span class="token function">romanize</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/modules/helpers_romanize/#romanize) helper.

## Example

```typescript
import { Client as Hypixel, getSkyBlockProfileMemberSkills, romanize } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const profile = await client.skyblock.profile("ec1811e6822b4843bcd4fef82f75deb7");
  const skillsResource = await client.resources.skyblock.skills();

  const skills = getSkyBlockProfileMemberSkills(profile.members["ec1811e6822b4843bcd4fef82f75deb7"], skillsResource);

  console.log(skills);
  // output:
  {FARMING: {…}, MINING: {…}, COMBAT: {…}, DUNGEONEERING: {…}, FORAGING: {…}, …}

  console.log(skills.ALCHEMY);
  // output:
  {name: "Alchemy", description: "Brew potions to earn Alchemy XP!", level: 50, exp: 55823363.920003295, totalExpToLevel: 55172425, …}

  console.log(romanize(skills.ALCHEMY.level));
  // output:
  "L"
})();
```