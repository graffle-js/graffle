import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorScalar } from './Scalar.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGeneratorClient = createModuleGenerator(
  `Client`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSchemaDrivenDataMap))
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(
      `import { ClientPreset } from '${config.paths.imports.grafflePackage.client}'`,
    )
    code()
    code(
      `export const create = ClientPreset.create({
        name: ${identifiers.$$Data}.Name,
        sddm: ${identifiers.$$SchemaDrivenDataMap}.schemaDrivenDataMap,
        scalars: ${identifiers.$$Scalar}.$registry,
        schemaUrl: ${identifiers.$$Data}.defaultSchemaUrl,
      }
      )`,
    )
  },
)
