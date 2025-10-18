import type { Indicator } from './Indicator/$.js'
import type { AnyExceptAlias } from './selectionSet.js'

export type SelectAlias<$SelectionSet = AnyExceptAlias> =
  | SelectAliasOne<$SelectionSet>
  | SelectAliasMultiple<$SelectionSet>

// dprint-ignore
export type SelectAliasOne<$SelectionSet = AnyExceptAlias> =
  [
    alias: string,
    selectionSet: $SelectionSet
  ]

export type SelectAliasMultiple<$SelectionSet = AnyExceptAlias> = [
  ...SelectAliasOne<$SelectionSet>[],
]

/**
 * Short alias syntax for scalars without required args.
 * Equivalent to `[alias, true]`.
 *
 * @example
 * ```typescript
 * { id: ["myId"] }  // Same as: { id: ["myId", true] }
 * ```
 */
export type SelectAliasShort = [alias: string]

/**
 * String-only alias syntax for scalars without required args.
 * Equivalent to `[alias, true]`.
 *
 * @example
 * ```typescript
 * { id: "myId" }  // Same as: { id: ["myId", true] }
 * ```
 */
export type SelectAliasString = string

export const isSelectAlias = (value: unknown): value is SelectAlias<any> | SelectAliasShort => {
  if (!Array.isArray(value)) return false

  // Short array: ["x"]
  if (value.length === 1 && typeof value[0] === `string`) return true

  // Full array: ["x", <selectionSet>]
  if (value.length === 2 && typeof value[0] === `string`) return true

  // Multiple: [["x", ...], ...]
  if (isSelectAlias(value[0])) return true

  return false
}

export const isSelectAliasOne = (selectAlias: SelectAlias<any> | SelectAliasShort): selectAlias is SelectAliasOne => {
  return typeof selectAlias[0] === `string`
}

export const normalizeSelectAlias = (
  selectAlias: SelectAlias<any> | SelectAliasShort | SelectAliasString,
): SelectAliasMultiple => {
  // String: "x" → [["x", true]]
  if (typeof selectAlias === 'string') {
    return [[selectAlias, true as Indicator.Indicator]]
  }

  if (Array.isArray(selectAlias)) {
    // Short array: ["x"] → [["x", true]]
    if (selectAlias.length === 1 && typeof selectAlias[0] === 'string') {
      return [[selectAlias[0], true as Indicator.Indicator]]
    }

    // Single full alias: ["x", <selectionSet>] → [["x", <selectionSet>]]
    if (isSelectAliasOne(selectAlias)) {
      return [selectAlias]
    }
  }

  // Multiple aliases (already normalized)
  return selectAlias as SelectAliasMultiple
}
