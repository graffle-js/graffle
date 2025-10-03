import type * as $Fields from './fields.js'

export * as BattleWild from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * A battle between a trainer and wild Pokemon.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 6 |
 */
export interface BattleWild {
  kind: 'Object'
  name: 'BattleWild'
  fields: {
    __typename: $Fields.__typename
    date: $Fields.date
    id: $Fields.id
    pokemon: $Fields.pokemon
    result: $Fields.result
    trainer: $Fields.trainer
    wildPokemons: $Fields.wildPokemons
  }
}
