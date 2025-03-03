import { beforeEach } from 'vitest'
import { Extension } from '../../src/entrypoints/extension.js'
import type { RequestPipeline } from '../../src/requestPipeline/_namespace.js'

interface SpyData {
  encode: {
    input: RequestPipeline.BaseDefinition['steps']['0']['input'] | null
  }
  pack: {
    input: RequestPipeline.BaseDefinition['steps']['1']['input'] | null
  }
  exchange: {
    input: RequestPipeline.BaseDefinition['steps']['2']['input'] | null
  }
}

const emptySpyData: SpyData = {
  encode: {
    input: null,
  },
  pack: {
    input: null,
  },
  exchange: {
    input: null,
  },
}

export const RequestSpy = Extension.create(`Spy`)
  .requestInterceptor(async ({ encode }) => {
    RequestSpy.static.encode.input = encode.input
    const { pack } = await encode()
    RequestSpy.static.pack.input = pack.input
    const { exchange } = await pack()
    RequestSpy.static.exchange.input = exchange.input
    return exchange()
  })
  .static(emptySpyData)
  .return()

beforeEach(() => {
  RequestSpy.static = emptySpyData
})
