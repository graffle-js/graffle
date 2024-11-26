import { describe, expectTypeOf, test } from 'vitest'
import { _, type ExcludeUndefined } from '../../prelude.js'
import type { Interceptor } from '../_.js'
import { Pipeline, PipelineDefinition } from '../_.js'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots } from '../__.test-helpers.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

const b0 = PipelineDefinition.create().input<initialInput>()

describe(`interceptor constructor`, () => {
  test(`receives keyword arguments, a step trigger for each step`, () => {
    const b1 = b0
      .step({ name: `a`, run: () => results.a })
      .step({ name: `b`, run: () => results.b })
      .step({ name: `c`, run: () => results.c })
    const p1 = Pipeline.create(b1.type)
    type i1 = Interceptor.InferFromPipeline<typeof p1>
    expectTypeOf<Parameters<i1>>().toMatchTypeOf<[steps: { a: any; b: any; c: any }]>()
    // const x: Parameters<i1>['0']['a'] = _
    // x({input:{x:1}}).then(r => r.b({input:{}}))
    expectTypeOf<Parameters<i1>>().toMatchTypeOf<[steps: {
      a: (params: { input?: initialInput }) => Promise<{ b: (params: { input?: results['a'] }) => any }>
      b: (params: { input?: results['a'] }) => Promise<{ c: (params: { input?: results['b'] }) => any }>
      c: (params: { input?: results['b'] }) => Promise<results['c']>
    }]>()
  })

  // --- trigger ---

  test(`original input on self`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    expectTypeOf<triggerA['input']>().toMatchTypeOf<initialInput>()
  })

  test(`trigger arguments are optional`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    expectTypeOf<[]>().toMatchTypeOf<Parameters<triggerA>>()
  })

  // --- slots ---

  test(`trigger accepts slots if definition has them, otherwise does NOT so much as accept the slots key`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).step({ name: `b`, run: () => results.b }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerB = PipelineGetTrigger<typeof p, 'b'>
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
    const p = b0.step({ name: `a`, slots, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerASlotInputs = ExcludeUndefined<ExcludeUndefined<Parameters<triggerA>[0]>['using']>
    expectTypeOf<{ m?: any; n?: any }>().toMatchTypeOf<triggerASlotInputs>()
  })

  test(`slot function can return undefined (falls back to default slot)`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
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
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type i = PipelineGetReturnType<typeof p>
    expectTypeOf<i>().toEqualTypeOf<Promise<results['a'] | StepTriggerEnvelope>>()
  })

  test(`return type awaits pipeline output`, () => {
    const p = b0.step({ name: `a`, run: () => Promise.resolve(results.a) }).done()
    expectTypeOf<PipelineGetReturnType<typeof p>>().toEqualTypeOf<Promise<results['a'] | StepTriggerEnvelope>>()
  })
})

// --- Helpers ---

// dprint-ignore
type PipelineGetTrigger<$Pipeline extends Pipeline, $TriggerName extends string> =
  // @ts-expect-error
  Parameters<Interceptor.InferFromPipeline<$Pipeline>>[0][$TriggerName]

// dprint-ignore
type PipelineGetReturnType<$Pipeline extends Pipeline> =
  ReturnType<Interceptor.InferFromPipeline<$Pipeline>>
