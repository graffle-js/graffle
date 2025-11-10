import { type GlobalRegistry } from '#graffle/utilities-for-generated'
import { contextEmpty } from '#src/context/ContextEmpty.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { AScalar, BScalar } from '#test/fixtures/scalars'
import { g0, test } from '#test/helpers'
import { Ts } from '@wollybeard/kit'
import { expect } from 'vitest'

type SchemaDrivenDataMap = GraphqlKit.Schema.SchemaDrivenDataMap
import type { ScalarMethod } from './scalars.js'

declare global {
  namespace GraffleGlobal {
    interface Clients {
      TestAddScalar: GlobalRegistry.Client.Define<{
        schema: GraphqlKit.Schema.Type.Define<{
          scalarNamesUnion: 'A'
          scalars: {
            A: GraphqlKit.Schema.Type.Scalar<'A', bigint, string>
          }
        }>
      }>
    }
  }
}

const map = {} as SchemaDrivenDataMap

const g1 = g0.with({ schema: { map, name: `TestAddScalar` } })

test(`context scalars begin empty`, ({ g0 }) => {
  expect(g0._.scalars).toEqual(contextEmpty.scalars)
})

test(`method not available when no schema map `, ({ g0 }) => {
  Ts.Assert.exact.ofAs<ScalarMethod.TypeErrorMissingSchemaMap>().on(g0.scalar)
})

test(`method is available when there is a schema map `, () => {
  Ts.Assert.equiv.ofAs<ScalarMethod<typeof g1._>>().on(g1.scalar)
})

test(`can pass an inline scalar definition`, () => {
  const codec = AScalar.codec
  const g3 = g1.scalar(`A`, codec)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  Ts.Assert.equiv.ofAs<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>().on(g3._.scalars)
})

test(`can pass a scalar definition`, () => {
  const g3 = g1.scalar(AScalar)
  expect(g3._.scalars.map).toEqual({ A: AScalar })
  Ts.Assert.equiv.ofAs<{
    map: { A: AScalar }
    typesDecoded: bigint
    typesEncoded: string
  }>().on(g3._.scalars)
})

test(`scalar name must match a scalar from the schema`, () => {
  // @ts-expect-error
  g1.scalar(`B`, {} as any)
  // @ts-expect-error
  g1.scalar(BScalar)
})
