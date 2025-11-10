/**
 * This example demonstrates the root-level query and mutation builders.
 *
 * Build simple GraphQL documents without needing the full gql wrapper.
 * Perfect for quick, focused operations! (ﾉ◕ヮ◕)ﾉ*:・゚✧
 */

import { Graffle } from '../$/graffle/_.js'
import { show } from '../$/show.js'

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

show(doc1)

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

show(doc2)

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

show(doc3)

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

show(doc4)

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

show(doc5)

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

show(doc6)

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
