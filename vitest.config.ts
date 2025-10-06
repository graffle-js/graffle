import { defineConfig } from 'vitest/config'
import * as Path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '#test/schema': Path.resolve(__dirname, './tests/_/fixtures/schemas'),
      '#test': Path.resolve(__dirname, './tests/_'),
    },
  },
})
