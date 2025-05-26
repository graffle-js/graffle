import { Generator } from '../../../src/exports/generator.js'

export default Generator
  .configure({
    name: `github`,
    nameNamespace: true,
    schema: {
      type: `sdlFile`,
      dirOrFilePath: `./`,
    },
    lint: {
      missingCustomScalarCodec: false,
    },
    libraryPaths: {
      client: `../../../src/exports/client.ts`,
      schema: `../../../src/exports/schema.ts`,
      scalars: `../../../src/types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../src/exports/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../src/exports/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../src/exports/extensions/document-builder/runtime.ts`,
    },
  })
