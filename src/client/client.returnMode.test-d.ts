/* eslint-disable */
import { ExecutionResult } from 'graphql'
import { ObjMap } from 'graphql/jsutils/ObjMap.js'
import { describe } from 'node:test'
import { expectTypeOf, test } from 'vitest'
import { $Index as schemaIndex } from '../../tests/_/schema/generated/SchemaRuntime.js'
import { schema } from '../../tests/_/schema/schema.js'
import { GraphQLExecutionResultError } from '../lib/graphql.js'
import { create } from './client.js'

// dprint-ignore
describe('default is data', () => {
  const client = create({ schema, schemaIndex })
  test(`document`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).run()).resolves.toEqualTypeOf<{ id: string | null }>()
  })
  test('query field method', async () => {
    await expectTypeOf(client.query.__typename()).resolves.toEqualTypeOf<'Query'>()
  })
  test('query $batch', async () => {
    await expectTypeOf(client.query.$batch({ __typename: true, id: true })).resolves.toEqualTypeOf<{ __typename: 'Query', id: string|null }>()
  })
  test(`raw`, async () => {
    expectTypeOf(client.raw('query main {\nid\n}', {}, 'main')).resolves.toEqualTypeOf<ExecutionResult>()
  })
})

// dprint-ignore
describe('data', () => {
  const client = create({ schema, schemaIndex, returnMode: 'data' })
  test(`document`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).run()).resolves.toEqualTypeOf<{ id: string | null }>()
  })
  test('query field method', async () => {
    await expectTypeOf(client.query.__typename()).resolves.toEqualTypeOf<'Query'>()
  })
  test('query $batch', async () => {
    await expectTypeOf(client.query.$batch({ __typename: true, id: true })).resolves.toEqualTypeOf<{ __typename: 'Query', id: string|null }>()
  })
  test('result',async () => {
    const x = await client.query.result({$: { case: 'Object1' }, onObject1:{id:true},onErrorOne:{infoId:true},onErrorTwo:{infoInt:true}})
    await expectTypeOf(client.query.result({$: { case: 'Object1' }, onObject1:{id:true},onErrorOne:{infoId:true},onErrorTwo:{infoInt:true}})).resolves.toEqualTypeOf<null | { infoId: string | null } | { infoInt: number | null } | { id: null | string }>()
  })
  test(`raw`, async () => {
    expectTypeOf(client.raw('query main {\nid\n}', {}, 'main')).resolves.toEqualTypeOf<ExecutionResult>()
  })
})

// dprint-ignore
describe('dataAndAllErrors', () => {
  const client = create({ schema, schemaIndex, returnMode: 'dataAndAllErrors' })
  test(`document`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).run()).resolves.toEqualTypeOf<{ id: string | null } | GraphQLExecutionResultError>()
  })
  test(`document runOrThrow`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).runOrThrow()).resolves.toEqualTypeOf<{ id: string | null }>()
  })
  test('query field method', async () => {
    await expectTypeOf(client.query.__typename()).resolves.toEqualTypeOf<'Query' | GraphQLExecutionResultError>()
  })
  test('query $batch', async () => {
    await expectTypeOf(client.query.$batch({ __typename: true, id: true })).resolves.toEqualTypeOf<{ __typename: 'Query', id: string|null } | GraphQLExecutionResultError>()
  })
  test('result',async () => {
    const x = await client.query.result({$: { case: 'Object1' }, onObject1:{id:true},onErrorOne:{infoId:true},onErrorTwo:{infoInt:true}})
    await expectTypeOf(client.query.result({$: { case: 'Object1' }, onObject1:{id:true},onErrorOne:{infoId:true},onErrorTwo:{infoInt:true}})).resolves.toEqualTypeOf<null | { infoId: string | null } | { infoInt: number | null } | { id: null | string } | GraphQLExecutionResultError>()
  })
  test(`raw`, async () => {
    expectTypeOf(client.raw('query main {\nid\n}', {}, 'main')).resolves.toEqualTypeOf<ExecutionResult>()
  })
})

// dprint-ignore
describe('graphql', () => {
  const client = create({ schema, schemaIndex, returnMode: 'graphql' })
  test(`document`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).run()).resolves.toEqualTypeOf<ExecutionResult<{ id: string | null }, ObjMap<unknown>>>()
  })
  test(`document runOrThrow`, async () => {
    expectTypeOf(client.document({ main: { query: { id: true } } }).runOrThrow()).resolves.toEqualTypeOf<ExecutionResult<{ id: string | null }, ObjMap<unknown>>>()
  })
  test('query field method', async () => {
    await expectTypeOf(client.query.__typename()).resolves.toEqualTypeOf<ExecutionResult<{ __typename: 'Query' }>>()
  })
  test('query field methodOrThrow', async () => {
    await expectTypeOf(client.query.__typenameOrThrow()).resolves.toEqualTypeOf<ExecutionResult<{ __typename: 'Query' }>>()
  })
  test('query $batch', async () => {
    await expectTypeOf(client.query.$batch({ __typename: true, id: true })).resolves.toEqualTypeOf<ExecutionResult<{ __typename: 'Query', id: string|null }>>()
  })
  test('query $batchOrThrow', async () => {
    await expectTypeOf(client.query.$batchOrThrow({ __typename: true, id: true })).resolves.toEqualTypeOf<ExecutionResult<{ __typename: 'Query', id: string|null }>>()
  })
  test(`raw`, async () => {
    expectTypeOf(client.raw('query main {\nid\n}', {}, 'main')).resolves.toEqualTypeOf<ExecutionResult>()
  })
})
