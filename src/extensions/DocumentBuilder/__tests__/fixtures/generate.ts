import { Generator } from '#src/generator/$.js'
import { TestSchemas } from '#test/fixtures/schemas/$'
import { rmSync } from 'node:fs'
import { join } from 'node:path'

const generate = async (
  input: {
    name: keyof typeof TestSchemas
    input?: Generator.Config.BuilderInput
    scalarsFile?: boolean
  },
) => {
  const schema = TestSchemas[input.name]
  const outputDirPath = input.name + (input.scalarsFile ? '-with-scalars' : '')
  const fullOutputPath = join(import.meta.dirname, outputDirPath)

  // Clean up existing generated directory
  rmSync(fullOutputPath, { recursive: true, force: true })

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
      client: `#graffle/client`,
      schema: `#graffle/schema`,
      scalars: `#graffle/generator-helpers/standard-scalar-types`,
      utilitiesForGenerated: `#graffle/utilities-for-generated`,
      extensionTransportHttp: `#graffle/extensions/transport-http`,
      extensionDocumentBuilder: `#graffle/extensions/document-builder`,
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
