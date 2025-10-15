export * as $Named from './$named.js'
export * as $Scalars from './scalars/$.js'

export type * from './_context.js'
export type * from './_document.js'

export type * from './enums/BattleWildResult.js'
export type * from './enums/PokemonType.js'
export type * from './enums/TrainerClass.js'
export type * from './input-objects/DateFilter/$.js'
export type * from './input-objects/PokemonFilter/$.js'
export type * from './input-objects/StringFilter/$.js'
export type * from './interfaces/Being/$.js'
export type * from './objects/BattleRoyale/$.js'
export type * from './objects/BattleTrainer/$.js'
export type * from './objects/BattleWild/$.js'
export type * from './objects/CombatantMultiPokemon/$.js'
export type * from './objects/CombatantSinglePokemon/$.js'
export type * from './objects/Patron/$.js'
export type * from './objects/Pokemon/$.js'
export type * from './objects/Trainer/$.js'
export type * from './roots/Mutation/$.js'
export type * from './roots/Query/$.js'
export type * from './unions/Battle/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from '../schema/$.js'

/**
 * Infer the result type of a Query selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Query operation.
 */
export type Query$Infer<$SelectionSet extends object> = $$Utilities.Docpar.Object.InferResult.OperationQuery<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Query selection set.
 *
 * @deprecated This is temporarily typed as [object Object] and will be replaced with the new analysis system.
 */
export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system

/**
 * Infer the result type of a Mutation selection set.
 *
 * Given a selection set object, this type computes the exact TypeScript type
 * of the data that will be returned from executing the Mutation operation.
 */
export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.Docpar.Object.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>

/**
 * Infer the variables type for a Mutation selection set.
 *
 * @deprecated This is temporarily typed as [object Object] and will be replaced with the new analysis system.
 */
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
