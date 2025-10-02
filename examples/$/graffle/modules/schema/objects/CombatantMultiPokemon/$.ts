import type * as $Fields from './fields.js'

export * as CombatantMultiPokemon from './fields.js'

/**
 * A combatant in a battle royale with multiple Pokemon.
 */
export interface CombatantMultiPokemon {
  kind: 'Object'
  name: 'CombatantMultiPokemon'
  fields: {
    __typename: $Fields.__typename
    pokemons: $Fields.pokemons
    trainer: $Fields.trainer
  }
}
