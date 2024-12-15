/* eslint-disable */
import { expectTypeOf, test } from 'vitest'
import { DateScalar } from '../../../tests/_/fixtures/scalars.js'
import { Graffle } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import * as Schema from '../../../tests/_/schemas/kitchen-sink/schema.js'

const g = Graffle.create({ checkPreflight: false }).scalar(DateScalar)

// dprint-ignore
test(`query`, async () => {
  expectTypeOf(await g.query.object({id:['id2',true]})).toEqualTypeOf<{id2:null|string} | null>()
  // scalar
  expectTypeOf(await g.query.id()).toEqualTypeOf<string | null>()
  // scalar none-nullable
  expectTypeOf(await g.query.idNonNull()).toEqualTypeOf<string>()
  // scalar with optional arguments
  expectTypeOf<Parameters<typeof g.query.stringWithArgs>>().toEqualTypeOf<[input?: Graffle.SelectionSets.Query.stringWithArgs]>()
  // scalar with required arguments
  expectTypeOf<Parameters<typeof g.query.stringWithRequiredArg>>().toEqualTypeOf<[input: Graffle.SelectionSets.Query.stringWithRequiredArg]>()
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
