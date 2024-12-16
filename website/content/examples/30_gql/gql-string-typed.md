---
aside: false
---

# Gql String Typed

This example shows how to send a request using a string for the GraphQL document while also being typesafe in regards to the passed variables and return type.
Note that the typing of a string is effectively a cast here and so would not catch if the actual GraphQL document disagreed with your types. As the comment
suggests below, ideally some sort of automation would generate the types for you.

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

#### Outputs

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
