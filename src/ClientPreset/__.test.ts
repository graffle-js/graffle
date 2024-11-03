import { expect, test } from 'vitest'
import { createExtension } from '../entrypoints/extensionkit.js'
import { Introspection } from '../extensions/Introspection/Introspection.js'
import { ClientPreset } from './__.js'

test(`Preset extension is used on constructed client`, () => {
  const create = ClientPreset.create({ name: `test`, extensions: [Introspection] })
  const graffle = create({ introspection: { options: { descriptions: true } } })
  expect(typeof graffle.introspect).toBe(`function`)
})

test(`If extension required input then client constructor input property is NOT optional`, () => {
  const Ex = createExtension({
    name: `test`,
    normalizeConfig: (_: { a: 1; b?: 2 }) => {
      return { a: 11, b: 22 }
    },
    create: () => {
      return {}
    },
  })
  const create = ClientPreset.create({ name: `test`, extensions: [Ex] })
  // @ts-expect-error Arguments required.
  create()
  // @ts-expect-error Arguments required.
  create({})
  create({ test: { a: 1 } })
})

test(`If extension has no required input then client constructor input property IS optional`, () => {
  const Ex = createExtension({
    name: `test`,
    normalizeConfig: (_?: { a?: 1; b?: 2 }) => {
      return { a: 11, b: 22 }
    },
    create: () => {
      return {}
    },
  })
  const create = ClientPreset.create({ name: `test`, extensions: [Ex] })
  // OK. Arguments NOT required.
  create()
  create({})
})
