import type { Schema as $Schema } from '../../$.js'

export interface birthday {
  kind: 'InputField'
  name: 'birthday'
  inlineType: [0]
  namedType: $Schema.DateFilter
}

export interface name {
  kind: 'InputField'
  name: 'name'
  inlineType: [0]
  namedType: $Schema.StringFilter
}

export interface type {
  kind: 'InputField'
  name: 'type'
  inlineType: [0]
  namedType: $Schema.PokemonType
}
