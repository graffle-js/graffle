import { assertExtends } from '#/lib/assert-equal'
import { Configurator } from '#/lib/configurator/configurator'
import { describe, expect, expectTypeOf, test } from 'vitest'
import type { Context } from '../../../context.js'
import { type Chain, create } from './builder.js'
import type { Data, DataEmpty } from './data.js'

const configuratorEmpty = Configurator().return()
type configuratorEmpty = typeof configuratorEmpty

const configuratorAsymmetric = Configurator().input<{ a?: number }>().default({ a: 1 }).return()
type configuratorAsymmetric = typeof configuratorAsymmetric

const nameA = `a`
type aName = typeof nameA
const aBuilder = create(nameA)

describe(`creator`, () => {
  test(`creates a chain`, () => {
    const chain = create(`a`)
    expect(chain).toBeDefined()
    expectTypeOf(chain).toEqualTypeOf<Chain<Context, DataEmpty<'a'>>>()
  })
})

describe(`properties`, () => {
  test(`can add static properties`, () => {
    const a = create(nameA).properties({ a: 1 }).return()
    // todo: readonly a: ...
    expectTypeOf(a.propertiesStatic).toEqualTypeOf<{ a: number }>()
  })
  test(`can add multiple static properties`, () => {
    const a = create(nameA).properties({ a: 1 }).properties({ b: 2 }).return()
    expectTypeOf(a.propertiesStatic).toEqualTypeOf<{ a: number } & { b: number }>()
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
    expectTypeOf(data).toEqualTypeOf<dataExpected>()
  })
})

describe(`creator`, () => {
  test(`returned if chain given configurator`, () => {
    type dataExpected = Data<aName, configuratorEmpty>
    type creatorExpected = (parameters: {}) => dataExpected

    const creator = aBuilder.configurator(configuratorEmpty).return()
    expect(creator).toBeTypeOf(`function`)
    expectTypeOf(creator).toMatchTypeOf<creatorExpected>()
  })
  test(`has definition property`, () => {
    const A = create(nameA).configurator(configuratorEmpty).return()
    const a = A()
    expect(A.definition).toBe(a)
    expectTypeOf(a).toMatchTypeOf(A.definition)
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
    assertExtends<typeof A, expectedCreator>()
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
    expectTypeOf(a.configuratorInitialInput).toEqualTypeOf<undefined>()

    const configuration = {}
    type configuration = typeof configuration
    const a2 = A(configuration)
    expect(a2.configuratorInitialInput).toBe(configuration)
    expectTypeOf(a2.configuratorInitialInput).toEqualTypeOf<configuration>()
  })
})
