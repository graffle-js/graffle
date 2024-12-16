---
aside: false
---

# Gql Document Node

This example shows how to send a request using a Document instance for the GraphQL document.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'
import { Opentelemetry } from 'graffle/extensions/opentelemetry'
import { Throws } from 'graffle/extensions/throws'
import { parse } from 'graphql'

const graffle = Graffle
  .create()
  .transport({
    url: `http://localhost:3000/graphql`,
  })
  .use(Throws())
  .use(Opentelemetry())

const data = await graffle.gql(parse(`
  query pokemonByName ($name: String!) {
    pokemonByName (name: $name) {
      name
      trainer {
        name
      }
    }
  }
`)).send({ name: `Pikachu` })

console.log(data)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  pokemonByName: [ { name: 'Pikachu', trainer: { name: 'Ash' } } ]
}
```
<!-- dprint-ignore-end -->
