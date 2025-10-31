import { Graphql, Docpar, Static } from '@graffle/graphql'
import { Core } from '@graffle/core'

// Re-export core gql functionality from graphql package
export const { createGql, gql, Gql, defaults } = Static
export type GqlInterface = typeof Static.gql

//
//
//
//
// ==================================================================================================
//                                    Context-Aware Parse Helpers
// ==================================================================================================
//
//
//
//

/**
 * Type-level utility that parses GraphQL string documents and returns a typed document with all operations.
 *
 * Extracts schema information from the context's GlobalRegistry and parses the GraphQL string accordingly.
 * If no GlobalRegistry is available, uses schema-less mode.
 *
 * @typeParam $Context - The client context containing schema introspection via GlobalRegistry
 * @typeParam $Input - The GraphQL document string to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLString<MyContext, 'query MyQuery { id }'>
 * // Result: Document<Operation<'MyQuery', { id: string }, {}>>
 * ```
 */
// dprint-ignore
export type ParseGraphQLString<
  $Context,
  $Input extends string,
> = GlobalRegistry.ForContext<$Context> extends never
  ? Docpar.Parse<$Input, Docpar.ParserContext<undefined>>
  : Docpar.Parse<$Input, Docpar.ParserContext<GlobalRegistry.ForContext<$Context>['schema']>>

/**
 * Type-level utility that parses a document builder object and returns the typed document.
 *
 * Extracts schema and arguments map from the context's GlobalRegistry and infers operation types.
 *
 * @typeParam $Context - The client context containing schema and configuration via GlobalRegistry
 * @typeParam $Document - The document builder object to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLObject<MyContext, { query: { myQuery: { id: true } } }>
 * // Result: Document with operation metadata
 * ```
 */
// dprint-ignore
export type ParseGraphQLObject<
  $Context,
  $Document,
> = Docpar.Parse<
  $Document,
  Docpar.ParserContext<
    GlobalRegistry.ForContext<$Context>['schema'],
    GlobalRegistry.ForContext<$Context>['argumentsMap'],
    $Context extends { typeHookRequestResultDataTypes: infer $TypeHooks } ? $TypeHooks : never
  >
>
