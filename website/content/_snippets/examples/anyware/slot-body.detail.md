::: details Example

<div class="ExampleSnippet">
<a href="../../examples/anyware/slot-body">Slot Body</a>

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

</div>
:::
