import type { OperationTypeNode } from 'graphql'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
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

import { createSelect } from '../../../../../../entrypoints/client.js'
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
  export type Mutation<$SelectionSet extends $$SelectionSets.Mutation> =
    $$Utilities.DocumentBuilderKit.InferResult.Operation<$SelectionSet, $$Schema.Schema, OperationTypeNode.MUTATION>
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
