/**
 * A deep object value can be any JSON-serializable value including nested objects and arrays.
 */
export type DeepObjectValue = string | boolean | null | number | DeepObject | DeepObjectValue[]

/**
 * A deep object is a plain object with string keys and deep object values.
 */
export type DeepObject = { [key: string]: DeepObjectValue }
