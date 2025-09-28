import type { Grafaid } from '#lib/grafaid/_namespace.js'
import { Ts } from '@wollybeard/kit'
import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode } from 'graphql'
import { expect, test } from 'vitest'
import { Possible } from './__tests__/fixtures/possible/_namespace.js'
import { createStaticRootType } from './staticBuilder.js'
import { $var } from './variable.js'

// Phantom value for type casting
const _ = null as any

const query = createStaticRootType(OperationTypeNode.QUERY)
const mutation = createStaticRootType(OperationTypeNode.MUTATION)
const subscription = createStaticRootType(OperationTypeNode.SUBSCRIPTION)

// dprint-ignore
Test.describe(`static document builder`)
  .i<{ builder: any; field: string; selection: any }>()
  .o<{ y: string[]; n?: string[] }>()
  .cases(
    {
      n: `simple query`,
      i: { builder: query, field: `user`, selection: { id: true, name: true } },
      o: { y: [`user`, `id`, `name`], n: [`query (`, `$`] },
    },
    {
      n: `$var creates variable`,
      i: { builder: query, field: `user`, selection: { $: { id: $var }, name: true } },
      o: { y: [`query ($id:`, `user(id: $id)`, `name`] },
    },
    {
      n: `$var.name() renames variable`,
      i: { builder: query, field: `user`, selection: { $: { id: $var.name(`userId`) }, name: true } },
      o: { y: [`query ($userId:`, `user(id: $userId)`] },
    },
    {
      n: `$var.default() adds default value`,
      i: { builder: query, field: `users`, selection: { $: { first: $var.default(10) }, name: true } },
      o: { y: [`$first:`, `= 10`, `users(first: $first)`] },
    },
    {
      n: `$var chaining`,
      i: { builder: query, field: `users`, selection: { $: { first: $var.name(`limit`).default(20) }, name: true } },
      o: { y: [`$limit:`, `= 20`, `users(first: $limit)`] },
    },
    {
      n: `mixed variables and literals`,
      i: { builder: query, field: `users`, selection: { $: { first: 10, filter: $var }, name: true } },
      o: { y: [`query ($filter:`, `users(first: 10, filter: $filter)`], n: [`$first`] },
    },
    {
      n: `mutation with variable`,
      i: { builder: mutation, field: `createUser`, selection: { $: { input: $var }, id: true, name: true } },
      o: { y: [`mutation ($input:`, `createUser(input: $input)`] },
    },
    {
      n: `subscription with variable`,
      i: { builder: subscription, field: `onUserUpdate`, selection: { $: { userId: $var }, id: true, name: true } },
      o: { y: [`subscription ($userId:`, `onUserUpdate(userId: $userId)`] },
    },
  )
  .test((input, output) => {
    const doc = input.builder[input.field](input.selection)

    for (const y of output.y) {
      expect(doc).toContain(y)
    }

    if (output.n) {
      for (const n of output.n) {
        expect(doc).not.toContain(n)
      }
    }
  })

test('static builder type inference', () => {
  const actual = Possible.query.object({ id: true })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ object: { id: string } }, {}>>()(actual)
})

test('static builder type inference with $var', () => {
  const actual = Possible.query.stringWithArgs({ $: { boolean: $var } })
  Ts.assertEqual<Grafaid.Document.Typed.String<{ stringWithArgs: string }, { boolean: boolean }>>()(actual)
})
