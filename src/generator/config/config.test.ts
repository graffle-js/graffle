import { expect } from 'vitest'
import { describe } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { createConfig } from './config.js'
import type { ConfigInitSchemaSdl } from './configInit.js'

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

describe(`import format`, () => {
  test(`defaults to jsExtension`, async () => {
    const config = await createConfig({ schema })
    expect(config.importFormat).toEqual(`jsExtension`)
  })
  test(`noExtension`, async () => {
    const customPathFile = `./tests/_/fixtures/custom.graphql`
    const config = await createConfig({
      schema: { type: `sdlFile`, dirOrFilePath: customPathFile },
      importFormat: `noExtension`,
    })
    expect(config.importFormat).toEqual(`noExtension`)
  })
})

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

test(`configured schema introspection options are passed to introspection`, async ({ pokemonService }) => {
  const c1 = await createConfig({
    schema: {
      type: `url`,
      url: pokemonService.url,
      options: {
        descriptions: true,
      },
    },
  })
  const c2 = await createConfig({
    schema: {
      type: `url`,
      url: pokemonService.url,
      options: {
        descriptions: false,
      },
    },
  })
  expect(c1.schema.sdl).not.toEqual(c2.schema.sdl)
  expect(c1.schema.sdl).toMatch(/A date-time string at UTC/)
  expect(c2.schema.sdl).not.toMatch(/A date-time string at UTC/)
})
