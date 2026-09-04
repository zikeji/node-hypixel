import { defineConfig } from 'vitepress'
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const pkg = JSON.parse(readFileSync(resolve(__dirname, '../../package.json'), 'utf-8'))

// Load TypeDoc sidebar
let typedocSidebar = []
try {
  typedocSidebar = JSON.parse(readFileSync(resolve(__dirname, '../api/typedoc-sidebar.json'), 'utf-8'))
} catch (e) {
  console.warn('TypeDoc sidebar not found.')
}

export default defineConfig({
  title: pkg.name,
  description: pkg.description,
  base: '/',
  ignoreDeadLinks: true,  // Temporary: old VuePress links will be updated
  
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#9941d3' }],
    ['script', { src: 'https://ryb.zynados.com/api/script.js', 'data-site-id': '3e462c521411', defer: '' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'API Reference', link: '/api/' },
      {
        text: 'Links',
        items: [
          { text: 'NPM Package', link: `https://www.npmjs.com/package/${pkg.name}` },
          { text: 'GitHub', link: 'https://github.com/zikeji/node-hypixel' },
          { text: 'Changelog', link: 'https://github.com/zikeji/node-hypixel/blob/main/CHANGELOG.md' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/' }
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'Cache', link: '/guide/advanced/cache' },
            { text: 'Metadata', link: '/guide/advanced/metadata' }
          ]
        },
        {
          text: 'Helpers',
          items: [
            { text: 'Player Ranks', link: '/guide/helpers/player-ranks' },
            { text: 'Network Level', link: '/guide/helpers/network-level' },
            { text: 'Guild Level', link: '/guide/helpers/guild-level' },
            { text: 'Bedwars Level Info', link: '/guide/helpers/bedwars-level-info' },
            { text: 'Skywars', link: '/guide/helpers/skywars' },
            { text: 'Minecraft Item Data', link: '/guide/helpers/minecraft-item-data' },
            { text: 'Skyblock Profile Collections', link: '/guide/helpers/skyblock-profile-collections' },
            { text: 'Skyblock Profile Skills', link: '/guide/helpers/skyblock-profile-skills' }
          ]
        }
      ],
      '/api/': typedocSidebar
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zikeji/node-hypixel' },
      { icon: 'npm', link: `https://www.npmjs.com/package/${pkg.name}` }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-present Zikeji'
    },

    search: {
      provider: 'local'
    }
  }
})
