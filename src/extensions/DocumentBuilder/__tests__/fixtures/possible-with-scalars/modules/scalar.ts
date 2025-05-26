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
  },
} as $Registry

export type $Registry = $$Utilities.Schema.Scalar.Registry<
  {
    Date: Date_
  },
  $$Utilities.Schema.Scalar.GetEncoded<Date_>,
  $$Utilities.Schema.Scalar.GetDecoded<Date_>
>
