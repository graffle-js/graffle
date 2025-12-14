import { FileSystem } from '@effect/platform'
import { Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import type { JsonObject } from 'type-fest'
import { FormatterError } from '../generator/errors.js'

export interface Formatter {
  formatText(content: string, customFormatterConfig?: object): Effect.Effect<string, FormatterError>
}

export const passthroughFormatter: Formatter = {
  formatText: (content) => Effect.succeed(content),
}

export const getTypeScriptFormatter = (): Effect.Effect<Formatter | null, never, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    const dprintFormatter = yield* getTypeScriptFormatterDprint()
    if (dprintFormatter) return dprintFormatter

    const prettierFormatter = yield* getTypeScriptFormatterPrettier()
    return prettierFormatter
  })

export const getTypeScriptFormatterPrettier = (): Effect.Effect<Formatter | null, never, never> =>
  Effect.gen(function*() {
    const prettierResult = yield* Effect.tryPromise({
      try: () => import(`prettier`),
      catch: () => null,
    }).pipe(Effect.catchAll(() => Effect.succeed(null)))

    if (!prettierResult) return null

    const prettier = prettierResult
    return {
      formatText: (content: string) =>
        Effect.tryPromise({
          try: () => prettier.format(content, { parser: `typescript` }),
          catch: (error) => new FormatterError({ message: `Prettier formatting failed: ${error}` }),
        }),
    }
  })

/**
 * Attempt to get a TypeScript formatter using dynamic imports. If none succeed then returns null.
 *
 * This allows users to bring their own formatters (within an allow list of what we try to dynamically import).
 */
export const getTypeScriptFormatterDprint = (): Effect.Effect<Formatter | null, never, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    // Try to import dprint modules
    const dprintResult = yield* Effect.all([
      Effect.tryPromise({
        try: () => import(`@dprint/formatter`),
        catch: () => null,
      }),
      Effect.tryPromise({
        try: () => import(`@dprint/typescript`),
        catch: () => null,
      }),
    ]).pipe(Effect.catchAll(() => Effect.succeed([null, null] as const)))

    const [formatterModule, typescriptModule] = dprintResult
    if (!formatterModule || !typescriptModule) return null

    const { createFromBuffer } = formatterModule
    const { getPath } = typescriptModule

    // Read the formatter WASM binary - return null if it fails (e.g., in test memory filesystem)
    const wasmPath = Fs.Path.AbsFile.fromString(getPath())
    const wasmBufferResult = yield* Fs.read(wasmPath).pipe(
      Effect.map((buffer) => buffer as BufferSource),
      Effect.catchAll(() => Effect.succeed(null)),
    )
    if (!wasmBufferResult) return null

    const formatter = createFromBuffer(wasmBufferResult)

    // Read dprint.json config file (optional)
    const localConfig = yield* Fs.readString(Fs.Path.fromLiteral(`./dprint.json`)).pipe(
      Effect.flatMap((content) =>
        Effect.try({
          try: () => JSON.parse(content) as { typescript?: JsonObject },
          catch: () => ({ typescript: defaultConfig }),
        })
      ),
      Effect.catchAll(() => Effect.succeed({ typescript: defaultConfig })),
    )

    return {
      formatText: (fileText: string, customFormatterConfig?: object) =>
        Effect.try({
          try: () => {
            // Skip formatting for very large files to avoid dprint stack overflow
            // Large generated files can be formatted with dprint CLI afterwards
            const MAX_SIZE_FOR_DPRINT = 5 * 1024 * 1024 // 5MB
            if (fileText.length > MAX_SIZE_FOR_DPRINT) {
              console.warn(
                `Skipping dprint formatting for large file (${
                  (fileText.length / 1024 / 1024).toFixed(1)
                }MB). Format with dprint CLI afterwards.`,
              )
              return fileText
            }

            const overrideConfig = {
              ...localConfig.typescript,
              ...customFormatterConfig,
            }
            const contentFormatted = formatter.formatText({
              filePath: `memory.ts`,
              fileText,
              overrideConfig,
            })
            return contentFormatted
          },
          catch: (error) => new FormatterError({ message: `Dprint formatting failed: ${error}` }),
        }),
    }
  })
