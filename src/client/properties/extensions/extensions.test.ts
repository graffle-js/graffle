import { describe, expect, expectTypeOf } from 'vitest'
import { ATransport, ATransportBuilder } from '../../../../tests/_/fixtures/transports.js'
import { test } from '../../../../tests/_/helpers.js'
import { parametersComputer, preflightComputer$Func, propertiesStatic1 } from '../properties/properties.test.js'
import { RequestInterceptors } from '../requestInterceptors/__.js'
import { Extension } from './dataType/_namespace.js'

const aExtension = Extension.create(`aExtension`).return()
type aExtension = typeof aExtension

test(`using an extension returns a client copy; is registered in context`, ({ g0 }) => {
  const g1 = g0.use(aExtension)
  expect(g1).not.toBe(g0)
  expect(g1._.extensions).toEqual([aExtension])
  expectTypeOf(g1._.extensions).toEqualTypeOf<[aExtension]>()
})

describe(`transport`, () => {
  test(`can be added (transport type given)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).transport(ATransport).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.transport(ATransport)
    expect(g1a._.transports).toEqual(g1b._.transports)
    expectTypeOf(g1a._.transports).toEqualTypeOf(g1b._.transports)
    expect(g1a._.requestPipelineDefinition.overloads).toEqual(g1b._.requestPipelineDefinition.overloads)
    expectTypeOf(g1a._.requestPipelineDefinition.overloads).toEqualTypeOf(g1b._.requestPipelineDefinition.overloads)
  })

  test(`can be added (transport builder given)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).transport(ATransportBuilder).return()
    const g1 = g0.use(bExtension)
    const g2 = g0.transport(ATransport)
    expect(g1._.transports).toEqual(g2._.transports)
    expectTypeOf(g1._.transports).toEqualTypeOf(g2._.transports)
  })
})

describe(`properties`, () => {
  test(`can be added (static)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(propertiesStatic1).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(propertiesStatic1)
    expect(g1a.foo).toEqual(g1b.foo)
    expect(g1a._.properties).toEqual(g1b._.properties)
    expectTypeOf(g1a._.properties).toEqualTypeOf(g1b._.properties)
  })
  test(`can be added (computed, value level)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(parametersComputer).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(parametersComputer)
    expect(Object.keys(g1a.parameters.configuration)).toEqual(Object.keys(g1b.parameters.configuration))
    expect(g1a.parameters.configuration).toBe(g1b.parameters.configuration)
    expect(g1a.parameters.client).toBe(g1a)
    expect(g1a.parameters.context.properties).toEqual(g1b.parameters.context.properties)
    expectTypeOf(g1a._.properties).toEqualTypeOf(g1b._.properties)
  })
  test(`can be added (computed, type level)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(preflightComputer$Func).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(preflightComputer$Func)
    expect(g1a.foo).toEqual(g1b.foo)
    expect(g1a._.properties).toEqual(g1b._.properties)
    expectTypeOf(g1a._.properties).toEqualTypeOf(g1b._.properties)
  })
})

describe(`request interceptor`, () => {
  test(`can be added`, ({ g0 }) => {
    const i1 = RequestInterceptors.createInterceptor(async ({ pack }) => {
      return await pack()
    })
    const bExtension = Extension.create(`bExtension`)
      .transport(ATransport)
      .requestInterceptor(i1)
      .return()
    const g1a = g0.use(bExtension)
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
