import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'
import { examplesPlugin } from '../tools/vitest-plugin-examples/index.js'

const isCI = Boolean(process.env[`CI`])

export default defineConfig({
  plugins: [
    tsconfigPaths() as any,
    examplesPlugin({
      pattern: './*/*.ts',
      outputDir: './__outputs__',
    }),
  ],
  test: {
    dir: `./__tests__`,
    globalSetup: [`../tests/_/services/pokemonVitest.ts`],
    bail: isCI ? undefined : 1,
    maxConcurrency: isCI ? undefined : 1,
    testTimeout: 30000,
  },
})
