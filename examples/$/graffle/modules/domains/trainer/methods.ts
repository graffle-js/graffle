import { $$query } from 'graffle/extensions/document-builder'

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
export const findByName = $$query('trainerByName')

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
export const list = $$query('trainers')
