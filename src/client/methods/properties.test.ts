import type { Context } from '#src/context/context.js'
import { type ContextEmpty, contextEmpty } from '#src/context/ContextEmpty.js'
import {
  propertiesComputerParameters,
  propertiesComputerPreflight,
  propertiesComputerPreflight$Func,
  propertiesStatic1,
} from '#src/context/fragments/properties/_tests/_fixtures.js'
import { test } from '#test/helpers'
import { Assert } from '@wollybeard/kit'
import { describe, expect } from 'vitest'
import { type Configuration } from '../../context/fragments/configuration/_.js'
import { type Client_justContext } from '../client.js'

test(`initial context is empty`, ({ g0 }) => {
  expect(g0._.properties).toEqual(contextEmpty.properties)
  Assert.exact.ofAs<ContextEmpty['properties']>().on(g0._.properties)
})

test(`can add static properties`, ({ g0 }) => {
  const g1 = g0.properties(propertiesStatic1)
  // Context extended
  expect(g1._.properties.static).toEqual(propertiesStatic1)
  Assert.equiv.ofAs<typeof propertiesStatic1>().on(g1._.properties.static)
  // Client extended
  expect(g1).toMatchObject(propertiesStatic1)
  Assert.equiv.ofAs<typeof propertiesStatic1['foo']>().on(g1.foo)
})

describe(`computed properties`, () => {
  test(`can be added (value level); receives typed context and client`, ({ g0 }) => {
    const g1 = g0.properties(propertiesComputerParameters)
    // Context extended
    expect(g1._.properties.static).toEqual({})
    expect(g1._.properties.computed).toEqual([propertiesComputerParameters])
    Assert.equiv.ofAs<
      {
        parameters: {
          configuration: Configuration.ContextFragment['configuration']
          context: Context
          client: Client_justContext
        }
      }
    >().on(g1._.properties.static)
    Assert.exact.ofAs<readonly []>().on(g1._.properties.$computedTypeFunctions)
    // Client extended
    expect(g1.parameters.client).toBe(g1)
    expect(g1.parameters.context).toBe(g1._)
    expect(g1.parameters.configuration).toBe(g1._.configuration)
  })
  test(`Are computed every time the client is copied`, ({ g0 }) => {
    const g1 = g0.properties(propertiesComputerPreflight)
    const g2 = g1.with({ check: { preflight: false } })
    const g3 = g2.with({ check: { preflight: true } })
    expect(g1.foo).toEqual(`bar`)
    expect(g2.foo).toEqual(`baz`)
    expect(g3.foo).toEqual(`bar`)
  })
  test(`can be added (type level)`, ({ g0 }) => {
    const g1 = g0.properties(propertiesComputerPreflight$Func)
    Assert.exact.ofAs<readonly [propertiesComputerPreflight$Func]>().on(g1._.properties.$computedTypeFunctions)
    Assert.exact.ofAs<`bar`>().on(g1.foo)
    const g2 = g1.with({ check: { preflight: false } })
    Assert.exact.ofAs<`baz`>().on(g2.foo)
    const g3 = g2.with({ check: { preflight: true } })
    Assert.exact.ofAs<`bar`>().on(g3.foo)
  })
})
