import { expect, expectTypeOf, test } from 'vitest'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { GraffleBare } from '../../entrypoints/presets/bare.js'

test(`can update preflight check`, () => {
  const g1 = GraffleBare.create()
  expectTypeOf(g1.gql).toBeString()
  const g2 = g1.with({ checkPreflight: false })
  expectTypeOf(g2.gql).toBeFunction()
})

test(`can deeply update output`, () => {
  const g1 = Graffle.create()
  expect(g1._.output).toMatchObject({
    errors: { execution: `default`, other: `default` },
    defaults: { errorChannel: `throw` },
  })

  const g2 = g1.with({ output: { defaults: { errorChannel: `return` } } })
  expect(g2._.output).toMatchObject({
    errors: { execution: `default`, other: `default` },
    defaults: { errorChannel: `return` },
  })

  const g3 = g2.with({ output: { errors: { execution: `throw` } } })
  expect(g3._.output).toMatchObject({
    errors: { execution: `throw`, other: `default` },
    defaults: { errorChannel: `return` },
  })
})

test(`can update schema map`, () => {
  const g1 = GraffleBare.create()
  expect(g1._.schemaMap).toBeNull()

  const g2 = g1.with({ schemaMap: Graffle.schemaMap })
  expect(g2._.schemaMap).toBe(Graffle.schemaMap)
  // Did not mutate
  expect(g1._.schemaMap).toBeNull()

  const different = {} as any
  const g3 = g2.with({ schemaMap: different })
  expect(g3._.schemaMap).toBe(different)
  // Did not mutate
  expect(g2._.schemaMap).toBe(Graffle.schemaMap)
})
