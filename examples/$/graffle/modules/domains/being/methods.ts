// Runtime methods for domain organization
import { executeRootField } from 'graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * Retrieve all beings (Pokemon, Trainers, and Patrons).
 *
 * ```graphql
 * beings: [Being!]!
 *
 * interface Being {
 * id: ID
 * name: String
 * }
 * ```
 *
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
export const list = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'beings', selectionSetOrArgs)
  }
}
