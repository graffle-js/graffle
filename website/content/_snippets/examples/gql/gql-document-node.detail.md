::: details Example

<div class="ExampleSnippet">
<a href="../../examples/gql/gql-document-node">Gql Document Node</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { parse } from 'graphql'
import { Opentelemetry } from 'graffle/extensions/opentelemetry'
import { Throws } from 'graffle/extensions/throws'
import { Graffle } from 'graffle'

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

<!-- dprint-ignore-start -->
```txt
{
  pokemonByName: [ { name: 'Pikachu', trainer: { name: 'Ash' } } ]
}
```
<!-- dprint-ignore-end -->

</div>
:::
