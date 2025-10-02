import type * as $Fields from './fields.js'

export * as CombatantMultiPokemon from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A combatant in a battle royale with multiple Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
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
