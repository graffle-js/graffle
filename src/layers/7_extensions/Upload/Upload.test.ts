// todo in order to test jsdom, we need to boot the server in a separate process
// @vitest-environment node

import { omit } from 'es-toolkit'
import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import { schema } from '../../../../tests/_/schemaUpload/schema.js'
import { Graffle } from '../../../entrypoints/main.js'
import { Upload } from './Upload.js'

import { type SchemaServer, serveSchema } from '../../../../examples/$/helpers.js'
import type { Client } from '../../6_client/client.js'
import type { Config, OutputConfigDefault } from '../../6_client/Settings/Config.js'

let schemaServer: SchemaServer
let graffle: Client<
  any,
  {
    transport: { type: 'http'; config: Config['transport']['config'] }
    output: OutputConfigDefault
    initialInput: { schema: URL }
    name: 'default'
  }
>

beforeAll(async () => {
  schemaServer = await serveSchema({ schema })
})

beforeEach(() => {
  graffle = Graffle.create({ schema: schemaServer.url }).use(Upload)
})

afterAll(async () => {
  await schemaServer.stop()
})

test(`upload`, async () => {
  const result = await graffle.rawString({
    document: `
      mutation ($blob: Upload!) {
        readTextFile(blob: $blob)
      }
    `,
    variables: {
      blob: new Blob([`Hello World`], { type: `text/plain` }) as any, // eslint-disable-line
    },
  })
  expect(omit(result, [`response`])).toMatchInlineSnapshot(`
    {
      "data": {
        "readTextFile": "Hello World",
      },
      "errors": undefined,
      "extensions": undefined,
    }
  `)
})

// todo test that non-upload requests work

// todo test with non-raw
//      ^ for this to work we need to generate documents that use variables
