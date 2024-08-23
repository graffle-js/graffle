import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { ModuleKind, ModuleResolutionKind } from 'typescript'
import { defineConfig } from 'vitepress'
import { sidebarExamples } from './configExamples'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Graffle',
  description: 'Minimalist Progressively Type Safe GraphQL Client For JavaScript.',
  // TODO, remove before going live.
  ignoreDeadLinks: true,
  markdown: {
    codeTransformers: [
      transformerTwoslash({
        twoslashOptions: {
          compilerOptions: {
            moduleResolution: ModuleResolutionKind.Bundler,
            module: ModuleKind.ESNext,
          },

          extraFiles: {
            // 'foo.ts':
            // 'export function ref<T>(value: T): Ref<T> { return { value } }\ninterface Ref<T> { value: string }',
          },
          // Instead of automatically putting underlines over every property and variable,
          // only do so for the ones we explicitly ask for in our markdown.
          // shouldGetHoverInfo: (x) => {
          //   return false
          // },
        },
      }) as any,
    ],
  },
  srcDir: './content',
  themeConfig: {
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
      { text: 'Guides', link: '/guides/overview/introduction' },
      { text: 'Examples', link: sidebarExamples[0].link ?? '/' },
    ],
    sidebar: {
      '/examples/': sidebarExamples,
      '/guides/': [
        {
          text: 'Overview',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/guides/overview/introduction' },
            {
              text: 'Getting Started',
              // link: '/overview/getting-started',
              items: [{
                text: 'Static Client',
                link: '/guides/overview/getting-started-static',
              }, {
                text:
                  'Generated Client <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
                link: '/guides/overview/getting-started-generated',
              }],
            },
            {
              text: 'Generation <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
              link: '/guides/overview/generation',
            },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'Transports', link: '/guides/configuration/transports' },
            { text: 'Output', link: '/guides/configuration/output' },
            { text: 'Request', link: '/guides/configuration/request' },
            { text: 'Anyware', link: '/guides/configuration/anyware' },
          ],
        },
        {
          text: 'Methods',
          collapsed: false,
          items: [
            { text: 'Raw', link: '/methods/raw' },
            { text: 'Or Throw', link: '/guides/methods/or-throw' },
            {
              text: 'Document <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
              link: '/guides/methods/document',
            },
            {
              text: 'Batch <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
              link: '/guides/methods/batch',
            },
            {
              text: 'Root Fields <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
              link: '/guides/methods/root-fields',
            },
          ],
        },
        {
          text:
            'GQL Feature Mapping <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
          collapsed: false,
          items: [
            { text: 'Arguments', link: '/guides/graphql-feature-mapping/arguments' },
            { text: 'Aliases', link: '/guides/graphql-feature-mapping/aliases' },
            { text: 'Enums', link: '/guides/graphql-feature-mapping/enums' },
            { text: 'Interfaces', link: '/guides/graphql-feature-mapping/interfaces' },
            { text: 'Unions', link: '/guides/graphql-feature-mapping/unions' },
            { text: 'Directives', link: '/guides/graphql-feature-mapping/directives' },
            { text: 'Custom Scalars', link: '/guides/graphql-feature-mapping/custom-scalars' },
            { text: 'Selection Groups', link: '/guides/graphql-feature-mapping/selection-groups' },
          ],
        },
        {
          text: 'Misc <span title="Requires generation" style="font-size:1.75em;line-height:0;">⩕</span>',
          collapsed: false,
          items: [
            { text: 'Schema Errors', link: '/guides/misc/schema-errors' },
            { text: 'Select', link: '/guides/misc/select' },
            { text: 'Extension Authoring', link: '/guides/misc/extension-authoring' },
          ],
        },
        {
          text: 'Extensions',
          collapsed: false,
          items: [
            { text: 'File Upload', link: '/guides/extensions/file-upload' },
            { text: 'OTEL', link: '/guides/extensions/otel' },
            { text: 'Or Throw', link: '/guides/extensions/or-throw' },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jasonkuhrt/graffle' },
    ],
  },
})