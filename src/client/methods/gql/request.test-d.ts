import type { Grafaid } from '#lib/grafaid'
import type { Context } from '#src/context/$.js'
import { ATransport, RequiredConfigurationTransportA, RequiredConfigurationTransportB } from '#test/fixtures/transports'
import { g0 } from '#test/helpers'
import { Ts } from '@wollybeard/kit'

const g1 = g0.transport(ATransport)
const g2 = g0.transport(RequiredConfigurationTransportA).transport(RequiredConfigurationTransportB)

type DData = { id: 0 }

//
//
//

// Not available if no transports registered
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckNoTransportsRegistered>()(g0.gql)
// dprint-ignore
// Not available if current transport not ready
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportA['name']>>()(g2.gql)
// dprint-ignore
// ... Reflects name of currently selected transport
Ts.Test.exact<Context.Configuration.Check.Errors.PreflightCheckTransportNotReady<RequiredConfigurationTransportB['name']>>()(g2.transport(RequiredConfigurationTransportB.name).gql)

//
//
//

const d2 = Ts.as<Grafaid.Document.Typed.Node<{ id: 0 }, { x?: 0 }>>()

Ts.Test.exact<DData | null>()(await g1.gql(d2).send())
Ts.Test.exact<DData | null>()(await g1.gql(d2).send({}))
Ts.Test.exact<DData | null>()(await g1.gql(d2).send({ x: 0 }))
Ts.Test.exact<DData | null>()(await g1.gql(d2).send({ x: 0 }))
// @ts-expect-error - wrong type
await g1.gql(d2).send({ filter: `wrong type` })

//
//
//

const d3 = Ts.as<Grafaid.Document.Typed.Node<{ id: 0 }, { x: 0 }>>()

Ts.Test.exact<DData | null>()(await g1.gql(d3).send({ x: 0 }))
// @ts-expect-error - missing argument
Ts.Test.exact<DData | null>()(await g1.gql(d3).send({}))

//
//
//

// dprint-ignore
{
  // Return Type

  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, { x: 1 }>               >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, { x?: 1 }>              >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, { x?: 1 }>              >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, {}>                     >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Query<DData, Grafaid.Document.Typed.Variables>>('').send(`abc`, { x: 1 }))
  await g1.gql<Grafaid.Document.Typed.Query<DData, { x: 1 }>               >('')
    // @ts-expect-error - wrong argument type
    .send({ x: 2 })

  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, { x: 1 }>               >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, { x?: 1 }>              >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, { x?: 1 }>              >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, {}>                     >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.Node<DData, Grafaid.Document.Typed.Variables>>('').send(`abc`, { x: 1 }))
  // g1.gql<Grafaid.Document.Typed.Node<DData, { x: 1 }>               >('')

  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, { x: 1 }>               >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, { x?: 1 }>              >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, { x?: 1 }>              >('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, {}>                     >('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>('').send())
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>('').send({ x: 1 }))
  Ts.Test.exact<DData | null>()(await g1.gql<Grafaid.Document.Typed.String<DData, Grafaid.Document.Typed.Variables>>('').send(`abc`, { x: 1 }))
  // g1.gql<Grafaid.Document.Typed.String<DData, { x: 1 }>               >('')

  Ts.Test.exact<Grafaid.SomeObjectData | null>()(await g1.gql('').send())
  Ts.Test.exact<Grafaid.SomeObjectData | null>()(await g1.gql('').send(`foo`))
  Ts.Test.exact<Grafaid.SomeObjectData | null>()(await g1.gql('').send(`foo`, { x: 1 }))
  Ts.Test.exact<Grafaid.SomeObjectData | null>()(await g1.gql('').send({ x: 1 }))

}
