::: details Example

<div class="ExampleSnippet">
<a href="../../examples/transport-http/headers">Headers</a>

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
  .transport({
    url: `http://localhost:3000/graphql`,
    headers: {
      authorization: `Bearer MY_TOKEN`,
      'x-something-to-unset': `true`,
    },
    raw: {
      headers: {
        'x-from-raw': `true`,
      },
    },
  })
  .transport({
    headers: { 'x-something-to-unset': `` },
  })
  .anyware(({ exchange }) => {
    if (exchange.input.transportType !== `http`) return exchange()
    console.log(exchange.input.request.headers)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
Headers {
  accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
  'content-type': 'application/json',
  authorization: 'Bearer MY_TOKEN',
  'x-from-raw': 'true'
}
```
<!-- dprint-ignore-end -->

</div>
:::
