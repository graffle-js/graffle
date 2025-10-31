import { createStaticRootType } from '#graffle/extensions/document-builder';
import { OperationTypeNode } from 'graphql';
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js';
/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query = createStaticRootType(OperationTypeNode.QUERY, { sddm });
/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation = createStaticRootType(OperationTypeNode.MUTATION, { sddm });
//# sourceMappingURL=document.js.map