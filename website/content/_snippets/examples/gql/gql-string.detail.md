::: details Example

<div class="ExampleSnippet">
<a href="../../examples/gql/gql-string">Gql String</a>

<!-- dprint-ignore-start -->
```ts twoslash
import { Graffle } from 'graffle'

const graffle = Graffle.create({
  schema: `http://localhost:3000/graphql`,
})

const data = await graffle.gql`
  {
    pokemon {
      name
    }
  }
`.send()

console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
{
  pokemon: [
    { name: 'Pikachu' },
    { name: 'Charizard' },
    { name: 'Squirtle' },
    { name: 'Bulbasaur' },
    { name: 'Caterpie' },
    { name: 'Weedle' }
  ]
}
```
<!-- dprint-ignore-end -->

</div>
:::
