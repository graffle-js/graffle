/**
 * This example shows how to send a request using a Document instance for the GraphQL document.
 */

import { parse } from 'graphql'
import { Opentelemetry } from '../../src/entrypoints/extensions/opentelemetry/runtime.js'
import { Throws } from '../../src/entrypoints/extensions/throws/runtime.js'
import { Graffle } from '../../src/entrypoints/main.js'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({
    url: publicGraphQLSchemaEndpoints.Pokemon,
  })
  .use(Throws())
  .use(Opentelemetry())

const data = await graffle.gql(parse(`
  query pokemonByName ($name: String!) {
    pokemonByName (name: $name) {
      name
      trainer {
        name
      }
    }
  }
`)).send({ name: `Pikachu` })

show(data)
