import * as CustomScalars from '../../scalars.js';
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
export const Date = CustomScalars.Date;
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
/**
 * Custom scalar codec for the `bigint` type.
 *
 * Handles encoding (TypeScript → GraphQL) and decoding (GraphQL → TypeScript)
 * transformations for this custom scalar.
 */
const $bigint = CustomScalars.bigint;
export { $bigint as bigint };
export * from '#graffle/generator-helpers/standard-scalar-types';
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
        bigint: CustomScalars.bigint,
    },
};
//# sourceMappingURL=scalar.js.map