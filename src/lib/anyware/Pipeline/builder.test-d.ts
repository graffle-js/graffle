import type { Simplify } from 'type-fest'
import { describe, expectTypeOf, test } from 'vitest'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots, stepA, stepB } from '../__.test-helpers.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import { Pipeline } from './__.js'
import type { Config } from './Config.js'
import type { Result } from './Result.js'

const b0 = Pipeline.create<initialInput>()

test(`initial context`, () => {
  expectTypeOf(b0.context).toEqualTypeOf<{ input: initialInput; steps: []; config: Config; overloads: [] }>()
})

test(`first step definition`, () => {
  expectTypeOf(b0.step).toMatchTypeOf<
    (name: string, definition: { run: (params: { input: initialInput; previous: undefined }) => any }) => any
  >()
})

test(`can force an input type while inferring rest`, () => {
  const b1 = b0.step(`a`, { run: (_: { x: 9 }) => {} })
  expectTypeOf(b1.context.steps[0].name).toEqualTypeOf<'a'>()
  expectTypeOf(b1.context.steps[0].input).toEqualTypeOf<{ x: 9 }>()
})

test(`step can omit run, output defaults to object`, () => {
  const b1 = b0.step(`a`)
  expectTypeOf(b1.context.steps[0].input).toEqualTypeOf<{ readonly x: 1 }>()
  expectTypeOf(b1.context.steps[0].output).toEqualTypeOf<{}>()
  const b2 = b0.step(`a`).step(`b`)
  expectTypeOf(b2.context.steps[1].input).toEqualTypeOf<{}>()
  expectTypeOf(b2.context.steps[1].output).toEqualTypeOf<{}>()
})

test(`second step definition`, () => {
  const p1 = b0.step(`a`, { run: () => results.a })
  expectTypeOf(p1.step).toMatchTypeOf<
    (
      name: string,
      parameters: {
        run: (params: {
          input: results['a']
          slots: undefined
          previous: { a: { output: results['a'] } }
        }) => any
      },
    ) => any
  >()
  expectTypeOf(p1.context).toMatchTypeOf<
    {
      input: initialInput
      steps: [{ name: 'a'; slots: undefined }]
      config: Config
    }
  >()
})
test(`step input receives awaited return value from previous step `, () => {
  const b1 = b0.step(`a`, { run: () => Promise.resolve(results.a) })
  b1.step(`b`, {
    run: (input) => {
      expectTypeOf(input).toEqualTypeOf<results['a']>()
    },
  })
})

test(`step definition with slots`, () => {
  const p1 = b0
    .step(`a`, {
      slots: {
        m: slots.m,
        n: slots.n,
      },
      run: (_, slots) => {
        expectTypeOf(slots.m()).toEqualTypeOf<Promise<'m'>>()
        expectTypeOf(slots.n()).toEqualTypeOf<'n'>()
        return results.a
      },
    })
  expectTypeOf(p1.context).toMatchTypeOf<
    {
      input: initialInput
      config: Config
      steps: [{ name: 'a'; slots: slots; input: initialInput; output: results['a'] }]
    }
  >()
})

test(`.done() returns a pipeline`, () => {
  const p0 = b0.done()
  expectTypeOf<typeof p0>().toMatchTypeOf<
    { config: Config; steps: ExecutableStep[]; input: initialInput; output: Result<initialInput> }
  >()
  const p1 = b0.step(stepA).done()
  expectTypeOf<typeof p1>().toMatchTypeOf<
    { config: Config; steps: ExecutableStep[]; input: initialInput; output: Result<results['a']> }
  >()
})

describe(`overload`, () => {
  const dName = `_`
  type dName = typeof dName
  const dValue = 1
  type dValue = typeof dValue
  type dObject = { [_ in dName]: dValue }
  const dValue2 = 2
  type dValue2 = typeof dValue2
  type dObject2 = { [_ in dName]: dValue2 }

  test(`overload without steps appended to empty context`, () => {
    expectTypeOf(b0.overload(o => o.discriminant(dName, dValue)).context.overloads).toMatchTypeOf<
      [{ discriminant: [dName, dValue]; input: {}; steps: {} }]
    >()
  })
  test(`overload with step is appended to empty context`, () => {
    expectTypeOf(
      b0.step(`a`).step(stepB).overload(o =>
        o
          .discriminant(dName, dValue)
          .step(`a`, { run: (input) => ({ ...input, ola: 1 as const }) })
      ).context.overloads,
    )
      .toMatchTypeOf<[
        {
          discriminant: [dName, dValue]
          input: {}
          steps: {
            a: {
              name: 'a'
              slots: undefined
              input: initialInput & dObject
              output: initialInput & dObject & { ola: 1 }
            }
          }
        },
      ]>()
  })

  // Parameters

  test(`parameter steps, first key, run key, parameter input, equals previous step output`, () => {
    b0.step(stepA).step(`b`).overload(o =>
      o
        .discriminant(dName, dValue)
        .step(`b`, {
          run: (input) => {
            expectTypeOf(input).toEqualTypeOf<results['a'] & dObject>()
          },
        })
    )
  })

  // output
  test(`overload inputs become a pipeline union input`, () => {
    const p = b0
      .step(`a`)
      .overload(o => o.discriminant(dName, dValue).input<{ ol1: 1 }>())
      .overload(o => o.discriminant(dName, dValue2).input<{ ol2: 2 }>())
      .done()
    expectTypeOf(p.input).toMatchTypeOf<
      | (initialInput & dObject & { ol1: 1 })
      | (initialInput & dObject2 & { ol2: 2 })
    >()
    expectTypeOf(p.spec.input).toMatchTypeOf<
      | (initialInput & dObject & { ol1: 1 })
      | (initialInput & dObject2 & { ol2: 2 })
    >()
  })

  test(`overload step input/output becomes union to step input/output`, () => {
    const p = b0.step(`a`).overload(o => o.discriminant(dName, dValue).step(`a`, { run: () => ({ olb: 1 as const }) }))
      .done()
    expectTypeOf(p.spec.steps).toEqualTypeOf<[{
      name: 'a'
      input: Simplify<dObject & initialInput>
      output: Simplify<dObject & { olb: 1 }>
      slots: undefined
    }]>()
  })
})
