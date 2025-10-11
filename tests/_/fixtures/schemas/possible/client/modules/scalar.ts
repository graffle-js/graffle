import type * as $$Utilities from '#graffle/utilities-for-generated'

import * as CustomScalars from '../../scalars.js'

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

export const Date = CustomScalars.Date
export type Date = typeof CustomScalars.Date
export type DateDecoded = $$Utilities.Schema.Scalar.GetDecoded<Date>
export type DateEncoded = $$Utilities.Schema.Scalar.GetEncoded<Date>

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

const $bigint = CustomScalars.bigint
type $bigint = typeof CustomScalars.bigint
export { $bigint as bigint }
export type bigintDecoded = $$Utilities.Schema.Scalar.GetDecoded<$bigint>
export type bigintEncoded = $$Utilities.Schema.Scalar.GetEncoded<$bigint>

export * from '#graffle/generator-helpers/standard-scalar-types'

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
  map: {
    Date: CustomScalars.Date,
    bigint: CustomScalars.bigint,
  },
} as $Registry

export type $Registry = $$Utilities.Schema.Scalar.Registry<
  {
    Date: Date
    bigint: $bigint
  },
  | $$Utilities.Schema.Scalar.GetEncoded<Date>
  | $$Utilities.Schema.Scalar.GetEncoded<$bigint>,
  | $$Utilities.Schema.Scalar.GetDecoded<Date>
  | $$Utilities.Schema.Scalar.GetDecoded<$bigint>
>
