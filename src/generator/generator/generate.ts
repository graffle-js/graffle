import { type Config, createConfig } from '../config/config.js'
import type { ConfigInit } from '../config/configInit.js'
import { ModuleGenerator_exports } from '../generators/_exports.js'
import { ModuleGenerator_namespace } from '../generators/_namespace.js'
import { ModuleGeneratorArgumentsMap } from '../generators/ArgumentsMap.js'
import { ModuleGeneratorClient } from '../generators/Client.js'
import { ModuleGeneratorData } from '../generators/Data.js'
import { ModuleGeneratorDocument } from '../generators/Document.js'
import { ModuleGeneratorGlobal } from '../generators/global.js'
import { ModuleGeneratorMethodsDocument } from '../generators/MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from '../generators/MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from '../generators/MethodsSelect.js'
import { ModuleGeneratorScalar } from '../generators/Scalar.js'
import { ModuleGeneratorSchema } from '../generators/Schema.js'
import { ModuleGeneratorSchemaDrivenDataMap } from '../generators/SchemaDrivenDataMap.js'
import { ModuleGeneratorSelect } from '../generators/Select.js'
import { ModuleGeneratorSelectionSets } from '../generators/SelectionSets.js'
import { ModuleGeneratorTypeInputsIndex } from '../generators/TypeInputsIndex.js'
import { getFileName, isExportsModule } from '../helpers/moduleGenerator.js'

const moduleGenerators = [
  ModuleGeneratorGlobal,
  ModuleGeneratorClient,
  ModuleGeneratorDocument,
  ModuleGeneratorData,
  ModuleGeneratorScalar,
  // Packaging Stuff
  ModuleGenerator_namespace,
  ModuleGenerator_exports,
  // Schema Stuff
  ModuleGeneratorSchema,
  ModuleGeneratorSchemaDrivenDataMap,
  ModuleGeneratorArgumentsMap,
  ModuleGeneratorTypeInputsIndex,
  // Interface Stuff
  ModuleGeneratorSelectionSets,
  ModuleGeneratorSelect,
  ModuleGeneratorMethodsSelect,
  ModuleGeneratorMethodsRoot,
  ModuleGeneratorMethodsDocument,
]

export const generate = async (init: ConfigInit): Promise<Config> => {
  const config = await createConfig(init)

  const generatedModules = await Promise.all(
    moduleGenerators
      .map(generator => generator.generate(config))
      .map(async code => ({
        ...code,
        content: await config.formatter.formatText(code.content),
      })),
  )

  // todo clear directory before generating so that removed or renamed files are cleaned up.
  await config.fs.mkdir(config.paths.project.outputs.root, { recursive: true })
  await config.fs.mkdir(config.paths.project.outputs.modules, { recursive: true })

  // todo: add a test that if dir doesn't exist yet, it is created beforehand.
  if (config.paths.project.outputs.sdl && config.schema.via !== `sdl`) {
    await config.fs.writeFile(config.paths.project.outputs.sdl, config.schema.sdl)
  }

  await Promise.all(
    generatedModules.map((generatedModule) => {
      // dprint-ignore
      const filePath = `${config.paths.project.outputs.root}/${isExportsModule(generatedModule.name) ? `` : `modules/`}${getFileName(config, generatedModule)}`
      return config.fs.writeFile(filePath, generatedModule.content)
    }),
  )

  return config
}
