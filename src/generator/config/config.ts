import { pascalCase } from 'es-toolkit'
import * as Path from 'node:path'
import { Graffle } from '../../exports/index.js'
import { Introspection } from '../../extensions/Introspection/Introspection.js'
import { ConfigManager } from '../../lib/config-manager/$.js'
import { fileExists, type Fs, isPathToADirectory, toAbsolutePath, toFilePath } from '../../lib/fsp.js'
import { Grafaid } from '../../lib/grafaid/$.js'
import { isString, keysStrict } from '../../lib/prelude.js'
import { type Formatter, getTypeScriptFormatter, passthroughFormatter } from '../../lib/typescript-formatter.js'
import type { Extension } from '../extension/types.js'
import {
  type ConfigInit,
  type ConfigInitLibraryPaths,
  type InputImportFormat,
  type InputLint,
  type InputOutputCase,
  libraryPathKeys,
} from './configInit.js'
import { defaults } from './defaults.js'

export interface Config {
  fs: Fs
  name: string
  nameNamespace: string
  outputCase: InputOutputCase
  lint: Required<InputLint>
  schema: ConfigSchema
  runtimeFeatures: {
    customScalars: boolean
    operationVariables: boolean
  }
  options: {
    /**
     * Does the generated client import custom scalars statically from the user's project?
     */
    isImportsCustomScalars: boolean
    defaultSchemaUrl: URL | null
    format: boolean
    customScalars: boolean
    TSDoc: {
      noDocPolicy: 'message' | 'ignore'
    }
  }
  formatter: Formatter
  extensions: Extension[]
  importFormat: InputImportFormat
  paths: {
    project: {
      inputs: {
        root: string
        schema: null | string
        scalars: string
      }
      outputs: {
        sdl: null | string
        root: string
        modules: string
      }
    }
    imports: {
      scalars: string
      grafflePackage: Required<ConfigInitLibraryPaths>
    }
  }
  code: {
    schemaInterfaceExtendsEnabled?: boolean
  }
}

interface ConfigSchema {
  via: ConfigInit['schema']['type']
  sdl: string
  sdlFilePath: null | string
  instance: Grafaid.Schema.Schema
  kindMap: Grafaid.Schema.KindMap
}

export const createConfig = async (configInit: ConfigInit): Promise<Config> => {
  // --- Fs ---

  const fs = configInit.fs ?? await import(`node:fs/promises`)

  // --- Output Case ---

  const outputCase = configInit.outputCase ?? defaults.outputCase

  // --- Paths ---

  const cwd = configInit.currentWorkingDirectory ?? process.cwd()

  const sourceDirPath = configInit.sourceDirPath ? toAbsolutePath(cwd, configInit.sourceDirPath) : cwd

  const outputDirPathRoot = configInit.outputDirPath
    ? toAbsolutePath(cwd, configInit.outputDirPath)
    : Path.join(cwd, `./graffle`)

  const outputDirPathModules = Path.join(outputDirPathRoot, `/modules`)

  const inputPathScalars = configInit.scalars
    ? toAbsolutePath(cwd, configInit.scalars)
    : Path.join(sourceDirPath, `scalars` + `.ts`)

  const isCustomScalarsModuleExists = await fileExists(fs, inputPathScalars)
  if (!isCustomScalarsModuleExists && configInit.scalars) {
    // dprint-ignore
    throw new Error(
      `Custom scalar codecs file not found. Given path: ${String(configInit.scalars)}. Resolved to and looked at: ${inputPathScalars}`,
    )
  }

  // Get import format early to use in path processing
  const importFormat = configInit.importFormat ?? defaults.importFormat

  // Helper to get the correct extension based on importFormat
  const getImportExtension = (path: string): string => {
    switch (importFormat) {
      case `jsExtension`:
        return path.replace(/\.ts$/, `.js`)
      case `tsExtension`:
        return path // Keep .ts extension
      case `noExtension`:
        return path.replace(/\.(ts|js)$/, ``) // Remove any extension
      default:
        return path.replace(/\.ts$/, `.js`)
    }
  }

  const scalarsImportPath = Path.relative(
    outputDirPathModules,
    getImportExtension(inputPathScalars),
  )

  // --- Schema ---

  const schema = await createConfigSchema(fs, cwd, sourceDirPath, configInit)

  // --- Default Schema URL ---

  // dprint-ignore
  const defaultSchemaUrl =
    configInit.defaultSchemaUrl === false
      ? null
      : typeof configInit.defaultSchemaUrl === `boolean` || configInit.defaultSchemaUrl === undefined
        ? configInit.schema instanceof Grafaid.Schema.Schema
          ? null
          : configInit.schema.type === `url`
            ? configInit.schema.url
            : null
        : configInit.defaultSchemaUrl

  // --- Formatting ---

  const formattingEnabled = configInit.format ?? true
  let formatter = passthroughFormatter
  if (formattingEnabled) {
    const formatterReal = await getTypeScriptFormatter(fs)
    if (!formatterReal) {
      // todo use floggy
      console.log(`
WARNING: No TypeScript formatter found. Generated code will remain ugly. To have code automatically formatted do one of the following things:

- pnpm add --save-dev @dprint/formatter @dprint/typescript
- pnpm add --save-dev prettier

To suppress this warning disable formatting in one of the following ways:

- CLI: graffle --no-format
- Configuration file: Generator.configuration({ format: false })
- API: Generator.generate({ format: false })
`.trim())
    } else {
      formatter = formatterReal
    }
  }

  // --- Library Paths ---

  const processLibraryPath = (path: string) => {
    // Subpaths starting with # should not be rewritten
    if (path.startsWith('#')) {
      return path
    }
    const pathAbsolute = getImportExtension(toAbsolutePath(cwd, path))
    return Path.relative(outputDirPathModules, pathAbsolute)
  }

  const libraryPaths = Object.fromEntries(
    keysStrict(libraryPathKeys).map(_ => {
      return [
        _,
        configInit.libraryPaths?.[_]
          ? processLibraryPath(configInit.libraryPaths[_])
          : undefined,
      ]
    }),
  )

  // --- Lint ---

  const lint: Config['lint'] = {
    missingCustomScalarCodec: configInit.lint?.missingCustomScalarCodec ?? defaults.lint.missingCustomScalarCodec,
  }

  // --- Output SDL ---

  // dprint-ignore
  const outputSDLPath =
    configInit.outputSDL
      ? isString(configInit.outputSDL)
        ? toFilePath(`schema.graphql`, toAbsolutePath(cwd, configInit.outputSDL))
        : Path.join(outputDirPathRoot, `schema.graphql`)
      : null

  // --- name ---

  const name = configInit.name ?? defaults.name

  const nameNamespace = configInit.nameNamespace === true
    ? configInit.name
      ? pascalCase(configInit.name)
      : `Graffle`
    : isString(configInit.nameNamespace)
    ? configInit.nameNamespace
    : `Graffle`

  // --- advanced ---

  const schemaInterfaceExtendsEnabled = configInit.advanced?.schemaInterfaceExtendsEnabled ?? false

  // --- Config ---

  return {
    fs,
    name,
    importFormat,
    nameNamespace,
    extensions: configInit.extensions ?? [],
    outputCase,
    lint,
    formatter,
    runtimeFeatures: {
      customScalars: true, // todo do not assume true
      operationVariables: true, // todo do not assume true
    },
    schema,
    options: {
      isImportsCustomScalars: isCustomScalarsModuleExists,
      defaultSchemaUrl,
      format: formattingEnabled,
      customScalars: isCustomScalarsModuleExists,
      TSDoc: {
        noDocPolicy: configInit.TSDoc?.noDocPolicy ?? `ignore`,
      },
    },
    paths: {
      project: {
        outputs: {
          root: outputDirPathRoot,
          sdl: outputSDLPath,
          modules: outputDirPathModules,
        },
        inputs: {
          root: sourceDirPath,
          schema: schema.sdlFilePath,
          scalars: inputPathScalars,
        },
      },
      imports: {
        scalars: scalarsImportPath,
        grafflePackage: ConfigManager.mergeDefaults(
          defaults.libraryPaths,
          libraryPaths,
        ),
      },
    },
    code: {
      schemaInterfaceExtendsEnabled,
    },
  }
}

const defaultSchemaFileName = `schema.graphql`

const createConfigSchema = async (
  fs: Fs,
  cwd: string,
  sourceDirPath: string,
  input: ConfigInit,
): Promise<ConfigSchema> => {
  switch (input.schema.type) {
    case `instance`: {
      const sdl = Grafaid.Schema.print(input.schema.instance)
      const instance = input.schema.instance
      const kindMap = Grafaid.Schema.KindMap.getKindMap(instance)
      return {
        via: input.schema.type,
        sdlFilePath: null,
        sdl,
        instance,
        kindMap,
      }
    }
    case `sdl`:
    case `sdlFile`: {
      let sdl
      let sdlFilePath: null | string = null
      if (input.schema.type === `sdlFile`) {
        const fileOrDirPath = input.schema.dirOrFilePath
          ? toAbsolutePath(cwd, input.schema.dirOrFilePath)
          : sourceDirPath
        const isDir = await isPathToADirectory(fs, fileOrDirPath)
        sdlFilePath = isDir ? Path.join(fileOrDirPath, defaultSchemaFileName) : fileOrDirPath
        sdl = await fs.readFile(sdlFilePath, `utf8`)
      } else {
        sdl = input.schema.sdl
      }
      const instance = Grafaid.Schema.buildSchema(sdl)
      const kindMap = Grafaid.Schema.KindMap.getKindMap(instance)
      return {
        via: input.schema.type,
        sdlFilePath,
        sdl,
        instance,
        kindMap,
      }
    }
    case `url`: {
      const introspection = Introspection({ options: input.schema.options })
      const graffle = Graffle
        .create()
        .use(introspection)
        .transport({
          url: input.schema.url,
          headers: input.schema.headers,
        })
      const data = await graffle.introspect()
      if (!data) {
        throw new Error(`No data returned for introspection query.`)
      }
      const instance = Grafaid.Schema.buildClientSchema(data)
      const sdl = Grafaid.Schema.print(instance)
      const kindMap = Grafaid.Schema.KindMap.getKindMap(instance)
      return {
        via: `url`,
        sdlFilePath: null,
        sdl,
        instance,
        kindMap,
      }
    }
  }
}
