---
aside: false
---

# Custom Scalar

This example shows how to add a client-side custom scalar codec to
have arguments and data automatically encoded and decoded respectively.

<!-- dprint-ignore-start -->
```ts twoslash
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

#### Outputs

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
