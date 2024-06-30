// todo in order to test jsdom, we need to boot the server in a separate process
// @vitest-environment node

import getPort from 'get-port'
import type { Server } from 'node:http'
import { createServer } from 'node:http'
import { afterAll, beforeAll, beforeEach, expect, test } from 'vitest'
import { schema } from '../../../../tests/_/schemaUpload/schema.js'
import { Graffle } from '../../../entrypoints/alpha/main.js'
import { Upload } from './Upload.js'

import { createYoga } from 'graphql-yoga'
import type { Client } from '../../5_client/client.js'

let server: Server
let port: number
let graffle: Client<any, any>

beforeAll(async () => {
  const yoga = createYoga({ schema })
  server = createServer(yoga) // eslint-disable-line
  port = await getPort({ port: [3000, 3001, 3002, 3003, 3004] })
  server.listen(port)
  await new Promise((resolve) =>
    server.once(`listening`, () => {
      resolve(undefined)
    })
  )
})

beforeEach(() => {
  graffle = Graffle.create({
    schema: new URL(`http://localhost:${String(port)}/graphql`),
  }).use(Upload)
})

afterAll(async () => {
  await new Promise((resolve) => {
    server.close(resolve)
    setImmediate(() => {
      server.emit(`close`)
    })
  })
})

test(`upload`, async () => {
  const result = await graffle.raw({
    document: `
      mutation ($blob: Upload!) {
        readTextFile(blob: $blob)
      }
    `,
    variables: {
      blob: new Blob([`Hello World`], { type: `text/plain` }) as any, // eslint-disable-line
    },
  })
  expect(result).toMatchInlineSnapshot(`
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
