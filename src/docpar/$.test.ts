import { Docpar } from '#src/docpar/$.js'
import type * as Doc from '#src/docpar/core/doc.js'
import { Var } from '#src/docpar/object/var/$.js'
import type { Grafaid } from '#src/lib/grafaid/$.js'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode, parse, print } from 'graphql'
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
//                                   Static Root Type Builders
// ==================================================================================================

const query = Docpar.Object.Static.createStaticRootType(OperationTypeNode.QUERY) as any
const mutation = Docpar.Object.Static.createStaticRootType(OperationTypeNode.MUTATION) as any
const subscription = Docpar.Object.Static.createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any

// dprint-ignore
Test.describe(`static document builder > root type builders`)
  .inputType<string>()
  .outputType<{ y: string[]; n?: string[] }>()
  .cases(
    [query.user({ id: true, name: true }),                              { y: [`user`, `id`, `name`],                                                        n: [`query (`, `$`] }],
    [query.user({ $: { id: $ }, name: true }),                          { y: [`query ($id:`, `user(id: $id)`, `name`] }],
    [query.user({ $: { id: $.name(`userId`) }, name: true }),           { y: [`query ($userId:`, `user(id: $userId)`] }],
    [query.users({ $: { first: $.default(10) }, name: true }),          { y: [`$first:`, `= 10`, `users(first: $first)`] }],
    [query.users({ $: { first: $.name(`limit`).default(20) }, name: true }), { y: [`$limit:`, `= 20`, `users(first: $limit)`] }],
    [query.users({ $: { first: 10, filter: $ }, name: true }),          { y: [`$first:`, `$filter:`, `users(first: $first, filter: $filter)`] }],
    [mutation.createUser({ $: { input: $ }, id: true, name: true }),    { y: [`mutation ($input:`, `createUser(input: $input)`] }],
    [subscription.onUserUpdate({ $: { userId: $ }, id: true, name: true }), { y: [`subscription ($userId:`, `onUserUpdate(userId: $userId)`] }],
  )
  .test(({ input, output }) => {
    for (const y of output.y) {
      expect(input).toContain(y)
    }

    if (output.n) {
      for (const n of output.n) {
        expect(input).not.toContain(n)
      }
    }
  })

test('static document builder > conflict resolution: $ marker and auto-hoisted both want same name', () => {
  const doc = query.stringWithArgs({
    $: {
      string: $.name('userId'), // Explicit: wants "userId"
      userId: 'literal-value', // Auto-hoisted: also wants "userId"
    },
  })

  // Verify: Both variables exist but with different names
  expect(doc).toContain('$userId') // Explicit $ gets the name
  expect(doc).toContain('$userId_2') // Auto-hoisted gets renamed
  expect(doc).toContain('string: $userId')
  expect(doc).toContain('userId: $userId_2')
})

test('static document builder > hoistArguments: false - inline args NOT hoisted, $ still extracted', () => {
  const doc = query.stringWithArgs(
    {
      $: {
        string: $.name('explicitVar'), // Should be variable
        int: 42, // Should be inline
      },
    },
    { hoistArguments: false }, // Local override
  )

  // Verify: $ is extracted
  expect(doc).toContain('$explicitVar')
  expect(doc).toContain('string: $explicitVar')

  // Verify: inline arg is NOT extracted (appears as literal)
  expect(doc).toContain('int: 42')
  expect(doc).not.toContain('$int')
})

test('static document builder > manual createStaticRootType usage - runtime works without types', () => {
  // Manual usage without generated types - factory returns untyped documents
  const manualQuery = Docpar.Object.Static.createStaticRootType(OperationTypeNode.QUERY) as any
  const doc = manualQuery.someField({ id: true })

  // Runtime behavior is identical to generated usage
  expect(typeof doc).toBe('string')
  expect(doc).toContain('someField')
  expect(doc).toContain('id')
})

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

// ==================================================================================================
//                                 Static Root Type Builder Type Output Inference
// ==================================================================================================

// dprint-ignore
test('static root type builder > type output inference', () => {
  // Nested object args
  const q0 = Possible.query.objectNestedWithArgs({ object: { $: { int: $ }, id:true}})
  Ts.Test.exact<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | null | undefined }, true>>()(q0)

  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ string: string | null }, {}, true>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ idNonNull: string }, {}, true>>()(q2)

  // Custom scalar - without custom scalar codecs defined
  const q3 = Possible.query.date(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ date: Date | null }, {}, true>>()(q3)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}, true>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}, true>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.Test.exact<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}, true>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, {}, true>>()(q8)

  // Field with $
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | null | undefined }, true>>()(q9)

  // Required argument with $
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }, true>>()(q10) // NOT undefined!

  // Required argument with $ with default
  const q11 = Possible.query.stringWithRequiredArg({ $: { string: $.default('abc') } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }, true>>()(q11)

  // $ with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $.name('isActive') } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | null | undefined }, true>>()(q12)

  // $.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $.required() } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }, true>>()(q12b) // NOT undefined!

  // List argument with $
  const q13 = Possible.query.stringWithListArg({ $: { ints: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | null | undefined }, true>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }, true>>()(q14)

  // Multiple $ types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $, string: $ } })
  Ts.Test.exact<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | null | undefined, string?: string | null | undefined },
    true
  >>()(q15)

  // Mixed $ and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $, int: 42 } })
  Ts.Test.exact<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | null | undefined }, true>>()(q16)

  // Alias with $ on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $ }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $ } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$}}]
  })
  Ts.Test.exact<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | null | undefined },
    true
  >>()(q20)
})

// ==================================================================================================
//                                   Single operation, no variables
// ==================================================================================================

type SingleOpNoVars = Doc.Document<
  Doc.Operation<'myQuery', { date: Date | null }, {}>
>

Ts.Test.exact<SingleOpNoVars>()(Possible.gql(`query myQuery { date }`))
Ts.Test.bid<SingleOpNoVars>()(Possible.gql({ query: { myQuery: { date: true } } }))

// ==================================================================================================
//                                 Single operation, required variables
// ==================================================================================================

type SingleOpRequiredVars = Doc.Document<
  Doc.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
>

Ts.Test.exact<SingleOpRequiredVars>()(Possible.gql(`query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }`))
// dprint-ignore
Ts.Test.bid<SingleOpRequiredVars>()(Possible.gql({ query: { getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } } } }))

// ==================================================================================================
//                                 Single operation, optional variables
// ==================================================================================================

type SingleOpOptionalVars = Doc.Document<
  Doc.Operation<'search', { stringWithArgs: string | null }, { string?: string | null | undefined }>
>

Ts.Test.exact<SingleOpOptionalVars>()(
  Possible.gql(`query search($string: String) { stringWithArgs(string: $string) }`),
)
Ts.Test.bid<SingleOpOptionalVars>()(
  Possible.gql({ query: { search: { stringWithArgs: { $: { string: $ }, __typename: true } } } }),
)

// ==================================================================================================
//                                   Anonymous operation (no name)
// ==================================================================================================

type DefaultOpNoVars = Doc.Document<
  Doc.Operation<'default', { id: string | null }, {}>
>

type DefaultOpWithScalar = Doc.Document<
  Doc.Operation<'default', { date: Date | null }, {}>
>

type DefaultOpOptionalVars = Doc.Document<
  Doc.Operation<'default', { stringWithArgs: string | null }, { string?: string | null | undefined }>
>

Ts.Test.exact<DefaultOpNoVars>()(Possible.gql(`{ id }`))
Ts.Test.exact<DefaultOpNoVars>()(Possible.gql({ query: { default: { id: true } } }))

Ts.Test.exact<DefaultOpWithScalar>()(Possible.gql(`{ date }`))
Ts.Test.exact<DefaultOpWithScalar>()(Possible.gql({ query: { default: { date: true } } }))

Ts.Test.exact<DefaultOpOptionalVars>()(Possible.gql(`query ($string: String) { stringWithArgs(string: $string) }`))
Ts.Test.exact<DefaultOpOptionalVars>()(Possible.gql({ query: { default: { stringWithArgs: { $: { string: $ } } } } }))

// ==================================================================================================
//                                   Multiple operations, no variables
// ==================================================================================================

type MultiOpNoVars = Doc.Document<
  | Doc.Operation<'getUser', { id: string | null }, {}>
  | Doc.Operation<'addId', { id: string | null }, {}>
>

Ts.Test.exact<MultiOpNoVars>()(Possible.gql(`
  query getUser { id }
  mutation addId { id }
`))
Ts.Test.bid<MultiOpNoVars>()(Possible.gql({
  query: { getUser: { id: true } },
  mutation: { addId: { id: true } },
}))

// ==================================================================================================
//                                   Multiple operations with variables
// ==================================================================================================

type MultiOpWithVars = Doc.Document<
  | Doc.Operation<'getById', { interfaceWithArgs: { id: string | null } | null }, { id: string }>
  | Doc.Operation<'setId', { idNonNull: string }, {}>
>

Ts.Test.exact<MultiOpWithVars>()(
  Possible.gql(`
    query getById($id: ID!) { interfaceWithArgs(id: $id) { id } }
    mutation setId { idNonNull }
  `),
)
Ts.Test.bid<MultiOpWithVars>()(
  Possible.gql({
    query: {
      getById: { interfaceWithArgs: { $: { id: $.required() }, id: true } },
    },
    mutation: {
      setId: { idNonNull: true },
    },
  }),
)

// ==================================================================================================
//                                           Error cases
// ==================================================================================================

// @ts-expect-error - invalid document object
Possible.gql({ query: { foo: true } })
// If GQL LSP is running, this will be an error in IDE, but its not a TS error e.g. we cannot use expect-error here
// Possible.gql(`query { foo }`)
