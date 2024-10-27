import { globby } from 'globby'
import * as Memfs from 'memfs'
import { readFile } from 'node:fs/promises'
import * as Path from 'node:path'
import { expect, test } from 'vitest'
import { generate } from './generate.js'

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
  expect(SchemaTs).includes(`operationsAvailable: ['query']`)
  expect(SchemaTs).includes(`RootUnion: Schema.QueryRoot`)
  expect(SchemaTs).toMatchSnapshot()

  const MethodsRootTs = Memfs.fs.readFileSync(`./graffle/modules/methods-root.ts`, `utf8`)
  expect(MethodsRootTs).includes(`__typename: 'QueryRoot'`)
  expect(MethodsRootTs).includes(`InferResult.OperationQuery<$SelectionSet`)
  expect(MethodsRootTs).toMatchSnapshot()
})
