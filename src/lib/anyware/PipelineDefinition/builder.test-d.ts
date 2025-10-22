import { _ } from '#src/lib/prelude.js'
import { Ts } from '@wollybeard/kit'
import { describe, test } from 'vitest'
import { Configurator } from '../../configurator/configurator.js'
import type { initialInput } from '../_.test-helpers.js'
import { results, slots, stepA, stepB } from '../_.test-helpers.js'
import { PipelineDefinition } from './$.js'
import type { Config } from './Config.js'

const b0 = PipelineDefinition.create().input<initialInput>()
const b1 = PipelineDefinition.create().input<initialInput>().step(stepA)

test(`initial context`, () => {
  Ts.Assert.sub.ofAs<{ input: initialInput; steps: []; config: Config; overloads: [] }>().on(b0.type)
})

test(`first step definition`, () => {
  Ts.Assert.sub.ofAs<
    (name: string, definition: { run: (params: { input: initialInput; previous: undefined }) => any }) => any
  >().on(b0.step)
})

test(`can force an input type while inferring rest`, () => {
  const b1 = b0.step(`a`, { run: (_: { x: 9 }) => {} })
  Ts.Assert.exact.ofAs<'a'>().on(b1.type.steps[0]['name'])
  Ts.Assert.exact.ofAs<{ x: 9 }>().on(b1.type.steps[0]['input'])
})

test(`step can omit run, output defaults to object`, () => {
  const b1 = b0.step(`a`)
  Ts.Assert.exact.ofAs<{ readonly x: 1 }>().on(b1.type.steps[0]['input'])
  Ts.Assert.exact.ofAs<{}>().on(b1.type.steps[0]['output'])
  const b2 = b0.step(`a`).step(`b`)
  Ts.Assert.exact.ofAs<{}>().on(b2.type.steps[1]['input'])
  Ts.Assert.exact.ofAs<{}>().on(b2.type.steps[1]['output'])
})

test(`second step definition`, () => {
  const p1 = b0.step(`a`, { run: () => results.a })
  Ts.Assert.sub.ofAs<
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
  >().on(p1.step)
  Ts.Assert.sub.ofAs<
    {
      input: initialInput
      steps: [{ name: 'a'; slots: {} }]
      config: Config
    }
  >().on(p1.type)
})
test(`step input receives awaited return value from previous step `, () => {
  const b1 = b0.step(`a`, { run: () => Promise.resolve(results.a) })
  b1.step(`b`, {
    run: (input) => {
      Ts.Assert.exact.ofAs<results['a']>().on(input)
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
        Ts.Assert.exact.ofAs<Promise<'m'>>().on(slots.m())
        Ts.Assert.exact.ofAs<'n'>().on(slots.n())
        return results.a
      },
    })
  Ts.Assert.sub.ofAs<
    {
      input: initialInput
      config: Config
      steps: [{ name: 'a'; slots: slots; input: initialInput; output: results['a'] }]
    }
  >().on(p1.type)
})

describe(`overload`, () => {
  const dName = `_`
  type dName = typeof dName
  const dValue = 1
  type dValue = typeof dValue
  const discriminant = { name: dName, value: dValue } as const
  type discriminant = typeof discriminant
  type dObject = { [_ in dName]: dValue }

  // step

  // TODO: Better DX: Pipeline builder should not allow overloads until steps are defined.
  test(`overload without pipeline steps cannot overload any step`, () => {
    // @ts-expect-error
    b0.overload(o => o.create({ discriminant: discriminant }).step(`a`, { run: () => {} }))
    b0.overload(o => {
      type StepSignature = typeof o.create extends (args: any) => infer R ? R extends { step: infer S } ? S : never
        : never
      type _Test = Ts.Assert.Cases<
        Ts.Assert.sub.of<
          ((name: never, spec: _) => _),
          StepSignature
        >
      >
      return _
    })
  })

  test(`step added to overload context`, () => {
    const result = b0.step(`a`).step(stepB).overload(o =>
      o
        .create({ discriminant: discriminant })
        .step(`a`, { run: (input) => ({ ...input, ola: 1 as const }) })
    )
    Ts.Assert.sub.ofAs<
      [{
        discriminant: discriminant
        configurator: Configurator.States.Empty
        configurationMount: undefined
        steps: {
          a: {
            name: 'a'
            slots: {}
            input: initialInput & dObject
            output: initialInput & dObject & { ola: 1 }
          }
        }
      }]
    >().on(result.type.overloads)
  })

  test(`can extend input type`, () => {
    const result = b0.step(`a`).overload(o =>
      o.create({ discriminant: discriminant }).stepWithExtendedInput<{ ex: 1 }>()(`a`, {
        run: (input) => {
          Ts.Assert.exact.ofAs<initialInput & dObject & { ex: 1 }>().on(input)
        },
      })
    )
    Ts.Assert.sub.ofAs<
      [{
        discriminant: discriminant
        configurationMount: undefined
        steps: {
          a: {
            name: 'a'
            slots: {}
            input: initialInput & dObject & { ex: 1 }
            output: void
          }
        }
      }]
    >().on(result.type.overloads)
  })

  // Overload Step Slots

  test(`if step has no slots, parameter undefined & context undefined`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: discriminant }).step(`a`, {
        run: (_, slots) => {
          Ts.Assert.exact.ofAs<undefined>().on(slots)
        },
      })
    )
    Ts.Assert.exact.ofAs<{}>().on(b1o.type.overloads[0]['steps']['a']['slots'])
  })

  test(`slots available to run and added to overload context`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: discriminant }).step(`a`, {
        slots: { m: slots.m },
        run: (_, slots) => {
          Ts.Assert.exact.ofAs<{ m: slots['m'] }>().on(slots)
        },
      })
    )
    Ts.Assert.sub.ofAs<
      [{
        steps: {
          a: {
            name: 'a'
            slots: { m: slots['m'] }
          }
        }
      }]
    >().on(b1o.type.overloads)
  })

  // Overload Step Run Parameters

  test(`parameter steps, first key, run key, parameter input, equals previous step output`, () => {
    b1.step(`b`).overload(o =>
      o
        .create({ discriminant: discriminant })
        .step(`b`, {
          run: (input) => {
            Ts.Assert.exact.ofAs<results['a'] & dObject>().on(input)
          },
        })
    )
  })
})
