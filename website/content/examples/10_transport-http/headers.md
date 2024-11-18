---
aside: false
---

# Headers

This example shows how to use the `transport` configuration to control request headers. Notice how empty string headers unset previously set headers.

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create({
    schema: `http://localhost:3000/graphql`,
    transport: {
      headers: {
        authorization: `Bearer MY_TOKEN`,
        'x-something-to-unset': `true`,
      },
      raw: {
        headers: {
          'x-from-raw': `true`,
        },
      },
    },
  })
  .with({
    transport: { headers: { 'x-something-to-unset': `` } },
  })
  .anyware(({ exchange }) => {
    if (exchange.input.transportType !== `http`) return exchange()
    console.log(exchange.input.request.headers)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
```
<!-- dprint-ignore-end -->

#### Outputs

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
