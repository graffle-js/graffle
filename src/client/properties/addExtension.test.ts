import { describe, expect, expectTypeOf, test } from 'vitest'
import { ATransport, ATransportBuilder } from '../../../tests/_/fixtures/transports.js'
import { Extension } from '../../extension/$.js'
import { create } from '../client.js'

const g0 = create()
const AExtension = Extension(`AExtension`).return()
type AExtension = ReturnType<typeof AExtension>

test(`using an extension returns a client copy; is registered in context`, () => {
  const e1 = AExtension()
  const g1 = g0.use(e1)
  expect(g1).not.toBe(g0)
  expect(g1._.extensions).toEqual([e1])
  expectTypeOf(g1._.extensions).toEqualTypeOf<[AExtension]>()
})

describe(`transport`, () => {
  test(`extension can include a transport given directly`, () => {
    const E1 = Extension(`AExtension`).transport(ATransport).return()
    const g1 = g0.use(E1())
    const g2 = g0.transport(ATransport)
    expect(g1._.transports).toEqual(g2._.transports)
    expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
  })

  test(`extension can include a transport given as a builder`, () => {
    const E1 = Extension(`AExtension`).transport(ATransportBuilder).return()
    const g1 = g0.use(E1())
    const g2 = g0.transport(ATransport)
    expect(g1._.transports).toEqual(g2._.transports)
    expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
  })
})

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
