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
  methodMode: 'post',
})

namespace Graffle2 {
  const defaultBase = Graffle
    .create()
    .use(transportHttp)

  export const create = Graffle.createPresetFromContext(defaultBase._)
}

const graffle = Graffle2
  .create()
  .anyware(({ exchange }) =>
    exchange({
      // using: {
      //   fetch: async () => {
      //     return new Response(JSON.stringify({ data: { pokemon: [{ name: `Pokemon Mocked!` }] } }))
      //   },
      // },
    })
  )
// .transport({
//   url: new URL(publicGraphQLSchemaEndpoints.Pokemon),
// })

// graffle._.transports.configurations.http.url

// @ts-expect-error
const data = await graffle.gql`{ pokemon { name } }`.send()

showJson(data)
