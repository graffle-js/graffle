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

const graffle = Graffle.create({
  schema: ``,
})
  // .use(TransportMemory())
  .use(TransportHttp())
  .anyware(async ({ encode }) => {
    encode.input.transportType
  })

// .addTransport(HttpTransport())
// .transport({ foo: true })
// .transport(`http`)
// .transport({ foo: false })
