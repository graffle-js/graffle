import { Docpar } from '#src/docpar/$.js'
import type { InferOperationsInDocument } from '#src/docpar/object/InferOperations.js'
import type { Options } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
import { toGraphQLDocument } from '#src/docpar/object/ToGraphQLDocument/nodes/1_Document.js'
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
  > extends infer $OperationsRecord ? $OperationsRecord extends { __typename: 'ParserError' } ? $OperationsRecord
    : [$OperationsRecord] extends [Record<string, any>]
      ? [$OperationsRecord[keyof $OperationsRecord]] extends [infer $Op]
        ? [$Op] extends [Doc.Operation] ? Doc.Document<$Op>
        : string
      : string
    : string
    : string

  // Document object overload
  <$Document extends $DocumentObjectConstraint>(
    documentObject: $Document,
    options?: Options,
  ): $Document extends object ? Doc.Document<
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
