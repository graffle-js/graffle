import { Extension } from '#graffle/extension'
import { Configurator } from '#graffle/extension-exports'
import { ATransport } from '@test/fixtures/transports'
import { test } from '@test/fixtures/helpers'
import { Fn, Ts } from '@wollybeard/kit'
import { describe, expect } from 'vitest'
import { contextEmpty } from '../../../ContextEmpty.js'
import { Configuration } from '../../configuration/_.js'
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
    Ts.Assert.equiv.ofAs<{ ATransport: typeof ATransport }>().on(context.transports.registry)
    Ts.Assert.exact.ofAs<'ATransport'>().on(context.transports.current)
    // dprint-ignore
    Ts.Assert.exact.ofAs<typeof ATransport['configurator']['default']>().on(context.transports.configurations.ATransport)
  })
})

describe(`properties`, () => {
  test(`can add static`, () => {
    const e = eBuilder.properties({ a: 1 } as const).return()
    const c = addAndApplyMany(cEmpty, [e])
    Ts.Assert.exact.ofAs<typeof e.propertiesStatic>().on(c.properties.static)
    expect(c.properties.static).toEqual(e.propertiesStatic)
  })

  test(`can add static multiple times, later ones override earlier ones`, () => {
    const a = Extension.create(nameA).properties({ a: 1, z: 9 } as const).return()
    const b = Extension.create(nameB).properties({ a: 2, b: 3 } as const).return()
    const propertiesStaticMerged = { ...a.propertiesStatic, ...b.propertiesStatic }
    //
    const c = addAndApplyMany(cEmpty, [a, b])
    Ts.Assert.equiv.ofAs<typeof propertiesStaticMerged>().on(c.properties.static)
    expect(c.properties.static).toEqual(propertiesStaticMerged)
  })

  test(`can add computed`, () => {
    const a = Extension.create(nameA).properties(propertiesComputerPreflight$Func).return()
    const c = addAndApplyMany(cEmpty, [a])
    //
    Ts.Assert.equiv.ofAs<readonly [propertiesComputerPreflight$Func]>().on(c.properties.$computedTypeFunctions)
    expect(c.properties.$computedTypeFunctions).toEqual(undefined)
    expect(c.properties.computed).toEqual([propertiesComputerPreflight$Func])
  })
})

describe(`extension configuration`, () => {
  test(`extension without configuration -> context configuration is not affected`, () => {
    const a = Extension.create(nameA).return()
    //
    const c = addAndApplyMany(cEmpty, [a])
    // TODO: Type instantiation is excessively deep - need to simplify type assertion
    // Ts.Assert.exact.ofAs<typeof cEmpty.configuration>().on(c.configuration)
  })
  test(`one extension with configuration -> context configuration has namespace for extension added`, () => {
    const A = Extension.create(nameA).configurator(Configurator.create().input<{ a: number }>()).return()
    const a = A({ a: 1 })
    //
    const c = addAndApplyMany(cEmpty, [a])
    // base configuration is not affected
    Ts.Assert.sub.ofAs<typeof contextEmpty.configuration>().on(c.configuration)
    // extension configuration is added
    Ts.Assert.exact.ofAs<
      Configuration.ConfigurationNamespace<typeof A.definition.configurator>
    >().on(c.configuration[A.definition.name])
    // Configuration value is updated
    // dprint-ignore
    const expectedConfiguration = Configuration.addType(contextEmpty, A.definition.name, A.definition.configurator, a.configuratorInitialInput).configuration
    expect(c.configuration).toEqual(expectedConfiguration)
  })
  test(`multiple extensions with mixed configuration -> context configuration has namespaces for extensions with configuration added`, () => {
    const A = Extension.create(nameA).configurator(Configurator.create().input<{ a: number }>()).return()
    const B = Extension.create(nameB).configurator(Configurator.create().input<{ b: number }>()).return()
    const z = Extension.create(nameZ).return()
    const a = A({ a: 1 })
    const b = B({ b: 2 })
    //
    const c = addAndApplyMany(cEmpty, [a, b, z])
    // base configuration is not affected
    Ts.Assert.sub.ofAs<typeof contextEmpty.configuration>().on(c.configuration)
    // extension A configuration is added
    Ts.Assert.exact.ofAs<
      Configuration.ConfigurationNamespace<typeof A.definition.configurator>
    >().on(c.configuration[A.definition.name])
    // extension B configuration is added
    Ts.Assert.exact.ofAs<
      Configuration.ConfigurationNamespace<typeof B.definition.configurator>
    >().on(c.configuration[B.definition.name])
    // extension Z configuration is not added
    // @ts-expect-error
    c.configuration[z.name]
    // Configuration value is updated
    // dprint-ignore
    const expectedConfiguration = Fn.pipe(
      contextEmpty,
      c => Configuration.addType(c, A.definition.name, A.definition.configurator, a.configuratorInitialInput),
      c => Configuration.addType(c, B.definition.name, B.definition.configurator, b.configuratorInitialInput),
    ).configuration
    expect(c.configuration).toEqual(expectedConfiguration)
  })
})
