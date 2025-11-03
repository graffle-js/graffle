/**
 * Bidirectional transformation codec.
 *
 * Generic pattern for encoding and decoding between two type representations.
 * Useful for serialization, API transformations, or any A ↔ B conversion.
 *
 * @example
 * ```typescript
 * const dateCodec = createCodec({
 *   encode: (date: Date) => date.toISOString(),
 *   decode: (str: string) => new Date(str)
 * })
 *
 * const encoded = dateCodec.encode(new Date())  // "2024-01-01T00:00:00.000Z"
 * const decoded = dateCodec.decode(encoded)     // Date object
 * ```
 */
export interface Codec<$Decoded = any, $Encoded = any> {
  /**
   * Transform from decoded (application) type to encoded (wire) type.
   */
  encode: (value: $Decoded) => $Encoded

  /**
   * Transform from encoded (wire) type to decoded (application) type.
   */
  decode: (value: $Encoded) => $Decoded

  /**
   * Type witness for encoded type (compile-time only).
   */
  _typeEncoded: $Encoded

  /**
   * Type witness for decoded type (compile-time only).
   */
  _typeDecoded: $Decoded
}

/**
 * Create a codec from encode and decode functions.
 *
 * @param codec - Object with encode and decode functions
 * @returns Typed Codec instance
 */
export const createCodec = <$Decoded, $Encoded>(codec: {
  encode: (value: $Decoded) => $Encoded
  decode: (value: $Encoded) => $Decoded
}): Codec<$Decoded, $Encoded> => codec as any

/**
 * Generic mapper function type for codec operations.
 */
export type Mapper = (value: any) => any

/**
 * Extract the decoded (application-side) type from a Codec.
 *
 * @example
 * ```typescript
 * type DateCodec = Codec<Date, string>
 * type Decoded = Codec.GetDecoded<DateCodec>  // Date
 * ```
 */
export type GetDecoded<$Codec> = $Codec extends Codec<infer $Decoded, infer _> ? $Decoded : never

/**
 * Extract the encoded (wire-format) type from a Codec.
 *
 * @example
 * ```typescript
 * type DateCodec = Codec<Date, string>
 * type Encoded = GetEncoded<DateCodec>  // string
 * ```
 */
export type GetEncoded<$Codec> = $Codec extends Codec<infer _, infer $Encoded> ? $Encoded : never
