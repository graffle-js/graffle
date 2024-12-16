---
aside: false
---

# Slot Search Params

This example shows how to use the `searchParams` slot on the `pack` hook.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'

const graffle = Graffle
  .create()
  .transport({ url: `http://localhost:3000/graphql`, methodMode: `getReads` })
  .anyware(async ({ pack }) => {
    return await pack({
      using: {
        searchParams: (graphqlRequest) => {
          return {
            query: graphqlRequest.query,
            operationName: `getPokemons`,
          }
        },
      },
    })
  })

const result = await graffle.gql`
    query getTrainers {
      trainers { name }
    }
    query getPokemons {
      pokemons { name }
    }
  `
  .send(`getTrainers`)

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  pokemons: [
    { name: 'Pikachu' },
    { name: 'Charizard' },
    { name: 'Squirtle' },
    { name: 'Bulbasaur' },
    { name: 'Caterpie' },
    { name: 'Weedle' }
  ]
}
```
<!-- dprint-ignore-end -->
