import type { Grafaid } from '#lib/grafaid'
import type { Configuration } from '#src/context/fragments/configuration/$.js'
import type * as TypedFullDocument from '#src/docpar/typed-full-document.js'
import type { GetVariablesInputKind, ResultOf, VariablesOf } from '#src/lib/grafaid/typed-document/TypedDocument.js'
import type { Ts } from '@wollybeard/kit'
import type { HandleOutput } from '../../handle.js'

export type DocumentInput =
  | Grafaid.Document.Typed.TypedDocumentLike
  | TypedFullDocument.TypedFullDocument

// ================================================================================================
// STATIC EXECUTORS - Function signatures for $send method
// ================================================================================================

/**
 * Convert an operation to its static executor type (for `$send` method).
 * Distributes over unions to create overloads.
 */
type OperationToStaticExecutor<
  $Op extends TypedFullDocument.Operation,
  $Context,
  // @ts-expect-error - todo: loosen constraint on vars
  ___$VarKind = GetVariablesInputKind<$Op['variables']>,
> = ___$VarKind extends 'none' ? SingleOpNoVarsStaticExecutor<$Op, $Context>
  : ___$VarKind extends 'optional' ? SingleOpOptionalVarsStaticExecutor<$Op, $Context>
  : ___$VarKind extends 'required' ? SingleOpRequiredVarsStaticExecutor<$Op, $Context>
  : never

/**
 * Static executor for single operation with no variables.
 * Supports calling without operation name or with operation name.
 */
export interface SingleOpNoVarsStaticExecutor<$Op extends TypedFullDocument.Operation, $Context> {
  (operationName?: $Op['name']): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Op['result']>>>
}

/**
 * Static executor for single operation with optional variables.
 * Supports multiple call patterns.
 */
export interface SingleOpOptionalVarsStaticExecutor<
  $Op extends TypedFullDocument.Operation,
  $Context,
  ___$Return = Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Op['result']>>>,
> {
  (): ___$Return
  (variables?: $Op['variables']): ___$Return
  (operationName: $Op['name'], variables?: $Op['variables']): ___$Return
}

/**
 * Static executor for single operation with required variables.
 */
export interface SingleOpRequiredVarsStaticExecutor<
  $Op extends TypedFullDocument.Operation,
  $Context,
  ___$Return = Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Op['result']>>>,
> {
  (variables: $Op['variables']): ___$Return
  (operationName: $Op['name'], variables: $Op['variables']): ___$Return
}

/**
 * Static executor for untyped documents (plain GraphQL strings).
 * Accepts any operation name and variables.
 */
export interface UntypedStaticExecutor {
  (operationName?: string, variables?: Record<string, unknown>): Promise<unknown>
  (variables?: Record<string, unknown>): Promise<unknown>
}

// ================================================================================================
// MULTI-OPERATION EXECUTOR - Single generic signature for multi-op $send method
// ================================================================================================

/**
 * Multi-op static executor using generic signature with conditional types.
 * This approach allows proper discrimination based on operation name.
 */
export interface MultiOpStaticExecutor<$Operations extends TypedFullDocument.Operations, $Context> {
  <$OpName extends keyof $Operations & string>(
    operationName: $OpName,
    // @ts-expect-error - todo: loosen constraint on vars
    ...variables: GetVariablesInputKind<$Operations[$OpName]['variables']> extends 'none' ? []
      // @ts-expect-error - todo: loosen constraint on vars
      : GetVariablesInputKind<$Operations[$OpName]['variables']> extends 'optional'
        ? [variables?: $Operations[$OpName]['variables']]
      : [variables: $Operations[$OpName]['variables']]
  ): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Operations[$OpName]['result']>>>
}

// ================================================================================================
// NAMED EXECUTORS - Function signatures for operation methods
// ================================================================================================

/**
 * Convert an operation to its named executor type (for operation method).
 * Named executors don't take operation name as parameter.
 */
type OperationToNamedExecutor<
  $Op extends TypedFullDocument.Operation,
  $Context,
  // @ts-expect-error - todo: loosen constraint on vars
  ___$VarKind = GetVariablesInputKind<$Op['variables']>,
> = ___$VarKind extends 'none' ? NoVarsNamedExecutor<$Context, $Op['result']>
  : ___$VarKind extends 'optional' ? OptionalVarsNamedExecutor<$Context, $Op['result'], $Op['variables']>
  : ___$VarKind extends 'required' ? RequiredVarsNamedExecutor<$Context, $Op['result'], $Op['variables']>
  : never

/**
 * Named executor for operations with no variables.
 * Operation name is encoded in the method itself.
 */
export interface NoVarsNamedExecutor<$Context, $Result extends Grafaid.SomeObjectData> {
  (): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
}

/**
 * Named executor for operations with optional variables.
 * Operation name is encoded in the method itself.
 */
export interface OptionalVarsNamedExecutor<
  $Context,
  $Result extends Grafaid.SomeObjectData,
  $Variables,
> {
  (variables?: $Variables): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
}

/**
 * Named executor for operations with required variables.
 * Operation name is encoded in the method itself.
 */
export interface RequiredVarsNamedExecutor<
  $Context,
  $Result extends Grafaid.SomeObjectData,
  $Variables,
> {
  (variables: $Variables): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
}

// ================================================================================================
// SENDERS - Objects with $send executor and operation methods
// ================================================================================================

/**
 * Object returned from `client.gql()` that provides operation methods.
 *
 * - For **typed documents** (gql-tada, TypedDocumentNode), each operation becomes a method
 * - For **untyped documents** (plain strings), only `.$send()` is available with generic signature
 *
 * @example
 * ```ts
 * // Typed document - operation methods available
 * const doc = graphql('query GetUser($id: ID!) { user(id: $id) { name } }')
 * await client.gql(doc).GetUser({ id: '123' })
 *
 * // Plain string - fallback .$send() signature
 * await client.gql('query { id }').$send()
 * await client.gql('mutation { resetData }').$send('resetData')
 * ```
 */
// dprint-ignore
export type DocumentSender<$Doc extends DocumentInput, $Context> =
$Doc extends TypedFullDocument.TypedFullDocument
  ? Sender<$Doc, $Context>
  : $Doc extends string
    ? UntypedSender<$Context>
    : $Doc extends Grafaid.Document.Typed.TypedDocumentLike
      ? TypedDocumentLikeSender<ResultOf<$Doc>, VariablesOf<$Doc>, $Context>
      : UntypedSender<$Context>

type Sender<
  $Doc extends TypedFullDocument.TypedFullDocument,
  $Context,
> =
  & SenderStatic<$Doc, $Context>
  & SenderNamed<$Doc, $Context>

type SenderStatic<
  $Doc extends TypedFullDocument.TypedFullDocument,
  $Context,
> = $Doc extends TypedFullDocument.SingleOperation<infer $Op extends TypedFullDocument.Operation>
  ? { $send: Configuration.Check.Preflight<$Context, OperationToStaticExecutor<$Op, $Context>> }
  : $Doc extends TypedFullDocument.MultiOperation<infer $Operations extends TypedFullDocument.Operations>
    ? { $send: Configuration.Check.Preflight<$Context, MultiOpStaticExecutor<$Operations, $Context>> }
  : never

type SenderNamed<
  $Doc extends TypedFullDocument.TypedFullDocument,
  $Context,
> = {
  [k in keyof $Doc['__operations']]: Configuration.Check.Preflight<
    $Context,
    OperationToNamedExecutor<$Doc['__operations'][k], $Context>
  >
}

/**
 * Sender for untyped documents (plain GraphQL strings).
 */
export interface UntypedSender<$Context = any> {
  $send: Configuration.Check.Preflight<$Context, UntypedStaticExecutor>
}

// ================================================================================================
// TYPED DOCUMENT LIKE SENDER (gql-tada, TypedDocumentNode)
// ================================================================================================

/**
 * Sender for TypedDocumentLike (gql-tada, TypedDocumentNode).
 * These have result and variable types but no operation names in the type system.
 * Only `.$send()` is available (no named operation methods).
 */
type TypedDocumentLikeSender<
  $Result extends Grafaid.SomeObjectData,
  $Variables extends Grafaid.Variables,
  $Context,
  ___$VarKind = GetVariablesInputKind<$Variables>,
  ___$SendMethod = ___$VarKind extends 'none' ? (() => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>)
    : ___$VarKind extends 'optional'
      ? ((variables?: $Variables) => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>)
    : ((variables: $Variables) => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>),
> = {
  $send: Configuration.Check.Preflight<$Context, ___$SendMethod>
}

// ================================================================================================
// RUNTIME IMPLEMENTATION
// ================================================================================================

/**
 * Create a DocumentSender instance with Proxy-based operation methods.
 *
 * @param executeOperation - Callback to execute an operation through the request pipeline
 * @returns A DocumentSender with operation methods and `.$send()`
 */
export const createDocumentSender = <$Doc extends DocumentInput, $Context>(
  executeOperation: (opName: string | undefined, variables?: any) => Promise<any>,
): DocumentSender<$Doc, $Context> => {
  const builder = {
    $send: (operationNameOrVariables?: string | any, variables?: any) => {
      // Handle overloads:
      // 1. $send() - no args
      // 2. $send(variables) - object as first arg
      // 3. $send(operationName) - string as first arg
      // 4. $send(operationName, variables) - string and object
      if (typeof operationNameOrVariables === 'string') {
        return executeOperation(operationNameOrVariables, variables)
      } else {
        return executeOperation(undefined, operationNameOrVariables)
      }
    },
  }

  return new Proxy(builder, {
    get(target, prop) {
      // Return the .$send method
      if (prop === '$send') {
        return target.$send
      }

      // For any other string property, return a function that executes the operation
      if (typeof prop === 'string') {
        return (variables?: any) => executeOperation(prop, variables)
      }

      return undefined
    },
  }) as any
}
