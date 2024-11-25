import { beforeEach, vi } from 'vitest'
import { PipelineDef } from './_.js'
import type { Interceptor, NonRetryingInterceptorInput } from './Interceptor/Interceptor.js'
import { Pipeline } from './Pipeline/Pipeline.js'
import type { Options } from './PipelineDef/Config.js'
import { StepDef } from './StepDef.js'

export const initialInput = { x: 1 } as const
export type initialInput = typeof initialInput

export const initialInput2 = { value: `initial` } as const

export const results = {
  a: { a: 1 },
  b: { b: 2 },
  c: { c: 3 },
} as const
export type results = typeof results

export const stepA = StepDef.createWithInput<initialInput>()({ name: `a`, run: () => results[`a`] })
export const stepB = StepDef.createWithInput<results[`a`]>()({ name: `b`, run: () => results[`b`] })
export const stepC = StepDef.createWithInput<results[`b`]>()({ name: `c`, run: () => results[`c`] })

export const slots = {
  m: () => Promise.resolve(`m` as const),
  n: () => `n` as const,
}
export type slots = typeof slots

export const createPipelineDef = (options?: Options) => {
  type Append = (hookName: string) => string

  type AppendExtra = () => string

  const stepARunner = vi.fn<
    (
      input: { value: string },
      slots: { append: (hookName: string) => string; appendExtra: (hookName: string) => string },
      previous: undefined,
    ) => { value: string }
  >().mockImplementation((input, slots) => {
    const extra = slots.appendExtra(`a`)
    return {
      value: input.value + `+` + slots.append(`a`) + extra,
    }
  })

  type StepARunner = typeof stepARunner

  const stepBRunner = vi.fn<
    (
      input: { value: string },
      slots: { append: (hookName: string) => string; appendExtra: (hookName: string) => string },
      previous: object,
    ) => { value: string }
  >().mockImplementation((input, slots) => {
    const extra = slots.appendExtra(`b`)
    return {
      value: input.value + `+` + slots.append(`b`) + extra,
    }
  })

  type StepBRunner = typeof stepBRunner

  return PipelineDef
    .create(options)
    .input<{ value: string }>()
    .stepWithRunnerType<StepARunner>()(`a`, {
      slots: {
        append: vi.fn<Append>().mockImplementation((hookName) => {
          return hookName
        }),
        appendExtra: vi.fn<AppendExtra>().mockImplementation(() => {
          return ``
        }),
      },
      run: stepARunner,
    })
    .stepWithRunnerType<StepBRunner>()(`b`, {
      slots: {
        append: vi.fn<Append>().mockImplementation((hookName) => {
          return hookName
        }),
        appendExtra: vi.fn<AppendExtra>().mockImplementation(() => {
          return ``
        }),
      },
      run: stepBRunner,
    })
}

type TestPipelineDef = ReturnType<typeof createPipelineDef>['type']
type TestPipeline = Pipeline.InferFromDefinition<TestPipelineDef>

export let pipelineDef: TestPipelineDef
export let pipeline: TestPipeline

export type TestInterceptor = Interceptor.InferFromPipeline<TestPipeline>

beforeEach(() => {
  pipelineDef = createPipelineDef().type
  pipeline = Pipeline.create(pipelineDef)
})

export const pipelineWithOptions = (options?: Options) => {
  const pipeline = createPipelineDef(options).type
  const pipelineE = Pipeline.create(pipeline)
  const run = async (...interceptors: TestInterceptor[]) => {
    return await PipelineDef.run(pipelineE, {
      initialInput: { value: `initial` },
      interceptors,
    })
  }
  return {
    pipeline,
    pipelineE,
    run,
  }
}

export const run = async (...interceptors: NonRetryingInterceptorInput[]) => {
  return await PipelineDef.run(pipeline, {
    initialInput: initialInput2,
    interceptors,
  })
}

export const runRetrying = async (interceptor: NonRetryingInterceptorInput) => {
  return await PipelineDef.run(pipeline, {
    initialInput: initialInput2,
    interceptors: [],
    retryingInterceptor: interceptor,
  })
}

export const oops = new Error(`oops`)
