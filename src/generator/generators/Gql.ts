import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { codeImportAll, codeImportNamed } from '../helpers/pathHelpers.js'
import { ModuleGeneratorScalar } from './Scalar.js'
import { ModuleGeneratorTada } from './Tada.js'

/**
 * Generates an overloaded gql() function that supports both:
 * - Template strings with gql-tada type inference
 * - Document objects with document builder
 *
 * The generated function provides:
 * - Type-only imports from gql-tada (no runtime bundling)
 * - Full type inference for GraphQL queries from strings
 * - Document builder support for object syntax
 * - Uses graphql-js parse for runtime (already a Graffle dependency)
 *
 * @example Template string (gql-tada)
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * ```
 *
 * @example Document object (document builder)
 * ```ts
 * const doc = gql({ query: { getUser: { user: { id: true } } } })
 * ```
 */
export const ModuleGeneratorGql = createModuleGenerator(
  `gql`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorTada))
    code`
      import { createGql } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'`
    code(codeImportNamed(config, { names: 'Schema', from: './schema/$', type: true }))
    code(codeImportNamed(config, { names: { schemaDrivenDataMap: 'sddm' }, from: './schema-driven-data-map' }))
    code(codeImportAll(config, { as: '$$SelectionSets', from: './selection-sets', type: true }))
    code(codeImportAll(config, { as: '$$ArgumentsMap', from: './arguments-map', type: true }))
    code`

      /**
       * Unified \`gql\` function that accepts either:
       * - A template string for gql-tada (type-only, runtime uses graphql parse)
       * - A document object for document builder
       *
       * @example Template string (gql-tada)
       * \`\`\`ts
       * const doc = gql(\`query { user { id } }\`)
       * // Returns: TadaDocumentNode<{ user: { id: string } }, {}>
       * \`\`\`
       *
       * @example Document object (document builder)
       * \`\`\`ts
       * const doc = gql({
       *   query: {
       *     getUser: { user: { id: true, name: true } }
       *   }
       * })
       * // Returns: TypedFullDocument with operation metadata
       * \`\`\`
       */
      export const gql = createGql<
        $$Tada.introspection,
        Schema,
        $$SelectionSets.$Document,
        $$ArgumentsMap.ArgumentsMap
      >({
        // TODO: sddm runtime value should be a subtype of ArgumentsMap type
        // Currently need 'as any' cast, but types should align properly
        sddm: sddm as any
      })
    `
  },
)
