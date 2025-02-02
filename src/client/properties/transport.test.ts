import { describe, expect, expectTypeOf } from 'vitest'
import { ATransport, ATransportBuilder, BTransport } from '../../../tests/_/fixtures/transports.js'
import { test } from '../../../tests/_/helpers.js'
import { Context } from '../../types/context.js'
import { create } from '../client.js'
import { ContextTransports } from './transport.js'

const g1 = create().transport(ATransport)
const g2 = create().transport(ATransport).transport(BTransport)

describe(`starting state`, () => {
  test(`no transports registered`, ({ g0 }) => {
    expectTypeOf(g0._.transports).toMatchTypeOf<ContextTransports.States.Empty>()
    expectTypeOf(g0._.requestPipelineDefinition.overloads).toMatchTypeOf<
      Context.States.Empty['requestPipelineDefinition']['overloads']
    >()
    expect(g0._.transports).toBe(ContextTransports.States.empty)
    expect(g0._.requestPipelineDefinition.overloads).toBe(Context.States.empty.requestPipelineDefinition.overloads)
  })

  // dprint-ignore
  test(`no transport method overloads b/c no transports registered`, ({ g0 }) => {
    // @ts-expect-error
    expect(() => g0.transport(`wrong`)).toThrowErrorMatchingInlineSnapshot(`[Error: Unknown transport: wrong]`)
    // @ts-expect-error
    expect(() => g0.transport(`wrong`, {})).toThrowErrorMatchingInlineSnapshot(`[Error: Unknown transport: wrong]`)
    // @ts-expect-error
    expect(() => g0.transport({})).toThrowErrorMatchingInlineSnapshot(`[Error: No transport is currently set.]`)
  })
})

describe(`registering first transport`, () => {
  test(`by giving a transport`, ({ g0 }) => {
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
    expectTypeOf(g1._.requestPipelineDefinition.overloads).toMatchTypeOf<
      readonly [ATransport]
    >()
    expect(g1._.requestPipelineDefinition.overloads).toEqual([ATransport])
  })

  test(`by giving a transport builder`, ({ g0 }) => {
    // We infer correctness by checking that giving builder matches results of giving transport,
    // which was tested above.
    const g1a = g0.transport(ATransportBuilder)
    const g1b = g0.transport(ATransport)
    expectTypeOf(g1a._.transports).toEqualTypeOf(g1b._.transports)
    expectTypeOf(g1a._.requestPipelineDefinition.overloads).toEqualTypeOf(g1b._.requestPipelineDefinition.overloads)
    expect(g1a._.transports).toEqual(g1b._.transports)
    expect(g1a._.requestPipelineDefinition.overloads).toEqual(g1b._.requestPipelineDefinition.overloads)
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
  test(`error if name is same as an already registered transport`, ({ g0 }) => {
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
  describe(`given current`, () => {
    describe(`without configuration -> no-op`, () => {
      test(`no configuration`, () => {
        const g2 = g1.transport(ATransport.name)
        expect(g2).toBe(g1)
        expectTypeOf(g2._).toEqualTypeOf(g1._)
      })
      test(`empty configuration`, () => {
        const g2 = g1.transport(ATransport.name, {})
        expect(g2).toBe(g1)
        expectTypeOf(g2._).toEqualTypeOf(g1._)
      })
      test(`undefined configuration`, () => {
        const g2 = g1.transport(ATransport.name, undefined)
        expect(g2).toBe(g1)
        expectTypeOf(g2._).toEqualTypeOf(g1._)
      })
    })
    test(`with configuration configures current`, () => {
      const g2 = g1.transport(ATransport.name, { a: 1 })
      expect(g2._.transports.configurations.ATransport).toEqual({ a: 1 })
      expectTypeOf(g2._.transports.configurations.ATransport).toMatchTypeOf<{ a: 1 }>()
    })
  })
  describe(`given different`, () => {
    test(`without configuration -> changes current without altering its configuration`, () => {
      // Sanity check that current is not BTransport to begin with
      expect(g2._.transports.current).toBe(ATransport.name)
      expectTypeOf(g2._.transports.current).toEqualTypeOf<ATransport['name']>()
      // Current is changed to BTransport
      const g3 = g2.transport(BTransport.name)
      expect(g3._.transports.current).toBe(BTransport.name)
      expectTypeOf(g3._.transports.current).toEqualTypeOf<BTransport['name']>()
      // Configuration is unchanged
      expect(g3._.transports.configurations.ATransport).toEqual(g2._.transports.configurations.ATransport)
    })
    test(`with configuration -> changes current + alters configuration`, () => {
      // Sanity check that BTransport configuration is not set to begin with
      expect(g2._.transports.configurations.BTransport).toEqual({})
      expectTypeOf(g2._.transports.configurations.BTransport).toMatchTypeOf<{}>()
      // Current is changed to BTransport
      const g3 = g2.transport(BTransport.name, { b: `1` })
      expect(g3._.transports.current).toBe(BTransport.name)
      expectTypeOf(g3._.transports.current).toEqualTypeOf<BTransport['name']>()
      // Configuration is altered
      expect(g3._.transports.configurations.BTransport).toEqual({ b: `1` })
      expectTypeOf(g3._.transports.configurations.BTransport).toMatchTypeOf<{ b: '1' }>()
    })
  })

  test(`name must match a registered transport; configuration must match its configurator input`, () => {
    expect(() =>
      // @ts-expect-error
      g1.transport(`wrong`)
    ).toThrowErrorMatchingInlineSnapshot(`[Error: Unknown transport: wrong]`)
    g1.transport(`ATransport`, {
      // @ts-expect-error
      wrong: true,
    })
  })
})

describe(`configuring current transport`, () => {
  test(`given empty -> no-op`, () => {
    const g2 = g1.transport({})
    expect(g2).toBe(g1)
    expectTypeOf(g2._).toEqualTypeOf(g1._)
  })
  test(`given non-empty -> changes configuration`, () => {
    const g2 = g1.transport({ a: 99 })
    expect(g2._.transports.configurations.ATransport).toEqual({ a: 99 })
    expectTypeOf(g2._.transports.configurations.ATransport).toMatchTypeOf<{ a: 99 }>()
  })
})
