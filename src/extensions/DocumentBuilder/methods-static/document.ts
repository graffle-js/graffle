import type { TypedFullDocument } from '#src/lib/grafaid/typed-full-document/$.js'
import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import { print } from '@0no-co/graphql.web'
import type { DocumentBuilderKit } from '../$.js'
import { Select } from '../Select/$.js'
import { type Options, toGraphQLDocument } from '../SelectGraphQLMapper/nodes/1_Document.js'
import { defaults as packageLevelDefaults } from '../staticBuilderDefaults.js'

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
  [K in keyof $Query as $Query[K] extends object ? K : never]:
    $Query[K] extends object
      ? {
          result:    RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationQuery<$Query[K], $Schema>>
          variables: RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromQuery<$Query[K], $ArgumentsMap>>
        }
      : never
}

// dprint-ignore
type InferOperationsFromMutation<
  $Mutation extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap.SchemaDrivenDataMapWithMutation,
  $Context
> = {
  [K in keyof $Mutation as $Mutation[K] extends object ? K : never]:
    $Mutation[K] extends object
      ? {
          result:    RequestResult.Simplify<$Context, DocumentBuilderKit.InferResult.OperationMutation<$Mutation[K], $Schema>>
          variables: RequestResult.Simplify<$Context, DocumentBuilderKit.Var.InferFromMutation<$Mutation[K], $ArgumentsMap>>
        }
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
 * Create a static document containing one or more named operations.
 *
 * Unlike createStaticRootType which creates single operations, this function
 * creates full documents that can contain multiple queries and/or mutations.
 * Returns a TypedFullDocumentString that captures type information for all operations.
 *
 * @param documentObject - Document object with query and/or mutation operations
 * @returns TypedFullDocumentString representing the complete document
 *
 * @example
 * ```ts
 * import { document } from './graffle/index.js'
 *
 * const doc = document({
 *   query: {
 *     getUser: { user: { id: true, name: true } },
 *     getPost: { post: { id: true, title: true } }
 *   },
 *   mutation: {
 *     updateUser: { updateUser: { id: true, name: true } }
 *   }
 * })
 * // Returns: TypedFullDocumentString with 3 operations
 * ```
 */
export const document = (
  documentObject: Select.Document.DocumentObject,
  options?: Options,
): TypedFullDocument.TypedFullDocumentString<any> => {
  // Normalize the document object into internal representation
  const documentNormalized = Select.Document.normalizeOrThrow(documentObject)

  // Convert to GraphQL document
  const result = toGraphQLDocument(documentNormalized, {
    ...packageLevelDefaults,
    ...options,
  })

  // Print and return as TypedFullDocumentString
  // The generator will provide proper operation types in the generated code
  return print(result.document) as any
}
