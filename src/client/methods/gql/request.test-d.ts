import {
  ATransport,
  RequiredConfigurationTransportA,
  RequiredConfigurationTransportB,
} from '../../../../tests/_/fixtures/transports.js'
import { g0 } from '../../../../tests/_/helpers.js'
import type { Context } from '../../../context/_namespace.js'
import { assertType } from '../../../lib/assert-equal.js'
import type { Grafaid } from '../../../lib/grafaid/_namespace.js'
import { undefinedAs } from '../../../lib/prelude.js'

const g1 = g0.transport(ATransport)
const g2 = g0.transport(RequiredConfigurationTransportA).transport(RequiredConfigurationTransportB)

type DData = { id: 0 }

//
//
//

// Not available if no transports registered
assertType<Context.Configuration.Check.Errors.PreflightCheckNoTransportsRegistered>(g0.gql)
// dprint-ignore
// Not available if current transport not ready
assertType<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportA['name']>>(g2.gql)
// dprint-ignore
// ... Reflects name of currently selected transport
assertType<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportB['name']>>(g2.transport(RequiredConfigurationTransportB.name).gql)

//
//
//

const d2 = undefinedAs<Grafaid.Document.Typed.Node<{ id: 0 }, { x?: 0 }>>()

assertType<DData | null>(await g1.gql(d2).send())
assertType<DData | null>(await g1.gql(d2).send({}))
assertType<DData | null>(await g1.gql(d2).send({ x: 0 }))
assertType<DData | null>(await g1.gql(d2).send({ x: 0 }))
// @ts-expect-error - wrong type
await g1.gql(d2).send({ filter: `wrong type` })

//
//
//

const d3 = undefinedAs<Grafaid.Document.Typed.Node<{ id: 0 }, { x: 0 }>>()

assertType<DData | null>(await g1.gql(d3).send({ x: 0 }))
// @ts-expect-error - missing argument
assertType<DData | null>(await g1.gql(d3).send({}))

//
//
//

// dprint-ignore
{
  // Return Type

  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, { x: 1 }>               >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, { x?: 1 }>              >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, {}>                     >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))
  await g1.gql<Grafaid.Document.Typed.Query<DData, { x: 1 }>               >``
    // @ts-expect-error - wrong argument type
    .send({ x: 2 })

  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, { x: 1 }>               >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, { x?: 1 }>              >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, {}>                     >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))  // eslint-disable-line
  await g1.gql<Grafaid.Document.Typed.Node<DData, { x: 1 }>               >``
    // @ts-expect-error - wrong argument type
    .send({ x: 2 })

  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, { x: 1 }>               >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, { x?: 1 }>              >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, {}>                     >``.send())
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  assertType<DData | null>(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 })) // eslint-disable-line
  await g1.gql<Grafaid.Document.Typed.String<DData, { x: 1 }>               >``
    // @ts-expect-error - wrong argument type
    .send({ x: 2 })
  
  assertType<Grafaid.SomeObjectData | null>(await g1.gql``.send())
  assertType<Grafaid.SomeObjectData | null>(await g1.gql``.send(`foo`))
  assertType<Grafaid.SomeObjectData | null>(await g1.gql``.send(`foo`, { x: 1 }))
  assertType<Grafaid.SomeObjectData | null>(await g1.gql``.send({ x: 1 }))

}
