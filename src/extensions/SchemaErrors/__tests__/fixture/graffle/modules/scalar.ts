import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
export * from '../../../../../../types/Schema/StandardTypes/scalar.js'

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
