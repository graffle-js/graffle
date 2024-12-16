::: details Example

<div class="ExampleSnippet">
<a href="../../examples/gql/gql-string-typed">Gql String Typed</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle, type TypedDocument } from 'graffle'

const graffle = Graffle.create().transport({ url: `http://localhost:3000/graphql` })

/**
 * @remarks Typically this type would come from your code generation tool.
 *
 * @see https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#documentmode
 * @see https://github.com/graffle-js/graffle/issues/997
 */
type Document = TypedDocument.String<
  {
    pokemonByName: {
      id: string
      name: string
      hp: number
      attack: number
      defense: number
      trainer: {
        name: string
      }
    }
  },
  { name: string }
>

const data = await graffle.gql<Document>`
  query pokemonByName ($name: String!) {
    pokemonByName (name: $name) {
      name
      hp
      attack
      defense
      trainer {
        name
      }
    }
  }
`.send({ name: `Pikachu` })

console.log(data?.pokemonByName)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```txt
[
  {
    name: 'Pikachu',
    hp: 35,
    attack: 55,
    defense: 40,
    trainer: { name: 'Ash' }
  }
]
```
<!-- dprint-ignore-end -->

</div>
:::
