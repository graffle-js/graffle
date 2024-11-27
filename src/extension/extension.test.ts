import { describe, expectTypeOf, test } from 'vitest'
import { create } from './extension.js'

describe(`constructor arguments`, () => {
  test(`normalizeConfig undefined -> constructor input forbidden`, () => {
    const Ex = create({
      name: `test`,
      create: () => {
        return {}
      },
    })
    Ex()
    // @ts-expect-error Arguments forbidden.
    Ex({})
  })
  test(`normalizeConfig with optional keys -> constructor input optional`, () => {
    const Ex = create({
      name: `test`,
      normalizeConfig: (_?: { a?: 1; b?: 2 }) => {
        return { a: 11, b: 22 }
      },
      create: () => {
        return {}
      },
    })
    Ex()
    Ex({})
    Ex({ a: 1 })
  })
  test(`normalizeConfig with required input (but optional keys) -> constructor input required`, () => {
    const Ex = create({
      name: `test`,
      normalizeConfig: (_: { a?: 1; b?: 2 }) => {
        return { a: 11, b: 22 }
      },
      create: () => {
        return {}
      },
    })
    // @ts-expect-error Arguments required.
    Ex()
    Ex({})
    Ex({ a: 1 })
  })
  test(`normalizeConfig with required keys -> constructor input required`, () => {
    const Ex = create({
      name: `test`,
      normalizeConfig: (_: { a: 1; b?: 2 }) => {
        return { a: 11, b: 22 }
      },
      create: () => {
        return {}
      },
    })
    // @ts-expect-error Arguments required.
    Ex()
    // @ts-expect-error Arguments required.
    Ex({})
    Ex({ a: 1 })
  })
})

test(`type hooks is empty by default`, () => {
  const Ex = create({
    name: `test`,
    create: () => {
      return {}
    },
  })
  expectTypeOf(Ex.info.typeHooks).toEqualTypeOf<{
    onRequestResult: []
    onRequestDocumentRootType: []
  }>()
  const ex = Ex()
  expectTypeOf(ex.typeHooks).toEqualTypeOf<{
    onRequestResult: []
    onRequestDocumentRootType: []
  }>()
})
