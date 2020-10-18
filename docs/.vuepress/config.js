const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "hypixelapi",
  description: "An unopinionated async/await API wrapper for Hypixel's Skyblock API developed in TypeScript complete with documentation, typed interfaces for all API responses, rate-limit handling, a few helpers, and support for undocumented endpoints.",
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "##9f00a7"}],
    ['meta', { name: "theme-color", content: "#9941d3"}],
  ],
  themeConfig: {
    hostname: "https://hypixelapi.zikeji.com",
    blog: false,
    logo: "/logo.svg",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Typescript API', link: '/ts-api/classes/client/#constructor' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/hypixelapi' },
    ],
    sidebar: [
      "/",
      "/guide/",
      ["/ts-api/classes/client/#constructor", "Typescript API"],
    ],
    pageInfo: ["Category","Tag"],
    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2020-present Zikeji",
    },
    repo: "zikeji/node-hypixelapi",
    docsDir: "docs",
    docsBranch: "master",
    editLinks: false,
    depoDisplay: true,
    backToTop: true,
    fullscreen: false,
    themeColor: {
      green: "#3eaf7c",
      blue: "#2196f3"
    },
  },
  plugins: [
    [
      "vuepress-plugin-typedoc",
      {
        mode: "file",
        inputFiles: ["src/"],
        out: "ts-api",
        readme: "none",
        categoryOrder: ["Public", "*", "Custom", "Other"],
        // toc: [
        //   "Classes",
        //   "Interfaces"
        // ],
        includeDeclarations: true,
        excludeExternals: true,
        excludeNotExported: true,
        excludePrivate: true,
        excludeProtected: true,
        stripInternal: true,
        sidebar: {
          fullNames: false,
          parentCategory: "none",
        },
        plugin: ["typedoc-plugin-no-inherit"],
      },
    ],
  ],
});
