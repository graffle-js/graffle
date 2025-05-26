import { schema } from '../../../../../tests/_/fixtures/schemas/possible/schema.js'
import { Generator } from '../../../../exports/generator.js'
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
      client: `../../../../exports/client.ts`,
      schema: `../../../../exports/schema.ts`,
      scalars: `../../../../types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../../exports/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../../exports/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../../exports/extensions/document-builder/runtime.ts`,
    },
    advanced: {
      schemaInterfaceExtendsEnabled: true,
    },
  })
  .use(SchemaErrors())
