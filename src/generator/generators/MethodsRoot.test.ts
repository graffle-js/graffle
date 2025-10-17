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

describe('capture groups', () => {
  test('uses named capture groups in groupName', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<resource>\w+)ByName$/,
      groupName: '$resource',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getOne',
    })
    expect(applyRule('trainerByName', 'query', rule)).toEqual({
      groupName: 'trainer',
      methodName: 'getOne',
    })
  })

  test('uses braced syntax ${name} for named groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<res>\w+)ByName$/,
      groupName: '${res}',
      methodName: 'getOne',
    }
    expect(applyRule('battleByName', 'query', rule)).toEqual({
      groupName: 'battle',
      methodName: 'getOne',
    })
  })

  test('uses indexed capture groups in groupName', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)ByName$/,
      groupName: '$1',
      methodName: 'getOne',
    }
    expect(applyRule('trainerByName', 'query', rule)).toEqual({
      groupName: 'trainer',
      methodName: 'getOne',
    })
  })

  test('uses capture groups in methodName', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemonBy(\w+)$/,
      groupName: 'pokemon',
      methodName: 'getBy$1',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getByName',
    })
    expect(applyRule('pokemonById', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getById',
    })
  })

  test('uses multiple indexed capture groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)By(\w+)$/,
      groupName: '$1',
      methodName: 'getBy$2',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getByName',
    })
  })

  test('mixed named and indexed groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<action>add|update)(\w+)$/,
      groupName: '$2',
      methodName: '$action',
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      groupName: 'Pokemon',
      methodName: 'add',
    })
    expect(applyRule('updateTrainer', 'mutation', rule)).toEqual({
      groupName: 'Trainer',
      methodName: 'update',
    })
  })

  test('function methodName receives match object', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)By(\w+)$/,
      groupName: '$1',
      methodName: (fieldName, operationType, match) => {
        return match ? `getBy${match[2]}` : fieldName
      },
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      groupName: 'pokemon',
      methodName: 'getByName',
    })
  })

  test('function methodName with named groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
      groupName: '$resource',
      methodName: (fieldName, operationType, match) => {
        if (!match?.groups) return `unknown`
        const action = match.groups[`action`]
        if (action === 'add') return 'create'
        if (action === 'delete') return 'remove'
        return action ?? `unknown`
      },
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      groupName: 'Pokemon',
      methodName: 'create',
    })
    expect(applyRule('updateTrainer', 'mutation', rule)).toEqual({
      groupName: 'Trainer',
      methodName: 'update',
    })
    expect(applyRule('deleteBattle', 'mutation', rule)).toEqual({
      groupName: 'Battle',
      methodName: 'remove',
    })
  })

  test('captures work with groupFieldsByDomain', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'trainerByName', operationType: 'query' as const },
      { name: 'battleById', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      rules: [
        { pattern: /^(?<resource>\w+)By(Name|Id)$/, groupName: '$resource', methodName: 'getBy$2' },
      ],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(grouped).toEqual({
      pokemon: {
        pokemonByName: { methodName: 'getByName', operationType: 'query' },
      },
      trainer: {
        trainerByName: { methodName: 'getByName', operationType: 'query' },
      },
      battle: {
        battleById: { methodName: 'getById', operationType: 'query' },
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
 * Replace capture group references in a template string with actual captured values.
 * Supports both indexed ($1, $2) and named (${name}, $name) capture groups.
 */
function replaceCaptures(template: string, match: RegExpExecArray): string {
  let result = template

  // Replace named groups: ${name} or $name
  result = result.replace(/\$\{(\w+)\}|\$(\w+)/g, (fullMatch, bracedName, unbracedName) => {
    const name = bracedName || unbracedName
    // Check if it's a named group
    if (match.groups?.[name] !== undefined) {
      return match.groups[name]
    }
    // Check if it's an indexed group (e.g., $1)
    const index = parseInt(name, 10)
    if (!isNaN(index) && match[index] !== undefined) {
      return match[index]
    }
    // Return original if no match found
    return fullMatch
  })

  return result
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

  let groupName = rule.groupName
  let methodName = rule.methodName

  // If pattern is RegExp, extract captures and replace references
  if (rule.pattern instanceof RegExp) {
    const match = rule.pattern.exec(fieldName)
    if (!match) return null

    // Process groupName with capture groups
    if (typeof groupName === 'string') {
      groupName = replaceCaptures(groupName, match)
    }

    // Process methodName with capture groups
    if (typeof methodName === 'string') {
      methodName = replaceCaptures(methodName, match)
    } else if (typeof methodName === 'function') {
      // Pass match as third parameter for advanced usage
      methodName = methodName(fieldName, operationType, match)
    }
  } else {
    // String pattern - apply methodName as before
    if (typeof methodName === 'function') {
      methodName = methodName(fieldName, operationType)
    }
  }

  return {
    groupName,
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
