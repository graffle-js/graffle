import { expect } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { db } from '../../../tests/_/schemas/db.js'
import type { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { schemaDrivenDataMap } from '../../../tests/_/schemas/kitchen-sink/graffle/modules/SchemaDrivenDataMap.js'
import { Spy } from '../../../tests/_/SpyExtension.js'
import { Select } from '../../layers/2_Select/__.js'
import { SelectionSetGraphqlMapper } from '../../layers/3_SelectGraphQLMapper/__.js'
import { Grafaid } from '../../lib/grafaid/__.js'

const date0Encoded = db.date0.toISOString()
const date1Encoded = db.date1.toISOString()

type TestCase = [
  description: string,
  query: Graffle.SelectionSets.Query,
  expectedVariables: object,
]

// todo test variable to a directive.
// dprint-ignore
const testCases = test.for<TestCase>([
	[`arg enum`                                , { stringWithArgEnum: { $: { $ABCEnum: `A` } } }                                                                               , { ABCEnum: `A` }],
	[`arg field`                               , { dateArg: { $: { date: db.date0 } } }                                                                                        , { date: date0Encoded }],
	[`arg field in non-null`                   , { dateArgNonNull: { $: { date: db.date0 } } }                                                                                 , { date: date0Encoded }],
	[`arg field in list`                       , { dateArgList: { $: { date: [db.date0, db.date1] } } }                                                                        , { date: [date0Encoded, date1Encoded] }],
	[`arg field in list (null)`                , { dateArgList: { $: { date: null } } }                                                                                        , { date: null } ],
	[`arg field in non-null list (with list)`  , { dateArgNonNullList: { $: { date: [db.date0, db.date1] } } }                                                                 , { date: [date0Encoded, date1Encoded] }],
	[`arg field in non-null list (with null)`  , { dateArgNonNullList: { $: { date: [null, db.date0] } } }                                                                     , { date: [null, date0Encoded] }],
	[`arg field in non-null list non-null`     , { dateArgNonNullListNonNull: { $: { date: [db.date0, db.date1] } } }                                                          , { date: [date0Encoded, date1Encoded] }],
	[`input object field`                      , { dateArgInputObject: { $: { input: { idRequired: ``, dateRequired: db.date0, date: db.date1 } } } }                          , { input: { idRequired: ``, dateRequired: date0Encoded, date: date1Encoded } }],
	[`nested input object field`               , { InputObjectNested: { $: { input: { InputObject: { idRequired: ``, dateRequired: db.date0, date: db.date1 }}}}}              , { input: { InputObject: { idRequired: ``, dateRequired: date0Encoded, date: date1Encoded } } }],
])

testCases(`%s`, async ([_, query, expectedVariables], { kitchenSink }) => {
  const { document, operationsVariables } = SelectionSetGraphqlMapper.toGraphQL(
    Select.Document.createDocumentNormalizedFromQuerySelection(query as any),
    {
      sddm: schemaDrivenDataMap,
      operationVariables: true,
    },
  )
  const documentString = Grafaid.Document.print(document)
  await kitchenSink.use(Spy()).gql(documentString).send(operationsVariables[`$default`])
  expect(Spy.data.pack.input?.request.variables).toEqual(expectedVariables)
})
