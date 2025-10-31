import { ATransport, BTransport } from '@test/fixtures/transports'
import { test as t } from '@test/fixtures/helpers'
import { Ts } from '@wollybeard/kit'
import type { ContextEmpty } from '../../../ContextEmpty.js'
import { type AddMany, addMany } from './addMany.js'
import { setCurrentAndOptionallyConfigure } from './setCurrentAndOptionallyConfigure.js'

const test = t.extend<{ c2: AddMany<ContextEmpty, [ATransport, BTransport]> }>({
  c2: async ({ c0 }, use) => {
    const c2 = addMany(c0, [ATransport, BTransport])
    Ts.Assert.equiv.ofAs<ATransport['name']>().on(c2.transports.current)
    await use(c2)
  },
})

test(`can set current and configure it`, ({ c2 }) => {
  const c3 = setCurrentAndOptionallyConfigure(c2, BTransport.name, { b: `` })
  Ts.Assert.equiv.ofAs<BTransport['name']>().on(c3.transports.current)
  Ts.Assert.sub.ofAs<{ readonly BTransport: { b: string } }>().on(c3.transports.configurations)
})

test(`can set current and NOT configure it`, ({ c2 }) => {
  const c3 = setCurrentAndOptionallyConfigure(c2, BTransport.name)
  Ts.Assert.equiv.ofAs<BTransport['name']>().on(c3.transports.current)
  Ts.Assert.exact.ofAs<{}>().on(c3.transports.configurations.BTransport)
})
