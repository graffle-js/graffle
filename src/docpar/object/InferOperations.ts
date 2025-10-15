import type { DocumentBuilderKit } from '#src/extensions/DocumentBuilder/$.js'
import type { Grafaid } from '#src/lib/grafaid/$.js'
import type { RequestResult } from '#src/types/RequestResult/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '#src/types/SchemaDrivenDataMap/$.js'
import type { Operation } from '../core/operation.js'

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
          Grafaid.Document.OperationTypeNode.FromString<operationType & string>,
          operationName
        >
    }[keyof $Document[operationType] & string]  // Extract union from operation names
  }[keyof $Document] // Extract union from operation types

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
 * // Result: Operation<'getUser', { id: string, name: string }, {}>
 * ```
 */
// dprint-ignore
export type InferOperation<
  $DocOp,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context,
  $OperationType extends Grafaid.Document.OperationTypeNode,
  $OperationName,
> =
  $DocOp extends object
    ? Operation<
        $OperationName & string,
        RequestResult.Simplify<$Context,
          DocumentBuilderKit.InferResult.Operation<$DocOp, $Schema, $OperationType>
        >,
        RequestResult.Simplify<$Context,
          DocumentBuilderKit.Var.InferFromOperation<$DocOp, $ArgumentsMap, $OperationType>
        >
      >
    : never
