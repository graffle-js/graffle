import { type DeepObjectValue, mapEntriesDeep } from '../../../lib/object-utils.js'

export type ArgValue = string | boolean | null | number | ArgsObject

export type ArgsObject = { [k: string]: ArgValue }

export const key = `$`

export const enumKeyPrefix = `$`

export const enumKeyPrefixPattern = /^\$/g

export const enumKeyPrefixStrip = (key: string) => key.replace(enumKeyPrefixPattern, ``)

export const isEnumKey = (key: string) => key.startsWith(enumKeyPrefix)

/**
 * Recursively strip enum prefixes ($) from all keys in a nested object structure.
 * This is useful for processing variable values where enum field names need to have
 * their $ prefix removed for GraphQL compatibility.
 */
export const enumKeyPrefixStripFromObject = <T extends DeepObjectValue>(value: T): T => {
  return mapEntriesDeep(value, (key, value) => {
    if (isEnumKey(key)) {
      return {
        key: enumKeyPrefixStrip(key),
        value: value,
      }
    }
    return undefined
  })
}
