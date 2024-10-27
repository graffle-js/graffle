import { schema } from '../../../../../tests/_/schemas/kitchen-sink/schema.js'
import { Generator } from '../../../../entrypoints/generator.js'
import { SchemaErrors } from '../../gentime.js'

export default Generator
  .configure({
    name: `GraffleSchemaErrors`,
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
    },
  })
  .use(SchemaErrors())
