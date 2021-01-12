const { writeFileSync } = require("fs");
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
  author_url: `https://github.com/${repo.split("/")[0]}`
};

writeFileSync(resolve(__dirname, "public", "oembed.json"), JSON.stringify(oembed, null, 2));

module.exports = config({
  title: name,
  description: description,
  cache: process.env.NODE_ENV === "production",
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    ["link", { rel: "alternate", type: "application/json+oembed", href: `${hostname}/oembed.json` }],
    ["meta", { name: "msapplication-TileColor", content: "#9f00a7" }],
    ["meta", { name: "theme-color", content: "#9941d3" }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:title", content: oembed.title }],
    ["meta", { name: "twitter:description", content: oembed.description }],
    ["meta", { name: "twitter:image", content: `${hostname}/social.png` }],
    ["meta", { name: "og:title", content: oembed.title }],
    ["meta", { name: "og:description", content: oembed.description }],
    ["meta", { name: "og:image", content: `${hostname}/social.png` }],
    ["meta", { name: "og:image:secure_url", content: `${hostname}/social.png` }],
    ["meta", { name: "og:image:type", content: "image/png" }],
    ["meta", { name: "og:image:width", content: 1280 }],
    ["meta", { name: "og:image:height", content: 640 }],
  ],
  themeConfig: {
    algolia: {
      apiKey: process.env.NODE_ENV === 'production' ? 'e69630b617d38ea18d4c4833d93981b5' : '25626fae796133dc1e734c6bcaaeac3c',
      indexName: process.env.NODE_ENV === 'production' ? 'node-hypixel' : 'docsearch'
    },
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
          { text: "Changelog", link: "/changelog/", icon: "changelog" },
          { text: "Discord Server", link: "https://discord.gg/QkcGHwG", icon: "discord" },
          { text: "NPM Package", link: `https://www.npmjs.com/package/${name}`, icon: "npm" },
          { text: "GitHub Repo", link: `https://github.com/${repo}`, icon: "github" },
        ]
      },
    ],
    pageInfo: ["Author", "Category", "Tag"],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          icon: "guide",
          children: [
            ""
          ]
        },
        {
          title: "Helpers",
          collapsable: false,
          icon: "helper",
          children: [
            "helpers/player-ranks",
            "helpers/network-level",
            "helpers/guild-level",
            "helpers/bedwars-level-info",
            "helpers/minecraft-item-data",
            "helpers/skyblock-profile-collections",
            "helpers/skyblock-profile-skills"
          ]
        },
        {
          title: "Advanced",
          collapsable: false,
          icon: "advanced",
          children: [
            "advanced/cache",
            "advanced/metadata"
          ]
        }
      ]
    },
    footer: {
      display: true,
      content: `<div class="addthis_inline_share_toolbox"></div>`,
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
    addThis: process.env.NODE_ENV === "production" ? "ra-5f8d724d4c77d215" : null,
  },
  extraWatchFiles: [
    "../../README.md",
    "../../openapi.yaml"
  ],
  configureWebpack: {
    module: {
      rules: [
        { test: /\.ya?ml$/, use: "yaml-loader", type: "json" },
        { test: /\.web[pm]$/, use: "file-loader" }
      ]
    }
  },
  plugins: [
    require("./plugins/pages"),
    require("./plugins/typedoc"),
    ["@mr-hope/vuepress-plugin-last-update", {
      transformer: (timestamp) => {
        return new Date(timestamp).toLocaleString('en-US', { year: "numeric", month: "long", weekday: "long", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: 'America/New_York' })
          .match(/^(\w+,\s\w+\s)(\d{1,2})(,\s\d{4}),(\s\d{1,2}:\d{1,2}\s[AP]M)/)
          .map((m, i) => {
            if (i === 2) {
              let day = parseInt(m);
              if (day === 1 || (day > 20 && day % 10 === 1)) return `${day}st`;
              if (day === 2 || (day > 20 && day % 10 === 2)) return `${day}nd`;
              if (day === 3 || (day > 20 && day % 10 === 3)) return `${day}rd`;
              return `${day}th`;
            }
            if (i === 4) {
              return ` at${m} EST`;
            }
            return m;
          })
          .slice(1)
          .join("");
      }
    }]
  ],
});
