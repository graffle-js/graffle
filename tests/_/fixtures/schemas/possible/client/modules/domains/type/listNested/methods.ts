import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Date}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlscalartype | ScalarCustom ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.dateListList` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const dateListList = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'dateListList', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listListInt` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export const listListInt = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'listListInt', context)

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.listListIntNonNull` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const listListIntNonNull = (context: any) =>
  createRootFieldExecutor(OperationTypeNode.QUERY, 'listListIntNonNull', context)
