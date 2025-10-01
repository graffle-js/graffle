import type * as $Fields from './fields.js'

export * as CombatantMultiPokemon from './fields.js'

export interface CombatantMultiPokemon {
  kind: 'Object'
  name: 'CombatantMultiPokemon'
  fields: {
    __typename: $Fields.__typename
    pokemons: $Fields.pokemons
    trainer: $Fields.trainer
  }
}
