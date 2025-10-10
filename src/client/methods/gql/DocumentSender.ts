import type { Grafaid } from '#lib/grafaid'
import type { Ts } from '@wollybeard/kit'
import type { TypedFullDocument } from '../../../lib/grafaid/typed-full-document/$.js'
import type { HandleOutput } from '../../handle.js'

/**
 * Builder returned from `client.gql()` that provides operation methods.
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
export type DocumentSender<$Doc extends Grafaid.Document.Typed.TypedDocumentLike, $Context> =
  // Check if document has type information (__operations property)
  $Doc extends { __operations: infer $Ops }
    ? $Ops extends TypedFullDocument.Operations
      ? keyof $Ops extends never
        ? UntypedDocumentSender<$Context>                // Empty operations = untyped
        : TypedDocumentSender<{ __operations: $Ops }, $Context>  // Has operations = typed
      : UntypedDocumentSender<$Context>
    : UntypedDocumentSender<$Context> // No __operations = untyped (plain string or DocumentNode)

/**
 * Sender for untyped documents (plain GraphQL strings).
 *
 * Provides generic `.$send()` signature that accepts any operation name and variables.
 */
export interface UntypedDocumentSender<$Context> {
  /**
   * Execute a GraphQL operation from an untyped document.
   *
   * @param operationName - Optional operation name (omit for single unnamed operations)
   * @param variables - Optional variables object (untyped but constrained to records)
   *
   * @example
   * ```ts
   * // Single operation - name optional
   * await client.gql('query { id }').$send()
   *
   * // Named operation
   * await client.gql('mutation ResetData { resetData }').$send('ResetData')
   *
   * // With variables
   * await client.gql('mutation($id: ID!) { delete(id: $id) }').$send({ id: '123' })
   * await client.gql('mutation($id: ID!) { delete(id: $id) }').$send('DeleteItem', { id: '123' })
   * ```
   */
  $send(operationName?: string, variables?: Record<string, unknown>): Promise<unknown>
  $send(variables?: Record<string, unknown>): Promise<unknown>
}

/**
 * Sender for typed documents (gql-tada, TypedDocumentNode, etc).
 *
 * Provides type-safe operation methods and `.$send()`.
 */
export type TypedDocumentSender<
  $Doc extends { __operations: TypedFullDocument.Operations },
  $Context,
> =
  & {
    /**
     * Execute an operation by name with full type safety.
     *
     * @example
     * ```ts
     * await builder.$send('GetUser', { id: '123' })
     * ```
     */
    $send<$OpName extends keyof $Doc['__operations']>(
      operationName: $OpName,
      ...variables: InferSendArgs<$Doc['__operations'][$OpName]['variables']>
    ): Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Doc['__operations'][$OpName]['result']>>>
  }
  & {
    [k in keyof $Doc['__operations']]: ExtractOperation<$Doc['__operations'], k> extends
      { result: infer $R; variables: infer $V }
      ? OperationMethod<$Context, $R & Grafaid.SomeObjectData, $V & Grafaid.Document.Typed.Variables>
      : never
  }

/**
 * Type for a single operation method.
 *
 * The signature varies based on variable requirements:
 * - No variables: `() => Promise<Result>`
 * - Optional variables: `(variables?: Variables) => Promise<Result>`
 * - Required variables: `(variables: Variables) => Promise<Result>`
 */
// dprint-ignore
export type OperationMethod<$Context, $Result extends Grafaid.SomeObjectData, $Variables extends Grafaid.Document.Typed.Variables> =
  Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'none'
    ? () => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
  : Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'optional'
    ? (variables?: $Variables) => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
  : Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'required'
    ? (variables: $Variables) => Promise<Ts.SimplifyNullable<HandleOutput<$Context, $Result>>>
  : never

/**
 * Infer the arguments for the `.$send()` method based on variable requirements.
 *
 * Returns a tuple type representing the rest parameters.
 */
// dprint-ignore
type InferSendArgs<$Variables extends Grafaid.Document.Typed.Variables> =
  Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'none' ? []
  : Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'optional' ? [variables?: $Variables]
  : Grafaid.Document.Typed.GetVariablesInputKind<$Variables> extends 'required' ? [variables: $Variables]
  : never

// Helper type to extract operation metadata (works around TS limitations with indexed types)
type ExtractOperation<$Ops, $Key> = $Ops extends Record<string, infer $OpMeta>
  ? $OpMeta extends { result: infer $R; variables: infer $V } ? { result: $R; variables: $V }
  : never
  : never

/**
 * Create a DocumentSender instance with Proxy-based operation methods.
 *
 * @param executeOperation - Callback to execute an operation through the request pipeline
 * @returns A DocumentSender with operation methods and `.$send()`
 */
export const createDocumentSender = <$Doc extends Grafaid.Document.Typed.TypedDocumentLike, $Context>(
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
