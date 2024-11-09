import { expectTypeOf, test } from 'vitest'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots, stepA } from '../__.test-helpers.js'
import { Pipeline } from './__.js'
import type { Config } from './Config.js'

const b0 = Pipeline.create<initialInput>()

test(`initial context`, () => {
  expectTypeOf(b0.context).toEqualTypeOf<{ input: initialInput; steps: []; config: Config }>()
})

test(`first step definition`, () => {
  expectTypeOf(b0.step).toMatchTypeOf<
    (input: { name: string; run: (params: { input: initialInput; previous: undefined }) => any }) => any
  >()
})

test(`second step definition`, () => {
  const p1 = b0.step({ name: `a`, run: () => results.a })
  expectTypeOf(p1.step).toMatchTypeOf<
    (
      input: {
        name: string
        run: (params: {
          input: results['a']
          slots: undefined
          previous: { a: { output: results['a'] } }
        }) => any
      },
    ) => any
  >()
  expectTypeOf(p1.context).toMatchTypeOf<
    {
      input: initialInput
      steps: [{ name: 'a'; slots: undefined; run: any }]
      config: Config
    }
  >()
})
test(`step input receives awaited return value from previous step `, () => {
  const p1 = b0.step({ name: `a`, run: () => Promise.resolve(results.a) })
  type s2Parameters = Parameters<Parameters<typeof p1.step>[0]['run']>[0]['input']
  expectTypeOf<s2Parameters>().toEqualTypeOf<results['a']>()
})

test(`step definition with slots`, () => {
  const p1 = b0
    .step({
      name: `a`,
      slots: {
        m: slots.m,
        n: slots.n,
      },
      run: ({ slots }) => {
        expectTypeOf(slots.m()).toEqualTypeOf<Promise<'m'>>()
        expectTypeOf(slots.n()).toEqualTypeOf<'n'>()
        return results.a
      },
    })
  expectTypeOf(p1.context).toMatchTypeOf<
    {
      input: initialInput
      config: Config
      steps: [{
        name: 'a'
        slots: slots
        run: (params: {
          input: initialInput
          slots: slots
          previous: undefined
        }) => any
      }]
    }
  >()
})

test(`.done() returns a pipeline`, () => {
  const p0 = b0.done()
  expectTypeOf<typeof p0>().toMatchTypeOf<{ config: Config; steps: []; input: initialInput; output: initialInput }>()

  const p1 = b0.step(stepA).done()
  expectTypeOf<typeof p1>().toMatchTypeOf<
    { config: Config; steps: [{ name: `a`; run: any }]; input: initialInput; output: results['a'] }
  >()
})
