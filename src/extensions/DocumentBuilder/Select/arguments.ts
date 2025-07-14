import { isPlainObject } from 'es-toolkit'

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
export const enumKeyPrefixStripFromObject = <T>(value: T): T => {
  if (Array.isArray(value)) {
    return value.map(item => enumKeyPrefixStripFromObject(item)) as T
  } else if (isPlainObject(value)) {
    const newObject: any = {}
    for (const currentKey in value) {
      const processedValue = enumKeyPrefixStripFromObject(value[currentKey])
      if (isEnumKey(currentKey)) {
        newObject[enumKeyPrefixStrip(currentKey)] = processedValue
      } else {
        newObject[currentKey] = processedValue
      }
    }
    return newObject as T
  }
  return value
}
