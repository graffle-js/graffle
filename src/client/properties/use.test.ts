/* eslint-disable */
import { describe, expect, expectTypeOf } from 'vitest'
import { createResponse, test } from '../../../tests/_/helpers.js'
import { db } from '../../../tests/_/schemas/db.js'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { create } from '../../extension/extension.js'
import { Throws } from '../../extensions/Throws/Throws.js'
// import { oops } from '../../../lib/anyware/specHelpers.js'

const graffle = Graffle
  .create({ output: { defaults: { errorChannel: 'return' } } })
  .transport({ url: 'http://foo' })
const headers = { 'x-foo': 'bar' }

test('using an extension without type hooks leaves them empty', () => {
  const Ex = create({
    name: 'test',
    create: () => {
      return {}
    },
  })
  const graffle1 = Graffle.create()
  expectTypeOf(graffle1._).toMatchTypeOf<{
    typeHookOnRequestResult: []
    typeHookOnRequestDocumentRootType: []
  }>()
  const graffle2 = graffle1.use(Ex())
  expectTypeOf(graffle2._).toMatchTypeOf<{
    typeHookOnRequestResult: []
    typeHookOnRequestDocumentRootType: []
  }>()
})

test('using an extension returns a copy of the client', () => {
  const graffle2 = graffle.use(Throws())
  // @ts-ignore fixme
  expect(graffle2 !== graffle).toBe(true)
})

describe(`entrypoint pack`, () => {
  test(`can add header`, async ({ fetch }) => {
    fetch.mockImplementationOnce(async (input) => {
      expect(input.headers.get('x-foo')).toEqual(headers['x-foo'])
      return createResponse({ data: { id: db.id } })
    })
    const graffle2 = graffle.anyware(async ({ pack }) => {
      if (pack.input.transportType !== `http`) return pack()
      return pack({ input: { ...pack.input, headers } })
    })
    const result = await graffle2.query.id()
    expect(result).toEqual(db.id)
  })
  test('can chain into exchange', async ({ fetch }) => {
    fetch.mockImplementationOnce(async () => {
      return createResponse({ data: { id: db.id } })
    })
    const client2 = graffle.anyware(async ({ pack }) => {
      if (pack.input.transportType !== `http`) return pack()
      const { exchange } = await pack({ input: { ...pack.input, headers } })
      return exchange({ input: exchange.input })
    })
    expect(await client2.query.id()).toEqual(db.id)
  })
})

// test('can retry failed request', async ({ fetch }) => {
//   fetch
//     .mockImplementationOnce(async () => {
//       throw oops
//     })
//     .mockImplementationOnce(async () => {
//       throw oops
//     })
//     .mockImplementationOnce(async () => {
//       return createResponse({ data: { id: db.id } })
//     })
//   const client2 = client.retry(async ({ exchange }) => {
//     let result = await exchange()
//     while (result instanceof Error) {
//       result = await exchange()
//     }
//     return result
//   })
//   const result = await client2.query.id()
//   expect(result).toEqual(db.id)
//   expect(fetch.mock.calls.length).toEqual(3)
// })
