import { describe, expect, expectTypeOf } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import type { Context } from '../../context/context.js'
import { type ContextEmpty, contextEmpty } from '../../context/ContextEmpty.js'
import { type Configuration } from '../../context/fragments/configuration/_namespace.js'
import {
  createPropertiesComputer,
  type PropertiesComputerTypeFunction,
} from '../../context/fragments/properties/fragment.js'
import { type Client_justContext } from '../client.js'

export const propertiesStatic1 = { foo: `bar` }

export const parametersComputer = createPropertiesComputer()((parameters) => ({
  parameters,
}))

export const preflightComputer = createPropertiesComputer()((parameters) => ({
  foo: parameters.context.configuration.check.current.preflight ? `bar` : `baz`,
}))

export const preflightComputer$Func = preflightComputer as any as PreflightComputer$Func

export interface PreflightComputer$Func extends PropertiesComputerTypeFunction {
  return: PreflightComputer<this['context']>
}

export interface PreflightComputer<$Context extends Context> {
  foo: $Context['configuration']['check']['current']['preflight'] extends true ? `bar` : `baz`
}

test(`initial context is empty`, ({ g0 }) => {
  expect(g0._.properties).toEqual(contextEmpty.properties)
  expectTypeOf(g0._.properties).toEqualTypeOf<ContextEmpty['properties']>()
})

test(`can add static properties`, ({ g0 }) => {
  const g1 = g0.properties(propertiesStatic1)
  // Context extended
  expect(g1._.properties.static).toEqual(propertiesStatic1)
  expectTypeOf(g1._.properties.static).toMatchTypeOf<typeof propertiesStatic1>()
  // Client extended
  expect(g1).toMatchObject(propertiesStatic1)
  expectTypeOf(g1.foo).toMatchTypeOf<typeof propertiesStatic1['foo']>()
})

describe(`computed properties`, () => {
  test(`can be added (value level); receives typed context and client`, ({ g0 }) => {
    const g1 = g0.properties(parametersComputer)
    // Context extended
    expect(g1._.properties.static).toEqual({})
    expect(g1._.properties.computed).toEqual([parametersComputer])
    expectTypeOf(g1._.properties.static).toMatchTypeOf<
      {
        parameters: {
          configuration: Configuration.ContextFragment['configuration']
          context: Context
          client: Client_justContext
        }
      }
    >()
    expectTypeOf(g1._.properties.$computedTypeFunctions).toEqualTypeOf<readonly []>()
    // Client extended
    expect(g1.parameters.client).toBe(g1)
    expect(g1.parameters.context).toBe(g1._)
    expect(g1.parameters.configuration).toBe(g1._.configuration)
  })
  test(`Are computed every time the client is copied`, ({ g0 }) => {
    const g1 = g0.properties(preflightComputer)
    const g2 = g1.with({ check: { preflight: false } })
    const g3 = g2.with({ check: { preflight: true } })
    expect(g1.foo).toEqual(`bar`)
    expect(g2.foo).toEqual(`baz`)
    expect(g3.foo).toEqual(`bar`)
  })
  test(`can be added (type level)`, ({ g0 }) => {
    const g1 = g0.properties(preflightComputer$Func)
    expectTypeOf(g1._.properties.$computedTypeFunctions).toEqualTypeOf<readonly [PreflightComputer$Func]>()
    expectTypeOf(g1.foo).toEqualTypeOf<`bar`>()
    const g2 = g1.with({ check: { preflight: false } })
    expectTypeOf(g2.foo).toEqualTypeOf<`baz`>()
    const g3 = g2.with({ check: { preflight: true } })
    expectTypeOf(g3.foo).toEqualTypeOf<`bar`>()
  })
})
