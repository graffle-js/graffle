import type * as $Fields from './fields.js'

export * as BattleRoyale from './fields.js'

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
