/**
 * Basic gql-tada Integration (Idiomatic)
 *
 * This example shows the idiomatic usage where gql-tada is an implementation detail.
 * Users simply use the generated Graffle client with template literals and get
 * type safety automatically.
 *
 * Note: For this to work with full type checking, you need:
 * 1. A generated Graffle client (which includes tada.ts)
 * 2. TypeScript configured with the gql-tada plugin
 * 3. The plugin configured to recognize .gql template literals
 */

import { Graffle } from '../$/graffle/_namespace.js'
import { show } from '../$/helpers.js'

// Create the Graffle client - gql-tada is handled internally
const graffle = Graffle.create()
const gql = graffle.gql
/*
const graphql: initGraphQLTada<{
    introspection: introspection;
}>
*/

// Use template literals directly with the .gql method
// The type safety comes from gql-tada working behind the scenes
const result = await gql`
  query GetPokemons {
    pokemons {
      id
      name
      hp
      attack
      defense
    }
  }
`.send()

// The result would be typed if the TypeScript plugin is configured
show(result)

// With proper setup, TypeScript would know the shape of the data
result?.pokemons?.forEach(pokemon => {
  console.log(`${pokemon.name}: HP=${pokemon.hp}, Attack=${pokemon.attack}`)
})

/**
 * To enable full type checking for this idiomatic usage, add to tsconfig.json:
 *
 * {
 *   "compilerOptions": {
 *     "plugins": [
 *       {
 *         "name": "@0no-co/graphqlsp",
 *         "schema": "../$/graffle/schema.graphql",
 *         "template": "gql",
 *         "templateIsCallExpression": true
 *       }
 *     ]
 *   }
 * }
 */
