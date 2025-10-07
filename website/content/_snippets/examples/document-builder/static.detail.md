::: details Example

<div class="ExampleSnippet">
<a href="../../examples/document-builder/document-builder_static">Static</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { $ } from 'graffle/extensions/document-builder'
//       ^
// Variable marker with flexible API

import { Graffle as PlainGraffle } from 'graffle'
import { Graffle } from './graffle/$.js'

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

console.log(doc1)

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

console.log(doc2)

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

console.log(doc3)

/*

4. Variables with Default Values
------------------------------------------------------------------------

This example console.logs how to use default values for variables.

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

console.log(doc4)

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

console.log(doc5)

/*

6. Full Document with Multiple Operations
------------------------------------------------------------------------

Build a complete document with multiple named queries and send them:

*/

const multiOpDoc = Graffle.document({
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

console.log(multiOpDoc)

const client = Graffle.create()

// Execute first operation (no variables needed)
const allPokemonsResult = await client.send(multiOpDoc, 'allPokemons')
console.log(allPokemonsResult)

// Execute second operation (variables required)
const specificResult = await client.send(multiOpDoc, 'specificPokemon', { pokemonName: 'Pikachu' })
console.log(specificResult)

/*

7. Single Operation Document (no operation name needed)
------------------------------------------------------------------------

When document has only one operation, no operation name needed:

*/

const singleOpDoc = Graffle.document({
  query: {
    getTrainers: {
      trainers: {
        name: true,
        pokemon: { name: true },
      },
    },
  },
})

console.log(singleOpDoc)

// Send without operation name since there's only one
const trainers = await client.send(singleOpDoc)
console.log(trainers)

/*

8. Mixed Query and Mutation Document
------------------------------------------------------------------------

Combine queries and mutations in a single document:

*/

const mixedDoc = Graffle.document({
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

console.log(mixedDoc)

// Execute query operation
const pokemon = await client.send(mixedDoc, 'getPokemon', { name: 'Charizard' })
console.log(pokemon)

// Execute mutation operation
const newPokemon = await client.send(mixedDoc, 'addNewPokemon', {
  name: 'Mew',
  type: 'electric',
  hp: 100,
  attack: 100,
  defense: 100,
})
console.log(newPokemon)

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

console.log(doc)

const plainClient = PlainGraffle
  .create()
  .transport({ url: 'https://example.com/graphql' })

// @ts-expect-error - plain client lacks SDDM support
plainClient.gql(doc)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  pokemons {
    name
    hp
    trainer {
      name
    }
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    type
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($filter: PokemonFilter) {
  pokemons(filter: $filter) {
    name
    hp
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($name: String! = "Ash") {
  trainerByName(name: $name) {
    name
    class
    pokemon {
      name
      type
    }
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
mutation ($name: String! = "Pikachu", $attack: Int, $defense: Int, $hp: Int, $type: PokemonType!) {
  addPokemon(
    name: $name
    attack: $attack
    defense: $defense
    hp: $hp
    type: $type
  ) {
    name
    type
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query allPokemons {
  pokemons {
    name
    hp
  }
}

query specificPokemon($pokemonName: String!) {
  pokemonByName(name: $pokemonName) {
    name
    type
    hp
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  pokemons: [
    { name: 'Pikachu', hp: 35 },
    { name: 'Charizard', hp: 78 },
    { name: 'Squirtle', hp: 44 },
    { name: 'Bulbasaur', hp: 45 },
    { name: 'Caterpie', hp: 45 },
    { name: 'Weedle', hp: 40 }
  ]
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{ pokemonByName: [ { name: 'Pikachu', type: 'electric', hp: 35 } ] }
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query getTrainers {
  trainers {
    name
    pokemon {
      name
    }
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  trainers: [
    {
      name: 'Ash',
      pokemon: [ { name: 'Pikachu' }, { name: 'Charizard' } ]
    },
    { name: 'Misty', pokemon: [ { name: 'Squirtle' } ] },
    { name: 'Brock', pokemon: [] },
    { name: 'Gary', pokemon: [] }
  ]
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query getPokemon($name: String!) {
  pokemonByName(name: $name) {
    name
    hp
    attack
  }
}

mutation addNewPokemon($name: String!, $type: PokemonType!, $hp: Int, $attack: Int, $defense: Int) {
  addPokemon(
    name: $name
    type: $type
    hp: $hp
    attack: $attack
    defense: $defense
  ) {
    name
    type
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{ pokemonByName: [ { name: 'Charizard', hp: 78, attack: 84 } ] }
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{ addPokemon: { name: 'Mew', type: 'electric' } }
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  pokemons {
    name
    birthday
  }
}
```
<!-- dprint-ignore-end -->

</div>
:::
