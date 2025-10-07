import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { OperationTypeNode } from 'graphql'
import * as $$Data from './data.js'
import * as $$Schema from './schema/$.js'
import * as $$SelectionSets from './selection-sets.js'

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
export namespace Select {
  //                                                Root
  // --------------------------------------------------------------------------------------------------
  //
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilderKit.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilderKit.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type BattleRoyale<$SelectionSet extends $$SelectionSets.BattleRoyale> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleRoyale']
    >
  export type BattleTrainer<$SelectionSet extends $$SelectionSets.BattleTrainer> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleTrainer']
    >
  export type BattleWild<$SelectionSet extends $$SelectionSets.BattleWild> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleWild']
    >
  export type CombatantMultiPokemon<$SelectionSet extends $$SelectionSets.CombatantMultiPokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantMultiPokemon']
    >
  export type CombatantSinglePokemon<$SelectionSet extends $$SelectionSets.CombatantSinglePokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantSinglePokemon']
    >
  export type Patron<$SelectionSet extends $$SelectionSets.Patron> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Patron']
    >
  export type Pokemon<$SelectionSet extends $$SelectionSets.Pokemon> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Pokemon']
    >
  export type Trainer<$SelectionSet extends $$SelectionSets.Trainer> =
    $$Utilities.DocumentBuilderKit.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Trainer']
    >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type Battle<$SelectionSet extends $$SelectionSets.Battle> = $$Utilities.DocumentBuilderKit.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Battle']
  >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type Being<$SelectionSet extends $$SelectionSets.Being> = $$Utilities.DocumentBuilderKit.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Being']
  >
}
