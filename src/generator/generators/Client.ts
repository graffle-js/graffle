import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorScalar } from './Scalar.js'
import { ModuleGeneratorSchemaDrivenDataMap } from './SchemaDrivenDataMap.js'
import { ModuleGeneratorTada } from './Tada.js'

export const ModuleGeneratorClient = createModuleGenerator(
  `client`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSchemaDrivenDataMap))
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorScalar))
    code(importModuleGenerator(config, ModuleGeneratorTada))
    code`
      import * as ${$.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
      import { TransportHttp } from '${config.paths.imports.grafflePackage.extensionTransportHttp}'
      import { DocumentBuilder } from '${config.paths.imports.grafflePackage.extensionDocumentBuilder}'
      import { initGraphQLTada } from '${config.paths.imports.grafflePackage.client}'

      // Initialize gql-tada with the generated introspection types and custom scalars
      type GqlTada = ReturnType<
        typeof initGraphQLTada<{
          introspection: $$Tada.introspection
          scalars: { [K in keyof $$Scalar.$Registry['map']]: $$Utilities.Schema.Scalar.GetDecoded<$$Scalar.$Registry['map'][K]> }
        }>
      >

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

      const _create = ${$.$$Utilities}.createConstructorWithContext(context)

      export const create = _create as typeof _create & {
        (input?: Parameters<typeof _create>[0]): Omit<ReturnType<typeof _create>, 'gql'> & { gql: GqlTada }
      }
    `
  },
)
