/**
 * This is a tree-shakable version of https://github.com/graphql/graphql-js/blob/16.x.x/src/language/ast.ts#L326-L331
 */

import type { OperationTypeNode as GraphQLOperationTypeNode } from 'graphql'

export const QUERY = `query` as GraphQLOperationTypeNode.QUERY
export const MUTATION = `mutation` as GraphQLOperationTypeNode.MUTATION
export const SUBSCRIPTION = `subscription` as GraphQLOperationTypeNode.SUBSCRIPTION

// dprint-ignore
export type FromString<$OperationTypeString extends string> =
    $OperationTypeString extends 'mutation'       ? typeof GraphQLOperationTypeNode.MUTATION
  : $OperationTypeString extends 'subscription'   ? typeof GraphQLOperationTypeNode.SUBSCRIPTION
  : $OperationTypeString extends 'query'          ?  typeof GraphQLOperationTypeNode.QUERY
  : never
