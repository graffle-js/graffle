/**
 * This example shows how to send a request using a string for the GraphQL document.
 */

import { Graffle } from '../../src/entrypoints/main.js'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle.create({
  schema: publicGraphQLSchemaEndpoints.Pokemon,
})

const data = await graffle.gql`
  {
    pokemons {
      name
    }
  }
`.send()

show(data)
