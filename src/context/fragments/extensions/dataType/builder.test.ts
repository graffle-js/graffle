import { describe, expect, expectTypeOf, test } from 'vitest'
import { assertExtends } from '../../../../lib/assert-equal.js'
import { Configurator } from '../../../../lib/configurator/configurator.js'
import type { Context } from '../../../context.js'
import { type Chain, create } from './builder.js'
import type { Data, DataEmpty } from './data.js'

const configuratorEmpty = Configurator().return()
type configuratorEmpty = typeof configuratorEmpty

const configuratorAsymmetric = Configurator().input<{ a?: number }>().default({ a: 1 }).return()
type configuratorAsymmetric = typeof configuratorAsymmetric

const aName = `a`
type aName = typeof aName
const a$ = create(aName)

describe(`creator`, () => {
  test(`creates a chain`, () => {
    const chain = create(`a`)
    expect(chain).toBeDefined()
    expectTypeOf(chain).toEqualTypeOf<Chain<Context, DataEmpty<'a'>>>()
  })
})

describe(`chain`, () => {
  test(`returns data if no configurator given`, () => {
    const data = a$.return()
    type dataExpected = DataEmpty<aName>
    expect(data).toMatchInlineSnapshot(`
      {
        "name": "a",
        "propertiesComputed": [],
        "propertiesStatic": {},
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

    const creator = a$.configurator(configuratorEmpty).return()
    expect(creator).toBeTypeOf(`function`)
    expectTypeOf(creator).toMatchTypeOf<creatorExpected>()
  })

  test(`input optional if configurator has no required properties`, () => {
    const A = a$.configurator(configuratorEmpty).return()

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
        "static": {},
        "transports": [],
      }
    `)
    assertExtends<typeof A, expectedCreator>()
    // rejects, why?
    // expectTypeOf<expectedCreator>().toMatchTypeOf<typeof a1>()
  })

  test(`no input -> returns same data reference`, () => {
    const A = a$.configurator(configuratorEmpty).return()
    expect(A()).toBe(A())
    expect(A({})).not.toBe(A())
  })

  test(`input -> returns with initial input`, () => {
    const A = a$.configurator(configuratorAsymmetric).return()

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
