import type { OperationTypeNode } from 'graphql'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import * as $$Data from './data.js'
import * as $$Schema from './schema.js'
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
import { createSelect } from '../../../../../../src/entrypoints/client.js'
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
  export type Query<$SelectionSet extends $$SelectionSets.Query> = $$Utilities.DocumentBuilder.InferResult.Operation<
    $SelectionSet,
    $$Schema.Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilder.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type BattleRoyale<$SelectionSet extends $$SelectionSets.BattleRoyale> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleRoyale']
    >
  export type BattleTrainer<$SelectionSet extends $$SelectionSets.BattleTrainer> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleTrainer']
    >
  export type BattleWild<$SelectionSet extends $$SelectionSets.BattleWild> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['BattleWild']
    >
  export type CombatantMultiPokemon<$SelectionSet extends $$SelectionSets.CombatantMultiPokemon> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantMultiPokemon']
    >
  export type CombatantSinglePokemon<$SelectionSet extends $$SelectionSets.CombatantSinglePokemon> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['CombatantSinglePokemon']
    >
  export type Patron<$SelectionSet extends $$SelectionSets.Patron> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Patron']
    >
  export type Pokemon<$SelectionSet extends $$SelectionSets.Pokemon> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Pokemon']
    >
  export type Trainer<$SelectionSet extends $$SelectionSets.Trainer> =
    $$Utilities.DocumentBuilder.InferResult.OutputObjectLike<
      $SelectionSet,
      $$Schema.Schema,
      $$Schema.Schema['allTypes']['Trainer']
    >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type Battle<$SelectionSet extends $$SelectionSets.Battle> = $$Utilities.DocumentBuilder.InferResult.Union<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Battle']
  >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type Being<$SelectionSet extends $$SelectionSets.Being> = $$Utilities.DocumentBuilder.InferResult.Interface<
    $SelectionSet,
    $$Schema.Schema,
    $$Schema.Schema['allTypes']['Being']
  >
}
