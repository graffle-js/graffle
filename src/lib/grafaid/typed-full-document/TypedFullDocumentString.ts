import type { SomeObjectData, Variables } from '../graphql.js'

export type Operations = Record<string, OperationMetadata>

/**
 * Metadata for a single operation within a full document.
 */
export type OperationMetadata = {
  readonly result: SomeObjectData
  readonly variables: Variables
}

/**
 * A typed GraphQL document string containing one or more named operations.
 *
 * Unlike TypedDocumentString which represents a single operation, this type
 * captures complete type information for all operations in a document via
 * the $Operations object parameter, where keys are operation names.
 *
 * Created by static builders like Graffle.document() and consumed by client.send().
 *
 * @example
 * ```typescript
 * type MyDoc = TypedFullDocumentString<{
 *   getUser: { result: { user: { id: string } }, variables: { id: string } },
 *   updateUser: { result: { updateUser: { id: string } }, variables: { id: string, name: string } }
 * }>
 * ```
 */
export interface TypedFullDocumentString<
  $__operations extends object = Operations,
> // $__operations extends { [_ in keyof $__operations]: OperationMetadata },
  extends String
{
  /**
   * Phantom type parameter containing operation metadata.
   * Used purely for type-level computation - never exists at runtime.
   *
   * Note: This is required (not optional) to make TypedFullDocumentString
   * structurally distinct from plain string for overload resolution.
   */
  readonly __operations: $__operations
}
