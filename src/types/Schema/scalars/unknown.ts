import { Codec } from '../../Codec/_.js'
import type { Scalar } from '../nodes/Scalar/_.js'

/**
 * Scalar representing an unknown custom scalar type without a codec definition.
 *
 * When a GraphQL schema contains a custom scalar (e.g., `Date`, `DateTime`, `JSON`)
 * but no codec is provided in the scalar registry, this scalar is used as a fallback.
 *
 * The decoded type is `unknown`, forcing users to either:
 * 1. Define a proper codec for the custom scalar, or
 * 2. Explicitly handle the unknown type at runtime
 *
 * This aligns with gql-tada's behavior and provides better type safety than
 * the previous fallback to `string`.
 */
export const UnknownScalar: Scalar<string, unknown, any> = {
  kind: 'Scalar',
  name: '__unknown__',
  codec: Codec.create({
    encode: (value: unknown) => value as any,
    decode: (value: any) => value as unknown,
  }),
}
