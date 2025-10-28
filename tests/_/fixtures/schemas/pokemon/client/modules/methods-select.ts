import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$SelectionSets from './selection-sets/$.js'

//
//
//
//
//
//
// ==================================================================================================
//                                      Select Methods Interface
// ==================================================================================================
//
//
//
//
//
//

/**
 * Selection method types for building native GraphQL documents.
 *
 * Maps each GraphQL schema type to its corresponding selection method interface.
 * These methods are available on `.select()` to build type-safe selection sets
 * that return the selection set itself (for document building).
 */

export interface $MethodsSelect {
  Query: Query
  Mutation: Mutation
  BattleRoyale: BattleRoyale
  BattleTrainer: BattleTrainer
  BattleWild: BattleWild
  CombatantMultiPokemon: CombatantMultiPokemon
  CombatantSinglePokemon: CombatantSinglePokemon
  Patron: Patron
  Pokemon: Pokemon
  Trainer: Trainer
  Battle: Battle
  Being: Being
}

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

/**
 * Build type-safe selection set for Query.
 */
export interface Query {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Query>): $SelectionSet
}

/**
 * Build type-safe selection set for Mutation.
 */
export interface Mutation {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Mutation>): $SelectionSet
}

//
//
//
//
//
//
// ==================================================================================================
//                                            OutputObject
// ==================================================================================================
//
//
//
//
//
//

/**
 * Build type-safe selection set for BattleRoyale.
 */
export interface BattleRoyale {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.BattleRoyale>): $SelectionSet
}

/**
 * Build type-safe selection set for BattleTrainer.
 */
export interface BattleTrainer {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.BattleTrainer>): $SelectionSet
}

/**
 * Build type-safe selection set for BattleWild.
 */
export interface BattleWild {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.BattleWild>): $SelectionSet
}

/**
 * Build type-safe selection set for CombatantMultiPokemon.
 */
export interface CombatantMultiPokemon {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CombatantMultiPokemon>,
  ): $SelectionSet
}

/**
 * Build type-safe selection set for CombatantSinglePokemon.
 */
export interface CombatantSinglePokemon {
  <$SelectionSet>(
    selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.CombatantSinglePokemon>,
  ): $SelectionSet
}

/**
 * Build type-safe selection set for Patron.
 */
export interface Patron {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Patron>): $SelectionSet
}

/**
 * Build type-safe selection set for Pokemon.
 */
export interface Pokemon {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Pokemon>): $SelectionSet
}

/**
 * Build type-safe selection set for Trainer.
 */
export interface Trainer {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Trainer>): $SelectionSet
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Union
// ==================================================================================================
//
//
//
//
//
//

/**
 * Build type-safe selection set for Battle.
 */
export interface Battle {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Battle>): $SelectionSet
}

//
//
//
//
//
//
// ==================================================================================================
//                                             Interface
// ==================================================================================================
//
//
//
//
//
//

/**
 * Build type-safe selection set for Being.
 */
export interface Being {
  <$SelectionSet>(selectionSet: $$Utilities.NoExcess<$SelectionSet, $$SelectionSets.Being>): $SelectionSet
}
