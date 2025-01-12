import { Generator } from '../../../src/entrypoints/generator.js'

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
      client: `../../../src/entrypoints/client.ts`,
      schema: `../../../src/entrypoints/schema.ts`,
      scalars: `../../../src/types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../src/entrypoints/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../src/entrypoints/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../src/entrypoints/extensions/document-builder/runtime.ts`,
    },
  })
