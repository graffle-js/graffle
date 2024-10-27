import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGeneratorClient = createModuleGenerator(
  `Client`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSchemaDrivenDataMap))
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(
      `import { createPrefilled } from '${config.paths.imports.grafflePackage.client}'`,
    )
    code(
      `export const create = createPrefilled(${identifiers.$$Data}.Name, ${identifiers.$$SchemaDrivenDataMap}.schemaDrivenDataMap, ${identifiers.$$Data}.defaultSchemaUrl)`,
    )
  },
)
