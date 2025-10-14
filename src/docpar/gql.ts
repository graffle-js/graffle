import { Docpar } from '#src/docpar/$.js'
import type { Options } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
import { toGraphQLDocument } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
import type { DocumentBuilderKit } from '#src/extensions/DocumentBuilder/$.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import { print } from '@0no-co/graphql.web'
import type { Simplify } from 'type-fest'

//
//
//
//
// ==================================================================================================
//                                   Type-Level GraphQL Parsing
// ==================================================================================================
//
//
//
//

/**
 * Type-level utility that parses GraphQL documents (strings or typed documents) and returns a typed document with all operations.
 *
 * For plain strings:
 * 1. Parses the GraphQL string into an AST using `parseDocument`
 * 2. Extracts introspection data from the context's GlobalRegistry (or uses schema-less mode if unavailable)
 * 3. Uses `schemaOfSetup` to combine introspection with scalar mappings into a `SchemaLike`
 * 4. Extracts ALL operations from the document using `getDocumentOperations`
 * 5. Wraps the result in `TypedFullDocument.FromObject` to produce either SingleOperation or MultiOperation
 *
 * For typed documents (TypedDocumentString, TypedFullDocument):
 * - Extracts and preserves the existing type information
 *
 * @typeParam $Context - The client context containing schema introspection
 * @typeParam $Input - The GraphQL document (string or typed document) to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLString<MyContext, 'query MyQuery { id }'>
 * // Result: TypedFullDocument.SingleOperation<Operation<'MyQuery', { id: string }, {}>>
 *
 * type Doc2 = ParseGraphQLString<MyContext, 'query Q1 { id } mutation M1 { id }'>
 * // Result: TypedFullDocument.MultiOperation<{ Q1: Operation<...>, M1: Operation<...> }>
 * ```
 */
// dprint-ignore
export type ParseGraphQLString<
  $Context,
  $Input extends string,
> = GlobalRegistry.ForContext<$Context> extends never
  ? TypedFullDocument.FromObject<
      Simplify<
        Docpar.getDocumentOperations<
          Docpar.parseDocument<$Input>['definitions'],
          Docpar.schemaOfSetup<{
            schema: undefined
          }>
        >
      >
    >
  : TypedFullDocument.FromObject<
      Simplify<
        Docpar.getDocumentOperations<
          Docpar.parseDocument<$Input>['definitions'],
          Docpar.schemaOfSetup<{
            schema: GlobalRegistry.ForContext<$Context>['schema']
          }>
        >
      >
    >

/**
 * Type-level utility that parses a document builder object and returns the typed document.
 *
 * This utility:
 * 1. Extracts schema and arguments map from the context's GlobalRegistry
 * 2. Uses `InferOperations` to infer result and variable types for each operation
 * 3. Wraps the result in `TypedFullDocument.FromObject` for use with document senders
 *
 * @typeParam $Context - The client context containing schema and configuration
 * @typeParam $Document - The document builder object to parse
 *
 * @example
 * ```ts
 * type Doc = ParseGraphQLObject<MyContext, { query: { myQuery: { id: true } } }>
 * // Result: TypedFullDocument with operation metadata
 * ```
 */
// dprint-ignore
export type ParseGraphQLObject<
  $Context,
  $Document,
> = TypedFullDocument.FromObject<
  InferOperations<
    $Document,
    GlobalRegistry.ForContext<$Context>['schema'],
    GlobalRegistry.ForContext<$Context>['argumentsMap'],
    $Context
  >
>

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
 * Infer operation metadata from a full document selection set.
 *
 * This utility takes a document object (with query/mutation operations) and infers
 * the result types and variable types for each named operation.
 *
 * Used by generated static document builders to provide type-safe operation inference.
 *
 * @example
 * ```ts
 * type Doc = { query: { getUser: { id: true }, getPost: { id: true } } }
 * type Ops = InferOperations<Doc, MySchema, MyArgsMap, MyScalars>
 * // Result: {
 * //   getUser: { result: { id: string }, variables: {} },
 * //   getPost: { result: { id: string }, variables: {} }
 * // }
 * ```
 */
// dprint-ignore
type InferOperationsFromQuery<
  $Query extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery,
  $Context
> = {
  [k_operationName in keyof $Query & string as $Query[k_operationName] extends object ? k_operationName : never]:
    $Query[k_operationName] extends object
      ?
      TypedFullDocument.Operation<
        k_operationName,
        RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationQuery<$Query[k_operationName], $Schema>>,
        RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromQuery<$Query[k_operationName], $ArgumentsMap>>
      >
      : never
}

// dprint-ignore
type InferOperationsFromMutation<
  $Mutation extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation,
  $Context
> = {
  [k_operationName in keyof $Mutation & string as $Mutation[k_operationName] extends object ? k_operationName : never]:
    $Mutation[k_operationName] extends object
      ?
      TypedFullDocument.Operation<
        k_operationName,
        RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationMutation<$Mutation[k_operationName], $Schema>>,
        RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromMutation<$Mutation[k_operationName], $ArgumentsMap>>
      >
      : never
}

// dprint-ignore
export type InferOperations<
  $Document,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context
> =
  & ($Document extends { query: infer $Query extends object }
    ? $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithQuery
      ? InferOperationsFromQuery<$Query, $Schema, $ArgumentsMap, $Context>
      : {}
    : {})
  & ($Document extends { mutation: infer $Mutation extends object }
    ? $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation
      ? InferOperationsFromMutation<$Mutation, $Schema, $ArgumentsMap, $Context>
      : {}
    : {})

/**
 * Unified `gql` function that accepts either:
 * - A GraphQL string with full type inference
 * - A document object for document builder
 *
 * @example GraphQL string syntax
 * ```ts
 * const doc = gql(`query { user { id } }`)
 * // Returns: TypedFullDocument.SingleOperation<{ user: { id: string } }, {}>
 * ```
 *
 * @example Document object syntax
 * ```ts
 * const doc = gql({
 *   query: {
 *     getUser: { user: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocument.SingleOperation with operation metadata
 * ```
 */
/**
 * Unified gql function interface that handles both:
 * - GraphQL string inputs (parsed via document parser)
 * - Document object inputs (document builder)
 *
 * This interface unifies static and instance-level typings using Graffle's own type system.
 */
export interface gql<
  $Schema extends Schema,
  $DocumentObjectConstraint,
  $ArgumentsMap extends SchemaDrivenDataMap,
> {
  // Override string signature to return TypedFullDocument instead of TadaDocumentNode
  <const $Input extends string>(
    graphqlDocument: $Input,
  ): TypedFullDocument.FromObject<
    Simplify<
      Docpar.getDocumentOperations<
        Docpar.parseDocument<$Input>['definitions'],
        Docpar.schemaOfSetup<{
          schema: $Schema
        }>
      >
    >
  >

  // Document object overload
  <$Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: Options,
  ): TypedFullDocument.FromObject<
    Simplify<
      InferOperations<
        $Document,
        $Schema,
        $ArgumentsMap,
        {
          // TODO: Extensions should be able to extend typeHookRequestResultDataTypes
          // For now, hardcoded to never since static documents have no runtime extensions
          typeHookRequestResultDataTypes: never
          scalars: $Schema['scalarRegistry']
        }
      >
    >
  >
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
    | [objectDocument: Docpar.Object.Select.Document.DocumentObject, options?: Options]

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

export const defaults: Partial<Options> = {
  hoistArguments: true,
}

export const createGql = <
  $Schema extends Schema,
  $DocumentObjectConstraint,
  $ArgumentsMap extends SchemaDrivenDataMap,
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
    const result = toGraphQLDocument(documentNormalized, {
      ...defaults,
      ...normalized.options,
      sddm: config.sddm,
    })

    // Print and return as TypedFullDocument
    return print(result.document) as any
  }) as any
}
