import { Docpar } from '#src/docpar/$.js'
import type { Options } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
import { toGraphQLDocument } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
import type { DocumentBuilderKit } from '#src/extensions/DocumentBuilder/$.js'
import type { Grafaid } from '#src/lib/grafaid/$.js'
import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import { print } from '@0no-co/graphql.web'
import type { Simplify } from 'type-fest'
import * as Doc from './core/doc.js'

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
 * Infer all operations in a document by mapping over operation types (query, mutation, subscription).
 *
 * Returns a union of all operations for improved TypeScript performance.
 *
 * @example
 * ```ts
 * type Doc = {
 *   query: { getUser: { id: true }, getPost: { id: true } },
 *   mutation: { createUser: { id: true } }
 * }
 * type Ops = InferOperationsInDocument<Doc, MySchema, MyArgsMap, MyContext>
 * // Result: Operation<'getUser', ...> | Operation<'getPost', ...> | Operation<'createUser', ...>
 * ```
 */
// dprint-ignore
export type InferOperationsInDocument<
  $Document extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context extends object
> =
  {
    [operationType in keyof $Document]: {
      [operationName in keyof $Document[operationType]]:
        InferOperation<
          $Document[operationType][operationName],
          $Schema,
          $ArgumentsMap,
          $Context,
          (
              operationType extends 'mutation' ? typeof Grafaid.Document.OperationTypeNode.MUTATION
            : operationType extends 'subscription' ? typeof Grafaid.Document.OperationTypeNode.SUBSCRIPTION
            : operationType extends 'query' ?  typeof Grafaid.Document.OperationTypeNode.QUERY
            : never
          ),
          operationName
        >
    }[keyof $Document[operationType] & string]  // Extract union from operation names
  }[keyof $Document]  // Extract union from operation types

/**
 * @deprecated Use `InferOperationsInDocument` instead. This alias exists for backwards compatibility.
 */
export type InferOperations<
  $Document,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context,
> = $Document extends object
  ? $Context extends object ? InferOperationsInDocument<$Document, $Schema, $ArgumentsMap, $Context>
  : never
  : never

/**
 * Infer a single operation with the given operation type.
 *
 * This replaces the duplication in `InferOperationsFromQuery` and `InferOperationsFromMutation`
 * by accepting the operation type as a parameter and using the generic `Operation` type.
 *
 * @example
 * ```ts
 * type Op = InferOperation<
 *   { id: true, name: true },
 *   MySchema,
 *   MyArgsMap,
 *   MyContext,
 *   OperationTypeNode.QUERY,
 *   'getUser'
 * >
 * // Result: TypedFullDocument.Operation<'getUser', { id: string, name: string }, {}>
 * ```
 */
// dprint-ignore
type InferOperation<
  $DocOp,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context,
  $OperationType extends Grafaid.Document.OperationTypeNode,
  $OperationName,
> =
  $DocOp extends object
    ? TypedFullDocument.Operation<
        $OperationName & string,
        RequestResult.Simplify<$Context,
          DocumentBuilderKit.InferResult.Operation<$DocOp, $Schema, $OperationType>
        >,
        RequestResult.Simplify<$Context,
          DocumentBuilderKit.Var.InferFromOperation<$DocOp, $ArgumentsMap, $OperationType>
        >
      >
    : never

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
  ): Simplify<
      Docpar.getDocumentOperations<
        Docpar.parseDocument<$Input>['definitions'],
        Docpar.schemaOfSetup<{
          schema: $Schema
        }>
      >
    > extends infer $Operations
      ? $Operations extends Doc.Operation
        ? Doc.Document<$Operations>
        : string
      : string

  // Document object overload
  <$Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: Options,
  ): $Document extends object
      ? Doc.Document<
          Simplify<
            InferOperationsInDocument<
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

// todo
// export const gql = createGql()
