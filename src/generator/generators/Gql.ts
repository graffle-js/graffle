import { parse } from 'graphql'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'

/**
 * Generates a static gql() function that uses gql-tada's type inference.
 *
 * This generator creates a function that:
 * - Uses type-only imports from gql-tada (no runtime bundling)
 * - Provides full type inference for GraphQL queries
 * - Uses graphql-js parse for runtime (already a Graffle dependency)
 *
 * The generated function can be used to create typed GraphQL documents
 * that can be executed with client.send().
 *
 * @example
 * ```ts
 * import { Graffle } from './graffle/_exports.js'
 *
 * const doc = Graffle.gql(`
 *   query GetUser($id: ID!) {
 *     user(id: $id) { name email }
 *   }
 * `)
 *
 * const client = Graffle.create({ schema: { name: 'MySchema' } })
 * const result = await client.send(doc, { id: '123' })
 * ```
 */
export const ModuleGeneratorGql = createModuleGenerator(
  `gql`,
  ({ code }) => {
    // Import type-only gql-tada types
    code`import type { initGraphQLTada } from 'gql.tada'`
    code`import type { introspection } from './tada.js'`
    code`import { parse } from 'graphql'`
    code``

    // Create the graphql function type using gql-tada
    code`type GraphQLTadaAPI = initGraphQLTada<{`
    code`  introspection: introspection`
    code`}>`
    code``

    // Implement the function with graphql-js parse (runtime)
    // Type it with gql-tada types (compile-time)
    code`export const gql: GraphQLTadaAPI = ((query: string) => {`
    code`  return parse(query) as any`
    code`}) as any`
  },
)
