import { kitchenSink } from '../../../../tests/_/helpers.js'
import { GraffleBare } from '../../../entrypoints/presets/__GraffleBare.js'
import { GraffleBasic } from '../../../entrypoints/presets/__GraffleBasic.js'
import { GraffleMinimal } from '../../../entrypoints/presets/__GraffleMinimal.js'
import { AssertTypeOf } from '../../../lib/assert-equal.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import type { ClientTransports } from '../../../types/context.js'

const g = kitchenSink

type D = { id: 0 }

const d1 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, {}>

AssertTypeOf<D | null>(await g.gql(d1).send())
// @ts-expect-error - variables not allowed.
await g.gql(d1).send({})

//
//
//

// Not available if no transports registered
AssertTypeOf<ClientTransports.Errors.PreflightCheckNoTransportsRegistered>(GraffleBare.create().gql)
// Not available if current transport not ready
AssertTypeOf<ClientTransports.Errors.PreflightCheckTransportNotReady<'http'>>(GraffleMinimal.create().gql)
// ... Reflects name of currently selected transport
AssertTypeOf<ClientTransports.Errors.PreflightCheckTransportNotReady<'memory'>>(
  GraffleBasic.create().transport(`memory`).gql,
)

//
//
//

const d2 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, { x?: 0 }>

AssertTypeOf<D | null>(await g.gql(d2).send())
AssertTypeOf<D | null>(await g.gql(d2).send({}))
AssertTypeOf<D | null>(await g.gql(d2).send({ x: 0 }))
AssertTypeOf<D | null>(await g.gql(d2).send({ x: 0 }))
// @ts-expect-error - wrong type
await g.gql(d2).send({ filter: `wrong type` })

//
//
//

const d3 = 0 as any as Grafaid.Document.Typed.Node<{ id: 0 }, { x: 0 }>

AssertTypeOf<D | null>(await g.gql(d3).send({ x: 0 }))
// @ts-expect-error - missing argument
AssertTypeOf<D | null>(await g.gql(d3).send({}))

//
//
//

// dprint-ignore
{
  // Return Type

  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x: 1 }>               >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x?: 1 }>              >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, { x?: 1 }>              >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, {}>                     >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Query<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))
	// @ts-expect-error - wrong argument type
  await g.gql<Grafaid.Document.Typed.Query<D, { x: 1 }>               >``.send({ x: 2 })

  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x: 1 }>               >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x?: 1 }>              >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, { x?: 1 }>              >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, {}>                     >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.Node<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 }))  // eslint-disable-line
	// @ts-expect-error - wrong argument type
  await g.gql<TypedDocument.Node<D, { x: 1 }>               >``.send({ x: 2 })

  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x: 1 }>               >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x?: 1 }>              >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, { x?: 1 }>              >``.send({ x: 1 }))
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, {}>                     >``.send())
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send()) // eslint-disable-line
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send({ x: 1 })) // eslint-disable-line
  AssertTypeOf<D | null>(await g.gql<Grafaid.Document.Typed.String<D, Grafaid.Document.Typed.Variables>>``.send(`abc`, { x: 1 })) // eslint-disable-line
	// @ts-expect-error - wrong argument type
  await g.gql<Grafaid.Document.Typed.String<D, { x: 1 }>               >``.send({ x: 2 })
  
  
  AssertTypeOf<Grafaid.SomeObjectData | null>(await g.gql``.send())
  AssertTypeOf<Grafaid.SomeObjectData | null>(await g.gql``.send(`foo`))
  AssertTypeOf<Grafaid.SomeObjectData | null>(await g.gql``.send(`foo`, { x: 1 }))
  AssertTypeOf<Grafaid.SomeObjectData | null>(await g.gql``.send({ x: 1 }))

}
