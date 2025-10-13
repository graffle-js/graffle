import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { OperationTypeNode } from 'graphql'
import * as $$Data from './data.js'
import * as $$Schema from './schema/$.js'
import * as $$SelectionSets from './selection-sets/$.js'

//
//
//
//
//
//
// ==================================================================================================
//                                              Runtime
// ==================================================================================================
//
//
//
//
//
//

import { createSelect } from 'graffle/client'

/**
 * Runtime utilities for native GraphQL document selection.
 *
 * Used with the `.select()` method to build type-safe native GraphQL documents.
 *
 * @example
 * ```ts
 * import { Select } from './graffle/select.js'
 *
 * const document = Select.Query({ pokemon: { name: true } })
 * ```
 */
export const Select = createSelect($$Data.Name)

//
//
//
//
//
//
// ==================================================================================================
//                                             Buildtime
// ==================================================================================================
//
//
//
//
//
//

/**
 * Type utilities for inferring result types from selection sets.
 *
 * Given a selection set, these types compute the exact TypeScript type
 * of the result data returned from a GraphQL operation.
 *
 * # Usage
 *
 * Each type corresponds to a GraphQL schema type and takes a selection set
 * generic parameter, returning the inferred result type.
 *
 * @example
 * ```ts
 * import type { Select } from './graffle/select.js'
 *
 * type Result = Select.Query<{ pokemon: { name: true } }>
 * // Result: { pokemon: { name: string } }
 * ```
 */
export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Root query type for fetching Pokemon data.
   *
   * Infer result type for Query operations.
   */
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilderKit.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  /**
   * Root mutation type for modifying Pokemon data.
   *
   * Infer result type for Mutation operations.
   */
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilderKit.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>

  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * A battle royale where multiple trainers compete with their Pokemon teams.
   *
   * Infer result type for BattleRoyale selection sets.
   */
  export type BattleRoyale<$SelectionSet extends $$SelectionSets.BattleRoyale> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleRoyale']
    >
  /**
   * A one-on-one battle between two trainers.
   *
   * Infer result type for BattleTrainer selection sets.
   */
  export type BattleTrainer<$SelectionSet extends $$SelectionSets.BattleTrainer> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleTrainer']
    >
  /**
   * A battle between a trainer and wild Pokemon.
   *
   * Infer result type for BattleWild selection sets.
   */
  export type BattleWild<$SelectionSet extends $$SelectionSets.BattleWild> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleWild']
    >
  /**
   * A combatant in a battle royale with multiple Pokemon.
   *
   * Infer result type for CombatantMultiPokemon selection sets.
   */
  export type CombatantMultiPokemon<$SelectionSet extends $$SelectionSets.CombatantMultiPokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantMultiPokemon']
    >
  /**
   * A combatant in a one-on-one battle with a single Pokemon.
   *
   * Infer result type for CombatantSinglePokemon selection sets.
   */
  export type CombatantSinglePokemon<$SelectionSet extends $$SelectionSets.CombatantSinglePokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantSinglePokemon']
    >
  /**
   * A patron who is a fan of a particular trainer.
   *
   * Infer result type for Patron selection sets.
   */
  export type Patron<$SelectionSet extends $$SelectionSets.Patron> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Patron']
    >
  /**
   * A Pokemon with stats, type, and trainer information.
   *
   * Infer result type for Pokemon selection sets.
   */
  export type Pokemon<$SelectionSet extends $$SelectionSets.Pokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Pokemon']
    >
  /**
   * A Pokemon trainer who catches and battles with Pokemon.
   *
   * Infer result type for Trainer selection sets.
   */
  export type Trainer<$SelectionSet extends $$SelectionSets.Trainer> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Trainer']
    >

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Represents any kind of battle that can occur in the Pokemon world.
   *
   * Infer result type for Battle selection sets.
   */
  export type Battle<$SelectionSet extends $$SelectionSets.Battle> = $$Utilities.DocumentBuilderKit.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Battle']
  >

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * A being in the Pokemon world - either a Pokemon, Trainer, or Patron.
   *
   * Infer result type for Being selection sets.
   */
  export type Being<$SelectionSet extends $$SelectionSets.Being> = $$Utilities.DocumentBuilderKit.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Being']
  >
}
