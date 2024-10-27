import type { OperationTypeNode } from 'graphql'
import type { InferResult } from '../../../../../../src/entrypoints/schema.js'
import * as Data from './Data.js'
import type { Schema } from './Schema.js'
import type * as SelectionSets from './SelectionSets.js'

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
export const Select = createSelect(Data.Name)

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
  export type Query<$SelectionSet extends SelectionSets.Query> = InferResult.Operation<
    $SelectionSet,
    Schema,
    OperationTypeNode.QUERY
  >
  export type Mutation<$SelectionSet extends SelectionSets.Mutation> = InferResult.Operation<
    $SelectionSet,
    Schema,
    OperationTypeNode.MUTATION
  >
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type BattleRoyale<$SelectionSet extends SelectionSets.BattleRoyale> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['BattleRoyale']
  >
  export type BattleTrainer<$SelectionSet extends SelectionSets.BattleTrainer> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['BattleTrainer']
  >
  export type BattleWild<$SelectionSet extends SelectionSets.BattleWild> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['BattleWild']
  >
  export type CombatantMultiPokemon<$SelectionSet extends SelectionSets.CombatantMultiPokemon> =
    InferResult.OutputObject<$SelectionSet, Schema, Schema['allTypes']['CombatantMultiPokemon']>
  export type CombatantSinglePokemon<$SelectionSet extends SelectionSets.CombatantSinglePokemon> =
    InferResult.OutputObject<$SelectionSet, Schema, Schema['allTypes']['CombatantSinglePokemon']>
  export type Patron<$SelectionSet extends SelectionSets.Patron> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Patron']
  >
  export type Pokemon<$SelectionSet extends SelectionSets.Pokemon> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Pokemon']
  >
  export type Trainer<$SelectionSet extends SelectionSets.Trainer> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Trainer']
  >
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //
  export type Battle<$SelectionSet extends SelectionSets.Battle> = InferResult.Union<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Battle']
  >
  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
  export type Being<$SelectionSet extends SelectionSets.Being> = InferResult.Interface<
    $SelectionSet,
    Schema,
    Schema['allTypes']['Being']
  >
}
