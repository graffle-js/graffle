import { expect, test } from 'vitest'
import { Date } from '../../../tests/_/fixtures/scalars.js'
import { db } from '../../../tests/_/schemas/db.js'
import { schemaDrivenDataMap } from '../../../tests/_/schemas/kitchen-sink/graffle/modules/SchemaDrivenDataMap.js'
import type * as SelectionSets from '../../../tests/_/schemas/kitchen-sink/graffle/modules/SelectionSets.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import type { SchemaKit } from '../1_Schema/__.js'
import { Select } from '../2_Select/__.js'
import { toGraphQLDocument } from './nodes/1_Document.js'

type CasesDescriptiveQuery = [
  description: string,
  selectionSet: SelectionSets.Query,
  options?: { operationName?: string },
]
const testEachQueryWithDescription = test.for.bind(test)<CasesDescriptiveQuery>

type CasesDescriptiveQueryWithCustomScalars = [
  description: string,
  selectionSet: SelectionSets.Query<{ Date: typeof Date }>,
  options?: { operationName?: string },
]
const testEachQueryWithDescriptionWithCustomScalars = test.for.bind(test)<CasesDescriptiveQueryWithCustomScalars>

const tester = <$Scalars extends SchemaKit.Hybrid.Scalar.ScalarMap>(
  input: { variables: boolean; scalars: $Scalars },
) => {
  // dprint-ignore
  const message = `( variables: ${String(input.variables)}; scalars: ${Object.keys(input.scalars).join(`, `) || `(none)`} ) - Query - %s`
  return [
    message,
    (args: {} extends $Scalars ? CasesDescriptiveQuery : CasesDescriptiveQueryWithCustomScalars) => {
      const [description, graffleQuery, options] = args

      const { document, operationsVariables } = toGraphQLDocument(
        Select.Document.createDocumentNormalizedFromQuerySelection(
          graffleQuery as any,
          options?.operationName,
        ),
        {
          sddm: schemaDrivenDataMap,
          operationVariables: input.variables,
        },
      )

      const beforeAndAfter = `\n`
        + `\n--------------GRAFFLE QUERY-------------\n`
        + JSON.stringify(graffleQuery, null, 2)
        + `\n--------GRAPHQL DOCUMENT & VARIABLES--------\n`
        + Grafaid.Document.print(document)
        + `\n----------------\n`
        + JSON.stringify(operationsVariables, null, 2)
        + `\n`

      expect(beforeAndAfter).toMatchSnapshot(description)
    },
  ] as const
}

// todo test a case where we provide an operation name
// dprint-ignore
const cases = testEachQueryWithDescription([
  [`fg - one`             , { ___: { __typename: true } }],
  [`fg - multiple`        , { ___: [{ __typename: true }, { abcEnum: true }] }],
  [`fg - interface`       , { interface: { ___: { __typename: true } } }],
  [`fg - in union`        , { unionFooBar: { ___: { __typename: true } } }],
  [`fg - directive`       , { ___: { __typename: true, $include: true } }],
  // union
  [`union - __typename (no fragment)`  , { unionFooBar: { __typename: true } }],
  [`union - scalar`                    , { unionFooBar: { ___on_Bar: { int: true } } }],
  [`union - directive`                 , { unionFooBar: { ___on_Bar: { $skip: true, int: true } } }],
  // s({ unionFooBar: { __on_Bar: {} } }), // todo should be static type error
  // alias
  [`alias - scalar`                    , { id: [`x`, true] }],
  [`alias - scalar x2`                 , { id: [[`x`, true], [`id2`, true]] }],
  [`alias - scalar directive`          , { id: [`x`, { $skip: true }] }],
  [`alias - scalar directive+select`   , { object: [`x`, { $skip: true, id: true }] }],
    // arguments
  [`args - on union`                             , { result: { $: { $case: `Object1` }, __typename: true } }],
  [`args - string with args`                     , { stringWithArgs: { $: { boolean: true, float: 1 } } }],
  [`args - alias`                                , { stringWithArgs: [[`a`, { $: { id: `` }}]] }],
  [`args - x2 same`                              , { stringWithArgs: [[`a`, { $: { id: `` }}], [`b`,{$:{id:``}}]] }],
  [`args - string with args (empty object)`      , { stringWithArgs: { $: {} } }],
  [`args - object with args`                     , { objectWithArgs: { $: { id: `` }, id: true } }],
  [`args - object with args (empty object)`      , { objectWithArgs: { $: {}, id: true } }],
  // arguments - custom scalars
  [`args - custom scalar - arg field`                                , { dateArg: { $: { date: db.date0.getTime().toString() } } }],
  [`args - custom scalar - arg field in non-null`                    , { dateArgNonNull: { $: { date: db.date0.getTime().toString() } } }], 
  [`args - custom scalar - arg field in list`                        , { dateArgList: { $: { date: [db.date0.getTime().toString(), db.date1.getTime().toString()] } } }], 
  [`args - custom scalar - arg field in list (null)`                 , { dateArgList: { $: { date: null } } }],
  [`args - custom scalar - arg field in non-null list (with list)`   , { dateArgNonNullList: { $: { date: [db.date0.getTime().toString(), db.date1.getTime().toString()] } } }],
  [`args - custom scalar - arg field in non-null list (with null)`   , { dateArgNonNullList: { $: { date: [null, db.date0.getTime().toString()] } } }],
  [`args - custom scalar - arg field in non-null list non-null`      , { dateArgNonNullListNonNull: { $: { date: [db.date0.getTime().toString(), db.date1.getTime().toString()] } } }],
  [`args - custom scalar - input object field`                       , { dateArgInputObject: { $: { input: { idRequired: ``, dateRequired: db.date0.getTime().toString(), date: db.date1.getTime().toString() } } } }],
  [`args - custom scalar - nested input object field`                , { InputObjectNested: { $: { input: { InputObject: { idRequired: ``, dateRequired: db.date0.getTime().toString(), date: db.date1.getTime().toString() } } } } }],
  // s({ objectWithArgs: { $: { id: `` } } }), // todo should be static error
  // s({ objectWithArgs: { $: {} } }), // todo should be static error
  // $include
  [`$include`                             , { object: { $include: true, id: true } }],
  [`$include (false)`                     , { object: { $include: false, id: true } }],
  [`$include (undefined)`                 , { object: { $include: undefined, id: true } }],
  [`$include (if true)`                   , { object: { $include: { if: true }, id: true } }],
  [`$include (if false)`                  , { object: { $include: { if: false }, id: true } }],
  [`$include (if undefined)`              , { object: { $include: { if: undefined }, id: true } }],
  [`$include (empty object)`              , { object: { $include: {}, id: true } }],
  // skip
  [`$skip (true)`                         , { object: { $skip: true, id: true } }],
  [`$skip (false)`                        , { object: { $skip: false, id: true } }],
  [`$skip (undefined)`                    , { object: { $skip: undefined, id: true } }],
  [`$skip (if true)`                      , { object: { $skip: { if: true }, id: true } }],
  [`$skip (if false)`                     , { object: { $skip: { if: false }, id: true } }],
  [`$skip (if undefined)`                 , { object: { $skip: { if: undefined }, id: true } }],
  [`$skip (empty object)`                 , { object: { $skip: {}, id: true } }],
  [`object nested scalar $skip`           , { objectNested: { object: { string: true, id: true, int: { $skip: true } } } }],
  // other
  [`custom operation name`                , { id: true }, {operationName: `foobar` }],
  [`other`                                , { __typename: true }],
  [`string`                               , { string: true }],
  // [{ string: 1 }],
  // s({ string: false }), // todo should be static error
  [`id string false`                      , { id: true, string: false }],
  // [{ id: true, string: 0 }],
  [`id string undefined`                  , { id: true, string: undefined }],
  [`object scalar`                        , { object: { id: true } }],
  [`object nested`                        , { objectNested: { object: { string: true, id: true, int: false } } }],
])
cases(...tester({ variables: true, scalars: {} }))
cases(...tester({ variables: false, scalars: {} }))

// dprint-ignore
const customScalarWithCodecCases = testEachQueryWithDescriptionWithCustomScalars([
  [`args - custom scalar - arg field`                                , { dateArg: { $: { date: db.date0 } } }],
  [`args - custom scalar - arg field in non-null`                    , { dateArgNonNull: { $: { date: db.date0 } } }], 
  [`args - custom scalar - arg field in list`                        , { dateArgList: { $: { date: [db.date0, db.date1] } } }], 
  [`args - custom scalar - arg field in list (null)`                 , { dateArgList: { $: { date: null } } }],
  [`args - custom scalar - arg field in non-null list (with list)`   , { dateArgNonNullList: { $: { date: [db.date0, db.date1] } } }],
  [`args - custom scalar - arg field in non-null list (with null)`   , { dateArgNonNullList: { $: { date: [null, db.date0] } } }],
  [`args - custom scalar - arg field in non-null list non-null`      , { dateArgNonNullListNonNull: { $: { date: [db.date0, db.date1] } } }],
  [`args - custom scalar - input object field`                       , { dateArgInputObject: { $: { input: { idRequired: ``, dateRequired: db.date0, date: db.date1 } } } }],
  [`args - custom scalar - nested input object field`                , { InputObjectNested: { $: { input: { InputObject: { idRequired: ``, dateRequired: db.date0, date: db.date1 } } } } }],
])
customScalarWithCodecCases(...tester({ variables: true, scalars: { Date } }))
customScalarWithCodecCases(...tester({ variables: false, scalars: { Date } }))
