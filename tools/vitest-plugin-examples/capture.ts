import { Command, CommandExecutor } from '@effect/platform'
import { NodeCommandExecutor, NodeContext, NodeFileSystem } from '@effect/platform-node'
import { Effect } from 'effect'
import stripAnsi from 'strip-ansi'
import { applyEncoder } from './encoder.js'
import type { ExampleFile, ExampleResult, ExamplesPluginConfig } from './types.js'

/**
 * Execute an example file and capture its output using Effect Command API.
 */
export const captureExample = async (
  file: ExampleFile,
  config: ExamplesPluginConfig,
): Promise<ExampleResult> => {
  // Get executor configuration
  const executorConfig = config.executor ?? {}
  const commandArgs = executorConfig.command ?? ['tsx']
  const cwd = executorConfig.cwd ?? process.cwd()
  const env = executorConfig.env ?? process.env

  // Create the command
  const command = Command.make(commandArgs[0]!, ...commandArgs.slice(1), file.relativePath).pipe(
    Command.env({
      ...env,
      // Ensure the subprocess gets the server URL if set by vitest
      POKEMON_SCHEMA_URL: env['POKEMON_SCHEMA_URL'] ?? process.env['POKEMON_SCHEMA_URL'] ?? '',
    }),
    Command.workingDirectory(cwd),
  )

  // Execute and capture output
  const result = await Effect.runPromise(
    CommandExecutor.CommandExecutor.pipe(
      Effect.flatMap((executor) => executor.string(command)),
      Effect.map((stdout) => ({
        exitCode: 0 as any,
        stdout,
        stderr: '',
        failed: false,
      })),
      Effect.catchAll((error) =>
        Effect.succeed({
          exitCode: 1,
          stdout: '',
          stderr: String(error),
          failed: true,
        })
      ),
      Effect.provide(NodeFileSystem.layer),
      Effect.provide(NodeCommandExecutor.layer),
      Effect.provide(NodeContext.layer),
    ),
  )

  let stdout = result.stdout
  let stderr = result.stderr

  // Handle examples that are expected to throw (based on file name)
  if (file.name.includes('_throws')) {
    // For throwing examples, use stdout from the error
    stdout = result.stdout || result.stderr
    stderr = ''
  }

  // Strip ANSI color codes
  stdout = stripAnsi(stdout)
  stderr = stripAnsi(stderr)

  // Combine output (prefer stdout, fall back to stderr)
  const output = stdout || stderr

  // Apply encoding
  const customEncoder = config.encoders?.[file.relativePath]
  const maskDynamicValues = config.maskDynamicValues ?? true
  const encoded = applyEncoder(output, customEncoder, maskDynamicValues)

  return {
    file,
    stdout,
    stderr,
    failed: result.failed,
    exitCode: result.exitCode,
    encoded,
  }
}
