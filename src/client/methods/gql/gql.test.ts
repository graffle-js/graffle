import { describe, expectTypeOf } from 'vitest'
import { ATransport } from '../../../../tests/_/fixtures/transports.js'
import { g0, test } from '../../../../tests/_/helpers.js'
// import { Spy } from '../../../../tests/_/SpyExtension.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import { as } from '../../../lib/prelude.js'

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

type d1ResultData = { id: 0 }

const d1 = as<Grafaid.Document.Typed.Node<d1ResultData, {}>>(``)

describe(`given typed document node`, () => {
  test(`returns typed result`, async () => {
    const result = await g1.gql(d1).send()
    expectTypeOf(result).toEqualTypeOf<d1ResultData | null>()
  })
  test(`accepts no variables if none in TDN`, async () => {
    await g1.gql(d1)
      // @ts-expect-error
      .send({})
  })
})
