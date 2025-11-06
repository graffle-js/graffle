import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'
import { ModuleGeneratorTypeInputsIndex } from './TypeInputsIndex.js'

/**
 * Generator for the `$` namespace that exposes internal types.
 *
 * Provides access to generated types that are useful for advanced usage and testing
 * but not part of the main public API.
 */
export const ModuleGenerator_internals = createModuleGenerator(
  `_internals`,
  ({ code, config }) => {
    code(
      `export type { TypeInputsIndex } from './modules/${getImportName(config, ModuleGeneratorTypeInputsIndex)}'`,
      `export type { Schema } from './modules/${getImportName(config, ModuleGeneratorSchema)}'`,
      `export type { SchemaDrivenDataMap } from './modules/${
        getImportName(config, ModuleGeneratorSchemaDrivenDataMap)
      }'`,
    )
    return code
  },
)
