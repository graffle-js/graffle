<div class="ExampleSnippet">
<a href="../../examples/transport-http/raw">Raw</a>

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
    raw: {
      mode: `cors`,
    },
  })
  .anyware(async ({ exchange }) => {
    console.log(exchange.input.request)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  methodMode: 'post',
  headers: Headers {
    accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    'content-type': 'application/json'
  },
  mode: 'cors',
  method: 'post',
  url: 'http://localhost:3000/graphql',
  body: '{"query":"{ pokemons { name } }"}'
}
```
<!-- dprint-ignore-end -->

</div>
