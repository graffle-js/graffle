import { execa, type ExecaMethod } from 'execa'
import * as FsJetpack from 'fs-jetpack'
import type { FSJetpack } from 'fs-jetpack/types.js'
import * as Path from 'node:path'
import type { Mock } from 'vitest'
import { test as testBase, vi } from 'vitest'
import { Graffle } from '../../src/entrypoints/main.js'
import type { ClientContext } from '../../src/entrypoints/utilities-for-generated.js'
import type { Client } from '../../src/layers/6_client/client.js'
import type { ConfigManager } from '../../src/lib/config-manager/__.js'
import { CONTENT_TYPE_REC } from '../../src/lib/grafaid/http/http.js'
import { type SchemaService, serveSchema } from './lib/serveSchema.js'
import { db } from './schemas/db.js'
import { Graffle as KitchenSink } from './schemas/kitchen-sink/graffle/__.js'
import { schema as kitchenSinkSchema } from './schemas/kitchen-sink/schema.js'
import { schema } from './schemas/pokemon/schema.js'

interface Project {
  fs: FSJetpack
  run: ExecaMethod
}

export const kitchenSink = KitchenSink.create({ schema: kitchenSinkSchema })

export const createResponse = (body: object) =>
  new Response(JSON.stringify(body), { status: 200, headers: { 'content-type': CONTENT_TYPE_REC } })

interface Fixtures {
  fetch: Mock<(request: Request) => Promise<Response>>
  pokemonService: SchemaService
  graffle: Client<ClientContext>
  kitchenSink: Client<ConfigManager.SetAtPath<ClientContext, ['config', 'name'], 'default'>>
  kitchenSinkHttp: Client<ConfigManager.SetAtPath<ClientContext, ['config', 'name'], 'default'>>
  kitchenSinkData: typeof db
  project: Project
}

export const test = testBase.extend<Fixtures>({
  project: async ({}, use) => { // eslint-disable-line
    const fs = await FsJetpack.tmpDirAsync()
    const run = execa({ cwd: fs.cwd() })
    const project: Project = {
      fs,
      run,
    }
    const relativePathToGraffle = Path.join(`..`, Path.relative(fs.cwd(), Path.join(import.meta.dirname, `../../`)))
    await fs.writeAsync(`package.json`, {
      name: `test`,
      type: `module`,
      scripts: {
        'check:types': `tsc --noEmit`,
        // rollup: `rollup --configPlugin typescript --config rollup.config.ts`,
      },
      dependencies: {
        tsx: `4.19.1`,
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
    await run`pnpm add ${relativePathToGraffle} tsx @tsconfig/strictest/tsconfig.json`
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
