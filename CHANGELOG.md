# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

### [3.1.1](https://github.com/zikeji/node-hypixel/compare/v3.1.0...v3.1.1) (2021-03-30)


### Bug Fixes

* add bigint check ([8988723](https://github.com/zikeji/node-hypixel/commit/89887236d5f4cf2a2f177ab336819a71eeb65003))


### Miscellaneous Chores

* **deps:** update dependencies ([5400617](https://github.com/zikeji/node-hypixel/commit/54006179767eea36750aaacfe099f54896e26759))
* **deps docs:** bump typedoc plugin ([1f65240](https://github.com/zikeji/node-hypixel/commit/1f65240629de9da946b0667f2faeea8968b026cc))
* **deps docs:** update documentation deps and update styles to fix issues ([34988f2](https://github.com/zikeji/node-hypixel/commit/34988f266062531b7da582f8f98164d48403a014))
* **docs:** update CI action ([f737eda](https://github.com/zikeji/node-hypixel/commit/f737edaf43ad428163b191016c270c27650b0c03))

## [3.1.0](https://github.com/zikeji/node-hypixel/compare/v3.0.3...v3.1.0) (2021-03-22)


### Features

* add deno example, add semantic release command to change README.md ([8027a8e](https://github.com/zikeji/node-hypixel/commit/8027a8e559990bf5bf024a130518d9ac5f941687))


### Documentation

* **README:** add /mod.ts to docs for Deno ([357e760](https://github.com/zikeji/node-hypixel/commit/357e760627cce25257c4627ba6f0f9d6af46d487))


### Miscellaneous Chores

* **deps:** update dependencies ([28eb3b3](https://github.com/zikeji/node-hypixel/commit/28eb3b3135c8ebf808f5008cbba06bbfc9e376d3))

### [3.0.3](https://github.com/zikeji/node-hypixel/compare/v3.0.2...v3.0.3) (2021-03-22)


### Bug Fixes

* **ci:** change token to env ([9251406](https://github.com/zikeji/node-hypixel/commit/925140687b302545aa5da91af186747ba0f54e7e))
* **ci:** push after removing the deno_dist files ([b81a280](https://github.com/zikeji/node-hypixel/commit/b81a280dac74d1d6ffc04480b4d9084bfd7dced3))
* **ci:** use API directly ([5f96489](https://github.com/zikeji/node-hypixel/commit/5f96489cdd5e5e5ace0f2f7d8e4132dbde373fd9))

### [3.0.2](https://github.com/zikeji/node-hypixel/compare/v3.0.1...v3.0.2) (2021-03-22)


### Bug Fixes

* **ci:** use dispatch, fix missing backtick ([dad1989](https://github.com/zikeji/node-hypixel/commit/dad1989df8ed21db0b236bec68abfe006a4021f8))


### Tests

* **helpers:** migrate more deno tests ([1e144bd](https://github.com/zikeji/node-hypixel/commit/1e144bd46e6c3a54d39390f4b67c07033ffe3f72))

### [3.0.1](https://github.com/zikeji/node-hypixel/compare/v3.0.0...v3.0.1) (2021-03-22)


### Bug Fixes

* **ci:** fix typo in ci ([0644fd7](https://github.com/zikeji/node-hypixel/commit/0644fd743cb850bbefd6510708d8b7d67ea089c5))

## [3.0.0](https://github.com/zikeji/node-hypixel/compare/v2.2.3...v3.0.0) (2021-03-22)


### ⚠ BREAKING CHANGES

* separate request portion of client and add denoify port

### Features

* add denoify in prep to properly add Deno support ([3315eb4](https://github.com/zikeji/node-hypixel/commit/3315eb4882a464265e9bd2fd700701bf37eb065c))
* add NBT deno port for TransformItemData ([610aa32](https://github.com/zikeji/node-hypixel/commit/610aa32049715acaa4bb8d7e2db11752f29f5851))
* ignore bulky files in distribution ([ecbb545](https://github.com/zikeji/node-hypixel/commit/ecbb545aef7f93080de1ec13203ba67bf753eeb0))
* separate request portion of client and add denoify port ([687acb0](https://github.com/zikeji/node-hypixel/commit/687acb056f03f5cc59548bba3bf2295a938ad603))
* update release workflow ([72265c2](https://github.com/zikeji/node-hypixel/commit/72265c2010b76b3704bae7f6bc253d42d3282663))


### Bug Fixes

* add try/catch to solve issue with nbt_parser ([08228b7](https://github.com/zikeji/node-hypixel/commit/08228b7a260281d7767c22f5f82f07eba32292b3))
* commit deno test files ([389dcad](https://github.com/zikeji/node-hypixel/commit/389dcadab7bf5e5e9b90908a5d45264a65a70ae1))
* fix incorrect merge causing issues ([70ba731](https://github.com/zikeji/node-hypixel/commit/70ba7311ae9e12cd318d5a8c83c6ec0824d64835))


### Miscellaneous Chores

* **deps:** update prismarine-nbt dev dependency ([6301739](https://github.com/zikeji/node-hypixel/commit/6301739b1f8383673c701a625a10c33fdbbe227f))


### Tests

* **coverage:** ignore deno ports for coverage ([7a16dda](https://github.com/zikeji/node-hypixel/commit/7a16dda1d81de5b5973ef0b456fd158c2e1049eb))
* **fix:** remove unused import ([298bf98](https://github.com/zikeji/node-hypixel/commit/298bf981dcee1d35b1bb90c28865c23715ab8a8b))
* refer to previous ([50e1509](https://github.com/zikeji/node-hypixel/commit/50e15099f2bda10bc13f19489a3bbc8c8febe916))
* remove globals.d.ts from test files ([8ce8a07](https://github.com/zikeji/node-hypixel/commit/8ce8a075dba1c05acb31731f862e051a23225f70))


### Documentation

* restore changelog ([93efe02](https://github.com/zikeji/node-hypixel/commit/93efe0246f2437dfa2cf7c3db4649d042c0365a3))
* **helpers:** update minecraft item data docs for deno ([8fda927](https://github.com/zikeji/node-hypixel/commit/8fda927eb8ad2b90bc577a799580f7ad3ee1aed8))
* **helpers:** update prismarine nbt line ([fb0535d](https://github.com/zikeji/node-hypixel/commit/fb0535d4dd66d0ff43cfcb800f0b10426214d0bc))

### [2.2.3](https://github.com/zikeji/node-hypixel/compare/v2.2.2...v2.2.3) (2021-03-19)


### Bug Fixes

* **deno:** rework imports and change stuff around to get Deno working ([7d2e016](https://github.com/zikeji/node-hypixel/commit/7d2e0168f71307a28fa3bca87579ac52a91c4ee6))

### [2.2.2](https://github.com/zikeji/node-hypixel/compare/v2.2.1...v2.2.2) (2021-03-19)


### Bug Fixes

* **deno:** add deno-types comments ([cd97322](https://github.com/zikeji/node-hypixel/commit/cd9732245a65d85f1c1b9464666f16b9345a5f67))

### [2.2.1](https://github.com/zikeji/node-hypixel/compare/v2.2.0...v2.2.1) (2021-03-19)


### Bug Fixes

* **deno:** add mod.ts for deno ([3a024f0](https://github.com/zikeji/node-hypixel/commit/3a024f04c880ea039d513bf5a41d79f2ad283d4f))
* **deno:** export all with extension in mod.ts for correct resolution ([16b6839](https://github.com/zikeji/node-hypixel/commit/16b68390cb31d9d36ebffaa17c156db18ac2207a))

## [2.2.0](https://github.com/zikeji/node-hypixel/compare/v2.1.2...v2.2.0) (2021-03-19)


### Features

* **helpers:** add SkyWars helpers for level and prestige ([15be627](https://github.com/zikeji/node-hypixel/commit/15be62719ac88af96f0342ad86e065f98a5915fc)), closes [#203](https://github.com/zikeji/node-hypixel/issues/203)


### Documentation

* **helpers:** add SkyWars helpers documentation ([ed80716](https://github.com/zikeji/node-hypixel/commit/ed807166c38206f21f25daf3c67cadb4e27ddd46))
* fix typo in bedwars info ([db7ab77](https://github.com/zikeji/node-hypixel/commit/db7ab77f6e5a11ca1a95a3770f44537a4c246dfd))
* optimize webp examples ([37abc23](https://github.com/zikeji/node-hypixel/commit/37abc2300d1e692d75e951670e6925f227e7dd93))

### [2.1.2](https://github.com/zikeji/node-hypixel/compare/v2.1.1...v2.1.2) (2021-03-19)


### Miscellaneous Chores

* update dependencies ([6d787bf](https://github.com/zikeji/node-hypixel/commit/6d787bf1f5750cfcb57aa9749b3ad3e1edb91e89))
* update dev dependencies ([8503b74](https://github.com/zikeji/node-hypixel/commit/8503b7467a5a08fa1e9bee888b1f1923c7493e76))


### Documentation

* add deno link ([b58124d](https://github.com/zikeji/node-hypixel/commit/b58124d21d96c185639bc15585a8b7e0b8167602))

### [2.1.1](https://github.com/zikeji/node-hypixel/compare/v2.1.0...v2.1.1) (2021-01-12)


### Miscellaneous Chores

* **semantic-releases:** add new releaseRules ([b726ef8](https://github.com/zikeji/node-hypixel/commit/b726ef8f30aee457948360d25c598c66989a08e2))


### Documentation

* **readme:** add Discord link to README ([0c583aa](https://github.com/zikeji/node-hypixel/commit/0c583aa884998a29b1ed8ed10f21ca99e6613001))
* **vuepress:** add Discord link to navigation bar of documentation site ([51d1abb](https://github.com/zikeji/node-hypixel/commit/51d1abb1c561ef241f03d4951fe3c159c365271f))

## [2.1.0](https://github.com/zikeji/node-hypixel/compare/v2.0.1...v2.1.0) (2021-01-12)


### Features

* **docs:** add algolia docsearch ([3bf266a](https://github.com/zikeji/node-hypixel/commit/3bf266a84bae59374b99e3beeb7e3d6d33c28a07))

### [2.0.1](https://github.com/zikeji/node-hypixel/compare/v2.0.0...v2.0.1) (2021-01-09)


### Bug Fixes

* **docs:** don't include files, only a single entry point ([e734f75](https://github.com/zikeji/node-hypixel/commit/e734f75da53e0aa8410278c04d729309bda41e07))


### Documentation

* **readme:** add some more information to readme ([685daf1](https://github.com/zikeji/node-hypixel/commit/685daf1a1887660b7bb2cb429233e8a0129def12))
* **readme:** update general information in readme header ([49d2227](https://github.com/zikeji/node-hypixel/commit/49d22273e9de7b001378786bd92790e6c4330df9))
* add category for new helpers ([ca4c2d3](https://github.com/zikeji/node-hypixel/commit/ca4c2d304b7f2fe52f0aa81b6cb64b74ab3d3f3f))
* add more documentation to methods ([a42eeff](https://github.com/zikeji/node-hypixel/commit/a42eeffd9dc5e54e4f10384e6d9cb4a04212b9df))
* include full reflection in navbar title ([cbd42e8](https://github.com/zikeji/node-hypixel/commit/cbd42e88905315642226533ae99c226db4e3fddb))
* remove no-inherit plugin ([ce0faba](https://github.com/zikeji/node-hypixel/commit/ce0faba50cbc508ee57afe94732330df4501361e))
* remove theme as it was removed in latest release ([8ba4e4b](https://github.com/zikeji/node-hypixel/commit/8ba4e4bf5950f77c898bbb2ed513583426db938e))
* update broken links ([8a2da51](https://github.com/zikeji/node-hypixel/commit/8a2da5119fdbdb65773a40fad3713822499109a4))
* update to newer plugin options for cleaner output ([85f8333](https://github.com/zikeji/node-hypixel/commit/85f8333c207c10fc8a8dac23f79cf2a178362f99))


### Miscellaneous Chores

* **deps:** update out of date dependencies, resolve migration changes in vuepress-theme-mrhope ([ca71397](https://github.com/zikeji/node-hypixel/commit/ca713971e4d0e9fd32453c4db8b005d7627bdec6))

## [2.0.0](https://github.com/zikeji/node-hypixel/compare/v1.20.0...v2.0.0) (2021-01-08)


### ⚠ BREAKING CHANGES

* issue with typedoc generation vuepress build

### Bug Fixes

* issue with typedoc generation vuepress build ([17e37c3](https://github.com/zikeji/node-hypixel/commit/17e37c3480c209c19d751af40218d900359cadc7))


### Documentation

* **dev:** resolve issue rebuilding in a saturated environment ([bb7fe85](https://github.com/zikeji/node-hypixel/commit/bb7fe85645c77f731964be4c61b7ebef14ea87a3))

## [1.20.0](https://github.com/zikeji/node-hypixel/compare/v1.19.0...v1.20.0) (2021-01-08)


### Features

* **helpers:** add SkyBlock skills helper ([2ec2d34](https://github.com/zikeji/node-hypixel/commit/2ec2d34426743ee8b9d02084a7e42c7d37064e2b))


### Documentation

* **helpers:** add documentation for the profile skills helper ([b5427d9](https://github.com/zikeji/node-hypixel/commit/b5427d959098d86056c5032c1fe91a13295154e7))
* **readme:** remove 2.0 mention ([5f24c6b](https://github.com/zikeji/node-hypixel/commit/5f24c6b15341f66fd692f4d0badede71d1fa5a41))
* **typedoc:** resolve issue with ts api docs missing ([4d2dd71](https://github.com/zikeji/node-hypixel/commit/4d2dd710f8cdf7dfc787fc29b88d2fe6788fb145))
* **vuepress:** remove erroneous console.log statement ([2926b8c](https://github.com/zikeji/node-hypixel/commit/2926b8c55b01cb730d33fb6dfe82ff44703bd328))
* **vuepress:** update all urls to point to new ts-api links ([7beecf8](https://github.com/zikeji/node-hypixel/commit/7beecf8bc6c5e8316e307840050618cbc71bbeba))


### Miscellaneous Chores

* **deps:** update a few documentation related dependencies ([58409f0](https://github.com/zikeji/node-hypixel/commit/58409f04e3082c434d5c03291c128fb7f15b0f13))
* **deps:** update dts generator and update processing to account for changes ([05cef05](https://github.com/zikeji/node-hypixel/commit/05cef05d8c856fb1b31262e1c04a4e20a50c114c))

## [1.19.0](https://github.com/zikeji/node-hypixel/compare/v1.18.0...v1.19.0) (2021-01-04)


### Features

* **api:** add /skyblock/auctions_ended endpoint ([1b8a4f6](https://github.com/zikeji/node-hypixel/commit/1b8a4f6a85be6c9b641e3e8bccf15d4f4f1493de))


### Bug Fixes

* **deps:** duplicate line ([f0359c1](https://github.com/zikeji/node-hypixel/commit/f0359c1c8cdc25050251e33e1f12a37fecf75461))
* **docs:** fix issue with newer typedoc not generating properly ([9ad8e8f](https://github.com/zikeji/node-hypixel/commit/9ad8e8fd0d39bfff791eb6344dc31a08d945ca0a))


### Documentation

* **helpers:** add information on using the item data helper for auctions ([2fb1ece](https://github.com/zikeji/node-hypixel/commit/2fb1ecef4ae870c6a49ddb1ad3f64636923d3182))


### Miscellaneous Chores

* **dependencies:** update prismarine, and typings ([524ba52](https://github.com/zikeji/node-hypixel/commit/524ba5224187519ddda5d23e18c1016a4d159447))

## [1.18.0](https://github.com/zikeji/node-hypixel/compare/v1.17.0...v1.18.0) (2020-12-08)


### Features

* **tests:** add tests for collections helper ([01a37aa](https://github.com/zikeji/node-hypixel/commit/01a37aa3bfc7ce8adcc2a85fe6c5576d84ec34ea))
* add skyblock collections helper ([55d0efb](https://github.com/zikeji/node-hypixel/commit/55d0efbd72ba2072177a66b5c90a9f0ff5328255))
* **api:** build out Guild schema more ([2e9c09a](https://github.com/zikeji/node-hypixel/commit/2e9c09a933c88dc5fc271a49c2d6af0df1923b24))
* **helpers:** add guild level helper ([2bed9c3](https://github.com/zikeji/node-hypixel/commit/2bed9c3f3d22d30eeaa1cef9eb98674ab6b1082a))


### Bug Fixes

* **client:** fix reset date in limited event ([1874bbc](https://github.com/zikeji/node-hypixel/commit/1874bbc4086e19f659b3af79db0de1f4299405c3))
* **docs:** resolve error generating TS documentation ([9b9ab7d](https://github.com/zikeji/node-hypixel/commit/9b9ab7db90ee5c9476e15eaae395621fb8cfdeae))
* **docs:** update navbar style to reflect vuepress theme update changes ([6d723b4](https://github.com/zikeji/node-hypixel/commit/6d723b4b62eceab3651c5af8db2a7539048ca2bf))
* **lint:** fixed lint errors from newer lint preset ([6afa7e5](https://github.com/zikeji/node-hypixel/commit/6afa7e56bcf972b5f6cd0ecf046140e729a90973))


### Tests

* update helpers test to reflect name change ([ed11e26](https://github.com/zikeji/node-hypixel/commit/ed11e262cdd7fa2234132726f6ae74984f25c6f9))


### Documentation

* **helpers:** add documentation for profile collections helper ([ad637f5](https://github.com/zikeji/node-hypixel/commit/ad637f54ceef9697db1d158a1d0f6b5371a6d0a6))
* **readme:** add helpers excerpt ([99d4648](https://github.com/zikeji/node-hypixel/commit/99d46482af0b041c2dbe85705c25880955866181))
* add frontmatter category and tags ([0a528f1](https://github.com/zikeji/node-hypixel/commit/0a528f187072da6619b68e79ccb32d0e3e32c738))
* update last-updated date to be more readable ([3beb18e](https://github.com/zikeji/node-hypixel/commit/3beb18e592783a604df734d1c81dd602d106570c))
* **changelog:** update pages.js to rebuild changelog with better formatting ([6469178](https://github.com/zikeji/node-hypixel/commit/6469178a5a63eeb63f27946f926f3fa7dc54a461))
* add more notes to helpers ([f3f733f](https://github.com/zikeji/node-hypixel/commit/f3f733f08a8f75c857c5ba67a6be89424fbb787c))
* **helpers:** add guild level documentation ([6e3a977](https://github.com/zikeji/node-hypixel/commit/6e3a9778ed1c05b61aa82a7c5cf47b15766edce2))
* **helpers:** fix typo on network-level doc ([cb3309b](https://github.com/zikeji/node-hypixel/commit/cb3309bf0c42376cd885cf13dbe5102c878f4ee3))
* **readme:** add 2.0 description to readme ([8c46629](https://github.com/zikeji/node-hypixel/commit/8c46629bc42a14d4778eb44deec1abe979754346))

## [1.17.0](https://github.com/zikeji/node-hypixel/compare/v1.16.0...v1.17.0) (2020-11-17)


### Features

* **api:** completely explore and type out /player endpoint and update testing to validate ([9e674bd](https://github.com/zikeji/node-hypixel/commit/9e674bdf9167cf0f3997f92445bcd734a0472e64))
* **api:** expand typing to the player.stats.Bedwars object ([4a469af](https://github.com/zikeji/node-hypixel/commit/4a469af75a4124a9bf352e2558c6067b3a832d9b))
* **api:** update player schema to include more social links ([2d43066](https://github.com/zikeji/node-hypixel/commit/2d430667ef3a8dc1652384609764784b345fc404))
* **helpers:** add Bedwars helper for level / prestige info ([485c010](https://github.com/zikeji/node-hypixel/commit/485c0105503e8fd2072772beb1ba4c56e9ff7310))
* **helpers:** add NetworkLevel helper and add licensing information for the work ([21e2342](https://github.com/zikeji/node-hypixel/commit/21e2342aad614b806a15a536d5ca1c0aef38d77c))
* **helpers:** revise skyblock item data into minecraft item data and added usage example for pit ([398f3a9](https://github.com/zikeji/node-hypixel/commit/398f3a9029d91e2ff28fcc9a1117bd3fef721d33))


### Bug Fixes

* **helpers:** add rank and plus color as they are separate ([c61aba0](https://github.com/zikeji/node-hypixel/commit/c61aba0c1ec0b2becb019d366d86045182f18b25))
* **package:** removed redundant line ([f21ef7f](https://github.com/zikeji/node-hypixel/commit/f21ef7fa4a636ade7af17ab644d4fd5b105af274))


### Code Refactoring

* **helpers:** remove NonNullable due to earlier changes making it redundant ([648e476](https://github.com/zikeji/node-hypixel/commit/648e476814fe18cc4248514a9023d61ddcffcb5e))


### Documentation

* **helpers:** add description for network level helper. ([e1508a7](https://github.com/zikeji/node-hypixel/commit/e1508a785394ad0603058dde0dd80fb37cc8a814))
* **helpers:** add documentation for Bedwars helper ([90f0408](https://github.com/zikeji/node-hypixel/commit/90f0408c72a355572654b95e5efea32cebda7af1))
* **helpers:** add documentation for network level ([c9f2cdd](https://github.com/zikeji/node-hypixel/commit/c9f2cdd50b0d7fdb0f929026d4e0642d3b9a9132))


### Tests

* **helpers:** add bedwarslevelinfo test and trim fat ([2883d57](https://github.com/zikeji/node-hypixel/commit/2883d57b2bb5f2701d2c83725e06cb43b2994dd0))

## [1.16.0](https://github.com/zikeji/node-hypixel/compare/v1.15.0...v1.16.0) (2020-11-14)


### Features

* **helpers:** add NBT data transformation ([42f2325](https://github.com/zikeji/node-hypixel/commit/42f232593ba1eb295ad9d27fa2749dae9dfc6364))


### Bug Fixes

* **test:** fix compilation issue for running coverage ([8fbf1b6](https://github.com/zikeji/node-hypixel/commit/8fbf1b6df71eb91760ca33cf429febe69325a6ab))


### Code Refactoring

* **helpers:** moved current helpers into dedicated folder ([1893a68](https://github.com/zikeji/node-hypixel/commit/1893a68e9d2136027b909a60e5b1c561045acaa4))


### Tests

* **coverage:** bring coverage back to 100% ([ce895d4](https://github.com/zikeji/node-hypixel/commit/ce895d4c45b550381cf3489f1844dc96b0f55d90))
* **nbt:** add tests for transforming item data to ensure they match schema ([885f3d6](https://github.com/zikeji/node-hypixel/commit/885f3d6c666e5e88085b0472e5f97b5ac7e2ecba))


### Documentation

* **helpers:** add documentation and examples for item data helper ([015f724](https://github.com/zikeji/node-hypixel/commit/015f724f736d49ecec6e633e1cfe72456576c3a1))

## [1.15.0](https://github.com/zikeji/node-hypixel/compare/v1.14.0...v1.15.0) (2020-11-12)


### Features

* **api:** removed rate limit and key on /skyblock/auctions and /skyblock/bazaar ([e3a882f](https://github.com/zikeji/node-hypixel/commit/e3a882fa506ba00b44ee7acaea0ced5a7b47f7a3))
* **client:** add optional cache support to client ([7bbeb13](https://github.com/zikeji/node-hypixel/commit/7bbeb136da2a99742cc3181f29d12243a7414565))


### Bug Fixes

* **client:** ocassionally age is undefined when cache hit on CF ([894e33a](https://github.com/zikeji/node-hypixel/commit/894e33aeae6dde3ef5ae5f9c8effe56e49b72865))


### Code Refactoring

* **client:** no longer extend EventEmitter to get cleaner type suggestions ([fd2e5e5](https://github.com/zikeji/node-hypixel/commit/fd2e5e54bfac61875953c177d524a582b4254e12))


### Documentation

* **client:** add more documentation to the client ([278cf37](https://github.com/zikeji/node-hypixel/commit/278cf3783e1bb4507e12e647f7744d23adfe096e))
* **guide:** add cache guide ([236f110](https://github.com/zikeji/node-hypixel/commit/236f110e3af427cfafeb13596701d5b322ed1cbe))
* **readme:** update README ([1356d43](https://github.com/zikeji/node-hypixel/commit/1356d43ab3dc94f263f62df73c5fff4a95be6f31))

## [1.14.0](https://github.com/zikeji/node-hypixel/compare/v1.13.0...v1.14.0) (2020-11-11)


### Features

* **helpers:** add hypixel rank helper ([98b6fbf](https://github.com/zikeji/node-hypixel/commit/98b6fbf09420ff93dd421ba2230aa0f5495f1ae1))

## [1.13.0](https://github.com/zikeji/node-hypixel/compare/v1.12.0...v1.13.0) (2020-11-10)


### Features

* **api:** add /skyblock/auctions and /skyblock/auction endpoint ([9349037](https://github.com/zikeji/node-hypixel/commit/9349037713c601d3895a8038fda8395d2f64ad59))
* **api:** add /skyblock/bazaar endpoint ([8ffe9a5](https://github.com/zikeji/node-hypixel/commit/8ffe9a5dfe48aa1cf2e1cd86e3834cd3e1a6bfc1))
* **api:** add /skyblock/profile and /skyblock/profiles endpoint ([4c6285a](https://github.com/zikeji/node-hypixel/commit/4c6285af1767e26885ff1d399e45689a4db690e9))
* **api:** update skyblock profile schema ([9b84460](https://github.com/zikeji/node-hypixel/commit/9b844605cb2a6301e136f048199eac3f5c9b8039))
* **schema:** add headers to schema ([45ba69f](https://github.com/zikeji/node-hypixel/commit/45ba69f325edd797c83f48ef2b7d05ad679b07b4))


### Documentation

* **readme:** update progress in readme ([6c598d0](https://github.com/zikeji/node-hypixel/commit/6c598d0821a9bdf45476e06ec65728d7a1c13c9f))

## [1.12.0](https://github.com/zikeji/node-hypixel/compare/v1.11.0...v1.12.0) (2020-11-08)


### Features

* **api:** add /resources/achievements endpoint ([d648dc8](https://github.com/zikeji/node-hypixel/commit/d648dc8377d64296425d24d52682b2499e7d8abf))
* **api:** add /resources/challenges endpoint ([731895d](https://github.com/zikeji/node-hypixel/commit/731895db2064e1e0402020a9ad92cf74f96a22c4))
* **api:** add /resources/guilds/achievements and /resources/guilds/permissions endpoint ([015adf4](https://github.com/zikeji/node-hypixel/commit/015adf4e472630ba7921b1f67a0e70b1c9afc612))
* **api:** add /resources/quests endpoint ([ae40ec4](https://github.com/zikeji/node-hypixel/commit/ae40ec4c82ce4b542b42f453fb43fb53448a7981))


### Bug Fixes

* extra "example" key in schema ([5166bc9](https://github.com/zikeji/node-hypixel/commit/5166bc96a743043a4c0a873fd5739d23c1a4a767))

## [1.11.0](https://github.com/zikeji/node-hypixel/compare/v1.10.0...v1.11.0) (2020-11-07)


### Features

* **api:** add /findGuild endpoint ([2539022](https://github.com/zikeji/node-hypixel/commit/25390222ad9414f5474a1fe84886729226b6e307))
* **api:** add /friends endpoint ([04b1a9e](https://github.com/zikeji/node-hypixel/commit/04b1a9e6616b412558dbd33dffb67db824e5bc7c))
* **api:** add /key endpoint ([7c3b0f7](https://github.com/zikeji/node-hypixel/commit/7c3b0f74eadfe1b0557027b5e75d6f25ebef7eb2))
* **api:** add /player endpoint ([b6dd8b9](https://github.com/zikeji/node-hypixel/commit/b6dd8b947d1087a5820f985b877c2f2f5f41ab37))
* **api:** add boosters endpoint ([a78baf6](https://github.com/zikeji/node-hypixel/commit/a78baf607e87741aab3ff810fd43ef1b0ef51c41))
* **api:** add guild endpoint ([66ff480](https://github.com/zikeji/node-hypixel/commit/66ff4801e8a9bafdc10f1593ff6272b595fa28d4))
* **api:** add leaderboards endpoint ([f0917c5](https://github.com/zikeji/node-hypixel/commit/f0917c5c4046b70c8b3b6a55d9a1f062c5fcd5a4))
* **api:** add player count and game counts endpoints ([44bf47a](https://github.com/zikeji/node-hypixel/commit/44bf47a7c92ef34cbdb20d8bc74ce2c60ee46b90))
* **api:** add recentGames endpoint ([9424309](https://github.com/zikeji/node-hypixel/commit/9424309544e61807a3b10167dac0a24ad6ae259d))
* **error handling:** add GenericHTTPError to cover the rest of Hypixel's error types & increase code coverage to 100% ([02c92e1](https://github.com/zikeji/node-hypixel/commit/02c92e160b36c48ac6e8313146fe2a7f44dbe514))


### Documentation

* **readme:** update progress in readme ([4b7f29c](https://github.com/zikeji/node-hypixel/commit/4b7f29c6f61b0396115b651bf76b3766013366d2))

## [1.10.0](https://github.com/zikeji/node-hypixel/compare/v1.9.1...v1.10.0) (2020-10-20)


### Features

* **meta:** add new unenumerable meta field to results for meta information ([4357a7a](https://github.com/zikeji/node-hypixel/commit/4357a7a984de1fa7260a10946d283a4cac409ba9))
* **meta:** add ratelimit to meta ([3de2b7f](https://github.com/zikeji/node-hypixel/commit/3de2b7f61a9eb80e32184158e5f025f2d63cdb8e))


### Bug Fixes

* **type:** resultarray returns appropriate array type ([d8ae79e](https://github.com/zikeji/node-hypixel/commit/d8ae79e69bb4dd1f214ab01952ec79da9ece1736))


### Tests

* improve coverage, test new meta ([2933f04](https://github.com/zikeji/node-hypixel/commit/2933f04abf453712cf3db67b6e360ad311122bcd))
* **skyblock news:** add more assertions for news test ([791b02e](https://github.com/zikeji/node-hypixel/commit/791b02e6419c0c832b6c23e10005006b4e1ecdb7))


### Documentation

* **guide:** begin fleshing out guide ([be6ac06](https://github.com/zikeji/node-hypixel/commit/be6ac064572a3c6554bebca9a24534fdd7bd167a))
* **vuepress:** extract additionalpages to new plugin and adjust changelog sidebar headers ([41728e6](https://github.com/zikeji/node-hypixel/commit/41728e602fa766ba38104e15ced260783ca1b4b3))

### [1.9.1](https://github.com/zikeji/node-hypixel/compare/v1.9.0...v1.9.1) (2020-10-19)


### Bug Fixes

* **ci:** run test on everything so CI updates properly ([169ba06](https://github.com/zikeji/node-hypixel/commit/169ba0625eff2eab68edcdb78bc645589f396459))


### Documentation

* add more logging and second build to see if pesky ts-api wants to work ([c7a2c16](https://github.com/zikeji/node-hypixel/commit/c7a2c16001afb5566739a0e4abfc1c7c35da7a32))
* **readme:** update usage example ([606a46c](https://github.com/zikeji/node-hypixel/commit/606a46c2c21f92e71d42836eda49cea05959f200))

## [1.9.0](https://github.com/zikeji/node-hypixel/compare/v1.8.1...v1.9.0) (2020-10-19)


### Features

* **api:** add skyblock skills resource endpoint ([9ee0d8a](https://github.com/zikeji/node-hypixel/commit/9ee0d8af18b43016d7a2d28fdb827ea96811c85f))


### Bug Fixes

* **ci:** main not master ([a4b4c4d](https://github.com/zikeji/node-hypixel/commit/a4b4c4d7712a295f55d9ba8164a75e8379894e5d))
* **docs:** fix sidebar warning ([ff4e61c](https://github.com/zikeji/node-hypixel/commit/ff4e61cb9984cd72fd62159275799f0185e1e6f0))
* **docs:** refresh addthis on reload ([fee1619](https://github.com/zikeji/node-hypixel/commit/fee1619d01c65b70232f56386d1fa5066eceb648))


### Documentation

* **readme:** update readme usage example ([8a0ef8b](https://github.com/zikeji/node-hypixel/commit/8a0ef8bfd59742d8f24cb6af7ee56864083616c7))
* add AddThis support ([11545ca](https://github.com/zikeji/node-hypixel/commit/11545ca01106e59bdff800f7d68b5a9ec8783026))

### [1.8.1](https://github.com/zikeji/node-hypixel/compare/v1.8.0...v1.8.1) (2020-10-19)


### Bug Fixes

* **docs:** checkout master and use node_env ([cad343e](https://github.com/zikeji/node-hypixel/commit/cad343ea0fc2f2417e0228cd9ba4e9c93d6c37a1))


### Documentation

* **api:** persist authorization ([c3fffd2](https://github.com/zikeji/node-hypixel/commit/c3fffd266a00a472d3f228240613be8a970fac2e))

## [1.8.0](https://github.com/zikeji/node-hypixel/compare/v1.7.0...v1.8.0) (2020-10-19)


### Features

* **api:** add /status endpoint ([29be746](https://github.com/zikeji/node-hypixel/commit/29be746677d73f2116be1bb5f4ec066ed8d73c49))
* **docs:** add support for code blocks in descriptions ([e8025eb](https://github.com/zikeji/node-hypixel/commit/e8025eb5618cd2e8168c44c9602ac56bd0d9c73c))
* **docs:** revamp the schema display styles ([0aa2ab7](https://github.com/zikeji/node-hypixel/commit/0aa2ab7ef2629a4c6829b4f3eb8256270c74a05f))
* **docs:** use webpack to load openapi yaml schema ([33bc537](https://github.com/zikeji/node-hypixel/commit/33bc537e98fef298a930f618ee5d33afcfbaff28))


### Bug Fixes

* **ci:** type in nyc command for ci coverage ([9beee2e](https://github.com/zikeji/node-hypixel/commit/9beee2e1fcc06ce91e011bc578a884f58d39e6f5))
* **cross-env:** use a ci script ([8f1b4e1](https://github.com/zikeji/node-hypixel/commit/8f1b4e11b10a82b61a5214d5384e62ce208902ed))
* **docs:** fix issues causing docs:build to fail ([59f0f37](https://github.com/zikeji/node-hypixel/commit/59f0f375768cab50c626bebe6c95dac278091967))


### Documentation

* **api:** style authorization dialog ([8554eca](https://github.com/zikeji/node-hypixel/commit/8554ecafa6c9c5596874e87b89595da1be225795))
* **config:** add to watched files ([2d9283a](https://github.com/zikeji/node-hypixel/commit/2d9283a59f2e5084192dda07883a0e73c8e780fd))
* **openapi:** add usage examples ([77b6d6c](https://github.com/zikeji/node-hypixel/commit/77b6d6c7bc0ab027b1de3157f66434dc659f93c6))
* **readme:** update to include project readme instead of custom readme for /, fix some styling ([6f162c0](https://github.com/zikeji/node-hypixel/commit/6f162c05491466c74ebe88bd0aaccfd4238a656a))
* **swagger:** change expand depth ([44992cb](https://github.com/zikeji/node-hypixel/commit/44992cb2510e62bcb5587114d8559478a45f0639))

## [1.7.0](https://github.com/zikeji/node-hypixel/compare/v1.6.0...v1.7.0) (2020-10-19)


### Features

* **api:** add watchdogstats ([d6ad4b7](https://github.com/zikeji/node-hypixel/commit/d6ad4b7cb715680c36e7149c58074ee1a1219ee2))


### Reverts

* **ci:** revert runs-on as it did not solve the issue ([4022c2c](https://github.com/zikeji/node-hypixel/commit/4022c2c89b29eb7b20e7a720db85435cf4a8aa36))


### Code Refactoring

* **client:** Refactor client to closely match the methods of the API. ([66854f4](https://github.com/zikeji/node-hypixel/commit/66854f4327dfc227914d4b754360f7faeefcfc2a))


### Documentation

* **readme:** update readme ([6ce65d7](https://github.com/zikeji/node-hypixel/commit/6ce65d79d4f0670c47a5329ae2d5dd76279fec21))
* **readme:** update roadmap ([71df72a](https://github.com/zikeji/node-hypixel/commit/71df72ac173396ce4b036801b70aa309ba319d29))
* **readme:** update roadmap ([61e774d](https://github.com/zikeji/node-hypixel/commit/61e774dbad2fa73f9cf5a97a66ad26f23eeb737d))
* **vuepress:** disable cache for local dev ([baea275](https://github.com/zikeji/node-hypixel/commit/baea2759957db42ec604bbac96bf67c3dc94e2e0))


### Miscellaneous Chores

* **dependencies:** update dependencies ([e257e22](https://github.com/zikeji/node-hypixel/commit/e257e224de8d23127c3458ae12e79a944dbf7b09))
* **dependencies:** update them once again ([7b9bbae](https://github.com/zikeji/node-hypixel/commit/7b9bbae9258ef759c9b717979f29d7fc0e0d2302))

## [1.6.0](https://github.com/zikeji/node-hypixel/compare/v1.5.2...v1.6.0) (2020-10-18)


### Features

* **docs:** add Swagger client with some styling ([7ef6f72](https://github.com/zikeji/node-hypixel/commit/7ef6f72587e197a933e63c3eed7d8727ebc74e6a))


### Bug Fixes

* include all in dist folder ([afa5044](https://github.com/zikeji/node-hypixel/commit/afa5044bbe96ba90f193f9607faadf15e2b0dadb))

### [1.5.2](https://github.com/zikeji/node-hypixel/compare/v1.5.1...v1.5.2) (2020-10-18)


### Bug Fixes

* **ci:** add logging to action in attempt to troubleshoot missing information ([c877fa4](https://github.com/zikeji/node-hypixel/commit/c877fa4716140244080c71639ad637acbc5dfe99))


### Documentation

* **meta:** add social, add embed metadata ([858895a](https://github.com/zikeji/node-hypixel/commit/858895abd91f684ed9632119593fc67614300456))
* **readme:** point to coveralls ([1d30fe2](https://github.com/zikeji/node-hypixel/commit/1d30fe259cb5beae73719543bfcd673af0230de2))

### [1.5.1](https://github.com/zikeji/node-hypixel/compare/v1.5.0...v1.5.1) (2020-10-18)


### Bug Fixes

* **docs:** properly escape hero text ([d3f789d](https://github.com/zikeji/node-hypixel/commit/d3f789dec489871d507a7aff5d64be37d37ea89b))
* **publishing:** add publishconfig and explicit private ([2fd4380](https://github.com/zikeji/node-hypixel/commit/2fd4380a5e797c214575e1ea07057ebefb0ac344))


### Documentation

* **readme:** fix links ([3565628](https://github.com/zikeji/node-hypixel/commit/3565628aab334cb63bdbb00fc63f219169d19fc3))

## [1.5.0](https://github.com/zikeji/node-hypixel/compare/v1.4.0...v1.5.0) (2020-10-18)


### Features

* **rebrand:** again, rebrand, to an available package name ([6b2fe6a](https://github.com/zikeji/node-hypixel/commit/6b2fe6a7d8527008821bc780896a2bc6ab8a92b6))


### Bug Fixes

* **typo:** type in package.json ([34fa9f0](https://github.com/zikeji/node-hypixel/commit/34fa9f0dc014d0eb512d2dabcbf8e4ae9c580186))


### Miscellaneous Chores

* **lock:** update package-lock ([bcfc0db](https://github.com/zikeji/node-hypixel/commit/bcfc0dbc777c91998b32ef30f107ca84c225801c))

## [1.4.0](https://github.com/zikeji/node-hypixel/compare/v1.3.0...v1.4.0) (2020-10-18)


### Features

* **collections:** add collections resource ([786f524](https://github.com/zikeji/node-hypixel/commit/786f52484d45f9c3722421651ccf4201640538fb))
* **rebrand:** rebrand to hypixelapi ([ca3dc87](https://github.com/zikeji/node-hypixel/commit/ca3dc8794f8a33238ac7d4b7f39b582a392f4034))

## [1.3.0](https://github.com/zikeji/node-hypixel/compare/v1.2.0...v1.3.0) (2020-10-17)


### Features

* **openapi:** begin implementation of OpenAPI 3.0 spec ([98dc4eb](https://github.com/zikeji/node-hypixel/commit/98dc4eb73066355d08122aa77cfd10b61a38791a))


### Documentation

* **readme:** update shield ([756e78f](https://github.com/zikeji/node-hypixel/commit/756e78f8ac53c0b6198866fc611836bd2c7ff1f9))
* **vuepress:** rename typedoc generated content to ts-api ([f56e9b3](https://github.com/zikeji/node-hypixel/commit/f56e9b3c740e9cbb4fd3ef8a76d58bfeaa642445))

## [1.2.0](https://github.com/zikeji/node-hypixel/compare/v1.1.0...v1.2.0) (2020-10-17)


### Features

* **docs:** add new documentation using vuepress ([d9a1661](https://github.com/zikeji/node-hypixel/commit/d9a166128985858a9e004f56fb98846f2698f876))


### Tests

* **queue:** fix reset data issue ([54ed1fd](https://github.com/zikeji/node-hypixel/commit/54ed1fd72cdb542b9a63a3b6b0c590cb38301f7a))


### Code Refactoring

* HypixelSkyblock to "Client". Add base index to re-export all for usage on NPM. ([99401bb](https://github.com/zikeji/node-hypixel/commit/99401bb0924bdd36ffb69e18a51a0f931a181c97))


### Documentation

* **readme:** update readme ([66b9c86](https://github.com/zikeji/node-hypixel/commit/66b9c86c8cbabdb3f8acc53632923170812e7d26))
* more documentation for the profile interface ([dab4a98](https://github.com/zikeji/node-hypixel/commit/dab4a98c71b4e5dff0ab7e043d56e6c5f8c1590e))
* more documentation tweaks, including namespacing ([4de57ee](https://github.com/zikeji/node-hypixel/commit/4de57ee613f240de4ac3389d136acdbc747c28f7))

## [1.1.0](https://github.com/zikeji/node-hypixel/compare/v1.0.0...v1.1.0) (2020-10-12)


### Features

* **ratelimit:** add rate limit queue ([707a342](https://github.com/zikeji/node-hypixel/commit/707a342c6fac73fb4e99acdbeb072dfb27f9388a))

## 1.0.0 (2020-10-11)


### Features

* houston, we are a go! ([eafb0d0](https://github.com/zikeji/node-hypixel/commit/eafb0d06b62b2be745bd9bf8d4048aeb1bded7ad))


### Bug Fixes

* **actions:** add environment variable ([773b7a1](https://github.com/zikeji/node-hypixel/commit/773b7a1110101a1cadee52d6b7bcf5762f2cc25c))
* **actions:** drop support for node 8.0 ([b8440f4](https://github.com/zikeji/node-hypixel/commit/b8440f402bc8dd95c06f770de28b87a59b1f07be))
* **ci:** note to self: build before running tests ([c70da5a](https://github.com/zikeji/node-hypixel/commit/c70da5abb1582074540688bfff4aa17605876f71))
* **semantic-release:** use main branch ([81276b0](https://github.com/zikeji/node-hypixel/commit/81276b028952cca8bf0964ae2bb4ac3340526090))


### Documentation

* **readme:** add another badge - shiny ([9236b32](https://github.com/zikeji/node-hypixel/commit/9236b322531a97f5ed9888f04a719ed546eb40ab))
* **readme:** update readme & package ([ddce35d](https://github.com/zikeji/node-hypixel/commit/ddce35d79374743ca4503f2d64d1cc6cec2fe93c))
