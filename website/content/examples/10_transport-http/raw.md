---
aside: false
---

# Raw

This example shows how to use the `raw` configuration of transport configuration to easily access low-level `RequestInit` configuration.

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create({
    schema: `https://countries.trevorblades.com/graphql`,
    transport: {
      raw: {
        mode: `cors`,
      },
    },
  })
  .anyware(async ({ exchange }) => {
    console.log(exchange.input.request)
    return exchange()
  })

await graffle.rawString({ document: `{ languages { code } }` })
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
  signal: undefined,
  mode: 'cors',
  method: 'post',
  url: 'https://countries.trevorblades.com/graphql',
  body: '{"query":"{ languages { code } }"}'
}
```
<!-- dprint-ignore-end -->