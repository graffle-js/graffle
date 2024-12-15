---
aside: false
---

# Slot Body

This example shows how to use the `body` slot on the `pack` hook.

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create()
  .transport({ url: `http://localhost:3000/graphql` })
  .anyware(async ({ pack }) => {
    return await pack({
      using: {
        body: (graphqlRequest) => {
          return JSON.stringify({
            ...graphqlRequest,
            operationName: `trainers`,
          })
        },
      },
    })
  })

const result = await graffle.gql`
    query pokemons {
      pokemons { name }
    }
    query trainers {
      trainers { name }
    }
  `.send(`pokemons`)

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  trainers: [
    { name: 'Ash' },
    { name: 'Misty' },
    { name: 'Brock' },
    { name: 'Gary' }
  ]
}
```
<!-- dprint-ignore-end -->
