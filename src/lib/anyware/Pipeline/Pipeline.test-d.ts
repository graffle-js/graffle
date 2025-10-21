import { Ts } from '@wollybeard/kit'
import { test } from 'vitest'
import { PipelineDefinition } from '../$$.js'
import type { results } from '../_.test-helpers.js'
import { type initialInput, slots, stepA } from '../_.test-helpers.js'
import type { Config } from '../PipelineDefinition/Config.js'
import type { StepRunner } from '../StepRunner.js'
import { Pipeline } from './Pipeline.js'

const b0 = PipelineDefinition.create().input<initialInput>()

test(`returns a pipeline`, () => {
  const p0 = b0.type
  const exP0 = Pipeline.create(p0)
  Ts.Assert.sub.ofAs<
    { config: Config; steps: readonly []; input: initialInput; output: initialInput }
  >()(exP0)
  const p1 = b0.step(stepA).type
  const exP1 = Pipeline.create(p1)
  Ts.Assert.sub.ofAs<
    { config: Config; steps: readonly [{ name: 'a' }]; input: initialInput; output: results['a'] }
  >()(exP1)
})

// Overloads Merging Into Pipeline

const dName = `_`
type dName = typeof dName
const dValue = 1
type dValue = typeof dValue
const d1 = { name: dName, value: dValue } as const
type d1 = typeof d1
type dObject = { [_ in dName]: dValue }
const dValue2 = 2
type dValue2 = typeof dValue2
const d2 = { name: dName, value: dValue2 } as const
type d2 = typeof d2
type dObject2 = { [_ in dName]: dValue2 }

test(`overload input extensions become a pipeline union input`, () => {
  const pDef = b0
    .step(`a`)
    .overload(o => o.create({ discriminant: d1 }).configurator($ => $.input<{ ol1: 1 }>()))
    .overload(o => o.create({ discriminant: d2 }).configurator($ => $.input<{ ol2: 2 }>()))
    .type
  const p = Pipeline.create(pDef)
  Ts.Assert.sub.ofAs<
    | (initialInput & dObject & { ol1: 1 })
    | (initialInput & dObject2 & { ol2: 2 })
  >()(p.input)
})

test(`overload step input/output becomes union to step input/output`, () => {
  const pDef =
    b0.step(`a`).overload(o => o.create({ discriminant: d1 }).step(`a`, { run: () => ({ olb: 1 as const }) }))
      .type
  const p = Pipeline.create(pDef)
  Ts.Assert.sub.ofAs<
    readonly [{
      name: 'a'
      input: dObject & initialInput
      output: dObject & { olb: 1 }
      slots: {}
      run: StepRunner<any, any, any>
    }]
  >()(p.steps)
})
test(`overloads steps slots all merge onto respective pipeline step (no unions)`, () => {
  const pDef = b0
    .step(`a`)
    .overload(o =>
      o.create({ discriminant: d1 }).step(`a`, {
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
  Ts.Assert.sub.ofAs<
    readonly [{
      name: 'a'
      slots: { m: slots['m']; n: slots['n'] }
    }]
  >()(p.steps)
})
