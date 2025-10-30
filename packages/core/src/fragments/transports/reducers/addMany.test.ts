import { ATransport, BTransport } from '@test/fixtures/transports'
import { test } from '@test/fixtures/helpers'
import { Ts } from '@wollybeard/kit'
import { addMany } from './addMany.js'

test(`can add one transport`, ({ c0 }) => {
  ATransport.configurator.default
  const c2 = addMany(c0, [ATransport])
  Ts.Assert.equiv.ofAs<{ readonly ATransport: {} }>().on(c2.transports.configurations)
  Ts.Assert.exact.ofAs<ATransport['name']>().on(c2.transports.current)
  Ts.Assert.equiv.ofAs<{ readonly ATransport: ATransport }>().on(c2.transports.registry)
})

test(`can add two transports`, ({ c0 }) => {
  const c2 = addMany(c0, [ATransport, BTransport])
  Ts.Assert.equiv.ofAs<{ readonly ATransport: {}; readonly BTransport: {} }>().on(c2.transports.configurations)
  Ts.Assert.exact.ofAs<ATransport['name']>().on(c2.transports.current)
  Ts.Assert.equiv.ofAs<
    { readonly ATransport: ATransport; readonly BTransport: BTransport }
  >().on(c2.transports.registry)
})
