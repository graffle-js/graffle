import { createGraphQLResponseData, mockIntrospectionData, test } from '#test/helpers'
import { NodeContext } from '@effect/platform-node'
import { Env, Fs } from '@wollybeard/kit'
import { Effect } from 'effect'
import { describe, expect } from 'vitest'
import type { ConfigInitSchemaSdl } from '../__.js'
import { defaults } from '../config/defaults.js'
import type { GeneratedModule } from '../helpers/moduleGenerator.js'
import { generate, generateModules } from './generate.js'

const p = Fs.Path.fromLiteral

// Suppress warnings in tests
defaults.lint.missingGraphqlSP = false

const schema: ConfigInitSchemaSdl = {
  type: `sdl`,
  sdl: `type Query { ok: Boolean }`,
}

const runWithNodeFs = <A, E>(effect: Effect.Effect<A, E, NodeContext.NodeContext>) =>
  Effect.runPromise(Effect.provide(effect, NodeContext.layer))

describe(`importFormat`, () => {
  test(`default is jsExtension`, async () => {
    const { modules } = await runWithNodeFs(generateModules({ schema }))
    const schemaModule = modules.find((m: GeneratedModule) => m.name === `schema/_`)!
    expect(schemaModule.content).toMatch(/import.*'\.\.\/data\.js'/)
    expect(schemaModule.content).toMatch(/import.*'\.\.\/scalar\.js'/)
  })

  test(`noExtension removes all .js extensions`, async () => {
    const { modules } = await runWithNodeFs(
      generateModules({
        schema,
        importFormat: `noExtension`,
      }),
    )

    // Check schema module
    const schemaModule = modules.find((m: GeneratedModule) => m.name === `schema/_`)!
    expect(schemaModule.content).toMatch(/import.*'\.\.\/data'/)
    expect(schemaModule.content).toMatch(/import.*'\.\.\/scalar'/)
    expect(schemaModule.content).toMatch(/import.*'\.\/__'/)
    expect(schemaModule.content).not.toContain(`.js'`)

    // Check schema barrel
    const schemaBarrel = modules.find((m: GeneratedModule) => m.name === `schema/__`)!
    expect(schemaBarrel.content).not.toContain(`.js'`)

    // Check scalar module
    const scalarModule = modules.find((m: GeneratedModule) => m.name === `scalar`)!
    expect(scalarModule.content).not.toContain(`.js'`)

    // Verify ALL modules have no .js extensions
    modules.forEach((module: GeneratedModule) => {
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
  const RootTypeCustomNameForQuery = `RootTypeCustomNameForQuery`

  const program = Effect.gen(function*() {
    yield* generate({
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
    const base = Fs.Path.join(Env.env.cwd, p(`./graffle/modules/`))
    const SchemaTs = yield* Fs.readString(Fs.Path.join(base, p(`./schema/_.ts`)))
    const MethodsRootTs = yield* Fs.readString(Fs.Path.join(base, p(`./methods-root.ts`)))
    return { SchemaTs, MethodsRootTs }
  })

  const { SchemaTs, MethodsRootTs } = await Effect.runPromise(
    program.pipe(Effect.provide(Fs.Memory.layer({}))),
  )

  expect(SchemaTs).toMatch(/operationsAvailable: \[.*QUERY\]/)
  expect(SchemaTs).includes(`RootUnion: $Types.${RootTypeCustomNameForQuery}`)
  expect(SchemaTs).toMatchSnapshot()

  expect(MethodsRootTs).includes(`__typename: '${RootTypeCustomNameForQuery}'`)
  expect(MethodsRootTs).includes(`InferResult.OperationQuery<`)
  expect(MethodsRootTs).toMatchSnapshot()
})

test(`schema with long type name`, async () => {
  const typeName = `a`.repeat(200)

  const program = Effect.gen(function*() {
    yield* generate({
      schema: {
        type: `sdl`,
        sdl: `
          type Query { longTypeName: ${typeName} }
          type ${typeName} { id: ID }
        `,
      },
    })
    const schemaPath = Fs.Path.join(Env.env.cwd, p(`./graffle/modules/schema/_.ts`))
    const SchemaTs = yield* Fs.readString(schemaPath)
    return SchemaTs
  })

  const SchemaTs = await Effect.runPromise(
    program.pipe(Effect.provide(Fs.Memory.layer({}))),
  )
  expect(SchemaTs).toMatchSnapshot()
})

test(`custom scalars module results in client prefilling those custom scalars`, async () => {
  const customScalarsCode = `
    import { Graffle } from 'graffle'
    export const Date = Graffle.Scalar.create(\`Date\`, {
      decode: (value) => new globalThis.Date(value),
      encode: (value) => value.toISOString(),
    })
  `

  const layout = Fs.Builder.spec(Env.env.cwd)
    .file(`scalars.ts`, customScalarsCode)
    .toLayout()

  const program = Effect.gen(function*() {
    yield* generate({
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
    const scalarPath = Fs.Path.join(Env.env.cwd, p(`./graffle/modules/scalar.ts`))
    const ScalarTs = yield* Fs.readString(scalarPath)
    return ScalarTs
  })

  const ScalarTs = await Effect.runPromise(
    program.pipe(Effect.provide(Fs.Memory.layer(layout))),
  )
  expect(ScalarTs).toMatchSnapshot()
})

test(`custom headers can be set on introspection request`, async ({ fetch }) => {
  fetch.mockImplementation(() => Promise.resolve(createGraphQLResponseData(mockIntrospectionData)))

  await Effect.runPromise(
    generate({
      format: false, // todo: otherwise parse error because introspection query not yielding a valid shape?
      schema: {
        type: `url`,
        url: new URL(`https://example.com`),
        headers: {
          'x-custom': `test`,
        },
      },
    }).pipe(Effect.provide(Fs.Memory.layer({}))),
  )

  const init = fetch.mock.calls[0]?.[1]
  expect(new Headers(init?.headers).get(`x-custom`)).toBe(`test`)
})
