/**
 * Core operation types for GraphQL documents.
 */

/**
 * Record of operations in a GraphQL document.
 * Each key is an operation name, each value contains result and variables types.
 */
export type Operations = Record<string, Operation>

export type OperationResult = object

export type OperationName = string | undefined

export type OperationVariables = object

export interface Operation<
  $Name extends OperationName = OperationName,
  $Result extends OperationResult = OperationResult,
  $Variables extends OperationVariables = OperationVariables,
> {
  name: $Name
  // todo
  // type: 'query' | 'mutation' | 'subscription'
  result: $Result
  variables: $Variables
}
