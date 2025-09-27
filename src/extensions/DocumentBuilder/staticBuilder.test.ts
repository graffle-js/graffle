import { Test } from '@wollybeard/kit/test'
import { OperationTypeNode } from 'graphql'
import { expect } from 'vitest'
import { createStaticRootType } from './staticBuilder.js'
import { $var } from './variable.js'

const query = createStaticRootType(OperationTypeNode.QUERY)
const mutation = createStaticRootType(OperationTypeNode.MUTATION)
const subscription = createStaticRootType(OperationTypeNode.SUBSCRIPTION)

// dprint-ignore
Test.describe(`static document builder`)
  .i<{ builder: any; field: string; selection: any }>()
  .o<{ expected: string[]; notExpected?: string[] }>()
  .cases(
    {
      n: `simple query`,
      i: { builder: query, field: `user`, selection: { id: true, name: true } },
      o: { expected: [`user`, `id`, `name`], notExpected: [`query (`, `$`] },
    },
    {
      n: `$var creates variable`,
      i: { builder: query, field: `user`, selection: { $: { id: $var }, name: true } },
      o: { expected: [`query ($id:`, `user(id: $id)`, `name`] },
    },
    {
      n: `$var.name() renames variable`,
      i: { builder: query, field: `user`, selection: { $: { id: $var.name(`userId`) }, name: true } },
      o: { expected: [`query ($userId:`, `user(id: $userId)`] },
    },
    {
      n: `$var.default() adds default value`,
      i: { builder: query, field: `users`, selection: { $: { first: $var.default(10) }, name: true } },
      o: { expected: [`$first:`, `= 10`, `users(first: $first)`] },
    },
    {
      n: `$var chaining`,
      i: { builder: query, field: `users`, selection: { $: { first: $var.name(`limit`).default(20) }, name: true } },
      o: { expected: [`$limit:`, `= 20`, `users(first: $limit)`] },
    },
    {
      n: `mixed variables and literals`,
      i: { builder: query, field: `users`, selection: { $: { first: 10, filter: $var }, name: true } },
      o: { expected: [`query ($filter:`, `users(first: 10, filter: $filter)`], notExpected: [`$first`] },
    },
    {
      n: `mutation with variable`,
      i: { builder: mutation, field: `createUser`, selection: { $: { input: $var }, id: true, name: true } },
      o: { expected: [`mutation ($input:`, `createUser(input: $input)`] },
    },
    {
      n: `subscription with variable`,
      i: { builder: subscription, field: `onUserUpdate`, selection: { $: { userId: $var }, id: true, name: true } },
      o: { expected: [`subscription ($userId:`, `onUserUpdate(userId: $userId)`] },
    },
  )
  .test((input, output) => {
    const doc = input.builder[input.field](input.selection)

    for (const exp of output.expected) {
      expect(doc).toContain(exp)
    }

    if (output.notExpected) {
      for (const notExp of output.notExpected) {
        expect(doc).not.toContain(notExp)
      }
    }
  })
