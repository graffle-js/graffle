import { Ts, type Undefined } from '@wollybeard/kit'
import { describe, test } from 'vitest'
import type { Interceptor } from '../$$.js'
import { Pipeline, PipelineDefinition } from '../$$.js'
import type { initialInput } from '../_.test-helpers.js'
import { results, slots } from '../_.test-helpers.js'
import type { StepTriggerEnvelope } from '../StepTriggerEnvelope.js'

const b0 = PipelineDefinition.create().input<initialInput>()

describe(`interceptor constructor`, () => {
  test(`receives keyword arguments, a step trigger for each step`, () => {
    const b1 = b0
      .step({ name: `a`, run: () => results.a })
      .step({ name: `b`, run: () => results.b })
      .step({ name: `c`, run: () => results.c })
    const p1 = Pipeline.create(b1.type)
    const i1 = Ts.as<Interceptor.InferFromPipeline<typeof p1>>()
    Ts.Assert.parameter1.equiv.ofAs<{ a: any; b: any; c: any }>()(i1)
    Ts.Assert.parameters.sub.ofAs<[{
      a: (params: { input?: initialInput }) => Promise<{ b: (params: { input?: results['a'] }) => any }>
      b: (params: { input?: results['a'] }) => Promise<{ c: (params: { input?: results['b'] }) => any }>
      c: (params: { input?: results['b'] }) => Promise<results['c']>
    }]>()(i1)
    // const x: Parameters<i1>['0']['a'] = _
    // x({input:{x:1}}).then(r => r.b({input:{}}))
  })

  // --- trigger ---

  test(`original input on self`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type _ = Ts.Assert.Cases<
      Ts.Assert.sub.of<initialInput, triggerA['input']>
    >
  })

  test(`trigger arguments are optional`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    const triggerA = Ts.as<PipelineGetTrigger<typeof p, 'a'>>()
    Ts.Assert.parameters.sub.ofAs<[params?: { input?: initialInput }]>()(triggerA)
  })

  // --- slots ---

  test(`trigger accepts slots if definition has them, otherwise does NOT so much as accept the slots key`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).step({ name: `b`, run: () => results.b }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerB = PipelineGetTrigger<typeof p, 'b'>
    type _ = Ts.Assert.Cases<
      Ts.Assert.exact<
        Parameters<triggerA>,
        [params?: {
          input?: initialInput
          using?: {
            m?: () => Promise<'m' | undefined>
            n?: () => 'n' | undefined
          }
        }]
      >,
      Ts.Assert.exact<Parameters<triggerB>, [params?: { input?: results['a'] }]> // no "using" key!
    >
  })

  test(`slots are optional`, () => {
    const p = b0.step({ name: `a`, slots, run: () => results.a }).done()
    type triggerA = PipelineGetTrigger<typeof p, 'a'>
    type triggerASlotInputs = Undefined.Exclude<Undefined.Exclude<Parameters<triggerA>[0]>['using']>
    type _ = Ts.Assert.Cases<
      Ts.Assert.sub.of<triggerASlotInputs, { m?: any; n?: any }>
    >
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
    type _ = Ts.Assert.Cases<
      Ts.Assert.exact<Promise<`m` | undefined>, triggerASlotMOutput>,
      Ts.Assert.exact<`n` | undefined, triggerASlotNOutput>
    >
  })

  // --- output ---
  //
  test(`can return pipeline output or a step envelope`, () => {
    const p = b0.step({ name: `a`, run: () => results.a }).done()
    type i = PipelineGetReturnType<typeof p>
    type _ = Ts.Assert.Cases<
      Ts.Assert.exact<Promise<results['a'] | StepTriggerEnvelope>, i>
    >
  })

  test(`return type awaits pipeline output`, () => {
    const p = b0.step({ name: `a`, run: () => Promise.resolve(results.a) }).done()
    type _ = Ts.Assert.Cases<
      Ts.Assert.exact<
        Promise<results['a'] | StepTriggerEnvelope>,
        PipelineGetReturnType<typeof p>
      >
    >
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
