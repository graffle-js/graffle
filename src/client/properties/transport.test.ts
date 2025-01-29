import { expect, expectTypeOf, test } from 'vitest'
import { ATransport, ATransportBuilder } from '../../../tests/_/fixtures/transports.js'
import { create } from '../client.js'

const g1 = create()

test(`can add a transport via itself or its builder`, () => {
  const g2a = g1.transport(ATransportBuilder)
  expectTypeOf(g2a._.transports).toMatchTypeOf<{
    configurations: {
      ATransport: ATransport['configurator']['default']
    }
    registry: {
      ATransport: ATransport
    }
    current: ATransport['name']
  }>()
  expect(g2a._.transports).toEqual({
    configurations: {
      ATransport: ATransport[`configurator`][`default`],
    },
    registry: {
      ATransport: ATransport,
    },
    current: ATransport[`name`],
  })
  const g2b = g1.transport(ATransport)
  expectTypeOf(g2a._.transports).toEqualTypeOf(g2b._.transports)
  expect(g2a._.transports).toEqual(g2b._.transports)
})
