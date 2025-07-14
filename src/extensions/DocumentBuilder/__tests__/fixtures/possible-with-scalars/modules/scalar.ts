import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'
import * as CustomScalars from '../../possible.scalars.js'

export * from '../../possible.scalars.js'
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

export type Date = typeof CustomScalars.Date
// Without this we get error:
// "Exported type alias 'DateDecoded' has or is using private name 'Date'."
type Date_ = typeof CustomScalars.Date
export type DateDecoded = $$Utilities.Schema.Scalar.GetDecoded<Date_>
export type DateEncoded = $$Utilities.Schema.Scalar.GetEncoded<Date_>

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

export type $bigint = typeof CustomScalars.bigint
// Without this we get error:
// "Exported type alias 'DateDecoded' has or is using private name 'Date'."
type $bigint_ = typeof CustomScalars.bigint
export type $bigintDecoded = $$Utilities.Schema.Scalar.GetDecoded<$bigint_>
export type $bigintEncoded = $$Utilities.Schema.Scalar.GetEncoded<$bigint_>

export * from '../../../../../../types/Schema/StandardTypes/scalar.js'

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
    Date: Date_
    bigint: bigint_
  },
  | $$Utilities.Schema.Scalar.GetEncoded<Date_>
  | $$Utilities.Schema.Scalar.GetEncoded<bigint_>,
  | $$Utilities.Schema.Scalar.GetDecoded<Date_>
  | $$Utilities.Schema.Scalar.GetDecoded<bigint_>
>
