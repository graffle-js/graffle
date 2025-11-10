import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import { print } from '@0no-co/graphql.web'

//
//
//
//
// ==================================================================================================
//                                           GQL Function
// ==================================================================================================
//
//
//
//
/**
 * Unified gql function interface that handles both:
 * - GraphQL string inputs (parsed via document parser)
 * - Document object inputs (document builder)
 *
 * This interface unifies static and instance-level typings using Graffle's own type system.
 */
export interface gql<
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $DocumentObjectConstraint,
  $ArgumentsMap,
> {
  // String GraphQL document overload
  <const $Input extends string>(
    graphqlDocument: $Input,
  ): GraphqlKit.Document.Parse<$Input, GraphqlKit.Document.ParserContext<$Schema>>

  // Document object overload
  <const $Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: GraphqlKit.Document.Object.ParserContext,
  ): $Document extends object ? GraphqlKit.Document.Parse<
      $Document,
      GraphqlKit.Document.ParserContext<$Schema, $ArgumentsMap, never>
    >
    : never
}

/**
 * Namespace for static gql function types and utilities.
 *
 * Provides the canonical input type definition for static document building.
 * For instance gql (which accepts pre-built typed documents), see GqlMethod.Arguments.
 */
export namespace Gql {
  /**
   * Arguments accepted by the static gql function.
   *
   * Can be either:
   * - A GraphQL document string (with full type inference)
   * - A document builder object with optional configuration
   */
  export type Arguments =
    | [graphqlDocument: string]
    | [
      objectDocument: GraphqlKit.Document.Object.Select.Document.DocumentObject,
      options?: GraphqlKit.Document.Object.ParserContext,
    ]

  export const normalizeArguments = (args: Arguments) => {
    const [first, second] = args

    // String GraphQL document
    if (typeof first === 'string') {
      return {
        type: 'graphql' as const,
        document: first as string,
        options: undefined,
      }
    }

    // Document builder object
    return {
      type: 'object' as const,
      document: first as GraphqlKit.Document.Object.Select.Document.DocumentObject,
      options: second,
    }
  }
}

export const defaults: Partial<GraphqlKit.Document.Object.ParserContext> = {
  hoistArguments: true,
}

export const createGql = <
  $Schema extends GraphqlKit.Schema.Type | undefined,
  $DocumentObjectConstraint,
  $ArgumentsMap,
>(config: {
  sddm: $ArgumentsMap
}): gql<$Schema, $DocumentObjectConstraint, $ArgumentsMap> => {
  return ((...args: Gql.Arguments) => {
    const normalized = Gql.normalizeArguments(args)

    if (normalized.type === 'graphql') {
      // For string inputs, return as-is
      // Type inference is handled at compile time by the document parser
      return normalized.document as any
    }

    // Normalize the document object into internal representation
    const documentNormalized = GraphqlKit.Document.Object.Select.Document.normalizeOrThrow(normalized.document)

    // Convert to GraphQL document
    const result = GraphqlKit.Document.Object.ToAst.toAst(documentNormalized, {
      ...defaults,
      ...normalized.options,
      sddm: config.sddm as any,
    })

    // Print and return as GraphqlKit.Document
    return print(result.document) as any
  }) as any
}

/**
 * Schema-less unified document builder function.
 *
 * Build GraphQL documents using either GraphQL string syntax or TypeScript objects.
 * Works without needing a client instance or schema generation, making it perfect for
 * quick prototyping, schema-less workflows, or when you prefer inline GraphQL strings.
 *
 * @remarks
 * This function accepts two input formats:
 * - **String**: Standard GraphQL document syntax with type inference
 * - **Object**: TypeScript objects with type-safe field selection
 *
 * For simpler single-field or multi-field operations, consider using the
 * {@link query} and {@link mutation} builders directly.
 *
 * @example GraphQL string documents
 * ```ts
 * import { gql } from 'graffle'
 *
 * // Simple query
 * const doc1 = gql(`query { user { id name } }`)
 *
 * // With variables
 * const doc2 = gql(`
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *       email
 *     }
 *   }
 * `)
 *
 * // Multiple operations
 * const doc3 = gql(`
 *   query GetUser { user { id name } }
 *   mutation CreateUser { createUser { id } }
 * `)
 * ```
 *
 * @example Document object syntax
 * ```ts
 * import { gql } from 'graffle'
 *
 * // Single query operation
 * const doc1 = gql({
 *   query: {
 *     user: {
 *       id: true,
 *       name: true
 *     }
 *   }
 * })
 *
 * // Multiple operations
 * const doc2 = gql({
 *   query: {
 *     getUser: {
 *       user: { id: true, name: true }
 *     }
 *   },
 *   mutation: {
 *     createUser: {
 *       createUser: { id: true }
 *     }
 *   }
 * })
 * ```
 *
 * @see {@link https://graffle.js.org/guides/documents/static | Static Document Guide}
 * @see {@link query} For simplified query operations
 * @see {@link mutation} For simplified mutation operations
 */
export const gql = createGql({
  sddm: undefined as any, // Schema-less mode - no SDDM needed
})

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
  ? GraphqlKit.Document.Parse<$Input, GraphqlKit.Document.ParserContext<undefined>>
  : GraphqlKit.Document.Parse<$Input, GraphqlKit.Document.ParserContext<GlobalRegistry.ForContext<$Context>['schema']>>

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
  $Document extends object,
> = GraphqlKit.Document.Parse<
  $Document,
  GraphqlKit.Document.ParserContext<
    GlobalRegistry.ForContext<$Context>['schema'],
    GlobalRegistry.ForContext<$Context>['argumentsMap'],
    $Context extends { typeHookRequestResultDataTypes: infer $TypeHooks } ? $TypeHooks : never
  >
>
