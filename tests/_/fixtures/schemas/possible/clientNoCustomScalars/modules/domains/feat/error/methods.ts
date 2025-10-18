// Runtime methods for domain organization
import { executeRootField } from '#graffle/extensions/document-builder/methods-instance/requestMethods.js'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.error` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const error = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'error', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Result} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.result` |
 * | **Nullability** | Optional |
 * | **Arguments** | 1 |
 */
export const result = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'result', selectionSetOrArgs)
  }
}

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Result}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.resultNonNull` |
 * | **Nullability** | Required |
 * | **Arguments** | 1 |
 */
export const resultNonNull = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'resultNonNull', selectionSetOrArgs)
  }
}
