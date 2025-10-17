import { describe, expect, test } from 'vitest'
import type { DomainGroupingConfig, FieldGroupingRule } from '../config/configInit.js'

/**
 * Tests for domain-based method organization in the MethodsRoot generator.
 *
 * These tests verify that root field methods can be organized by domain/resource
 * using explicit user-defined rules.
 */

describe('custom rules', () => {
  test('applies string pattern exact match', () => {
    const rule: FieldGroupingRule = {
      pattern: 'pokemonByName',
      groupName: 'pokemon',
      methodName: 'getOne',
    }
    expect(matchesRule('pokemonByName', rule)).toBe(true)
    expect(matchesRule('pokemonById', rule)).toBe(false)
  })

  test('applies RegExp pattern match', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemonBy/,
      groupName: 'pokemon',
      methodName: 'getOne',
    }
    expect(matchesRule('pokemonByName', rule)).toBe(true)
    expect(matchesRule('pokemonById', rule)).toBe(true)
    expect(matchesRule('pokemons', rule)).toBe(false)
  })

  test('uses static method name from rule', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemon/,
      groupName: 'pokemon',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getOne',
    })
  })

  test('uses dynamic method name function from rule', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(add|delete)Pokemon$/,
      groupName: 'pokemon',
      methodName: (fieldName, operationType) => {
        if (fieldName.startsWith('add')) return 'create'
        if (fieldName.startsWith('delete')) return 'delete'
        return fieldName
      },
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'create',
    })
    expect(applyRule('deletePokemon', 'mutation', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'delete',
    })
  })

  test('returns null when field does not match rule pattern', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemon/,
      groupName: 'pokemon',
    }
    expect(applyRule('trainerByName', 'query', rule)).toBe(null)
  })

  test('omits methodName when not provided in rule', () => {
    const rule: FieldGroupingRule = {
      pattern: 'pokemonByName',
      groupName: 'pokemon',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: undefined,
    })
  })
})

describe('rule precedence', () => {
  test('applies first matching custom rule', () => {
    const rules: FieldGroupingRule[] = [
      {
        pattern: /^pokemon/,
        groupName: 'poke',
        methodName: 'customName',
      },
      {
        pattern: /^pokemon/,
        groupName: 'pokemon',
        methodName: 'shouldNotMatch',
      },
    ]
    const result = applyRules('pokemonByName', 'query', rules)
    expect(result).toEqual({
      groupName: 'poke',
      methodName: 'customName',
    })
  })

  test('returns null when no rules match', () => {
    const rules: FieldGroupingRule[] = [
      {
        pattern: /^trainer/,
        groupName: 'trainer',
        methodName: 'customName',
      },
    ]
    const result = applyRules('pokemonByName', 'query', rules)
    expect(result).toBe(null)
  })
})

describe('domain grouping', () => {
  test('groups multiple fields under same domain', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'pokemons', operationType: 'query' as const },
      { name: 'addPokemon', operationType: 'mutation' as const },
    ]
    const config: DomainGroupingConfig = {
      rules: [
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
        { pattern: 'pokemons', groupName: 'pokemon', methodName: 'getMany' },
        { pattern: 'addPokemon', groupName: 'pokemon', methodName: 'create' },
      ],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(grouped).toEqual({
      pokemon: {
        pokemonByName: { methodName: 'getOne', operationType: 'query' },
        pokemons: { methodName: 'getMany', operationType: 'query' },
        addPokemon: { methodName: 'create', operationType: 'mutation' },
      },
    })
  })

  test('handles multiple domains', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'trainerById', operationType: 'query' as const },
      { name: 'battles', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      rules: [
        { pattern: 'pokemonByName', groupName: 'pokemon' },
        { pattern: 'trainerById', groupName: 'trainer' },
        { pattern: 'battles', groupName: 'battle' },
      ],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(Object.keys(grouped)).toEqual(['pokemon', 'trainer', 'battle'])
  })

  test('omits fields that do not match any rule', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'unmatchedField', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      rules: [
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
      ],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(grouped).toEqual({
      pokemon: {
        pokemonByName: { methodName: 'getOne', operationType: 'query' },
      },
    })
    expect(grouped).not.toHaveProperty('unmatchedField')
  })
})

describe('configuration', () => {
  test('returns empty when domains config is false', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
    ]
    const grouped = groupFieldsByDomain(fields, false)
    expect(grouped).toEqual({})
  })

  test('uses provided rules', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      rules: [
        { pattern: 'pokemonByName', groupName: 'pokemon', methodName: 'getOne' },
      ],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(grouped).toEqual({
      pokemon: {
        pokemonByName: { methodName: 'getOne', operationType: 'query' },
      },
    })
  })
})

// ========================================
// Helper Functions (to be implemented)
// ========================================

/**
 * Check if a field name matches a grouping rule's pattern.
 */
function matchesRule(fieldName: string, rule: FieldGroupingRule): boolean {
  if (typeof rule.pattern === 'string') {
    return fieldName === rule.pattern
  }
  return rule.pattern.test(fieldName)
}

/**
 * Apply a single rule to a field name, returning group/method info or null.
 */
function applyRule(
  fieldName: string,
  operationType: 'query' | 'mutation',
  rule: FieldGroupingRule,
): { groupName: string; methodName?: string } | null {
  if (!matchesRule(fieldName, rule)) return null

  const methodName = typeof rule.methodName === 'function'
    ? rule.methodName(fieldName, operationType)
    : rule.methodName

  return {
    groupName: rule.groupName,
    methodName,
  }
}

/**
 * Apply rules in order, returning first match.
 */
function applyRules(
  fieldName: string,
  operationType: 'query' | 'mutation',
  rules: FieldGroupingRule[],
): { groupName: string; methodName?: string } | null {
  for (const rule of rules) {
    const result = applyRule(fieldName, operationType, rule)
    if (result) return result
  }
  return null
}

/**
 * Group fields by domain according to configuration.
 */
function groupFieldsByDomain(
  fields: Array<{ name: string; operationType: 'query' | 'mutation' }>,
  config: false | DomainGroupingConfig,
): Record<string, Record<string, { methodName: string | undefined; operationType: 'query' | 'mutation' }>> {
  if (config === false) return {}

  const grouped: Record<string, Record<string, { methodName: string | undefined; operationType: 'query' | 'mutation' }>> = {}

  for (const field of fields) {
    const result = applyRules(field.name, field.operationType, config.rules)
    if (!result) continue

    const { groupName, methodName } = result

    if (!grouped[groupName]) {
      grouped[groupName] = {}
    }

    grouped[groupName][field.name] = {
      methodName,
      operationType: field.operationType,
    }
  }

  return grouped
}
