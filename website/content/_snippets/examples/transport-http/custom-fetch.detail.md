::: details Example

<div class="ExampleSnippet">
<a href="../../examples/transport-http/custom-fetch">Custom Fetch</a>

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
  .anyware(({ exchange }) =>
    exchange({
      using: {
        fetch: async () => {
          return new Response(JSON.stringify({ data: { pokemon: [{ name: `Pokemon Mocked!` }] } }))
        },
      },
    })
  )

const data = await graffle.gql`{ pokemon { name } }`.send()

console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```json
{
  "pokemon": [
    {
      "name": "Pokemon Mocked!"
    }
  ]
}
```
<!-- dprint-ignore-end -->

</div>
:::
