import { type Fs, writeFileAndCreateDir } from '#~/lib/fsp.js'
import { test } from '@test/fixtures/helpers'
import * as Memfs from 'memfs'
import * as Path from 'node:path'
import { describe, expect } from 'vitest'
import { createConfig } from './config.js'
import type { ConfigInitSchemaSdl } from './configInit.js'

const fs = Memfs.fs.promises as any as Fs

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

describe(`import format`, () => {
  test(`defaults to jsExtension`, async () => {
    const config = await createConfig({ schema })
    expect(config.importFormat).toEqual(`jsExtension`)
  })

  test(`respects explicit configuration`, async () => {
    const config = await createConfig({ schema, importFormat: `noExtension` })
    expect(config.importFormat).toEqual(`noExtension`)
  })
})

test(`can load schema from custom path`, async () => {
  const customPathFile = `./tests/_/fixtures/custom.graphql`
  await writeFileAndCreateDir(fs, customPathFile, `type Query { customNamedSchemaFile: Boolean }`)

  const config = await createConfig({ fs, schema: { type: `sdlFile`, dirOrFilePath: customPathFile } })
  const field = config.schema.instance.getQueryType()?.getFields()[`customNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(customPathFile + `$`))
  expect(config.schema.sdl).toMatchSnapshot()
  expect(field).toBeDefined()
})

test(`can load schema from custom dir using default file name`, async () => {
  const customPathDir = `tests/_/fixtures`
  const schemaFilePath = Path.join(customPathDir, `schema.graphql`)
  await writeFileAndCreateDir(fs, schemaFilePath, `type Query { defaultNamedSchemaFile: Boolean }`)

  const config = await createConfig({ fs, schema: { type: `sdlFile`, dirOrFilePath: customPathDir } })
  const field = config.schema.instance.getQueryType()?.getFields()[`defaultNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(schemaFilePath + `$`))
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

describe(`defaultSchemaUrl`, () => {
  test(`when false, should not set URL even for URL schema`, async ({ pokemonService }) => {
    const config = await createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
      },
      defaultSchemaUrl: false,
    })
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  test(`when true, should set URL from URL schema`, async ({ pokemonService }) => {
    const config = await createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
      },
      defaultSchemaUrl: true,
    })
    expect(config.options.defaultSchemaUrl).toEqual(pokemonService.url)
  })

  test(`when omitted, should default to true and set URL from URL schema`, async ({ pokemonService }) => {
    const config = await createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
      },
    })
    expect(config.options.defaultSchemaUrl).toEqual(pokemonService.url)
  })

  test(`when explicit URL provided, should use that URL`, async ({ pokemonService }) => {
    const customUrl = new URL(`https://custom.example.com/graphql`)
    const config = await createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
      },
      defaultSchemaUrl: customUrl,
    })
    expect(config.options.defaultSchemaUrl).toEqual(customUrl)
  })

  test(`when false with SDL schema, should be null`, async () => {
    const config = await createConfig({
      schema,
      defaultSchemaUrl: false,
    })
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  test(`when true with SDL schema, should be null`, async () => {
    const config = await createConfig({
      schema,
      defaultSchemaUrl: true,
    })
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  test(`when omitted with SDL schema, should be null`, async () => {
    const config = await createConfig({
      schema,
    })
    expect(config.options.defaultSchemaUrl).toBeNull()
  })
})
