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
      client: `#graffle/client`,
      schema: `#graffle/schema`,
      scalars: `#graffle/generator-helpers/standard-scalar-types`,
      utilitiesForGenerated: `#graffle/utilities-for-generated`,
      extensionTransportHttp: `#graffle/extensions/transport-http`,
      extensionDocumentBuilder: `#graffle/extensions/document-builder`,
    },
  })
