/**
 * This example demonstrates using gql-tada for typed GraphQL template literals.
 *
 * The generated Graffle client automatically integrates gql-tada, providing
 * compile-time type checking for GraphQL queries written as template literals.
 */

import { Graffle } from '../$/graffle/$$.js'

const graffle = Graffle.create()

// The .gql method is typed with gql-tada automatically
// TypeScript will validate this query and infer the result type
const pokemonsQuery = await graffle.gql`
  query GetPokemons {
    pokemons {
      name
      hp
      attack
    }
  }
`.send()

console.log(pokemonsQuery)

// With proper IDE setup (TypeScript plugin), you get:
// - Autocomplete for field names
// - Type errors for invalid fields
// - Inferred result types
