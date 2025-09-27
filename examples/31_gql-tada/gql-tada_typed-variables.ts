/**
 * gql-tada with Typed Variables
 *
 * This example shows how gql-tada provides type-safe variables
 * for GraphQL queries.
 */

import { Graffle } from '../$/graffle/_exports.js'
import { initGraphQLTada, type VariablesOf } from 'gql.tada'
import type { introspection } from '../$/graffle/modules/tada.js'
import { show } from '../$/helpers.js'

// Initialize gql-tada
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

const graffle = Graffle.create()

// Define a query with variables
const pokemonByNameQuery = graphql(`
  query GetPokemonByName($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      type
      hp
      attack
      defense
      trainer {
        name
      }
    }
  }
`)

// Extract the variables type for type safety
type PokemonQueryVariables = VariablesOf<typeof pokemonByNameQuery>

// This function has type-safe parameters thanks to gql-tada
async function getPokemon(variables: PokemonQueryVariables) {
  return graffle.gql(pokemonByNameQuery).send(variables)
}

// The variables are type-checked!
const pikachu = await getPokemon({
  name: 'Pikachu' // ✅ TypeScript knows this should be a string
})

show('Pikachu:', pikachu)

// This would cause a TypeScript error:
// const invalid = await getPokemon({
//   name: 123 // ❌ Error: Type 'number' is not assignable to type 'string'
// })

// You can also use the variables inline
const charizard = await graffle
  .gql(pokemonByNameQuery)
  .send({
    name: 'Charizard' // Auto-completion works here!
  })

show('Charizard:', charizard)