import { Docpar } from '#src/docpar/$.js'
import { GraffleBasic } from '#src/exports/presets/basic.js'
import { Grafaid } from '#src/lib/grafaid/$.js'
import type { Schema } from '#src/types/Schema/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { db } from '#test/schema/possible/db.js'
import { possibleSchema } from '#test/schema/possible/schema.js'
import { expect } from 'vitest'
import { DateScalar } from '../_/fixtures/scalars.js'
import { test } from '../_/helpers.js'
import { RequestSpy } from '../_/SpyExtension.js'

type QueryWithDate = Possible.SelectionSets.Query<{
  scalars: Schema.Scalar.Registry.AddScalar<Schema.Scalar.Registry.Empty, typeof DateScalar>
}>

type TestCase = [
  description: string,
  query: QueryWithDate,
  expectedVariables: object,
]

// todo test variable to a directive.
// dprint-ignore
const testCases = test.for<TestCase>([
	[`arg enum`                                , { stringWithArgEnum: { $: { $ABCEnum: `A` } } }                                                                               , { ABCEnum: `A` }],
	[`arg field`                               , { dateArg: { $: { date: db.date0 } } }                                                                                        , { date: db.date0Encoded }],
	[`arg field in non-null`                   , { dateArgNonNull: { $: { date: db.date0 } } }                                                                                 , { date: db.date0Encoded }],
	[`arg field in list`                       , { dateArgList: { $: { date: [db.date0, db.date1] } } }                                                                        , { date: [db.date0Encoded, db.date1Encoded] }],
	[`arg field in list (null)`                , { dateArgList: { $: { date: null } } }                                                                                        , { date: null } ],
	[`arg field in non-null list (with list)`  , { dateArgNonNullList: { $: { date: [db.date0, db.date1] } } }                                                                 , { date: [db.date0Encoded, db.date1Encoded] }],
	[`arg field in non-null list (with null)`  , { dateArgNonNullList: { $: { date: [null, db.date0] } } }                                                                     , { date: [null, db.date0Encoded] }],
	[`arg field in non-null list non-null`     , { dateArgNonNullListNonNull: { $: { date: [db.date0, db.date1] } } }                                                          , { date: [db.date0Encoded, db.date1Encoded] }],
	[`input object field`                      , { dateArgInputObject: { $: { input: { idRequired: ``, dateRequired: db.date0, date: db.date1 } } } }                          , { input: { idRequired: ``, dateRequired: db.date0Encoded, date: db.date1Encoded } }],
	[`nested input object field`               , { InputObjectNested: { $: { input: { InputObject: { idRequired: ``, dateRequired: db.date0, date: db.date1 }}}}}              , { input: { InputObject: { idRequired: ``, dateRequired: db.date0Encoded, date: db.date1Encoded } } }],
])

testCases(`%s`, async ([_, query, expectedVariables]) => {
  const g = GraffleBasic
    // todo: "name" is of type any
    .create({ schema: { map: Possible.schemaMap, name: Possible.Name } })
    .transport(`memory`, { schema: possibleSchema })
    .use(RequestSpy)
    .scalar(DateScalar)

  const { document, operationsVariables } = Docpar.Object.ToGraphQLDocument.toGraphQL(
    Docpar.Object.Select.Document.createDocumentNormalizedFromQuerySelection(query as any),
    {
      sddm: Possible.schemaMap,
      scalars: { Date: DateScalar },
    },
  )
  const documentString = Grafaid.Document.print(document)
  await (g.gql(documentString) as any).$send(operationsVariables[`$default`])
  expect(RequestSpy.spy.data.pack.input?.request.variables).toEqual(expectedVariables)
})
