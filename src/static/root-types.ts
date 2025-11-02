import { Docpar } from '#src/docpar/$.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

/**
 * Schema-less query document builder.
 *
 * Build GraphQL query documents without needing a client instance or schema generation.
 * Provides direct access to root query fields with full type safety when used with
 * a typed schema.
 *
 * @remarks
 * Each property access on this object creates a document builder for that field.
 * The special `$batch` method allows selecting multiple root fields in a single query.
 *
 * All field selections return GraphQL document strings that can be sent using
 * the instance API or other GraphQL clients.
 *
 * @example Single field query
 * ```ts
 * import { query } from 'graffle'
 *
 * // Query a single root field
 * const doc = query.user({
 *   id: true,
 *   name: true,
 *   email: true
 * })
 * // Generates: { user { id name email } }
 *
 * // With nested selections
 * const doc2 = query.user({
 *   id: true,
 *   posts: {
 *     title: true,
 *     content: true
 *   }
 * })
 * // Generates: { user { id posts { title content } } }
 * ```
 *
 * @example Multi-field query with $batch
 * ```ts
 * import { query } from 'graffle'
 *
 * const doc = query.$batch({
 *   user: { id: true, name: true },
 *   posts: { id: true, title: true },
 *   comments: { id: true, text: true }
 * })
 * // Generates:
 * // {
 * //   user { id name }
 * //   posts { id title }
 * //   comments { id text }
 * // }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/documents/static | Static Document Guide}
 */
export const query = Docpar.Object.Static.createStaticRootType(GraphqlKit.Document.Ast.OperationType.QUERY)

/**
 * Schema-less mutation document builder.
 *
 * Build GraphQL mutation documents without needing a client instance or schema generation.
 * Provides direct access to root mutation fields with full type safety when used with
 * a typed schema.
 *
 * @remarks
 * Each property access on this object creates a document builder for that field.
 * The special `$batch` method allows selecting multiple root fields in a single mutation.
 *
 * All field selections return GraphQL document strings that can be sent using
 * the instance API or other GraphQL clients.
 *
 * @example Single field mutation
 * ```ts
 * import { mutation } from 'graffle'
 *
 * // Mutate a single root field
 * const doc = mutation.createUser({
 *   id: true,
 *   name: true
 * })
 * // Generates: mutation { createUser { id name } }
 *
 * // With nested selections
 * const doc2 = mutation.createPost({
 *   id: true,
 *   author: {
 *     name: true
 *   }
 * })
 * // Generates: mutation { createPost { id author { name } } }
 * ```
 *
 * @example Multi-field mutation with $batch
 * ```ts
 * import { mutation } from 'graffle'
 *
 * const doc = mutation.$batch({
 *   createUser: { id: true, name: true },
 *   deletePost: { success: true },
 *   updateComment: { id: true, text: true }
 * })
 * // Generates:
 * // mutation {
 * //   createUser { id name }
 * //   deletePost { success }
 * //   updateComment { id text }
 * // }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/documents/static | Static Document Guide}
 */
export const mutation = Docpar.Object.Static.createStaticRootType(GraphqlKit.Document.Ast.OperationType.MUTATION)
