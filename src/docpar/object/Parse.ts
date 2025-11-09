import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { RequestResult } from '#src/types/RequestResult/_.js'
import type { Ts } from '@wollybeard/kit'
import type { SchemaDrivenDataMap } from '../../lib/graphql-kit/schema/sddm/_.js'
import type { Core } from '../core/_.js'
import type { InferResult } from './InferResult/_.js'
import type { Var } from './var/$.js'

/**
 * Parse GraphQL document object into operations.
 *
 * Returns a union of operations without Doc.Document wrapper.
 *
 * @param $Document - The document builder object
 * @param $Context - Parser context containing schema and configuration
 *
 * @example
 * ```ts
 * type Doc = {
 *   query: { getUser: { id: true }, getPost: { id: true } },
 *   mutation: { createUser: { id: true } }
 * }
 * type Ops = Parse<Doc, MyContext>
 * // Result: Operation<'getUser', ...> | Operation<'getPost', ...> | Operation<'createUser', ...>
 * ```
 */
// dprint-ignore
export type Parse<
  $Document extends object,
  $Context
> =
  {
    [operationType in keyof $Document]: {
      [operationName in keyof $Document[operationType]]:
        InferOperation<
          $Document[operationType][operationName],
          $Context,
          GraphqlKit.Schema.OperationType.FromString<operationType & string>,
          operationName
        >
    }[keyof $Document[operationType] & string]  // Extract union from operation names
  }[keyof $Document] // Extract union from operation types

/**
 * Infer a single operation with the given operation type.
 *
 * @example
 * ```ts
 * type Op = InferOperation<
 *   { id: true, name: true },
 *   MyContext,
 *   GraphqlKit.Schema.OperationType.QUERY,
 *   'getUser'
 * >
 * // Result: Operation<'getUser', { id: string, name: string }, {}>
 * ```
 */
// dprint-ignore
export type InferOperation<
  $DocOp,
  $Context,
  $OperationType extends GraphqlKit.Schema.OperationType.OperationType,
  $OperationName,
> =
  $DocOp extends object
    ? $Context extends { schema: undefined }
      ? Core.Operation<
          $OperationName & string,
          InferResult.OperationSchemaLess<$DocOp>,
          Var.InferFromOperationSchemaLess<$DocOp>
        >
      : $Context extends { schema: infer $Schema; sddm: infer $SDDM extends SchemaDrivenDataMap }
        ? InferResult.Operation<$DocOp, $Schema, $OperationType> extends Ts.Err.StaticError<any, any>
          ? InferResult.Operation<$DocOp, $Schema, $OperationType>
          : Core.Operation<
              $OperationName & string,
              RequestResult.Simplify<$Context,
                [InferResult.Operation<
                  $DocOp,
                  $Schema,
                  $OperationType
                >][0]
              >,
              RequestResult.Simplify<$Context,
                [Var.InferFromOperation<
                  $DocOp,
                  $SDDM,
                  $OperationType
                >][0]
              >
            >
        : never
    : never
