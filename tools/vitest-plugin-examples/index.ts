/**
 * Vitest plugin for testing executable documentation examples.
 *
 * This plugin discovers example files, executes them, captures their output,
 * and integrates with Vitest's snapshot testing.
 */

export { captureExample } from './capture.js'
export { discoverExamples } from './discovery.js'
export { applyEncoder, defaultEncoder } from './encoder.js'
export { examplesPlugin } from './plugin.js'
export { runExample, runExamples } from './runner.js'
export type { EncoderFunction, ExampleFile, ExampleResult, ExamplesPluginConfig } from './types.js'

import { runExamples } from './runner.js'
import type { ExampleResult, ExamplesPluginConfig } from './types.js'

/**
 * Create a function that runs all examples with the given configuration.
 * This is the main entry point for using the plugin in Vitest tests.
 *
 * @example
 * ```ts
 * import { testExamples } from '../../tools/vitest-plugin-examples/index.js'
 *
 * const runExamples = testExamples({
 *   outputDir: './examples/__outputs-new__',
 *   beforeEach: async () => {
 *     // Reset database
 *   }
 * })
 *
 * const results = await runExamples()
 * ```
 */
export const testExamples = (config: ExamplesPluginConfig = {}) => {
  return async (): Promise<ExampleResult[]> => {
    return await runExamples(config)
  }
}

/**
 * Create a Vitest test that runs all examples and snapshots their outputs.
 * This convenience function reduces boilerplate by automatically creating
 * the test and handling snapshot assertions.
 *
 * @example
 * ```ts
 * import { test } from 'vitest'
 * import { createExamplesTest } from '../../tools/vitest-plugin-examples/index.js'
 * import type { ExamplePath } from '@generated/test-examples'
 *
 * const encoders = {
 *   'some-example.ts': (output) => output.replace(/timestamp: \d+/, 'timestamp: MASKED')
 * } satisfies Partial<Record<ExamplePath, EncoderFunction>>
 *
 * createExamplesTest(test, {
 *   timeout: 300000,
 *   config: {
 *     pattern: './*\/*.ts',
 *     outputDir: './__outputs__',
 *     encoders,
 *     beforeEach: async () => {
 *       // Reset database
 *     }
 *   }
 * })
 * ```
 */
export const createExamplesTest = (
  test: any,
  options: {
    config?: ExamplesPluginConfig
    timeout?: number
    testName?: string
  } = {},
) => {
  const { config = {}, timeout = 300000, testName = 'examples' } = options

  test(
    testName,
    async ({ expect }: any) => {
      const results = await runExamples(config)

      expect(results.length).toBeGreaterThan(0)

      for (const result of results) {
        const snapshotName = `${result.file.group}/${result.file.name}`
        expect(result.encoded).toMatchSnapshot(snapshotName)
      }
    },
    { timeout },
  )
}
