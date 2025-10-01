/**
 * ┌───────────────────────────────────────────────────────────┐
 * │                                                           │
 * │   Static Document Builder                                │
 * │                                                           │
 * │   Generate typed GraphQL documents at compile-time!      │
 * │   No client needed (•̀ᴗ•́)و                              │
 * │                                                           │
 * └───────────────────────────────────────────────────────────┘
 */

import { mutation, query } from '../$/graffle/modules/document.js'
import { showJson } from '../$/helpers.js'
//     ^^^^^  ^^^^^^^^
// Static builders - no runtime client needed!

import { $var } from 'graffle/extensions/document-builder/var'
//     ^^^^
// Special marker for variable extraction

// ┌─────────────────────────────────────────────────────────────┐
// │ 1. Basic Selection                                          │
// └─────────────────────────────────────────────────────────────┘

const doc1 = query.pokemons({
  name: true,
  hp: true,
  trainer: { name: true },
})

console.log('\n1. Basic selection:')
console.log(doc1.document)
// query { pokemons { name hp trainer { name } } }

// ┌─────────────────────────────────────────────────────────────┐
// │ 2. Variables with $var                                      │
// └─────────────────────────────────────────────────────────────┘

const doc2 = query.pokemonByName({
  $: { name: $var },
  //         ^^^^
  // Automatically extracted as GraphQL variable
  name: true,
  type: true,
})

console.log('\n2. With variable:')
console.log(doc2.document)
// query ($name: String!) {
//   pokemonByName(name: $name) { name type }
// }
// Variables type: { name: string }

// ┌─────────────────────────────────────────────────────────────┐
// │ 3. Variable Modifiers                                       │
// └─────────────────────────────────────────────────────────────┘

const doc3 = query.pokemons({
  $: {
    filter: {
      name: { in: $var.optional.list },
      //                ^^^^^^^^^^^^^^^^^^
      //                Optional list of strings
      hp: { gte: $var },
      //              ^^^^
      //          Required number
    },
  },
  name: true,
  hp: true,
})

console.log('\n3. Variable modifiers:')
console.log(doc3.document)
// Variables type: { in?: string[] | undefined, gte: number }
//
// Modifiers:
// $var                       → Required (Type!)
// $var.optional              → Optional (Type)
// $var.list                  → Required list ([Type!]!)
// $var.optional.list         → Optional list ([Type!])
// $var.list.optional         → Required list of optional ([Type]!)
// $var.optional.list.optional → Fully optional ([Type])

// ┌─────────────────────────────────────────────────────────────┐
// │ 4. Aliases                                                  │
// └─────────────────────────────────────────────────────────────┘

const day = 1000 * 60 * 60 * 24
const year = day * 365.25

// dprint-ignore
const doc4 = query.$batch({
  elderPokemons: ['elderPokemons', {
//               ^^^^^^^^^^^^^^^^^^
//               Alias name
    $: {
      filter: {
        birthday: { lte: $var },
      },
    },
    name: true,
  }],
  youngPokemons: ['youngPokemons', {
    $: {
      filter: {
        birthday: { gte: $var },
      },
    },
    name: true,
  }],
})

console.log('\n4. Aliases:')
console.log(doc4.document)
// query ($lte: Date!, $gte: Date!) {
//   elderPokemons: pokemons(filter: { birthday: { lte: $lte } }) { name }
//   ^^^^^^^^^^^^^^
//   youngPokemons: pokemons(filter: { birthday: { gte: $gte } }) { name }
//   ^^^^^^^^^^^^^^
// }
// Result type: { elderPokemons: ..., youngPokemons: ... }

// ┌─────────────────────────────────────────────────────────────┐
// │ 5. Nested Arguments                                         │
// └─────────────────────────────────────────────────────────────┘

const doc5 = query.trainers({
  $: {
    filter: { class: { eq: $var } },
    //                         ^^^^
    //                    Root-level argument
  },
  name: true,
  pokemons: {
    $: {
      filter: { type: $var },
      //                    ^^^^
      //              Nested field argument ヽ(´▽`)/
    },
    name: true,
    type: true,
  },
})

console.log('\n5. Nested arguments:')
console.log(doc5.document)
// query ($eq: String!, $type: PokemonType!) {
//   trainers(filter: { class: { eq: $eq } }) {
//     name
//     pokemons(filter: { type: $type }) {
//                      ^^^^^^^^^^^^^^^^ Arguments on nested field!
//       name type
//     }
//   }
// }

// ┌─────────────────────────────────────────────────────────────┐
// │ 6. Mutations                                                │
// └─────────────────────────────────────────────────────────────┘

const doc6 = mutation.addPokemon({
  $: {
    name: $var,
    type: $var,
    hp: $var.optional,
    attack: $var.optional,
    defense: $var.optional,
  },
  name: true,
  type: true,
})

console.log('\n6. Mutation:')
console.log(doc6.document)
// mutation ($name: String!, $type: PokemonType!, $hp: Int, ...) {
//   addPokemon(name: $name, type: $type, hp: $hp, ...) {
//     name type
//   }
// }

// ┌─────────────────────────────────────────────────────────────┐
// │ Using with Other Clients                                    │
// └─────────────────────────────────────────────────────────────┘

showJson({
  summary: 'All documents are typed and ready to use! ¯\\_(ツ)_/¯',

  basicDocument: doc1.document,

  withVariables: {
    document: doc2.document,
    // TypeScript knows: { name: string }
  },

  withOtherClients: 'Pass doc.document to graphql-request, urql, Apollo, etc.',

  typeInference: 'Result types are automatically inferred from your selection!',

  zeroRuntime: 'Documents generated at compile-time (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
})
