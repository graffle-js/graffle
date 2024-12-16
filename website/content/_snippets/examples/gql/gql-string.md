<div class="ExampleSnippet">
<a href="../../examples/gql/gql-string">Gql String</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'

const graffle = Graffle.create().transport({ url: `http://localhost:3000/graphql` })

const data = await graffle.gql`
  {
    pokemons {
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
  pokemons: [
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
