/**
 * Vitest plugin for testing executable documentation examples.
 *
 * This plugin discovers example files, executes them, captures their output,
 * and integrates with Vitest's snapshot testing.
 */

export { captureExample } from './capture.js'
export { discoverExamples } from './discovery.js'
export { applyEncoder, defaultEncoder } from './encoder.js'
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
