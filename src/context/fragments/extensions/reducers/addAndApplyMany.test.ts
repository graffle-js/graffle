import { describe, expect, expectTypeOf } from 'vitest'
import { ATransport } from '../../../../../tests/_/fixtures/transports.js'
import { test } from '../../../../../tests/_/helpers.js'
import { Extension } from '../../../../entrypoints/extension.js'
import { Configurator } from '../../../../entrypoints/extension_.js'
import { pipe } from '../../../../lib/prelude.js'
import { contextEmpty } from '../../../ContextEmpty.js'
import { Configuration } from '../../configuration/_namespace.js'
import { propertiesComputerPreflight$Func } from '../../properties/_tests/_fixtures.js'
import { addAndApplyMany } from './addAndApplyMany.js'

const nameA = `a`
const nameB = `b`
const nameZ = `z`
const cEmpty = contextEmpty
const eBuilder = Extension.create(nameA)

describe(`transport`, () => {
  test(`on empty context, if extension has transport, it is added`, () => {
    const context = addAndApplyMany(cEmpty, [eBuilder.transport(ATransport).return()])
    expectTypeOf(context.transports.registry).toMatchTypeOf<{ ATransport: typeof ATransport }>()
    expectTypeOf(context.transports.current).toEqualTypeOf<'ATransport'>()
    // dprint-ignore
    expectTypeOf(context.transports.configurations.ATransport).toEqualTypeOf<typeof ATransport['configurator']['default']>()
  })
})

describe(`properties`, () => {
  test(`can add static`, () => {
    const e = eBuilder.properties({ a: 1 } as const).return()
    const c = addAndApplyMany(cEmpty, [e])
    expectTypeOf(c.properties.static).toEqualTypeOf<typeof e.propertiesStatic>()
    expect(c.properties.static).toEqual(e.propertiesStatic)
  })

  test(`can add static multiple times, later ones override earlier ones`, () => {
    const a = Extension.create(nameA).properties({ a: 1, z: 9 } as const).return()
    const b = Extension.create(nameB).properties({ a: 2, b: 3 } as const).return()
    const propertiesStaticMerged = { ...a.propertiesStatic, ...b.propertiesStatic }
    //
    const c = addAndApplyMany(cEmpty, [a, b])
    expectTypeOf(c.properties.static).toMatchTypeOf<typeof propertiesStaticMerged>()
    expect(c.properties.static).toEqual(propertiesStaticMerged)
  })

  test(`can add computed`, () => {
    const a = Extension.create(nameA).properties(propertiesComputerPreflight$Func).return()
    const c = addAndApplyMany(cEmpty, [a])
    //
    expectTypeOf(c.properties.$computedTypeFunctions).toMatchTypeOf<readonly [propertiesComputerPreflight$Func]>()
    expect(c.properties.$computedTypeFunctions).toEqual(undefined)
    expect(c.properties.computed).toEqual([propertiesComputerPreflight$Func])
  })
})

describe(`extension configuration`, () => {
  test(`extension without configuration -> context configuration is not affected`, () => {
    const a = Extension.create(nameA).return()
    //
    const c = addAndApplyMany(cEmpty, [a])
    expectTypeOf(c.configuration).toEqualTypeOf(cEmpty.configuration)
  })
  test(`one extension with configuration -> context configuration has namespace for extension added`, () => {
    const A = Extension.create(nameA).configurator(Configurator().input<{ a: number }>()).return()
    const a = A({ a: 1 })
    //
    const c = addAndApplyMany(cEmpty, [a])
    // base configuration is not affected
    expectTypeOf(c.configuration).toMatchTypeOf(contextEmpty.configuration)
    // extension configuration is added
    expectTypeOf(c.configuration[A.definition.name]).toEqualTypeOf<
      Configuration.ConfigurationNamespace<typeof A.definition.configurator>
    >()
    // Configuration value is updated
    // dprint-ignore
    const expectedConfiguration = Configuration.addType(contextEmpty, A.definition.name, A.definition.configurator, a.configuratorInitialInput).configuration
    expect(c.configuration).toEqual(expectedConfiguration)
  })
  test(`multiple extensions with mixed configuration -> context configuration has namespaces for extensions with configuration added`, () => {
    const A = Extension.create(nameA).configurator(Configurator().input<{ a: number }>()).return()
    const B = Extension.create(nameB).configurator(Configurator().input<{ b: number }>()).return()
    const z = Extension.create(nameZ).return()
    const a = A({ a: 1 })
    const b = B({ b: 2 })
    //
    const c = addAndApplyMany(cEmpty, [a, b, z])
    // base configuration is not affected
    expectTypeOf(c.configuration).toMatchTypeOf(contextEmpty.configuration)
    // extension A configuration is added
    expectTypeOf(c.configuration[A.definition.name]).toEqualTypeOf<
      Configuration.ConfigurationNamespace<typeof A.definition.configurator>
    >()
    // extension B configuration is added
    expectTypeOf(c.configuration[B.definition.name]).toEqualTypeOf<
      Configuration.ConfigurationNamespace<typeof B.definition.configurator>
    >()
    // extension Z configuration is not added
    // @ts-expect-error
    c.configuration[z.name]
    // Configuration value is updated
    // dprint-ignore
    const expectedConfiguration = pipe(
      contextEmpty,
      c => Configuration.addType(c, A.definition.name, A.definition.configurator, a.configuratorInitialInput),
      c => Configuration.addType(c, B.definition.name, B.definition.configurator, b.configuratorInitialInput),
    ).configuration
    expect(c.configuration).toEqual(expectedConfiguration)
  })
})
