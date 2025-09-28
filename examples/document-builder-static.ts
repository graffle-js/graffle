/**
 * Example: Static Document Builder
 *
 * This example demonstrates how to use the static document builder API
 * to create typed GraphQL documents at compile time without a client instance.
 */

// Assume we have a generated Pokemon client
// import { query, mutation } from './pokemon/graffle/modules/document.js'
// import { $var } from 'graffle/extensions/document-builder'

// For demonstration, we'll show the API usage:

// 1. Simple query - returns a GraphQL document string
// const simpleQuery = query.pokemons({
//   name: true,
//   type: true,
// })
// Result: "{ pokemons { name type } }"

// 2. Query with arguments using literals
// const queryWithLiterals = query.pokemonByName({
//   $: { name: 'Pikachu' },
//   name: true,
//   type: true,
//   hp: true,
// })
// Result: "{ pokemonByName(name: \"Pikachu\") { name type hp } }"

// 3. Query with variables using $var marker
// const queryWithVariables = query.pokemonByName({
//   $: { name: $var },
//   name: true,
//   type: true,
//   hp: true,
// })
// Result: "query ($name: String!) { pokemonByName(name: $name) { name type hp } }"

// 4. Query with renamed variable
// const queryWithRenamedVar = query.pokemonByName({
//   $: { name: $var.name('pokemonName') },
//   name: true,
//   type: true,
// })
// Result: "query ($pokemonName: String!) { pokemonByName(name: $pokemonName) { name type hp } }"

// 5. Query with default value
// const queryWithDefault = query.pokemons({
//   $: { first: $var.default(10) },
//   name: true,
// })
// Result: "query ($first: Int = 10) { pokemons(first: $first) { name } }"

// 6. Mixed literals and variables
// const mixedQuery = query.pokemons({
//   $: {
//     first: 10,        // literal - not a variable
//     after: $var,      // variable
//   },
//   name: true,
// })
// Result: "query ($after: String) { pokemons(first: 10, after: $after) { name } }"

// 7. Mutation example
// const addPokemonMutation = mutation.addPokemon({
//   $: {
//     input: $var.name('newPokemon')
//   },
//   id: true,
//   name: true,
// })
// Result: "mutation ($newPokemon: PokemonInput!) { addPokemon(input: $newPokemon) { id name } }"

// Use cases:
// - Building reusable query libraries
// - Serverless environments where you want to minimize runtime overhead
// - Sharing typed queries between frontend and backend
// - Pre-compiling queries for production builds
// - Testing GraphQL operations without a running server

console.log('See comments in this file for static document builder usage examples')