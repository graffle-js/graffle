import { expect, expectTypeOf, test } from 'vitest'
import { create } from '../../../client/client.js'

const g1 = create()

test(`given empty input, just returns current client`, () => {
  const g2 = g1.with({})
  expect(g2).toBe(g1)
  expectTypeOf(g2._.configuration).toMatchTypeOf(g1._.configuration)
})

test(`given undefined for a configuration, same as not given.`, () => {
  const g2 = g1.with({ check: undefined })
  expect(g2).toBe(g1)
  expectTypeOf(g2._.configuration).toMatchTypeOf(g1._.configuration)
})

test(`given one configuration input, updates just that configuration`, () => {
  const g2 = g1.with({ check: { preflight: false } })
  expect(g2).not.toBe(g1)
  expect(g2._.configuration.check.current.preflight).toBe(false)
  expectTypeOf(g2._.configuration[`check`][`current`][`preflight`]).toEqualTypeOf<false>()
  // Untouched configurations are passed through
  expect(g2._.configuration.output).toBe(g1._.configuration.output)
  expect(g2._.configuration.schema).toBe(g1._.configuration.schema)
  // Previous client is not mutated
  expect(g1._).not.toBe(g2._)
  expect(g1._.configuration.check.current.preflight).toBe(true)
})

// test(`can update preflight check`, () => {
//   const g1 = GraffleBare.create()
//   expectTypeOf(g1.gql).toBeString()
//   const g2 = g1.with({ checkPreflight: false })
//   expectTypeOf(g2.gql).toBeFunction()
// })

// test(`can deeply update output`, () => {
//   const g1 = Graffle.create()
//   expect(g1._.output).toMatchObject({
//     errors: { execution: `default`, other: `default` },
//     defaults: { errorChannel: `throw` },
//   })

//   const g2 = g1.with({ output: { defaults: { errorChannel: `return` } } })
//   expect(g2._.output).toMatchObject({
//     errors: { execution: `default`, other: `default` },
//     defaults: { errorChannel: `return` },
//   })

//   const g3 = g2.with({ output: { errors: { execution: `throw` } } })
//   expect(g3._.output).toMatchObject({
//     errors: { execution: `throw`, other: `default` },
//     defaults: { errorChannel: `return` },
//   })
// })

// test(`can update schema map`, () => {
//   const g1 = GraffleBare.create()
//   expect(g1._.schemaMap).toBeNull()

//   const g2 = g1.with({ schemaMap: Graffle.schemaMap })
//   expect(g2._.schemaMap).toBe(Graffle.schemaMap)
//   // Did not mutate
//   expect(g1._.schemaMap).toBeNull()

//   const different = {} as any
//   const g3 = g2.with({ schemaMap: different })
//   expect(g3._.schemaMap).toBe(different)
//   // Did not mutate
//   expect(g2._.schemaMap).toBe(Graffle.schemaMap)
// })
