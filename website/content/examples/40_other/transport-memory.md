---
aside: false
---

# Transport Memory

This example shows how you can send requests against an in-memory GraphQL schema instead of one hosted over HTTP.

<!-- dprint-ignore-start -->
```ts twoslash
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { Graffle } from 'graffle'
import { TransportMemory } from '../../src/extensions/TransportMemory/TransportMemory.js'

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

#### Outputs

<!-- dprint-ignore-start -->
```json
{
  "foo": "bar"
}
```
<!-- dprint-ignore-end -->
