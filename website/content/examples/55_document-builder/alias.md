---
aside: false
---

# Alias

This example shows how to write GraphQL aliases in the TypeScript interface.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const day = 1000 * 60 * 60 * 24
const year = day * 365.25
const yearsAgo100 = new Date(Date.now() - year * 100).toISOString()
const yearsAgo1 = new Date(Date.now() - year).toISOString()

const pokemons = await pokemon.query.$batch({
  pokemons: [
    [`elderPokemons`, {
//   ^^^^^^^^^^^^^^^      
      $: { filter: { birthday: { lte: yearsAgo100 } } },
      name: true,
    }],
    [`babyPokemons`, {
//   ^^^^^^^^^^^^^^
      $: { filter: { birthday: { gte: yearsAgo1 } } },
      name: true,
    }],
  ],
})

console.log(pokemons)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```json
{
  "elderPokemons": [
    {
      "name": "Pikachu"
    },
    {
      "name": "Squirtle"
    }
  ],
  "babyPokemons": [
    {
      "name": "Charizard"
    }
  ]
}
```
<!-- dprint-ignore-end -->
