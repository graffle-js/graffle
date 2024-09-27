---
aside: false
---

# Envelope

This example shows how to configure output to use the envelope.

<!-- dprint-ignore-start -->
```ts twoslash
import { Pokemon } from './pokemon/__.js'

const pokemon = Pokemon.create({
  output: {
    envelope: true,
  },
})

const result = await pokemon.query.pokemons({ name: true })

console.log(result)
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```txt
{
  data: {
    pokemons: [
      { name: 'Pikachu' },
      { name: 'Charizard' },
      { name: 'Squirtle' },
      { name: 'Bulbasaur' }
    ]
  },
  errors: undefined,
  extensions: undefined,
  response: Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
      'content-type': 'application/graphql-response+json; charset=utf-8',
      'content-length': '104',
      date: 'Fri, 27 Sep 2024 14:34:00 GMT',
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
