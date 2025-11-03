/**
 * Runtime operation type values and type utilities
 */

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
