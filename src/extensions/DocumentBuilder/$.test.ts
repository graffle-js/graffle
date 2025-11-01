import { Docpar } from '#src/docpar/$.js'
import { GraphqlKit } from '#src/lib/grafaid/_.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Test } from '@wollybeard/kit/test'
import { Var } from './$$.js'

const $ = Var.$

Test
  .describe('DocumentBuilder')
  .inputType<Possible.SelectionSets.Query>()
  .matrix({
    sddm: [undefined, Possible.schemaMap],
    hoistArguments: [true, false],
  })
  .describeInputs('Arguments - Enums', [
    { stringWithArgEnum: { $: { $ABCEnum: `A` } } },
    { stringWithArgEnum: { $: { $ABCEnum: $ } } },
    { stringWithArgInputObjectEnum: { $: { input: { $abcEnum: `A` } } } },
    { stringWithArgInputObjectEnum: { $: { input: { $abcEnum: `B` } } } },
  ])
  .describeInputs('Arguments - Scalars and Objects', [
    { stringWithArgs: { $: { boolean: true, float: 1 } } },
    { stringWithArgs: { $: {} } },
    { objectWithArgs: { $: { id: `` }, id: true } },
    { objectWithArgs: { $: {}, id: true } },
    { result: { $: { $case: `Object1` }, __typename: true } },
  ])
  .describeInputs('Directives - $include', [
    { object: { $include: true, id: true } },
    { object: { $include: false, id: true } },
    { object: { $include: undefined, id: true } },
    { object: { $include: { if: true }, id: true } },
    { object: { $include: { if: false }, id: true } },
    { object: { $include: { if: undefined }, id: true } },
    { object: { $include: {}, id: true } },
  ])
  .describeInputs('Directives - $skip', [
    { object: { $skip: true, id: true } },
    { object: { $skip: false, id: true } },
    { object: { $skip: undefined, id: true } },
    { object: { $skip: { if: true }, id: true } },
    { object: { $skip: { if: false }, id: true } },
    { object: { $skip: { if: undefined }, id: true } },
    { object: { $skip: {}, id: true } },
    { objectNested: { object: { string: true, id: true, int: { $skip: true } } } },
  ])
  .describeInputs('Inline Fragments', [
    { ___: { __typename: true } },
    { ___: [{ __typename: true }, { abcEnum: true }] },
    { interface: { ___: { __typename: true } } },
    { unionFooBar: { ___: { __typename: true } } },
    { ___: { __typename: true, $include: true } },
  ])
  .describeInputs('Unions', [
    { unionFooBar: { __typename: true } },
    { unionFooBar: { ___on_Bar: { int: true } } },
    { unionFooBar: { ___on_Bar: { $skip: true, int: true } } },
  ])
  .describeInputs('Aliases', [
    { id: [`x`, true] },
    { id: [[`x`, true], [`id2`, true]] },
    { id: [`x`, { $skip: true }] },
    { object: [`x`, { $skip: true, id: true }] },
  ])
  .describeInputs('Arguments - Aliases', [
    { stringWithArgs: [[`a`, { $: { id: `` } }]] },
    { stringWithArgs: [[`a`, { $: { id: `` } }], [`b`, { $: { id: `` } }]] },
  ])
  .describeInputs('Other', [
    { __typename: true },
    { string: true },
    { id: true, string: false },
    { id: true, string: undefined },
    { object: { id: true } },
    { objectNested: { object: { string: true, id: true, int: false } } },
  ])
  .test(({ input, matrix }) => {
    const documentNormalized = Docpar.Object.Select.Document.createDocumentNormalizedFromQuerySelection(input)
    const { document } = Docpar.Object.ToGraphQLDocument.toGraphQL(documentNormalized, matrix)
    return GraphqlKit.Document.print(document)
  })
