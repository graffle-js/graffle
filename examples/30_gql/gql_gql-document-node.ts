/**
 * This example shows how to send a request using a Document instance for the GraphQL document.
 */

import { Graffle } from 'graffle'
import { OpenTelemetry } from 'graffle/extensions/opentelemetry'
import { Throws } from 'graffle/extensions/throws'
import { parse } from 'graphql'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({
    url: publicGraphQLSchemaEndpoints.Pokemon,
  })
  .use(Throws)
  .use(OpenTelemetry())

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
