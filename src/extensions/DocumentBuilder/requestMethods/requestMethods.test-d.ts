import { expectTypeOf, test } from 'vitest'
import { DateScalar } from '../../../../tests/_/fixtures/scalars.js'
import type { Schema } from '../../../types/Schema/_namespace.js'
import { Possible } from '../__tests__/fixtures/possible/_namespace.js'

const g = Possible.create({ check: { preflight: false } }).scalar(DateScalar)

type ClientContext = {
  scalars: Schema.Scalar.Registry.AddScalar<Schema.Scalar.Registry.Empty, typeof DateScalar>
  variablesEnabled: false
}

// dprint-ignore
test(`query`, async () => {
  expectTypeOf(await g.query.object({id:['id2',true]})).toEqualTypeOf<{id2:null|string} | null>()
  // scalar
  expectTypeOf(await g.query.id()).toEqualTypeOf<string | null>()
  // scalar none-nullable
  expectTypeOf(await g.query.idNonNull()).toEqualTypeOf<string>()
  // scalar with optional arguments
  expectTypeOf<Parameters<typeof g.query.stringWithArgs>>().toMatchTypeOf<[input?: Possible.SelectionSets.Query.stringWithArgs<ClientContext>]>()
  // scalar with required arguments
  expectTypeOf<Parameters<typeof g.query.stringWithRequiredArg>>().toMatchTypeOf<[input: Possible.SelectionSets.Query.stringWithRequiredArg<ClientContext>]>()
  // scalar custom
  const result = await g.query.date()
  expectTypeOf(await g.query.date()).toMatchTypeOf<Date | null>()
  // scalar with explicit indicators
  // positive indicator
  expectTypeOf(await g.query.idNonNull(true)).toEqualTypeOf<string>()
  // negative indicator
  // todo
  // expectTypeOf(await graffle.query.idNonNull(false)).toEqualTypeOf<null>()
  // negative indicator via directive
  // todo
  // expectTypeOf(await graffle.query.idNonNull({ $skip: false })).toEqualTypeOf<null>()

  // object
  expectTypeOf(g.query.dateObject1({ date1: true })).resolves.toEqualTypeOf<{ date1: Date | null } | null>()
  expectTypeOf(g.query.unionFooBar({ ___on_Foo: { id: true }})).resolves.toEqualTypeOf<{} | { id: string | null } | null>()
  expectTypeOf(g.query.interface({ id: true })).resolves.toEqualTypeOf<null | { id: string | null }>()
  expectTypeOf(g.query.interface({ ___on_Object1ImplementingInterface: { int: true }})).resolves.toEqualTypeOf<{} | { int: number | null } | null>()
  // object with scalars wildcard
  expectTypeOf(g.query.dateObject1({ $scalars: true })).resolves.toEqualTypeOf<{ __typename: `DateObject1`; date1: Date | null } | null>()

  // @ts-expect-error missing input selection set
  g.query.dateObject1()  
  // @ts-expect-error excess properties
  g.query.dateObject1({ abc: true })  
  // todo @ts-expect-error empty object
  // client.query.dateObject1({})  
})
