import { Docpar } from '#~/docpar/_.js'
import { Schema } from '#~/schema/_.js'
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
  $Schema extends Schema | undefined,
  $DocumentObjectConstraint,
  $ArgumentsMap,
> {
  // String GraphQL document overload
  <const $Input extends string>(
    graphqlDocument: $Input,
  ): Docpar.Parse<$Input>

  // Document object overload
  <const $Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: Docpar.Object.ToGraphQLDocument.Options,
  ): $Document extends object ? Docpar.Object.Parse<
      $Document,
      Docpar.ParserContext<$Schema, $ArgumentsMap, never>
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
    | [objectDocument: Docpar.Object.Select.Document.DocumentObject, options?: Docpar.Object.ToGraphQLDocument.Options]

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
      document: first as Docpar.Object.Select.Document.DocumentObject,
      options: second,
    }
  }
}

export const defaults: Partial<Docpar.Object.ToGraphQLDocument.Options> = {
  hoistArguments: true,
}

export const createGql = <
  $Schema extends Schema | undefined,
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
    const documentNormalized = Docpar.Object.Select.Document.normalizeOrThrow(normalized.document)

    // Convert to GraphQL document
    const result = Docpar.Object.ToGraphQLDocument.toGraphQLDocument(documentNormalized, {
      ...defaults,
      ...normalized.options,
      sddm: config.sddm as any,
    })

    // Print and return as TypedFullDocument
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
