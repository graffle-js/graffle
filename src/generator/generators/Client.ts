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

      /**
       * Create a Graffle client for the ${config.name} GraphQL schema.
       *
       * Pre-configured with:
       * - HTTP transport to {@link $$Data.defaultSchemaUrl}
       * - Document builder for type-safe queries
       * - Schema-driven data mapping
       * - Custom scalar codecs
       * - GraphQL string parsing via integrated type system
       *
       * @param input - Optional client configuration to override defaults
       *
       * @example
       * \`\`\`ts
       * import { create } from './graffle/client${config.importFormat === 'jsExtension' ? '.js' : ''}'
       *
       * const client = create()
       * const result = await client.query.pokemon({ name: true })
       * \`\`\`
       */
      export const create = ${$.$$Utilities}.createConstructorWithContext(context)
    `
  },
)
