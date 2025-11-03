/**
 * Runtime operation type values and type utilities
 */

import type { OperationTypeNode } from 'graphql'

export const QUERY = `query`
export type QUERY = typeof QUERY

export const MUTATION = `mutation`
export type MUTATION = typeof MUTATION

export const SUBSCRIPTION = `subscription`
export type SUBSCRIPTION = typeof SUBSCRIPTION

export type OperationType = QUERY | MUTATION | SUBSCRIPTION

// dprint-ignore
export type FromString<$OperationTypeString extends string> =
    $OperationTypeString extends 'mutation'       ? MUTATION
  : $OperationTypeString extends 'subscription'   ? SUBSCRIPTION
  : $OperationTypeString extends 'query'          ? QUERY
  : never

export type OperationTypeStringToNode<$OperationTypeString extends string> = $OperationTypeString extends 'mutation'
  ? OperationTypeNode.MUTATION
  : $OperationTypeString extends 'subscription' ? OperationTypeNode.SUBSCRIPTION
  : $OperationTypeString extends 'query' ? OperationTypeNode.QUERY
  : never
