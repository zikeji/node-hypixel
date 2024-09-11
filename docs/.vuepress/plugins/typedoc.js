const fs = require("fs");
const { join, resolve } = require("path");
const { promisify } = require("util");
const { Application, TSConfigReader, TypeDocReader, ProjectReflection } = require("typedoc");
const { readFile } = require("fs/promises");

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

module.exports = function (_, { sourceDir }) {
  const outFolder = "ts-api";

  /** @type {import('typedoc').TypeDocOptions} */
  const typedocOptions = {
    entryPoints: resolve(__dirname, "..", "..", "..", "src", "index.ts"),
    tsconfig: resolve(__dirname, "..", "..", "..", "tsconfig.json"),
    readme: "none",
    categoryOrder: ["Public", "API", "*", "Custom", "Other"],
    exclude: [resolve(__dirname, "..", "..", "..", "node_modules", "prismarine-nbt")],
    excludeExternals: true,
    excludePrivate: true,
    excludeProtected: true,
    disableSources: true,
    hideBreadcrumbs: true,
    out: join(sourceDir, outFolder),
    plugin: ["typedoc-plugin-markdown", "typedoc-plugin-frontmatter", "typedoc-vitepress-theme"]
  };

  /** @type {Application} */
  let app;
  /** @type {ProjectReflection} */
  let project;

  /** @type {{text: string, items: {text: string; link: string;}[]}[]} */
  let navItems;

  /** @type {import("@mr-hope/vuepress-types/types/plugin").PluginOptionAPI} */
  const plugin = {
    name: "typedoc-plugin",
    additionalPages: async () => {
      app = await Application.bootstrapWithPlugins(typedocOptions, [new TypeDocReader(), new TSConfigReader()]);

      project = await app.convert();

      if (!project) {
        return [];
      }

      await app.generateDocs(project, join(sourceDir, outFolder));
      navItems = JSON.parse(await readFile(join(sourceDir, outFolder, 'typedoc-sidebar.json'), 'utf-8'));
      const files = await readdirRecursive(join(sourceDir, outFolder), outFolder);
      return files;
    },
    enhanceAppFiles: () =>
      ({
        name: "typedoc-sidebar",
        content: `export default ({ siteData, options }) => {
          siteData.themeConfig.sidebar = Object.assign({}, siteData.themeConfig.sidebar,${JSON.stringify({
            [`/${outFolder}/`]: navItems.map((navItem) => {
            return {
              title: navItem.text,
              children: navItem.items.map((innerNavItem) => {
                return [
                  innerNavItem.link.replace('/docs/', '/').replace('.md', ''),
                  innerNavItem.text
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