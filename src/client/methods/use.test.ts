import { Extension } from '#graffle/extension'
import {
  propertiesComputerParameters,
  propertiesComputerPreflight$Func,
  propertiesStatic1,
} from '#src/context/fragments/properties/_tests/_fixtures.js'
import { ATransport, ATransportBuilder } from '#test/fixtures/transports'
import { Ts } from '@wollybeard/kit'
import { test } from '#test/helpers'
import { describe, expect } from 'vitest'
import { RequestInterceptors } from '../../context/fragments/requestInterceptors/$.js'

const aExtension = Extension.create(`aExtension`).return()
type aExtension = typeof aExtension

const aConfigurator = Extension.Configurator().input<{ a?: number }>().default({ a: 1 }).return()

test(`using an extension returns a client copy; is registered in context`, ({ g0 }) => {
  const g1 = g0.use(aExtension)
  expect(g1).not.toBe(g0)
  expect(g1._.extensions).toEqual([aExtension])
  Ts.Assert.exact.ofAs<[aExtension]>().on(g1._.extensions)
})

describe(`if extension has configurator`, () => {
  test(`is constructor with static configurator property`, () => {
    const B = Extension.create(`bExtension`).configurator(aConfigurator).return()
    expect(B.configurator).toBe(aConfigurator)
    const b = B()
    expect(b.configurator).toBe(aConfigurator)
  })
  test(`when used without arguments, configurator is registered in context with default`, ({ g0 }) => {
    const b = Extension.create(`bExtension`).configurator(aConfigurator).return()()
    const g1 = g0.use(b)
    expect(g1._.configuration.bExtension).toEqual({ current: aConfigurator.default, configurator: aConfigurator })
    // todo type assertions
  })
  test(`when used with arguments, configurator is registered in context with initial input`, ({ g0 }) => {
    const B = Extension.create(`bExtension`).configurator(aConfigurator).return()
    const b = B({ a: 2 })
    const g1 = g0.use(b)
    expect(g1._.configuration.bExtension).toEqual({ current: b.configuratorInitialInput, configurator: aConfigurator })
    // todo type assertions
  })
  test(`configurator default is used as initial current state even when initial input is given`, ({ g0 }) => {
    const B = Extension.create(`bExtension`)
      .configurator(
        Extension.Configurator().input<{ a?: number; b?: number }>().default({ a: 1, b: 2 }),
      )
      .return()

    const b = B({ a: undefined, b: 3 })
    const g1 = g0.use(b)

    expect(g1._.configuration.bExtension.current).toEqual({
      a: 1, // Default preserved when input is undefined
      b: 3, // Input value overrides default
    })
  })
})

describe(`transport`, () => {
  test(`can be added (transport type given)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).transport(ATransport).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.transport(ATransport)
    expect(g1a._.transports).toEqual(g1b._.transports)
    Ts.Assert.exact.ofAs<typeof g1b._.transports>().on(g1a._.transports)
    expect(g1a._.requestPipelineDefinition.overloads).toEqual(g1b._.requestPipelineDefinition.overloads)
    Ts.Assert.exact.ofAs<typeof g1b._.requestPipelineDefinition.overloads>().on(g1a._.requestPipelineDefinition.overloads)
  })

  test(`can be added (transport builder given)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).transport(ATransportBuilder).return()
    const g1 = g0.use(bExtension)
    const g2 = g0.transport(ATransport)
    expect(g1._.transports).toEqual(g2._.transports)
    Ts.Assert.exact.ofAs<typeof g2._.transports>().on(g1._.transports)
  })
})

describe(`properties`, () => {
  test(`can be added (static)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(propertiesStatic1).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(propertiesStatic1)
    expect(g1a.foo).toEqual(g1b.foo)
    expect(g1a._.properties).toEqual(g1b._.properties)
    Ts.Assert.exact.ofAs<typeof g1b._.properties>().on(g1a._.properties)
  })
  test(`can be added (computed, value level)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(propertiesComputerParameters).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(propertiesComputerParameters)
    expect(Object.keys(g1a.parameters.configuration)).toEqual(Object.keys(g1b.parameters.configuration))
    expect(g1a.parameters.configuration).toBe(g1b.parameters.configuration)
    expect(g1a.parameters.client).toBe(g1a)
    expect(g1a.parameters.context.properties).toEqual(g1b.parameters.context.properties)
    Ts.Assert.exact.ofAs<typeof g1b._.properties>().on(g1a._.properties)
  })
  test(`can be added (computed, type level)`, ({ g0 }) => {
    const bExtension = Extension.create(`bExtension`).properties(propertiesComputerPreflight$Func).return()
    const g1a = g0.use(bExtension)
    const g1b = g0.properties(propertiesComputerPreflight$Func)
    expect(g1a.foo).toEqual(g1b.foo)
    expect(g1a._.properties).toEqual(g1b._.properties)
    Ts.Assert.exact.ofAs<typeof g1b._.properties>().on(g1a._.properties)
  })
  test(`computed: receive extension configuration`, ({ g0 }) => {
    const BExtension = Extension
      .create(`bExtension`)
      .configurator(aConfigurator)
      .properties(({ configuration }) => {
        return {
          read: () => configuration.bExtension.current.a,
        }
      })
      .return()
    const g1 = g0.use(BExtension())
    expect(g1.read()).toEqual(BExtension.configurator.default.a)
  })
})

describe(`request interceptor`, () => {
  test(`can be added`, ({ g0 }) => {
    const i1 = RequestInterceptors.create(async ({ pack }) => {
      return await pack()
    })
    const bExtension = Extension.create(`bExtension`)
      .transport(ATransport)
      .requestInterceptor(i1)
      .return()
    const g1a = g0.use(bExtension)
    const g1b = g0.anyware(i1)
    expect(g1a._.requestPipelineInterceptors).toEqual(g1b._.requestPipelineInterceptors)
    Ts.Assert.exact.ofAs<typeof g1b._.requestPipelineInterceptors>().on(g1a._.requestPipelineInterceptors)
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
