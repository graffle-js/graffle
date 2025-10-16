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
  Ts.Test.sub.is<{ input: initialInput; steps: []; config: Config; overloads: [] }>()(b0.type)
})

test(`first step definition`, () => {
  Ts.Test.sub.is<
    (name: string, definition: { run: (params: { input: initialInput; previous: undefined }) => any }) => any
  >()(b0.step)
})

test(`can force an input type while inferring rest`, () => {
  const b1 = b0.step(`a`, { run: (_: { x: 9 }) => {} })
  Ts.Test.exact.is<'a'>()(b1.type.steps[0]['name'])
  Ts.Test.exact.is<{ x: 9 }>()(b1.type.steps[0]['input'])
})

test(`step can omit run, output defaults to object`, () => {
  const b1 = b0.step(`a`)
  Ts.Test.exact.is<{ readonly x: 1 }>()(b1.type.steps[0]['input'])
  Ts.Test.exact.is<{}>()(b1.type.steps[0]['output'])
  const b2 = b0.step(`a`).step(`b`)
  Ts.Test.exact.is<{}>()(b2.type.steps[1]['input'])
  Ts.Test.exact.is<{}>()(b2.type.steps[1]['output'])
})

test(`second step definition`, () => {
  const p1 = b0.step(`a`, { run: () => results.a })
  Ts.Test.sub.is<
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
  >()(p1.step)
  Ts.Test.sub.is<
    {
      input: initialInput
      steps: [{ name: 'a'; slots: {} }]
      config: Config
    }
  >()(p1.type)
})
test(`step input receives awaited return value from previous step `, () => {
  const b1 = b0.step(`a`, { run: () => Promise.resolve(results.a) })
  b1.step(`b`, {
    run: (input) => {
      Ts.Test.exact.is<results['a']>()(input)
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
        Ts.Test.exact.is<Promise<'m'>>()(slots.m())
        Ts.Test.exact.is<'n'>()(slots.n())
        return results.a
      },
    })
  Ts.Test.sub.is<
    {
      input: initialInput
      config: Config
      steps: [{ name: 'a'; slots: slots; input: initialInput; output: results['a'] }]
    }
  >()(p1.type)
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
      type _Test = Ts.Test.Cases<
        Ts.Test.sub.is<
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
    Ts.Test.sub.is<
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
    >()(result.type.overloads)
  })

  test(`can extend input type`, () => {
    const result = b0.step(`a`).overload(o =>
      o.create({ discriminant: discriminant }).stepWithExtendedInput<{ ex: 1 }>()(`a`, {
        run: (input) => {
          Ts.Test.exact.is<initialInput & dObject & { ex: 1 }>()(input)
        },
      })
    )
    Ts.Test.sub.is<
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
    >()(result.type.overloads)
  })

  // Overload Step Slots

  test(`if step has no slots, parameter undefined & context undefined`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: discriminant }).step(`a`, {
        run: (_, slots) => {
          Ts.Test.exact.is<undefined>()(slots)
        },
      })
    )
    Ts.Test.exact.is<{}>()(b1o.type.overloads[0]['steps']['a']['slots'])
  })

  test(`slots available to run and added to overload context`, () => {
    const b1o = b1.overload(o =>
      o.create({ discriminant: discriminant }).step(`a`, {
        slots: { m: slots.m },
        run: (_, slots) => {
          Ts.Test.exact.is<{ m: slots['m'] }>()(slots)
        },
      })
    )
    Ts.Test.sub.is<
      [{
        steps: {
          a: {
            name: 'a'
            slots: { m: slots['m'] }
          }
        }
      }]
    >()(b1o.type.overloads)
  })

  // Overload Step Run Parameters

  test(`parameter steps, first key, run key, parameter input, equals previous step output`, () => {
    b1.step(`b`).overload(o =>
      o
        .create({ discriminant: discriminant })
        .step(`b`, {
          run: (input) => {
            Ts.Test.exact.is<results['a'] & dObject>()(input)
          },
        })
    )
  })
})
