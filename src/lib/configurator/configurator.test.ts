import { expect, test } from 'vitest'
import { Configurator } from './configurator.js'

test(`if input resolver returns null, reference to current is returned`, () => {
  const c = Configurator().input().inputResolver(() => null).return()
  const current = {}
  expect(c.inputResolver({ current, input: {} })).toBe(current)
})

test(`standard input resolver filters out undefined values from input`, () => {
  const c = Configurator().input().default({ a: 1, b: 2 }).return()
  const result = c.inputResolver({
    current: { a: 1, b: 2 },
    input: { a: undefined, b: 3, c: undefined },
  })
  expect(result).toEqual({ a: 1, b: 3 })
})
