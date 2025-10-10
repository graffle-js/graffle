---
aside: false
---

# Dynamic Headers

This example shows how to leverage the extension system to dynamically manipulate headers per request.

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
  })
  .anyware(({ exchange }) => {
    if (exchange.input.transportType !== `http`) return exchange()
    return exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          headers: [
            ...new Headers(exchange.input.request.headers),
            [`X-Sent-At-Time`, Date.now().toString()],
          ],
        },
      },
    })
  })
  .anyware(({ exchange }) => {
    console.log(exchange.input.request)
    return exchange()
  })

await graffle.gql('{ pokemons { name } }').send()
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  methodMode: 'post',
  headers: [
    [
      'accept',
      'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8'
    ],
    [ 'content-type', 'application/json' ],
    [ 'X-Sent-At-Time', '1760105689030' ]
  ],
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
