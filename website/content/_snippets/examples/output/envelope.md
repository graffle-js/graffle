<div class="ExampleSnippet">
<a href="../../examples/output/envelope">Envelope</a>

<!-- dprint-ignore-start -->
```ts twoslash
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
      date: 'Mon, 28 Oct 2024 14:28:09 GMT',
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
