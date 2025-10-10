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
  .anyware(({ exchange }) => {
    if (exchange.input.transportType !== `http`) return exchange()
    return exchange({
      input: {
        ...exchange.input,
        request: {
          ...exchange.input.request,
          headers: [
            ...new Headers(exchange.input.request.headers),
            [`X-Sent-At-Time`, Date.now().toString()],
          ],
        },
      },
    })
  })
  .anyware(({ exchange }) => {
    show(exchange.input.request)
    return exchange()
  })

await graffle.gql('{ pokemons { name } }').send()
