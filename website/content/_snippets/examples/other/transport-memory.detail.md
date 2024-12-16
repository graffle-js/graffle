::: details Example

<div class="ExampleSnippet">
<a href="../../examples/other/transport-memory">Transport Memory</a>

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from 'graffle'
import { TransportMemory } from 'graffle/extensions/transport-memory'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: `Query`,
    fields: {
      foo: {
        type: GraphQLString,
        resolve: () => `bar`,
      },
    },
  }),
})

const graffle = Graffle
  .create()
  .use(TransportMemory({ schema }))
  .transport(`memory`)

const data = await graffle.gql`
  {
    foo
  }
`.send()

console.log(data)
```
<!-- dprint-ignore-end -->

<!-- dprint-ignore-start -->
```json
{
  "foo": "bar"
}
```
<!-- dprint-ignore-end -->

</div>
:::
