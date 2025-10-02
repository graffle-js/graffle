/**
 * This example demonstrates the Static Document Builder.
 *
 * Generate typed GraphQL documents at compile-time!
 * No client needed (•̀ᴗ•́)و
 */

import { $ } from 'graffle/extensions/document-builder'
//       ^
// Variable marker with flexible API

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
  $: { name: $('pokemonName').required() },
  //         ^^^^^^^^^^^^^^^^^^^^^^^^^
  // Named variable with required modifier
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
      name: { in: $.required() },
      //          ^^^^^^^^^^^^
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
    filter: { class: { eq: $.default('mystic') } },
    //                     ^^^^^^^^^^^^^^^^^^^^
    //                     Root-level argument with default value
  },
  name: true,
  pokemons: {
    $: {
      filter: { type: $ },
      //              ^
      //              Standalone marker (name inferred)
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
    name: $.default('Pikachu'),
    //    Make required field optional with default value
    attack: $.required(),
    defense: $.required(),
    hp: $.required(),
    //      Make optional fields required
    $type: $,
  },
  name: true,
  type: true,
})

show(doc5)
