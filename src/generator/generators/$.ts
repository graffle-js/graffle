import { Code } from '#/lib/Code'
import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator$$ } from './$$.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGenerator$ = createModuleGenerator(
  `$`,
  ({ config, code }) => {
    code(Code.reexportNamespace({
      as: config.nameNamespace,
      from: `./${getImportName(config, ModuleGenerator$$)}`,
    }))
    code(Code.reexportNamed({
      names: { schemaDrivenDataMap: 'schemaMap' },
      from: `./modules/${getImportName(config, ModuleGeneratorSchemaDrivenDataMap)}`,
    }))
    return code
  },
)
