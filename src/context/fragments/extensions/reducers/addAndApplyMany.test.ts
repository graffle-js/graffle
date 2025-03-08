import { expect, expectTypeOf } from 'vitest'
import { ATransport } from '../../../../../tests/_/fixtures/transports.js'
import { test } from '../../../../../tests/_/helpers.js'
import { Extension } from '../../../../entrypoints/extension.js'
import { contextEmpty } from '../../../ContextEmpty.js'
import { addAndApplyMany } from './addAndApplyMany.js'

const cEmpty = contextEmpty
const eBuilder = Extension.create(`test`)

test(`on empty context, if extension has transport, it is added`, () => {
  const context = addAndApplyMany(cEmpty, [eBuilder.transport(ATransport).return()])
  expectTypeOf(context.transports.registry).toMatchTypeOf<{ ATransport: typeof ATransport }>()
  expectTypeOf(context.transports.current).toEqualTypeOf<'ATransport'>()
  // dprint-ignore
  expectTypeOf(context.transports.configurations.ATransport).toEqualTypeOf<typeof ATransport['configurator']['default']>()
})

test(`can add properties to context`, () => {
  const e = eBuilder.properties({ a: 1 } as const).return()
  const c = addAndApplyMany(cEmpty, [e])
  // todo: should just be { a: 1 } (no intersection)
  expectTypeOf(c.properties.static).toMatchTypeOf<{ a: 1 }>()
  expect(c.properties.static).toEqual({ a: 1 })
})
test(`can add multiple sets of properties to context, later ones override earlier ones`, () => {
  const e1 = Extension.create(`a`).properties({ a: 1, z: 9 } as const).return()
  const e2 = Extension.create(`b`).properties({ a: 2, b: 3 } as const).return()
  const c = addAndApplyMany(cEmpty, [e1, e2])
  expectTypeOf(c.properties.static).toMatchTypeOf<{ a: 2; b: 3; z: 9 }>()
  expect(c.properties.static).toEqual({ a: 2, b: 3, z: 9 })
})
