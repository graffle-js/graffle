import { describe, expect, expectTypeOf } from 'vitest'
import { ATransport } from '../../../../tests/_/fixtures/transports.js'
import { g0, test } from '../../../../tests/_/helpers.js'
// import { Spy } from '../../../../tests/_/SpyExtension.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import { undefinedAs } from '../../../lib/prelude.js'

// todo test with custom scalars

// describe(`memory transport`, () => {
//   describe(`operationName`, () => {
//     test(`undefined by default`, async ({ g0 }) => {
//       await g0.use(Spy()).gql`query { id }`.send()
//       expect(Spy.data.exchange.input).toMatchObject({ request: { operationName: undefined } })
//     })
//     test(`reflects explicit value`, async ({ g0 }) => {
//       await g0.use(Spy()).gql`query foo { id }`.send(`foo`)
//       expect(Spy.data.exchange.input).toMatchObject({ request: { operationName: `foo` } })
//     })
//   })
// })

const g1 = g0.with({ output: { envelope: false } }).transport(ATransport)

type D1Data = { id: 0 }

const d1 = undefinedAs<Grafaid.Document.Typed.Node<D1Data, {}>>()

describe(`given typed document node`, () => {
  test(`returns typed result`, async () => {
    const result = await g1.gql(d1).send()
    expectTypeOf(result).toEqualTypeOf<D1Data | null>()
  })
  test(`accepts no variables if none in TDN`, async () => {
    await g1.gql(d1)
      // @ts-expect-error
      .send({})
  })
})
