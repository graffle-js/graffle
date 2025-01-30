import { describe, expect, expectTypeOf, test } from 'vitest'
import { ATransport, ATransportBuilder, BTransport } from '../../../tests/_/fixtures/transports.js'
import { create } from '../client.js'
import { ContextTransports } from './transport.js'

const g0 = create()
const g1 = create().transport(ATransport)

describe(`starting state`, () => {
  test(`no transports registered`, () => {
    expectTypeOf(g0._.transports).toMatchTypeOf<ContextTransports.States.Empty>()
    expect(g0._.transports).toBe(ContextTransports.States.empty)
  })

  test(`no transport method overloads b/c no transports registered`, () => {
    // @ts-expect-error
    g1.transport(`ATransport`)
    // @ts-expect-error
    g1.transport(`ATransport`, {})
    // @ts-expect-error
    g1.transport({})
  })
})

describe(`registering first transport`, () => {
  test(`by giving a transport`, () => {
    const g1 = g0.transport(ATransportBuilder)
    expectTypeOf(g1._.transports).toMatchTypeOf<{
      current: ATransport['name']
      configurations: {
        ATransport: ATransport['configurator']['default']
      }
      registry: {
        ATransport: ATransport
      }
    }>()
    expect(g1._.transports).toEqual({
      current: ATransport[`name`],
      configurations: {
        ATransport: ATransport[`configurator`][`default`],
      },
      registry: {
        ATransport: ATransport,
      },
    })
  })

  test(`by giving a transport builder`, () => {
    // We infer correctness by checking that giving builder matches results of giving transport,
    // which was tested above.
    const g1a = g0.transport(ATransportBuilder)
    const g1b = g0.transport(ATransport)
    expectTypeOf(g1a._.transports).toEqualTypeOf(g1b._.transports)
    expect(g1a._.transports).toEqual(g1b._.transports)
  })
})

describe(`registering second transport`, () => {
  test(`does not become current`, () => {
    const g3 = g1.transport(BTransport)
    expectTypeOf(g3._.transports).toMatchTypeOf<{
      current: ATransport['name']
      configurations: {
        ATransport: ATransport['configurator']['default']
        BTransport: BTransport['configurator']['default']
      }
      registry: {
        ATransport: ATransport
        BTransport: BTransport
      }
    }>()
    expect(g3._.transports).toEqual({
      current: ATransport[`name`],
      configurations: {
        ATransport: ATransport[`configurator`][`default`],
        BTransport: BTransport[`configurator`][`default`],
      },
      registry: {
        ATransport: ATransport,
        BTransport: BTransport,
      },
    })
  })
  test(`error if name is same as an already registered transport`, () => {
    expect(() => {
      // @ts-expect-error
      g0.transport(ATransport).transport(ATransport)
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: There is already a transport registered with the name "ATransport".]`,
    )
    expect(() => {
      // @ts-expect-error
      g0.transport(ATransportBuilder).transport(ATransportBuilder)
    }).toThrowErrorMatchingInlineSnapshot(
      `[Error: There is already a transport registered with the name "ATransport".]`,
    )
  })
})

describe(`selecting transport`, () => {
  describe(`no-op when is current and no configuration`, () => {
    test(`no configuration`, () => {
      const g2 = g1.transport(`ATransport`)
      expect(g2).toBe(g1)
      expectTypeOf(g2._).toEqualTypeOf(g1._)
    })
    test(`empty configuration`, () => {
      const g2 = g1.transport(`ATransport`, {})
      expect(g2).toBe(g1)
      expectTypeOf(g2._).toEqualTypeOf(g1._)
    })
    test(`undefined configuration`, () => {
      const g2 = g1.transport(`ATransport`, undefined)
      expect(g2).toBe(g1)
      expectTypeOf(g2._).toEqualTypeOf(g1._)
    })
  })
})
