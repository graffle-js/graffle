import { isPlainObject } from 'es-toolkit'

/**
 * A deep object value can be any JSON-serializable value including nested objects and arrays.
 */
export type DeepObjectValue = string | boolean | null | number | DeepObject | DeepObjectValue[]

/**
 * A deep object is a plain object with string keys and deep object values.
 */
export type DeepObject = { [key: string]: DeepObjectValue }

/**
 * Recursively traverse a nested object structure and transform key-value pairs.
 *
 * This utility applies a visitor function to every object entry in a deeply nested structure,
 * allowing you to transform both keys and values. The visitor can return undefined to leave
 * the entry unchanged, or return a new {key, value} pair to transform it.
 *
 * @param value - The value to traverse (can be primitive, object, or array)
 * @param visitor - Function called for each object entry. Return undefined to keep unchanged,
 *                  or return {key, value} to transform the entry.
 * @returns A new structure with transformations applied
 *
 * @example
 * // Strip dollar signs from all object keys
 * mapEntriesDeep(data, (key, value) =>
 *   key.startsWith('$') ? { key: key.slice(1), value } : undefined
 * )
 *
 * @example
 * // Convert all string values to uppercase
 * mapEntriesDeep(data, (key, value) =>
 *   typeof value === 'string' ? { key, value: value.toUpperCase() } : undefined
 * )
 */
export const mapEntriesDeep = <T extends DeepObjectValue>(
  value: T,
  visitor: (key: string, value: DeepObjectValue) => undefined | { key: string; value: DeepObjectValue },
): T => {
  if (Array.isArray(value)) {
    return value.map(item => mapEntriesDeep(item, visitor)) as T
  } else if (isPlainObject(value)) {
    const newObject: DeepObject = {}
    for (const currentKey in value) {
      const currentValue = mapEntriesDeep(value[currentKey]!, visitor)
      const visitorResult = visitor(currentKey, currentValue)
      if (visitorResult) {
        newObject[visitorResult.key] = visitorResult.value
      } else {
        newObject[currentKey] = currentValue
      }
    }
    return newObject as T
  }

  return value
}
