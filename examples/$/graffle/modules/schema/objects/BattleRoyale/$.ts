import type * as $Fields from './fields.js'

export * as BattleRoyale from './fields.js'

/**
 * A battle royale where multiple trainers compete with their Pokemon teams.
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
