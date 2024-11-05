import { describe, expectTypeOf, test } from 'vitest'
import { _, type ExcludeUndefined } from '../../prelude.js'
import { type Interceptor, Pipeline } from '../_.js'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots } from '../__.test-helpers.js'
import type { SomePublicStepEnvelope } from '../hook/public.js'

const p0 = Pipeline.create<initialInput>()

const p1 = p0
  .step({ name: `a`, run: () => results.a })
  .step({ name: `b`, run: () => results.b })
  .step({ name: `c`, run: () => results.c })

type p1 = typeof p1

describe(`interceptor constructor`, () => {
  type i1 = Interceptor.InferConstructor<p1['context']>

  test(`receives keyword arguments, a step trigger for each step`, () => {
    expectTypeOf<Parameters<i1>>().toMatchTypeOf<[steps: { a: any; b: any; c: any }]>()
    expectTypeOf<Parameters<i1>>().toMatchTypeOf<[steps: {
      a: (params: { input?: initialInput }) => Promise<{ b: (params: { input?: results['a'] }) => any }>
      b: (params: { input?: results['a'] }) => Promise<{ c: (params: { input?: results['b'] }) => any }>
      c: (params: { input?: results['b'] }) => Promise<results['c']>
    }]>()
  })

  // --- trigger ---

  test(`original input on self`, () => {
    const p = p0.step({ name: `a`, run: () => results.a })
    type i = Interceptor.InferConstructor<typeof p['context']>
    type triggerA = Parameters<i>[0]['a']
    expectTypeOf<triggerA['input']>().toMatchTypeOf<initialInput>()
  })

  test(`trigger arguments are optional`, () => {
    const p = p0.step({ name: `a`, run: () => results.a })
    type i = Interceptor.InferConstructor<typeof p['context']>
    expectTypeOf<[]>().toMatchTypeOf<Parameters<Parameters<i>[0]['a']>>()
  })

  test(`trigger accepts slots if definition has them, otherwise does NOT so much as accept the slots key`, () => {
    const p = p0.step({
      name: `a`,
      slots: { m: slots.m },
      run: () => Promise.resolve(results.a),
    })
      .step({ name: `b`, run: () => results.b })
    type i = Interceptor.InferConstructor<typeof p['context']>
    type triggerAParameters = Parameters<Parameters<i>[0]['a']>
    expectTypeOf<triggerAParameters>().toEqualTypeOf<
      [params?: { input?: initialInput; using?: { m?: () => Promise<'m' | undefined> } }]
    >
    type triggerBParameters = Parameters<Parameters<i1>[0]['b']>
    expectTypeOf<triggerBParameters>().toEqualTypeOf<[params?: { input?: results['a'] }]> // no "using" key!
  })

  // --- slots ---

  test(`slots are optional`, () => {
    const p = p0.step({ name: `a`, slots, run: () => results.a })
    type triggerA = Parameters<Interceptor.InferConstructor<typeof p['context']>>[0]['a']
    type triggerASlotInputs = ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>
    expectTypeOf<{ m?: any; n?: any }>().toMatchTypeOf<triggerASlotInputs>()
  })

  test(`slot function can return undefined (falls back to default slot)`, () => {
    const p = p0.step({ name: `a`, slots, run: () => results.a })
    type triggerA = Parameters<Interceptor.InferConstructor<typeof p['context']>>[0]['a']
    type triggerASlotMOutput = ReturnType<
      ExcludeUndefined<ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>['m']>
    >
    expectTypeOf<Promise<`m` | undefined>>().toEqualTypeOf<triggerASlotMOutput>()
    type triggerASlotNOutput = ReturnType<
      ExcludeUndefined<ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>['n']>
    >
    expectTypeOf<`n` | undefined>().toEqualTypeOf<triggerASlotNOutput>()
  })

  // --- return ---

  test(`can return pipeline output or a step envelope`, () => {
    expectTypeOf<ReturnType<i1>>().toEqualTypeOf<Promise<results['c'] | SomePublicStepEnvelope>>()
  })

  test(`return type awaits pipeline output`, () => {
    const p = p0.step({ name: `a`, run: () => Promise.resolve(results.a) })
    type i = Interceptor.InferConstructor<typeof p['context']>
    expectTypeOf<ReturnType<i>>().toEqualTypeOf<Promise<results['a'] | SomePublicStepEnvelope>>()
  })
})
