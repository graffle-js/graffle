import { beforeEach } from 'vitest'
import { Extension } from '../../src/entrypoints/extensionkit.js'
import type { RequestPipelineBaseDefinition } from '../../src/requestPipeline/__.js'

interface SpyData {
  encode: {
    input: RequestPipelineBaseDefinition['steps']['0']['input'] | null
  }
  pack: {
    input: RequestPipelineBaseDefinition['steps']['1']['input'] | null
  }
  exchange: {
    input: RequestPipelineBaseDefinition['steps']['2']['input'] | null
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

export const Spy = Extension.create({
  name: `Spy`,
  custom: {
    data: emptySpyData,
  },
  create: () => {
    return {
      onRequest: async ({ encode }) => {
        Spy.data.encode.input = encode.input
        const { pack } = await encode()
        Spy.data.pack.input = pack.input
        const { exchange } = await pack()
        Spy.data.exchange.input = exchange.input
        return exchange()
      },
    }
  },
})

beforeEach(() => {
  Spy.data = emptySpyData
})
