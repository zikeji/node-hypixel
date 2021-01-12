(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{464:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"zikeji-hypixel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zikeji-hypixel"}},[e._v("#")]),e._v(" @zikeji/hypixel")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://www.npmjs.com/package/@zikeji/hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/npm/v/@zikeji/hypixel",alt:"npm"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/@zikeji/hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/bundlephobia/min/@zikeji/hypixel",alt:"npm bundle size"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/docs-VuePress-green",alt:"visit docs"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://discord.gg/QkcGHwG",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/support-Discord-green",alt:"Visit our Discord server."}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/@zikeji/hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/snyk/vulnerabilities/npm/@zikeji/hypixel",alt:"Snyk Vulnerabilities for npm package version"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://www.npmjs.com/package/@zikeji/hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/librariesio/release/npm/@zikeji/hypixel",alt:"Libraries.io dependency status for latest release"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/blob/master/LICENSE",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/license/zikeji/node-hypixel",alt:"GitHub license"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/last-commit/zikeji/node-hypixel",alt:"GitHub last commit"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/languages/code-size/zikeji/node-hypixel",alt:"GitHub code size in bytes"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/issues",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/issues/zikeji/node-hypixel",alt:"GitHub issues"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://coveralls.io/github/zikeji/node-hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/coveralls/github/zikeji/node-hypixel",alt:"Coveralls"}}),s("OutboundLink")],1),e._v(" "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/github/workflow/status/zikeji/node-hypixel/release",alt:"GitHub Workflow Status"}}),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("With thorough "),s("strong",[s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/intellisense",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliSense"),s("OutboundLink")],1)]),e._v(" support & "),s("strong",[s("a",{attrs:{href:"https://coveralls.io/github/zikeji/node-hypixel",target:"_blank",rel:"noopener noreferrer"}},[e._v("100% test coverage"),s("OutboundLink")],1)]),e._v(", this is an unopinionated async/await API wrapper for "),s("a",{attrs:{href:"https://api.hypixel.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hypixel's Public API"),s("OutboundLink")],1),e._v(". It is developed in TypeScript complete with "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com/ts-api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("typed interfaces"),s("OutboundLink")],1),e._v(" for all API responses (and an "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com/api/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI.yaml"),s("OutboundLink")],1),e._v("!), built-in rate-limit handling, "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com/guide/advanced/cache/",target:"_blank",rel:"noopener noreferrer"}},[e._v("flexible cache support"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com/guide/helpers/player-ranks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("helper functions"),s("OutboundLink")],1),e._v(", and support for undocumented endpoints.")]),e._v(" "),s("p",[e._v("This library aims to replicate the API paths in it's method usage. As such, the general scheme would be to change the path of an API call by simply replacing the "),s("code",[e._v("/")]),e._v(" with a "),s("code",[e._v(".")]),e._v(", and if the endpoint takes multiple parameters, those are added on the end. For example, "),s("code",[e._v("api.hypixel.net/skyblock/profiles?uuid=1234")]),e._v(" would simply become "),s("code",[e._v("client.skyblock.profiles.uuid('1234')")]),e._v(". Of course, with everything being fully typed if you are using an IDE that supports "),s("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/intellisense",target:"_blank",rel:"noopener noreferrer"}},[e._v("IntelliSense"),s("OutboundLink")],1),e._v(" you should rarely need to reference documentation.")]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("Use "),s("a",{attrs:{href:"https://www.npmjs.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),s("OutboundLink")],1),e._v(" to install this library.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i --save @zikeji/hypixel\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" Client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@zikeji/hypixel"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" client "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Client")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"API_KEY"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("async")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" status "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("uuid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"20934ef9488c465180a78f861586b4cf"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Minikloon")]),e._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// {"online": false}')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" stats "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("watchdogstats")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// {watchdog_lastMinute: 1, staff_rollingDaily: 2609, watchdog_total: 5591714, watchdog_rollingDaily: 4213, …}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),s("h2",{attrs:{id:"helpers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#helpers"}},[e._v("#")]),e._v(" Helpers")]),e._v(" "),s("p",[e._v("This library adds multiple helpers to facilitate using the Hypixel API. You can find documentation on each helper "),s("a",{attrs:{href:"https://node-hypixel.zikeji.com/guide/helpers/player-ranks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(". If you would like to request a helper that doesn't exist, please open an issue. Otherwise if you would like to contribute one refer to the below section.")]),e._v(" "),s("h2",{attrs:{id:"contributing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),s("p",[e._v("If some API result isn't documented / typed out fully, please open an issue and I can see about adding it. However some data is too exhaustive to provide typings to in a reasonable manner, as exhibited "),s("a",{attrs:{href:"https://github.com/zikeji/node-hypixel/issues/119",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(", where it isn't reasonable to add 19.5 thousand lines of code to document the entire dataset.")]),e._v(" "),s("p",[e._v("Otherwise, pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All changes must ensure they pass eslint, tests, and that testing is updated to meet or exceed the previous coverage.")]),e._v(" "),s("h2",{attrs:{id:"licenses"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#licenses"}},[e._v("#")]),e._v(" Licenses")]),e._v(" "),s("p",[e._v("This projected is licensed under the MIT license. For additional details see "),s("a",{attrs:{href:"LICENSE"}},[e._v("LICENSE")]),e._v(".")]),e._v(" "),s("p",[e._v("This library contains derivative work based on classes from the "),s("a",{attrs:{href:"https://github.com/Plancke/hypixel-php",target:"_blank",rel:"noopener noreferrer"}},[e._v("hypixel-php"),s("OutboundLink")],1),e._v(" library. Code that is derivative work of "),s("a",{attrs:{href:"https://github.com/Plancke/hypixel-php",target:"_blank",rel:"noopener noreferrer"}},[e._v("hypixel-php"),s("OutboundLink")],1),e._v(" will be marked as such with a header comment. See "),s("RouterLink",{attrs:{to:"/node_modules/.temp/temp-pages/LICENSE-HYPIXEL-PHP.html"}},[e._v("LICENSE-HYPIXEL-PHP.md")]),e._v(" for additional details on the original license.")],1)])}),[],!1,null,null,null);t.default=n.exports}}]);