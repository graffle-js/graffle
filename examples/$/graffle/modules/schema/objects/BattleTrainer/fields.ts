import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'BattleTrainer'
  }
}

export interface combatant1 {
  kind: 'OutputField'
  name: 'combatant1'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.CombatantSinglePokemon
}

export interface combatant2 {
  kind: 'OutputField'
  name: 'combatant2'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.CombatantSinglePokemon
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
