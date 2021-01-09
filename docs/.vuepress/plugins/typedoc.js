const fs = require("fs");
const { join, resolve } = require("path");
const { promisify } = require("util");
const { Application, TSConfigReader, TypeDocReader } = require("typedoc");
const { FrontMatterComponent } = require("typedoc-plugin-markdown/dist/components/front-matter");

const readdir = promisify(fs.readdir);
const statFile = promisify(fs.stat);

const readdirRecursive = async (path, base) => {
  const files = await readdir(path);
  let outFiles = [];
  for (const file of files) {
    const stat = await statFile(join(path, file));
    if (stat.isDirectory()) {
      outFiles = [...outFiles, ...(await readdirRecursive(join(path, file), `${base}/${file}`))];
    } else {
      if (file.endsWith(".md")) {
        outFiles.push({
          relative: `${base}/${file}`,
          filePath: join(path, file)
        });
      }
    }
  }
  return outFiles;
}

const app = new Application();

module.exports = function(_, { sourceDir }) {
  const outFolder = "ts-api";
  const typedocOptions = {
    entryPoints: resolve(__dirname, "..", "..", "..", "src", "index.ts"),
    tsconfig: resolve(__dirname, "..", "..", "..", "tsconfig.js"),
    readme: "none",
    categoryOrder: ["Public", "*", "Custom", "Other"],
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    hideInPageTOC: true,
    hideBreadcrumbs: true,
    plugin: ["typedoc-plugin-markdown"]
  };

  app.options.addReader(new TypeDocReader());
  app.options.addReader(new TSConfigReader());

  app.bootstrap(typedocOptions);

  app.renderer.addComponent(
    'frontmatter',
    new FrontMatterComponent(app.renderer),
  );

  const project = app.convert();

  if (!project) {
    return;
  }

  /** @type {import("@mr-hope/vuepress-types/types/plugin").PluginOptionAPI} */
  const plugin = {
    name: "typedoc-plugin",
    additionalPages: async () => {
      await app.generateDocs(project, join(sourceDir, outFolder));
      const files = await readdirRecursive(join(sourceDir, outFolder), outFolder);
      return files;
    },
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
                  innerNavItem.url.endsWith("index.md") ? `${innerNavItem.url.split("/").slice(0, -1).join("/")}/` : innerNavItem.url.replace(".md", ""),
                  innerNavItem.title
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