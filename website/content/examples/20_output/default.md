---
aside: false
---

# Default

This example shows the default output behavior.

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })

console.log(pokemons)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
[
  { name: 'Pikachu' },
  { name: 'Charizard' },
  { name: 'Squirtle' },
  { name: 'Bulbasaur' },
  { name: 'Caterpie' },
  { name: 'Weedle' }
]
```
<!-- dprint-ignore-end -->
