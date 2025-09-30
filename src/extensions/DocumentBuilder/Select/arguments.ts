import { type DeepObjectValue, mapEntriesDeep } from '../../../lib/object-utils.js'
import type { VariableMarker } from '../variable.js'
import type { DefaultContext } from './context.js'

export type ArgValue<$Context = DefaultContext> =
  | string
  | boolean
  | null
  | number
  | ArgsObject<$Context>
  | ($Context extends { variablesEnabled: true } ? VariableMarker<any, any> : never)

export type ArgsObject<$Context = DefaultContext> = {
  [k: string]: ArgValue<$Context>
}

/**
 * This type loosely captures an arguments object
 * by being an indexed type that can recurse (for input objects)
 * and allow unknown values to permit accepting custom scalars.
 */
export type ArgsObjectLoose = {
  [k: string]: unknown | ArgsObjectLoose
}

export const key = `$`

export type key = typeof key

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
