import { describe, expect, expectTypeOf, test } from 'vitest'
import { ATransport, ATransportBuilder } from '../../../tests/_/fixtures/transports.js'
import { Extension } from '../../extension/$.js'
import { create } from '../client.js'
import { createInterceptor } from './addRequestInterceptor.js'

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
    const BExtension = Extension(`BExtension`).transport(ATransport).return()
    const g1a = g0.use(BExtension())
    const g1b = g0.transport(ATransport)
    expect(g1a._.transports).toEqual(g1b._.transports)
    expectTypeOf(g1a._.transports).toEqualTypeOf(g1b._.transports)
    expect(g1a._.requestPipelineDefinition.overloads).toEqual(g1b._.requestPipelineDefinition.overloads)
    expectTypeOf(g1a._.requestPipelineDefinition.overloads).toEqualTypeOf(g1b._.requestPipelineDefinition.overloads)
  })

  test(`extension can include a transport given as a builder`, () => {
    const BExtension = Extension(`BExtension`).transport(ATransportBuilder).return()
    const g1 = g0.use(BExtension())
    const g2 = g0.transport(ATransport)
    expect(g1._.transports).toEqual(g2._.transports)
    expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
  })
})

describe(`request interceptor`, () => {
  test(`can add a request interceptor`, () => {
    const i1 = createInterceptor(async ({ pack }) => {
      return await pack()
    })
    const BExtension = Extension(`BExtension`)
      .transport(ATransport)
      .requestInterceptor(i1)
      .return()
    const g1a = g0.use(BExtension())
    const g1b = g0.anyware(i1)
    expect(g1a._.requestPipelineInterceptors).toEqual(g1b._.requestPipelineInterceptors)
    expectTypeOf(g1a._.requestPipelineInterceptors).toEqualTypeOf(g1b._.requestPipelineInterceptors)
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
