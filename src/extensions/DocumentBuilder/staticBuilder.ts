import { print } from '@0no-co/graphql.web'
import type { OperationTypeNode } from 'graphql'
import { isSymbol } from '../../lib/prelude.js'
import { Select } from './Select/$.js'
import type { Options } from './SelectGraphQLMapper/nodes/1_Document.js'
import { toGraphQLDocument } from './SelectGraphQLMapper/nodes/1_Document.js'
import { defaults } from './staticBuilderDefaults.js'

/**
 * Create a static root type builder for generating type-safe GraphQL documents at build time.
 *
 * @remarks
 * The static builder provides compile-time GraphQL document generation with full type safety.
 * Unlike runtime builders, it produces document strings that can be statically analyzed and optimized.
 * This is particularly useful for:
 * - Build-time document generation and validation
 * - Static analysis tools and linters
 * - Reducing runtime overhead
 * - Ensuring all queries are known at build time
 *
 * @param operationType - The GraphQL operation type (Query, Mutation, or Subscription)
 * @returns A proxy object that generates typed GraphQL document strings
 *
 * @example
 * ```ts
 * import { createStaticRootType } from 'graffle'
 * import { OperationTypeNode } from 'graphql'
 *
 * const query = createStaticRootType(OperationTypeNode.QUERY)
 *
 * // Generate a typed document string
 * const userQuery = query.user({
 *   id: true,
 *   name: true,
 *   posts: {
 *     title: true,
 *     content: true
 *   }
 * })
 * // Returns: "{ user { id name posts { title content } } }"
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const createStaticRootType = (operationType: OperationTypeNode) => {
  return new Proxy({}, {
    get: (_, fieldName: string) => {
      if (isSymbol(fieldName)) throw new Error(`Symbols not supported`)

      return (selection?: Select.SelectionSet.AnySelectionSet, options?: Partial<Options>) => {
        // Create root type selection set with the field
        const rootTypeSelectionSet = {
          [fieldName]: selection ?? true,
        }

        // Create normalized document from root type selection
        const documentNormalized = Select.Document.createDocumentNormalizedFromRootTypeSelection(
          operationType,
          rootTypeSelectionSet,
        )

        // Convert to GraphQL document using existing mapper
        const result = toGraphQLDocument(documentNormalized, {
          ...defaults,
          ...options,
          // Note: No SDDM or scalars needed for static builder
          // Types are handled at compile time
        })

        // Return the printed document string
        // Type safety is provided at compile time
        return print(result.document) as any
      }
    },
  })
}
