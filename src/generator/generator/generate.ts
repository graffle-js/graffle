import * as Config from '../config/config.js'
import type { ConfigInit } from '../config/configInit.js'
import { ModuleGenerator$ } from '../generators/_.js'
import { ModuleGenerator$$ } from '../generators/__.js'
import { ModuleGenerator_internals } from '../generators/_internals.js'
import { ModuleGeneratorClient } from '../generators/Client.js'
import { ModuleGeneratorData } from '../generators/Data.js'
import { ModuleGeneratorDocument } from '../generators/Document.js'
import { ModuleGeneratorDomains } from '../generators/Domains.js'
import { ModuleGeneratorGlobal } from '../generators/global.js'
import { ModuleGeneratorGql } from '../generators/Gql.js'
import { ModuleGeneratorMethodsDocument } from '../generators/MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from '../generators/MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from '../generators/MethodsSelect.js'
import { ModuleGeneratorScalar } from '../generators/Scalar.js'
import { ModuleGeneratorSchema } from '../generators/Schema.js'
import { ModuleGeneratorSchemaDrivenDataMap } from '../generators/SchemaDrivenDataMap.js'
import { ModuleGeneratorSelect } from '../generators/Select.js'
import { ModuleGeneratorSelectionSets } from '../generators/SelectionSets.js'
import { getFileName, isExportsModule } from '../helpers/moduleGenerator.js'
import { validateGraphQLSPConfiguration } from '../validation/graphqlsp.js'

const moduleGenerators = [
  ModuleGeneratorGlobal,
  ModuleGeneratorClient,
  ModuleGeneratorDocument,
  ModuleGeneratorData,
  ModuleGeneratorScalar,
  ModuleGeneratorGql,
  // Packaging Stuff
  ModuleGenerator_internals,
  ModuleGenerator$$,
  ModuleGenerator$,
  // Schema Stuff
  ModuleGeneratorSchema,
  ModuleGeneratorSchemaDrivenDataMap,
  // Interface Stuff
  ModuleGeneratorSelectionSets,
  ModuleGeneratorSelect,
  ModuleGeneratorMethodsSelect,
  ModuleGeneratorMethodsRoot,
  ModuleGeneratorMethodsDocument,
  ModuleGeneratorDomains,
]

/**
 * Generate modules in memory without writing to filesystem.
 * Useful for testing and programmatic access to generated code.
 *
 * @returns Generated modules with their content and metadata
 */
export const generateModules = async (init: ConfigInit) => {
  const config = await Config.createConfig(init)

  const generatedModules = await Promise.all(
    moduleGenerators
      .flatMap(generator => {
        const result = generator.generate(config)
        return Array.isArray(result) ? result : [result]
      })
      .map(async code => {
        try {
          return {
            ...code,
            content: await config.formatter.formatText(code.content),
          }
        } catch (error) {
          console.error(`Warning: Failed to format ${code.name}. Continuing with unformatted content.`)
          console.error(`Error:`, error instanceof Error ? error.message : String(error))
          return {
            ...code,
            content: code.content,
          }
        }
      }),
  )

  return {
    config,
    modules: generatedModules,
  }
}

/**
 * Generate modules and write them to the filesystem.
 *
 * @returns The configuration used for generation
 */
export const generate = async (init: ConfigInit): Promise<Config.Config> => {
  const { config, modules: generatedModules } = await generateModules(init)

  // todo clear directory before generating so that removed or renamed files are cleaned up.
  await config.fs.mkdir(config.paths.project.outputs.root, { recursive: true })
  await config.fs.mkdir(config.paths.project.outputs.modules, { recursive: true })

  // todo: add a test that if dir doesn't exist yet, it is created beforehand.
  const shouldWriteSDL = config.paths.project.outputs.sdl.emitMode === Config.EmitMode.always
    || (config.paths.project.outputs.sdl.emitMode === Config.EmitMode.infer
      && (config.schema.via === 'url' || config.schema.via === 'instance'))

  if (shouldWriteSDL) {
    await config.fs.writeFile(
      config.paths.project.outputs.sdl.path,
      config.schema.sdl,
    )
  }

  await Promise.all(
    generatedModules.map(async (generatedModule) => {
      // dprint-ignore
      const filePath = generatedModule.filePath
        ? `${config.paths.project.outputs.root}/modules/${generatedModule.filePath}`
        : `${config.paths.project.outputs.root}/${isExportsModule(generatedModule.name) ? `` : `modules/`}${getFileName(config, generatedModule)}`
      // Create parent directory if it doesn't exist
      const dirPath = filePath.substring(0, filePath.lastIndexOf('/'))
      await config.fs.mkdir(dirPath, { recursive: true })
      return config.fs.writeFile(filePath, generatedModule.content)
    }),
  )

  // Validate GraphQLSP configuration and provide helpful suggestions
  await validateGraphQLSPConfiguration(config)

  return config
}
