<div class="ExampleSnippet">
<a href="../../examples/document-builder/batch">Batch</a>

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
  //                                 ^^^^^^
  pokemonByName: {
//^^^^^^^^^^^^^
    $: { name: `Pikachu` },
    name: true,
    id: true,
  },
  trainerByName: {
//^^^^^^^^^^^^^
    $: { name: `Ash` },
    name: true,
    id: true,
  },
})

console.log(pokemons)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```json
{
  "pokemonByName": [
    {
      "name": "Pikachu",
      "id": "1"
    }
  ],
  "trainerByName": {
    "name": "Ash",
    "id": "1"
  }
}
```
<!-- dprint-ignore-end -->

</div>
