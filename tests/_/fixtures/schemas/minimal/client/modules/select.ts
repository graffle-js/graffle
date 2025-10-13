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
