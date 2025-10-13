import type * as $$Utilities from 'graffle/utilities-for-generated'
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
 * Root query type for fetching Pokemon data.
 *
 * Build type-safe selection set for Query.
 */
export interface Query {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Query>): $SelectionSet
}

/**
 * Root mutation type for modifying Pokemon data.
 *
 * Build type-safe selection set for Mutation.
 */
export interface Mutation {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Mutation>): $SelectionSet
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
 * A battle royale where multiple trainers compete with their Pokemon teams.
 *
 * Build type-safe selection set for BattleRoyale.
 */
export interface BattleRoyale {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BattleRoyale>): $SelectionSet
}

/**
 * A one-on-one battle between two trainers.
 *
 * Build type-safe selection set for BattleTrainer.
 */
export interface BattleTrainer {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BattleTrainer>): $SelectionSet
}

/**
 * A battle between a trainer and wild Pokemon.
 *
 * Build type-safe selection set for BattleWild.
 */
export interface BattleWild {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.BattleWild>): $SelectionSet
}

/**
 * A combatant in a battle royale with multiple Pokemon.
 *
 * Build type-safe selection set for CombatantMultiPokemon.
 */
export interface CombatantMultiPokemon {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.CombatantMultiPokemon>): $SelectionSet
}

/**
 * A combatant in a one-on-one battle with a single Pokemon.
 *
 * Build type-safe selection set for CombatantSinglePokemon.
 */
export interface CombatantSinglePokemon {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.CombatantSinglePokemon>): $SelectionSet
}

/**
 * A patron who is a fan of a particular trainer.
 *
 * Build type-safe selection set for Patron.
 */
export interface Patron {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Patron>): $SelectionSet
}

/**
 * A Pokemon with stats, type, and trainer information.
 *
 * Build type-safe selection set for Pokemon.
 */
export interface Pokemon {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Pokemon>): $SelectionSet
}

/**
 * A Pokemon trainer who catches and battles with Pokemon.
 *
 * Build type-safe selection set for Trainer.
 */
export interface Trainer {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Trainer>): $SelectionSet
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
 * Represents any kind of battle that can occur in the Pokemon world.
 *
 * Build type-safe selection set for Battle.
 */
export interface Battle {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Battle>): $SelectionSet
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
 * A being in the Pokemon world - either a Pokemon, Trainer, or Patron.
 *
 * Build type-safe selection set for Being.
 */
export interface Being {
  <$SelectionSet>(selectionSet: $$Utilities.Exact<$SelectionSet, $$SelectionSets.Being>): $SelectionSet
}
