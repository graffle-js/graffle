import { type ContextEmpty, contextEmpty } from '#src/context/ContextEmpty.js'
import {
  type ContextFragmentTransportsEmpty,
  contextFragmentTransportsEmpty,
} from '#src/context/fragments/transports/fragment.js'
import { ATransport, ATransportBuilder, BTransport } from '#test/fixtures/transports'
import { test } from '#test/helpers'
import { Ts } from '@wollybeard/kit'
import { describe, expect } from 'vitest'
import { create } from '../client.js'

const g1 = create().transport(ATransport)
const g2 = create().transport(ATransport).transport(BTransport)

describe(`starting state`, () => {
  test(`no transports registered`, ({ g0 }) => {
    Ts.Assert.equiv.ofAs<ContextFragmentTransportsEmpty['transports']>().on(g0._.transports)
    Ts.Assert.equiv.ofAs<
      ContextEmpty['requestPipelineDefinition']['overloads']
    >().on(g0._.requestPipelineDefinition.overloads)
    expect(g0._.transports).toBe(contextFragmentTransportsEmpty.transports)
    expect(g0._.requestPipelineDefinition.overloads).toBe(contextEmpty.requestPipelineDefinition.overloads)
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
    Ts.Assert.equiv.ofAs<{
      current: ATransport['name']
      configurations: {
        ATransport: ATransport['configurator']['default']
      }
      registry: {
        ATransport: ATransport
      }
    }>().on(g1._.transports)
    expect(g1._.transports).toEqual({
      current: ATransport[`name`],
      configurations: {
        ATransport: ATransport[`configurator`][`default`],
      },
      registry: {
        ATransport: ATransport,
      },
    })
    Ts.Assert.equiv.ofAs<
      readonly [ATransport]
    >().on(g1._.requestPipelineDefinition.overloads)
    expect(g1._.requestPipelineDefinition.overloads).toEqual([ATransport])
  })

  test(`by giving a transport builder`, ({ g0 }) => {
    // We infer correctness by checking that giving builder matches results of giving transport,
    // which was tested above.
    const g1a = g0.transport(ATransportBuilder)
    const g1b = g0.transport(ATransport)
    // TODO: Type instantiation is excessively deep - need to simplify type assertions
    // Ts.Assert.exact.ofAs<typeof g1b._.transports>().on(g1a._.transports)
    // Ts.Assert.exact.ofAs<typeof g1b._.requestPipelineDefinition.overloads>().on(g1a._.requestPipelineDefinition.overloads)
    expect(g1a._.transports).toEqual(g1b._.transports)
    expect(g1a._.requestPipelineDefinition.overloads).toEqual(g1b._.requestPipelineDefinition.overloads)
  })
})

describe(`registering second transport`, () => {
  test(`does not become current`, () => {
    const g3 = g1.transport(BTransport)
    Ts.Assert.equiv.ofAs<{
      current: ATransport['name']
      configurations: {
        ATransport: ATransport['configurator']['default']
        BTransport: BTransport['configurator']['default']
      }
      registry: {
        ATransport: ATransport
        BTransport: BTransport
      }
    }>().on(g3._.transports)
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
        // TODO: Type instantiation is excessively deep - need to simplify type assertion
        // Ts.Assert.exact.ofAs<typeof g1._>().on(g2._)
      })
      test(`empty configuration`, () => {
        const g2 = g1.transport(ATransport.name, {})
        expect(g2).toBe(g1)
        // TODO: Type instantiation is excessively deep - need to simplify type assertion
        // Ts.Assert.exact.ofAs<typeof g1._>().on(g2._)
      })
      test(`undefined configuration`, () => {
        const g2 = g1.transport(ATransport.name, undefined)
        expect(g2).toBe(g1)
        // TODO: Type instantiation is excessively deep - need to simplify type assertion
        // Ts.Assert.exact.ofAs<typeof g1._>().on(g2._)
      })
    })
    test(`with configuration configures current`, () => {
      const g2 = g1.transport(ATransport.name, { a: 1 })
      expect(g2._.transports.configurations.ATransport).toEqual({ a: 1 })
      Ts.Assert.equiv.ofAs<{ a: 1 }>().on(g2._.transports.configurations.ATransport)
    })
  })
  describe(`given different`, () => {
    test(`without configuration -> changes current without altering its configuration`, () => {
      // Sanity check that current is not BTransport to begin with
      expect(g2._.transports.current).toBe(ATransport.name)
      Ts.Assert.exact.ofAs<ATransport['name']>().on(g2._.transports.current)
      // Current is changed to BTransport
      const g3 = g2.transport(BTransport.name)
      expect(g3._.transports.current).toBe(BTransport.name)
      Ts.Assert.exact.ofAs<BTransport['name']>().on(g3._.transports.current)
      // Configuration is unchanged
      expect(g3._.transports.configurations.ATransport).toEqual(g2._.transports.configurations.ATransport)
    })
    test(`with configuration -> changes current + alters configuration`, () => {
      // Sanity check that BTransport configuration is not set to begin with
      expect(g2._.transports.configurations.BTransport).toEqual({})
      Ts.Assert.equiv.ofAs<{}>().on(g2._.transports.configurations.BTransport)
      // Current is changed to BTransport
      const g3 = g2.transport(BTransport.name, { b: `1` })
      expect(g3._.transports.current).toBe(BTransport.name)
      Ts.Assert.exact.ofAs<BTransport['name']>().on(g3._.transports.current)
      // Configuration is altered
      expect(g3._.transports.configurations.BTransport).toEqual({ b: `1` })
      Ts.Assert.equiv.ofAs<{ b: '1' }>().on(g3._.transports.configurations.BTransport)
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
    // TODO: Type instantiation is excessively deep - need to simplify type assertion
    // Ts.Assert.exact.ofAs<typeof g1._>().on(g2._)
  })
  test(`given non-empty -> changes configuration`, () => {
    const g2 = g1.transport({ a: 99 })
    expect(g2._.transports.configurations.ATransport).toEqual({ a: 99 })
    Ts.Assert.equiv.ofAs<{ a: 99 }>().on(g2._.transports.configurations.ATransport)
  })
})
