import { TestSchemas } from '../../../../../tests/_/fixtures/schemas/_namespaces.js'
import { Generator } from '../../../../generator/_namespace.js'

const generate = async (
  input: {
    name: keyof typeof TestSchemas
    input?: Generator.Config.BuilderInput
    scalarsFile?: boolean
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
    scalars: input.scalarsFile ? `./${input.name}.scalars.ts` : undefined,
    libraryPaths: {
      client: `../../../../entrypoints/client.ts`,
      schema: `../../../../entrypoints/schema.ts`,
      scalars: `../../../../types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../../entrypoints/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../../entrypoints/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../../entrypoints/extensions/document-builder/runtime.ts`,
    },
    nameNamespace: true,
    ...input.input,
  })

  console.log(`generated at`, config.paths.project.outputs.root)
}

await generate({ name: `queryOnly` })
await generate({ name: `mutationOnly` })
await generate({ name: `possible`, scalarsFile: true })
