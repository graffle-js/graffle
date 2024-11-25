/**
 * This examples shows how to leverage the extension system to override the "exchange" hook's default fetch implementation.
 */

/* eslint-disable */
import { Graffle } from '../../src/entrypoints/main.js'
import { TransportHttp } from '../../src/extensions/TransportHttp/TransportHttp.js'
import { showJson } from '../$/helpers.js'
import { publicGraphQLSchemaEndpoints } from '../$/helpers.js'

/*

Graffle.create({
  schema: publicGraphQLSchemaEndpoints.Pokemon,
})

Graffle.create({
  transport: {
    url: publicGraphQLSchemaEndpoints.Pokemon,
  },
})

- Separate transport addition and transport selection from transport "readiness".
- When an added transport is NOT ready AND is the currently selected transport:
  - request methods have rich string literal error (make this optional to permit stubbing code)
- To implement this...:
  - Client request methods inspect the state of context. A bunch of ts-ignore hardcoding into assumed extension types.
  - Client request methods apply a generic pre-flight step. Each transport supplies a pre-flight type-function. They
    receive the current transport configuration as input. They return either a string containing an error message or
    true if everything is ok.

graffle.transport({
  url: publicGraphQLSchemaEndpoints.Pokemon,
})

*/

const transportHttp = TransportHttp()

transportHttp.transport.requestPipelineOverload

namespace Graffle2 {
  const defaultBase = Graffle
    .create()
    .use(transportHttp)

  export const create = Graffle.createPresetFromContext(defaultBase._)
}

const graffle = Graffle2
  // .transport({
  //   url: publicGraphQLSchemaEndpoints.Pokemon,
  // })
  // .create({
  //   transport: {
  //     url: publicGraphQLSchemaEndpoints.Pokemon,
  //   },
  // })
  // .use(TransportHttp({
  //   url: publicGraphQLSchemaEndpoints.Pokemon,
  // }))
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

graffle._.transports

const data = await graffle.gql`{ pokemon { name } }`.send()

showJson(data)
