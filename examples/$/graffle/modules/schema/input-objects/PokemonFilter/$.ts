import type * as $Fields from './fields.js'

export * as PokemonFilter from './fields.js'

export interface PokemonFilter {
  kind: 'InputObject'
  name: 'PokemonFilter'
  isAllFieldsNullable: true
  fields: {
    birthday: $Fields.birthday
    name: $Fields.name
    type: $Fields.type
  }
}
