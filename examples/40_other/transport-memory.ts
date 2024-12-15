/**
 * This example shows how you can send requests against an in-memory GraphQL schema instead of one hosted over HTTP.
 */

import { Graffle } from 'graffle'
import { TransportMemory } from 'graffle/extensions/transport-memory'
import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { showJson } from '../$/helpers.js'

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

showJson(data)
