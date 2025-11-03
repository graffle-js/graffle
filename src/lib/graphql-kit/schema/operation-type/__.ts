import type { Ts } from '@wollybeard/kit'
import { OperationTypeNode } from 'graphql'

export const QUERY = OperationTypeNode.QUERY
export type QUERY = typeof OperationTypeNode.QUERY

export const MUTATION = OperationTypeNode.MUTATION
export type MUTATION = typeof OperationTypeNode.MUTATION

export const SUBSCRIPTION = OperationTypeNode.SUBSCRIPTION
export type SUBSCRIPTION = typeof OperationTypeNode.SUBSCRIPTION

export type OperationType = OperationTypeNode

// dprint-ignore
export type FromString<$OperationTypeString extends string> =
    $OperationTypeString extends 'mutation'       ? MUTATION
  : $OperationTypeString extends 'subscription'   ? SUBSCRIPTION
  : $OperationTypeString extends 'query'          ? QUERY
  // TODO: Would prefer StaticError in the error case for better error messages, but currently too disruptive:
  // The `operationType & string` in Parse.ts line 37 widens literal types to generic `string`,
  // causing FromString to return OperationTypeNode | StaticError union, which breaks constraint checks.
  // We should push the GraphQL enum as far to edges as possible and keep internal types as string literals.
  //
  //                                              : Ts.Err.StaticError<'Unknown operation type given', { value: $OperationTypeString }>
                                                  : never

export const LookupFromRootType = {
  Query: QUERY,
  Mutation: MUTATION,
  Subscription: SUBSCRIPTION,
} as const

export type LookupFromRootType = typeof LookupFromRootType

export const LookupToAccessKind = {
  query: `read`,
  mutation: `write`,
  subscription: `read`,
} as const
