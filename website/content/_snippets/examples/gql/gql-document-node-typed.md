<div class="ExampleSnippet">
<a href="../../examples/gql/gql-document-node-typed">Gql Document Node Typed</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'
import { parse, type TypedQueryDocumentNode } from 'graphql'

const graffle = Graffle.create()
  .transport({
    url: `http://localhost:3000/graphql`,
  })

type Document = TypedQueryDocumentNode<
  {
    pokemonByName: {
      id: string
      name: string
      hp: number
      attack: number
      defense: number
      trainer: { name: string }
    }
  },
  { name: string }
>

const document = parse(`
    query ($name: String!) {
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
  `) as Document

const data = await graffle.gql(document).send({ name: `Pikachu` })

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
