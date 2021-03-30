# @zikeji/hypixel

[![npm](https://img.shields.io/npm/v/@zikeji/hypixel)][npm]
[![Deno](https://img.shields.io/badge/dynamic/json?color=black&label=Deno&prefix=v&query=%24.version&url=https%3A%2F%2Fraw.githubusercontent.com%2Fzikeji%2Fnode-hypixel%2Fmain%2Fpackage.json&style=flat&logo=Deno)](https://deno.land/x/hypixel)
[![npm bundle size](https://img.shields.io/bundlephobia/min/@zikeji/hypixel)][npm]
[![visit docs](https://img.shields.io/badge/docs-VuePress-green)][docs]
[![Visit our Discord server.](https://img.shields.io/badge/support-Discord-green)](https://discord.gg/QkcGHwG)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/@zikeji/hypixel)][npm]
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@zikeji/hypixel)][npm]
[![GitHub license](https://img.shields.io/github/license/zikeji/node-hypixel)](https://github.com/zikeji/node-hypixel/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/zikeji/node-hypixel)][github]
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zikeji/node-hypixel)][github]
[![GitHub issues](https://img.shields.io/github/issues/zikeji/node-hypixel)](https://github.com/zikeji/node-hypixel/issues)
[![Coveralls](https://img.shields.io/coveralls/github/zikeji/node-hypixel)](https://coveralls.io/github/zikeji/node-hypixel)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/zikeji/node-hypixel/release)][github]

[npm]: https://www.npmjs.com/package/@zikeji/hypixel
[github]: https://github.com/zikeji/node-hypixel
[docs]: https://node-hypixel.zikeji.com
[hypixel]: https://api.hypixel.net/

With thorough **[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)** support & **[100% test coverage](https://coveralls.io/github/zikeji/node-hypixel)**, this is an unopinionated async/await API wrapper for [Hypixel's Public API][hypixel]. It is developed in TypeScript complete with [documentation][docs], [typed interfaces](https://node-hypixel.zikeji.com/ts-api/) for all API responses (and an [OpenAPI.yaml](https://node-hypixel.zikeji.com/api/)!), built-in rate-limit handling, [flexible cache support](https://node-hypixel.zikeji.com/guide/advanced/cache/), [helper functions](https://node-hypixel.zikeji.com/guide/helpers/player-ranks/), and support for undocumented endpoints.

This library aims to replicate the API paths in it's method usage. As such, the general scheme would be to change the path of an API call by simply replacing the `/` with a `.`, and if the endpoint takes multiple parameters, those are added on the end. For example, `api.hypixel.net/skyblock/profiles?uuid=1234` would simply become `client.skyblock.profiles.uuid('1234')`. Of course, with everything being fully typed if you are using an IDE that supports [IntelliSense](https://code.visualstudio.com/docs/editor/intellisense) you should rarely need to reference documentation.

## 2.0 to 3.0 Migration

This library follows semver. As backwards incompatible changes were introduced while making this Deno compatible. Most likely nothing you use has changed, and you should be able to update without issue. The only breaking change is that the Client class no longer accepts agent as a parameter, as Deno does not support this.

## Installation

### NodeJS

Use [npm](https://www.npmjs.com) to install this library.

```bash
npm i --save @zikeji/hypixel
```

### Deno

As Deno does not require installation, you would simply follow their convention for imports.

```typescript
import { Client as HypixelClient } from "https://deno.land/x/hypixel/v3.1.0/mod.ts";
```

## Usage

```javascript
const { Client } = require("@zikeji/hypixel");
const client = new Client("API_KEY");
(async () => {
  const status = await client.status.uuid("20934ef9488c465180a78f861586b4cf"); // Minikloon
  console.log(status);
  // {"online": false}
  const stats = await client.watchdogstats();
  console.log(stats);
  // {watchdog_lastMinute: 1, staff_rollingDaily: 2609, watchdog_total: 5591714, watchdog_rollingDaily: 4213, …}
})();
```

## Helpers

This library adds multiple helpers to facilitate using the Hypixel API. You can find documentation on each helper [here](https://node-hypixel.zikeji.com/guide/helpers/player-ranks/). If you would like to request a helper that doesn't exist, please open an issue. Otherwise if you would like to contribute one refer to the below section.

## Contributing
If some API result isn't documented / typed out fully, please open an issue and I can see about adding it. However some data is too exhaustive to provide typings to in a reasonable manner, as exhibited [here](https://github.com/zikeji/node-hypixel/issues/119), where it isn't reasonable to add 19.5 thousand lines of code to document the entire dataset.

Otherwise, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All changes must ensure they pass eslint, tests, and that testing is updated to meet or exceed the previous coverage.

## Licenses

This projected is licensed under the MIT license. For additional details see [LICENSE](LICENSE).

This library contains derivative work based on classes from the [hypixel-php](https://github.com/Plancke/hypixel-php) library. Code that is derivative work of [hypixel-php](https://github.com/Plancke/hypixel-php) will be marked as such with a header comment. See [LICENSE-HYPIXEL-PHP.md](LICENSE-HYPIXEL-PHP.md) for additional details on the original license.