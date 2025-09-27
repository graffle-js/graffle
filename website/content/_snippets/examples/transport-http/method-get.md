<div class="ExampleSnippet">
<a href="../../examples/transport-http/method-get">Method Get</a>

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
    methodMode: `getReads`, // [!code highlight]
    headers: { tenant: `nano` },
  })
  .anyware(async ({ exchange }) => {
    console.log(exchange.input.request)
    return await exchange()
  })

// The following request will use an HTTP POST method because it is
// using a "mutation" type of operation.
await graffle.gql`mutation { addPokemon(attack:0, defense:0, hp:1, name:"Nano", type: grass) { name } }`.send()

// The following request will use an HTTP GET method because it
// is using a "query" type of operation.
await graffle.gql`query { pokemonByName(name: "Nano") { hp } }`.send()
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  methodMode: 'getReads',
  headers: Headers {
    accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    'content-type': 'application/json',
    tenant: 'nano'
  },
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
  body: '{"query":"mutation { addPokemon(attack:0, defense:0, hp:1, name:\\"Nano\\", type: grass) { name } }"}'
}
```
<!-- dprint-ignore-end -->
<!-- dprint-ignore-start -->
```txt
{
  methodMode: 'getReads',
  headers: Headers {
    accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    tenant: 'nano'
  },
  method: 'get',
  url: {
    _tag: 'url',
    value: URL {
      href: 'http://localhost:3000/graphql?query=query+%7B+pokemonByName%28name%3A+%22Nano%22%29+%7B+hp+%7D+%7D',
      origin: 'http://localhost:3000',
      protocol: 'http:',
      username: '',
      password: '',
      host: 'localhost:3000',
      hostname: 'localhost',
      port: '3000',
      pathname: '/graphql',
      search: '?query=query+%7B+pokemonByName%28name%3A+%22Nano%22%29+%7B+hp+%7D+%7D',
      searchParams: URLSearchParams { 'query' => 'query { pokemonByName(name: "Nano") { hp } }' },
      hash: ''
    }
  }
}
```
<!-- dprint-ignore-end -->

</div>
