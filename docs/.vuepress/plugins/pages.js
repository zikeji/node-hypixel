const { readFileSync } = require("fs");
const { resolve } = require("path");

/** @type {import('@mr-hope/vuepress-types/types/plugin').PluginOptionAPI} */
module.exports = {
  name: "pages-plugin",
  additionalPages: [
    {
      path: "/",
      content: readFileSync(resolve(__dirname, "..", "..", "..", "README.md"), "utf-8"),
      frontmatter: {
        home: true,
        sidebar: "auto",
        heroText: "@zikeji/hypixel",
        heroImage: "/logo.svg",
        tagline: "NodeJS API wrapper for Hypixel's Public API",
        action: [
          {
            text: "Get Started →",
            link: "/guide/"
          },
        ],
        features: [
          {
            title: "Rate Limiting Queue",
            details: "Built in async rate limiting queue prevents prevents requests from failing by queueing and waiting for the queue to clear."
          }, {
            title: "OpenAPI 3.0 Definition",
            details: "I've painstakingly recreated Hypixel's API methods and responses in the OpenAPI 3.0 specification.",
            link: "/api/"
          },
          {
            title: "Typescript Support",
            details: "Full Typescript definitions for explored API methods provides intellisense in popular IDEs.",
            link: "/ts-api/classes/client/#constructor"
          },
        ],
      },
    },
    {
      path: "/changelog/",
      content: [
        "---",
        "sidebar: \"auto\"",
        "sidebarDepth: 1",
        "---",
        ...(
          readFileSync(resolve(__dirname, "..", "..", "..", "CHANGELOG.md"), "utf-8").split("\n").map((line) => {
            if (/#{3}\s\[\d+\.\d+\.\d+\]/.test(line)) {
              line = line.slice(1);
            }
            const headerMatches = /(#{3,})\s(.*)/.exec(line);
            if (headerMatches) {
              const h = `h${headerMatches[1].length}`;
              const title = headerMatches[2];
              line = `<${h}>${title}</${h}>`;
            }
            return line;
          })
        )
      ].join("\n"),
      frontmatter: {
        sidebar: "auto"
      }
    },
    {
      permalink: "/LICENSE.html",
      content: readFileSync(resolve(__dirname, "..", "..", "..", "LICENSE"), "utf-8"),
      frontmatter: {
        sidebar: false
      }
    },
    {
      permalink: "/LICENSE-HYPIXEL-PHP.html",
      content: readFileSync(resolve(__dirname, "..", "..", "..", "LICENSE-HYPIXEL-PHP.md"), "utf-8"),
      frontmatter: {
        sidebar: false
      }
    },
  ],
};