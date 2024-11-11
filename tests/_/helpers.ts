import { execa, type ExecaMethod } from 'execa'
import * as FsJetpack from 'fs-jetpack'
import type { FSJetpack } from 'fs-jetpack/types.js'
import * as Path from 'node:path'
import type { Mock } from 'vitest'
import { test as testBase, vi } from 'vitest'
import type { Client } from '../../src/client/client.js'
import { Graffle } from '../../src/entrypoints/main.js'
import type { Context, SchemaDrivenDataMap } from '../../src/entrypoints/utilities-for-generated.js'
import type { ConfigManager } from '../../src/lib/config-manager/__.js'
import { Grafaid } from '../../src/lib/grafaid/__.js'
import { CONTENT_TYPE_REC } from '../../src/lib/grafaid/http/http.js'
import { type SchemaService, serveSchema } from './lib/serveSchema.js'
import { db } from './schemas/db.js'
import { Graffle as KitchenSink } from './schemas/kitchen-sink/graffle/__.js'
import { schema as kitchenSinkSchema } from './schemas/kitchen-sink/schema.js'
import { schema } from './schemas/pokemon/schema.js'

interface Project {
  fs: FSJetpack
  run: ExecaMethod
  addDprintConfig: () => Promise<void>
  addPokemonSchemaSDL: (relativePath?: string) => Promise<{
    relative: string
    absolute: string
  }>
}

export const kitchenSink = KitchenSink.create({
  schema: kitchenSinkSchema,
})

export const createResponse = (body: object) =>
  new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': CONTENT_TYPE_REC } })

interface Fixtures {
  fetch: Mock<(request: Request) => Promise<Response>>
  pokemonService: SchemaService
  graffle: Client<Context>
  kitchenSink: Client<ConfigManager.SetProperties<Context, { name: `default`; schemaMap: SchemaDrivenDataMap }>>
  kitchenSinkHttp: Client<ConfigManager.SetProperties<Context, { name: `default`; schemaMap: SchemaDrivenDataMap }>>
  kitchenSinkData: typeof db
  project: Project
}

export const test = testBase.extend<Fixtures>({
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
  fetch: async ({}, use) => {
    const fetch = globalThis.fetch
    const fetchMock = vi.fn()
    globalThis.fetch = fetchMock

    await use(fetchMock)
    globalThis.fetch = fetch
  },
  kitchenSink: async ({ fetch: _ }, use) => {
    const kitchenSink = KitchenSink.create({ schema: kitchenSinkSchema })
    // @ts-expect-error fixme
    await use(kitchenSink)
  },
  kitchenSinkHttp: async ({ fetch: _ }, use) => {
    const kitchenSink = KitchenSink.create({ schema: `https://foo.io/api/graphql` })
    // @ts-expect-error fixme
    await use(kitchenSink)
  },
  kitchenSinkData: async ({}, use) => { // eslint-disable-line
    await use(db)
  },
  graffle: async ({ fetch: _ }, use) => {
    const graffle = Graffle.create({ schema: new URL(`https://foo.io/api/graphql`) })
    // @ts-expect-error fixme
    await use(graffle)
  },
  pokemonService: async ({}, use) => { // eslint-disable-line
    const pokemonService = await serveSchema({ schema })
    await use(pokemonService)
    await pokemonService.stop()
  },
})
