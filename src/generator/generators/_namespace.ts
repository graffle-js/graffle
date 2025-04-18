import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator_exports } from './_exports.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGenerator_namespace = createModuleGenerator(
  `_namespace`,
  ({ config, code }) => {
    code(
      `export * as ${config.nameNamespace} from './${getImportName(config, ModuleGenerator_exports)}'`,
      `export { schemaDrivenDataMap as schemaMap } from './modules/${
        getImportName(config, ModuleGeneratorSchemaDrivenDataMap)
      }'`,
    )
    return code
  },
)
