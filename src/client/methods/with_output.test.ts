/* eslint-disable */
import { type ExecutionResult } from 'graphql'
import { describe } from 'node:test'
import { expect, expectTypeOf } from 'vitest'
// import { schema } from '../../../../tests/_/fixtures/schemas/kitchen-sink/schema.js'
import { schema } from '../../../tests/_/fixtures/schemas/query-only/schema.js'
import { ATransport } from '../../../tests/_/fixtures/transports.js'
import { g0, test } from '../../../tests/_/helpers.js'
import { TransportMemory } from '../../extensions/TransportMemory/TransportMemory.js'
import type { Anyware } from '../../lib/anyware/_namespace.js'
import { assertEqual } from '../../lib/assert-equal.js'
import { type GraphQLExecutionResultError } from '../../lib/grafaid/graphql.js'
import { create } from '../client.js'

const g1 = g0.use(TransportMemory).transport({ schema })
// const G = Graffle.create

// const defaultGraffle = Graffle.create({ check: { preflight: false } })

test('default is throws errors', async () => {
  await expect(g1.gql('').send()).rejects.toThrowErrorMatchingInlineSnapshot(
    `[ContextualAggregateError: One or more errors in the execution result.]`,
  )
})
test('can return errors', async () => {
  const g2 = g1.with({ output: { defaults: { errorChannel: 'return' } } })
  const result = await g2.gql('').send()
  expect(result).toMatchInlineSnapshot(`[ContextualAggregateError: One or more errors in the execution result.]`)
})

// // test('default is errors thrown, no envelope, no schema errors', async () => {
// //   const graffle = create({
// //     checkPreflight: false,
// //     output: {
// //       defaults: {
// //         errorChannel: 'throw',
// //       },
// //       envelope: {
// //         enabled: false,
// //         errors: {
// //           execution: true,
// //           other: false,
// //         },
// //       },
// //       errors: {
// //         execution: 'default',
// //         other: 'default',
// //       },
// //     },
// //   })
// //   const result1 = await graffle.query.__typename()
// //   const result2 = await defaultGraffle.query.__typename()
// //   expectTypeOf(result1).toEqualTypeOf<'Query'>()
// //   expectTypeOf(result2).toEqualTypeOf<'Query'>()
// // })

// // dprint-ignore
// describe('.envelope', () => {
//   type FieldMethodResultDisabled = 'Query'
//   type FieldMethodResultEnabled = ExecutionResult<{ __typename: FieldMethodResultDisabled }>

//   // type ResultFieldMethodResultDisabled = {
//   //   __typename: 'Object1'
//   // } | {
//   //   __typename: 'ErrorOne'
//   // } | {
//   //   __typename: 'ErrorTwo'
//   // }
//   // type ResultFieldMethodResultEnabled = ExecutionResult<{ resultNonNull: ResultFieldMethodResultDisabled }>

//   // todo reference to Graffle client
//   // const fieldMethod = <$Graffle extends {query:{__typename:()=>Promise<any>}}>(g: $Graffle) => g.query.__typename()

//   describe('false disables it ', () => {
//     const g = G({ output: { envelope: false }, checkPreflight: false })

//     test('query.<fieldMethod>', ({ kitchenSink }) => {
//       expectTypeOf(g.query.__typename()).resolves.toEqualTypeOf<FieldMethodResultDisabled>()
//     })
//     // test('query.<resultFieldMethod>', () => {
//     //   expectTypeOf(g.query.resultNonNull(resultFieldSelect)).resolves.toEqualTypeOf<ResultFieldMethodResultDisabled>()
//     // })
//     test('query.$batch', async () => {
//       expectTypeOf(await g.query.$batch({ __typename: true, idNonNull: true })).toEqualTypeOf<{ __typename: 'Query'; idNonNull: string } | null>()
//     })
//   })
//   describe('true enables it',  () => {
//     const g = Graffle.create({ output: { envelope: true }, checkPreflight: false })
//     test('query.<fieldMethod>', () => {
//       expectTypeOf(g.query.__typename()).resolves.toMatchTypeOf<FieldMethodResultEnabled>()
//     })
//     // test('query.<resultFieldMethod>', async () => {
//     //   expectTypeOf((await g.query.resultNonNull(resultFieldSelect))).toMatchTypeOf<ResultFieldMethodResultEnabled>()
//     // })
//     test('query.$batch', () => {
//       const result = g.query.$batch({ __typename: true, idNonNull: true })
//       assertEqual<typeof result, ExecutionResult<{ __typename: 'Query'; idNonNull: string }>>
//     })
//   })
//   test('object enables it', async () => {
//     const graffle = Graffle.create({ output: { envelope: {} }, checkPreflight: false })
//     expectTypeOf(await graffle.query.__typename()).toMatchTypeOf<FieldMethodResultEnabled>()
//   })
//   describe('.enabled', () => {
//     test('false disables it', async () => {
//       const graffle = Graffle.create({ output: { envelope: { enabled: false } }, checkPreflight: false })
//       expectTypeOf(await graffle.query.__typename()).toEqualTypeOf<FieldMethodResultDisabled>()
//     })
//     test('true enables it', async () => {
//       const graffle = Graffle.create({ output: { envelope: { enabled: true } }, checkPreflight: false })
//       expectTypeOf(await graffle.query.__typename()).toMatchTypeOf<FieldMethodResultEnabled>()
//     })
//   })
//   describe('with defaults.errorChannel: "return"', () => {
//     describe('.errors', () => {
//       test('defaults to execution errors in envelope', () => {
//         const g = G({ output: { defaults: { errorChannel: 'return' }, envelope: true }, checkPreflight: false })
//         expectTypeOf(g.query.__typename()).resolves.toMatchTypeOf<ExecutionResult<{ __typename: 'Query' }> | Anyware.ResultFailure>()
//       })
//       test('.execution:false restores errors to return', async () => {
//         const g = G({
//           output: { defaults: { errorChannel: 'return' }, envelope: { errors: { execution: false } } },
//           checkPreflight: false,
//         })
//         expectTypeOf(await g.query.__typename()).toEqualTypeOf<
//           Omit<ExecutionResult<{ __typename: 'Query' }>, 'errors'> | Anyware.ResultFailure | GraphQLExecutionResultError
//         >()
//       })
//       test('.other:true raises them to envelope', () => {
//         const g = G({
//           output: { defaults: { errorChannel: 'return' }, envelope: { errors: { other: true } } },
//           checkPreflight: false,
//         })
//         expectTypeOf(g.query.__typename()).resolves.toMatchTypeOf<ExecutionResult<{ __typename: 'Query' }>>()
//       })
//     })
//   })
//   test('with no errors included, then there are no error fields in the envelope', async () => {
//       const g = G({
//         // todo allow this shorthand
//         // output: { envelope: false },
//         output: { envelope: { errors: { execution:false, other:false } } },
//         checkPreflight: false,
//       })
//       const result = await g.query.__typename()
//       expectTypeOf<keyof typeof result>().toEqualTypeOf<'data'|'extensions'> // no errors
//   })
// })

// describe('defaults.errorChannel: "return"', () => {
//   describe('puts errors into return type', () => {
//     const g = G({ output: { defaults: { errorChannel: 'return' } }, checkPreflight: false })
//     test('query.<fieldMethod>', async () => {
//       expectTypeOf(await g.query.__typename()).toEqualTypeOf<
//         'Query' | Anyware.ResultFailure | GraphQLExecutionResultError
//       >()
//     })
//   })
//   describe('with .errors', () => {
//     test('.execution: throw', async () => {
//       const g = G({
//         output: { defaults: { errorChannel: 'return' }, errors: { execution: 'throw' } },
//         checkPreflight: false,
//       })
//       expectTypeOf(await g.query.__typename()).toEqualTypeOf<'Query' | Anyware.ResultFailure>()
//     })
//     test('.other: throw', async () => {
//       const g = G({
//         output: { defaults: { errorChannel: 'return' }, errors: { other: 'throw' } },
//         checkPreflight: false,
//       })
//       expectTypeOf(await g.query.__typename()).toEqualTypeOf<'Query' | GraphQLExecutionResultError>()
//     })
//     test('.*: throw', async () => {
//       const g = G({
//         output: { defaults: { errorChannel: 'return' }, errors: { other: 'throw', execution: 'throw' } },
//         checkPreflight: false,
//       })
//       expectTypeOf(await g.query.__typename()).toEqualTypeOf<'Query'>()
//     })
//   })
// })
