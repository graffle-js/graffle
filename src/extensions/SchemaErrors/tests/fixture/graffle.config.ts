import { schema } from '../../../../../tests/_/schemas/kitchen-sink/schema.js'
import { Generator } from '../../../../entrypoints/generator.js'
import { SchemaErrors } from '../../gentime.js'

export default Generator
  .configure({
    name: `graffleSchemaErrors`,
    nameNamespace: true,
    schema: {
      type: `instance`,
      instance: schema,
    },
    lint: {
      missingCustomScalarCodec: false,
    },
    libraryPaths: {
      client: `../../../../entrypoints/client.ts`,
      schema: `../../../../entrypoints/schema.ts`,
      scalars: `../../../../types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../../entrypoints/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../../entrypoints/extensions/transport-http/runtime.ts`,
    },
  })
  .use(SchemaErrors())
