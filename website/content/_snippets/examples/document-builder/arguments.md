<div class="ExampleSnippet">
<a href="../../examples/document-builder/arguments">Arguments</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from './graffle/__.js'

const atlas = Graffle.create()

const pokemons = await atlas.query.pokemons({
  $: { filter: { name: { in: [`Pikachu`, `Charizard`] } } },  // [!code highlight]
  name: true,
  trainer: { name: true },
})

console.log(pokemons)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```json
[
  {
    "name": "Pikachu",
    "trainer": {
      "name": "Ash"
    }
  },
  {
    "name": "Charizard",
    "trainer": {
      "name": "Ash"
    }
  }
]
```
<!-- dprint-ignore-end -->

</div>
