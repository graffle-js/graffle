<div class="ExampleSnippet">
<a href="../../examples/document-builder/document-builder_root-level-builders">Root Level Builders</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/$.js'

const { mutation, query } = Graffle

/*

1. Single Field Query
------------------------------------------------------------------------

Build a query for a single root field:

{
  pokemons {
    name
    hp
  }
}

*/

const doc1 = query.pokemons({
  name: true,
  hp: true,
})

console.log(doc1)

/*

2. Single Field with Nested Selection
------------------------------------------------------------------------

Query a root field with nested object selections:

{
  pokemonByName(name: "Pikachu") {
    name
    type
    trainer {
      name
      class
    }
  }
}

*/

const doc2 = query.pokemonByName({
  $: { name: 'Pikachu' },
  name: true,
  type: true,
  trainer: {
    name: true,
    class: true,
  },
})

console.log(doc2)

/*

3. Multi-Field Query with $batch
------------------------------------------------------------------------

Query multiple root fields in a single operation:

{
  pokemons {
    name
    hp
  }
  trainers {
    name
    class
  }
}

*/

const doc3 = query.$batch({
  pokemons: {
    name: true,
    hp: true,
  },
  trainers: {
    name: true,
    class: true,
  },
})

console.log(doc3)

/*

4. Complex Batch Query
------------------------------------------------------------------------

Batch multiple related queries together:

{
  pokemonByName(name: "Charizard") {
    name
    type
    attack
  }
  trainerByName(name: "Ash") {
    name
    pokemon {
      name
    }
  }
  pokemons {
    name
  }
}

*/

const doc4 = query.$batch({
  pokemonByName: {
    $: { name: 'Charizard' },
    name: true,
    type: true,
    attack: true,
  },
  trainerByName: {
    $: { name: 'Ash' },
    name: true,
    pokemon: {
      name: true,
    },
  },
  pokemons: {
    name: true,
  },
})

console.log(doc4)

/*

5. Single Field Mutation
------------------------------------------------------------------------

Build a mutation for a single root field:

mutation {
  addPokemon(name: "Mew", type: "water", hp: 100, attack: 100, defense: 100) {
    name
    type
  }
}

*/

const doc5 = mutation.addPokemon({
  $: {
    name: 'Mew',
    $type: 'water',
    hp: 100,
    attack: 100,
    defense: 100,
  },
  name: true,
  type: true,
})

console.log(doc5)

/*

6. Multi-Field Mutation with $batch
------------------------------------------------------------------------

Execute multiple mutations in a single operation:

mutation {
  addPokemon(name: "Mewtwo", type: "electric", hp: 106, attack: 110, defense: 90) {
    name
  }
  addTrainer(name: "Blue", class: "leader") {
    name
    class
  }
}

*/

const doc6 = mutation.$batch({
  addPokemon: {
    $: {
      name: 'Mewtwo',
      $type: 'electric',
      hp: 106,
      attack: 110,
      defense: 90,
    },
    name: true,
  },
  addTrainer: {
    $: {
      name: 'Blue',
      $class: 'leader',
    },
    name: true,
    class: true,
  },
})

console.log(doc6)

/*

7. When to Use Root-Level Builders
------------------------------------------------------------------------

Use query/mutation.$batch when:
✓ You need simple, focused operations
✓ You want to batch multiple root fields
✓ You don't need complex operation naming
✓ You're working in schema-less mode

Use Graffle.gql() when:
✓ You need named operations
✓ You want multiple operations in one document
✓ You need full control over the document structure
✓ You're working with variables and complex logic

*/
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  pokemons {
    name
    hp
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($name: String!) {
  pokemonByName(name: $name) {
    name
    type
    trainer {
      name
      class
    }
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  pokemons {
    name
    hp
  }
  trainers {
    name
    class
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
query ($name: String!, $name_2: String!) {
  pokemonByName(name: $name) {
    name
    type
    attack
  }
  trainerByName(name: $name_2) {
    name
    pokemon {
      name
    }
  }
  pokemons {
    name
  }
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
mutation ($name: String!, $type: PokemonType!, $hp: Int, $attack: Int, $defense: Int) {
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
mutation ($name: String!, $type: PokemonType!, $hp: Int, $attack: Int, $defense: Int, $name_2: String!, $class: String!) {
  addPokemon(
    name: $name
    type: $type
    hp: $hp
    attack: $attack
    defense: $defense
  ) {
    name
  }
  addTrainer(name: $name_2, class: $class) {
    name
    class
  }
}
```
<!-- dprint-ignore-end -->

</div>
