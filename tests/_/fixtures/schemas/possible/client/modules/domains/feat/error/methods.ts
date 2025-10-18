import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
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
export const error = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'error', context)

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
export const result = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'result', context)

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
export const resultNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'resultNonNull', context)
