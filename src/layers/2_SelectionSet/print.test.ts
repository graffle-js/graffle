import { parse, print } from 'graphql'
import { describe, expect, test } from 'vitest'
import { db } from '../../../tests/_/schemas/db.js'
import { $Index as schemaIndex } from '../../../tests/_/schemas/kitchen-sink/graffle/modules/SchemaRuntime.js'
import type * as SelectionSets from '../../../tests/_/schemas/kitchen-sink/graffle/modules/SelectionSets.js'
import { outputConfigDefault } from '../6_client/Settings/Config.js'
import type { Context } from './print.js'
import { rootType } from './print.js'

// eslint-disable-next-line
// @ts-ignore
const s = (selectionSet: SelectionSets.Query) => selectionSet

const testEachArgs = [
  `Query`,
  (
    ...args: [SelectionSets.Query] | [
      description: string,
      ss: SelectionSets.Query,
    ]
  ) => {
    const [description, ss] = args.length === 1 ? [undefined, args[0]] : args
    const context: Context = {
      schemaIndex,
      config: {
        output: outputConfigDefault,
        transport: { type: `memory`, config: { methodMode: `post` } },
        name: schemaIndex[`name`],

        initialInput: {} as any,
      },
    }
    const graphqlDocumentString = rootType(context, schemaIndex[`Root`][`Query`], ss as any)
    // console.log(graphqlDocumentString)
    // Should parse, ensures is syntactically valid graphql document.
    const document = parse(graphqlDocumentString)
    const graphqlDocumentStringFormatted = print(document)
    const beforeAfter = `\n`
      + JSON.stringify(ss, null, 2)
      + `\n--------------\n`
      + graphqlDocumentStringFormatted
      + `\n`
    expect(beforeAfter).toMatchSnapshot(description)
  },
] as const

describe(`inline fragment field group`, () => {
  test.each([
    [s({ ___: { __typename: true } })],
    [s({ ___: [{ __typename: true }, { abcEnum: true }] })],
    [s({ interface: { ___: { __typename: true } } })],
    [s({ unionFooBar: { ___: { __typename: true } } })],
    [s({ ___: { __typename: true, $include: true } })],
  ])(...testEachArgs)
})

describe(`enum`, () => {
  test.each([
    [s({ result: { $: { case: `Object1` }, __typename: true } })],
  ])(...testEachArgs)
})

describe(`union`, () => {
  test.each([
    [s({ unionFooBar: { __typename: true } })],
    [s({ unionFooBar: { ___on_Bar: { int: true } } })],
    [s({ unionFooBar: { ___on_Bar: { $skip: true, int: true } } })],
    // s({ unionFooBar: { __on_Bar: {} } }), // todo should be static type error
  ])(...testEachArgs)
})

describe(`alias`, () => {
  test.each([
    [s({ id: [`x`, true] })],
    [s({ id: [[`x`, true], [`id2`, true]] })],
    [s({ id: [`x`, { $skip: true }] })],
    [s({ object: [`x`, { $skip: true, id: true }] })],
  ])(...testEachArgs)
})

describe(`args`, () => {
  test.each([
    [s({ stringWithArgs: { $: { boolean: true, float: 1 } } })],
    [s({ stringWithArgs: { $: {} } })],
    // s({ objectWithArgs: { $: { id: `` } } }), // todo should be static error
    // s({ objectWithArgs: { $: {} } }), // todo should be static error
    [s({ objectWithArgs: { $: { id: `` }, id: true } })],
    [s({ objectWithArgs: { $: {}, id: true } })],
  ])(...testEachArgs)
})

describe(`$include`, () => {
  test.each([
    [s({ object: { $include: true, id: true } })],
    [s({ object: { $include: false, id: true } })],
    [s({ object: { $include: undefined, id: true } })],
    [s({ object: { $include: { if: true }, id: true } })],
    [s({ object: { $include: { if: false }, id: true } })],
    [s({ object: { $include: { if: undefined }, id: true } })],
    [s({ object: { $include: {}, id: true } })],
  ])(...testEachArgs)
})

describe(`$skip`, () => {
  test.each([
    [s({ object: { $skip: true, id: true } })],
    [s({ object: { $skip: false, id: true } })],
    [s({ object: { $skip: undefined, id: true } })],
    [s({ object: { $skip: { if: true }, id: true } })],
    [s({ object: { $skip: { if: false }, id: true } })],
    [s({ object: { $skip: { if: undefined }, id: true } })],
    [s({ object: { $skip: {}, id: true } })],
  ])(...testEachArgs)
})

// describe(`$defer`, () => {
//   test.each([
//     [s({ object: { $defer: true, id: true } })],
//     [s({ object: { $defer: false, id: true } })],
//     [s({ object: { $defer: undefined, id: true } })],
//     [s({ object: { $defer: { if: true }, id: true } })],
//     [s({ object: { $defer: { if: false }, id: true } })],
//     [s({ object: { $defer: { if: undefined }, id: true } })],
//     [s({ object: { $defer: {}, id: true } })],
//     [s({ object: { $defer: { label: `foobar` }, id: true } })],
//   ])(...testEachArgs)
// })

// describe(`$stream`, () => {
//   test.each([
//     [s({ object: { $stream: true, id: true } })],
//     [s({ object: { $stream: false, id: true } })],
//     [s({ object: { $stream: undefined, id: true } })],
//     [s({ object: { $stream: { if: true }, id: true } })],
//     [s({ object: { $stream: { if: false }, id: true } })],
//     [s({ object: { $stream: { if: undefined }, id: true } })],
//     [s({ object: { $stream: {}, id: true } })],
//     [s({ object: { $stream: { label: `foobar` }, id: true } })],
//     [s({ object: { $stream: { initialCount: 5 }, id: true } })],
//   ])(...testEachArgs)
// })

describe(`other`, () => {
  test.each([
    [s({ __typename: true })],
    [s({ string: true })],
    // [s({ string: 1 })],
    // s({ string: false }), // todo should be static error
    [s({ id: true, string: false })],
    // [s({ id: true, string: 0 })],
    [s({ id: true, string: undefined })],
    [s({ object: { id: true } })],
    [s({ objectNested: { object: { string: true, id: true, int: false } } })],
    [s({ objectNested: { object: { string: true, id: true, int: { $skip: true } } } })],
  ])(...testEachArgs)
})

describe(`args`, () => {
  // dprint-ignore
  describe(`custom scalars`, () => {
    test.each([
      [`arg field`, s({ dateArg: { $: { date: db.date0 } } })],
      [`arg field in non-null`,s({ dateArgNonNull: { $: { date: db.date0 } } })], 
      [`arg field in list`,s({ dateArgList: { $: { date: [db.date0, new Date(1)] } } })], 
      [`arg field in list (null)`,s({ dateArgList: { $: { date: null } } })],
      [`arg field in non-null list (with list)`,s({ dateArgNonNullList: { $: { date: [db.date0, new Date(1)] } } })],
      [`arg field in non-null list (with null)`,s({ dateArgNonNullList: { $: { date: [null, db.date0] } } })],
      [`arg field in non-null list non-null`,s({ dateArgNonNullListNonNull: { $: { date: [db.date0, new Date(1)] } } })],
      [`input object field`,s({ dateArgInputObject: { $: { input: { idRequired: ``, dateRequired: db.date0, date: new Date(1) } } } })],
      [`nested input object field`, s({ InputObjectNested: { $: { input: { InputObject: { idRequired: ``, dateRequired: db.date0, date: new Date(1) } } } } })]
    ] as const)(...testEachArgs)
  })
})
