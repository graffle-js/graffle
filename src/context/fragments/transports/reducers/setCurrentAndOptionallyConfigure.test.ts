import { expectTypeOf } from 'vitest'
import { ATransport, BTransport } from '../../../../../tests/_/fixtures/transports.js'
import { test as t } from '../../../../../tests/_/helpers.js'
import type { ContextEmpty } from '../../../ContextEmpty.js'
import { type AddMany, addMany } from './addMany.js'
import { setCurrentAndOptionallyConfigure } from './setCurrentAndOptionallyConfigure.js'

const test = t.extend<{ c2: AddMany<ContextEmpty, [ATransport, BTransport]> }>({
  c2: async ({ c0 }, use) => {
    const c2 = addMany(c0, [ATransport, BTransport])
    expectTypeOf(c2.transports.current).toMatchTypeOf<ATransport['name']>()
    await use(c2)
  },
})

test(`can set current and configure it`, ({ c2 }) => {
  const c3 = setCurrentAndOptionallyConfigure(c2, BTransport.name, { b: `` })
  expectTypeOf(c3.transports.current).toMatchTypeOf<BTransport['name']>()
  expectTypeOf(c3.transports.configurations).toMatchTypeOf<{ readonly BTransport: { b: string } }>()
})

test(`can set current and NOT configure it`, ({ c2 }) => {
  const c3 = setCurrentAndOptionallyConfigure(c2, BTransport.name)
  expectTypeOf(c3.transports.current).toMatchTypeOf<BTransport['name']>()
  expectTypeOf(c3.transports.configurations.BTransport).toEqualTypeOf<{}>()
})
