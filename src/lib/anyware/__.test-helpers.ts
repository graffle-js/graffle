import { keyBy } from 'es-toolkit'
import { beforeEach, vi } from 'vitest'
import type { Tuple } from '../prelude.js'
import { Pipeline } from './_.js'
import type { InterceptorInput } from './Interceptor/Interceptor.js'

export const initialInput = { x: 1 } as const
export type initialInput = typeof initialInput

export const results = {
  a: { a: 1 },
  b: { b: 2 },
  c: { c: 3 },
} as const
export type results = typeof results

export const slots = {
  m: () => Promise.resolve(`m` as const),
  n: () => `n` as const,
}
export type slots = typeof slots

type PrivateHookRunnerInput = {
  input: { value: string }
  slots: { append: (hookName: string) => string; appendExtra: (hookName: string) => string }
  previous: object
}

export const createPipeline = (options?: Pipeline.Options) => {
  return Pipeline.create(options)
    .step({
      name: `a`,
      slots: {
        append: vi.fn().mockImplementation((hookName: string) => {
          return hookName
        }),
        appendExtra: vi.fn().mockImplementation(() => {
          return ``
        }),
      },
      run: vi.fn().mockImplementation(({ input, slots }: PrivateHookRunnerInput) => {
        const extra = slots.appendExtra(`a`)
        return { value: input.value + `+` + slots.append(`a`) + extra }
      }),
    })
    .step({
      name: `b`,
      slots: {
        append: vi.fn().mockImplementation((hookName: string) => {
          return hookName
        }),
        appendExtra: vi.fn().mockImplementation(() => {
          return ``
        }),
      },
      run: vi.fn().mockImplementation(({ input, slots }: PrivateHookRunnerInput) => {
        const extra = slots.appendExtra(`b`)
        return { value: input.value + `+` + slots.append(`b`) + extra }
      }),
    })
}

type TestBuilder = ReturnType<typeof createPipeline>

// @ts-expect-error
export let stepsIndex: Tuple.ToIndexByObjectKey<TestBuilder['context']['steps'], 'name'> = null

beforeEach(() => {
  const builder = createPipeline()
  stepsIndex = keyBy(builder.context.steps, _ => _.name) as any
})

export const runWithOptions = (options?: Pipeline.Options) => {
  const builder = createPipeline(options)
  const run = async (...interceptors: InterceptorInput[]) => {
    return await Pipeline.run(builder, {
      initialInput,
      // @ts-expect-error fixme
      interceptors,
    })
  }
  return {
    builder,
    run,
  }
}

export const run = async (...extensions: InterceptorInput[]) => runWithOptions().run(...extensions)

export const oops = new Error(`oops`)
