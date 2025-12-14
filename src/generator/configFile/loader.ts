import { FileSystem } from '@effect/platform'
import { Env, Fs, Mod } from '@wollybeard/kit'
import { Data, Effect, Option } from 'effect'
import { type Builder, isBuilder } from './builder.js'

interface Config {
  fileName: string
}

interface Input {
  /**
   * The path to the config file. If is a directory then will look for the configured file
   * name with one of the supported extensions in the directory.
   */
  filePath?: string | undefined
  options?: {
    /**
     * Config file name.
     *
     * @defaultValue `graffle.config`
     *
     * An attempt to import it using the following extensions will be made:
     *
     * - `.ts`
     * - `.js`
     * - `.mjs`
     * - `.mts`
     */
    fileName?: string | undefined
  }
}

export const loadDefaults: Config = {
  fileName: `graffle.config`,
}

const extensionCandidates = [`ts`, `js`, `mjs`, `mts`]

export type LoadResult =
  | { builder: null; paths: Fs.Path.AbsFile[]; path: null }
  | { builder: Builder; path: Fs.Path.AbsFile; paths: Fs.Path.AbsFile[] }

export class ConfigFileError extends Data.TaggedError('ConfigFileError')<{
  message: string
  context?: Record<string, unknown>
  cause?: unknown
}> {}

export const load = (
  input?: Input,
): Effect.Effect<
  LoadResult | ConfigFileError,
  never,
  FileSystem.FileSystem
> =>
  Effect.gen(function*() {
    const importPathCandidates = yield* processInput(input?.filePath)

    const importedModule = yield* importFirst(importPathCandidates)

    if (Option.isNone(importedModule)) {
      return {
        builder: null,
        paths: importPathCandidates,
        path: null,
      }
    }

    if (importedModule.value instanceof Error) {
      return new ConfigFileError({
        message: `Failed to import project Graffle configuration file.`,
        context: { importPathCandidates },
        cause: importedModule.value,
      })
    }

    if (!isBuilder(importedModule.value.module[`default`])) {
      return new ConfigFileError({
        message: `Invalid project Graffle configuration file. It does not have a default export of the configuration.`,
        context: {
          path: importedModule.value.path,
          value: importedModule.value.module,
        },
      })
    }

    return {
      builder: importedModule.value.module[`default`],
      path: importedModule.value.path,
      paths: importPathCandidates,
    }
  })

const toAbsolutePath = (cwd: string, maybeAbsolutePath: string) =>
  Path.isAbsolute(maybeAbsolutePath) ? maybeAbsolutePath : Path.join(cwd, maybeAbsolutePath)

const processInput = (input?: string): Effect.Effect<string[], never, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    const fs = yield* FileSystem.FileSystem

    if (!input) {
      const directoryPath = process.cwd()
      const path = Path.join(directoryPath, loadDefaults.fileName)
      return extensionCandidates.map((ext) => toAbsolutePath(process.cwd(), `${path}.${ext}`))
    }

    const absolutePath = toAbsolutePath(process.cwd(), input)

    // Check if path is a directory
    const statResult = yield* fs.stat(absolutePath).pipe(
      Effect.option,
    )

    if (Option.isSome(statResult) && statResult.value.type === 'Directory') {
      const directoryPath = absolutePath
      const path = Path.join(directoryPath, loadDefaults.fileName)
      return extensionCandidates.map((ext) => `${path}.${ext}`)
    }

    return [absolutePath]
  })

const importFirst = (paths: Fs.Path.AbsFile[]): Effect.Effect<
  Option.Option<Mod.ImportError | { module: Record<string, unknown>; path: Fs.Path.AbsFile }>,
  never,
  never
> =>
  Effect.gen(function*() {
    for (const path of paths) {
      const result = yield* Mod.dynamicImportFile(path).pipe(Effect.either)

      if (result._tag === 'Right') {
        return Option.some({
          module: result.right as Record<string, unknown>,
          path,
        })
      }

      // Module not found - try next path
      if (result.left._tag === 'KitModImportErrorNotFound') {
        continue
      }

      // For other errors, return the error
      return Option.some(result.left)
    }

    return Option.none()
  })

const isModuleNotFoundError = (value: unknown) => {
  return (value instanceof Error && `code` in value && value.code === ERR_MODULE_NOT_FOUND)
}

const ERR_MODULE_NOT_FOUND = `ERR_MODULE_NOT_FOUND`
