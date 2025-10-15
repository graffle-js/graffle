import { Var } from '#src/docpar/object/var/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Test } from '@wollybeard/kit/test'
import { parse, print } from 'graphql'
import { expect, test } from 'vitest'

const $ = Var.$
type $ = typeof $

// ==================================================================================================
//                                   Basic Document Generation
// ==================================================================================================

Test
  .describe('static document builder')
  .on((doc: Possible.SelectionSets.$Document) => Possible.gql(doc as any))
  .case({ query: { getUser: { id: true, idNonNull: true } } })
  .case({ query: { getUser: { id: true }, getPost: { idNonNull: true } } })
  .case({ query: { getUserWithArg: { stringWithRequiredArg: { $: { string: $ } } } } })
  .case({ query: { getUser: { id: true } }, mutation: { updateUser: { id: true } } })
  .test()

// ==================================================================================================
//                                   Documents are Plain Strings
// ==================================================================================================

test('gql() returns plain string compatible with standard GraphQL APIs', () => {
  // Both string and object syntax return plain strings (with type branding)
  const stringDoc = Possible.gql(`query { date }`)
  const objectDoc = Possible.gql({ query: { myQuery: { date: true } } })

  // Verify they're plain strings at runtime
  expect(typeof stringDoc).toBe('string')
  expect(typeof objectDoc).toBe('string')

  // Documents are string intersection types (string & { ... })
  // This makes them directly assignable to string parameters
  const stringAst = parse(stringDoc)
  const objectAst = parse(objectDoc)

  expect(stringAst.kind).toBe('Document')
  expect(objectAst.kind).toBe('Document')

  // Verify they can be printed back (roundtrip)
  expect(typeof print(stringAst)).toBe('string')
  expect(typeof print(objectAst)).toBe('string')
})

test('gql() string documents work with any GraphQL client', () => {
  const doc = Possible.gql({ query: { getUser: { id: true, idNonNull: true } } })

  // Simulate passing to a standard GraphQL client (like graphql-request, urql, apollo, etc.)
  // These clients accept plain string documents
  const mockGraphQLClient = {
    request: (document: string, variables?: any) => {
      // Standard clients just need strings
      expect(typeof document).toBe('string')
      return Promise.resolve({})
    },
  }

  // Documents are string & { ... }, so they work directly where strings are expected
  mockGraphQLClient.request(doc)
})

// ==================================================================================================
//                                   Generated Static Interface (Schema-Specific)
// ==================================================================================================

test('static document builder > SDDM type branding - runtime verification', () => {
  // Test that generated documents are properly branded with SDDM=true
  const generatedDoc = Possible.query.string(true)

  // Runtime: document is a string
  expect(typeof generatedDoc).toBe('string')
})

// ==================================================================================================
//                                   Type-Level GQL Tests
// ==================================================================================================

// ==================================================================================================
//                                 Static Root Type Builder Type Input Validation
// ==================================================================================================

test('static root type builder > type input validation', () => {
  // @ts-expect-error - Builder<1> should not be assignable to Builder<string>
  Possible.query.stringWithRequiredArg({
    $: {
      string: $.default(1),
    },
  })
})
