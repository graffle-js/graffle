<div class="ExampleSnippet">
<a href="../../examples/document-builder/root-field">Root Field</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })
//                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

console.log(pokemons)
```
<!-- dprint-ignore-end -->

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

</div>
