import type { Grafaid } from '#lib/grafaid/_namespace.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode } from 'graphql'
import { expect, test } from 'vitest'
import { PossibleWithScalars } from './__tests__/fixtures/possible-with-scalars/_namespace.js'
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

test('type input validation', () => {
  // @ts-expect-error - Builder<1> should not be assignable to Builder<string>
  Possible.query.stringWithRequiredArg({
    $: {
      string: $var.default(1),
    },
  })
})

// dprint-ignore
test('type output inference', () => {
  // Nested object args
  const q0 = Possible.query.objectNestedWithArgs({ object: { $: { int: $var }, id:true}})
  Ts.assertEqual<Grafaid.Document.Typed.String<{objectNestedWithArgs:{object:{id:null|string}|null}|null}, { int?: number | undefined }>>()(q0)

  // Scalar fields
  const q1 = Possible.query.string(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ string: string | null }, never>>()(q1)

  const q2 = Possible.query.idNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ idNonNull: string }, never>>()(q2)

  // Custom scalar
  const q3 = Possible.query.date(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ date: string | null }, never>>()(q3)
  const q3b = PossibleWithScalars.query.date(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ date: Date | null }, never>>()(q3b)

  // Lists
  const q5 = Possible.query.listInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listInt: Array<number | null> | null }, never>>()(q5)

  const q6 = Possible.query.listIntNonNull(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listIntNonNull: Array<number> }, never>>()(q6)

  const q7 = Possible.query.listListInt(true)
  Ts.assertEqual<Grafaid.Document.Typed.String<{ listListInt: Array<Array<number | null> | null> | null }, never>>()(q7)

  // Object with fields
  const q8 = Possible.query.object({ id: true })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ object: { id:string|null } | null }, never>>()(q8)

  // Field with $var
  const q9 = Possible.query.stringWithArgs({ $: { boolean: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { boolean?: boolean | undefined }>>()(q9)

  // Required argument with $var
  const q10 = Possible.query.stringWithRequiredArg({ $: { string: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string: string }>>()(q10) // NOT undefined!

  // Required argument with $var eith default
  const q11 = Possible.query.stringWithRequiredArg({ $: { string: $var.default('abc') } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithRequiredArg: string | null }, { string?: string | undefined }>>()(q11)

  // $var with custom name
  const q12 = Possible.query.stringWithArgs({ $: { boolean: $var.name('isActive') } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { isActive?: boolean | undefined }>>()(q12)

  // $var.required() on optional argument
  const q12b = Possible.query.stringWithArgs({ $: { string: $var.required() } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string: string }>>()(q12b) // NOT undefined!

  // List argument with $var
  const q13 = Possible.query.stringWithListArg({ $: { ints: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArg: string | null }, { ints?: readonly (number)[] | undefined }>>()(q13)

  const q14 = Possible.query.stringWithListArgRequired({ $: { ints: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithListArgRequired: string | null }, { ints: readonly number[] }>>()(q14)

  // Multiple $var types
  const q15 = Possible.query.stringWithArgs({ $: { boolean: $var, string: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<
    { stringWithArgs: string | null },
    { boolean?: boolean | undefined, string?: string | undefined }
  >>()(q15)

  // Mixed $var and literals
  const q16 = Possible.query.stringWithArgs({ $: { boolean: true, string: $var, int: 42 } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string | null }, { string?: string | undefined }>>()(q16)

  const p = Possible.create()
  const x = p.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $var }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $var } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$var}}]
  })

  // Alias with $var on nested object field
  const q20 = Possible.query.objectNestedWithArgs({
    object: ['object2', { $: { int: $var }, id:true }]
    // TODO: this should be a type error! (no fields selected, just $)
    // object: ['object2', { $: { int: $var } }]
    // TODO: this should be a type error!
    // id: ['id2', {$:{filter:$var}}]
  })
  Ts.assertEqual<Grafaid.Document.Typed.String<
    { objectNestedWithArgs: { object2: { id: string | null } | null } | null },
    { int?: number | undefined }
  >>()(q20)
})
