// Runtime methods for domain organization
import { executeRootField } from '#graffle/extensions/document-builder/methods-instance/requestMethods.js'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainerByName` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const findByName = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'trainerByName', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.trainers` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const list = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'trainers', selectionSetOrArgs)
  }
}
