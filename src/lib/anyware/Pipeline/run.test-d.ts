import { expectTypeOf, test } from 'vitest'
import { Pipeline } from './__.js'

test(`returns input if no steps`, () => {
  const p = Pipeline.create<{ x: 1 }>()
  const r = Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<{ x: 1 }>()
})

test(`returns last step output if steps`, () => {
  const p = Pipeline.create<{ x: 1 }>().step({ name: `a`, run: () => 2 as const })
  const r = Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<2>()
})

test(`can return a promise`, async () => {
  const p = Pipeline.create<{ x: 1 }>().step({ name: `a`, run: () => Promise.resolve(2 as const) })
  const r = await Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<2>()
})
