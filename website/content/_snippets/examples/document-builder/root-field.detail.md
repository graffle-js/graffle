::: details Example

<div class="ExampleSnippet">
<a href="../../examples/document-builder/root-field">Root Field</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Pokemon } from './pokemon/__.js'

const pokemon = Pokemon.create()

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
:::
