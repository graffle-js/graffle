import { type ContextEmpty, contextEmpty } from '#src/context/ContextEmpty.js'
import { Assert } from '@wollybeard/kit'
import { expect, test } from 'vitest'
import { create } from './client.js'

test(`created WITHOUT configuration uses the default configuration`, () => {
  const g = create()
  expect(g._).toBe(contextEmpty)
  expect(g._.configuration.check.current.preflight).toBe(true)
  // Trying to type-test the entire context crashes the TS LSP.
  // We check just one property and assume the rest are ok too.
  Assert.equiv.ofAs<ContextEmpty['configuration']>().on(g._.configuration)
  Assert.exact.ofAs<true>().on(g._.configuration.check.current.preflight)
  // TODO: investigate why we cannot use the strict "toEqualTypeOf". According to the following it should work. Make an issue on Vitest?
  // let a = null as any as ContextEmpty['configurationIndex']
  // let b = g._.configurationIndex
  // a = b
  // b = a
})

test(`created WITH configuration changes the configuration`, () => {
  const g = create({ check: { preflight: false } })
  expect(g._.configuration.check.current.preflight).toBe(false)
  Assert.exact.ofAs<false>().on(g._.configuration.check.current.preflight)
  // Did NOT mutate the original context
  expect(g._).not.toBe(contextEmpty)
  expect(contextEmpty.configuration.check.current.preflight).toBe(true)
})

test(`excess prooperties are statically caight, throw error`, () => {
  expect(() =>
    create({
      // @ts-expect-error
      bad: true,
      output: {},
    })
  ).toThrowErrorMatchingInlineSnapshot(`[TypeError: Cannot read properties of undefined (reading 'configurator')]`)
})
