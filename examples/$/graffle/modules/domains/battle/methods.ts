import { $$query } from 'graffle/extensions/document-builder'

/**
 * Retrieve all battles that have occurred.
 *
 * ```graphql
 * battles: [Battle!]!
 *
 * union Battle = BattleRoyale | BattleTrainer | BattleWild
 * ```
 *
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
export const list = $$query('battles')
