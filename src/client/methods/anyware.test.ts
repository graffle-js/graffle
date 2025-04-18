import { expect, expectTypeOf } from 'vitest'
import { ATransport, BTransport } from '../../../tests/_/fixtures/transports.js'
import { g0, test } from '../../../tests/_/helpers.js'
import { RequestInterceptors } from '../../context/fragments/requestInterceptors/_namespace.js'

const g1 = g0.transport(ATransport)

test(`can add a request interceptor`, () => {
  const i1 = RequestInterceptors.create<typeof g1>(async ({ pack }) => {
    return pack()
  })
  const g2 = g1.anyware(i1)
  expect(g2._.requestPipelineInterceptors).toEqual([i1])
  // Does NOT affect context type.
  expectTypeOf(g2._.requestPipelineInterceptors).toEqualTypeOf(g1._.requestPipelineInterceptors)
})

test(`hook inputs have transportType in interceptor`, async () => {
  let transportType
  const g2 = g1.anyware(({ pack }) => {
    expectTypeOf(pack.input.transportType).toEqualTypeOf<ATransport['name']>()
    transportType = pack.input.transportType
    return pack()
  })
  await g2.gql(`query { foo }`).send()
  expect(transportType).toEqual(ATransport.name)
})

test(`if two transports, then transportType could be either`, async () => {
  let value
  const g2 = g1.transport(BTransport).anyware(({ pack }) => {
    expectTypeOf(pack.input.transportType).toEqualTypeOf<ATransport['name'] | BTransport['name']>()
    value = pack.input.transportType
    return pack()
  })
  await g2.gql(`query { foo }`).send()
  expect(value).toEqual(ATransport.name)
  await g2.transport(`BTransport`).gql(`query { foo }`).send()
  expect(value).toEqual(BTransport.name)
})

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
