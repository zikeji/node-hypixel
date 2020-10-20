const { resolve } = require("path");

/**
 * @type {import('@mr-hope/vuepress-types/types/plugin').PluginOptionAPI}
 */
module.exports = {
  name: "pages-plugin",
  additionalPages: [
    {
      path: "/",
      filePath: resolve(__dirname, "../", "../", "../", "README.md"),
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
      filePath: resolve(__dirname, "../", "../", "../", "CHANGELOG.md"),
      frontmatter: {
        sidebar: "auto",
        // sidebarDepth: 1
      }
    },
  ],
  extendPageData($page) {
    switch ($page.path) {
      case "/changelog/":
        $page.headers = $page.headers.filter(h => h.level <= 1 || h.title.match(/^\d+\.\d+\.\d+$/));
        break;
    }
  }
}