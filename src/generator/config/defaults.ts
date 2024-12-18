import type { ConfigInitLibraryPaths, InputImportFormat, InputOutputCase } from './configInit.js'

export const defaultNamespace = `Graffle`

export const defaultName = `default`

export const defaultLibraryPaths = {
  client: `graffle/client`,
  scalars: `graffle/generator-helpers/standard-scalar-types`,
  schema: `graffle/schema`,
  utilitiesForGenerated: `graffle/utilities-for-generated`,
  extensionTransportHttp: `graffle/extensions/transport-http`,
} satisfies ConfigInitLibraryPaths

export const defaultOutputCase: InputOutputCase = `kebab`

export const defaultImportFormat: InputImportFormat = `jsExtension`
