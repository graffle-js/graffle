import type { Grafaid } from '#lib/grafaid/_namespace.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode } from 'graphql'
import { expect, test } from 'vitest'
import { Possible } from './__tests__/fixtures/possible/_namespace.js'
import { createStaticRootType } from './staticBuilder.js'
import { Var } from './var/$.js'

const $var = Var.$var

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
    [[query.user({ id: true, name: true })],                                  { y: [`user`, `id`, `name`],                                                        n: [`query (`, `$`] }],
    [[query.user({ $: { id: $var }, name: true })],                           { y: [`query ($id:`, `user(id: $id)`, `name`] }],
    [[query.user({ $: { id: $var.name(`userId`) }, name: true })],           { y: [`query ($userId:`, `user(id: $userId)`] }],
    [[query.users({ $: { first: $var.default(10) }, name: true })],          { y: [`$first:`, `= 10`, `users(first: $first)`] }],
    [[query.users({ $: { first: $var.name(`limit`).default(20) }, name: true })], { y: [`$limit:`, `= 20`, `users(first: $limit)`] }],
    [[query.users({ $: { first: 10, filter: $var }, name: true })],          { y: [`query ($filter:`, `users(first: 10, filter: $filter)`],                     n: [`$first`] }],
    [[mutation.createUser({ $: { input: $var }, id: true, name: true })],    { y: [`mutation ($input:`, `createUser(input: $input)`] }],
    [[subscription.onUserUpdate({ $: { userId: $var }, id: true, name: true })], { y: [`subscription ($userId:`, `onUserUpdate(userId: $userId)`] }],
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

// dprint-ignore
test('static builder type inference', () => {
  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ string: string | null }, {}>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ idNonNull: string }, {}>>()(q2)

  // Custom scalar
  const q3 = Possible.query.date(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ date: Date | null }, {}>>()(q3) // Custom scalar Date

  const q4 = Possible.query.dateNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ dateNonNull: Date }, {}>>()(q4)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, {}>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, {}>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, {}>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true, string: true, int: true, float: true, boolean: true })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ object: { id: string, string: string | null, int: number | null, float: number | null, boolean: boolean | null } | null }, {}>>()(q8)

  // Field with $var
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean: boolean | undefined }>>()(q9)

  // Required argument with $var
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }>>()(q10) // NOT undefined!

  // $var with default
  const q11 = Possible.query.stringWithArgs({ $: { int: $var.default(10) } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { int: number | undefined }>>()(q11)

  // $var with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $var.name('isActive') } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive: boolean | undefined }>>()(q12)

  // $var.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $var.required() } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }>>()(q12b) // NOT undefined!

  // Note: $var.optional() was removed - you cannot make required fields optional
  // Use .default() to provide a default value instead

  // List argument with $var
  const q13 = Possible.query.stringWithListArg({ $: { ints: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints: Array<number | null> | null | undefined }>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: Array<number> }>>()(q14)

  // Multiple $var types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $var, string: $var, int: $var, float: $var, id: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean: boolean | undefined, string: string | undefined, int: number | undefined, float: number | undefined, id: string | undefined }>>()(q15)

  // Mixed $var and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $var, int: 42 } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string | undefined }>>()(q16)

  // Nested selection
  const q17 = Possible.query.objectNested({ id: true, object: { id: true, string: true, int: true } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ objectNested: { id: string | null, object: { id: string, string: string | null, int: number | null } | null } | null }, {}>>()(q17)

  // Union type
  const q18 = Possible.query.unionFooBar({ ___on_Foo: { id: true }, Bar: { int: true } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ unionFooBar: { id?: string | null, int?: number | null } | null }, {}>>()(q18)

  // Interface type
  const q19 = Possible.query.interface({ id: true })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ interface: { id: string | null } | null }, {}>>()(q19)

  // Alias with $var on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    id: [`myId`, { $: { filter: $var } }],
    myObject: [`myObject`, { $: { boolean: $var, int: $var } }]
  })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ objectNestedWithArgs: { myId: string | null, myObject: { id: string, string: string | null, int: number | null, float: number | null, boolean: boolean | null, ABCEnum: 'A' | 'B' | 'C' | null } | null } | null }, { filter: string | undefined, boolean: boolean | undefined, int: number | undefined }>>()(q20)

  // Multiple aliases with different variables on nested object fields
  const q21 = Possible.query.objectNestedWithArgs({
    object: [
      [`first`, { $: { boolean: true } }],
      [`second`, { $: { int: $var } }]
    ]
  })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ objectNestedWithArgs: { first: { id: string, string: string | null, int: number | null, float: number | null, boolean: boolean | null, ABCEnum: 'A' | 'B' | 'C' | null } | null, second: { id: string, string: string | null, int: number | null, float: number | null, boolean: boolean | null, ABCEnum: 'A' | 'B' | 'C' | null } | null } | null }, { int: number | undefined }>>()(q21)
})
