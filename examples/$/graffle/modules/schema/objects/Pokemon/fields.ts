import type { Schema as $Schema } from '../../$.js'

export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'Pokemon'
  }
}

export interface attack {
  kind: 'OutputField'
  name: 'attack'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Int
}

export interface birthday {
  kind: 'OutputField'
  name: 'birthday'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Date
}

export interface defense {
  kind: 'OutputField'
  name: 'defense'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Int
}

export interface hp {
  kind: 'OutputField'
  name: 'hp'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.Int
}

export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.ID
}

export interface name {
  kind: 'OutputField'
  name: 'name'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.String
}

export interface trainer {
  kind: 'OutputField'
  name: 'trainer'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}

export interface type {
  kind: 'OutputField'
  name: 'type'
  arguments: {}
  inlineType: [1]
  namedType: $Schema.PokemonType
}
