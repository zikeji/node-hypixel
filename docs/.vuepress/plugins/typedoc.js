const { join, resolve } = require("path");
const { Application } = require("typedoc");
const { FrontMatterComponent } = require("typedoc-plugin-markdown/dist/components/front-matter.component");

const app = new Application();

let rendered = false;
module.exports = function (_, { sourceDir }) {
  const outFolder = "ts-api";
  const typedocOptions = {
    mode: "file",
    readme: "none",
    categoryOrder: ["Public", "*", "Custom", "Other"],
    toc: [
      "Classes",
      "Interfaces"
    ],
    excludeExternals: true,
    excludeNotExported: true,
    excludePrivate: true,
    excludeProtected: true,
    stripInternal: true,
    plugin: ["typedoc-plugin-no-inherit", "typedoc-plugin-markdown"],
    theme: resolve(__dirname, "..", "..", "..", "node_modules", "vuepress-plugin-typedoc", "dist", "theme")
  };

  app.bootstrap(typedocOptions);

  app.renderer.addComponent(
    'frontmatter',
    new FrontMatterComponent(app.renderer),
  );

  const project = app.convert(app.expandInputFiles(["src/"]));

  if (!rendered && project) {
    app.generateDocs(project, join(sourceDir, outFolder));
  }

  rendered = true;

  /** @type {import("@mr-hope/vuepress-types/types/plugin").PluginOptionAPI} */
  const plugin = {
    name: "typedoc-plugin",
    enhanceAppFiles: () =>
      ({
        name: "typedoc-sidebar",
        content: `export default ({ siteData, options }) => {
          siteData.themeConfig.sidebar = Object.assign({}, siteData.themeConfig.sidebar,${JSON.stringify({
          [`/${outFolder}/`]: app.renderer.theme.getNavigation(project).children.map((navItem) => {
            if (navItem.url && navItem.children && navItem.children.length === 0) {
              const urlKey = navItem.url.replace('.md', '');
              return [
                urlKey === "README" ? `/${outFolder}/` : "globals",
                navItem.title,
              ];
            }
            return {
              title: navItem.title,
              children: navItem.children.map((innerNavItem) => {
                return [
                  innerNavItem.url.replace(".md", ""),
                  innerNavItem.title.split(".").slice(-1).join()
                ];
              }),
            };
          })
        })});
        }`
      })
  }
  return plugin;
}