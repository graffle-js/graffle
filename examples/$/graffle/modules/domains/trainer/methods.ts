// Runtime methods for domain organization
import { executeRootField } from 'graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * Find a trainer by their name.
 *
 * ```graphql
 * trainerByName(name: String!): Trainer
 *
 * type Trainer implements Being {
 * class: TrainerClass
 * fans: [Patron!]
 * id: ID
 * name: String
 * pokemon: [Pokemon!]
 * }
 * ```
 *
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
 * Retrieve all trainers.
 *
 * ```graphql
 * trainers: [Trainer!]
 *
 * type Trainer implements Being {
 * class: TrainerClass
 * fans: [Patron!]
 * id: ID
 * name: String
 * pokemon: [Pokemon!]
 * }
 * ```
 *
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
