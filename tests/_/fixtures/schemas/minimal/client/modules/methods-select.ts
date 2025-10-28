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
