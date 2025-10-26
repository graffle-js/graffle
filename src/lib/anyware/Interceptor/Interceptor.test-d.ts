// dprint-ignore-file
import { Ts, type Undefined } from '@wollybeard/kit'
import { describe, test } from 'vitest'
import type { Interceptor } from '../$$.js'
import { Pipeline, PipelineDefinition } from '../$$.js'
import type { initialInput } from '../_.test-helpers.js'
import { results, slots } from '../_.test-helpers.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

const A = Ts.Assert

const b0 = PipelineDefinition.create().input<initialInput>()

describe(`interceptor constructor`, () => {
  test(`receives keyword arguments, a step trigger for each step`, () => {
    const b1 = b0
      .step({ name: `a`, run: () => results.a })
      .step({ name: `b`, run: () => results.b })
      .step({ name: `c`, run: () => results.c })
    const p1 = Pipeline.create(b1.type)
    const i1 = Ts.as<Interceptor.InferFromPipeline<typeof p1>>()
    A.parameter1.equiv.ofAs<{ a: any; b: any; c: any }>().on(i1)
    A.parameters.sub.ofAs<[{
      a: (params: { input?: initialInput }) => Promise<{ b: (params: { input?: results['a'] }) => any }>
      b: (params: { input?: results['a'] }) => Promise<{ c: (params: { input?: results['b'] }) => any }>
      c: (params: { input?: results['b'] }) => Promise<results['c']>
    }]>().on(i1)
    // const x: Parameters<i1>['0']['a'] = _
    // x({input:{x:1}}).then(r => r.b({input:{}}))
  })

  // --- trigger ---

  test(`original input on self`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    A.sub.ofAs<initialInput>().onAs<triggerA['input']>()
  })

  test(`trigger arguments are optional`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    const triggerA = Ts.as<PipelineGetTrigger<typeof p, 'a'>>()
    A.parameters.sub.ofAs<[params?: { input?: initialInput }]>().on(triggerA)
  })

  // --- slots ---

  test(`trigger accepts slots if definition has them, otherwise does NOT so much as accept the slots key`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).step({ name: `b`, run: () => results.b }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerB = PipelineGetTrigger<typeof p, 'b'>
    A.exact.ofAs<[params?: {
      input?: initialInput
      using?: {
        m?: () => Promise<'m' | undefined>
        n?: () => 'n' | undefined
      }
    }]>().onAs<Parameters<triggerA>>()
    A.exact.ofAs<[params?: { input?: results['a'] }]>().onAs<Parameters<triggerB>>() // no "using" key!
  })

  test(`slots are optional`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerASlotInputs = Undefined.Exclude<Undefined.Exclude<Parameters<triggerA>[0]>['using']>
    A.sub.ofAs<triggerASlotInputs>().onAs<{ m?: any; n?: any }>()
  })

  test(`slot function can return undefined (falls back to default slot)`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerASlotMOutput = ReturnType<
      Undefined.Exclude<Undefined.Exclude<Undefined.Exclude<Parameters<triggerA>[0]>['using']>['m']>
    >
    type triggerASlotNOutput = ReturnType<
      Undefined.Exclude<Undefined.Exclude<Undefined.Exclude<Parameters<triggerA>[0]>['using']>['n']>
    >
    A.exact.ofAs<Promise<`m` | undefined>>().onAs<triggerASlotMOutput>()
    A.exact.ofAs<`n` | undefined>().onAs<triggerASlotNOutput>()
  })

  // --- output ---
  //
  test(`can return pipeline output or a step envelope`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type i = PipelineGetReturnType<typeof p>
    A.exact.ofAs<Promise<results['a'] | StepTriggerEnvelope>>().onAs<i>()
  })

  test(`return type awaits pipeline output`, () => {
    const p = b0.step({ name: `a`, run: () => Promise.resolve(results.a) }).done()
    A.exact.ofAs<Promise<results['a'] | StepTriggerEnvelope>>().onAs<PipelineGetReturnType<typeof p>>()
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
