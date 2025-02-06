import { expect, expectTypeOf } from 'vitest'
import { AScalar, BScalar } from '../../../../tests/_/fixtures/scalars.js'
import { g0, test } from '../../../../tests/_/helpers.js'
import { Context, type GlobalRegistry } from '../../../entrypoints/utilities-for-generated.js'
import type { Schema } from '../../../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/__.js'
import type { Scalars } from './__.js'

declare global {
  namespace GraffleGlobal {
    interface Clients {
      TestAddScalar: GlobalRegistry.Client.Define<{
        schema: Schema.Define<{
          scalarNamesUnion: 'A'
          scalars: {
            A: Schema.Scalar<'A', bigint, string>
          }
        }>
      }>
    }
  }
}

const map = {} as SchemaDrivenDataMap

const g1 = g0.with({ schema: { map, name: `TestAddScalar` } })

test(`context scalars begin empty`, ({ g0 }) => {
  expect(g0._.scalars).toEqual(Context.States.empty.scalars)
})

test(`method not available when no schema map `, ({ g0 }) => {
  expectTypeOf(g0.scalar).toEqualTypeOf<Scalars.ScalarMethod.TypeErrorMissingSchemaMap>()
})

test(`method is available when there is a schema map `, () => {
  expectTypeOf(g1.scalar).toMatchTypeOf<Scalars.ScalarMethod<typeof g1._>>()
})

test(`can pass an inline scalar definition`, () => {
  const codec = AScalar.codec
  const g3 = g1.scalar(`A`, codec)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  expectTypeOf(g3._.scalars).toMatchTypeOf<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>()
})

test(`can pass a scalar definition`, () => {
  const g3 = g1.scalar(AScalar)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  expectTypeOf(g3._.scalars).toMatchTypeOf<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>()
})

test(`scalar name must match a scalar from the schema`, () => {
  // @ts-expect-error
  g1.scalar(`B`, {} as any)
  // @ts-expect-error
  g1.scalar(BScalar)
})
