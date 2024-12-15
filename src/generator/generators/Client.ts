import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorScalar } from './Scalar.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'

export const ModuleGeneratorClient = createModuleGenerator(
  `client`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSchemaDrivenDataMap))
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(
      `import * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`,
      `import { TransportHttp } from '${config.paths.imports.grafflePackage.extensionTransportHttp}'`,
    )
    code()
    code(`
      const context = ${identifiers.$$Utilities}.useReducer(
        {
          ...${identifiers.$$Utilities}.Context.States.contextEmpty,
          name: $$Data.Name,
          schemaMap: $$SchemaDrivenDataMap.schemaDrivenDataMap,
          scalars: $$Scalar.$registry,
        },
        TransportHttp({
          url: $$Data.defaultSchemaUrl,
        }),
      )

      export const create = ${identifiers.$$Utilities}.createConstructorWithContext(
        context
      )
    `)
  },
)
