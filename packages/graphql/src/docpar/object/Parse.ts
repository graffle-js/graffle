import { Document } from '#~/document/_.js'
import type { Ts } from '@wollybeard/kit'
import type { Schema } from '#~/schema-types/index.js'
import type { Core, ParserContext } from '../core/_.js'
import type { SchemaDrivenDataMap } from '../core/sddm/SchemaDrivenDataMap.js'
import type { InferResult } from './InferResult/_.js'
import type { Var } from './var/_.js'

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
          Document.Ast.OperationTypeNode.FromString<operationType & string>,
          operationName
        >
    }[keyof $Document[operationType] & string]  // Extract union from operation names
  }[keyof $Document] // Extract union from operation types

/**
 * @deprecated Use `Parse` instead. This alias exists for backwards compatibility.
 */
export type InferOperationsInDocument<
  $Document extends object,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context extends object,
> = Parse<
  $Document,
  ParserContext<
    $Schema,
    $ArgumentsMap,
    $Context extends { typeHookRequestResultDataTypes: infer $TypeHooks } ? $TypeHooks : never
  > & ParserContext
>

/**
 * @deprecated Use `Parse` instead. This alias exists for backwards compatibility.
 */
export type InferOperations<
  $Document,
  $Schema extends Schema,
  $ArgumentsMap extends SchemaDrivenDataMap,
  $Context,
> = $Document extends object ? $Context extends object ? Parse<
      $Document,
      ParserContext<
        $Schema,
        $ArgumentsMap,
        $Context extends { typeHookRequestResultDataTypes: infer $TypeHooks } ? $TypeHooks : never
      > & ParserContext
    >
  : never
  : never

/**
 * Infer a single operation with the given operation type.
 *
 * @example
 * ```ts
 * type Op = InferOperation<
 *   { id: true, name: true },
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
  $Context,
  $OperationType extends Document.Ast.OperationTypeNode,
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
        ? Core.Operation<
            $OperationName & string,
            Ts.Simplify.Top<
              [InferResult.Operation<
                $DocOp,
                $Schema,
                $OperationType
              >][0]
            >,
            Ts.Simplify.Top<
              [Var.InferFromOperation<
                $DocOp,
                $SDDM,
                $OperationType
              >][0]
            >
          >
        : never
    : never
