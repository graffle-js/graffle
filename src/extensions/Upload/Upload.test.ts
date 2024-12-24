// todo in order to test jsdom, we need to boot the server in a separate process
// @vitest-environment node

import { expect, test as testBase } from 'vitest'
import * as UploadSchema from '../../../tests/_/schemas/upload/schema.js'
import { Graffle } from '../../entrypoints/main.js'
import { Upload } from './Upload.js'

import { type SchemaService, serveSchema } from '../../../tests/_/lib/serveSchema.js'
import type { GraffleMinimal } from '../../entrypoints/presets/minimal.js'

interface Context {
  graffle: GraffleMinimal.Client.With<{ checkPreflight: false }>
  schemaServer: SchemaService
}

const test = testBase.extend<Context>({
  schemaServer: async ({}, use) => { // eslint-disable-line
    const schemaServer = await serveSchema({ schema: UploadSchema.schema })
    await use(schemaServer)
    await schemaServer.stop()
  },
  graffle: async ({ schemaServer }, use) => {
    const graffle = Graffle.create({ checkPreflight: false }).transport({ url: schemaServer.url }).use(Upload())
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
