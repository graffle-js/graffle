import { Syn } from '@wollybeard/kit'
import { createModuleGenerator, getImportName } from '../helpers/moduleGenerator.js'
import { ModuleGenerator_internals } from './_internals.js'
import { ModuleGeneratorClient } from './Client.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorDocument } from './Document.js'
import { ModuleGeneratorGlobal } from './global.js'
import { ModuleGeneratorGql } from './Gql.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'
import { ModuleGeneratorSelect } from './Select.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGenerator$$ = createModuleGenerator(
  `__`,
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

    code(Syn.TS.reexportNamed({ names: 'Name', from: `./modules/${getImportName(config, ModuleGeneratorData)}` }))
    code(
      Syn.TS.reexportNamed({ names: 'Select', from: `./modules/${getImportName(config, ModuleGeneratorSelect)}` }),
    )
    code(
      Syn.TS.reexportNamed({ names: 'create', from: `./modules/${getImportName(config, ModuleGeneratorClient)}` }),
    )
    code(Syn.TS.reexportNamed({ names: 'gql', from: `./modules/${getImportName(config, ModuleGeneratorGql)}` }))

    if (documentExports.length > 0) {
      code(
        Syn.TS.reexportNamed({
          names: documentExports,
          from: `./modules/${getImportName(config, ModuleGeneratorDocument)}`,
        }),
      )
    }

    code(
      Syn.TS.reexportNamespace({
        as: 'SelectionSets',
        from: `./modules/${getImportName(config, ModuleGeneratorSelectionSets)}`,
      }),
    )
    code(
      Syn.TS.reexportNamespace({
        as: '$Fields',
        from: `./modules/${getImportName(config, ModuleGeneratorSelectionSets)}`,
      }),
    )
    code(Syn.TS.reexportNamed({
      names: { schemaDrivenDataMap: 'schemaMap' },
      from: `./modules/${getImportName(config, ModuleGeneratorSchemaDrivenDataMap)}`,
    }))
    code(Syn.TS.reexportNamespace({ as: '$', from: `./${getImportName(config, ModuleGenerator_internals)}` }))

    return code
  },
)
