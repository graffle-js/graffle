import { expect, expectTypeOf, test } from 'vitest'
import { Context } from '../../entrypoints/utilities-for-generated.js'
import { create } from '../client.js'
import type { ScalarMethod } from './addScalar.js'

const g1 = create()

test(`scalars begin empty`, () => {
  expect(g1._.scalars).toEqual(Context.States.empty.scalars)
})

test(`method not available when no schema map `, () => {
  expectTypeOf(g1.scalar).toEqualTypeOf<ScalarMethod.TypeErrorMissingSchemaMap>()
})

// test(`can add a scalar`, () => {
//   const g2 = g1.scalar(`String`, {
//     decode: (value) => value,
//     encode: (value) => value,
//   })
// })
