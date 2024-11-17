import type { Simplify } from 'type-fest'
import { describe, expectTypeOf, test } from 'vitest'
import { _ } from '../../prelude.js'
import type { initialInput } from '../__.test-helpers.js'
import { results, slots, stepA, stepB } from '../__.test-helpers.js'
import type { ExecutableStep } from '../ExecutableStep.js'
import { Pipeline } from './__.js'
import type { Config } from './Config.js'
import type { Result } from './Result.js'

const b0 = Pipeline.create<initialInput>()
const b1 = Pipeline.create<initialInput>().step(stepA)

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
      steps: [{ name: 'a'; slots: {} }]
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
  const d = [dName, dValue] as const
  type d = typeof d
  type dObject = { [_ in dName]: dValue }
  const dValue2 = 2
  type dValue2 = typeof dValue2
  const d2 = [dName, dValue2] as const
  type d2 = typeof d2
  type dObject2 = { [_ in dName]: dValue2 }

  // constructor

  describe(`constructor`, () => {
    test(`overload constructor without discriminant not allowed`, () => {
      // @ts-expect-error
      b0.overload(o => o.create())
    })
    test(`overload constructor with discriminant`, () => {
      expectTypeOf(b0.overload(o => o.create({ discriminant: d })).context.overloads).toMatchTypeOf<
        [{ discriminant: d; input: {}; steps: {} }]
      >()
    })
  })

  // overload extends input

  test(`overload constructor with input and discriminant`, () => {
    expectTypeOf(b0.overload(o => o.create({ discriminant: d }).extendInput<{ x: 1 }>()).context.overloads)
      .toMatchTypeOf<[{ discriminant: d; input: { x: 1 }; steps: {} }]>()
  })

  // step

  // TODO: Better DX: Pipeline builder should not allow overloads until steps are defined.
  test(`overload without pipeline steps cannot overload any step`, () => {
    // @ts-expect-error
    b0.overload(o => o.create({ discriminant: d }).step(`a`, { run: () => {} }))
    b0.overload(o => {
      expectTypeOf(o.create({ discriminant: d }).step).toMatchTypeOf<((name: never, spec: _) => _)>()
      return _
    })
  })

  test(`step added to overload context`, () => {
    expectTypeOf(
      b0.step(`a`).step(stepB).overload(o =>
        o
          .create({ discriminant: d })
          .step(`a`, { run: (input) => ({ ...input, ola: 1 as const }) })
      ).context.overloads,
    )
      .toMatchTypeOf<[
        {
          discriminant: d
          input: {}
          steps: {
            a: {
              name: 'a'
              slots: {}
              input: initialInput & dObject
              output: initialInput & dObject & { ola: 1 }
            }
          }
        },
      ]>()
  })

  test(`can extend input type`, () => {
    expectTypeOf(
      b0.step(`a`).overload(o =>
        o.create({ discriminant: d }).stepWithExtendedInput<{ ex: 1 }>()(`a`, {
          run: (input) => {
            expectTypeOf(input).toEqualTypeOf<initialInput & dObject & { ex: 1 }>()
          },
        })
      ).context.overloads,
    )
      .toMatchTypeOf<[
        {
          discriminant: d
          input: {}
          steps: {
            a: {
              name: 'a'
              slots: {}
              input: initialInput & dObject & { ex: 1 }
              output: void // eslint-disable-line
            }
          }
        },
      ]>()
  })

  // Overload Step Slots

  test(`if step has no slots, parameter undefined & context undefined`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: d }).step(`a`, {
        run: (_, slots) => {
          expectTypeOf(slots).toEqualTypeOf(undefined)
        },
      })
    )
    expectTypeOf(b1o.context.overloads[0].steps.a.slots).toEqualTypeOf<{}>()
  })

  test(`slots available to run and added to overload context`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: d }).step(`a`, {
        slots: { m: slots.m },
        run: (_, slots) => {
          expectTypeOf(slots).toEqualTypeOf<{ m: slots['m'] }>()
        },
      })
    )
    expectTypeOf(b1o.context.overloads).toMatchTypeOf<[{
      steps: {
        a: {
          name: 'a'
          slots: { m: slots['m'] }
        }
      }
    }]>()
  })

  // Overload Step Run Parameters

  test(`parameter steps, first key, run key, parameter input, equals previous step output`, () => {
    b1.step(`b`).overload(o =>
      o
        .create({ discriminant: d })
        .step(`b`, {
          run: (input) => {
            expectTypeOf(input).toEqualTypeOf<results['a'] & dObject>()
          },
        })
    )
  })

  // Overloads Merging Into Pipeline

  test(`overload input extensions become a pipeline union input`, () => {
    const p = b0
      .step(`a`)
      .overload(o => o.create({ discriminant: d }).extendInput<{ ol1: 1 }>())
      .overload(o => o.create({ discriminant: d2 }).extendInput<{ ol2: 2 }>())
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
    const p = b0.step(`a`).overload(o =>
      o.create({ discriminant: [dName, dValue] }).step(`a`, { run: () => ({ olb: 1 as const }) })
    )
      .done()
    expectTypeOf(p.spec.steps).toEqualTypeOf<[{
      name: 'a'
      input: Simplify<dObject & initialInput>
      output: Simplify<dObject & { olb: 1 }>
      slots: {}
    }]>()
  })
  test(`overloads steps slots all merge onto respective pipeline step (no unions)`, () => {
    const p = b0
      .step(`a`)
      .overload(o =>
        o.create({ discriminant: d }).step(`a`, {
          slots: { m: slots.m },
          run: () => {},
        })
      )
      .overload(o =>
        o.create({ discriminant: d2 }).step(`a`, {
          slots: { n: slots.n },
          run: () => {},
        })
      )
      .done()
    expectTypeOf(p.spec.steps).toMatchTypeOf<[
      {
        name: 'a'
        slots: { m: slots['m']; n: slots['n'] }
      },
    ]>()
  })
})
