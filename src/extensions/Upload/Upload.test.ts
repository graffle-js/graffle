// todo in order to test jsdom, we need to boot the server in a separate process
// @vitest-environment node

import { expect, test as testBase } from 'vitest'
import { Graffle } from '../../exports/index.js'
import * as UploadSchema from './__fixtures__/schema.js'
import { Upload } from './Upload.js'

import { type SchemaService, serveSchema } from '../../../tests/_/lib/serveSchema.js'
import type { GraffleKit } from '../../exports/kit.js'

interface Context {
  graffle: Graffle.Client<
    // todo this does not work but should
    // GraffleKit.Context.Configuration.Add<Graffle.ContextEmpty, { check: { current: { preflight: false } } }>
    GraffleKit.Context.Transports.ConfigureCurrent<Graffle.ContextEmpty, { url: URL }>
  >
  schemaServer: SchemaService
}

const test = testBase.extend<Context>({
  schemaServer: async ({}, use) => {
    const schemaServer = await serveSchema({ schema: UploadSchema.schema })
    await use(schemaServer)
    await schemaServer.stop()
  },
  graffle: async ({ schemaServer }, use) => {
    const graffle = Graffle
      .create()
      .transport({ url: schemaServer.url })
      .use(Upload)
    await use(graffle as any)
  },
})

test(`upload`, async ({ graffle }) => {
  const data = await graffle.gql`
    mutation ($blob: Upload!) {
      readTextFile(blob: $blob)
    }
  `.send({
    blob: new Blob([`Hello World`], { type: `text/plain` }) as any,
  })
  expect(data).toMatchInlineSnapshot(`
    {
      "readTextFile": "Hello World",
    }
  `)
})

test(`client with upload extension making non-upload request`, async ({ graffle }) => {
  const data = await graffle.gql`
    query {
      greetings
    }
  `.send()
  expect(data).toEqual({
    greetings: UploadSchema.data.greetings,
  })
})

// todo test with non-raw
//      ^ for this to work we need to generate documents that use variables
