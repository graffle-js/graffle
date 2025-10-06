import type { OmitKeysWithPrefix } from '#/lib/prelude'
import type { AnySelectionSet } from './selectionSet.js'

export const prefix = `___`
export type Key = typeof prefix

export const typeConditionPRefix = `${prefix}on_`

export type TypeConditionalKeyPrefix = typeof typeConditionPRefix

// dprint-ignore
export type IsInlineFragmentKey<$Key extends PropertyKey> =
  $Key extends `${Key}${string}` ? true : false

export interface On {
  _tag: 'On'
  typeOrFragmentName: string
}

export type OmitInlineFragmentsWithTypeConditions<$Object> = OmitKeysWithPrefix<
  // @ts-expect-error fixme
  $Object,
  TypeConditionalKeyPrefix
>

export const inlineFragmentKeyPattern = /^___(?:on_(?<typeCondition>.+))?$/

export const normalizeInlineFragment = (
  selectInlineFragment: AnySelectionSet | AnySelectionSet[],
): AnySelectionSet[] => {
  if (Array.isArray(selectInlineFragment)) {
    return selectInlineFragment
  }

  return [selectInlineFragment] as AnySelectionSet[]
}

export const parseKey = (key: string) => {
  const match = key.match(inlineFragmentKeyPattern)

  if (!match) {
    return null
  }

  return {
    typeCondition: match.groups?.[`typeCondition`] ?? null,
  }
}
