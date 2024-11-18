::: details Example

<div class="ExampleSnippet">
<a href="../../examples/anyware/slot-body">Slot Body</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle
  .create({ schema: `http://localhost:3000/graphql` })
  .anyware(async ({ pack }) => {
    return await pack({
      using: {
        body: (graphqlRequest) => {
          return JSON.stringify({
            ...graphqlRequest,
            operationName: `trainers`,
          })
        },
      },
    })
  })

const result = await graffle.gql`
    query pokemons {
      pokemons { name }
    }
    query trainers {
      trainers { name }
    }
  `.send(`pokemons`)

console.log(result)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  trainers: [
    { name: 'Ash' },
    { name: 'Misty' },
    { name: 'Brock' },
    { name: 'Gary' }
  ]
}
```
<!-- dprint-ignore-end -->

</div>
:::
