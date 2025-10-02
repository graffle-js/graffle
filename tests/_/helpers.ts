import { execa, type ExecaMethod } from 'execa'
import * as FsJetpack from 'fs-jetpack'
import type { FSJetpack } from 'fs-jetpack/types.js'
import * as Path from 'node:path'
import type { Mock } from 'vitest'
import { test as testBase, vi } from 'vitest'
import type { ClientEmpty } from '../../src/client/client.js'
// import { Graffle } from '../../src/exports/index.js'
import { GraffleBare } from '../../src/exports/presets/bare.js'
// import type { GraffleBasic } from '../../src/exports/presets/basic.js'
// import type { GraffleMinimal } from '../../src/exports/presets/minimal.js'
// import type { SchemaDrivenDataMap } from '../../src/exports/utilities-for-generated.js'
// import { TransportMemory } from '../../src/extensions/TransportMemory/TransportMemory.js'
// import type { ConfigManager } from '../../src/lib/config-manager/__.js'
import { Grafaid } from '../../src/lib/grafaid/$.js'
import { CONTENT_TYPE_REC } from '../../src/lib/grafaid/http/http.js'
import { type SchemaService, serveSchema } from './lib/serveSchema.js'
// import { db } from './schemas/db.js'
import type { IntrospectionQuery } from 'graphql'
import { GraffleKit } from '../../src/exports/kit.js'
import { TestSchemas } from './fixtures/schemas/$.js'
import { schema } from './fixtures/schemas/pokemon/schema.js'

interface Project {
  fs: FSJetpack
  run: ExecaMethod
  addDprintConfig: () => Promise<void>
  addPokemonSchemaSDL: (relativePath?: string) => Promise<{
    relative: string
    absolute: string
  }>
}

export const createGraphQLResponseData = (data: null | object = {}) =>
  new Response(JSON.stringify({ data }), { status: 200, headers: { 'content-type': CONTENT_TYPE_REC } })

export const createGraphQLResponse = (body: object) =>
  new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': CONTENT_TYPE_REC } })

export const mockIntrospectionData = {
  __schema: {
    types: [
      {
        kind: `OBJECT`,
        name: `Query`,
        fields: [],
        interfaces: [],
      },
    ],
    queryType: { kind: `OBJECT`, name: `Query` },
    mutationType: null,
    subscriptionType: null,
    directives: [],
  },
} satisfies IntrospectionQuery

interface Fixtures {
  fetch: Mock<typeof globalThis.fetch>
  g0: ClientEmpty
  c0: GraffleKit.Context.ContextEmpty
  pokemonService: SchemaService
  project: Project
  schemas: typeof TestSchemas
  // graffle: GraffleMinimal.Client.With<{
  //   check: { preflight: false }
  // }>
  // kitchenSinkHttp: GraffleBasic.Client.With<{
  //   schema: { map: SchemaDrivenDataMap }
  //   check: { preflight: false }
  // }>
}

export const g0 = GraffleBare.create()

export const test = testBase.extend<Fixtures>({
  schemas: TestSchemas,
  c0: GraffleKit.Context.contextEmpty,
  project: async ({}, use) => { // eslint-disable-line
    /**
     * Package managers (e.g. PnPM) augment the PATH when running scripts so that within
     * the script line local binaries can be referenced.
     *
     * In the event a package script has been run to start a test using this fixture,
     * we want to remove the PATH augmentations. This is because the augmentations have
     * side effects upon the project we're trying to test in isolation. Any project
     * logic based on the state of PATH would have its integrity compromised.
     */
    const path = process.env[`PATH`]!
    const pathWithoutPackageManagerAugmentation = path
      .split(`:`)
      .filter(_ => !_.includes(`graffle`))
      .join(`:`)
    const fs = await FsJetpack.tmpDirAsync()
    const run = execa({ cwd: fs.cwd(), env: { PATH: pathWithoutPackageManagerAugmentation } })
    const project: Project = {
      fs,
      run,
      addDprintConfig: async () => {
        await fs.writeAsync(`dprint.json`, {
          typescript: {},
          plugins: [`https://plugins.dprint.dev/typescript-0.93.0.wasm`],
        })
      },
      addPokemonSchemaSDL: async (relativePath) => {
        const pathRelative = relativePath
          ? Path.join(relativePath, `schema.graphql`)
          : Path.join(`./`, `schema.graphql`)
        const contents = Grafaid.Schema.print(schema)
        await fs.writeAsync(pathRelative, contents)
        return {
          relative: pathRelative,
          absolute: Path.join(fs.cwd(), pathRelative),
        }
      },
    }
    await fs.writeAsync(`package.json`, {
      name: `test`,
      type: `module`,
      packageManager: `pnpm@9.12.2`,
      scripts: {
        'check:types': `tsc --noEmit`,
        // rollup: `rollup --configPlugin typescript --config rollup.config.ts`,
      },
      dependencies: {
        tsx: `4.19.1`,
        graphql: `16.9.0`,
        typescript: `5.6.3`,
        '@tsconfig/strictest': `2.0.5`,
        // '@rollup/plugin-node-resolve': `^15.3.0`,
        // '@rollup/plugin-terser': `^0.4.4`,
        // '@rollup/plugin-typescript': `^12.1.1`,
        // 'graffle': `link:..`,
        // 'rollup': `^4.24.0`,
        // 'rollup-plugin-visualizer': `^5.12.0`,
        // 'tslib': `^2.8.0`,
      },
    })
    await fs.writeAsync(`tsconfig.json`, {
      extends: `@tsconfig/strictest/tsconfig.json`,
      compilerOptions: {
        module: `Node16`,
        moduleResolution: `Node16`,
        target: `ES2023`,
      },
    })

    const isLink = Boolean(process.env[`e2e_link`])
    const graffleInstallPath = (isLink ? `` : `file:`)
      + Path.join(`..`, Path.relative(fs.cwd(), Path.join(import.meta.dirname, `../../`)))
    await run`pnpm add ${graffleInstallPath} tsx @tsconfig/strictest/tsconfig.json`
    console.log(`Scaffolded project at: ${project.fs.cwd()}\n`)
    await use(project)
  },
  // eslint-disable-next-line
  fetch: async ({}, use: any) => {
    const fetch = globalThis.fetch
    const fetchMock = vi.fn()
    // fetchMock.original = fetch
    globalThis.fetch = fetchMock

    await use(fetchMock)
    globalThis.fetch = fetch
  },
  // eslint-disable-next-line
  g0: async ({}, use) => {
    await use(g0)
  },
  // kitchenSink: async ({ fetch: _ }, use) => {
  //   const kitchenSink = KitchenSink.create()
  //     .use(TransportMemory)
  //     .transport()
  //   // kitchenSink.anyware(async ({ encode }) => {
  //   //   encode({ input: {}})
  //   // })
  //   // @ts-expect-error fixme
  //   await use(kitchenSink)
  // },
  // kitchenSinkHttp: async ({ fetch: _ }, use) => {
  //   const kitchenSink = KitchenSink
  //     .create()
  //     .transport({ url: `https://foo.io/api/graphql` })
  //   // @ts-expect-error fixme
  //   await use(kitchenSink)
  // },
  // kitchenSinkData: async ({}, use) => { // eslint-disable-line
  //   await use(db)
  // },
  // graffle: async ({ fetch: _ }, use) => {
  //   const graffle = Graffle
  //     .create()
  //     .transport({ url: new URL(`https://foo.io/api/graphql`) })
  //   // @ts-expect-error fixme
  //   await use(graffle)
  // },
  pokemonService: async ({}, use) => { // eslint-disable-line
    const pokemonService = await serveSchema({ schema })
    await use(pokemonService)
    await pokemonService.stop()
  },
})
