/**
 * This example shows how to use the `transport` configuration to control request headers. Notice how empty string headers unset previously set headers.
 */

import { Graffle } from '../../src/entrypoints/main.js'
import { show } from '../$/helpers.js'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

const graffle = Graffle
  .create()
  .transport({
    url: publicGraphQLSchemaEndpoints.Pokemon,
    headers: {
      authorization: `Bearer MY_TOKEN`,
      'x-something-to-unset': `true`,
    },
    raw: {
      headers: {
        'x-from-raw': `true`,
      },
    },
  })
  .transport({
    headers: { 'x-something-to-unset': `` },
  })
  .anyware(({ exchange }) => {
    // eslint-disable-next-line
    if (exchange.input.transportType !== `http`) return exchange()
    show(exchange.input.request.headers)
    return exchange()
  })

await graffle.gql`{ pokemons { name } }`.send()
