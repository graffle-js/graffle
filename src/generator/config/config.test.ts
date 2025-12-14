import { test as testWithContext } from '#test/helpers'
import { NodeContext } from '@effect/platform-node'
import { Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import { describe, expect, test } from 'vitest'
import { createConfig } from './config.js'
import type { ConfigInitSchemaSdl } from './configInit.js'

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

const runWithNodeFs = <A, E>(effect: Effect.Effect<A, E, NodeContext.NodeContext>) =>
  Effect.runPromise(Effect.provide(effect, NodeContext.layer))

describe(`import format`, () => {
  test(`defaults to jsExtension`, async () => {
    const config = await runWithNodeFs(createConfig({ schema }))
    expect(config.importFormat).toEqual(`jsExtension`)
  })

  test(`respects explicit configuration`, async () => {
    const config = await runWithNodeFs(createConfig({ schema, importFormat: `noExtension` }))
    expect(config.importFormat).toEqual(`noExtension`)
  })
})

test(`can load schema from custom path`, async () => {
  const customPathFile = `/tests/_/fixtures/custom.graphql`
  const memoryFs = Fs.Memory.layer({
    [customPathFile]: `type Query { customNamedSchemaFile: Boolean }`,
  })

  const config = await Effect.runPromise(
    createConfig({ schema: { type: `sdlFile`, dirOrFilePath: customPathFile } }).pipe(
      Effect.provide(memoryFs),
    ),
  )

  const field = config.schema.instance.getQueryType()?.getFields()[`customNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(customPathFile + `$`))
  expect(config.schema.sdl).toMatchSnapshot()
  expect(field).toBeDefined()
})

test(`can load schema from custom dir using default file name`, async () => {
  const customPathDir = `/tests/_/fixtures`
  const schemaFilePath = `${customPathDir}/schema.graphql`
  const memoryFs = Fs.Memory.layer({
    [schemaFilePath]: `type Query { defaultNamedSchemaFile: Boolean }`,
  })

  const config = await Effect.runPromise(
    createConfig({ schema: { type: `sdlFile`, dirOrFilePath: customPathDir } }).pipe(
      Effect.provide(memoryFs),
    ),
  )

  const field = config.schema.instance.getQueryType()?.getFields()[`defaultNamedSchemaFile`]
  expect(config.paths.project.inputs.schema).match(new RegExp(schemaFilePath + `$`))
  expect(config.schema.sdl).toMatchSnapshot()
  expect(field).toBeDefined()
})

testWithContext(`can introspect schema from url`, async ({ pokemonService }) => {
  const config = await runWithNodeFs(
    createConfig({ schema: { type: `url`, url: pokemonService.url } }),
  )
  expect(config.paths.project.inputs.schema).toEqual(null)
  expect(config.schema.sdl).toMatchSnapshot()
})

testWithContext(`configured schema introspection options are passed to introspection`, async ({ pokemonService }) => {
  const c1 = await runWithNodeFs(
    createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
        options: {
          descriptions: true,
        },
      },
    }),
  )
  const c2 = await runWithNodeFs(
    createConfig({
      schema: {
        type: `url`,
        url: pokemonService.url,
        options: {
          descriptions: false,
        },
      },
    }),
  )
  expect(c1.schema.sdl).not.toEqual(c2.schema.sdl)
  expect(c1.schema.sdl).toMatch(/A date-time string at UTC/)
  expect(c2.schema.sdl).not.toMatch(/A date-time string at UTC/)
})

describe(`defaultSchemaUrl`, () => {
  testWithContext(`when false, should not set URL even for URL schema`, async ({ pokemonService }) => {
    const config = await runWithNodeFs(
      createConfig({
        schema: {
          type: `url`,
          url: pokemonService.url,
        },
        defaultSchemaUrl: false,
      }),
    )
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  testWithContext(`when true, should set URL from URL schema`, async ({ pokemonService }) => {
    const config = await runWithNodeFs(
      createConfig({
        schema: {
          type: `url`,
          url: pokemonService.url,
        },
        defaultSchemaUrl: true,
      }),
    )
    expect(config.options.defaultSchemaUrl).toEqual(pokemonService.url)
  })

  testWithContext(`when omitted, should default to true and set URL from URL schema`, async ({ pokemonService }) => {
    const config = await runWithNodeFs(
      createConfig({
        schema: {
          type: `url`,
          url: pokemonService.url,
        },
      }),
    )
    expect(config.options.defaultSchemaUrl).toEqual(pokemonService.url)
  })

  testWithContext(`when explicit URL provided, should use that URL`, async ({ pokemonService }) => {
    const customUrl = new URL(`https://custom.example.com/graphql`)
    const config = await runWithNodeFs(
      createConfig({
        schema: {
          type: `url`,
          url: pokemonService.url,
        },
        defaultSchemaUrl: customUrl,
      }),
    )
    expect(config.options.defaultSchemaUrl).toEqual(customUrl)
  })

  test(`when false with SDL schema, should be null`, async () => {
    const config = await runWithNodeFs(
      createConfig({
        schema,
        defaultSchemaUrl: false,
      }),
    )
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  test(`when true with SDL schema, should be null`, async () => {
    const config = await runWithNodeFs(
      createConfig({
        schema,
        defaultSchemaUrl: true,
      }),
    )
    expect(config.options.defaultSchemaUrl).toBeNull()
  })

  test(`when omitted with SDL schema, should be null`, async () => {
    const config = await runWithNodeFs(createConfig({ schema }))
    expect(config.options.defaultSchemaUrl).toBeNull()
  })
})
