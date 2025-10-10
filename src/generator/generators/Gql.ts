import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
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
      import { createGql } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'
      import type { Schema } from './schema/$.js'
      import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
      import type * as $$SelectionSets from './selection-sets.js'
      import type * as $$ArgumentsMap from './arguments-map.js'

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
       * // Returns: TypedFullDocumentString with operation metadata
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
