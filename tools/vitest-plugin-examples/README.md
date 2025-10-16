# Vitest Examples Plugin

A Vitest plugin for testing executable documentation examples. This plugin discovers example files, executes them, captures their output, and integrates with Vitest's snapshot testing.

## Features

- **Automatic Discovery**: Finds example files using glob patterns
- **Output Capture**: Executes examples and captures stdout/stderr
- **Dynamic Value Masking**: Configurable encoders for masking non-deterministic values
- **Snapshot Testing**: Integrates seamlessly with Vitest snapshots
- **Lifecycle Hooks**: Support for setup/teardown before/after each example
- **Sequential Execution**: Runs examples sequentially to avoid race conditions

## Installation

This plugin is currently part of the Graffle project. No separate installation needed.

## Usage

### Basic Usage

```typescript
import { expect, test } from 'vitest'
import { testExamples } from '../../tools/vitest-plugin-examples/index.js'

// Create the test runner
const runAllExamples = testExamples({
  pattern: './*/*.ts',
  outputDir: './__outputs__',
})

test('examples', async () => {
  const results = await runAllExamples()

  for (const result of results) {
    expect(result.encoded).toMatchSnapshot(
      `${result.file.group}/${result.file.name}`,
    )
  }
}, { timeout: 300000 })
```

### With Custom Encoders

Encoders mask dynamic values in outputs to make tests deterministic:

```typescript
const encoders = {
  'examples/dynamic-timestamp.ts': (output: string) => {
    return output.replace(/timestamp: \d+/g, 'timestamp: MASKED')
  },
}

const runAllExamples = testExamples({
  pattern: './examples/*/*.ts',
  encoders,
})
```

### With Lifecycle Hooks

Use hooks for database resets or other setup:

```typescript
const runAllExamples = testExamples({
  pattern: './examples/*/*.ts',
  beforeEach: async () => {
    // Reset database before each example
    await db.reset()
  },
  afterEach: async () => {
    // Cleanup after each example
    await cleanup()
  },
})
```

## Configuration

### `ExamplesPluginConfig`

```typescript
interface ExamplesPluginConfig {
  /**
   * Glob pattern(s) to discover example files.
   * @default './examples/*\/*.ts'
   */
  pattern?: string | string[]

  /**
   * Directory where output files will be written.
   * @default './examples/__outputs__'
   */
  outputDir?: string

  /**
   * Patterns to ignore when discovering examples.
   * @default ['./examples/$', './examples/__outputs__', './examples/__tests__']
   */
  ignore?: string[]

  /**
   * Custom encoder functions for masking dynamic values in outputs.
   * Keys are example file paths (relative to project root).
   */
  encoders?: Record<string, EncoderFunction>

  /**
   * Hook called before each example is executed.
   */
  beforeEach?: () => Promise<void> | void

  /**
   * Hook called after each example is executed.
   */
  afterEach?: () => Promise<void> | void

  /**
   * Whether to apply dynamic value masking for test determinism.
   * @default true
   */
  maskDynamicValues?: boolean
}
```

### `ExampleResult`

```typescript
interface ExampleResult {
  /** The example file that was executed */
  file: ExampleFile
  /** Captured stdout output */
  stdout: string
  /** Captured stderr output */
  stderr: string
  /** Whether the example failed */
  failed: boolean
  /** Exit code from the process */
  exitCode: number | null
  /** Encoded output (after applying encoders and masking) */
  encoded: string
}
```

## How It Works

1. **Discovery**: Uses `globby` to find example files matching the pattern
2. **Execution**: Runs each example using Effect Platform's `Command` API with `tsx`
3. **Capture**: Captures stdout/stderr using Effect Streams
4. **Encoding**: Applies custom encoders + default masking for determinism
5. **Testing**: Returns results for use with Vitest's `expect().toMatchSnapshot()`

### Default Encoding

The plugin applies default encoding to mask common dynamic values:

- File paths → `/some/path/to/file.ts:XX:XX`
- Node.js version → `Node.js vXX.XX.XX`
- Node internal module line numbers
- Dynamic error formatting differences

## API

### `testExamples(config?)`

Creates a function that runs all examples with the given configuration.

**Returns**: `() => Promise<ExampleResult[]>`

### `runExamples(config)`

Runs all examples and returns their results.

**Returns**: `Promise<ExampleResult[]>`

### `runExample(relativePath, config)`

Runs a single example by its relative path.

**Returns**: `Promise<ExampleResult>`

### `discoverExamples(config)`

Discovers example files without executing them.

**Returns**: `Promise<ExampleFile[]>`

### `captureExample(file, config)`

Executes a single example file and captures its output.

**Returns**: `Promise<ExampleResult>`

## Migration from Old System

The old system used:

- `scripts/generate-examples-derivatives/generate-outputs.ts` - Manual output generation
- Custom `runExample()` and `runExampleForTest()` functions
- Separate snapshot path construction
- Manual encoder loading

The new plugin simplifies this to:

- Single `testExamples()` call
- Automatic snapshot integration
- Inline encoder configuration
- No manual output file generation needed

## Performance

- Examples run **sequentially** (not in parallel) to prevent race conditions
- Typical run time: ~2-5 minutes for ~30 examples
- Set test timeout to at least 300000ms (5 minutes)

## Limitations

- Currently executes via `pnpm tsx` - requires these tools to be available
- Sequential execution means slower than parallel (by design)
- Snapshot comparison happens in-memory, not via file system
- Requires Effect Platform packages (`@effect/platform`, `@effect/platform-node`, `effect`)

## Future Improvements

- Support for parallel execution with opt-in
- Better TypeScript integration without needing `tsx`
- Output file generation for documentation
- Comparison utilities for validating against old system
