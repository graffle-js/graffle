import { camelCase } from 'es-toolkit'
import { join } from 'node:path'
import { Generator } from '../../../src/generator/__.js'
import { Grafaid } from '../../../src/lib/grafaid/__.js'

const generate = async (
  input: {
    dirName: string
    dirNameName?: boolean
    input?: Generator.Config.BuilderInput
  },
) => {
  const { schema } = await import(`./${input.dirName}/schema.js`)
  if (!(schema instanceof Grafaid.Schema.Schema)) {
    throw new Error(`Expected schema to be an instance of Grafaid.Schema.Schema`)
  }

  const inputPathRootDir = join(import.meta.dirname, input.dirName)

  await Generator.generate({
    name: input.dirNameName === false ? undefined : camelCase(input.dirName),
    currentWorkingDirectory: import.meta.dirname,
    schema: {
      type: `instance`,
      instance: schema,
    },
    // todo funky between this and passing path to sdl
    sourceDirPath: inputPathRootDir,
    outputSDL: true,
    outputDirPath: join(input.dirName, `graffle`),
    libraryPaths: {
      client: `../../../src/entrypoints/client.ts`,
      schema: `../../../src/entrypoints/schema.ts`,
      scalars: `../../../src/types/Schema/StandardTypes/scalar.ts`,
      utilitiesForGenerated: `../../../src/entrypoints/utilities-for-generated.ts`,
      extensionTransportHttp: `../../../src/entrypoints/extensions/transport-http/runtime.ts`,
    },
    ...input.input,
  })

  console.log(`generated at`, inputPathRootDir)
}

await generate({
  dirName: `query-only`,
  input: {
    nameNamespace: true,
  },
})

await generate({
  dirName: `mutation-only`,
  input: {
    nameNamespace: true,
  },
})

await generate({
  dirName: `pokemon`,
  input: {
    defaultSchemaUrl: new URL(`http://localhost:3000/graphql`),
    // name: `Pokemon`,
  },
})

await generate({
  dirName: `kitchen-sink`,
  dirNameName: false,
  // input: {
  //   scalars: `./kitchen-sink/scalars.ts`,
  // },
})
