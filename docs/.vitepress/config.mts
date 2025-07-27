import { defineConfig } from 'vitepress'
import { groupIconMdPlugin, groupIconVitePlugin } from 'vitepress-plugin-group-icons'

export default defineConfig({
  title: 'Kotlinic',
  description: 'A lightweight TypeScript utility library inspired by Kotlin.',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/kotlin-logo.svg' }]],
  themeConfig: {
    outline: {
      level: [2, 3],
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'API', link: '/api/core/kotlin-stdlib/kotlin/check' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'API',
        items: [
          {
            text: 'kotlin-stdlib',
            items: [
              {
                text: 'kotlin',
                items: [
                  { text: 'check()', link: '/api/core/kotlin-stdlib/kotlin/check' },
                  { text: 'checkNotNull()', link: '/api/core/kotlin-stdlib/kotlin/check-not-null' },
                  { text: 'emptyArray()', link: '/api/core/kotlin-stdlib/kotlin/empty-array' },
                  { text: 'error()', link: '/api/core/kotlin-stdlib/kotlin/error' },
                  { text: 'require()', link: '/api/core/kotlin-stdlib/kotlin/require' },
                  { text: 'requireNotNull()', link: '/api/core/kotlin-stdlib/kotlin/require-not-null' },
                  { text: 'Result', link: '/api/core/kotlin-stdlib/kotlin/-result' },
                  { text: 'runCatching()', link: '/api/core/kotlin-stdlib/kotlin/run-catching' },
                  { text: 'takeIf()', link: '/api/core/kotlin-stdlib/kotlin/take-if' },
                  { text: 'takeUnless()', link: '/api/core/kotlin-stdlib/kotlin/take-unless' },
                ],
                collapsed: true,
              },
              {
                text: 'kotlin.collections',
                items: [
                  { text: 'mapNotNull()', link: '/api/core/kotlin-stdlib/kotlin.collections/map-not-null' },
                  { text: 'mapNotNullTo()', link: '/api/core/kotlin-stdlib/kotlin.collections/map-not-null-to' },
                  { text: 'maxBy()', link: '/api/core/kotlin-stdlib/kotlin.collections/max-by' },
                  { text: 'single()', link: '/api/core/kotlin-stdlib/kotlin.collections/single' },
                  { text: 'singleOrNull()', link: '/api/core/kotlin-stdlib/kotlin.collections/single-or-null' },
                ],
                collapsed: true,
              },
            ],
          },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/injoonH/kotlinic' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/kotlinic' },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright 2025. Injoon Hwang all rights reserved.',
    },
    search: {
      provider: 'local',
    },
  },
  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },
  vite: {
    plugins: [groupIconVitePlugin()],
  },
  sitemap: {
    hostname: 'https://kotlinic.com',
  },
})
