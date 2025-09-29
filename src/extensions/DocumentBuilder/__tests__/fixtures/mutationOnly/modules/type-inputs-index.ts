import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'

//
//
//
//
//
//
// ==================================================================================================
//                                         Type Inputs Index
// ==================================================================================================
//
//
//
//
//
//
/**
 * Mapping of GraphQL type names to their TypeScript input types.
 * This is used for O(1) type lookups during variable type inference.
 */
// Standard GraphQL scalars
export type String = string
export type Int = number
export type Float = number
export type Boolean = boolean
export type ID = string

// Index interface
export interface $TypeInputsIndex {
  String: String
  Int: Int
  Float: Float
  Boolean: Boolean
  ID: ID
}

// Export without $ prefix for use in other generated modules
export type { $TypeInputsIndex as TypeInputsIndex }
