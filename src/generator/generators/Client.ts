import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGeneratorClient = createModuleGenerator(
  `Client`,
  ({ config, code }) => {
    code(
      `import { createPrefilled } from '${config.paths.imports.grafflePackage.client}'`,
      `import { defaultSchemaUrl } from './${ModuleGeneratorData.name}.js'`,
      `import { schemaDrivenDataMap } from './${ModuleGeneratorSchemaDrivenDataMap.name}.js'`,
      `import { Name } from './${ModuleGeneratorData.name}.js'`,
    )
    code(`export const create = createPrefilled(Name, schemaDrivenDataMap, defaultSchemaUrl)`)
  },
)
