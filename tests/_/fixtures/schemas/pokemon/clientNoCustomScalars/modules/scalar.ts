import * as $$Utilities from '#graffle/utilities-for-generated'
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

export const Date = {
  kind: 'Scalar',
  name: 'Date',
  codec: $$Utilities.Codec.create({ encode: (value: any) => value, decode: (value: any) => value }),
} as $$Utilities.GraphqlKit.Schema.Type.Scalar<'Date', string, string>
export type Date = $$Utilities.GraphqlKit.Schema.Type.Scalar<'Date', string, string>

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
  map: {},
} as $Registry

/**
 * Type-level registry of custom scalars.
 *
 * Provides type information about custom scalars for the type system.
 */
export type $Registry = $$Utilities.Schema.Scalars.Registry.Empty
