import { beforeEach } from 'vitest'
import { Extension } from '../../src/entrypoints/extension.js'
import type { RequestPipeline } from '../../src/requestPipeline/__.js'

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

export const Spy = Extension(`Spy`)
  .requestInterceptor(async ({ encode }) => {
    Spy.static.encode.input = encode.input
    const { pack } = await encode()
    Spy.static.pack.input = pack.input
    const { exchange } = await pack()
    Spy.static.exchange.input = exchange.input
    return exchange()
  })
  .static(emptySpyData)
  .return()

beforeEach(() => {
  Spy.static = emptySpyData
})
