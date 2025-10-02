/**
 * This example demonstrates the Static Document Builder.
 *
 * Generate typed GraphQL documents at compile-time!
 * No client needed (•̀ᴗ•́)و
 */

import { $var } from 'graffle/extensions/document-builder'
//       ^^^^
// Special marker for variable extraction

import { Graffle } from '../$/graffle/_namespace.js'
import { show } from '../$/show.js'

const { mutation, query } = Graffle

/*

1. Basic Selection
------------------------------------------------------------------------

query {
  pokemons {
    name
    hp
    trainer {
      name
    }
  }
}

*/

const doc1 = query.pokemons({
  name: true,
  hp: true,
  trainer: { name: true },
})

show(doc1)

/*

2. Variables with $var
------------------------------------------------------------------------

query ($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    type
  }
}

Variables type: { pokemonName: string }

*/

const doc2 = query.pokemonByName({
  $: { name: $var.name('pokemonName').required() },
  //         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // Automatically extracted as GraphQL variable with custom name
  name: true,
  type: true,
})

show(doc2)

/*

3. Filter Arguments
------------------------------------------------------------------------

query ($in: [String!]!) {
  pokemons(filter: { name: { in: $in } }) {
    name
    hp
  }
}

Variables type: { in: string[] }

*/

const doc3 = query.pokemons({
  $: {
    filter: {
      name: { in: $var.required() },
      //          ^^^^^^^^^^^^^^^
      //          Required variable for name filter
    },
  },
  name: true,
  hp: true,
})

show(doc3)

/*

4. Nested Arguments
------------------------------------------------------------------------

query ($eq: String = "mystic", $type: PokemonType!) {
  trainers(filter: { class: { eq: $eq } }) {
    name
    pokemons(filter: { type: $type }) {
      name
      type
    }
  }
}

*/

const doc4 = query.trainers({
  $: {
    filter: { class: { eq: $var.default('mystic') } },
    //                     ^^^^^^^^^^^^^^^^^^^^^^
    //                     Root-level argument with default value
  },
  name: true,
  pokemons: {
    $: {
      filter: { type: $var },
      //              ^^^^
      //              Nested field argument
    },
    name: true,
    type: true,
  },
})

show(doc4)

/*

5. Controlling Optional/Required Variables
------------------------------------------------------------------------

mutation ($name: String = "Pikachu", $attack: Int!, $defense: Int!, $hp: Int!, $type: PokemonType!) {
  addPokemon(name: $name, attack: $attack, defense: $defense, hp: $hp, type: $type) {
    name
    type
  }
}

*/

const doc5 = mutation.addPokemon({
  $: {
    name: $var.default('Pikachu'),
    //          Make required field optional with default value
    attack: $var.required(),
    defense: $var.required(),
    hp: $var.required(),
    //          Make optional fields required
    $type: $var,
  },
  name: true,
  type: true,
})

show(doc5)
