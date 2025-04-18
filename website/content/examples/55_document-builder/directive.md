---
aside: false
---

# Directive

This example shows how to use special fields to write GraphQL document directives.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.$batch({
  ___: {
    $skip: true,
//  ^^^^^^^^^^^^
    pokemons: {
      name: true,
    },
  },
  trainers: {
    name: true,
    id: {
      $skip: true,
//    ^^^^^^^^^^^^
    },
    pokemon: {
      id: {
        $include: false,
//      ^^^^^^^^^^^^^^^^
      },
      name: true,
    },
  },
})

console.log(pokemons)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```json
{
  "trainers": [
    {
      "name": "Ash",
      "pokemon": [
        {
          "name": "Pikachu"
        },
        {
          "name": "Charizard"
        }
      ]
    },
    {
      "name": "Misty",
      "pokemon": [
        {
          "name": "Squirtle"
        }
      ]
    },
    {
      "name": "Brock",
      "pokemon": []
    },
    {
      "name": "Gary",
      "pokemon": []
    }
  ]
}
```
<!-- dprint-ignore-end -->
