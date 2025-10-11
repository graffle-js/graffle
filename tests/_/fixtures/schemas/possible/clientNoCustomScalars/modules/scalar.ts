import type * as $$Utilities from '#graffle/utilities-for-generated'
export * from '#graffle/generator-helpers/standard-scalar-types'

//
//
//
//
// CUSTOM SCALAR TYPE
// DATE
// --------------------------------------------------------------------------------------------------
//                                                Date
// --------------------------------------------------------------------------------------------------
//
//

export type Date = $$Utilities.Schema.Scalar.ScalarCodecless<'Date'>
//
//
//
//
// CUSTOM SCALAR TYPE
// BIGINT
// --------------------------------------------------------------------------------------------------
//                                               bigint
// --------------------------------------------------------------------------------------------------
//
//

type $bigint = $$Utilities.Schema.Scalar.ScalarCodecless<'bigint'>
export { type $bigint as bigint }

//
//
//
//
//
//
// ==================================================================================================
//                                              Registry
// ==================================================================================================
//
//
//
//
//
//

export const $registry = {
  map: {},
} as $Registry

export type $Registry = $$Utilities.Schema.Scalar.Registry.Empty
