import { expectTypeOf, test } from 'vitest'
import type { ContextualAggregateError } from '../../errors/ContextualAggregateError.js'
import type { initialInput } from '../__.test-helpers.js'
import { Pipeline } from './__.js'

test(`returns input if no steps`, async () => {
  const p = Pipeline.create<initialInput>().done()
  const r = await Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<initialInput | ContextualAggregateError>()
})

test(`returns last step output if steps`, async () => {
  const p = Pipeline.create<initialInput>().step({ name: `a`, run: () => 2 as const }).done()
  const r = await Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<2 | ContextualAggregateError>()
})

test(`can return a promise`, async () => {
  const p = Pipeline.create<initialInput>().step({ name: `a`, run: () => Promise.resolve(2 as const) }).done()
  const r = await Pipeline.run(p)
  expectTypeOf(r).toEqualTypeOf<2 | ContextualAggregateError>()
})
