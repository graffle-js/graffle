import { Grafaid } from '#lib/grafaid'
import { Test } from '@wollybeard/kit/test'
import { expect } from 'vitest'
import { Var } from './$$.js'
import { Possible } from './__tests__/fixtures/possible/$.js'
import { Select } from './Select/$.js'
import { toGraphQLDocument } from './SelectGraphQLMapper/nodes/1_Document.js'

const $ = Var.$

/**
 * Runtime tests for DocumentBuilder GraphQL document generation.
 * Tests cover transformation from Graffle selection sets to GraphQL documents,
 * with and without SDDM (Schema-Driven Data Map) and variable hoisting.
 */

// dprint-ignore
Test.describe('DocumentBuilder Runtime')
  .inputType<Possible.SelectionSets.Query>()
  .outputType<{ with?: { y?: string[]; n?: string[] }; without?: { y?: string[]; n?: string[] } }>()
  .contextType<{ hoistArguments?: boolean }>()
  .casesIn('Arguments - Enums')(
    { n: 'enum arg',                      i: { stringWithArgEnum: { $: { $ABCEnum: `A` } } },                                o: { with: { y: ['$ABCEnum: ABCEnum', 'stringWithArgEnum(ABCEnum: $ABCEnum)'] },        without: { y: ['stringWithArgEnum(ABCEnum: "A")'] } }, hoistArguments: true },
    { n: 'enum arg - no hoisting',        i: { stringWithArgEnum: { $: { $ABCEnum: `A` } } },                                o: { with: { y: ['stringWithArgEnum(ABCEnum: A)'], n: ['$ABCEnum'] } },                 hoistArguments: false },
    { n: 'enum arg - $ variable type inference', i: { stringWithArgEnum: { $: { $ABCEnum: $ } } },                        o: { with: { y: ['$ABCEnum: ABCEnum', 'stringWithArgEnum(ABCEnum: $ABCEnum)'] },        without: { y: ['$ABCEnum: String!', 'stringWithArgEnum(ABCEnum: $ABCEnum)'] } }, hoistArguments: true },
    { n: 'input object enum',             i: { stringWithArgInputObjectEnum: { $: { input: { $abcEnum: `A` } } } },          o: { with: { y: ['$input: InputObjectEnum!', 'stringWithArgInputObjectEnum(input: $input)'] }, without: { y: ['stringWithArgInputObjectEnum(input: {abcEnum: A})'] } }, hoistArguments: true },
    { n: 'nested input object enum',      i: { stringWithArgInputObjectEnum: { $: { input: { $abcEnum: `B` } } } },          o: { with: { y: ['$input: InputObjectEnum!', 'stringWithArgInputObjectEnum(input: $input)'] }, without: { y: ['stringWithArgInputObjectEnum(input: {abcEnum: B})'] } }, hoistArguments: true },
  )
  .casesIn('Arguments - Scalars and Objects')(
    { n: 'string with args',              i: { stringWithArgs: { $: { boolean: true, float: 1 } } },                     o: { with: { y: ['$boolean: Boolean', '$float: Float', 'stringWithArgs(boolean: $boolean, float: $float)'] }, without: { y: ['stringWithArgs(boolean: true, float: 1)'] } }, hoistArguments: true },
    { n: 'string with args (empty)',      i: { stringWithArgs: { $: {} } },                                               o: { with: { y: ['stringWithArgs'], n: ['$'] } },                                                                 hoistArguments: true },
    { n: 'object with args',              i: { objectWithArgs: { $: { id: `` }, id: true } },                            o: { with: { y: ['$id: ID', 'objectWithArgs(id: $id)'] },         without: { y: ['objectWithArgs(id: "")'] } },          hoistArguments: true },
    { n: 'object with args (empty)',      i: { objectWithArgs: { $: {}, id: true } },                                    o: { with: { y: ['objectWithArgs', 'id'], n: ['$'] } },                                                           hoistArguments: true },
    { n: 'on union',                      i: { result: { $: { $case: `Object1` }, __typename: true } },                  o: { with: { y: ['$case: Case!', 'result(case: $case)'] },        without: { y: ['result(case: "Object1")'] } },         hoistArguments: true },
  )
  .casesIn('Directives - $include')(
    { n: '$include (true)',               i: { object: { $include: true, id: true } },              o: { with: { y: ['@include(if: true)'] }, without: { y: ['@include(if: true)'] } }, hoistArguments: true },
    { n: '$include (false)',              i: { object: { $include: false, id: true } },             o: { with: { y: ['@include(if: false)'] }, without: { y: ['@include(if: false)'] } }, hoistArguments: true },
    { n: '$include (undefined)',          i: { object: { $include: undefined, id: true } },         o: { with: { y: ['object', 'id'], n: ['@include'] }, without: { y: ['object', 'id'], n: ['@include'] } }, hoistArguments: true },
    { n: '$include (if: true)',           i: { object: { $include: { if: true }, id: true } },     o: { with: { y: ['@include(if: true)'] }, without: { y: ['@include(if: true)'] } }, hoistArguments: true },
    { n: '$include (if: false)',          i: { object: { $include: { if: false }, id: true } },    o: { with: { y: ['@include(if: false)'] }, without: { y: ['@include(if: false)'] } }, hoistArguments: true },
    { n: '$include (if: undefined)',      i: { object: { $include: { if: undefined }, id: true } },o: { with: { y: ['@include(if: true)'] }, without: { y: ['@include(if: true)'] } }, hoistArguments: true },
    { n: '$include (empty object)',       i: { object: { $include: {}, id: true } },                o: { with: { y: ['@include(if: true)'] }, without: { y: ['@include(if: true)'] } }, hoistArguments: true },
  )
  .casesIn('Directives - $skip')(
    { n: '$skip (true)',                  i: { object: { $skip: true, id: true } },              o: { with: { y: ['@skip(if: true)'] }, without: { y: ['@skip(if: true)'] } }, hoistArguments: true },
    { n: '$skip (false)',                 i: { object: { $skip: false, id: true } },             o: { with: { y: ['@skip(if: false)'] }, without: { y: ['@skip(if: false)'] } }, hoistArguments: true },
    { n: '$skip (undefined)',             i: { object: { $skip: undefined, id: true } },         o: { with: { y: ['object', 'id'], n: ['@skip'] }, without: { y: ['object', 'id'], n: ['@skip'] } }, hoistArguments: true },
    { n: '$skip (if: true)',              i: { object: { $skip: { if: true }, id: true } },     o: { with: { y: ['@skip(if: true)'] }, without: { y: ['@skip(if: true)'] } }, hoistArguments: true },
    { n: '$skip (if: false)',             i: { object: { $skip: { if: false }, id: true } },    o: { with: { y: ['@skip(if: false)'] }, without: { y: ['@skip(if: false)'] } }, hoistArguments: true },
    { n: '$skip (if: undefined)',         i: { object: { $skip: { if: undefined }, id: true } },o: { with: { y: ['@skip(if: true)'] }, without: { y: ['@skip(if: true)'] } }, hoistArguments: true },
    { n: '$skip (empty object)',          i: { object: { $skip: {}, id: true } },                o: { with: { y: ['@skip(if: true)'] }, without: { y: ['@skip(if: true)'] } }, hoistArguments: true },
    { n: 'object nested scalar $skip',    i: { objectNested: { object: { string: true, id: true, int: { $skip: true } } } }, o: { with: { y: ['int @skip(if: true)'] }, without: { y: ['int @skip(if: true)'] } }, hoistArguments: true },
  )
  .casesIn('Inline Fragments')(
    { n: 'fg - one',             i: { ___: { __typename: true } },                                      o: { with: { y: ['... {', '__typename'] }, without: { y: ['... {', '__typename'] } }, hoistArguments: true },
    { n: 'fg - multiple',        i: { ___: [{ __typename: true }, { abcEnum: true }] },                 o: { with: { y: ['... {', '__typename', 'abcEnum'] }, without: { y: ['... {', '__typename', 'abcEnum'] } }, hoistArguments: true },
    { n: 'fg - interface',       i: { interface: { ___: { __typename: true } } },                       o: { with: { y: ['interface', '... {', '__typename'] }, without: { y: ['interface', '... {', '__typename'] } }, hoistArguments: true },
    { n: 'fg - in union',        i: { unionFooBar: { ___: { __typename: true } } },                     o: { with: { y: ['unionFooBar', '... {', '__typename'] }, without: { y: ['unionFooBar', '... {', '__typename'] } }, hoistArguments: true },
    { n: 'fg - directive',       i: { ___: { __typename: true, $include: true } },                      o: { with: { y: ['... @include(if: true) {', '__typename'] }, without: { y: ['... @include(if: true) {', '__typename'] } }, hoistArguments: true },
  )
  .casesIn('Unions')(
    { n: 'union - __typename (no fragment)',  i: { unionFooBar: { __typename: true } },                           o: { with: { y: ['unionFooBar', '__typename'] }, without: { y: ['unionFooBar', '__typename'] } }, hoistArguments: true },
    { n: 'union - scalar',                    i: { unionFooBar: { ___on_Bar: { int: true } } },                   o: { with: { y: ['unionFooBar', '... on Bar', 'int'] }, without: { y: ['unionFooBar', '... on Bar', 'int'] } }, hoistArguments: true },
    { n: 'union - directive',                 i: { unionFooBar: { ___on_Bar: { $skip: true, int: true } } },      o: { with: { y: ['... on Bar @skip(if: true)', 'int'] }, without: { y: ['... on Bar @skip(if: true)', 'int'] } }, hoistArguments: true },
  )
  .casesIn('Aliases')(
    { n: 'alias - scalar',                    i: { id: [`x`, true] },                                             o: { with: { y: ['x: id'] }, without: { y: ['x: id'] } }, hoistArguments: true },
    { n: 'alias - scalar x2',                 i: { id: [[`x`, true], [`id2`, true]] },                            o: { with: { y: ['x: id', 'id2: id'] }, without: { y: ['x: id', 'id2: id'] } }, hoistArguments: true },
    { n: 'alias - scalar directive',          i: { id: [`x`, { $skip: true }] },                                  o: { with: { y: ['x: id @skip(if: true)'] }, without: { y: ['x: id @skip(if: true)'] } }, hoistArguments: true },
    { n: 'alias - scalar directive+select',   i: { object: [`x`, { $skip: true, id: true }] },                    o: { with: { y: ['x: object @skip(if: true)', 'id'] }, without: { y: ['x: object @skip(if: true)', 'id'] } }, hoistArguments: true },
  )
  .casesIn('Arguments - Aliases')(
    { n: 'args - alias',                                i: { stringWithArgs: [[`a`, { $: { id: `` }}]] },                       o: { with: { y: ['a: stringWithArgs(id: $id)'] }, without: { y: ['a: stringWithArgs(id: "")'] } }, hoistArguments: true },
    { n: 'args - x2 same',                              i: { stringWithArgs: [[`a`, { $: { id: `` }}], [`b`,{$:{id:``}}]] },   o: { with: { y: ['a: stringWithArgs(id: $id)', 'b: stringWithArgs(id: $id_2)'] }, without: { y: ['a: stringWithArgs(id: "")', 'b: stringWithArgs(id: "")'] } }, hoistArguments: true },
  )
  .casesIn('Other')(
    { n: '__typename',                i: { __typename: true },                                                      o: { with: { y: ['__typename'] }, without: { y: ['__typename'] } }, hoistArguments: true },
    { n: 'string',                    i: { string: true },                                                          o: { with: { y: ['string'] }, without: { y: ['string'] } }, hoistArguments: true },
    { n: 'id string false',           i: { id: true, string: false },                                               o: { with: { y: ['id'], n: ['string'] }, without: { y: ['id'], n: ['string'] } }, hoistArguments: true },
    { n: 'id string undefined',       i: { id: true, string: undefined },                                           o: { with: { y: ['id'], n: ['string'] }, without: { y: ['id'], n: ['string'] } }, hoistArguments: true },
    { n: 'object scalar',             i: { object: { id: true } },                                                  o: { with: { y: ['object', 'id'] }, without: { y: ['object', 'id'] } }, hoistArguments: true },
    { n: 'object nested',             i: { objectNested: { object: { string: true, id: true, int: false } } },     o: { with: { y: ['objectNested', 'object', 'string', 'id'], n: ['int'] }, without: { y: ['objectNested', 'object', 'string', 'id'], n: ['int'] } }, hoistArguments: true },
  )
  .test((i, o, ctx) => {
    // Test WITH SDDM and variable hoisting
    if (o.with) {
      const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(i)
      const { document } = toGraphQLDocument(documentNormalized, {
        sddm: Possible.schemaMap,
        hoistArguments: ctx.hoistArguments ?? true,
      })
      const printed = Grafaid.Document.print(document)

      if (o.with.y) {
        for (const str of o.with.y) {
          expect(printed).toContain(str)
        }
      }

      if (o.with.n) {
        for (const str of o.with.n) {
          expect(printed).not.toContain(str)
        }
      }
    }

    // Test WITHOUT SDDM and WITHOUT variable hoisting (inline args)
    if (o.without) {
      const documentNormalized = Select.Document.createDocumentNormalizedFromQuerySelection(i)
      const { document } = toGraphQLDocument(documentNormalized, {
        sddm: undefined,
        hoistArguments: false,
      })
      const printed = Grafaid.Document.print(document)

      if (o.without.y) {
        for (const str of o.without.y) {
          expect(printed).toContain(str)
        }
      }

      if (o.without.n) {
        for (const str of o.without.n) {
          expect(printed).not.toContain(str)
        }
      }
    }
  })
