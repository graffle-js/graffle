import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'BattleRoyale'
  }
}

export interface combatants {
  kind: 'OutputField'
  name: 'combatants'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.CombatantMultiPokemon
}

export interface date {
  kind: 'OutputField'
  name: 'date'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Float
}

export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

export interface winner {
  kind: 'OutputField'
  name: 'winner'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}
