import { beforeEach } from 'vitest'
import { createExtension } from '../../src/entrypoints/main.js'
import type { Config } from '../../src/entrypoints/utilities-for-generated.js'
import type { HookDefEncode, HookDefExchange, HookDefPack } from '../../src/requestPipeline/hooks.js'

interface SpyData {
  encode: {
    input: HookDefEncode<Config>['input'] | null
  }
  pack: {
    input: HookDefPack<Config>['input'] | null
  }
  exchange: {
    input: HookDefExchange<Config>['input'] | null
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

export const Spy = createExtension({
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
