import { expectTypeOf, test } from 'vitest'
import { PipelineDefinition } from '../_.js'
import type { results } from '../__.test-helpers.js'
import { type initialInput, slots, stepA } from '../__.test-helpers.js'
import type { Config } from '../PipelineDef/Config.js'
import type { Step } from '../Step.js'
import type { StepRunner } from '../StepRunner.js'
import { Pipeline } from './Pipeline.js'

const b0 = PipelineDefinition.create().input<initialInput>()

test(`returns a pipeline`, () => {
  const p0 = b0.type
  const exP0 = Pipeline.create(p0)
  expectTypeOf<typeof exP0>().toMatchTypeOf<
    { config: Config; steps: Step[]; input: initialInput; output: initialInput }
  >()
  const p1 = b0.step(stepA).type
  const exP1 = Pipeline.create(p1)
  expectTypeOf<typeof exP1>().toMatchTypeOf<
    { config: Config; steps: Step[]; input: initialInput; output: results['a'] }
  >()
})

// Overloads Merging Into Pipeline

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

test(`overload input extensions become a pipeline union input`, () => {
  const pDef = b0
    .step(`a`)
    .overload(o => o.create({ discriminant: d }).config<{ ol1: 1 }>())
    .overload(o => o.create({ discriminant: d2 }).config<{ ol2: 2 }>())
    .type
  const p = Pipeline.create(pDef)
  expectTypeOf(p.input).toMatchTypeOf<
    | (initialInput & dObject & { ol1: 1 })
    | (initialInput & dObject2 & { ol2: 2 })
  >()
})

test(`overload step input/output becomes union to step input/output`, () => {
  const pDef =
    b0.step(`a`).overload(o =>
      o.create({ discriminant: [dName, dValue] }).step(`a`, { run: () => ({ olb: 1 as const }) })
    )
      .type
  const p = Pipeline.create(pDef)
  expectTypeOf(p.steps).toMatchTypeOf<[{
    name: 'a'
    input: dObject & initialInput
    output: dObject & { olb: 1 }
    slots: {}
    run: StepRunner<any, any, any>
  }]>()
})
test(`overloads steps slots all merge onto respective pipeline step (no unions)`, () => {
  const pDef = b0
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
    .type
  const p = Pipeline.create(pDef)
  expectTypeOf(p.steps).toMatchTypeOf<[
    {
      name: 'a'
      slots: { m: slots['m']; n: slots['n'] }
    },
  ]>()
})
