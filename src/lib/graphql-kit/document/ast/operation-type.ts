/**
 * Tree-shakable version of OperationTypeNode from graphql-js
 * @see https://github.com/graphql/graphql-js/blob/16.x.x/src/language/ast.ts#L326-L331
 */

import type { OperationTypeNode as OperationType } from 'graphql'

export type { OperationTypeNode as OperationType } from 'graphql'

export const QUERY = `query` as OperationType.QUERY
export type QUERY = OperationType.QUERY

export const MUTATION = `mutation` as OperationType.MUTATION
export type MUTATION = OperationType.MUTATION

export const SUBSCRIPTION = `subscription` as OperationType.SUBSCRIPTION
export type SUBSCRIPTION = OperationType.SUBSCRIPTION

// dprint-ignore
export type FromString<$OperationTypeString extends string> =
    $OperationTypeString extends 'mutation'       ? typeof OperationType.MUTATION
  : $OperationTypeString extends 'subscription'   ? typeof OperationType.SUBSCRIPTION
  : $OperationTypeString extends 'query'          ? typeof OperationType.QUERY
  : never

export type OperationTypeStringToNode<$OperationTypeString extends string> = $OperationTypeString extends 'mutation'
  ? typeof OperationType.MUTATION
  : $OperationTypeString extends 'subscription' ? typeof OperationType.SUBSCRIPTION
  : $OperationTypeString extends 'query' ? typeof OperationType.QUERY
  : never
