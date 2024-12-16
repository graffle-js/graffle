<div class="ExampleSnippet">
<a href="../../examples/anyware/slot-fetch">Slot Fetch</a>

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
  .anyware(async ({ exchange }) => {
    return await exchange({
      using: {
        fetch: () => {
          return new Response(JSON.stringify({ data: { trainers: [{ name: `Jason` }] } }))
        },
      },
    })
  })

const result = await graffle.gql`
  query {
    trainers {
      name
    }
  }
`.send()

console.log(result)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{ trainers: [ { name: 'Jason' } ] }
```
<!-- dprint-ignore-end -->

</div>
