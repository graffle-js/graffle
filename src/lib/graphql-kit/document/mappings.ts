import { Ast } from './ast/_.js'

export const RootTypeToOperationType = {
  Query: Ast.OperationType.QUERY,
  Mutation: Ast.OperationType.MUTATION,
  Subscription: Ast.OperationType.SUBSCRIPTION,
} as const

export type RootTypeNameToOperationName = typeof RootTypeToOperationType

export const OperationTypeToAccessKind = {
  query: `read`,
  mutation: `write`,
  subscription: `read`,
} as const
