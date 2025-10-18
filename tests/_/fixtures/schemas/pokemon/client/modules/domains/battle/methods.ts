import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Battle}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.battles` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const list = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'battles', context)
