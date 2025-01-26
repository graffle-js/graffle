import { expect, expectTypeOf, test } from 'vitest'
import { Context } from '../types/context.js'
import { create } from './client.js'

test(`created WITHOUT configuration uses the default configuration`, () => {
  const g = create()
  expect(g._).toBe(Context.States.empty)
  expect(g._.configurationIndex.check.preflight).toBe(true)
  // Trying to type-test the entire context crashes the TS LSP.
  // We check just one property and assume the rest are ok too.
  expectTypeOf(g._.configurationIndex).toMatchTypeOf<Context.States.Empty['configurationIndex']>()
  expectTypeOf(g._.configurationIndex[`check`][`preflight`]).toEqualTypeOf<true>()
  // TODO: investigate why we cannot use the strict "toEqualTypeOf". According to the following it should work. Make an issue on Vitest?
  // let a = null as any as Context.States.Empty['configurationIndex']
  // let b = g._.configurationIndex
  // a = b
  // b = a
})

test(`created WITH configuration changes the configuration`, () => {
  const g = create({ check: { preflight: false } })
  expect(g._.configurationIndex.check.preflight).toBe(false)
  expectTypeOf(g._.configurationIndex.check.preflight).toEqualTypeOf<false>()
  // Did NOT mutate the original context
  expect(g._).not.toBe(Context.States.empty)
  expect(Context.States.empty.configurationIndex.check.preflight).toBe(true)
})
