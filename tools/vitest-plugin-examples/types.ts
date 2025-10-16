/**
 * Configuration options for the Vitest examples plugin.
 */
export interface ExamplesPluginConfig {
  /**
   * Glob pattern(s) to discover example files.
   *
   * @default './examples/*\/*.ts'
   */
  pattern?: string | string[]

  /**
   * Directory where output files will be written.
   *
   * @default './examples/__outputs__'
   */
  outputDir?: string

  /**
   * Patterns to ignore when discovering examples.
   *
   * @default ['./examples/$', './examples/__outputs__', './examples/__tests__']
   */
  ignore?: string[]

  /**
   * Custom encoder functions for masking dynamic values in outputs.
   * Keys are example file paths (relative to project root), values are encoder functions.
   */
  encoders?: Record<string, EncoderFunction>

  /**
   * Hook called before each example is executed.
   * Useful for database resets or other setup.
   */
  beforeEach?: () => Promise<void> | void

  /**
   * Hook called after each example is executed.
   * Useful for cleanup.
   */
  afterEach?: () => Promise<void> | void

  /**
   * Whether to apply dynamic value masking for test determinism.
   *
   * @default true
   */
  maskDynamicValues?: boolean

  /**
   * Execution configuration for running examples.
   */
  executor?: {
    /**
     * Command to execute examples.
     *
     * @default ['tsx']
     */
    command?: string[]
    /**
     * Working directory for command execution.
     *
     * @default process.cwd()
     */
    cwd?: string
    /**
     * Environment variables to pass to the command.
     *
     * @default process.env
     */
    env?: Record<string, string | undefined>
  }

  /**
   * Type generation configuration.
   */
  typeGeneration?: {
    /**
     * Whether to enable type generation.
     *
     * @default true
     */
    enabled?: boolean
    /**
     * Output directory for generated types.
     *
     * @default 'node_modules/@generated/test-examples'
     */
    outputDir?: string
    /**
     * Package name for generated types.
     *
     * @default '@generated/test-examples'
     */
    packageName?: string
  }
}

/**
 * Function that transforms output strings to mask dynamic values.
 */
export type EncoderFunction = (output: string) => string

/**
 * Information about a discovered example file.
 */
export interface ExampleFile {
  /** Full absolute path to the example file */
  path: string
  /** Relative path from project root */
  relativePath: string
  /** File name without extension */
  name: string
  /** Directory name within examples/ */
  group: string
}

/**
 * Result of executing an example.
 */
export interface ExampleResult {
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
