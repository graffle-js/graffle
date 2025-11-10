import { Str } from '@wollybeard/kit'
import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator$$ } from './__.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGenerator$ = createModuleGenerator(
  `_`,
  ({ config, code }) => {
    code(Str.Code.TS.reexportNamespace({
      as: config.nameNamespace,
      from: `./${getImportName(config, ModuleGenerator$$)}`,
    }))
    code(Str.Code.TS.reexportNamed({
      names: { schemaDrivenDataMap: 'schemaMap' },
      from: `./modules/${getImportName(config, ModuleGeneratorSchemaDrivenDataMap)}`,
    }))
    return code
  },
)
