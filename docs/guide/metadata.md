# Metadata

## Introduction

Every client response (aside from [<code class="language-javascript"><span class="token function">client</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span></code>](/ts-api/classes/client/#call)) contain a non-enumerable "meta" property. This property won't show up when you run `console.log` or if you iterate over the object/array, but will still be there.

This project aims to be unopinionated, however in this area it does hold an opinion. Hypixel's public API follows a pattern of responding with a JSON object that at the least has the property "success". Some methods include additional properties (such as the resources returning update information), and API failures return "cause" (the error message). Failures are handled by my client, so you don't have to worry about those - they'll throw and you can catch them.

However, the "success" property and other additional properties aren't really relevant to API consumption, and there are some properties included in the headers that might be relevant. As such, any of these extraneous properties are removed from the result. Instead of discarding these properties, they are instead added to the `meta` property mentioned in the first paragraph. This property may contain any useful information, such as `lastUpdated` and `version` for a `/resources` API call. It may also contain rate limit information, cloudflare cache information, and whether or not the result is a cached version (provided you're using a cache, see the [cache guide](/guide/cache/)). You can find more information on the default meta values [here](/ts-api/interfaces/defaultmeta.html).

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
    cloudflareCache: {
      status: 'BYPASS'
    },
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
    lastUpdated: 1605118661571,
    version: '0.9.151',
    cloudflareCache: {
      status: 'HIT',
      age: 17076,
      maxAge: 604800
    }
  }
  
})();
```