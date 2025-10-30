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

/**
 * Custom scalar codec for the `Date` type.
 *
 * Handles encoding (TypeScript → GraphQL) and decoding (GraphQL → TypeScript)
 * transformations for this custom scalar.
 */
export const Date = CustomScalars.Date
export type Date = typeof CustomScalars.Date
/**
 * The decoded (TypeScript-side) type for the `Date` scalar.
 *
 * This is the type you work with in your application code after the scalar
 * has been decoded from its GraphQL wire format.
 */
export type DateDecoded = $$Utilities.Schema.Scalar.GetDecoded<Date>
/**
 * The encoded (GraphQL wire format) type for the `Date` scalar.
 *
 * This is the type used when transmitting the scalar value over the network.
 */
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

/**
 * Runtime registry of custom scalar codecs.
 *
 * Maps scalar type names to their codec implementations for encoding/decoding.
 */

export const $registry = {
  map: {
    Date: CustomScalars.Date,
  },
} as $Registry

/**
 * Type-level registry of custom scalars.
 *
 * Provides type information about custom scalars for the type system.
 */
export type $Registry = $$Utilities.Schema.Scalar.Registry<
  {
    Date: Date
  },
  $$Utilities.Schema.Scalar.GetEncoded<Date>,
  $$Utilities.Schema.Scalar.GetDecoded<Date>
>
