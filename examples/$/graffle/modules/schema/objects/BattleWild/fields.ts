import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'BattleWild'
  }
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

export interface pokemon {
  kind: 'OutputField'
  name: 'pokemon'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Pokemon
}

export interface result {
  kind: 'OutputField'
  name: 'result'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.BattleWildResult
}

export interface trainer {
  kind: 'OutputField'
  name: 'trainer'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}

export interface wildPokemons {
  kind: 'OutputField'
  name: 'wildPokemons'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Pokemon
}
