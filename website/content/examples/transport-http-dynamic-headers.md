---
aside: false
---

# Dynamic Headers

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create({
    schema: `https://countries.trevorblades.com/graphql`,
  })
  .use(async ({ pack }) => {
    return await pack({
      input: {
        ...pack.input,
        headers: {
          'X-Sent-At-Time': Date.now().toString(),
        },
      },
    })
  })
  .use(async ({ exchange }) => {
    // todo wrong type / runtime value
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
    'content-type': 'application/json',
    'x-sent-at-time': '1725656299249'
  },
  signal: undefined,
  method: 'post',
  url: 'https://countries.trevorblades.com/graphql',
  body: '{"query":"{ languages { code } }"}'
}
```
<!-- dprint-ignore-end -->