import { isPathToADirectory, toAbsolutePath } from '#src/lib/fsp.js'
import { importFirst } from '#src/lib/import-first.js'
import { Err } from '@wollybeard/kit'
import * as Path from 'node:path'
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

export const load = async (
  input?: Input,
): Promise<
  | { builder: null; paths: string[]; path: null }
  | { builder: Builder; path: string; paths: string[] }
  | Err.ContextualError
> => {
  const importPathCandidates = await processInput(input?.filePath)

  const importedModule = await importFirst(importPathCandidates)

  if (!importedModule) {
    return {
      builder: null,
      paths: importPathCandidates,
      path: null,
    }
  }

  if (Err.is(importedModule)) {
    return new Err.ContextualError({
      message: `Failed to import project Graffle configuration file.`,
      context: { importPathCandidates },
      cause: importedModule,
    })
  }

  if (!isBuilder(importedModule.module[`default`])) {
    throw new Err.ContextualError({
      message: `Invalid project Graffle configuration file. It does not have a default export of the configuration.`,
      context: {
        path: importedModule.path,
        value: importedModule.module,
      },
    })
  }

  return {
    builder: importedModule.module[`default`],
    path: importedModule.path,
    paths: importPathCandidates,
  }
}

const processInput = async (input?: string) => {
  const fs = await import(`node:fs/promises`)

  if (!input) {
    const directoryPath = process.cwd()
    const path = Path.join(directoryPath, loadDefaults.fileName)
    return extensionCandidates.map(ext => toAbsolutePath(process.cwd(), `${path}.${ext}`))
  }

  const absolutePath = toAbsolutePath(process.cwd(), input)

  if (await isPathToADirectory(fs, absolutePath)) {
    const directoryPath = absolutePath
    const path = Path.join(directoryPath, loadDefaults.fileName)
    return extensionCandidates.map(ext => `${path}.${ext}`)
  }

  return [absolutePath]
}
