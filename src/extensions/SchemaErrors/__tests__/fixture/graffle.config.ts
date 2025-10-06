import { Generator } from '#graffle/generator'
import { schema } from '#test/schema/possible/schema'
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
