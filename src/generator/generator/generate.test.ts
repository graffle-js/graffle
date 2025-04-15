import { globby } from 'globby'
import * as Memfs from 'memfs'
import { readFile } from 'node:fs/promises'
import * as Path from 'node:path'
import { describe, expect } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import type { ConfigInitSchemaSdl } from '../_.js'
import { generate } from './generate.js'

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

describe(`importFormat`, () => {
  test(`default is jsExtension`, async () => {
    await generate({
      fs: Memfs.fs.promises as any,
      schema,
    })
    const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema.ts`, `utf8`)
    expect(SchemaTs).toMatch(/import.*".\/data.js"/)
  })
  test(`noExtension`, async () => {
    await generate({
      fs: Memfs.fs.promises as any,
      schema,
      importFormat: `noExtension`,
    })
    const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema.ts`, `utf8`)
    expect(SchemaTs).toMatch(/import.*".\/data"/)
  })
})

test(`kitchen-sink generated modules`, async () => {
  const basePath = `./tests/_/schemas/kitchen-sink/graffle`
  const filePaths = await globby(`${basePath}/**/*.ts`)
  for (const filePath of filePaths) {
    const relativeFilePath = Path.relative(basePath, filePath)
    const content = await readFile(filePath, `utf8`)
    expect(content).toMatchSnapshot(relativeFilePath)
  }
})

test(`root-types-mapped`, async () => {
  await Memfs.fs.promises.mkdir(process.cwd(), { recursive: true })
  await generate({
    fs: Memfs.fs.promises as any,
    schema: {
      type: `sdl`,
      sdl: `
        schema {
          query: QueryRoot
        }
        type QueryRoot {
          id: ID
        }
      `,
    },
  })

  const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema.ts`, `utf8`)
  expect(SchemaTs).includes(`operationsAvailable: ["query"]`)
  expect(SchemaTs).includes(`RootUnion: Schema.QueryRoot`)
  expect(SchemaTs).toMatchSnapshot()

  const MethodsRootTs = Memfs.fs.readFileSync(`./graffle/modules/methods-root.ts`, `utf8`)
  expect(MethodsRootTs).includes(`__typename: "QueryRoot"`)
  expect(MethodsRootTs).includes(`InferResult.OperationQuery<`)
  expect(MethodsRootTs).toMatchSnapshot()
})

test(`schema with long type name`, async () => {
  await Memfs.fs.promises.mkdir(process.cwd(), { recursive: true })
  const typeName = "a".repeat(200);
  await generate( {
    fs: Memfs.fs.promises as any,
    schema: {
      type: `sdl`,
      sdl: `
        type ${typeName} {
          id: ID
        }
        type Query {
          longTypeName: ${typeName}
        }
      `
    }
  })

  const SchemaTs = Memfs.fs.readFileSync(`./graffle/modules/schema.ts`, `utf8`)
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
    fs: Memfs.fs.promises as any,
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
  await generate({
    schema: {
      type: `url`,
      url: new URL(`https://example.com`),
      headers: {
        'x-custom': `test`,
      },
    },
  }).catch(() => {/* ignore */})
  expect(fetch.mock.calls[0]?.[0].headers.get(`x-custom`)).toBe(`test`)
})
