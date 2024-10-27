import * as Path from 'node:path'
import { Graffle } from '../../entrypoints/__Graffle.js'
import { Introspection } from '../../extensions/Introspection/Introspection.js'
import { ConfigManager } from '../../lib/config-manager/__.js'
import { fileExists, type Fs, isPathToADirectory, toAbsolutePath, toFilePath } from '../../lib/fsp.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { isString } from '../../lib/prelude.js'
import { type Formatter, getTypeScriptFormatter, passthroughFormatter } from '../../lib/typescript-formatter.js'
import type { Extension } from '../extension/types.js'
import { defaultLibraryPaths, defaultOutputCase } from './defaults.js'
import { defaultName } from './defaults.js'
import type { Input, InputLibraryPaths, InputLint, InputOutputCase } from './input.js'

export interface Config {
  fs: Fs
  name: string
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
      grafflePackage: Required<InputLibraryPaths>
    }
  }
}

interface ConfigSchema {
  via: Input['schema']['type']
  sdl: string
  sdlFilePath: null | string
  instance: Grafaid.Schema.Schema
  kindMap: Grafaid.Schema.KindMap
}

export const createConfig = async (input: Input): Promise<Config> => {
  // --- Fs ---

  const fs = input.fs ?? await import(`node:fs/promises`)

  // --- Output Case ---

  const outputCase = input.outputCase ?? defaultOutputCase

  // --- Paths ---

  const cwd = input.currentWorkingDirectory ?? process.cwd()

  const sourceDirPath = input.sourceDirPath ? toAbsolutePath(cwd, input.sourceDirPath) : cwd

  const outputDirPathRoot = input.outputDirPath
    ? toAbsolutePath(cwd, input.outputDirPath)
    : Path.join(cwd, `./graffle`)

  const outputDirPathModules = Path.join(outputDirPathRoot, `/modules`)

  const inputPathScalars = input.scalars
    ? toAbsolutePath(cwd, input.scalars)
    : Path.join(sourceDirPath, `scalars` + `.ts`)

  const isCustomScalarsModuleExists = await fileExists(fs, inputPathScalars)
  if (!isCustomScalarsModuleExists && input.scalars) {
    // dprint-ignore
    throw new Error(
      `Custom scalar codecs file not found. Given path: ${String(input.scalars)}. Resolved to and looked at: ${inputPathScalars}`,
    )
  }

  const scalarsImportPath = Path.relative(
    outputDirPathModules,
    inputPathScalars.replace(/\.ts$/, `.js`),
  )

  // --- Schema ---

  const schema = await createConfigSchema(fs, cwd, sourceDirPath, input)

  // --- Default Schema URL ---

  // dprint-ignore
  const defaultSchemaUrl =
    typeof input.defaultSchemaUrl === `boolean`
      ? input.schema instanceof Grafaid.Schema.Schema
        ? null
        : input.schema.type === `url`
          ? input.schema.url
          : null
      : input.defaultSchemaUrl ?? null

  // --- Formatting ---

  const formattingEnabled = input.format ?? true
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
    const pathAbsolute = toAbsolutePath(cwd, path).replace(/\.ts$/, `.js`)
    return Path.relative(outputDirPathModules, pathAbsolute)
  }

  const libraryPaths = {
    client: input.libraryPaths?.client ? processLibraryPath(input.libraryPaths.client) : undefined,
    scalars: input.libraryPaths?.scalars ? processLibraryPath(input.libraryPaths.scalars) : undefined,
    schema: input.libraryPaths?.schema ? processLibraryPath(input.libraryPaths.schema) : undefined,
    utilitiesForGenerated: input.libraryPaths?.utilitiesForGenerated
      ? processLibraryPath(input.libraryPaths.utilitiesForGenerated)
      : undefined,
  }

  // --- Lint ---

  const lint: Config['lint'] = {
    missingCustomScalarCodec: input.lint?.missingCustomScalarCodec ?? true,
  }

  // --- Output SDL ---

  // dprint-ignore
  const outputSDLPath =
    input.outputSDL
      ? isString(input.outputSDL)
        ? toFilePath(`schema.graphql`, toAbsolutePath(cwd, input.outputSDL))
        : Path.join(outputDirPathRoot, `schema.graphql`)
      : null

  // --- Config ---

  // const customScalarsEnabled = input.customScalars ?? false

  return {
    fs,
    extensions: input.extensions ?? [],
    outputCase,
    lint,
    formatter,
    runtimeFeatures: {
      customScalars: true, // todo do not assume true
      operationVariables: true, // todo do not assume true
    },
    name: input.name ?? defaultName,
    schema,
    options: {
      isImportsCustomScalars: isCustomScalarsModuleExists,
      defaultSchemaUrl,
      format: formattingEnabled,
      customScalars: isCustomScalarsModuleExists,
      TSDoc: {
        noDocPolicy: input.TSDoc?.noDocPolicy ?? `ignore`,
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
          defaultLibraryPaths,
          libraryPaths,
        ),
      },
    },
  }
}

const defaultSchemaFileName = `schema.graphql`

const createConfigSchema = async (
  fs: Fs,
  cwd: string,
  sourceDirPath: string,
  input: Input,
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
      const graffle = Graffle.create({ schema: input.schema.url }).use(Introspection())
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
