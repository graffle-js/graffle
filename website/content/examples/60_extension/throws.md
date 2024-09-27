---
aside: false
---

# Throws

This example shows how to use the Or Throw extension to throw errors for one-off cases.

<!-- dprint-ignore-start -->
```ts twoslash
import { Throws } from 'graffle/extensions'
import { Pokemon } from './pokemon/__.js'

const pokemon = Pokemon
  .create({ output: { defaults: { errorChannel: `return` } } })
  .use(Throws())
  .anyware(({ encode: _ }) => {
    throw new Error(`Something went wrong.`)
  })

const result1 = await pokemon.query.pokemons({ name: true })
console.log(result1)

const result2 = await pokemon.throws().query.pokemons({ name: true })
//                                          ^^^^^^^
result2 // This line will never be reached because of thrown error.
```
<!-- dprint-ignore-end -->
