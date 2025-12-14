import { Graffle } from '#graffle'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { type Formatter, getTypeScriptFormatter, passthroughFormatter } from '#src/lib/typescript-formatter.js'
import { FileSystem } from '@effect/platform'
import type { PlatformError } from '@effect/platform/Error'
import { ConfigManager, Env, Fs, Obj, Str } from '@wollybeard/kit'
import { Effect } from 'effect'
import { pascalCase } from 'es-toolkit'
import { Introspection } from '../../extensions/Introspection/Introspection.js'
import { SchemaError } from '../errors.js'
import type { Extension } from '../extension/types.js'
import { detectDefaultImportFormat } from '../helpers/detectImportFormat.js'
import {
  type ConfigInit,
  type ConfigInitLibraryPaths,
  type InputImportFormat,
  type InputLint,
  type InputOutputCase,
  libraryPathKeys,
} from './configInit.js'
import { defaults } from './defaults.js'

const p = Fs.Path.fromLiteral

export const EmitMode = {
  never: 'never',
  always: 'always',
  infer: 'infer',
} as const

export type EmitMode = typeof EmitMode[keyof typeof EmitMode]

export interface Config {
  name: string
  nameNamespace: string
  outputCase: InputOutputCase
  lint: Required<InputLint>
  schema: ConfigSchema
  runtimeFeatures: {
    customScalars: boolean
    operationVariables: boolean
  }
  methodsOrganization: {
    logical: boolean
    domains: false | ConfigInitDomainGroupingConfig
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
        root: Fs.Path.AbsDir
        schema: Fs.Path.AbsFile | null
        scalars: Fs.Path.AbsFile
      }
      outputs: {
        sdl: {
          path: Fs.Path.AbsFile
          emitMode: EmitMode
        }
        root: Fs.Path.AbsDir
        modules: Fs.Path.AbsDir
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

type ConfigInitDomainGroupingConfig = import('./configInit.js').DomainGroupingConfig

interface ConfigSchema {
  via: ConfigInit['schema']['type']
  sdl: string
  sdlFilePath: Fs.Path.AbsFile | null
  instance: GraphqlKit.Schema.Runtime.Nodes.Schema
  kindMap: GraphqlKit.Schema.Kind.KindMap
}

export const createConfig = (
  configInit: ConfigInit,
): Effect.Effect<Config, PlatformError | SchemaError, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    // --- Output Case ---

    const outputCase = configInit.outputCase ?? defaults.outputCase

    // --- Paths ---

    const cwd = configInit.currentWorkingDirectory ?? Env.env.cwd
    const toAbs = Fs.Path.ensureAbsoluteWith(cwd)

    const sourceDirPath = configInit.sourceDirPath ?? cwd

    const outputDirPathRoot = configInit.outputDirPath
      ?? Fs.Path.join(cwd, Fs.Path.fromLiteral(`./graffle/`))

    const outputDirPathModules = Fs.Path.join(outputDirPathRoot, Fs.Path.fromLiteral(`./modules/`))

    const inputPathScalars = configInit.scalars
      ?? Fs.Path.join(sourceDirPath, p(`./scalars.ts`))

    const isCustomScalarsModuleExists = yield* Fs.exists(inputPathScalars)
    if (!isCustomScalarsModuleExists && configInit.scalars) {
      // dprint-ignore
      throw new Error(
        `Custom scalar codecs file not found. Given path: ${String(configInit.scalars)}. Resolved to and looked at: ${inputPathScalars}`,
      )
    }

    // Get import format early to use in path processing
    // Auto-detect from tsconfig.json/package.json if not explicitly configured
    const importFormat = configInit.importFormat
      ?? (yield* detectDefaultImportFormat(cwd))
      ?? defaults.importFormat

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

    const scalarsImportPath = NodePath.relative(
      outputDirPathModules,
      getImportExtension(inputPathScalars),
    )

    // --- Schema ---

    const schema = yield* createConfigSchema(cwd, sourceDirPath, configInit)

    // --- Default Schema URL ---

    // dprint-ignore
    const defaultSchemaUrl =
      configInit.defaultSchemaUrl === false
        ? null
        : typeof configInit.defaultSchemaUrl === `boolean` || configInit.defaultSchemaUrl === undefined
          ? configInit.schema instanceof GraphqlKit.Schema.Runtime.Nodes.Schema
            ? null
            : configInit.schema.type === `url`
              ? configInit.schema.url
              : null
          : configInit.defaultSchemaUrl

    // --- Formatting ---

    const formattingEnabled = configInit.format ?? true
    let formatter = passthroughFormatter
    if (formattingEnabled) {
      const formatterReal = yield* getTypeScriptFormatter()
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
      // Package specifiers (not filesystem paths) should be returned as-is
      if (!path.startsWith('.') && !path.startsWith('/')) {
        return path
      }
      const pathAbsolute = toAbs(Fs.Path.fromString(path))
      const relPath = Fs.Path.toRel(pathAbsolute, outputDirPathModules)
      return getImportExtension(relPath.toString())
    }

    const libraryPaths = Object.fromEntries(
      Obj.keysStrict(libraryPathKeys).map((_) => {
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
      missingGraphqlSP: configInit.lint?.missingGraphqlSP ?? defaults.lint.missingGraphqlSP,
    }

    // --- Output SDL ---

    // Normalize outputSDL to structured config
    // dprint-ignore
    const outputSdlEmitMode: EmitMode =
      configInit.outputSDL === undefined ? EmitMode.infer :
      configInit.outputSDL === false     ? EmitMode.never :
                                           EmitMode.always

    // dprint-ignore
    const outputSdlPath =
      Str.is(configInit.outputSDL)
        ? toFilePath(`schema.graphql`, toAbsolutePath(cwd, configInit.outputSDL))
        : NodePath.join(outputDirPathRoot, `schema.graphql`)

    // --- name ---

    const name = configInit.name ?? defaults.name

    const nameNamespace = configInit.nameNamespace === true
      ? configInit.name
        ? pascalCase(configInit.name)
        : `Graffle`
      : Str.is(configInit.nameNamespace)
      ? configInit.nameNamespace
      : `Graffle`

    // --- advanced ---

    const schemaInterfaceExtendsEnabled = configInit.advanced?.schemaInterfaceExtendsEnabled ?? false

    // --- methods organization ---

    const methodsOrganizationLogical = configInit.methodsOrganization?.logical ?? defaults.methodsOrganization.logical
    const methodsOrganizationDomains = configInit.methodsOrganization?.domains ?? defaults.methodsOrganization.domains

    // --- Config ---

    return {
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
      methodsOrganization: {
        logical: methodsOrganizationLogical,
        domains: methodsOrganizationDomains,
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
            sdl: {
              path: outputSdlPath,
              emitMode: outputSdlEmitMode,
            },
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
  })

const defaultSchemaFileName = `schema.graphql`

const createConfigSchema = (
  cwd: string,
  sourceDirPath: string,
  input: ConfigInit,
): Effect.Effect<ConfigSchema, PlatformError | SchemaError, FileSystem.FileSystem> =>
  Effect.gen(function*() {
    switch (input.schema.type) {
      case `instance`: {
        const sdl = GraphqlKit.Schema.Runtime.toString(input.schema.instance)
        const instance = input.schema.instance
        const kindMap = GraphqlKit.Schema.Kind.KindMap.getKindMap(instance)
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
          const statResult = yield* fs.stat(fileOrDirPath)
          const isDir = statResult.type === 'Directory'
          sdlFilePath = isDir ? NodePath.join(fileOrDirPath, defaultSchemaFileName) : fileOrDirPath
          sdl = yield* fs.readFileString(sdlFilePath)
        } else {
          sdl = input.schema.sdl
        }
        const instance = GraphqlKit.Schema.Runtime.fromString(sdl)
        const kindMap = GraphqlKit.Schema.Kind.KindMap.getKindMap(instance)
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
        const data = yield* Effect.tryPromise({
          try: () => graffle.introspect(),
          catch: (error) =>
            new SchemaError({
              message: `Introspection failed`,
              via: `url`,
              cause: error,
            }),
        })
        if (!data) {
          return yield* new SchemaError({
            message: `No data returned for introspection query.`,
            via: `url`,
          })
        }
        const instance = GraphqlKit.Schema.Runtime.fromIntrospection(data)
        const sdl = GraphqlKit.Schema.Runtime.toString(instance)
        const kindMap = GraphqlKit.Schema.Kind.KindMap.getKindMap(instance)
        return {
          via: `url`,
          sdlFilePath: null,
          sdl,
          instance,
          kindMap,
        }
      }
    }
  })
