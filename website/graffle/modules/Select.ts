import type { InferResult } from "graffle/schema";
import type { OperationTypeNode } from "graphql";
import * as Data from "./Data.js";
import type { Schema } from "./Schema.js";
import type * as SelectionSets from "./SelectionSets.js";

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
import { createSelect } from "graffle/client";
export const Select = createSelect(Data.Name);

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
  >;
  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //
  export type Continent<$SelectionSet extends SelectionSets.Continent> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema["allTypes"]["Continent"]
  >;
  export type Country<$SelectionSet extends SelectionSets.Country> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema["allTypes"]["Country"]
  >;
  export type Language<$SelectionSet extends SelectionSets.Language> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema["allTypes"]["Language"]
  >;
  export type State<$SelectionSet extends SelectionSets.State> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema["allTypes"]["State"]
  >;
  export type Subdivision<$SelectionSet extends SelectionSets.Subdivision> = InferResult.OutputObject<
    $SelectionSet,
    Schema,
    Schema["allTypes"]["Subdivision"]
  >;
  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
}
