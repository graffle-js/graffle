export * as $Named from './$named.js'
export * as $Scalars from './scalars/$.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './roots/Mutation/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/$.js'

export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
