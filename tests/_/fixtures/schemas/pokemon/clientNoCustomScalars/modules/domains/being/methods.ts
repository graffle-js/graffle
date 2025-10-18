import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Being}[]! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.beings` |
 * | **Nullability** | Required |
 * | **List** | Yes |
 */
export const list = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'beings', context)
