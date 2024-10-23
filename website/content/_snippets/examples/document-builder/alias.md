<div class="ExampleSnippet">
<a href="../../examples/document-builder/alias">Alias</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Pokemon } from './pokemon/__.js'

const pokemon = Pokemon.create()

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

</div>