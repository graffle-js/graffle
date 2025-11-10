import type * as $Fields from './fields.js'

export * as BattleTrainer from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 5 |
 */
export interface BattleTrainer {
  kind: 'Object'
  name: 'BattleTrainer'
  fields: {
    __typename: $Fields.__typename
    combatant1: $Fields.combatant1
    combatant2: $Fields.combatant2
    date: $Fields.date
    id: $Fields.id
    winner: $Fields.winner
  }
}
