::: details Example

<div class="ExampleSnippet">
<a href="../../examples/transport-http/dynamic-headers">Dynamic Headers</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create({
    schema: `http://localhost:3000/graphql`,
  })
  .anyware(({ pack }) => {
    if (pack.input.transportType !== `http`) return pack()
    return pack({
      input: {
        ...pack.input,
        headers: {
          'X-Sent-At-Time': Date.now().toString(),
        },
      },
    })
  })
  .anyware(({ exchange }) => {
    // todo wrong type / runtime value
    console.log(exchange.input.request)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  methodMode: 'post',
  headers: Headers {
    accept: 'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
    'content-type': 'application/json',
    'x-sent-at-time': '1731961845707'
  },
  method: 'post',
  url: 'http://localhost:3000/graphql',
  body: '{"query":"{ pokemons { name } }"}'
}
```
<!-- dprint-ignore-end -->

</div>
:::
