import { expectTypeOf, test } from 'vitest'
import type { initialInput } from '../_.test-helpers.js'
import { Pipeline } from '../_exports.js'
import { PipelineDefinition } from '../PipelineDef/__.js'
import type { Result } from '../Result.js'

const def = PipelineDefinition.create().input<initialInput>()

test(`returns input if no steps`, async () => {
  const d = def.type
  const p = Pipeline.create(d)
  const r = await PipelineDefinition.run(p)
  expectTypeOf(r).toEqualTypeOf<Result<initialInput>>()
})

test(`returns last step output if steps`, async () => {
  const d = def.step({ name: `a`, run: () => 2 as const }).type
  const p = Pipeline.create(d)
  const r = await PipelineDefinition.run(p)
  expectTypeOf(r).toEqualTypeOf<Result<2>>()
})

test(`can return a promise`, async () => {
  const d = def.step({ name: `a`, run: () => Promise.resolve(2 as const) }).type
  const p = Pipeline.create(d)
  const r = await PipelineDefinition.run(p)
  expectTypeOf(r).toEqualTypeOf<Result<2>>()
})
