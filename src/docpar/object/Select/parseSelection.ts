import { Select } from './_.js'
import type { SelectionSet } from './__.js'
import { Arguments, Directive, Indicator, InlineFragment, SelectAlias, SelectScalarsWildcard } from './__.js'

export interface ParsedSelectionArguments {
  type: 'Arguments'
  arguments: Record<string, any>
}

export interface ParsedSelectionDirective {
  type: 'Directive'
  name: string
  /**
   * `null` when undefined is passed to a directive.
   */

  arguments: null | {
    input: unknown
    parsed: Record<string, any>
  }
}

export interface ParsedSelectionInlineFragments {
  type: 'InlineFragment'
  typeCondition: string | null
  selectionSets: SelectionSet.AnySelectionSet[]
}

export interface ParsedSelectionScalarsWildcard {
  type: 'ScalarsWildcard'
}

export interface ParsedSelectionSelectionSet {
  type: 'SelectionSet'
  name: string
  selectionSet: SelectionSet.AnySelectionSet
}

export interface ParsedSelectionIndicator {
  type: 'Indicator'
  name: string
  select: boolean
}

export interface ParsedSelectionAlias {
  type: 'Alias'
  name: string
  aliases: SelectAlias.SelectAliasMultiple
}

export type ParsedFieldSelection =
  | ParsedSelectionSelectionSet
  | ParsedSelectionIndicator

export type ParsedSelection =
  | ParsedSelectionArguments
  | ParsedSelectionDirective
  | ParsedSelectionInlineFragments
  | ParsedSelectionScalarsWildcard
  | ParsedSelectionSelectionSet
  | ParsedSelectionIndicator
  | ParsedSelectionAlias

export type ParsedFieldLevelSelection =
  | ParsedSelectionArguments
  | ParsedSelectionDirective

export type ParsedInlineFragmentLevelSelection =
  | ParsedSelectionDirective
  | ParsedSelectionObjectLevel

export type ParsedSelectionObjectLevel =
  | ParsedSelectionInlineFragments
  | ParsedSelectionScalarsWildcard
  | ParsedSelectionSelectionSet
  | ParsedSelectionIndicator
  | ParsedSelectionAlias

export const parseSelectionField = (key: string, value: any): ParsedFieldSelection => {
  return parseSelection(key, value) as any
}
export const parseSelectionRoot = (key: string, value: any): ParsedSelectionObjectLevel => {
  return parseSelection(key, value) as any
}

export const parseSelectionInlineFragment = (key: string, value: any): ParsedInlineFragmentLevelSelection => {
  return parseSelection(key, value) as any
}

export const parseSelection = (key: string, value: any): ParsedSelection => {
  if (key === Arguments.key) {
    // Strip enum prefix ($) from argument keys only, preserving nested values as-is.
    // This separation is crucial: argument keys need their $ prefix removed for GraphQL
    // (e.g., $case -> case), but values within arguments must keep their $ prefixes
    // so that enum fields in input objects can be detected later during value processing.
    // Example: { $case: 'Foo', input: { $direction: 'ASC' } }
    //   - $case is stripped to 'case' (argument key)
    //   - $direction keeps its $ prefix (will be processed in Value.ts)
    const argumentsNormalized: Record<string, any> = {}
    for (const [argKey, argValue] of Object.entries(value)) {
      const normalizedKey = Select.Arguments.enumKeyPrefixStrip(argKey)
      argumentsNormalized[normalizedKey] = argValue
    }
    return {
      type: `Arguments`,
      arguments: argumentsNormalized,
    }
  }

  const directiveName = Directive.parseKey(key)
  if (directiveName) {
    // @ts-expect-error fixme
    const directiveDef = Directive.definitionsByName[directiveName]
    if (!directiveDef) {
      throw new Error(`Unknown directive ${key}.`)
    }

    return {
      type: `Directive`,
      name: directiveName,
      arguments: value === undefined ? null : {
        input: value,
        parsed: directiveDef.normalizeArguments(value),
      },
    }
  }

  if (key === SelectScalarsWildcard.key) {
    return {
      type: `ScalarsWildcard`,
    }
  }

  if (Indicator.isIndicator(value)) {
    return {
      type: `Indicator`,
      name: key,
      select: Indicator.isPositiveIndicator(value),
    }
  }

  const inlineFragment = InlineFragment.parseKey(key)
  if (inlineFragment) {
    const selectionSets = InlineFragment.normalizeInlineFragment(value)
    return {
      type: `InlineFragment`,
      typeCondition: inlineFragment.typeCondition,
      selectionSets,
    }
  }

  // Parse string alias BEFORE object check (strings are always aliases for scalar fields)
  if (typeof value === 'string') {
    return {
      type: `Alias`,
      name: key,
      aliases: SelectAlias.normalizeSelectAlias(value),
    }
  }

  // Parse array alias after inline fragment because both can have array values but the keys are distinctive
  if (SelectAlias.isSelectAlias(value)) {
    return {
      type: `Alias`,
      name: key,
      aliases: SelectAlias.normalizeSelectAlias(value),
    }
  }

  if (typeof value === `object` && value !== null) {
    return {
      type: `SelectionSet`,
      name: key,
      selectionSet: value,
    }
  }

  throw new Error(`Unknown selection at key ${key}.`)
}
