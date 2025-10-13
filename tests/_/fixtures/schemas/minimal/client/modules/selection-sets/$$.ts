export * as $Named from './$named.js'
export * as $Scalars from './scalars/$.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './roots/Query/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/$.js'

export type Query$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
  $SelectionSet,
  $$Schema.Schema
>
export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
