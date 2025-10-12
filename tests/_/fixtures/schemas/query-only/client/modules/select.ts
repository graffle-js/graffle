import type * as $$Utilities from '#graffle/utilities-for-generated'
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

import { createSelect } from '#graffle/client'
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

  //                                            OutputObject
  // --------------------------------------------------------------------------------------------------
  //

  //                                               Union
  // --------------------------------------------------------------------------------------------------
  //

  //                                             Interface
  // --------------------------------------------------------------------------------------------------
  //
}
