import type { UnionToTuple } from 'type-fest'
import type { Grafaid } from '../../lib/grafaid/$.js'
import type { TypedFullDocument } from '../../lib/grafaid/typed-full-document/$.js'
import type { SimplifyNullable } from '../../lib/prelude.js'
import type { HandleOutput } from '../handle.js'

// Infer send arguments based on whether document has single or multiple operations
// dprint-ignore
type InferParameters<$Ops extends TypedFullDocument.Operations> =
  HasOneKey<$Ops> extends true
    ? // Single operation - no operation name needed, just variables
      InferSendArguments_<$Ops[keyof $Ops]['variables']>
    : // Multiple operations - operation name required, then conditional variables
      {
        [K in keyof $Ops]: [operation: K, ...InferSendArguments_<$Ops[K]['variables']>]
      }[keyof $Ops]

// dprint-ignore
type InferSendArguments_<
  $Variables extends Grafaid.Document.Typed.Variables,
  ___VariablesKind extends Grafaid.Document.Typed.VariablesInputKind = Grafaid.Document.Typed.GetVariablesInputKind<$Variables>
> =
  ___VariablesKind extends 'none'      ? [] :
  ___VariablesKind extends 'optional'  ? [variables?: $Variables] :
  ___VariablesKind extends 'required'  ? [variables: $Variables] :
                                         never

// Infer return type based on arguments
// dprint-ignore
type InferReturn<$Context, $Ops extends Record<string, TypedFullDocument.OperationMetadata>, $Args extends InferParameters<$Ops>> =
  HasOneKey<$Ops> extends true
    ? // Single operation
      Promise<SimplifyNullable<HandleOutput<$Context, $Ops[keyof $Ops]['result']>>>
    : // Multiple operations - extract operation name from first argument
      $Args extends [infer $OpName extends keyof $Ops, ...any]
        ? Promise<SimplifyNullable<HandleOutput<$Context, $Ops[$OpName]['result']>>>
        : never

/**
 * Send a GraphQL document directly without chaining from `.gql()`.
 *
 * Supports:
 * - TypedDocumentString/TypedDocumentNode (from codegen)
 * - TypedFullDocumentString (from static builders like Graffle.document())
 *
 * @example
 * ```ts
 * // Typed document from codegen
 * const result = await client.send(GetUserDocument, { id: '123' })
 * ```
 *
 * @example
 * ```ts
 * // Static builder document
 * import { Graffle } from './graffle/__.js'
 * const doc = Graffle.document({
 *   query: { getUser: { user: { id: true } } }
 * })
 * const user = await client.send(doc, { id: '123' })
 * ```
 */
export interface SendMethod<$Context> {
  <
    $Operations extends Record<string, TypedFullDocument.OperationMetadata>,
    $parameters extends InferParameters<$Operations>,
  >(
    document: TypedFullDocument.TypedFullDocumentString<$Operations>,
    ...$parameters: $parameters
  ): InferReturn<$Context, $Operations, $parameters>

  // TODO: TypedDocumentString or TypedDocumentNode (existing single-operation types)
  // <$Doc extends Grafaid.Document.Typed.TypedDocumentNodeLike>(
  //   doc: $Doc,
  //   ...args: SendArguments<$Doc>
  // ): Promise<SimplifyNullable<HandleOutput<$Context, Grafaid.Document.Typed.ResultOf<$Doc>>>>

  // TypedFullDocumentString - unified overload for single and multiple operations

  // TODO: Plain string - no type safety
  // (
  //   doc: string,
  //   operationName?: string,
  //   variables?: Grafaid.Document.Typed.Variables,
  // ): Promise<SimplifyNullable<HandleOutput<$Context, Grafaid.Document.Typed.SomeObjectData>>>
}

export namespace SendMethod {
  /**
   * Normalize send() arguments into a consistent shape.
   */
  export const normalizeArguments = (args: any[]) => {
    const doc = args[0] as string

    // Determine if second argument is operation name or variables
    // If it's a string, it's an operation name
    const hasOperationName = typeof args[1] === 'string'

    const operationName = hasOperationName ? args[1] : undefined
    const variables = hasOperationName ? args[2] : args[1]

    return {
      document: doc,
      operationName,
      variables,
    }
  }
}

type HasTwoOrMoreKeys<$Obj extends object> = UnionToTuple<keyof $Obj> extends [string, string, ...string[]] ? true
  : false

type HasOneKey<$Obj extends object> = UnionToTuple<keyof $Obj> extends [string] ? true : false
