::: details Example

<div class="ExampleSnippet">
<a href="../../examples/custom-scalar/custom-scalar">Custom Scalar</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const graffle = Graffle
  .create()
  .scalar(`Date`, {
    decode: (value: string) => new Date(value),
    encode: (value: Date) => value.toISOString(),
  })

const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date(`1987-01-13`) } } },
  //                              ^^^^^^^^^^^^^^^^^^^^^^
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
