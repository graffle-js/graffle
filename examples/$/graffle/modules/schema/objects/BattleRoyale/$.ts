import type { Schema as $Schema } from '../../$.js'
import type * as $Fields from './fields.js'

export * as BattleRoyale from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A battle royale where multiple trainers compete with their Pokemon teams.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 4 |
 */
export interface BattleRoyale {
  kind: 'Object'
  name: 'BattleRoyale'
  fields: {
    __typename: $Fields.__typename
    combatants: $Fields.combatants
    date: $Fields.date
    id: $Fields.id
    winner: $Fields.winner
  }
}
