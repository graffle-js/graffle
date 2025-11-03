import type * as $$Utilities from '#graffle/utilities-for-generated'
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

import { createSelect } from '#graffle/client'

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
   * Infer result type for Query operations.
   */
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.Docpar.Object.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    $$Utilities.GraphqlKit.Schema.OperationType.QUERY
  >
  /**
   * Infer result type for Mutation operations.
   */
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.Docpar.Object.InferResult.Operation<
      $SelectionSet,
      $$Schema.Schema,
      $$Utilities.GraphqlKit.Schema.OperationType.MUTATION
    >

  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for BattleRoyale selection sets.
   */
  export type BattleRoyale<$SelectionSet extends $$SelectionSets.BattleRoyale> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleRoyale']
    >
  /**
   * Infer result type for BattleTrainer selection sets.
   */
  export type BattleTrainer<$SelectionSet extends $$SelectionSets.BattleTrainer> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleTrainer']
    >
  /**
   * Infer result type for BattleWild selection sets.
   */
  export type BattleWild<$SelectionSet extends $$SelectionSets.BattleWild> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleWild']
    >
  /**
   * Infer result type for CombatantMultiPokemon selection sets.
   */
  export type CombatantMultiPokemon<$SelectionSet extends $$SelectionSets.CombatantMultiPokemon> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantMultiPokemon']
    >
  /**
   * Infer result type for CombatantSinglePokemon selection sets.
   */
  export type CombatantSinglePokemon<$SelectionSet extends $$SelectionSets.CombatantSinglePokemon> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantSinglePokemon']
    >
  /**
   * Infer result type for Patron selection sets.
   */
  export type Patron<$SelectionSet extends $$SelectionSets.Patron> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Patron']
    >
  /**
   * Infer result type for Pokemon selection sets.
   */
  export type Pokemon<$SelectionSet extends $$SelectionSets.Pokemon> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Pokemon']
    >
  /**
   * Infer result type for Trainer selection sets.
   */
  export type Trainer<$SelectionSet extends $$SelectionSets.Trainer> =
    $$Utilities.Docpar.Object.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Trainer']
    >

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for Battle selection sets.
   */
  export type Battle<$SelectionSet extends $$SelectionSets.Battle> = $$Utilities.Docpar.Object.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Battle']
  >

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //

  /**
   * Infer result type for Being selection sets.
   */
  export type Being<$SelectionSet extends $$SelectionSets.Being> = $$Utilities.Docpar.Object.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Being']
  >
}
