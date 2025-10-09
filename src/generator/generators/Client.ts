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
      import { initGraphQLTada } from 'gql.tada'

      // Initialize gql-tada with the generated introspection types
      type GqlTada = ReturnType<typeof initGraphQLTada<{
        introspection: $$Tada.introspection
      }>>

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

      export const create: typeof _create = (input) => {
        const client = _create(input)
        // Cast the gql method to gql-tada for type inference
        ;(client as any).gql = client.gql as any as GqlTada
        return client
      }
    `
  },
)
