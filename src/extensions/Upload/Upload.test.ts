// todo in order to test jsdom, we need to boot the server in a separate process
// @vitest-environment node

import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import * as UploadSchema from '../../../tests/_/schemas/upload/schema.js'
import { Graffle } from '../../entrypoints/main.js'
import { Upload } from './Upload.js'

import { type SchemaService, serveSchema } from '../../../tests/_/lib/serveSchema.js'
import type { GraffleMinimal } from '../../entrypoints/presets/minimal.js'

let schemaServer: SchemaService

let graffle: GraffleMinimal.Client.With<{ checkPreflight: false }>

beforeAll(async () => {
  schemaServer = await serveSchema({ schema: UploadSchema.schema })
})

beforeEach(() => {
  const graffle_ = Graffle.create({ checkPreflight: false }).transport({ url: schemaServer.url }).use(Upload())
  graffle = graffle_ as any
})

afterAll(async () => {
  await schemaServer.stop()
})

test(`upload`, async () => {
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

test(`client with upload extension making non-upload request`, async () => {
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
