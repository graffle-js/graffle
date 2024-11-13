import { keyBy } from 'es-toolkit'
import { beforeEach, vi } from 'vitest'
import type { Tuple } from '../prelude.js'
import { Pipeline } from './_.js'
import type { NonRetryingInterceptorInput } from './Interceptor/Interceptor.js'
import type { Options } from './Pipeline/Config.js'
import type { ExecutablePipeline } from './Pipeline/ExecutablePipeline.js'
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

type StepARun = (
  input: { value: string },
  slots: { append: (hookName: string) => string; appendExtra: (hookName: string) => string },
  previous: undefined,
) => { value: string }

type StepBRun = (
  input: { value: string },
  slots: { append: (hookName: string) => string; appendExtra: (hookName: string) => string },
  previous: object,
) => { value: string }

type Append = (hookName: string) => string

type AppendExtra = () => string

export const createPipeline = (options?: Options) => {
  return Pipeline
    .create<{ value: string }>(options)
    .step(`a`, {
      slots: {
        append: vi.fn<Append>().mockImplementation((hookName) => {
          return hookName
        }),
        appendExtra: vi.fn<AppendExtra>().mockImplementation(() => {
          return ``
        }),
      },
      run: vi.fn<StepARun>().mockImplementation((input, slots) => {
        const extra = slots.appendExtra(`a`)
        return { value: input.value + `+` + slots.append(`a`) + extra }
      }),
    })
    .step(`b`, {
      slots: {
        append: vi.fn<Append>().mockImplementation((hookName) => {
          return hookName
        }),
        appendExtra: vi.fn<AppendExtra>().mockImplementation(() => {
          return ``
        }),
      },
      run: vi.fn<StepBRun>().mockImplementation((input, slots) => {
        const extra = slots.appendExtra(`b`)
        return { value: input.value + `+` + slots.append(`b`) + extra }
      }),
    })
    .done()
}

type TestPipeline = ReturnType<typeof createPipeline>

export let stepsIndex: Tuple.ToIndexByObjectKey<TestPipeline['steps'], 'name'>
let pipeline: ExecutablePipeline

beforeEach(() => {
  pipeline = createPipeline()
  stepsIndex = keyBy(pipeline.steps, _ => _.name) as any
})

export const runWithOptions = (options?: Options) => {
  const pipeline = createPipeline(options)
  const run = async (...interceptors: NonRetryingInterceptorInput[]) => {
    return await Pipeline.run(pipeline, {
      initialInput: { value: `initial` },
      interceptors,
    })
  }
  stepsIndex = keyBy(pipeline.steps, _ => _.name) as any
  return {
    pipeline,
    stepsIndex,
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
