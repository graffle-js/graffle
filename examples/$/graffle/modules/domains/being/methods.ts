import { $$query } from 'graffle/extensions/document-builder'

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
export const list = $$query('beings')
