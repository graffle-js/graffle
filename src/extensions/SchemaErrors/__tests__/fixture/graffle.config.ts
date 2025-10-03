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
      client: `#graffle/client`,
      schema: `#graffle/schema`,
      scalars: `#graffle/generator-helpers/standard-scalar-types`,
      utilitiesForGenerated: `#graffle/utilities-for-generated`,
      extensionTransportHttp: `#graffle/extensions/transport-http`,
      extensionDocumentBuilder: `#graffle/extensions/document-builder`,
    },
    advanced: {
      schemaInterfaceExtendsEnabled: true,
    },
  })
  .use(SchemaErrors())
