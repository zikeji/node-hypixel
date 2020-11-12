# @zikeji/hypixel

[![npm](https://img.shields.io/npm/v/@zikeji/hypixel)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/@zikeji/hypixel)][npm]
[![visit docs](https://img.shields.io/badge/docs-VuePress-green)][docs]
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

An unopinionated async/await API wrapper for [Hypixel's Public API][hypixel] developed in TypeScript complete with [documentation][docs], typed interfaces for all API responses, rate-limit handling, a few helpers, and support for undocumented endpoints.

The library aims to replicate the [Hypixel API][hypixel] as closely as possible, and as such won't alter the results, merely offering intellisense suggestions, rate-limit handling, and helpers.

## Project Status

Working on adding more helpers to make your life easier, but all other features are implemented and ready to go.

## Installation

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
  const stats = await client.watchdogstats();
  console.log(stats);
  // {watchdog_lastMinute: 1, staff_rollingDaily: 2609, watchdog_total: 5591714, watchdog_rollingDaily: 4213, …}
})();
```

## Roadmap

- [x] Add rate limiting support
- [x] Add cache support
- [x] Add method, typing, testing, and documentation for:
  - [x] Boosters
  - [x] Find Guild
  - [x] Friends
  - [x] Game Counts
  - [x] Guild
  - [x] Key
  - [x] Leaderboards
  - [x] Player
  - [x] Player Count
  - [x] Recent Games
  - [x] **Resources**
    - [x] Achievements
    - [x] Challenges
    - [x] Quests
    - [x] **Guilds**
      - [x] Achievements
      - [x] Permissions
    - [x] **SkyBlock**
      - [x] Collections
      - [x] Skills
  - [x] **SkyBlock**
    - [x] Auction
    - [x] Auctions
    - [x] Bazaar
    - [x] News
    - [x] Profile
    - [x] Profiles
  - [x] Status
  - [x] Watchdog Stats
- [ ] Add extended documentation, and helpers for:
  - [ ] Player endpoint
    - [ ] XP to network level
    - [x] Rank info helper
  - [ ] SkyBlock Profile endpoint
    - [ ] collection amounts to collection tier
    - [ ] skill xp to skill level

## Contributing
If some API result isn't documented / typed out fully, please open an issue and I can add it ASAP. Otherwise, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All changes must ensure they pass eslint, tests, and that testing is updated to meet or exceed the previous coverage.

## License
[MIT](https://choosealicense.com/licenses/mit/)