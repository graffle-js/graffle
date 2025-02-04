import { describe, expect, expectTypeOf } from 'vitest'
import type { g0 } from '../../../../tests/_/helpers.js'
import { test } from '../../../../tests/_/helpers.js'
import { Context } from '../../../types/context.js'
import { createPropertiesComputer, type PropertiesComputerTypeFunction } from './properties.js'

const propertiesStatic1 = { foo: `bar` }
// const propertiesComputer1 = createPropertiesComputer((parameters) => ({ parameters }))

test(`initial context is empty`, ({ g0 }) => {
  expect(g0._.properties).toEqual(Context.States.empty.properties)
  expectTypeOf(g0._.properties).toEqualTypeOf<Context.States.Empty['properties']>()
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
  const preflightComputer = createPropertiesComputer()((parameters) => ({
    foo: parameters.context.configuration.check.current.preflight ? `bar` : `baz`,
  }))
  const parametersComputer = createPropertiesComputer<typeof g0>()((parameters) => ({
    parameters,
  }))

  test(`can be added; receives typed context and client`, ({ g0 }) => {
    const g1 = g0.properties(parametersComputer)
    // Context extended
    expect(g1._.properties.static).toEqual({})
    expect(g1._.properties.computed).toEqual([parametersComputer])
    expectTypeOf(g1._.properties.static).toMatchTypeOf<{ parameters: { context: typeof g0._; client: typeof g0 } }>()
    expectTypeOf(g1._.properties.$computedTypeFunctions).toEqualTypeOf<readonly []>()
    // Client extended
    expect(g1.parameters.client).toBe(g1)
    expect(g1.parameters.context).toEqual(g1._)
  })
  test(`Are computed every time the client is copied`, ({ g0 }) => {
    const g1 = g0.properties(preflightComputer)
    const g2 = g1.with({ check: { preflight: false } })
    const g3 = g2.with({ check: { preflight: true } })
    expect(g1.foo).toEqual(`bar`)
    expect(g2.foo).toEqual(`baz`)
    expect(g3.foo).toEqual(`bar`)
  })
  test(`can be added at the type level (type level test)`, ({ g0 }) => {
    interface Computer$Func extends PropertiesComputerTypeFunction {
      return: Computer<this['context']>
    }
    interface Computer<$Context extends Context> {
      foo: $Context['configuration']['check']['current']['preflight'] extends true ? `bar` : `baz`
    }
    const g1 = g0.properties(preflightComputer as any as Computer$Func)
    expectTypeOf(g1._.properties.$computedTypeFunctions).toEqualTypeOf<readonly [Computer$Func]>()
    expectTypeOf(g1.foo).toEqualTypeOf<`bar`>()
    const g2 = g1.with({ check: { preflight: false } })
    expectTypeOf(g2.foo).toEqualTypeOf<`baz`>()
    const g3 = g2.with({ check: { preflight: true } })
    expectTypeOf(g3.foo).toEqualTypeOf<`bar`>()
  })
})
