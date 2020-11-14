# Cache

## Introduction

Instead of forcing you to write your own wrapper for this library just to get caching, I've opted to instead add a basic get/set optional cache. You must implement it in order to use it, but you can be flexible with how you implement it. You can find the type information for the [BasicCache here](/ts-api/interfaces/basiccache/). The "key" used in the get/set method is always the path + parameters, but split by colons instead of slashes. For example `skyblock/auctions?page=1` becomes `skyblock:auctions:1`.

## Basic Example

In the following example we're creating an extremely basic in-memory cache using a Map. While this works, it does not support a TTL (time to live) and as such, cached stuff will remain there until you restart your application.

```javascript
const { Client } = require("@zikeji/hypixel");

const basicCache = new Map();
const client = new Client("API_KEY", {
  cache: {
    async get(key) {
      if (basicCache.has(key)) {
        return basicCache.get(key);
      }
    },
    async set(key, value) {
      basicCache.set(key, value);
    }
  }
});

(async () => {
  // first call, from Hypixel's API
  let collections = await client.resources.skyblock.collections();

  console.log(collections.meta);
  // output:
  {
    cloudflareCache: { status: 'HIT', age: 19095, maxAge: 604800 },
    success: true,
    lastUpdated: 1605118661571,
    version: '0.9.151'
  }
  
  // second call, from cache
  collections = await client.resources.skyblock.collections();

  console.log(collections.meta);
  // output:
  {
    cached: true,
    cloudflareCache: { status: 'HIT', age: 19095, maxAge: 604800 },
    success: true,
    lastUpdated: 1605118661571,
    version: '0.9.151'
  }
})();
```

## Library Example

In this example we're going to be using the [cache-manager](https://www.npmjs.com/package/cache-manager) library as our cache. This is an extremely flexible library that supports many different cases. In the below example we create a cache that is in memory with a max of 100 values and a TTL of 10. This means cached objects will expire after 10 seconds.

You'll also see we're passing the cache object directly to the client constructor - as the cache-manager library's class already has a get/set method that fit into our schema you don't need to wrap it.

```javascript
const cacheManager = require("cache-manager");
const { Client } = require("@zikeji/hypixel");

const cache = cacheManager.caching({store: 'memory', max: 100, ttl: 10});
const client = new Client("API_KEY", { cache });
```

## Advanced Example

This is an example using [cache-manager](https://www.npmjs.com/package/cache-manager) and wrapping it to apply our own key and a dynamic TTL depending on the type of call. We're able to flexibly define the time to live value and change the key so it doesn't conflict with other APIs we might be caching.

```javascript
const cacheManager = require("cache-manager");
const { Client } = require("@zikeji/hypixel");

const cache = cacheManager.caching({store: 'memory'});
const client = new Client("API_KEY", {
  cache: {
    // these don't need to be async since cache.get / cache.set will return a promise
    get(key) {
      return cache.get(`hypixel:${key}`);
    },
    set(key, value) {
      // default 5 minute ttl - useful for alost of endpoints
      let ttl = 5 * 60;

      // the following endpoints don't require API keys and won't eat into your rate limit
      if (key.startsWith("resources:")) {
        ttl = 24 * 60 * 60; // 24 hours as resources don't update often, if at all
      } else if (key === "skyblock:bazaar") {
        // this endpoint is cached by cloudflare and updates every 10 seconds
        ttl = 10;
      } else if (key.startsWith("skyblock:auctions:")) {
        // this endpoint is cached by cloudflare and updates every 60 seconds
        ttl = 60;
      }

      // prepend our key with "hypixel" so we don't conflict with anyone else
      return cache.set(`hypixel:${key}`, value);
    }
  }
});
```