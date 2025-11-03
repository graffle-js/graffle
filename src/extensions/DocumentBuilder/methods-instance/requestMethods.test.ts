import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { DateScalar } from '#test/fixtures/scalars'
import { test as testBase } from '#test/helpers'
import { PossibleNoCustomScalars } from '#test/schema/possible/clientNoCustomScalars/$.js'
import { db } from '#test/schema/possible/db.js'
import { Ts } from '@wollybeard/kit'
import { describe, expect } from 'vitest'
import { TransportMemory } from '../../TransportMemory/TransportMemory.js'

const createPossible = (schema: GraphqlKit.Schema.Runtime.Nodes.Schema) =>
  PossibleNoCustomScalars
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
      Ts.Assert.exact.ofAs<string | null>().on(result)
    })
    test(`result with codec`, async ({ possible, possibleData: db }) => {
      const result = await possible.scalar(DateScalar).query.dateArg()
      expect(result).toEqual(db.date0)
      Ts.Assert.exact.ofAs<Date | null>().on(result)

      const result2 = await possible.scalar(DateScalar).query.dateObject1({ date1: true })
      expect(result2).toEqual({ date1: db.date1 })
      Ts.Assert.exact.ofAs<{ date1: Date | null } | null>().on(result2)
    })
    test(`argument without codec`, async ({ possible, possibleData: db }) => {
      await possible.query.dateArg({ $: { date: db.date0Encoded } })
    })
    test(`argument with codec`, async ({ possible, possibleData: db }) => {
      await possible.scalar(DateScalar).query.dateArg({ $: { date: db.date0 } })
    })
  })
})
