import { kitchenSink } from '../../../../tests/_/helpers.js'
import { GraffleBare } from '../../../entrypoints/presets/bare.js'
import { GraffleBasic } from '../../../entrypoints/presets/basic.js'
import { GraffleMinimal } from '../../../entrypoints/presets/minimal.js'
import { assertType } from '../../../lib/assert-equal.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import type { ClientTransports } from '../../../types/context.js'

const g = kitchenSink

type D = { id: 0 }

const d1 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, {}>

assertType<D | null>(await g.gql(d1).send())
// @ts-expect-error - variables not allowed.
await g.gql(d1).send({})

//
//
//

// Not available if no transports registered
assertType<ClientTransports.Errors.PreflightCheckNoTransportsRegistered>(GraffleBare.create().gql)
// Not available if current transport not ready
assertType<ClientTransports.Errors.PreflightCheckTransportNotReady<'http'>>(GraffleMinimal.create().gql)
// ... Reflects name of currently selected transport
assertType<ClientTransports.Errors.PreflightCheckTransportNotReady<'memory'>>(
  GraffleBasic.create().transport(`memory`).gql,
)

//
//
//

const d2 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, { x?: 0 }>

assertType<D | null>(await g.gql(d2).send())
assertType<D | null>(await g.gql(d2).send({}))
assertType<D | null>(await g.gql(d2).send({ x: 0 }))
assertType<D | null>(await g.gql(d2).send({ x: 0 }))
// @ts-expect-error - wrong type
await g.gql(d2).send({ filter: `wrong type` })

//
//
//

const d3 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, { x: 0 }>

assertType<D | null>(await g.gql(d3).send({ x: 0 }))
// @ts-expect-error - missing argument
assertType<D | null>(await g.gql(d3).send({}))

//
//
//

// dprint-ignore
{
  // Return Type

  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x: 1 }>               >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x?: 1 }>              >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, {}>                     >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))
	// @ts-expect-error - wrong argument type
  await g.gql<Grafaid.Document.Typed.Query<D, { x: 1 }>               >``.send({ x: 2 })

  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x: 1 }>               >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x?: 1 }>              >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, {}>                     >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))  // eslint-disable-line
	// @ts-expect-error - wrong argument type
  await g.gql<TypedDocument.Node<D, { x: 1 }>               >``.send({ x: 2 })

  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x: 1 }>               >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x?: 1 }>              >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x?: 1 }>              >``.send({ x: 1 }))
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, {}>                     >``.send())
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  assertType<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 })) // eslint-disable-line
	// @ts-expect-error - wrong argument type
  await g.gql<Grafaid.Document.Typed.String<D, { x: 1 }>               >``.send({ x: 2 })
  
  
  assertType<Grafaid.SomeObjectData | null>(await g.gql``.send())
  assertType<Grafaid.SomeObjectData | null>(await g.gql``.send(`foo`))
  assertType<Grafaid.SomeObjectData | null>(await g.gql``.send(`foo`, { x: 1 }))
  assertType<Grafaid.SomeObjectData | null>(await g.gql``.send({ x: 1 }))

}
