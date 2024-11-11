import { expect } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { createConfig } from './config.js'

test(`can load schema from custom path`, async () => {
  const customPathFile = `./tests/_/fixtures/custom.graphql`
  const config = await createConfig({ schema: { type: `sdlFile`, dirOrFilePath: customPathFile } })
  const field = config.schema.instance.getQueryType()?.getFields()[`customNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(customPathFile + `$`))
  expect(config.schema.sdl).toMatchSnapshot()
  expect(field).toBeDefined()
})

test(`can load schema from custom dir using default file name`, async () => {
  const customPathDir = `tests/_/fixtures`
  const config = await createConfig({ schema: { type: `sdlFile`, dirOrFilePath: customPathDir } })
  const field = config.schema.instance.getQueryType()?.getFields()[`defaultNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(customPathDir + `/schema.graphql$`))
  expect(config.schema.sdl).toMatchSnapshot()
  expect(field).toBeDefined()
})

test(`can introspect schema from url`, async ({ pokemonService }) => {
  const config = await createConfig({ schema: { type: `url`, url: pokemonService.url } })
  expect(config.paths.project.inputs.schema).toEqual(null)
  expect(config.schema.sdl).toMatchSnapshot()
})

test(`configured schema introspection options are passed to introspection`, async ({ pokemonService, fetch }) => {
  fetch.mockImplementation(_ => {
    const response = new Response(JSON.stringify({ data: null }))
    return Promise.resolve(response)
  })
  await createConfig({
    schema: {
      type: `url`,
      url: pokemonService.url,
      options: {
        descriptions: false,
        directiveIsRepeatable: false,
        inputValueDeprecation: false,
        schemaDescription: false,
        oneOf: false,
        specifiedByUrl: false,
      },
    },
  }).catch((_: unknown) => {})
  const readableStream: ReadableStream = fetch.mock.calls[0]?.[0]?.body as any
  const { value }: { value: Uint8Array } = await readableStream.getReader().read() as any
  const document = JSON.parse(new TextDecoder().decode(value))
  expect(document).toMatchSnapshot()
})
