import { describe, expect, expectTypeOf } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { Context } from '../../types/context.js'
import { createPropertiesComputer } from './properties.js'

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
  test(`can be added`, ({ g0 }) => {
    const computer = createPropertiesComputer<typeof g0>()((parameters) => ({ parameters }))
    const g1 = g0.properties(computer)
    // Context extended
    expect(g1._.properties.static).toEqual({})
    expect(g1._.properties.computed).toEqual([computer])
    expectTypeOf(g1._.properties.static).toMatchTypeOf<{ parameters: { context: typeof g0._; client: typeof g0 } }>()
    expectTypeOf(g1._.properties.computed).toEqualTypeOf<readonly []>()
    // Client extended
    expect(g1.parameters.client).toBe(g1)
    expect(g1.parameters.context).toEqual(g1._)
  })
  test(`Are computed every time the client is copied`, ({ g0 }) => {
    const computer = createPropertiesComputer()((parameters) => ({
      preflightCheckNow: parameters.context.configuration.check.current.preflight,
    }))
    const g1 = g0.properties(computer)
    const g2 = g1.with({ check: { preflight: false } })
    const g3 = g2.with({ check: { preflight: true } })
    expect(g1.preflightCheckNow).toEqual(true)
    expect(g2.preflightCheckNow).toEqual(false)
    expect(g3.preflightCheckNow).toEqual(true)
  })
  // todo: test computed properties that use HKT to also compute at the type level.
})
