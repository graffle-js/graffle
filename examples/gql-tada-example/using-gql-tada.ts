/**
 * gql-tada Integration Example
 *
 * This example demonstrates that Graffle generates gql-tada compatible
 * introspection types, enabling type-safe GraphQL template literals.
 */

import { initGraphQLTada } from 'gql.tada'
import { Graffle } from './graffle/_exports.js'
import type { introspection } from './graffle/modules/tada.js'

// Initialize gql-tada with Graffle's generated introspection types
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

// Create the Graffle client
const client = Graffle.create()

// Define a typed query using gql-tada
const pokemonQuery = graphql(`
  query GetPokemon($name: String!) {
    pokemonByName(name: $name) {
      id
      name
      hp
      attack
      defense
      trainer {
        name
      }
    }
  }
`)

// Use the typed query with Graffle's .gql method
async function main() {
  console.log('🎯 Using gql-tada with Graffle\n')

  // The gql-tada TypedDocumentNode works seamlessly with Graffle
  const result = await client
    .gql(pokemonQuery)
    .send({ name: 'Pikachu' }) // Variables are type-checked!

  // Result is fully typed
  const pokemon = result?.pokemonByName?.[0]
  if (pokemon) {
    console.log(`Found: ${pokemon.name}`)
    console.log(`Stats: HP=${pokemon.hp}, Attack=${pokemon.attack}, Defense=${pokemon.defense}`)
    if (pokemon.trainer) {
      console.log(`Trainer: ${pokemon.trainer.name}`)
    }
  }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error)
}

export { main }
