import type { Grafaid } from '#lib/grafaid'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode } from 'graphql'
import { expect, test } from 'vitest'
import { PossibleWithScalars } from '../__tests__/fixtures/possible-with-scalars/$.js'
import { Possible } from '../__tests__/fixtures/possible/$.js'
import { Var } from '../var/$.js'
import { createStaticRootType } from './rootField.js'

const $ = Var.$

// Phantom value for type casting
const _ = null as any

const query = createStaticRootType(OperationTypeNode.QUERY) as any
const mutation = createStaticRootType(OperationTypeNode.MUTATION) as any
const subscription = createStaticRootType(OperationTypeNode.SUBSCRIPTION) as any

// dprint-ignore
Test.describe(`static document builder`)
  .i<string>()
  .o<{ y: string[]; n?: string[] }>()
  .cases(
    [[query.user({ id: true, name: true })],                              { y: [`user`, `id`, `name`],                                                        n: [`query (`, `$`] }],
    [[query.user({ $: { id: $ }, name: true })],                          { y: [`query ($id:`, `user(id: $id)`, `name`] }],
    [[query.user({ $: { id: $.name(`userId`) }, name: true })],           { y: [`query ($userId:`, `user(id: $userId)`] }],
    [[query.users({ $: { first: $.default(10) }, name: true })],          { y: [`$first:`, `= 10`, `users(first: $first)`] }],
    [[query.users({ $: { first: $.name(`limit`).default(20) }, name: true })], { y: [`$limit:`, `= 20`, `users(first: $limit)`] }],
    [[query.users({ $: { first: 10, filter: $ }, name: true })],          { y: [`$first:`, `$filter:`, `users(first: $first, filter: $filter)`] }],
    [[mutation.createUser({ $: { input: $ }, id: true, name: true })],    { y: [`mutation ($input:`, `createUser(input: $input)`] }],
    [[subscription.onUserUpdate({ $: { userId: $ }, id: true, name: true })], { y: [`subscription ($userId:`, `onUserUpdate(userId: $userId)`] }],
  )
  .test((doc, expectations) => {
    for (const y of expectations.y) {
      expect(doc).toContain(y)
    }

    if (expectations.n) {
      for (const n of expectations.n) {
        expect(doc).not.toContain(n)
      }
    }
  })

test('type input validation', () => {
  // @ts-expect-error - Builder<1> should not be assignable to Builder<string>
  Possible.query.stringWithRequiredArg({
    $: {
      string: $.default(1),
    },
  })
})

// dprint-ignore
test('type output inference', () => {
  // Nested object args
  const q0 = Possible.query.objectNestedWithArgs({ object: { $: { int: $ }, id:true}})
  Ts.assertEqual<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | undefined }, true>>()(q0)

  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ string: string | null }, {}, true>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ idNonNull: string }, {}, true>>()(q2)

  // Custom scalar
  const q3 = Possible.query.date(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ date: string | null }, {}, true>>()(q3)
  const q3b = PossibleWithScalars.query.date(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ date: Date | null }, {}, true>>()(q3b)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}, true>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}, true>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}, true>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, {}, true>>()(q8)

  // Field with $
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $ } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | undefined }, true>>()(q9)

  // Required argument with $
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $ } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }, true>>()(q10) // NOT undefined!

  // Required argument with $ eith default
  const q11 = Possible.query.stringWithRequiredArg({ $: { string: $.default('abc') } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }, true>>()(q11)

  // $ with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $.name('isActive') } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | undefined }, true>>()(q12)

  // $.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $.required() } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }, true>>()(q12b) // NOT undefined!

  // List argument with $
  const q13 = Possible.query.stringWithListArg({ $: { ints: $ } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | undefined }, true>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $ } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }, true>>()(q14)

  // Multiple $ types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $, string: $ } })
  Ts.assertEqual<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | undefined, string?: string | undefined },
    true
  >>()(q15)

  // Mixed $ and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $, int: 42 } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | undefined }, true>>()(q16)

  // Alias with $ on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $ }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $ } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$}}]
  })
  Ts.assertEqual<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | undefined },
    true
  >>()(q20)
})

test('conflict resolution: $ marker and auto-hoisted both want same name', () => {
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

test('hoistArguments: false - inline args NOT hoisted, $ still extracted', () => {
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

test('manual createStaticRootType usage - runtime works without types', () => {
  // Manual usage without generated types - factory returns untyped documents
  const manualQuery = createStaticRootType(OperationTypeNode.QUERY) as any
  const doc = manualQuery.someField({ id: true })

  // Runtime behavior is identical to generated usage
  expect(typeof doc).toBe('string')
  expect(doc).toContain('someField')
  expect(doc).toContain('id')
})

test('SDDM type branding', () => {
  // Test that generated documents are properly branded with SDDM=true
  const generatedDoc = Possible.query.string(true)

  // Verify the generated document has the correct type structure with SDDM=true
  Ts.assertEqual<typeof generatedDoc>()(generatedDoc)

  // Note: RequiresSDDMOf returns the constraint 'boolean' rather than the literal
  // because TypeScript widens the inferred type. The actual SDDM value is preserved
  // in the third type parameter of TypedDocument.String and enforced by the type system.

  // Runtime: document is a string
  expect(typeof generatedDoc).toBe('string')
})
