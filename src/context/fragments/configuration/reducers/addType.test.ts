import { Ts } from '@wollybeard/kit'
import * as Configurator from '@wollybeard/kit/configurator'
import { expect, test } from 'vitest'
import { contextEmpty } from '../../../$$.js'
import { addType } from './addType.js'

const nameA = `a`

test(`registers a configurator into the configuration`, () => {
  // Setup
  const configurator = Configurator().input<{ a?: number }>().default({ a: 1 }).return()
  const context = addType(contextEmpty, nameA, configurator, {})
  const ns = context.configuration[nameA]
  // Assertions: Value Level
  expect(ns).toEqual({
    current: configurator.default,
    configurator,
  })
  // Assertions: Type Level
  const nsCurrent: Ts.Simplify.Top<typeof ns.current> = ns.current
  Ts.Assert.exact.ofAs<typeof configurator.default>().on(nsCurrent)
  Ts.Assert.exact.ofAs<typeof configurator>().on(ns.configurator)
})

test(`if initial input given, then configurator is applied against it with defaults`, () => {
  // Setup
  const configurator = Configurator().input<{ a?: 1 | 2; b?: 3 | 4 }>().default({ a: 1, b: 3 }).return()
  const context = addType(contextEmpty, nameA, configurator, { a: 2 })
  const ns = context.configuration[nameA]
  // Assertions: Value Level
  expect(ns).toEqual({
    current: { a: 2, b: 3 },
    configurator,
  })
  // Assertions: Type Level
  const nsCurrent: Ts.Simplify.Top<typeof ns.current> = ns.current
  Ts.Assert.exact.ofAs<{ readonly a: 2; readonly b: 3 }>().on(nsCurrent)
  Ts.Assert.exact.ofAs<typeof configurator>().on(ns.configurator)
})
