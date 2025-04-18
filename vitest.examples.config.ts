import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dir: 'examples/__tests__',
    globalSetup: ['./tests/_/services/pokemonVitest.ts'],
  },
})
