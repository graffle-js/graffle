import { OperationType } from '../schema/runtime/__.js'

export const RootTypeToOperationType = {
  Query: OperationType.QUERY,
  Mutation: OperationType.MUTATION,
  Subscription: OperationType.SUBSCRIPTION,
} as const

export type RootTypeNameToOperationName = typeof RootTypeToOperationType

export const OperationTypeToAccessKind = {
  query: `read`,
  mutation: `write`,
  subscription: `read`,
} as const
