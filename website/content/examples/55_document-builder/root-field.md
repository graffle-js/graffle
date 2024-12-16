---
aside: false
---

# Root Field

This example shows how to use dedicated root field methods to easily operate on one GraphQL root field at at time. If you need to work with multiple root fields, check out the `batch` example.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })
//                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

console.log(pokemons)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```json
[
  {
    "name": "Pikachu"
  },
  {
    "name": "Charizard"
  },
  {
    "name": "Squirtle"
  },
  {
    "name": "Bulbasaur"
  },
  {
    "name": "Caterpie"
  },
  {
    "name": "Weedle"
  }
]
```
<!-- dprint-ignore-end -->
