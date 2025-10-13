/**
 * This example demonstrates the Static Document Builder.
 *
 * Generate typed GraphQL documents at compile-time!
 * No client needed (•̀ᴗ•́)و
 */

import { $, Graffle as PlainGraffle } from 'graffle'
//                                ^
// Variable marker with flexible API
import { Graffle } from '../$/graffle/$.js'
import { show } from '../$/show.js'

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

const doc1 = Graffle.query.pokemons({
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

const doc2 = Graffle.query.pokemonByName({
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

const doc3 = Graffle.query.pokemons({
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

4. Variables with Default Values
------------------------------------------------------------------------

This example shows how to use default values for variables.

query ($trainerName: String = "Ash") {
  trainerByName(name: $trainerName) {
    name
    class
    pokemon {
      name
      type
    }
  }
}

*/

const doc4 = Graffle.query.trainerByName({
  $: {
    name: $.default('Ash'),
    //     ^^^^^^^^^^^^^^^^
    //     Variable with default value
  },
  name: true,
  class: true,
  pokemon: {
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

const doc5 = Graffle.mutation.addPokemon({
  $: {
    name: $.default('Pikachu'),
    // Make required field optional with default value
    attack: $.required(),
    defense: $.required(),
    hp: $.required(),
    // Make optional fields required
    $type: $.required(),
  },
  name: true,
  type: true,
})

show(doc5)

/*

6. Full Document with Multiple Operations
------------------------------------------------------------------------

Build a complete document with multiple named queries and send them:

*/

const multiOpDoc = Graffle.gql({
  query: {
    // First operation: get all pokemons
    allPokemons: {
      pokemons: {
        name: true,
        hp: true,
      },
    },
    // Second operation: get specific pokemon by name
    specificPokemon: {
      pokemonByName: {
        $: { name: $('pokemonName').required() },
        name: true,
        type: true,
        hp: true,
      },
    },
  },
})

show(multiOpDoc)

const client = Graffle.create()

// Execute first operation (no variables needed)
const allPokemonsResult = await client.gql(multiOpDoc).allPokemons()
show(allPokemonsResult)

// Execute second operation (variables required)
const specificResult = await client.gql(multiOpDoc).specificPokemon({ pokemonName: 'Pikachu' })
show(specificResult)

/*

7. Single Operation Document (no operation name needed)
------------------------------------------------------------------------

When document has only one operation, no operation name needed:

*/

const singleOpDoc = Graffle.gql({
  query: {
    getTrainers: {
      trainers: {
        name: true,
        pokemon: { name: true },
      },
    },
  },
})

show(singleOpDoc)

// Send without operation name since there's only one
const trainers = await client.gql(singleOpDoc).$send()
show(trainers)

/*

8. Mixed Query and Mutation Document
------------------------------------------------------------------------

Combine queries and mutations in a single document:

*/

const mixedDoc = Graffle.gql({
  query: {
    getPokemon: {
      pokemonByName: {
        $: { name: $('name').required() },
        name: true,
        hp: true,
        attack: true,
      },
    },
  },
  mutation: {
    addNewPokemon: {
      addPokemon: {
        $: {
          name: $.required(),
          $type: $.required(),
          hp: $.required(),
          attack: $.required(),
          defense: $.required(),
        },
        name: true,
        type: true,
      },
    },
  },
})

show(mixedDoc)

// Execute query operation
const pokemon = await client.gql(mixedDoc).getPokemon({ name: 'Charizard' })
show(pokemon)

// Execute mutation operation
const newPokemon = await client.gql(mixedDoc).addNewPokemon({
  name: 'Mew',
  type: 'electric',
  hp: 100,
  attack: 100,
  defense: 100,
})
show(newPokemon)

/*

9. SDDM Type Safety
------------------------------------------------------------------------

SDDM (Schema-Driven Data Map) enables type-safe custom scalar handling.
Documents generated with SDDM require SDDM-enabled clients.

*/

const doc = Graffle.query.pokemons({
  name: true,
  birthday: true, // Custom Date scalar - requires SDDM for encoding/decoding
})

show(doc)

const plainClient = PlainGraffle
  .create()
  .transport({ url: 'https://example.com/graphql' })

// @ts-expect-error - plain client lacks SDDM support
plainClient.gql(doc)
