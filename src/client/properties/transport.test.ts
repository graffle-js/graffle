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
// const g2 = g1.with({ schema: { map, name: `TestAddScalar` } })

test(`transport not available if no registered transports`, () => {
  g1.transport('x', () => {})
  // expect(g1._.scalars).toEqual(Context.States.empty.scalars)
})
