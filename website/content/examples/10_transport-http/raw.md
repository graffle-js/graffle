---
aside: false
---

# Raw

This example shows how to use the `raw` configuration of transport configuration to easily access low-level `RequestInit` configuration.

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
  .anyware(({ exchange }) => {
    console.log(exchange.input.request)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
```
<!-- dprint-ignore-end -->

#### Outputs

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
  url: {
    _tag: 'url',
    value: URL {
      href: 'http://localhost:3000/graphql',
      origin: 'http://localhost:3000',
      protocol: 'http:',
      username: '',
      password: '',
      host: 'localhost:3000',
      hostname: 'localhost',
      port: '3000',
      pathname: '/graphql',
      search: '',
      searchParams: URLSearchParams {},
      hash: ''
    }
  },
  body: '{"query":"{ pokemons { name } }"}'
}
```
<!-- dprint-ignore-end -->
