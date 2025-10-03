import { beforeEach } from 'vitest'
import { Extension } from '../../src/exports/extension.js'
import type { RequestPipeline } from '../../src/requestPipeline/$.js'

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
    RequestSpy.spy.data.encode.input = encode.input
    const { pack } = await encode()
    RequestSpy.spy.data.pack.input = pack.input
    const { exchange } = await pack()
    RequestSpy.spy.data.exchange.input = exchange.input
    return exchange()
  })
  .static({
    spy: {
      data: emptySpyData,
    },
  })
  .return()

beforeEach(() => {
  RequestSpy.spy.data = emptySpyData
})
