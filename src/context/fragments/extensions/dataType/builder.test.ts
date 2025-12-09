import { Assert, Configurator } from '@wollybeard/kit'
import { describe, expect, test } from 'vitest'
import type { Context } from '../../../context.js'
import { type Chain, create } from './builder.js'
import type { Data, DataEmpty } from './data.js'

const configuratorEmpty = Configurator.create().return()
type configuratorEmpty = typeof configuratorEmpty

const configuratorAsymmetric = Configurator.create().input<{ a?: number }>().default({ a: 1 }).return()
type configuratorAsymmetric = typeof configuratorAsymmetric

const nameA = `a`
type aName = typeof nameA
const aBuilder = create(nameA)

describe(`creator`, () => {
  test(`creates a chain`, () => {
    const chain = create(`a`)
    expect(chain).toBeDefined()
    Assert.exact.ofAs<Chain<Context, DataEmpty<'a'>>>().on(chain)
  })
})

describe(`properties`, () => {
  test(`can add static properties`, () => {
    const a = create(nameA).properties({ a: 1 }).return()
    // todo: readonly a: ...
    Assert.exact.ofAs<{ a: number }>().on(a.propertiesStatic)
  })
  test(`can add multiple static properties`, () => {
    const a = create(nameA).properties({ a: 1 }).properties({ b: 2 }).return()
    Assert.exact.ofAs<{ a: number } & { b: number }>().on(a.propertiesStatic)
  })
})

describe(`chain`, () => {
  test(`returns data if no configurator given`, () => {
    const data = aBuilder.return()
    type dataExpected = DataEmpty<aName>
    expect(data).toMatchInlineSnapshot(`
      {
        "name": "a",
        "propertiesComputed": [],
        "propertiesStatic": {},
        "requestInterceptorsComputed": [],
        "static": {},
        "transports": [],
      }
    `)
    Assert.exact.ofAs<dataExpected>().on(data)
  })
})

describe(`creator`, () => {
  test(`returned if chain given configurator`, () => {
    type dataExpected = Data<aName, configuratorEmpty>
    type creatorExpected = (parameters: {}) => dataExpected

    const creator = aBuilder.configurator(configuratorEmpty).return()
    expect(creator).toBeTypeOf(`function`)
    Assert.sub.ofAs<creatorExpected>().on(creator)
  })
  test(`has definition property`, () => {
    const A = create(nameA).configurator(configuratorEmpty).return()
    const a = A()
    expect(A.definition).toBe(a)
    Assert.sub.ofAs<typeof A.definition>().on(a)
  })

  test(`input optional if configurator has no required properties`, () => {
    const A = aBuilder.configurator(configuratorEmpty).return()

    type expectedCreator = (configuration?: {} | undefined) => Data<aName, configuratorEmpty>
    const a = A()
    expect(a).toMatchInlineSnapshot(`
      {
        "configurator": {
          "default": {},
          "inputResolver": [Function],
        },
        "name": "a",
        "propertiesComputed": [],
        "propertiesStatic": {},
        "requestInterceptorsComputed": [],
        "static": {},
        "transports": [],
      }
    `)
    Assert.sub.ofAs<expectedCreator>().on(A)
    // rejects, why?
    // expectTypeOf<expectedCreator>().toMatchTypeOf<typeof a1>()
  })

  test(`no input -> returns same data reference`, () => {
    const A = aBuilder.configurator(configuratorEmpty).return()
    expect(A()).toBe(A())
    expect(A({})).not.toBe(A())
  })

  test(`input -> returns with initial input`, () => {
    const A = aBuilder.configurator(configuratorAsymmetric).return()

    const a = A()
    expect(a.configuratorInitialInput).toBe(undefined)
    Assert.exact.ofAs<undefined>().on(a.configuratorInitialInput)

    const configuration = {}
    type configuration = typeof configuration
    const a2 = A(configuration)
    expect(a2.configuratorInitialInput).toBe(configuration)
    Assert.exact.ofAs<configuration>().on(a2.configuratorInitialInput)
  })
})
