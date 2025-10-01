import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'CombatantMultiPokemon'
  }
}

export interface pokemons {
  kind: 'OutputField'
  name: 'pokemons'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Pokemon
}

export interface trainer {
  kind: 'OutputField'
  name: 'trainer'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}
