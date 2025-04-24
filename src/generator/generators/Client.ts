import { $ } from '../helpers/identifiers.js'
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
      `import * as ${$.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`,
      `import { TransportHttp } from '${config.paths.imports.grafflePackage.extensionTransportHttp}'`,
      `import { DocumentBuilder } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'`,
    )
    code()
    code(`
      const context = ${$.$$Utilities}.pipe(
        ${$.$$Utilities}.contextEmpty,
        ctx => ${$.$$Utilities}.Extensions.addAndApplyMany(ctx, [TransportHttp, DocumentBuilder]),
        ctx => ${$.$$Utilities}.Transports.configureCurrentOrThrow(ctx, { url: $$Data.defaultSchemaUrl }),
        ctx => ${$.$$Utilities}.Configuration.add(ctx, {
           schema: {
             name: $$Data.Name,
             map: $$SchemaDrivenDataMap.schemaDrivenDataMap,
           },
         }),
        ctx => ${$.$$Utilities}.Scalars.set(ctx, { scalars: $$Scalar.$registry }),
      )

      export const create = ${$.$$Utilities}.createConstructorWithContext(context)
    `)
  },
)
