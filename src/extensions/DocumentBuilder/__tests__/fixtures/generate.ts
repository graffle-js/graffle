import { TestSchemas } from '../../../../../tests/_/fixtures/schemas/$.js'
import { Generator } from '../../../../generator/$.js'

const generate = async (
  input: {
    name: keyof typeof TestSchemas
    input?: Generator.Config.BuilderInput
    scalarsFile?: boolean
  },
) => {
  const schema = TestSchemas[input.name]

  const config = await Generator.generate({
    name: input.name + (input.scalarsFile ? 'WithScalars' : ''),
    currentWorkingDirectory: import.meta.dirname,
    schema: {
      type: `instance`,
      instance: schema,
    },
    outputSDL: true,
    outputDirPath: input.name + (input.scalarsFile ? '-with-scalars' : ''),
    advanced: {
      schemaInterfaceExtendsEnabled: true,
    },
    scalars: input.scalarsFile ? `./${input.name}.scalars.ts` : undefined,
    libraryPaths: {
      client: `../../../../exports/client.ts`,
      schema: `../../../../exports/schema.ts`,
      scalars: `../../../../types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../../exports/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../../exports/extensions/transport-http/runtime.ts`,
      extensionDocumentBuilder: `../../../../exports/extensions/document-builder/runtime.ts`,
    },
    nameNamespace: true,
    ...input.input,
  })

  console.log(`generated at`, config.paths.project.outputs.root)
}

await generate({ name: `queryOnly` })
await generate({ name: `mutationOnly` })
await generate({ name: `possible`, scalarsFile: false })
await generate({ name: `possible`, scalarsFile: true })
