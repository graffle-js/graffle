import { expect, expectTypeOf, test } from 'vitest'
import { AScalar, BScalar } from '../../../tests/_/fixtures/scalars.js'
import { Context, type GlobalRegistry } from '../../entrypoints/utilities-for-generated.js'
import type { Schema } from '../../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import { create } from '../client.js'
import type { ScalarMethod } from './addScalar.js'

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

const g1 = create()
const g2 = g1.with({ schema: { map, name: `TestAddScalar` } })

test(`scalars begin empty`, () => {
  expect(g1._.scalars).toEqual(Context.States.empty.scalars)
})

test(`method not available when no schema map `, () => {
  expectTypeOf(g1.scalar).toEqualTypeOf<ScalarMethod.TypeErrorMissingSchemaMap>()
})

test(`method is available when there is a schema map `, () => {
  expectTypeOf(g2.scalar).toMatchTypeOf<ScalarMethod<Context, {}>>()
})

test(`can pass an inline scalar definition`, () => {
  const codec = AScalar.codec
  const g3 = g2.scalar(`A`, codec)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  expectTypeOf(g3._.scalars).toEqualTypeOf<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>()
})

test(`can pass a scalar definition`, () => {
  const g3 = g2.scalar(AScalar)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  expectTypeOf(g3._.scalars).toEqualTypeOf<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>()
})

test(`scalar name must match a scalar from the schema`, () => {
  // @ts-expect-error
  g2.scalar(`B`, {} as any)
  // @ts-expect-error
  g2.scalar(BScalar)
})
