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

import { Graffle } from './graffle/$.js'

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

const doc2 = query.pokemonByName({
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

console.log(doc3)

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

console.log(doc5)
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
query ($filter: String!) {
  pokemons(filter: $filter) {
    name
    hp
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($filter: String!, $filter_2: String!) {
  trainers(filter: $filter) {
    name
    pokemons(filter: $filter_2) {
      name
      type
    }
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
mutation ($name: String! = "Pikachu", $attack: String!, $defense: String!, $hp: String!, $type: String!) {
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

</div>
