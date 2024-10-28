import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator_ } from './_.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGenerator__ = createModuleGenerator(
  `__`,
  ({ config, code }) => {
    code(
      `export * as ${config.nameNamespace} from './${getImportName(config, ModuleGenerator_)}'`,
      `export { schemaDrivenDataMap as schemaMap } from './modules/${
        getImportName(config, ModuleGeneratorSchemaDrivenDataMap)
      }'`,
    )
    return code
  },
)
