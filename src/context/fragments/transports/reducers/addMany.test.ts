import { expectTypeOf } from 'vitest'
import { ATransport, BTransport } from '../../../../../tests/_/fixtures/transports.js'
import { test } from '../../../../../tests/_/helpers.js'
import { addMany } from './addMany.js'

test(`can add one transport`, ({ c0 }) => {
  ATransport.configurator.default
  const c2 = addMany(c0, [ATransport])
  expectTypeOf(c2.transports.configurations).toMatchTypeOf<{ readonly ATransport: {} }>()
  expectTypeOf(c2.transports.current).toEqualTypeOf<ATransport['name']>()
  expectTypeOf(c2.transports.registry).toMatchTypeOf<{ readonly ATransport: ATransport }>()
})

test(`can add two transports`, ({ c0 }) => {
  const c2 = addMany(c0, [ATransport, BTransport])
  expectTypeOf(c2.transports.configurations).toMatchTypeOf<{ readonly ATransport: {}; readonly BTransport: {} }>()
  expectTypeOf(c2.transports.current).toEqualTypeOf<ATransport['name']>()
  expectTypeOf(c2.transports.registry).toMatchTypeOf<
    { readonly ATransport: ATransport; readonly BTransport: BTransport }
  >()
})
