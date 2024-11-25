import type { Transport } from './client/context.js'
import { Graffle } from './entrypoints/main.js'
import { TransportHttp } from './extensions/TransportHttp/TransportHttp.js'
import { TransportMemory } from './extensions/TransportMemory/TransportMemory.js'

interface HttpTransport extends Transport {
  name: 'http'
  config: {
    foo: boolean
  }
}

const HttpTransport = (): HttpTransport => ({
  name: `http` as const,
  config: {
    foo: true,
  },
})

// -----------------------------------------------------------------------------

const transportHttp = TransportHttp()
transportHttp.transport

const graffle = Graffle.create({
  schema: ``,
})
  // .use(TransportMemory())
  .use(transportHttp)
  // ._.requestPipelineDefinition.overloads[0]
  .anyware(async ({ encode }) => {
    encode.input.transportType
    return encode()
  })

// .addTransport(HttpTransport())
// .transport({ foo: true })
// .transport(`http`)
// .transport({ foo: false })
