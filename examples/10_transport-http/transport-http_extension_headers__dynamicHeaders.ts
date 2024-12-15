/**
 * This example shows how to leverage the extension system to dynamically manipulate headers per request.
 */

import { Graffle } from 'graffle'
import { publicGraphQLSchemaEndpoints, show } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({
    url: publicGraphQLSchemaEndpoints.Pokemon,
  })
  .anyware(({ pack }) => {
    if (pack.input.transportType !== `http`) return pack()
    return pack({
      input: {
        ...pack.input,
        headers: {
          'X-Sent-At-Time': Date.now().toString(),
        },
      },
    })
  })
  .anyware(({ exchange }) => {
    // todo wrong type / runtime value
    show(exchange.input.request)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
