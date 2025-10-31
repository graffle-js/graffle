# Transport Memory

<!--@include: @/_snippets/example-links/transport-memory.md-->

## Getting Started

The `memory` transport works with in-memory schemas. It ultimately invokes [`execute`](https://graphql.org/graphql-js/execution/) from the `graphql` package. This transport is used when you instantiate Graffle with a [`GraphQLSchema`](https://graphql.org/graphql-js/type/#schema).

```ts twoslash
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

const graffle = Graffle.create()
  .use(TransportMemory)
  .transport('memory', { schema })
```
