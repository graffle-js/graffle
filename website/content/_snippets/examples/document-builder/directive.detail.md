::: details Example

<div class="ExampleSnippet">
<a href="../../examples/document-builder/directive">Directive</a>

<!-- dprint-ignore-start -->
```ts twoslash
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

</div>
:::
