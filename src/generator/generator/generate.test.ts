import { createGraphQLResponseData, mockIntrospectionData, test } from '#test/helpers'
import * as Memfs from 'memfs'
import { describe, expect } from 'vitest'
import type { ConfigInitSchemaSdl } from '../$$.js'
import { defaults } from '../config/defaults.js'
import { generate, generateModules } from './generate.js'

// Suppress warnings in tests
defaults.lint.missingGraphqlSP = false

const fs = Memfs.fs.promises as any

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

describe(`importFormat`, () => {
  test(`default is jsExtension`, async () => {
    const { modules } = await generateModules({ schema })
    const schemaModule = modules.find(m => m.name === `schema/$`)!
    expect(schemaModule.content).toMatch(/import.*'\.\.\/data\.js'/)
    expect(schemaModule.content).toMatch(/import.*'\.\.\/scalar\.js'/)
  })

  test(`noExtension removes all .js extensions`, async () => {
    const { modules } = await generateModules({
      schema,
      importFormat: `noExtension`,
    })

    // Check schema module
    const schemaModule = modules.find(m => m.name === `schema/$`)!
    expect(schemaModule.content).toMatch(/import.*'\.\.\/data'/)
    expect(schemaModule.content).toMatch(/import.*'\.\.\/scalar'/)
    expect(schemaModule.content).toMatch(/import.*'\.\/\$\$'/)
    expect(schemaModule.content).not.toContain(`.js'`)

    // Check schema barrel
    const schemaBarrel = modules.find(m => m.name === `schema/$$`)!
    expect(schemaBarrel.content).not.toContain(`.js'`)

    // Check scalar module
    const scalarModule = modules.find(m => m.name === `scalar`)!
    expect(scalarModule.content).not.toContain(`.js'`)

    // Verify ALL modules have no .js extensions
    modules.forEach(module => {
      expect(module.content, `Module ${module.name} should not contain .js extensions`).not.toContain(`.js'`)
    })
  })
})

// test.only(`kitchen-sink generated modules`, async () => {
//   const basePath = `./tests/_/fixtures/schemas/kitchen-sink/graffle`
//   const filePaths = await globby(`${basePath}/**/*.ts`)
//   for (const filePath of filePaths) {
//     const relativeFilePath = Path.relative(basePath, filePath)
//     const content = await readFile(filePath, `utf8`)
//     expect(content).toMatchSnapshot(relativeFilePath)
//   }
// })

test(`root-types-mapped`, async () => {
  await Memfs.fs.promises.mkdir(process.cwd(), { recursive: true })
  const RootTypeCustomNameForQuery = `RootTypeCustomNameForQuery`
  await generate({
    fs,
    schema: {
      type: `sdl`,
      sdl: `
        schema {
          query: ${RootTypeCustomNameForQuery}
        }
        type ${RootTypeCustomNameForQuery} {
          id: ID
        }
      `,
    },
  })

  const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema/$.ts`, `utf8`)
  expect(SchemaTs).includes(`operationsAvailable: ["query"]`)
  expect(SchemaTs).includes(`RootUnion: $Types.${RootTypeCustomNameForQuery}`)
  expect(SchemaTs).toMatchSnapshot()

  const MethodsRootTs = Memfs.fs.readFileSync(`./graffle/modules/methods-root.ts`, `utf8`)
  expect(MethodsRootTs).includes(`__typename: "${RootTypeCustomNameForQuery}"`)
  expect(MethodsRootTs).includes(`InferResult.OperationQuery<`)
  expect(MethodsRootTs).toMatchSnapshot()
})

test(`schema with long type name`, async () => {
  await Memfs.fs.promises.mkdir(process.cwd(), { recursive: true })
  const typeName = `a`.repeat(200)
  await generate({
    fs: Memfs.fs.promises as any,
    schema: {
      type: `sdl`,
      sdl: `
        type Query { longTypeName: ${typeName} }
        type ${typeName} { id: ID }
      `,
    },
  })

  const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema/$.ts`, `utf8`)
  expect(SchemaTs).toMatchSnapshot()
})

test(`custom scalars module results in client prefilling those custom scalars`, async () => {
  await Memfs.fs.promises.mkdir(process.cwd(), { recursive: true })
  await Memfs.fs.promises.writeFile(
    `./scalars.ts`,
    `
      import { Graffle } from 'graffle'
      export const Date = Graffle.Scalar.create(\`Date\`, {
        decode: (value) => new globalThis.Date(value),
        encode: (value) => value.toISOString(),
      })
    `,
  )
  await generate({
    fs,
    schema: {
      type: `sdl`,
      sdl: `
        scalar Date
        type Query {
          date: Date
        }
      `,
    },
  })
  const ScalarTs = Memfs.fs.readFileSync(`./graffle/modules/scalar.ts`, `utf8`)
  expect(ScalarTs).toMatchSnapshot()
})

test(`custom headers can be set on introspection request`, async ({ fetch }) => {
  fetch.mockImplementation(() => Promise.resolve(createGraphQLResponseData(mockIntrospectionData)))
  await generate({
    fs,
    format: false, // todo: otherwise parse error because introspection query not yielding a valid shape?
    schema: {
      type: `url`,
      url: new URL(`https://example.com`),
      headers: {
        'x-custom': `test`,
      },
    },
  })
  const init = fetch.mock.calls[0]?.[1]
  expect(new Headers(init?.headers).get(`x-custom`)).toBe(`test`)
})
