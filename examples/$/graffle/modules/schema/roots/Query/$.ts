import type { Schema as $Schema } from '../../$.js'
import type * as $Fields from './fields.js'

export * as Query from './fields.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 *
 * Root query type for fetching Pokemon data.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object} ↗ |
 * | **Fields** | 6 |
 */
export interface Query {
  kind: 'Object'
  name: 'Query'
  fields: {
    __typename: $Fields.__typename
    battles: $Fields.battles
    beings: $Fields.beings
    pokemonByName: $Fields.pokemonByName
    pokemons: $Fields.pokemons
    trainerByName: $Fields.trainerByName
    trainers: $Fields.trainers
  }
}
