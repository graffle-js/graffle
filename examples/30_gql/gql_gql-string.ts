/**
 * This example shows how to send a request using a string for the GraphQL document.
 */

import { Graffle } from 'graffle'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle.create().transport({ url: publicGraphQLSchemaEndpoints.Pokemon })

const data = await graffle.gql`
  {
    pokemons {
      name
    }
  }
`.send()

show(data)
