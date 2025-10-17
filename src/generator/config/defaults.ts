import type { ConfigInit } from './configInit.js'

export const defaults = {
  name: `default`,
  libraryPaths: {
    client: `graffle/client`,
    scalars: `graffle/generator-helpers/standard-scalar-types`,
    schema: `graffle/schema`,
    utilitiesForGenerated: `graffle/utilities-for-generated`,
    extensionTransportHttp: `graffle/extensions/transport-http`,
    extensionDocumentBuilder: `graffle/extensions/document-builder`,
  },
  outputCase: `kebab`,
  importFormat: `jsExtension`,
  lint: {
    missingCustomScalarCodec: true as boolean,
    missingGraphqlSP: true as boolean,
  },
  methodsOrganization: {
    logical: true as boolean,
    domains: false as const,
  },
} satisfies Partial<ConfigInit>
