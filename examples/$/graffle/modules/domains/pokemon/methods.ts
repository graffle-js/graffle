// Runtime methods for domain organization
import { executeRootField } from 'graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

/**
 * Find Pokemon by their name.
 *
 * ```graphql
 * pokemonByName(name: String!): [Pokemon!]
 *
 * type Pokemon implements Being {
 * attack: Int!
 * birthday: Date!
 * defense: Int!
 * hp: Int!
 * id: ID!
 * name: String!
 * trainer: Trainer
 * type: PokemonType!
 * }
 * ```
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.pokemonByName` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const findByName = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'pokemonByName', selectionSetOrArgs)
  }
}

/**
 * Retrieve all Pokemon, optionally filtered.
 *
 * ```graphql
 * pokemons(filter: PokemonFilter): [Pokemon!]
 *
 * type Pokemon implements Being {
 * attack: Int!
 * birthday: Date!
 * defense: Int!
 * hp: Int!
 * id: ID!
 * name: String!
 * trainer: Trainer
 * type: PokemonType!
 * }
 * ```
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Query} |
 * | **Path** | `Query.pokemons` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 * | **Arguments** | 1 |
 */
export const list = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.QUERY, 'pokemons', selectionSetOrArgs)
  }
}

/**
 * Add a new Pokemon to the database.
 *
 * ```graphql
 * addPokemon(attack: Int, defense: Int, hp: Int, name: String!, type: PokemonType!): Pokemon
 *
 * type Pokemon implements Being {
 * attack: Int!
 * birthday: Date!
 * defense: Int!
 * hp: Int!
 * id: ID!
 * name: String!
 * trainer: Trainer
 * type: PokemonType!
 * }
 * ```
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
 * | **Parent** | {@link $Schema.Mutation} |
 * | **Path** | `Mutation.addPokemon` |
 * | **Nullability** | Optional |
 * | **Arguments** | 5 |
 */
export const create = (context: any) => {
  return (selectionSetOrArgs?: any) => {
    return executeRootField(context, OperationTypeNode.MUTATION, 'addPokemon', selectionSetOrArgs)
  }
}
