/* eslint-disable */
import { describe, expect, expectTypeOf, test } from 'vitest'
// import { createResponse, test } from '../../../tests/_/helpers.js'
// import { db } from '../../../tests/_/schemas/db.js'
// import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { Extension } from '../../extension/$.js'
// import { Throws } from '../../extensions/Throws/Throws.js'
// import { oops } from '../../../lib/anyware/specHelpers.js'
import { ATransport, ATransportBuilder } from '../../../tests/_/fixtures/transports.js'
import { create } from '../client.js'

const g0 = create()
const E1 = Extension('AExtension').return()

test('using an extension returns a client copy; is registered in context', () => {
  const e1 = E1()
  const g1 = g0.use(e1)
  expect(g1).not.toBe(g0)
  expect(g1._.extensions).toEqual([e1])
})

test('extension can include a transport given directly', () => {
  const E1 = Extension('AExtension').transport(ATransport).return()
  const g1 = g0.use(E1())
  const g2 = g0.transport(ATransport)
  expect(g1._.transports).toEqual(g2._.transports)
  expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
})

test('extension can include a transport given as a builder', () => {
  const E1 = Extension('AExtension').transport(ATransportBuilder).return()
  const g1 = g0.use(E1())
  const g2 = g0.transport(ATransport)
  expect(g1._.transports).toEqual(g2._.transports)
  expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
})

// const _ = create({ output: { defaults: { errorChannel: 'return' } } })

// const graffle =
//   create({ output: { defaults: { errorChannel: 'return' } } })
//   // .transport({ url: 'http://foo' })
// const headers = { 'x-foo': 'bar' }

// test('using an extension without type hooks leaves them empty', () => {
//   const Ex = Extension('test').done()
//   expectTypeOf(g0._).toMatchTypeOf<{
//     typeHookOnRequestResult: []
//     typeHookOnRequestDocumentRootType: []
//   }>()
//   const g2 = g1.use(Ex())
//   expectTypeOf(g2._).toMatchTypeOf<{
//     typeHookOnRequestResult: []
//     typeHookOnRequestDocumentRootType: []
//   }>()
// })

// describe(`entrypoint pack`, () => {
//   test(`can add header`, async ({ fetch }) => {
//     fetch.mockImplementationOnce(async (input) => {
//       expect(input.headers.get('x-foo')).toEqual(headers['x-foo'])
//       return createResponse({ data: { id: db.id } })
//     })
//     const graffle2 = graffle.anyware(async ({ pack }) => {
//       if (pack.input.transportType !== `http`) return pack()
//       return pack({ input: { ...pack.input, headers } })
//     })
//     const result = await graffle2.query.id()
//     expect(result).toEqual(db.id)
//   })
//   test('can chain into exchange', async ({ fetch }) => {
//     fetch.mockImplementationOnce(async () => {
//       return createResponse({ data: { id: db.id } })
//     })
//     const client2 = graffle.anyware(async ({ pack }) => {
//       if (pack.input.transportType !== `http`) return pack()
//       const { exchange } = await pack({ input: { ...pack.input, headers } })
//       return exchange({ input: exchange.input })
//     })
//     expect(await client2.query.id()).toEqual(db.id)
//   })
// })

// // test('can retry failed request', async ({ fetch }) => {
// //   fetch
// //     .mockImplementationOnce(async () => {
// //       throw oops
// //     })
// //     .mockImplementationOnce(async () => {
// //       throw oops
// //     })
// //     .mockImplementationOnce(async () => {
// //       return createResponse({ data: { id: db.id } })
// //     })
// //   const client2 = client.retry(async ({ exchange }) => {
// //     let result = await exchange()
// //     while (result instanceof Error) {
// //       result = await exchange()
// //     }
// //     return result
// //   })
// //   const result = await client2.query.id()
// //   expect(result).toEqual(db.id)
// //   expect(fetch.mock.calls.length).toEqual(3)
// // })
