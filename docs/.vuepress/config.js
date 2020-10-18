const { writeFileSync, copyFileSync } = require("fs");
const { resolve } = require("path");
const { config } = require("vuepress-theme-hope");
const { name, version, description, repository } = require("../../package.json");

const hostname = "https://node-hypixel.zikeji.com";
const repo = /^git@github.com:(.*).git$/.exec(repository.url)[1];

const oembed = {
  version: "1.0",
  type: "photo",
  url: `${hostname}/social.png`,
  width: 1280,
  height: 640,
  thumbnail_url: `${hostname}/apple-touch-icon.png`,
  thumbnail_width: 180,
  thumbnail_height: 180,
  provider_name: "GitHub",
  provider_url: `https://github.com/${repo}`,
  title: `${name} - v${version}`,
  description: description,
  author_name: "Zikeji",
  author_url: `https://github.com/${repo.split('/')[0]}`
};

writeFileSync(resolve(__dirname, "public", "oembed.json"), JSON.stringify(oembed, null, 2));
copyFileSync(resolve(__dirname, "../", "../", "openapi.yaml"), resolve(__dirname, "public", "openapi.yaml"));

module.exports = config({
  title: name,
  description: description,
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
    ['link', { rel: "alternate", type: "application/json+oembed", href: `${hostname}/oembed.json` }],
    ['meta', { name: "msapplication-TileColor", content: "#9f00a7" }],
    ['meta', { name: "theme-color", content: "#9941d3" }],
    ['meta', { name: "twitter:card", content: "summary_large_image" }],
    ['meta', { name: "twitter:title", content: oembed.title }],
    ['meta', { name: "twitter:description", content: oembed.description }],
    ['meta', { name: "twitter:image", content: `${hostname}/social.png` }],
    ['meta', { name: "og:title", content: oembed.title }],
    ['meta', { name: "og:description", content: oembed.description }],
    ['meta', { name: "og:image", content: `${hostname}/social.png` }],
    ['meta', { name: "og:image:secure_url", content: `${hostname}/social.png` }],
    ['meta', { name: "og:image:type", content: "image/png" }],
    ['meta', { name: "og:image:width", content: 1280 }],
    ['meta', { name: "og:image:height", content: 640 }],
  ],
  themeConfig: {
    hostname,
    blog: false,
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/", icon: "home" },
      { text: "Guide", link: "/guide/", icon: "guide" },
      { text: "API", link: "/api/", icon: "api" },
      { text: "Typescript API", link: "/ts-api/", icon: "typescript" },
      {
        text: "Info",
        icon: "info",
        items: [

          { text: "NPM Package", link: `https://www.npmjs.com/package/${name}`, icon: "npm" },
          { text: "GitHub Repo", link: `https://github.com/${repo}`, icon: "github" },
          { text: "Changelog", link: `https://github.com/${repo}/blob/main/CHANGELOG.md`, icon: "changelog" },
        ]
      },
    ],
    sidebar: "auto",
    pageInfo: ["Category", "Tag"],
    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2020-present Zikeji",
    },
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