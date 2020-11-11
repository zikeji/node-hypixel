# Metadata

## Introduction

Every client response (aside from [<code class="language-javascript"><span class="token function">client</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/classes/client/#call)) contain a non-enumerable "meta" property. This property won't show up when you run `console.log` or if you iterate over the object/array, but will still be there.

This project aims to be unopinionated, however in this area it does hold an opinion. Hypixel's public API follows a pattern of responding with a JSON object that at the least has the property "success". Some methods include additional properties (such as the resources returning update information), and API failures return "cause" (the error message). Failures are handled by my client, so you don't have to worry about those.

However, the "success" and other additional properties aren't really relevant to API consumption. As such, any of these extraonneous properties are removed from the result. Instead of discarding these properties, they are instead added to a `meta` property I mentioned. At all times this meta property contains "success" and "ratelimit", the ratelimit property is an object containing the ratelimit header information of that request.

## Type Hinting (IntelliSense)

The meta object supports type hinting.

![Type hinting example](./metadata.example.webp)

## Example

```typescript
import { Client as Hypixel } from "@zikeji/hypixel";
const client = new Hypixel("API_KEY");
(async () => {
  const status = await client.status.uuid("20934ef9488c465180a78f861586b4cf"); // Minikloon
  
  console.log(status);
  // output:
  { online: false }

  console.log(status.meta);
  // output:
  {
    success: true,
    ratelimit: {
      limit: 120,
      reset: 60,
      remaining: 119
    }
  }

  const collections = await client.resources.skyblock.collections();

  console.log(collections);
  // output:
  {FARMING: {…}, MINING: {…}, COMBAT: {…}, FORAGING: {…}, FISHING: {…}}

  console.log(collections.meta);
  // output:
  {
    success: true,
    lastUpdated: 1603143484742,
    version: '0.9.88',
    ratelimit: { remaining: 118, reset: 16, limit: 120 }
  }
  
})();
```