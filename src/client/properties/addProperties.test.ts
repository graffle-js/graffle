import { expect, expectTypeOf } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { Context } from '../../types/context.js'

const properties1 = { foo: `bar` }

test(`initial context is empty`, ({ g0 }) => {
  expect(g0._.properties).toEqual(Context.States.empty.properties)
  expectTypeOf(g0._.properties).toEqualTypeOf<Context.States.Empty['properties']>()
})

test(`can add static properties`, ({ g0 }) => {
  const g1 = g0.properties(properties1)
  // Context extended
  expect(g1._.properties.static).toEqual(properties1)
  expectTypeOf(g1._.properties.static).toMatchTypeOf<typeof properties1>()
  // Client extended
  expect(g1).toMatchObject(properties1)
  expectTypeOf(g1.foo).toMatchTypeOf<typeof properties1['foo']>()
})
