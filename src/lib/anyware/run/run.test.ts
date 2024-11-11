/* eslint-disable */

import { beforeEach, describe, expect, test, vi } from 'vitest'
import { Errors } from '../../errors/__.js'
import type { ContextualError } from '../../errors/ContextualError.js'
import { Pipeline } from '../_.js'
import { initialInput2, oops, run, runRetrying, runWithOptions, stepsIndex } from '../__.test-helpers.js'
import { type ResultSuccess, successfulResult } from '../Pipeline/Result.js'
import { Step } from '../Step.js'

describe(`no interceptors`, () => {
  test(`passthrough to implementation`, async () => {
    const result = await run()
    expect(result).toEqual({ value: { value: `initial+a+b` } })
  })
})

describe(`one extension`, () => {
  test(`can return own result`, async () => {
    expect(
      await run(async ({ a }) => {
        const { b } = await a(a.input)
        await b({ input: b.input })
        return 0
      }),
    ).toEqual(successfulResult(0))
    expect(stepsIndex.a.run.mock.calls[0]).toMatchObject([{ input: { value: `initial` } }])
    expect(stepsIndex.a.run).toHaveBeenCalled()
    expect(stepsIndex.b.run).toHaveBeenCalled()
  })
  test('can call hook with no input, making the original input be used', () => {
    expect(
      run(async ({ a }) => {
        return await a()
      }),
    ).resolves.toEqual({ value: { value: 'initial+a+b' } })
    // todo why doesn't this work?
    // expect(core.hooks.a).toHaveBeenCalled()
    // expect(core.hooks.b).toHaveBeenCalled()
  })
  describe(`can short-circuit`, () => {
    test(`at start, return input`, async () => {
      expect(
        // todo arrow function expression parsing not working
        await run(({ a }) => {
          return a.input
        }),
      ).toEqual({ value: { value: `initial` } })
      expect(stepsIndex.a.run).not.toHaveBeenCalled()
      expect(stepsIndex.b.run).not.toHaveBeenCalled()
    })
    test(`at start, return own result`, async () => {
      expect(
        // todo arrow function expression parsing not working
        await run(({ a }) => {
          return 0
        }),
      ).toEqual({ value: 0 })
      expect(stepsIndex.a.run).not.toHaveBeenCalled()
      expect(stepsIndex.b.run).not.toHaveBeenCalled()
    })
    test(`after first hook, return own result`, async () => {
      expect(
        await run(async ({ a }) => {
          const { b } = await a({ input: a.input })
          return b.input.value + `+x`
        }),
      ).toEqual(successfulResult(`initial+a+x`))
      expect(stepsIndex.b.run).not.toHaveBeenCalled()
    })
  })
  describe(`can partially apply`, () => {
    test(`only first hook`, async () => {
      expect(
        await run(async ({ a }) => {
          return await a({ input: { value: a.input.value + `+ext` } })
        }),
      ).toEqual(successfulResult({ value: `initial+ext+a+b` }))
    })
    test(`only second hook`, async () => {
      expect(
        await run(async ({ b }) => {
          return await b({ input: { value: b.input.value + `+ext` } })
        }),
      ).toEqual(successfulResult({ value: `initial+a+ext+b` }))
    })
    test(`only second hook + end`, async () => {
      expect(
        await run(async ({ b }) => {
          const result = await b({ input: { value: b.input.value + `+ext` } })
          return result.value + `+end`
        }),
      ).toEqual(successfulResult(`initial+a+ext+b+end`))
    })
  })
})

describe(`two interceptors`, () => {
  let run: ReturnType<typeof runWithOptions>['run']
  let stepIndex: ReturnType<typeof runWithOptions>['stepsIndex']

  beforeEach(() => {
    const info = runWithOptions({ entrypointSelectionMode: `optional` })
    run = info.run
    stepIndex = info.stepsIndex
  })
  test(`first can short-circuit`, async () => {
    const i1 = () => 1
    const i2 = vi.fn().mockImplementation(() => 2)
    expect(await run(i1, i2)).toEqual(successfulResult(1))
    expect(i2).not.toHaveBeenCalled()
    expect(stepsIndex.a.run).not.toHaveBeenCalled()
    expect(stepsIndex.b.run).not.toHaveBeenCalled()
  })

  test(`each can adjust first hook then passthrough`, async () => {
    const ex1 = ({ a }: any) => a({ input: { value: a.input.value + `+ex1` } })
    const ex2 = ({ a }: any) => a({ input: { value: a.input.value + `+ex2` } })
    expect(await run(ex1, ex2)).toEqual(successfulResult({ value: `initial+ex1+ex2+a+b` }))
  })

  test(`each can adjust each hook`, async () => {
    const ex1 = async ({ a }: any) => {
      const { b } = await a({ input: { value: a.input.value + `+ex1` } })
      return await b({ input: { value: b.input.value + `+ex1` } })
    }
    const ex2 = async ({ a }: any) => {
      const { b } = await a({ input: { value: a.input.value + `+ex2` } })
      return await b({ input: { value: b.input.value + `+ex2` } })
    }
    expect(await run(ex1, ex2)).toEqual(successfulResult({ value: `initial+ex1+ex2+a+ex1+ex2+b` }))
  })

  test(`second can skip hook a`, async () => {
    const ex1 = async ({ a }: any) => {
      const { b } = await a({ input: { value: a.input.value + `+ex1` } })
      return await b({ input: { value: b.input.value + `+ex1` } })
    }
    const ex2 = async ({ b }: any) => {
      return await b({ input: { value: b.input.value + `+ex2` } })
    }
    expect(await run(ex1, ex2)).toEqual(successfulResult({ value: `initial+ex1+a+ex1+ex2+b` }))
  })
  test(`second can short-circuit before step a`, async () => {
    let ex1AfterA = false
    const i1 = async ({ a }: any) => {
      const { b } = await a({ value: a.input.value + `+ex1` })
      ex1AfterA = true
    }
    const i2 = async ({ a }: any) => 2

    expect(await run(i1, i2)).toEqual(successfulResult(2))
    expect(ex1AfterA).toBe(false)
    expect(stepsIndex.a.run).not.toHaveBeenCalled()
    expect(stepsIndex.b.run).not.toHaveBeenCalled()
  })
  test(`second can short-circuit after step a`, async () => {
    let ex1AfterB = false
    const i1 = async ({ a }: any) => {
      const { b } = await a({ input: { value: a.input.value + `+ex1` } })
      await b({ value: b.input.value + `+ex1` })
      ex1AfterB = true
    }
    const i2 = async ({ a }: any) => {
      await a({ value: a.input.value + `+ex2` })
      return 2
    }
    expect(await run(i1, i2)).toEqual(successfulResult(2))
    expect(ex1AfterB).toBe(false)
    expect(stepsIndex.a.run).toHaveBeenCalledOnce()
    expect(stepsIndex.b.run).not.toHaveBeenCalled()
  })
})

describe(`errors`, () => {
  test(`extension that throws a non-error is wrapped in error`, async () => {
    const result = await run(async ({ a }) => {
      throw `oops`
    }) as ContextualError
    expect({
      result,
      context: result.context,
      cause: result.cause,
    }).toMatchInlineSnapshot(`
      {
        "cause": [Error: oops],
        "context": {
          "hookName": "a",
          "interceptorName": "anonymous",
          "source": "extension",
        },
        "result": [ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "a".],
      }
    `)
  })
  test(`extension throws asynchronously`, async () => {
    const result = await run(async ({ a }) => {
      throw oops
    }) as ContextualError
    expect({
      result,
      context: result.context,
      cause: result.cause,
    }).toMatchInlineSnapshot(`
      {
        "cause": [Error: oops],
        "context": {
          "hookName": "a",
          "interceptorName": "anonymous",
          "source": "extension",
        },
        "result": [ContextualError: There was an error in the interceptor "anonymous" (use named functions to improve this error message) while running hook "a".],
      }
    `)
  })

  test(`if implementation fails, without interceptors, result is the error`, async () => {
    stepsIndex.a.run.mockReset().mockRejectedValueOnce(oops)
    const result = await run() as ContextualError
    expect({
      result,
      context: result.context,
      cause: result.cause,
    }).toMatchInlineSnapshot(`
      {
        "cause": [Error: oops],
        "context": {
          "hookName": "a",
          "source": "implementation",
        },
        "result": [ContextualError: There was an error in the core implementation of hook "a".],
      }
    `)
  })
  test('calling a step trigger twice leads to clear error', async () => {
    let neverRan = true
    const result = await run(async ({ a }) => {
      await a()
      await a()
      neverRan = false
    }) as ContextualError
    expect(neverRan).toBe(true)
    const cause = result.cause as ContextualError
    expect(cause.message).toMatchInlineSnapshot(
      `"Only a retrying extension can retry hooks."`,
    )
    expect(cause.context).toMatchInlineSnapshot(`
      {
        "extensionsAfter": [],
        "hookName": "a",
      }
    `)
  })
  describe('certain errors can be configured to be re-thrown without wrapping error', () => {
    class SpecialError1 extends Error {}
    class SpecialError2 extends Error {}
    const stepA = Step.createWithInput<{ throws: Error }>()({
      name: 'a',
      run: ({ input }) => {
        if (input.throws) throw input.throws
      },
    })

    test('via passthroughErrorInstanceOf (one)', async () => {
      const builder = Pipeline.create<{ throws: Error }>({
        passthroughErrorInstanceOf: [SpecialError1],
      }).step(stepA).done()

      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new Error('oops') }, interceptors: [] })).resolves.toBeInstanceOf(Errors.ContextualError)
      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new SpecialError1('oops') }, interceptors: [] })).resolves.toBeInstanceOf(SpecialError1)
    })
    test('via passthroughErrorInstanceOf (multiple)', async () => {
      const builder = Pipeline.create<{ throws: Error }>({
        passthroughErrorInstanceOf: [SpecialError1, SpecialError2],
      }).step(stepA).done()
      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new Error('oops') }, interceptors: [] })).resolves.toBeInstanceOf(Errors.ContextualError)
      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new SpecialError2('oops') }, interceptors: [] })).resolves.toBeInstanceOf(SpecialError2)
    })
    test('via passthroughWith', async () => {
      const builder = Pipeline.create<{ throws: Error }>({
        // todo type-safe hook name according to values passed to constructor
        // todo type-tests on signal { hookName, source, error }
        passthroughErrorWith: (signal) => {
          return signal.error instanceof SpecialError1
        },
      }).step(stepA).done()
      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new Error('oops') }, interceptors: [] })).resolves.toBeInstanceOf(Errors.ContextualError)
      // dprint-ignore
      expect(Pipeline.run(builder, { initialInput: { throws: new SpecialError1('oops') }, interceptors: [] })).resolves.toBeInstanceOf(SpecialError1)
    })
  })
})

describe('retrying extension', () => {
  test('if hook fails, extension can retry, then short-circuit', async () => {
    stepsIndex.a.run.mockReset().mockRejectedValueOnce(oops).mockResolvedValueOnce(1)
    const result = await runRetrying(async function foo({ a }) {
      const result1 = await a()
      expect(result1).toEqual(oops)
      const result2 = await a()
      expect(typeof result2.b).toEqual('function')
      expect(result2.b.input).toEqual(1)
      return result2.b.input
    })
    expect(result).toEqual(successfulResult(1))
  })

  describe('errors', () => {
    // test('not last extension', async () => {
    //   const result = await run(
    //     createRetryingInterceptor(async function foo({ a }) {
    //       return a()
    //     }),
    //     async function bar({ a }) {
    //       return a()
    //     },
    //   )
    //   expect(result).toMatchInlineSnapshot(`[ContextualError: Only the last extension can retry hooks.]`)
    //   expect((result as Errors.ContextualError).context).toMatchInlineSnapshot(`
    //     {
    //       "extensionsAfter": [
    //         {
    //           "name": "bar",
    //         },
    //       ],
    //     }
    //   `)
    // })
    test('call hook twice even though it succeeded the first time', async () => {
      let neverRan = true
      const result = await runRetrying(
        async function foo({ a }) {
          const result1 = await a()
          expect('b' in result1).toBe(true)
          await a() // <-- Extension bug here under test.
          neverRan = false
        },
      )
      expect(neverRan).toBe(true)
      expect(result).toMatchInlineSnapshot(
        `[ContextualError: There was an error in the interceptor "foo".]`,
      )
      expect((result as Errors.ContextualError).context).toMatchInlineSnapshot(
        `
        {
          "hookName": "a",
          "interceptorName": "foo",
          "source": "extension",
        }
      `,
      )
      expect((result as Errors.ContextualError).cause).toMatchInlineSnapshot(
        `[ContextualError: Only after failure can a hook be called again by a retrying extension.]`,
      )
    })
  })
})

describe('slots', () => {
  test('have defaults that are called by default', async () => {
    await run()
    expect(stepsIndex.a.slots.append.mock.calls[0]).toMatchObject(['a'])
    expect(stepsIndex.b.slots.append.mock.calls[0]).toMatchObject(['b'])
  })
  test('extension can provide own function to slot on just one of a set of hooks', async () => {
    const result = await run(async ({ a }) => {
      return a({ using: { append: () => 'x' } })
    })
    expect(stepsIndex.a.slots.append).not.toBeCalled()
    expect(stepsIndex.b.slots.append.mock.calls[0]).toMatchObject(['b'])
    expect(result).toEqual(successfulResult({ value: 'initial+x+b' }))
  })
  test('extension can provide own functions to slots on multiple of a set of hooks', async () => {
    const result = await run(async ({ a }) => {
      return a({ using: { append: () => 'x', appendExtra: () => '+x2' } })
    })
    expect(result).toEqual(successfulResult({ value: 'initial+x+x2+b' }))
  })
  // todo hook with two slots
  test('two extensions can each provide own function to same slot on just one of a set of hooks, and the later one wins', async () => {
    const result = await run(async ({ a }) => {
      const { b } = await a({ using: { append: () => 'x' } })
      return b({ using: { append: () => 'y' } })
    })
    expect(stepsIndex.a.slots.append).not.toBeCalled()
    expect(stepsIndex.b.slots.append).not.toBeCalled()
    expect(result).toEqual(successfulResult({ value: 'initial+x+y' }))
  })
})

describe('private hook parameter - previous', () => {
  test('contains inputs of previous hooks', async () => {
    await run(async ({ a }) => {
      return a()
    })
    expect(stepsIndex.a.run.mock.calls[0]?.[0].previous).toEqual({})
    expect(stepsIndex.b.run.mock.calls[0]?.[0].previous).toEqual({ a: { input: initialInput2 } })
  })

  test('contains the final input actually passed to the hook', async () => {
    const customInput = { value: 'custom' }
    await run(async ({ a }) => {
      return a({ input: customInput })
    })
    expect(stepsIndex.a.run.mock.calls[0]?.[0].previous).toEqual({})
    expect(stepsIndex.b.run.mock.calls[0]?.[0].previous).toEqual({ a: { input: customInput } })
  })
})
