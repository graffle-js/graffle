import type { Simplify } from 'type-fest'
import { expect, expectTypeOf, test } from 'vitest'
import { Configurator } from '../../../../lib/configurator/configurator.js'
import { contextEmpty } from '../../../_exports.js'
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
  const nsCurrent: Simplify<typeof ns.current> = ns.current
  expectTypeOf(nsCurrent).toEqualTypeOf<typeof configurator.default>()
  expectTypeOf(ns.configurator).toEqualTypeOf<typeof configurator>()
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
  const nsCurrent: Simplify<typeof ns.current> = ns.current
  expectTypeOf(nsCurrent).toEqualTypeOf<{ readonly a: 2; readonly b: 3 }>()
  expectTypeOf(ns.configurator).toEqualTypeOf<typeof configurator>()
})
