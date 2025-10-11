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
  },
} as $Registry

export type $Registry = $$Utilities.Schema.Scalar.Registry<
  {
    Date: Date
  },
  $$Utilities.Schema.Scalar.GetEncoded<Date>,
  $$Utilities.Schema.Scalar.GetDecoded<Date>
>
