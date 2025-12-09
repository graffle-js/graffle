import { Assert } from '@wollybeard/kit'
import { describe, expect, it, test } from 'vitest'
import { create } from './select.js'

describe(`select`, () => {
  const select = create(`possible`)

  it(`returns the input for any method name`, () => {
    const s = select as any
    expect(s.anything(1)).toEqual(1)
  })

  it(`has type safe methods`, () => {
    Assert.exact.ofAs<{ int: true }>().on(select.Bar({ int: true }))
    // Errors
    // @ts-expect-error Excess property check.
    Assert.exact.ofAs<{ int: true }>().on(select.Bar({ int: true, int2: true }))
  })
})

describe(`create`, () => {
  const select = create(`queryOnly`)
  test(`does not have root types if not in schema`, () => {
    // fine
    select.Query
    // @ts-expect-error no mutation in schema
    select.Mutation
    // @ts-expect-error no mutation in schema
    select.Subscription
  })
})
