import { Test } from '@wollybeard/kit/test'
import { expect, test } from 'vitest'
import { Document } from '../_.js'
import { Schema } from '../../schema/_.js'
import { Var } from './object/var/_.js'

const $ = Var.$

// ==================================================================================================
//                                   Static Root Type Builders (Runtime)
// ==================================================================================================

const query = Document.Object.Static.createStaticRootType(Schema.OperationType.QUERY) as any
const mutation = Document.Object.Static.createStaticRootType(Schema.OperationType.MUTATION) as any
const subscription = Document.Object.Static.createStaticRootType(
  Schema.OperationType.SUBSCRIPTION,
) as any

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
  const manualQuery = Document.Object.Static.createStaticRootType(
    Schema.OperationType.QUERY,
  ) as any
  const doc = manualQuery.someField({ id: true })

  // Runtime behavior is identical to generated usage
  expect(typeof doc).toBe('string')
  expect(doc).toContain('someField')
  expect(doc).toContain('id')
})
