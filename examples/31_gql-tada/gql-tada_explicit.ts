/**
 * Explicit gql-tada Integration
 *
 * This example shows how to explicitly initialize and use gql-tada
 * with a generated Graffle client for compile-time type-safe GraphQL queries.
 */

import { initGraphQLTada } from 'gql.tada'
import { Graffle } from '../$/graffle/_namespace.js'
import type { introspection } from '../$/graffle/modules/tada.js'
import { show } from '../$/helpers.js'

// Initialize gql-tada with Graffle's generated introspection types
const gql = initGraphQLTada<{
  introspection: introspection
}>()

// Create the Graffle client
const graffle = Graffle.create()

// Define a type-safe query using gql-tada
const pokemonsQuery = gql(`
  query GetPokemons {
    pokemons {
      id
      name
      hp
      attack
      defense
    }
  }
`)

// Execute the query with Graffle
const result = await graffle.gql(pokemonsQuery).send()

// The result is fully typed!
// TypeScript knows exactly what fields are available
show(result)

// Type-safe access to the data
result?.pokemons?.forEach(pokemon => {
  console.log(`${pokemon.name}: HP=${pokemon.hp}, Attack=${pokemon.attack}`)
})
