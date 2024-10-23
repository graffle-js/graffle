::: details Example

<div class="ExampleSnippet">
<a href="../../examples/custom-scalar/custom-scalar">Custom Scalar</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle/__Graffle'
import { Pokemon } from './pokemon/__.js'

const graffle = Pokemon
  .create()
  .scalar(Graffle.Scalars.create(`Date`, {
    encode: (value: globalThis.Date) => value.toISOString(),
    decode: (value: string) => {
      return new globalThis.Date(value)
    },
  }))

const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date(`1987-01-13`) } } },
  name: true,
  birthday: true,
})

console.log(pokemons?.[0]?.birthday instanceof Date)
console.log(pokemons)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
true
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
[
  { name: 'Pikachu', birthday: 1850-01-01T00:00:00.000Z },
  { name: 'Squirtle', birthday: 1910-01-01T00:00:00.000Z }
]
```
<!-- dprint-ignore-end -->

</div>
:::
