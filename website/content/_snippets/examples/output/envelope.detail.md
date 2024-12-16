::: details Example

<div class="ExampleSnippet">
<a href="../../examples/output/envelope">Envelope</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/__.js'

const pokemon = Graffle.create({
  output: {
    envelope: true,
  },
})

const result = await pokemon.query.pokemons({ name: true })

console.log(result)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  data: {
    pokemons: [
      { name: 'Pikachu' },
      { name: 'Charizard' },
      { name: 'Squirtle' },
      { name: 'Bulbasaur' },
      { name: 'Caterpie' },
      { name: 'Weedle' }
    ]
  },
  response: Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
      'content-type': 'application/graphql-response+json; charset=utf-8',
      'content-length': '142',
      date: 'Mon, 16 Dec 2024 01:48:03 GMT',
      connection: 'keep-alive',
      'keep-alive': 'timeout=5'
    },
    body: ReadableStream { locked: true, state: 'closed', supportsBYOB: true },
    bodyUsed: true,
    ok: true,
    redirected: false,
    type: 'basic',
    url: 'http://localhost:3000/graphql'
  }
}
```
<!-- dprint-ignore-end -->

</div>
:::
