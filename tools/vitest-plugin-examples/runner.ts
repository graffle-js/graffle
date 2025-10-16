import { captureExample } from './capture.js'
import { discoverExamples } from './discovery.js'
import type { ExampleResult, ExamplesPluginConfig } from './types.js'

/**
 * Run all examples and capture their outputs.
 * Executes examples sequentially to avoid race conditions (e.g., database resets).
 */
export const runExamples = async (config: ExamplesPluginConfig): Promise<ExampleResult[]> => {
  const examples = await discoverExamples(config)
  const results: ExampleResult[] = []

  // Run examples sequentially (not in parallel)
  // This ensures beforeEach hooks (like database resets) complete before next example
  for (const example of examples) {
    // Call beforeEach hook if provided
    if (config.beforeEach) {
      await config.beforeEach()
    }

    const result = await captureExample(example, config)
    results.push(result)

    // Call afterEach hook if provided
    if (config.afterEach) {
      await config.afterEach()
    }
  }

  return results
}

/**
 * Run a single example by its relative path.
 * Useful for targeted testing or debugging.
 */
export const runExample = async (
  relativePath: string,
  config: ExamplesPluginConfig,
): Promise<ExampleResult> => {
  const examples = await discoverExamples(config)
  const example = examples.find((ex) => ex.relativePath === relativePath)

  if (!example) {
    throw new Error(`Example not found: ${relativePath}`)
  }

  // Call beforeEach hook if provided
  if (config.beforeEach) {
    await config.beforeEach()
  }

  const result = await captureExample(example, config)

  // Call afterEach hook if provided
  if (config.afterEach) {
    await config.afterEach()
  }

  return result
}
