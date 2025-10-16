# Vitest Examples Plugin

A Vite plugin for testing executable documentation examples. This plugin automatically discovers example files, generates TypeScript types for type-safe configuration, executes examples, captures their output, and integrates with Vitest's snapshot testing.

## Features

- **Automatic Type Generation**: Generates TypeScript types in `@generated/test-examples` for type-safe encoder configuration
- **Automatic Discovery**: Finds example files using glob patterns
- **Output Capture**: Executes examples and captures stdout/stderr
- **Dynamic Value Masking**: Type-safe encoder configuration for masking non-deterministic values
- **Snapshot Testing**: Integrates seamlessly with Vitest snapshots
- **Lifecycle Hooks**: Support for setup/teardown before/after each example
- **Sequential Execution**: Runs examples sequentially to avoid race conditions
- **IDE Autocomplete**: Full TypeScript autocomplete for example file paths

## Installation

This plugin is currently part of the Graffle project. No separate installation needed.

## Usage

### 1. Configure Vitest to Use the Plugin

In your `vitest.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'
import { examplesPlugin } from '../tools/vitest-plugin-examples/index.js'

export default defineConfig({
  plugins: [
    examplesPlugin({
      pattern: './*/*.ts',
      outputDir: './__outputs__',
    }),
  ],
  // ... rest of your config
})
```

The plugin runs during Vite's `buildStart` lifecycle, generating types before TypeScript compilation.

### 2. Use the Convenience Test Function

In your test file:

```typescript
import { test } from 'vitest'
import { createExamplesTest } from '../../tools/vitest-plugin-examples/index.js'
import type { ExamplePath } from '@generated/test-examples'

// Type-safe encoder configuration with autocomplete
const encoders = {
  './examples/dynamic-timestamp.ts': (value: string) => {
    return value.replace(/timestamp: \d+/g, 'timestamp: MASKED')
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
      // Reset database before each example
      await db.reset()
    },
  },
})
```

That's it! The `createExamplesTest()` function:
- Automatically runs all discovered examples
- Creates a single Vitest test case
- Generates individual snapshots for each example
- Handles all assertions internally

### Type-Safe Encoders

The plugin generates TypeScript types for all discovered example files in `node_modules/@generated/test-examples/`:

```typescript
// Auto-generated - provides autocomplete for example paths
export interface ExampleFiles {
  './examples/example1.ts': true
  './examples/example2.ts': true
  // ... all discovered examples
}

export type ExamplePath = keyof ExampleFiles
```

Use these types for type-safe encoder configuration:

```typescript
import type { ExamplePath, EncoderFunction } from '@generated/test-examples'

const encoders = {
  './examples/dynamic-values.ts': (output: string) => {
    return output.replace(/'x-timestamp', '\d+'/gi, `'x-timestamp', 'MASKED'`)
  },
  // ✅ TypeScript autocomplete works here!
  // ✅ Typos are caught at compile time!
} satisfies Partial<Record<ExamplePath, EncoderFunction>>
```

### Advanced: Manual Test Setup

If you need more control, you can use the lower-level APIs:

```typescript
import { expect, test } from 'vitest'
import { runExamples } from '../../tools/vitest-plugin-examples/index.js'
import type { ExamplePath } from '@generated/test-examples'

test('examples', async () => {
  const results = await runExamples({
    pattern: './*/*.ts',
    outputDir: './__outputs__',
  })

  for (const result of results) {
    expect(result.encoded).toMatchSnapshot(
      `${result.file.group}/${result.file.name}`,
    )
  }
}, { timeout: 300000 })
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

1. **Type Generation** (Vite plugin, `buildStart` hook):
   - Discovers example files using `globby`
   - Generates TypeScript types to `node_modules/@generated/test-examples/`
   - Creates proper npm package with `package.json` for TypeScript module resolution
   - Runs before TypeScript compilation, ensuring types are available during type checking

2. **Test Execution** (Vitest runtime):
   - Discovers example files matching the pattern
   - Runs each example using Effect Platform's `Command` API with `tsx`
   - Captures stdout/stderr using Effect Streams
   - Applies custom encoders + default masking for determinism
   - Creates individual snapshots for each example

### Default Encoding

The plugin applies default encoding to mask common dynamic values:

- File paths → `/some/path/to/file.ts:XX:XX`
- Node.js version → `Node.js vXX.XX.XX`
- Node internal module line numbers
- Dynamic error formatting differences

## API

### Plugin API

#### `examplesPlugin(config?)`

Vite plugin that generates TypeScript types for example files during build.

**Usage**: Add to `vitest.config.ts` plugins array

**Configuration**: Same as `ExamplesPluginConfig`

### Test Helper API

#### `createExamplesTest(test, options?)`

Convenience function that creates a complete test case for all examples.

**Parameters**:
- `test` - Vitest's `test` function
- `options` - Configuration object:
  - `config?: ExamplesPluginConfig` - Plugin configuration
  - `timeout?: number` - Test timeout in milliseconds (default: 300000)
  - `testName?: string` - Name of the test case (default: 'examples')

**Returns**: void (creates test internally)

#### `runExamples(config)`

Runs all examples and returns their results.

**Returns**: `Promise<ExampleResult[]>`

#### `runExample(relativePath, config)`

Runs a single example by its relative path.

**Returns**: `Promise<ExampleResult>`

#### `discoverExamples(config)`

Discovers example files without executing them.

**Returns**: `Promise<ExampleFile[]>`

#### `captureExample(file, config)`

Executes a single example file and captures its output.

**Returns**: `Promise<ExampleResult>`

## Migration from Old System

The old system had two separate concerns:

1. **Test Generation** (now replaced by this plugin):
   - `scripts/generate-examples-derivatives/generate-paths.ts` - Generated test paths
   - Manual `runExampleForTest()` functions
   - Separate snapshot path construction
   - Manual encoder loading
   - **Status**: Fully replaced by Vite plugin + `createExamplesTest()`

2. **Website Documentation** (still in use):
   - `scripts/generate-examples-derivatives/generate-outputs.ts` - Creates `.output.txt` files
   - `scripts/generate-examples-derivatives/generate-docs.ts` - Generates website docs
   - **Status**: Still needed, runs separately via `pnpm examples:gen:website`

### Migration Benefits

The new plugin provides:

- **Type Safety**: Full TypeScript autocomplete for example paths
- **Reduced Boilerplate**: Test file reduced from ~60 lines to ~28 lines
- **Automatic Type Generation**: No manual maintenance of type files
- **Single Test Case**: All examples in one test, individual snapshots per example
- **Better DX**: IDE autocomplete for encoder configuration

## Performance

- Examples run **sequentially** (not in parallel) to prevent race conditions
- Typical run time: ~2-5 minutes for ~30 examples
- Set test timeout to at least 300000ms (5 minutes)

## Limitations

- Currently executes via `pnpm tsx` - requires these tools to be available
- Sequential execution means slower than parallel (by design)
- Snapshot comparison happens in-memory (inline snapshots)
- Requires Effect Platform packages (`@effect/platform`, `@effect/platform-node`, `effect`)
- Generated types live in `node_modules/@generated/` - not committed to git

## Future Improvements

- Support for parallel execution with opt-in
- Better TypeScript integration without needing `tsx`
- Option to commit generated types to source control
- Comparison utilities for validating against old system
- Support for custom snapshot serializers
