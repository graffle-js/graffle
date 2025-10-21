import type { ExamplePath } from '@generated/test-examples'
import { Graffle } from 'graffle'
import { test } from 'vitest'
import type { EncoderFunction } from '../../tools/vitest-plugin-examples/index.js'
import { createExamplesTest } from '../../tools/vitest-plugin-examples/index.js'

// Type-safe encoder configuration with autocomplete
const encoders = {
  './10_transport-http/transport-http_extension_headers__dynamicHeaders.ts': (value: string) => {
    return value.replace(/'x-sent-at-time', '\d+'/gi, `'x-sent-at-time', 'DYNAMIC_VALUE'`)
  },
} satisfies Partial<Record<ExamplePath, EncoderFunction>>

createExamplesTest(test, {
  timeout: 300000,
  config: {
    pattern: './*/*.ts',
    outputDir: './__outputs__',
    ignore: ['./$', './__outputs__', './__tests__'],
    encoders,
    beforeEach: async () => {
      // Reset database before each example to ensure consistent state
      const pokemonServerUrl = process.env['POKEMON_SCHEMA_URL'] || 'http://localhost:3000/graphql'
      const graffle = Graffle.create({ schema: { name: 'none' } }).transport({ url: pokemonServerUrl })
      await graffle.gql('mutation { resetData }').$send()
    },
  },
})
