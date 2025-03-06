import { Generator } from '../../../../src/generator/_namespace.js'
import { TestSchemas } from '../../../../tests/_/fixtures/schemas/_namespaces.js'

const generate = async (
  input: {
    name: keyof typeof TestSchemas
    input?: Generator.Config.BuilderInput
  },
) => {
  const schema = TestSchemas[input.name]

  const config = await Generator.generate({
    name: input.name,
    currentWorkingDirectory: import.meta.dirname,
    schema: {
      type: `instance`,
      instance: schema,
    },
    outputSDL: true,
    outputDirPath: input.name,
    advanced: {
      schemaInterfaceExtendsEnabled: true,
    },
    libraryPaths: {
      client: `../../../../src/entrypoints/client.ts`,
      schema: `../../../../src/entrypoints/schema.ts`,
      scalars: `../../../../src/types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../../src/entrypoints/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../../src/entrypoints/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../../src/entrypoints/extensions/document-builder/runtime.ts`,
    },
    nameNamespace: true,
    ...input.input,
  })

  console.log(`generated at`, config.paths.project.outputs.root)
}

await generate({ name: `queryOnly` })
await generate({ name: `mutationOnly` })
await generate({ name: `possible` })
