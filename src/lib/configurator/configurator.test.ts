import { expect, test } from 'vitest'
import { Configurator } from './configurator.js'

test(`if input resolver returns null, reference to current is returned`, () => {
  const c = Configurator().input().inputResolver(() => null).return()
  const current = {}
  expect(c.inputResolver({ current, input: {} })).toBe(current)
})
