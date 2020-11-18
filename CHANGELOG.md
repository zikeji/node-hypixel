# Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

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
