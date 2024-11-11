import { expect, test } from 'vitest'
import { Pipeline } from '../_.js'
import { type initialInput, results } from '../__.test-helpers.js'
import { run } from './run.js'

const b0 = Pipeline.create<initialInput>()

test(`interceptor returns raw value that gets wrapped into success type`, async () => {
  const p = b0.step({ name: `a`, run: () => results.a }).done()
  const r = await run(p, {
    initialInput: { x: 1 },
    interceptors: [({ a }) => 1],
  })
  expect(r).toEqual({ value: 1 })
})
