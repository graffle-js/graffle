import * as OperationTypeNode from './ast/operation-type.js'

export const RootTypeToOperationType = {
  Query: OperationTypeNode.QUERY,
  Mutation: OperationTypeNode.MUTATION,
  Subscription: OperationTypeNode.SUBSCRIPTION,
} as const

export type RootTypeNameToOperationName = typeof RootTypeToOperationType

export const OperationTypeToAccessKind = {
  query: `read`,
  mutation: `write`,
  subscription: `read`,
} as const
