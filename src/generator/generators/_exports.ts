import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator_internals } from './_internals.js'
import { ModuleGeneratorClient } from './Client.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorDocument } from './Document.js'
import { ModuleGeneratorGlobal } from './global.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'
import { ModuleGeneratorSelect } from './Select.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGenerator_exports = createModuleGenerator(
  `_exports`,
  ({ code, config }) => {
    code(`
      // We import the global module for good measure although it is not clear it is always needed.
      // It at least helps with Twoslash wherein without this import here Twoslash will not include the global module.
      // In real TypeScript projects it seems the global module is included automatically. But there could be certain tsconfig
      // setups where this still indeed does help.
      import './modules/${getImportName(config, ModuleGeneratorGlobal)}'
    `)
    code()

    // Build the list of document exports based on what root types exist
    const documentExports = []
    if (config.schema.kindMap.index.Root.query) {
      documentExports.push('query')
    }
    if (config.schema.kindMap.index.Root.mutation) {
      documentExports.push('mutation')
    }
    if (config.schema.kindMap.index.Root.subscription) {
      documentExports.push('subscription')
    }

    const documentExportLine = documentExports.length > 0
      ? `export { ${documentExports.join(', ')} } from './modules/${getImportName(config, ModuleGeneratorDocument)}'`
      : ''

    const exports = [
      `export { Name } from './modules/${getImportName(config, ModuleGeneratorData)}'`,
      `export { Select } from './modules/${getImportName(config, ModuleGeneratorSelect)}'`,
      `export { create } from './modules/${getImportName(config, ModuleGeneratorClient)}'`,
      documentExportLine,
      `export * as SelectionSets from './modules/${getImportName(config, ModuleGeneratorSelectionSets)}'`,
      `export { schemaDrivenDataMap as schemaMap } from './modules/${
        getImportName(config, ModuleGeneratorSchemaDrivenDataMap)
      }'`,
      `export * as $ from './${getImportName(config, ModuleGenerator_internals)}'`,
    ].filter(line => line !== '') // Remove empty lines

    code(...exports)

    return code
  },
)
