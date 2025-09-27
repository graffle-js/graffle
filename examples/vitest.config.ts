import { defineConfig } from 'vitest/config'

const isCI = Boolean(process.env[`CI`])

export default defineConfig({
  test: {
    dir: `./__tests__`,
    globalSetup: [`../tests/_/services/pokemonVitest.ts`],
    bail: isCI ? undefined : 1,
    maxConcurrency: isCI ? undefined : 1,
    testTimeout: 30000,
  },
})
