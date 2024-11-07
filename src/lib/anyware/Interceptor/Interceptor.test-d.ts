import { describe, expectTypeOf, test } from 'vitest'
import { _, type ExcludeUndefined } from '../../prelude.js'
import { type Interceptor, Pipeline } from '../_.js'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots } from '../__.test-helpers.js'
import type { Builder } from '../Pipeline/builder.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

const p0 = Pipeline.create<initialInput>()

describe(`interceptor constructor`, () => {
  test(`receives keyword arguments, a step trigger for each step`, () => {
    const p1 = p0
      .step({ name: `a`, run: () => results.a })
      .step({ name: `b`, run: () => results.b })
      .step({ name: `c`, run: () => results.c })
    type i1 = Interceptor.InferConstructor<typeof p1['context']>
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
    type triggerA = GetTriggerFromBuilder<typeof p, 'a'>
    expectTypeOf<triggerA['input']>().toMatchTypeOf<initialInput>()
  })

  test(`trigger arguments are optional`, () => {
    const p = p0.step({ name: `a`, run: () => results.a })
    type triggerA = GetTriggerFromBuilder<typeof p, 'a'>
    expectTypeOf<[]>().toMatchTypeOf<Parameters<triggerA>>()
  })

  // --- slots ---

  test(`trigger accepts slots if definition has them, otherwise does NOT so much as accept the slots key`, () => {
    const p = p0.step({ name: `a`, slots, run: () => results.a }).step({ name: `b`, run: () => results.b })
    type triggerA = GetTriggerFromBuilder<typeof p, 'a'>
    type triggerB = GetTriggerFromBuilder<typeof p, 'b'>
    expectTypeOf<Parameters<triggerA>>().toEqualTypeOf<[params?: {
      input?: initialInput
      using?: {
        m?: () => Promise<'m' | undefined>
        n?: () => 'n' | undefined
      }
    }]>
    expectTypeOf<Parameters<triggerB>>().toEqualTypeOf<[params?: { input?: results['a'] }]> // no "using" key!
  })

  test(`slots are optional`, () => {
    const p = p0.step({ name: `a`, slots, run: () => results.a })
    type triggerA = GetTriggerFromBuilder<typeof p, 'a'>
    type triggerASlotInputs = ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>
    expectTypeOf<{ m?: any; n?: any }>().toMatchTypeOf<triggerASlotInputs>()
  })

  test(`slot function can return undefined (falls back to default slot)`, () => {
    const p = p0.step({ name: `a`, slots, run: () => results.a })
    type triggerA = GetTriggerFromBuilder<typeof p, 'a'>
    type triggerASlotMOutput = ReturnType<
      ExcludeUndefined<ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>['m']>
    >
    expectTypeOf<Promise<`m` | undefined>>().toEqualTypeOf<triggerASlotMOutput>()
    type triggerASlotNOutput = ReturnType<
      ExcludeUndefined<ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>['n']>
    >
    expectTypeOf<`n` | undefined>().toEqualTypeOf<triggerASlotNOutput>()
  })

  // --- output ---
  //
  test(`can return pipeline output or a step envelope`, () => {
    const p = p0.step({ name: `a`, run: () => results.a })
    expectTypeOf<GetReturnTypeFromBuilder<typeof p>>().toEqualTypeOf<Promise<results['a'] | StepTriggerEnvelope>>()
  })

  test(`return type awaits pipeline output`, () => {
    const p = p0.step({ name: `a`, run: () => Promise.resolve(results.a) })
    expectTypeOf<GetReturnTypeFromBuilder<typeof p>>().toEqualTypeOf<Promise<results['a'] | StepTriggerEnvelope>>()
  })
})

// --- Helpers ---

// dprint-ignore
// @ts-expect-error
type GetTriggerFromBuilder<$Builder extends Builder, $TriggerName extends string> = Parameters<Interceptor.InferConstructor<$Builder['context']>>[0][$TriggerName]
// dprint-ignore
type GetReturnTypeFromBuilder<$Builder extends Builder> = ReturnType<Interceptor.InferConstructor<$Builder['context']>>
