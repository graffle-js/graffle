import { Codec } from '#src/types/Codec/_.js'
import type { Scalar } from '../nodes/Scalar/_.js'

/**
 * Apply a codec's mapper function (decode or encode) to a GraphQL value.
 *
 * Handles GraphQL's structural types:
 * - Null values are returned as-is
 * - Arrays are recursively traversed
 * - Scalar values are transformed by the mapper
 *
 * @param mapper - Codec encode or decode function
 * @param value - GraphQL value (possibly null or array)
 * @returns Transformed value with same structure
 */
export const applyCodec = <$Mapper extends Codec.Mapper>(
  mapper: $Mapper,
  value: any,
): null | ReturnType<$Mapper> | ReturnType<$Mapper>[] => {
  if (value === null) {
    return null
  }

  if (Array.isArray(value)) {
    return value.map(item => applyCodec(mapper, item)) as ReturnType<$Mapper>
  }

  return mapper(value) as ReturnType<$Mapper>
}

/**
 * Type guard to check if a value is a Scalar object.
 *
 * @param value - Value to check
 * @returns True if value is a Scalar with codec
 */
export const isScalar = (value: unknown): value is Scalar =>
  typeof value === `object` && value !== null && `codec` in value && typeof value.codec === `object`
