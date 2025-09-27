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
      const graphql = initGraphQLTada<{
        introspection: $$Tada.introspection
      }>()

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

      const createWithGqlTada = (input) => {
        const client = ${$.$$Utilities}.createConstructorWithContext(context)(input)

        // Override the gql method to use gql-tada
        const originalGql = client.gql.bind(client)
        client.gql = (...args) => {
          // If it's a template literal call, use gql-tada
          if (args[0] && args[0].raw) {
            // gql-tada expects the template literal to be joined into a string
            const strings = args[0]
            const values = args.slice(1)
            let query = strings[0]
            for (let i = 0; i < values.length; i++) {
              query += String(values[i]) + strings[i + 1]
            }
            const document = graphql(query)
            return {
              send: (variables) => originalGql(document).send(variables)
            }
          }
          // Otherwise use the original implementation (for TypedDocumentNode)
          return originalGql(...args)
        }

        return client
      }

      export const create = createWithGqlTada
    `
  },
)
