import { expect, test } from 'vitest'
import { DocumentBuilder } from '../DocumentBuilder/__.js'
import { injectTypenameOnRootResultFields } from './injectTypenameOnRootResultFields.js'
import { GraffleSchemaErrors } from './tests/fixture/graffle/__.js'

type CasesQuery = [
  description: string,
  queryWithoutTypename: GraffleSchemaErrors.SelectionSets.Query,
  queryWithTypename: GraffleSchemaErrors.SelectionSets.Query,
]

// dprint-ignore
test.each<CasesQuery>([
  [`one result field`,
    { resultNonNull: {} },
    { resultNonNull: { __typename: true } }],
  [`two result fields`,
    { resultNonNull: {}, result: { $: { $case: `ErrorOne` } } },
    { resultNonNull: { __typename: true }, result: { $: { $case: `ErrorOne` }, __typename: true }}],
  [`no result fields`,
    { id: true, object: { id: true } },
    { id: true, object: { id: true } }],
  [`__typename in fragment`,
    { resultNonNull: { ___: { __typename: true } } },
    { resultNonNull: { ___: { __typename: true }, __typename: true }}],
  [`root field in fragment`,
    { ___: { resultNonNull: {} } },
    { ___: { resultNonNull: { __typename: true } } }],
  [`root field in fragment in alias`,
    { ___: { resultNonNull: [`x`, {}] } },
    { ___: { resultNonNull: [`x`, { __typename: true }] }, }],
  [`root field alias `,
    { resultNonNull: [`x`, {}] },
    { resultNonNull: [`x`, { __typename: true }] }],
])(`Query %s`, (_, queryWithoutTypenameInput, queryWithTypenameInput) => {
  const docWithout = DocumentBuilder.SelectionSetGraphqlMapper.toGraphQL(
   DocumentBuilder.Select.Document.normalizeOrThrow({ query: { x: queryWithoutTypenameInput as any } }),
  )
  const docWith = DocumentBuilder.SelectionSetGraphqlMapper.toGraphQL(
   DocumentBuilder.Select.Document.normalizeOrThrow({ query: { x: queryWithTypenameInput as any } }),
  )
  injectTypenameOnRootResultFields({
    request: DocumentBuilder.graffleMappedResultToRequest(docWithout),
    sddm: GraffleSchemaErrors.schemaMap,
  })
  expect(docWithout.document).toMatchObject(docWith.document)
})
