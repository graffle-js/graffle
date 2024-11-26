/**
 * This examples shows how to leverage the extension system to override the "exchange" hook's default fetch implementation.
 */

/* eslint-disable */
import { Graffle } from '../../src/entrypoints/main.js'
import { TransportHttp } from '../../src/extensions/TransportHttp/TransportHttp.js'
import { showJson } from '../$/helpers.js'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

const transportHttp = TransportHttp({
  // url: publicGraphQLSchemaEndpoints.Pokemon,
  methodMode: 'getReads',
})

transportHttp.transport.configInit.methodMode

namespace Graffle2 {
  const base = Graffle
    .create()
    .use(transportHttp)

  export const create = Graffle.createPresetFromContext(base._)
}

const graffle = Graffle2
  .create()
  .anyware(({ exchange }) =>
    exchange({
      using: {
        fetch: async () => {
          return new Response(JSON.stringify({ data: { pokemon: [{ name: `Pokemon Mocked!` }] } }))
        },
      },
    })
  )
  .transport({
    url: new URL(publicGraphQLSchemaEndpoints.Pokemon),
  })

const data = await graffle.gql`{ pokemon { name } }`.send()

showJson(data)
