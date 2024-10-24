/**
 * This is a tree-shakable version of https://github.com/graphql/graphql-js/blob/16.x.x/src/language/kinds.ts
 */

import type { OperationTypeNode as GraphQLOperationTypeNode } from 'graphql'

export type OperationTypeNode = GraphQLOperationTypeNode
export * as OperationTypeNode from './OperationTypeNodes.js'
