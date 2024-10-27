import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorClient } from './Client.js'
import { ModuleGeneratorGlobal } from './global.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'
import { ModuleGeneratorSelect } from './Select.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGenerator_ = createModuleGenerator(
  `_`,
  ({ code, config }) => {
    code(`
      // We import the global module for good measure although it is not clear it is always needed.
      // It at least helps with Twoslash wherein without this import here Twoslash will not include the global module.
      // In real TypeScript projects it seems the global module is included automatically. But there could be certain tsconfig
      // setups where this still indeed does help.
      import './modules/${getImportName(config, ModuleGeneratorGlobal)}'
    `)
    code()
    code(
      `export { Select } from './modules/${getImportName(config, ModuleGeneratorSelect)}'`,
      `export { create } from './modules/${getImportName(config, ModuleGeneratorClient)}'`,
      `export * as SelectionSets from './modules/${getImportName(config, ModuleGeneratorSelectionSets)}'`,
      `export { schemaDrivenDataMap } from './modules/${getImportName(config, ModuleGeneratorSchemaDrivenDataMap)}'`,
    )

    return code
  },
)
