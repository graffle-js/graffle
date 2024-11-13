import { beforeEach, vi } from 'vitest'
import { Pipeline } from './_.js'
import type { Interceptor, NonRetryingInterceptorInput } from './Interceptor/Interceptor.js'
import type { Options } from './Pipeline/Config.js'
import { Step } from './Step.js'

export const initialInput = { x: 1 } as const
export type initialInput = typeof initialInput

export const initialInput2 = { value: `initial` } as const

export const results = {
  a: { a: 1 },
  b: { b: 2 },
  c: { c: 3 },
} as const
export type results = typeof results

export const stepA = Step.createWithInput<initialInput>()({ name: `a`, run: () => results[`a`] })
export const stepB = Step.createWithInput<results[`a`]>()({ name: `b`, run: () => results[`b`] })
export const stepC = Step.createWithInput<results[`b`]>()({ name: `c`, run: () => results[`c`] })

export const slots = {
  m: () => Promise.resolve(`m` as const),
  n: () => `n` as const,
}
export type slots = typeof slots

export const createPipeline = (options?: Options) => {
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

  return Pipeline
    .create<{ value: string }>(options)
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
    .done()
}

type TestPipeline = ReturnType<typeof createPipeline>
export type TestInterceptor = Interceptor.InferConstructor<TestPipeline['spec']>

export let pipeline: TestPipeline

beforeEach(() => {
  pipeline = createPipeline()
})

export const pipelineWithOptions = (options?: Options) => {
  const pipeline = createPipeline(options)
  const run = async (...interceptors: TestInterceptor[]) => {
    return await Pipeline.run(pipeline, {
      initialInput: { value: `initial` },
      interceptors,
    })
  }
  return {
    pipeline,
    run,
  }
}

export const run = async (...interceptors: NonRetryingInterceptorInput[]) => {
  return await Pipeline.run(pipeline, {
    initialInput: initialInput2,
    interceptors,
  })
}

export const runRetrying = async (interceptor: NonRetryingInterceptorInput) => {
  return await Pipeline.run(pipeline, {
    initialInput: initialInput2,
    interceptors: [],
    retryingInterceptor: interceptor,
  })
}

export const oops = new Error(`oops`)
