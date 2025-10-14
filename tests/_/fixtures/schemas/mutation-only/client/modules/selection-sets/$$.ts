export * as $Named from './$named.js'
export * as $Scalars from './scalars/$.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './roots/Mutation/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/$.js'

/**
 * Infer the result type of a Mutation selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Mutation operation.
 */
export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Mutation selection set.
 *
 * @deprecated This is temporarily typed as [object Object] and will be replaced with the new analysis system.
 */
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
