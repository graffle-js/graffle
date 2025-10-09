/**
 * Example demonstrating gql-tada integration with Graffle
 *
 * This shows how gql-tada's typed template literals can provide
 * compile-time type safety for Graffle's .gql method.
 */

import { initGraphQLTada, type ResultOf, type VariablesOf } from 'gql.tada'
import { Graffle } from 'graffle'
import type { introspection } from './graphql-env.d.ts'

// Initialize gql-tada with the schema introspection
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

// Create a Graffle client
const graffle = Graffle
  .create()
  .transport({
    url: 'https://graphql-pokemon2.vercel.app',
  })

/**
 * MAIN DEMONSTRATION:
 * Using gql-tada's graphql template literal with Graffle's .gql method
 *
 * The key insight is that gql-tada produces TypedDocumentNode instances,
 * which Graffle already accepts through its TypedDocumentLike interface.
 */

// Step 1: Define a typed query using gql-tada
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
      type
    }
  }
`)

// Step 2: Use it with Graffle's .gql method
// The TypedDocumentNode from gql-tada is compatible with Graffle!
async function fetchPokemonWithTypes() {
  const result = await graffle
    .gql(pokemonQuery) // ← gql-tada's TypedDocumentNode works here!
    .send({
      name: 'Pikachu', // ← Type-safe variables (auto-completion works)
    })

  // result is fully typed!
  // TypeScript knows the exact shape of the response
  // Note: pokemonByName returns an array of Pokemon
  const pokemons = result?.pokemonByName
  if (pokemons && pokemons.length > 0) {
    const pokemon = pokemons[0]!
    console.log('Pokemon:', pokemon.name) // string
    console.log('HP:', pokemon.hp) // number
    console.log('Trainer:', pokemon.trainer?.name) // string | undefined

    // This would cause a TypeScript error:
    // console.log(pokemon.invalidField) // ← Error: Property 'invalidField' does not exist
  }

  return result
}

/**
 * Alternative: Using gql-tada inline with template literals
 * This shows the direct template literal usage with type checking
 */
async function _fetchPokemonInline() {
  // You can also write the query inline and get full type safety
  const result = await graffle.gql(
    graphql(`
      query GetPikachu {
        pokemonByName(name: "Pikachu") {
          id
          name
          hp
          type
        }
      }
    `),
  ).send() // No variables needed for this query

  // TypeScript knows the exact structure
  const pokemons = result?.pokemonByName
  if (pokemons && pokemons.length > 0) {
    const pokemon = pokemons[0]!
    console.log(`${pokemon.name} has ${pokemon.hp} HP`)
    console.log(`Type: ${pokemon.type}`)
  }

  return result
}

/**
 * Example mutation with gql-tada
 */
const addPokemonMutation = graphql(`
  mutation AddPokemon($name: String!, $type: PokemonType!, $hp: Int, $attack: Int, $defense: Int) {
    addPokemon(name: $name, type: $type, hp: $hp, attack: $attack, defense: $defense) {
      id
      name
      hp
      type
    }
  }
`)

/**
 * Type inference examples
 * gql-tada automatically infers these types from the GraphQL document
 */
type GetPokemonVariables = VariablesOf<typeof pokemonQuery>
type GetPokemonResult = ResultOf<typeof pokemonQuery>
type AddPokemonVariables = VariablesOf<typeof addPokemonMutation>
type AddPokemonResult = ResultOf<typeof addPokemonMutation>

// Type assertions to demonstrate the inference works
const _queryVars: GetPokemonVariables = { name: 'Pikachu' }
const _queryResult: GetPokemonResult = {
  pokemonByName: [
    {
      id: '1',
      name: 'Pikachu',
      hp: 35,
      attack: 55,
      defense: 40,
      trainer: { name: 'Ash' },
      type: 'electric',
    },
  ],
}

const _mutationVars: AddPokemonVariables = {
  name: 'Charizard',
  type: 'fire',
  hp: 78,
  attack: 84,
  defense: 78,
}

const _mutationResult: AddPokemonResult = {
  addPokemon: {
    id: '1',
    name: 'Charizard',
    hp: 78,
    type: 'fire',
  },
}

/**
 * Demonstration of type errors
 * Uncomment these to see TypeScript errors from invalid queries
 */

// This would error at compile time - invalid field:
// const invalidQuery = graphql(`
//   query Invalid {
//     pokemonByName(name: "Pikachu") {
//       invalidField  // ← TypeScript error: Field doesn't exist
//     }
//   }
// `)

// This would error at compile time - wrong variable type:
// const wrongVarQuery = graphql(`
//   query WrongVar($name: Int!) {  // ← name should be String!
//     pokemonByName(name: $name) {
//       id
//     }
//   }
// `)

// Run the examples
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('Fetching Pokemon with gql-tada typed queries...')
  fetchPokemonWithTypes()
    .then(result => console.log('Result:', JSON.stringify(result, null, 2)))
    .catch(console.error)
}
