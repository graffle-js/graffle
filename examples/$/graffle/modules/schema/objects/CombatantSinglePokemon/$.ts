import type * as $Fields from './fields.js'

export * as CombatantSinglePokemon from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A combatant in a one-on-one battle with a single Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 2 |
 */
export interface CombatantSinglePokemon {
  kind: 'Object'
  name: 'CombatantSinglePokemon'
  fields: {
    __typename: $Fields.__typename
    pokemon: $Fields.pokemon
    trainer: $Fields.trainer
  }
}
