# @zikeji/hypixel

[![npm](https://img.shields.io/npm/v/@zikeji/hypixel)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/@zikeji/hypixel)][npm]
[![visit docs](https://img.shields.io/badge/docs-VuePress-green)][docs]
[![GitHub license](https://img.shields.io/github/license/zikeji/node-hypixel)](https://github.com/zikeji/node-hypixel/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/zikeji/node-hypixel)][github]
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zikeji/node-hypixel)][github]
[![GitHub issues](https://img.shields.io/github/issues/zikeji/node-hypixel)](https://github.com/zikeji/node-hypixel/issues)
[![Coveralls](https://img.shields.io/coveralls/github/zikeji/node-hypixel)](https://coveralls.io/github/zikeji/node-hypixel)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/zikeji/node-hypixel/release.yml?branch=main)][github]

[npm]: https://www.npmjs.com/package/@zikeji/hypixel
[github]: https://github.com/zikeji/node-hypixel
[docs]: https://node-hypixel.zikeji.com
[hypixel]: https://api.hypixel.net/

With **[IntelliSense](https://code.visualstudio.com/docs/editor/intellisense)** support, this is an unopinionated async/await API wrapper for [Hypixel's Public API][hypixel]. It is developed in TypeScript complete with [documentation][docs], [typed interfaces](https://node-hypixel.zikeji.com/ts-api/) for all API responses, built-in rate-limit handling, [flexible cache support](https://node-hypixel.zikeji.com/guide/advanced/cache/), and some [helper functions](https://node-hypixel.zikeji.com/guide/helpers/player-ranks/).

## 4.0.0 Information

4.0 is a major breaking version, where I've rebased types on the v2 endpoints published by Hypixel and removed my previous OpenAPI.yaml.

I've added `AugmentedTypes.ts` to "augment" their typings, but they are very barebones in the current state. Pull requests augmenting types are welcome, I will more than likely not be exploring the typings like I did in the past, and merely add what I want/need.

## Installation

### NodeJS

Use [npm](https://www.npmjs.com) to install this library.

```bash
npm i --save @zikeji/hypixel
```

## Usage

```javascript
const { Client } = require("@zikeji/hypixel");
const client = new Client("API_KEY");
(async () => {
  const status = await client.status.uuid("20934ef9488c465180a78f861586b4cf"); // Minikloon
  console.log(status);
  // {"online": false}
  const stats = await client.punishmentstats();
  console.log(stats);
  // {watchdog_lastMinute: 1, staff_rollingDaily: 2609, watchdog_total: 5591714, watchdog_rollingDaily: 4213, …}
})();
```

## Helpers

This library adds multiple helpers to facilitate using the Hypixel API. You can find documentation on each helper [here](https://node-hypixel.zikeji.com/guide/helpers/player-ranks/). If you would like to request a helper that doesn't exist, please open an issue. Otherwise if you would like to contribute one refer to the below section.

## Contributing

If some API result isn't documented / typed out fully, please open an issue and I can see about adding it. However some data is too exhaustive to provide typings to in a reasonable manner, as exhibited [here](https://github.com/zikeji/node-hypixel/issues/119), where it isn't reasonable to add 19.5 thousand lines of code to document the entire dataset.

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All changes must ensure they pass eslint, tests, and that testing is updated to meet or exceed the previous coverage.

### New Typings

If Hypixel updates their API documentation, you can navigate to https://api.hypixel.net and click "Download", place it in the root folder of this project, and do `npm run types:openapi` to regenerate the `./src/types/api.ts`.

## Licenses

This projected is licensed under the MIT license. For additional details see [LICENSE](LICENSE).

This library contains derivative work based on classes from the [hypixel-php](https://github.com/Plancke/hypixel-php) library. Code that is derivative work of [hypixel-php](https://github.com/Plancke/hypixel-php) will be marked as such with a header comment. See [LICENSE-HYPIXEL-PHP.md](LICENSE-HYPIXEL-PHP.md) for additional details on the original license.