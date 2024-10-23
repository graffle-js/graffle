import type { Grafaid } from '../../lib/grafaid/__.js'
import { type ExcludeNull } from '../../lib/prelude.js'
import type { Schema } from '../../types/Schema/__.js'
import type { OutputObject } from './OutputObject.js'

export type RootViaObject<
  $SelectionSet,
  $Schema extends Schema,
  $RootType extends Schema.StandardTypes.RootType,
> = Root<
  $SelectionSet,
  $Schema,
  $RootType['name']
>

// dprint-ignore
export type Query<$SelectionSet, $Schema extends Schema> =
  Root<$SelectionSet, $Schema, 'Query'>

// dprint-ignore
export type Mutation<$SelectionSet, $Schema extends Schema> =
  Root<$SelectionSet, $Schema, 'Mutation'>

// dprint-ignore
export type Subscription<$SelectionSet, $Schema extends Schema> =
  Root<$SelectionSet, $Schema, 'Subscription'>

export type Root<
  $SelectionSet,
  $Schema extends Schema,
  $RootTypeName extends Grafaid.Schema.RootTypeName,
> = OutputObject<$SelectionSet, $Schema, ExcludeNull<$Schema['Root'][$RootTypeName]>>
