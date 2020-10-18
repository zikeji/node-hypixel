# hypixelapi

[![npm](https://img.shields.io/npm/v/hypixelapi)][npm]
[![npm bundle size](https://img.shields.io/bundlephobia/min/hypixelapi)][npm]
[![visit docs](https://img.shields.io/badge/docs-VuePress-green)][docs]
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/hypixelapi)][npm]
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/hypixelapi)][npm]
[![GitHub license](https://img.shields.io/github/license/zikeji/node-hypixelapi)](https://github.com/zikeji/node-hypixelapi/blob/master/LICENSE)
[![GitHub last commit](https://img.shields.io/github/last-commit/zikeji/node-hypixelapi)][github]
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/zikeji/node-hypixelapi)][github]
[![GitHub issues](https://img.shields.io/github/issues/zikeji/node-hypixelapi)](https://github.com/zikeji/node-hypixelapi/issues)
[![Coveralls github](https://img.shields.io/coveralls/github/zikeji/node-hypixelapi)][github]
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/zikeji/node-hypixelapi/release)][github]

[npm]: https://www.npmjs.com/package/hypixelapi
[github]: https://github.com/zikeji/node-hypixelapi
[docs]: https://hypixelapi.zikeji.com
[hypixelapi]: https://api.hypixel.net/

An unopinionated async/await API wrapper for [Hypixel's Skyblock API][hypixelapi] developed in TypeScript complete with [documentation][docs], typed interfaces for all API responses, rate-limit handling, a few helpers, and support for undocumented endpoints.

The library aims to replicate the [Hypixel API][hypixelapi] as closely as possible, and as such won't alter the results, merely offering intellisense suggestions / completion of results.

## Project Status

Development has started, not all features are implemented and not all endpoints explored and typed. This is a relatively small project and I intend to have it done ASAP.

### Roadmap

- [x] Add rate limiting support
- [ ] Add method, typing, testing, and documentation for:
  - [x] News
  - [ ] Profile
  - [ ] Profiles
  - [ ] Auction
  - [ ] Auctions
  - [ ] Bazaar
    - [ ] Product
    - [ ] Products
  - [ ] **Resources**
    - [x] Collections
    - [ ] Skills

## Installation

Use [npm](https://www.npmjs.com) to install this library.

```bash
npm i --save hypixelapi
```

## Usage

```javascript
import { Client as HypixelSkyblock } from "hypixelapi";
const client = new HypixelSkyblock("API_KEY");
```

## Contributing
If some API result isn't documented / typed out fully, please open an issue and I can add it ASAP. Otherwise, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

All changes must ensure they pass eslint, tests, and that testing is updated to meet or exceed the previous coverage.

## License
[MIT](https://choosealicense.com/licenses/mit/)