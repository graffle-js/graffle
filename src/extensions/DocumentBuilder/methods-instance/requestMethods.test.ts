import type { Grafaid } from '#lib/grafaid'
import { DateScalar } from '#test/fixtures/scalars'
import { test as testBase } from '#test/helpers'
import { db } from '#test/schema/possible/db'
import { describe, expect, expectTypeOf } from 'vitest'
import { TransportMemory } from '../../TransportMemory/TransportMemory.js'
import { Possible } from '../__tests__/fixtures/possible/$.js'

const createPossible = (schema: Grafaid.Schema.Schema) =>
  Possible
    .create({ check: { preflight: false } })
    .use(TransportMemory)
    .transport(`memory`, { schema })

const test = testBase.extend<{
  possibleData: typeof db
  possible: ReturnType<typeof createPossible>
}>({
  possibleData: db,
  possible: async ({ schemas }, use) => {
    const possible = createPossible(schemas.possible)
    await use(possible)
  },
})

describe(`query batch`, () => {
  test(`success`, async ({ possible, possibleData: db }) => {
    expect(await possible.query.$batch({ id: true })).toMatchObject({ id: db.id })
  })
  test(`error`, async ({ possible, possibleData: db }) => {
    await expect(possible.query.$batch({ error: true })).rejects.toMatchObject(db.errorAggregateSubset)
  })
})

describe(`query root field`, () => {
  test(`scalar`, async ({ possible, possibleData: db }) => {
    expect(await possible.query.id()).toEqual(db.id1)
  })
  test(`argument`, async ({ possible }) => {
    await expect(possible.query.stringWithArgs({ $: { id: `x` } })).resolves.toEqual(`{"id":"x"}`)
  })
  test(`object`, async ({ possible, possibleData: db }) => {
    await expect(possible.query.object({ id: true })).resolves.toEqual({ id: db.id })
  })
  test(`object with arguments`, async ({ possible }) => {
    await expect(possible.query.objectWithArgs({ $: { id: `x` }, id: true })).resolves.toEqual({ id: `x` })
  })
  test(`union found`, async ({ possible, possibleData: db }) => {
    await expect(possible.query.unionFooBar({ ___on_Foo: { id: true } })).resolves.toEqual({ id: db.id })
  })
  test(`union not found`, async ({ possible }) => {
    await expect(possible.query.unionFooBar({ ___on_Bar: { int: true } })).resolves.toEqual({})
  })
  test(`interface fields`, async ({ possible, possibleData: db }) => {
    await expect(possible.query.interface({ id: true })).resolves.toEqual({ id: db.id })
  })
  test(`interface instance found`, async ({ possible, possibleData: db }) => {
    const result = await possible.query.interface({ ___on_Object1ImplementingInterface: { int: true } })
    expect(result).toEqual({ int: db.int })
  })
  test(`interface instance not found`, async ({ possible }) => {
    const result = await possible.query.interface({ ___on_Object2ImplementingInterface: { boolean: true } })
    expect(result).toEqual({})
  })
  describe(`custom scalar`, () => {
    test(`result without codec`, async ({ possible, possibleData: db }) => {
      const result = await possible.query.dateArg()
      expect(result).toEqual(db.date0Encoded)
      expectTypeOf(result).toEqualTypeOf<string | null>()
    })
    test(`result with codec`, async ({ possible, possibleData: db }) => {
      const result = await possible.scalar(DateScalar).query.dateArg()
      expect(result).toEqual(db.date0)
      expectTypeOf(result).toEqualTypeOf<Date | null>()

      const result2 = await possible.scalar(DateScalar).query.dateObject1({ date1: true })
      expect(result2).toEqual({ date1: db.date1 })
      expectTypeOf(result2).toEqualTypeOf<{ date1: Date | null } | null>()
    })
    test(`argument without codec`, async ({ possible, possibleData: db }) => {
      await possible.query.dateArg({ $: { date: db.date0Encoded } })
    })
    test(`argument with codec`, async ({ possible, possibleData: db }) => {
      await possible.scalar(DateScalar).query.dateArg({ $: { date: db.date0 } })
    })
  })
})
