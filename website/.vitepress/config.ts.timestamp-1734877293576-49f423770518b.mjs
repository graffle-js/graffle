// .vitepress/config.ts
import { createFileSystemTypesCache } from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/@shikijs+vitepress-twoslash@1.24.4_typescript@5.7.2/node_modules/@shikijs/vitepress-twoslash/dist/cache-fs.mjs'
import { transformerTwoslash } from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/@shikijs+vitepress-twoslash@1.24.4_typescript@5.7.2/node_modules/@shikijs/vitepress-twoslash/dist/index.mjs'
import {
  ModuleKind,
  ModuleResolutionKind,
} from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/typescript@5.7.2/node_modules/typescript/lib/typescript.js'
import { tabsMarkdownPlugin } from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/vitepress-plugin-tabs@0.5.0_vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_sear_sjxfchr23nu2ftbpbwru3ytjyy/node_modules/vitepress-plugin-tabs/dist/index.js'
import { generateSidebar } from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/vitepress-sidebar@1.30.2/node_modules/vitepress-sidebar/dist/index.js'
import { defineConfig } from 'file:///Users/jasonkuhrt/projects/jasonkuhrt/graffle/website/node_modules/.pnpm/vitepress@1.5.0_@algolia+client-search@5.18.0_postcss@8.4.49_search-insights@2.17.3_typescript@5.7.2/node_modules/vitepress/dist/node/index.js'
var prefixPattern = /\d+_/g
var sidebarMultiVisitItems = (sidebarMulti, visitor) => {
  Object.values(sidebarMulti).forEach((sidebar) => sidebar.items.forEach((_) => sidebarItemVisitItems(_, visitor)))
  return sidebarMulti
}
var sidebarItemVisitItems = (sidebarItem, visitor) => {
  visitor(sidebarItem)
  sidebarItem.items?.forEach((_) => sidebarItemVisitItems(_, visitor))
}
var fixLinks = (sidebarMulti) => {
  return sidebarMultiVisitItems(sidebarMulti, (sidebarItem) => {
    sidebarItem.link = sidebarItem.link?.replaceAll(prefixPattern, '')
  })
}
var sidebars = fixLinks(generateSidebar([
  {
    scanStartPath: 'content/guides',
    resolvePath: '/guides/',
    prefixSeparator: '_',
    removePrefixAfterOrdering: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    hyphenToSpace: true,
    capitalizeEachWords: true,
    keepMarkdownSyntaxFromTitle: true,
  },
  {
    hyphenToSpace: true,
    capitalizeEachWords: true,
    scanStartPath: 'content/examples',
    resolvePath: '/examples/',
    prefixSeparator: '_',
    removePrefixAfterOrdering: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    keepMarkdownSyntaxFromTitle: true,
  },
  {
    hyphenToSpace: true,
    capitalizeEachWords: true,
    scanStartPath: 'content/extensions',
    resolvePath: '/extensions/',
    prefixSeparator: '_',
    removePrefixAfterOrdering: true,
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
    keepMarkdownSyntaxFromTitle: true,
  },
]))
sidebars['/examples/'].items.find((_) => _.text === 'About').items.unshift({ text: 'Introduction', link: '/' })
sidebars['/guides/'].items.unshift({ text: 'Introduction', link: '/' })
var rootItems = sidebars['/guides/'].items.filter((_) => !_.items)
sidebars['/guides/'].items = sidebars['/guides/'].items.filter((_) => _.items && _.items.length > 0)
sidebars['/guides/'].items.unshift(...rootItems)
var config_default = defineConfig({
  rewrites: (path) => {
    const newPath = path.replaceAll(prefixPattern, '')
    return newPath
  },
  title: 'Graffle',
  description: 'Minimalist Progressively Type Safe GraphQL Client For JavaScript.',
  cleanUrls: true,
  // TODO, remove before going live.
  ignoreDeadLinks: true,
  sitemap: {
    hostname: 'https://graffle.js.org',
  },
  head: [
    // <script defer data-domain="graffle.js.org" src="https://plausible.io/js/script.js"></script>
    ['script', {
      defer: 'true',
      'data-domain': 'graffle.js.org',
      src: 'https://plausible.io/js/script.js',
    }],
  ],
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
    codeTransformers: process.env.disable_twoslash ? [] : [
      transformerTwoslash({
        typesCache: createFileSystemTypesCache({
          dir: './.vitepress/cache/types',
        }),
        twoslashOptions: {
          handbookOptions: {
            // noErrors: true,
            // noErrorValidation: process.env.NODE_ENV !== 'development',
          },
          compilerOptions: {
            moduleResolution: ModuleResolutionKind.Bundler,
            module: ModuleKind.ESNext,
            // noErrorTruncation: true,
          },
          shouldGetHoverInfo: (x, b, c) => {
            const ignoreIdentifiers = ['console', 'log']
            return !ignoreIdentifiers.includes(x)
          },
        },
      }),
    ],
  },
  srcDir: './content',
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright \xA9 2024-present Jason Kuhrt',
    },
    // @see https://github.com/vuejs/vitepress/issues/4141
    logo: {
      light: '/_assets/logo-dark.svg',
      dark: '/_assets/logo-light.svg',
    },
    search: {
      provider: 'local',
    },
    docFooter: {
      next: false,
      prev: false,
    },
    aside: 'left',
    nav: [
      { text: 'Guides', link: '/guides' },
      { text: 'Examples', link: '/examples' },
      { text: 'Extensions', link: '/extensions' },
    ],
    sidebar: {
      ...sidebars,
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/graffle-js/graffle' },
    ],
  },
})
export { config_default as default }
// # sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvamFzb25rdWhydC9wcm9qZWN0cy9qYXNvbmt1aHJ0L2dyYWZmbGUvd2Vic2l0ZS8udml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvamFzb25rdWhydC9wcm9qZWN0cy9qYXNvbmt1aHJ0L2dyYWZmbGUvd2Vic2l0ZS8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvamFzb25rdWhydC9wcm9qZWN0cy9qYXNvbmt1aHJ0L2dyYWZmbGUvd2Vic2l0ZS8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IHRyYW5zZm9ybWVyVHdvc2xhc2ggfSBmcm9tICdAc2hpa2lqcy92aXRlcHJlc3MtdHdvc2xhc2gnXG5pbXBvcnQgeyBjcmVhdGVGaWxlU3lzdGVtVHlwZXNDYWNoZSB9IGZyb20gJ0BzaGlraWpzL3ZpdGVwcmVzcy10d29zbGFzaC9jYWNoZS1mcydcbmltcG9ydCB7IE1vZHVsZUtpbmQsIE1vZHVsZVJlc29sdXRpb25LaW5kIH0gZnJvbSAndHlwZXNjcmlwdCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVwcmVzcydcbmltcG9ydCB7IHRhYnNNYXJrZG93blBsdWdpbiB9IGZyb20gJ3ZpdGVwcmVzcy1wbHVnaW4tdGFicydcbmltcG9ydCB7IGdlbmVyYXRlU2lkZWJhciB9IGZyb20gJ3ZpdGVwcmVzcy1zaWRlYmFyJ1xuaW1wb3J0IHsgU2lkZWJhckl0ZW0sIFNpZGViYXJNdWx0aSB9IGZyb20gJ3ZpdGVwcmVzcy1zaWRlYmFyL3R5cGVzJ1xuXG5jb25zdCBwcmVmaXhQYXR0ZXJuID0gL1xcZCtfL2dcblxuY29uc3Qgc2lkZWJhck11bHRpVmlzaXRJdGVtcyA9IChzaWRlYmFyTXVsdGk6IFNpZGViYXJNdWx0aSwgdmlzaXRvcjogKHNpZGViYXJJdGVtOiBTaWRlYmFySXRlbSkgPT4gdm9pZCkgPT4ge1xuICBPYmplY3QudmFsdWVzKHNpZGViYXJNdWx0aSkuZm9yRWFjaChzaWRlYmFyID0+IHNpZGViYXIuaXRlbXMuZm9yRWFjaChfID0+IHNpZGViYXJJdGVtVmlzaXRJdGVtcyhfLCB2aXNpdG9yKSkpXG4gIHJldHVybiBzaWRlYmFyTXVsdGlcbn1cblxuY29uc3Qgc2lkZWJhckl0ZW1WaXNpdEl0ZW1zID0gKHNpZGViYXJJdGVtOiBTaWRlYmFySXRlbSwgdmlzaXRvcjogKHNpZGViYXJJdGVtOiBTaWRlYmFySXRlbSkgPT4gdm9pZCkgPT4ge1xuICB2aXNpdG9yKHNpZGViYXJJdGVtKVxuICBzaWRlYmFySXRlbS5pdGVtcz8uZm9yRWFjaChfID0+IHNpZGViYXJJdGVtVmlzaXRJdGVtcyhfLCB2aXNpdG9yKSlcbn1cblxuY29uc3QgZml4TGlua3MgPSAoc2lkZWJhck11bHRpOiBTaWRlYmFyTXVsdGkpID0+IHtcbiAgcmV0dXJuIHNpZGViYXJNdWx0aVZpc2l0SXRlbXMoc2lkZWJhck11bHRpLCAoc2lkZWJhckl0ZW0pID0+IHtcbiAgICBzaWRlYmFySXRlbS5saW5rID0gc2lkZWJhckl0ZW0ubGluaz8ucmVwbGFjZUFsbChwcmVmaXhQYXR0ZXJuLCAnJylcbiAgfSlcbn1cblxuLyoqXG4gKiBAc2VlIGh0dHBzOi8vdml0ZXByZXNzLXNpZGViYXIuY2RnZXQuY29tL2d1aWRlL2FwaVxuICovXG5jb25zdCBzaWRlYmFycyA9IGZpeExpbmtzKGdlbmVyYXRlU2lkZWJhcihbXG4gIHtcbiAgICBzY2FuU3RhcnRQYXRoOiAnY29udGVudC9ndWlkZXMnLFxuICAgIHJlc29sdmVQYXRoOiAnL2d1aWRlcy8nLFxuICAgIHByZWZpeFNlcGFyYXRvcjogJ18nLFxuICAgIHJlbW92ZVByZWZpeEFmdGVyT3JkZXJpbmc6IHRydWUsXG4gICAgdXNlVGl0bGVGcm9tRnJvbnRtYXR0ZXI6IHRydWUsXG4gICAgdXNlVGl0bGVGcm9tRmlsZUhlYWRpbmc6IHRydWUsXG4gICAgaHlwaGVuVG9TcGFjZTogdHJ1ZSxcbiAgICBjYXBpdGFsaXplRWFjaFdvcmRzOiB0cnVlLFxuICAgIGtlZXBNYXJrZG93blN5bnRheEZyb21UaXRsZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGh5cGhlblRvU3BhY2U6IHRydWUsXG4gICAgY2FwaXRhbGl6ZUVhY2hXb3JkczogdHJ1ZSxcbiAgICBzY2FuU3RhcnRQYXRoOiAnY29udGVudC9leGFtcGxlcycsXG4gICAgcmVzb2x2ZVBhdGg6ICcvZXhhbXBsZXMvJyxcbiAgICBwcmVmaXhTZXBhcmF0b3I6ICdfJyxcbiAgICByZW1vdmVQcmVmaXhBZnRlck9yZGVyaW5nOiB0cnVlLFxuICAgIHVzZVRpdGxlRnJvbUZyb250bWF0dGVyOiB0cnVlLFxuICAgIHVzZVRpdGxlRnJvbUZpbGVIZWFkaW5nOiB0cnVlLFxuICAgIGtlZXBNYXJrZG93blN5bnRheEZyb21UaXRsZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGh5cGhlblRvU3BhY2U6IHRydWUsXG4gICAgY2FwaXRhbGl6ZUVhY2hXb3JkczogdHJ1ZSxcbiAgICBzY2FuU3RhcnRQYXRoOiAnY29udGVudC9leHRlbnNpb25zJyxcbiAgICByZXNvbHZlUGF0aDogJy9leHRlbnNpb25zLycsXG4gICAgcHJlZml4U2VwYXJhdG9yOiAnXycsXG4gICAgcmVtb3ZlUHJlZml4QWZ0ZXJPcmRlcmluZzogdHJ1ZSxcbiAgICB1c2VUaXRsZUZyb21Gcm9udG1hdHRlcjogdHJ1ZSxcbiAgICB1c2VUaXRsZUZyb21GaWxlSGVhZGluZzogdHJ1ZSxcbiAgICBrZWVwTWFya2Rvd25TeW50YXhGcm9tVGl0bGU6IHRydWUsXG4gIH0sXG5dKSBhcyBTaWRlYmFyTXVsdGkpXG5cbnNpZGViYXJzWycvZXhhbXBsZXMvJ10uaXRlbXMuZmluZChfID0+IF8udGV4dCA9PT0gJ0Fib3V0JykhLml0ZW1zIS51bnNoaWZ0KHsgdGV4dDogJ0ludHJvZHVjdGlvbicsIGxpbms6ICcvJyB9KVxuc2lkZWJhcnNbJy9ndWlkZXMvJ10uaXRlbXMudW5zaGlmdCh7IHRleHQ6ICdJbnRyb2R1Y3Rpb24nLCBsaW5rOiAnLycgfSlcblxuY29uc3Qgcm9vdEl0ZW1zID0gc2lkZWJhcnNbJy9ndWlkZXMvJ10uaXRlbXMuZmlsdGVyKF8gPT4gIV8uaXRlbXMpXG5cbnNpZGViYXJzWycvZ3VpZGVzLyddLml0ZW1zID0gc2lkZWJhcnNbJy9ndWlkZXMvJ10uaXRlbXMuZmlsdGVyKF8gPT4gXy5pdGVtcyAmJiBfLml0ZW1zLmxlbmd0aCA+IDApXG5zaWRlYmFyc1snL2d1aWRlcy8nXS5pdGVtcy51bnNoaWZ0KC4uLnJvb3RJdGVtcylcblxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmV3cml0ZXM6IChwYXRoKSA9PiB7XG4gICAgY29uc3QgbmV3UGF0aCA9IHBhdGgucmVwbGFjZUFsbChwcmVmaXhQYXR0ZXJuLCAnJylcbiAgICByZXR1cm4gbmV3UGF0aFxuICB9LFxuICB0aXRsZTogJ0dyYWZmbGUnLFxuICBkZXNjcmlwdGlvbjogJ01pbmltYWxpc3QgUHJvZ3Jlc3NpdmVseSBUeXBlIFNhZmUgR3JhcGhRTCBDbGllbnQgRm9yIEphdmFTY3JpcHQuJyxcbiAgY2xlYW5VcmxzOiB0cnVlLFxuICAvLyBUT0RPLCByZW1vdmUgYmVmb3JlIGdvaW5nIGxpdmUuXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcbiAgc2l0ZW1hcDoge1xuICAgIGhvc3RuYW1lOiAnaHR0cHM6Ly9ncmFmZmxlLmpzLm9yZycsXG4gIH0sXG4gIGhlYWQ6IFtcbiAgICAvLyA8c2NyaXB0IGRlZmVyIGRhdGEtZG9tYWluPVwiZ3JhZmZsZS5qcy5vcmdcIiBzcmM9XCJodHRwczovL3BsYXVzaWJsZS5pby9qcy9zY3JpcHQuanNcIj48L3NjcmlwdD5cbiAgICBbJ3NjcmlwdCcsIHtcbiAgICAgIGRlZmVyOiAndHJ1ZScsXG4gICAgICAnZGF0YS1kb21haW4nOiAnZ3JhZmZsZS5qcy5vcmcnLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9wbGF1c2libGUuaW8vanMvc2NyaXB0LmpzJyxcbiAgICB9XSxcbiAgXSxcbiAgbWFya2Rvd246IHtcbiAgICBjb25maWcobWQpIHtcbiAgICAgIG1kLnVzZSh0YWJzTWFya2Rvd25QbHVnaW4pXG4gICAgfSxcbiAgICBjb2RlVHJhbnNmb3JtZXJzOiBbXG4gICAgICAuLi4ocHJvY2Vzcy5lbnYuZGlzYWJsZV90d29zbGFzaCA/IFtdIDogW1xuICAgICAgICB0cmFuc2Zvcm1lclR3b3NsYXNoKHtcbiAgICAgICAgICB0eXBlc0NhY2hlOiBjcmVhdGVGaWxlU3lzdGVtVHlwZXNDYWNoZSh7XG4gICAgICAgICAgICBkaXI6ICcuLy52aXRlcHJlc3MvY2FjaGUvdHlwZXMnLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIHR3b3NsYXNoT3B0aW9uczoge1xuICAgICAgICAgICAgaGFuZGJvb2tPcHRpb25zOiB7XG4gICAgICAgICAgICAgIC8vIG5vRXJyb3JzOiB0cnVlLFxuICAgICAgICAgICAgICAvLyBub0Vycm9yVmFsaWRhdGlvbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgIG1vZHVsZVJlc29sdXRpb246IE1vZHVsZVJlc29sdXRpb25LaW5kLkJ1bmRsZXIsXG4gICAgICAgICAgICAgIG1vZHVsZTogTW9kdWxlS2luZC5FU05leHQsXG4gICAgICAgICAgICAgIC8vIG5vRXJyb3JUcnVuY2F0aW9uOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3VsZEdldEhvdmVySW5mbzogKHgsIGIsIGMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaWdub3JlSWRlbnRpZmllcnMgPSBbJ2NvbnNvbGUnLCAnbG9nJ11cbiAgICAgICAgICAgICAgcmV0dXJuICFpZ25vcmVJZGVudGlmaWVycy5pbmNsdWRlcyh4KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pIGFzIGFueSxcbiAgICBdLFxuICB9LFxuICBzcmNEaXI6ICcuL2NvbnRlbnQnLFxuICB0aGVtZUNvbmZpZzoge1xuICAgIGZvb3Rlcjoge1xuICAgICAgbWVzc2FnZTogJ1JlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgICAgY29weXJpZ2h0OiAnQ29weXJpZ2h0IFx1MDBBOSAyMDI0LXByZXNlbnQgSmFzb24gS3VocnQnLFxuICAgIH0sXG4gICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdml0ZXByZXNzL2lzc3Vlcy80MTQxXG4gICAgbG9nbzoge1xuICAgICAgbGlnaHQ6ICcvX2Fzc2V0cy9sb2dvLWRhcmsuc3ZnJyxcbiAgICAgIGRhcms6ICcvX2Fzc2V0cy9sb2dvLWxpZ2h0LnN2ZycsXG4gICAgfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxuICAgIH0sXG4gICAgZG9jRm9vdGVyOiB7XG4gICAgICBuZXh0OiBmYWxzZSxcbiAgICAgIHByZXY6IGZhbHNlLFxuICAgIH0sXG4gICAgYXNpZGU6ICdsZWZ0JyxcbiAgICBuYXY6IFtcbiAgICAgIHsgdGV4dDogJ0d1aWRlcycsIGxpbms6ICcvZ3VpZGVzJyB9LFxuICAgICAgeyB0ZXh0OiAnRXhhbXBsZXMnLCBsaW5rOiAnL2V4YW1wbGVzJyB9LFxuICAgICAgeyB0ZXh0OiAnRXh0ZW5zaW9ucycsIGxpbms6ICcvZXh0ZW5zaW9ucycgfSxcbiAgICBdLFxuICAgIHNpZGViYXI6IHtcbiAgICAgIC4uLnNpZGViYXJzLFxuICAgIH0sXG4gICAgc29jaWFsTGlua3M6IFtcbiAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vZ3JhZmZsZS1qcy9ncmFmZmxlJyB9LFxuICAgIF0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VyxTQUFTLDJCQUEyQjtBQUM1WSxTQUFTLGtDQUFrQztBQUMzQyxTQUFTLFlBQVksNEJBQTRCO0FBQ2pELFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMsdUJBQXVCO0FBR2hDLElBQU0sZ0JBQWdCO0FBRXRCLElBQU0seUJBQXlCLENBQUMsY0FBNEIsWUFBZ0Q7QUFDMUcsU0FBTyxPQUFPLFlBQVksRUFBRSxRQUFRLGFBQVcsUUFBUSxNQUFNLFFBQVEsT0FBSyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsQ0FBQztBQUM1RyxTQUFPO0FBQ1Q7QUFFQSxJQUFNLHdCQUF3QixDQUFDLGFBQTBCLFlBQWdEO0FBQ3ZHLFVBQVEsV0FBVztBQUNuQixjQUFZLE9BQU8sUUFBUSxPQUFLLHNCQUFzQixHQUFHLE9BQU8sQ0FBQztBQUNuRTtBQUVBLElBQU0sV0FBVyxDQUFDLGlCQUErQjtBQUMvQyxTQUFPLHVCQUF1QixjQUFjLENBQUMsZ0JBQWdCO0FBQzNELGdCQUFZLE9BQU8sWUFBWSxNQUFNLFdBQVcsZUFBZSxFQUFFO0FBQUEsRUFDbkUsQ0FBQztBQUNIO0FBS0EsSUFBTSxXQUFXLFNBQVMsZ0JBQWdCO0FBQUEsRUFDeEM7QUFBQSxJQUNFLGVBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLGlCQUFpQjtBQUFBLElBQ2pCLDJCQUEyQjtBQUFBLElBQzNCLHlCQUF5QjtBQUFBLElBQ3pCLHlCQUF5QjtBQUFBLElBQ3pCLGVBQWU7QUFBQSxJQUNmLHFCQUFxQjtBQUFBLElBQ3JCLDZCQUE2QjtBQUFBLEVBQy9CO0FBQUEsRUFDQTtBQUFBLElBQ0UsZUFBZTtBQUFBLElBQ2YscUJBQXFCO0FBQUEsSUFDckIsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2IsaUJBQWlCO0FBQUEsSUFDakIsMkJBQTJCO0FBQUEsSUFDM0IseUJBQXlCO0FBQUEsSUFDekIseUJBQXlCO0FBQUEsSUFDekIsNkJBQTZCO0FBQUEsRUFDL0I7QUFBQSxFQUNBO0FBQUEsSUFDRSxlQUFlO0FBQUEsSUFDZixxQkFBcUI7QUFBQSxJQUNyQixlQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixpQkFBaUI7QUFBQSxJQUNqQiwyQkFBMkI7QUFBQSxJQUMzQix5QkFBeUI7QUFBQSxJQUN6Qix5QkFBeUI7QUFBQSxJQUN6Qiw2QkFBNkI7QUFBQSxFQUMvQjtBQUNGLENBQUMsQ0FBaUI7QUFFbEIsU0FBUyxZQUFZLEVBQUUsTUFBTSxLQUFLLE9BQUssRUFBRSxTQUFTLE9BQU8sRUFBRyxNQUFPLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixNQUFNLElBQUksQ0FBQztBQUM5RyxTQUFTLFVBQVUsRUFBRSxNQUFNLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixNQUFNLElBQUksQ0FBQztBQUV0RSxJQUFNLFlBQVksU0FBUyxVQUFVLEVBQUUsTUFBTSxPQUFPLE9BQUssQ0FBQyxFQUFFLEtBQUs7QUFFakUsU0FBUyxVQUFVLEVBQUUsUUFBUSxTQUFTLFVBQVUsRUFBRSxNQUFNLE9BQU8sT0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNqRyxTQUFTLFVBQVUsRUFBRSxNQUFNLFFBQVEsR0FBRyxTQUFTO0FBRy9DLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLFVBQVUsQ0FBQyxTQUFTO0FBQ2xCLFVBQU0sVUFBVSxLQUFLLFdBQVcsZUFBZSxFQUFFO0FBQ2pELFdBQU87QUFBQSxFQUNUO0FBQUEsRUFDQSxPQUFPO0FBQUEsRUFDUCxhQUFhO0FBQUEsRUFDYixXQUFXO0FBQUE7QUFBQSxFQUVYLGlCQUFpQjtBQUFBLEVBQ2pCLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxFQUNaO0FBQUEsRUFDQSxNQUFNO0FBQUE7QUFBQSxJQUVKLENBQUMsVUFBVTtBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsZUFBZTtBQUFBLE1BQ2YsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSLE9BQU8sSUFBSTtBQUNULFNBQUcsSUFBSSxrQkFBa0I7QUFBQSxJQUMzQjtBQUFBLElBQ0Esa0JBQWtCO0FBQUEsTUFDaEIsR0FBSSxRQUFRLElBQUksbUJBQW1CLENBQUMsSUFBSTtBQUFBLFFBQ3RDLG9CQUFvQjtBQUFBLFVBQ2xCLFlBQVksMkJBQTJCO0FBQUEsWUFDckMsS0FBSztBQUFBLFVBQ1AsQ0FBQztBQUFBLFVBQ0QsaUJBQWlCO0FBQUEsWUFDZixpQkFBaUI7QUFBQTtBQUFBO0FBQUEsWUFHakI7QUFBQSxZQUNBLGlCQUFpQjtBQUFBLGNBQ2Ysa0JBQWtCLHFCQUFxQjtBQUFBLGNBQ3ZDLFFBQVEsV0FBVztBQUFBO0FBQUEsWUFFckI7QUFBQSxZQUNBLG9CQUFvQixDQUFDLEdBQUcsR0FBRyxNQUFNO0FBQy9CLG9CQUFNLG9CQUFvQixDQUFDLFdBQVcsS0FBSztBQUMzQyxxQkFBTyxDQUFDLGtCQUFrQixTQUFTLENBQUM7QUFBQSxZQUN0QztBQUFBLFVBQ0Y7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxFQUNSLGFBQWE7QUFBQSxJQUNYLFFBQVE7QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxJQUNiO0FBQUE7QUFBQSxJQUVBLE1BQU07QUFBQSxNQUNKLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLE9BQU87QUFBQSxJQUNQLEtBQUs7QUFBQSxNQUNILEVBQUUsTUFBTSxVQUFVLE1BQU0sVUFBVTtBQUFBLE1BQ2xDLEVBQUUsTUFBTSxZQUFZLE1BQU0sWUFBWTtBQUFBLE1BQ3RDLEVBQUUsTUFBTSxjQUFjLE1BQU0sY0FBYztBQUFBLElBQzVDO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxHQUFHO0FBQUEsSUFDTDtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSx3Q0FBd0M7QUFBQSxJQUNsRTtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
