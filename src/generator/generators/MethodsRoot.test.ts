import { describe, expect, test, vi } from 'vitest'
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
      namespace: 'pokemon',
      methodName: 'getOne',
    }
    expect(matchesRule('pokemonByName', rule)).toBe(true)
    expect(matchesRule('pokemonById', rule)).toBe(false)
  })

  test('applies RegExp pattern match', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemonBy/,
      namespace: 'pokemon',
      methodName: 'getOne',
    }
    expect(matchesRule('pokemonByName', rule)).toBe(true)
    expect(matchesRule('pokemonById', rule)).toBe(true)
    expect(matchesRule('pokemons', rule)).toBe(false)
  })

  test('uses static method name from rule', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemon/,
      namespace: 'pokemon',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getOne',
    })
  })

  test('uses dynamic method name function from rule', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(add|delete)Pokemon$/,
      namespace: 'pokemon',
      methodName: (fieldName, operationType) => {
        if (fieldName.startsWith('add')) return 'create'
        if (fieldName.startsWith('delete')) return 'delete'
        return fieldName
      },
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'create',
    })
    expect(applyRule('deletePokemon', 'mutation', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'delete',
    })
  })

  test('returns null when field does not match rule pattern', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemon/,
      namespace: 'pokemon',
    }
    expect(applyRule('trainerByName', 'query', rule)).toBe(null)
  })

  test('omits methodName when not provided in rule', () => {
    const rule: FieldGroupingRule = {
      pattern: 'pokemonByName',
      namespace: 'pokemon',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: undefined,
    })
  })
})

describe('rule precedence', () => {
  test('applies first matching custom rule', () => {
    const rules: FieldGroupingRule[] = [
      {
        pattern: /^pokemon/,
        namespace: 'poke',
        methodName: 'customName',
      },
      {
        pattern: /^pokemon/,
        namespace: 'pokemon',
        methodName: 'shouldNotMatch',
      },
    ]
    const result = applyRules('pokemonByName', 'query', rules)
    expect(result).toEqual({
      namespacePath: ['poke'],
      methodName: 'customName',
    })
  })

  test('returns null when no rules match', () => {
    const rules: FieldGroupingRule[] = [
      {
        pattern: /^trainer/,
        namespace: 'trainer',
        methodName: 'customName',
      },
    ]
    const result = applyRules('pokemonByName', 'query', rules)
    expect(result).toBe(null)
  })

  test('warns when RegExp shadows later string pattern', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const rules: FieldGroupingRule[] = [
      { pattern: /^pokemon/, namespace: 'pokemon' },
      { pattern: 'pokemonByName', namespace: 'specific', methodName: 'getOne' },
    ]

    checkRulePrecedence(rules)

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Rule precedence warning'))
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('pokemonByName'))

    consoleSpy.mockRestore()
  })

  test('warns when duplicate string patterns exist', () => {
    const consoleSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    const rules: FieldGroupingRule[] = [
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
      { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getDuplicate' },
    ]

    checkRulePrecedence(rules)

    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Rule precedence warning'))
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('duplicate'))

    consoleSpy.mockRestore()
  })
})

describe('domain grouping', () => {
  test('groups multiple fields under same domain', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'pokemons', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
          { pattern: 'pokemons', namespace: 'pokemon', methodName: 'getMany' },
        ],
      }],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(grouped).toEqual({
      pokemon: {
        pokemonByName: { methodName: 'getOne', operationType: 'query' },
        pokemons: { methodName: 'getMany', operationType: 'query' },
      },
    })
  })

  test('handles multiple domains', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'trainerById', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: 'pokemonByName', namespace: 'pokemon' },
          { pattern: 'trainerById', namespace: 'trainer' },
        ],
      }],
    }
    const grouped = groupFieldsByDomain(fields, config)
    expect(Object.keys(grouped)).toEqual(['pokemon', 'trainer'])
  })

  test('omits fields that do not match any rule', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'unmatchedField', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
        ],
      }],
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
})

describe('conflict detection', () => {
  test('throws error when multiple fields map to same method name', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'pokemonById', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
          { pattern: 'pokemonById', namespace: 'pokemon', methodName: 'getOne' },
        ],
      }],
    }
    expect(() => groupFieldsByDomain(fields, config)).toThrow(
      'Namespace organization conflict at namespace "pokemon": Multiple fields map to method "getOne": pokemonByName, pokemonById',
    )
  })

  test('allows same method name in different domains', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'trainerByName', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: 'pokemonByName', namespace: 'pokemon', methodName: 'getOne' },
          { pattern: 'trainerByName', namespace: 'trainer', methodName: 'getOne' },
        ],
      }],
    }
    expect(() => groupFieldsByDomain(fields, config)).not.toThrow()
  })
})

describe('capture groups', () => {
  test('uses named capture groups in namespace', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: '$resource',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getOne',
    })
    expect(applyRule('trainerByName', 'query', rule)).toEqual({
      namespacePath: ['trainer'],
      methodName: 'getOne',
    })
  })

  test('uses indexed capture groups in namespace', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)ByName$/,
      namespace: '$1',
      methodName: 'getOne',
    }
    expect(applyRule('trainerByName', 'query', rule)).toEqual({
      namespacePath: ['trainer'],
      methodName: 'getOne',
    })
  })

  test('uses capture groups in methodName', () => {
    const rule: FieldGroupingRule = {
      pattern: /^pokemonBy(\w+)$/,
      namespace: 'pokemon',
      methodName: 'getBy$1',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getByName',
    })
    expect(applyRule('pokemonById', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getById',
    })
  })

  test('uses multiple indexed capture groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)By(\w+)$/,
      namespace: '$1',
      methodName: 'getBy$2',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getByName',
    })
  })

  test('mixed named and indexed groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<action>add|update)(\w+)$/,
      namespace: '$2',
      methodName: '$action',
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      namespacePath: ['Pokemon'],
      methodName: 'add',
    })
    expect(applyRule('updateTrainer', 'mutation', rule)).toEqual({
      namespacePath: ['Trainer'],
      methodName: 'update',
    })
  })

  test('function methodName receives match object', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)By(\w+)$/,
      namespace: '$1',
      methodName: (fieldName, operationType, match) => {
        return match ? `getBy${match[2]}` : fieldName
      },
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getByName',
    })
  })

  test('function methodName with named groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<action>add|update|delete)(?<resource>\w+)$/,
      namespace: '$resource',
      methodName: (fieldName, operationType, match) => {
        if (!match?.groups) return `unknown`
        const action = match.groups[`action`]
        if (action === 'add') return 'create'
        if (action === 'delete') return 'remove'
        return action ?? `unknown`
      },
    }
    expect(applyRule('addPokemon', 'mutation', rule)).toEqual({
      namespacePath: ['Pokemon'],
      methodName: 'create',
    })
  })

  test('captures work with groupFieldsByDomain', () => {
    const fields = [
      { name: 'pokemonByName', operationType: 'query' as const },
      { name: 'trainerByName', operationType: 'query' as const },
      { name: 'battleById', operationType: 'query' as const },
    ]
    const config: DomainGroupingConfig = {
      groups: [{
        rules: [
          { pattern: /^(?<resource>\w+)By(Name|Id)$/, namespace: '$resource', methodName: 'getBy$2' },
        ],
      }],
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

describe('string template transformations', () => {
  test('applies transformations to capture groups', () => {
    // Test kebab-case transformation
    expect(applyRule('pokemonSpeciesByName', 'query', {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: '${kebab:resource}',
      methodName: 'getOne',
    })).toEqual({
      namespacePath: ['pokemon-species'],
      methodName: 'getOne',
    })

    // Test PascalCase transformation
    expect(applyRule('pokemonByName', 'query', {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: '${pascal:resource}',
      methodName: 'getOne',
    })).toEqual({
      namespacePath: ['Pokemon'],
      methodName: 'getOne',
    })

    // Test snake_case transformation
    expect(applyRule('pokemonSpeciesByName', 'query', {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: '${snake:resource}',
      methodName: 'getOne',
    })).toEqual({
      namespacePath: ['pokemon_species'],
      methodName: 'getOne',
    })
  })

  test('transformations work with indexed groups', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(\w+)ByName$/,
      namespace: '${kebab:1}',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonSpeciesByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon-species'],
      methodName: 'getOne',
    })
  })

  test('transformations work in methodName', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: 'pokemon',
      methodName: 'get${pascal:resource}',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getPokemon',
    })
  })

  test('multiple transformations in one template', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<prefix>get)(?<resource>\w+)$/,
      namespace: '${kebab:resource}',
      methodName: '${lower:prefix}${pascal:resource}',
    }
    expect(applyRule('getPokemon', 'query', rule)).toEqual({
      namespacePath: ['pokemon'],
      methodName: 'getPokemon',
    })
  })

  test('unknown transformation leaves template unchanged', () => {
    const rule: FieldGroupingRule = {
      pattern: /^(?<resource>\w+)ByName$/,
      namespace: '${unknown:resource}',
      methodName: 'getOne',
    }
    expect(applyRule('pokemonByName', 'query', rule)).toEqual({
      namespacePath: ['${unknown:resource}'],
      methodName: 'getOne',
    })
  })
})

// ========================================
// Helper Functions (to be implemented)
// ========================================

/**
 * Check rules for potential precedence issues where later rules might be shadowed by earlier ones.
 */
function checkRulePrecedence(rules: FieldGroupingRule[]): void {
  const warnings: string[] = []

  for (let i = 0; i < rules.length; i++) {
    const earlierRule = rules[i]!

    for (let j = i + 1; j < rules.length; j++) {
      const laterRule = rules[j]!

      // Case 1: Earlier rule is RegExp, later rule is string
      // Check if the earlier RegExp would match the later string
      if (earlierRule.pattern instanceof RegExp && typeof laterRule.pattern === 'string') {
        if (earlierRule.pattern.test(laterRule.pattern)) {
          warnings.push(
            `Rule precedence warning: Rule at index ${i} (pattern: ${earlierRule.pattern}) `
              + `matches the string pattern at index ${j} ('${laterRule.pattern}'). `
              + `The later rule will never be reached. Consider reordering your rules to place `
              + `more specific patterns before general ones.`,
          )
        }
      }

      // Case 2: Both are strings and identical
      // This would be a complete shadowing
      if (typeof earlierRule.pattern === 'string' && typeof laterRule.pattern === 'string') {
        if (earlierRule.pattern === laterRule.pattern) {
          warnings.push(
            `Rule precedence warning: Rule at index ${i} and rule at index ${j} both match `
              + `the same field name ('${earlierRule.pattern}'). The later rule will never be reached. `
              + `Consider removing the duplicate or adjusting your grouping logic.`,
          )
        }
      }
    }
  }

  // Print all warnings
  if (warnings.length > 0) {
    console.warn(`\n⚠️  Domain organization rule precedence warnings:\n`)
    warnings.forEach(warning => console.warn(`   ${warning}\n`))
  }
}

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
 * Supports:
 * - Indexed capture groups: $1, $2, etc.
 * - Named capture groups: $name or ${name}
 * - Transformations: ${transform:captureRef}
 *
 * Available transformations:
 * - kebab: Convert to kebab-case
 * - pascal: Convert to PascalCase
 * - camel: Convert to camelCase
 * - snake: Convert to snake_case
 * - constant: Convert to CONSTANT_CASE
 * - title: Convert to Title Case
 * - upper: Convert to UPPERCASE
 * - lower: Convert to lowercase
 * - capFirst: Capitalize first letter
 * - uncapFirst: Uncapitalize first letter
 */
function replaceCaptures(template: string, match: RegExpExecArray): string {
  let result = template

  // Replace with transformations: ${transform:name} or ${transform:1}
  result = result.replace(/\$\{(\w+):(\w+)\}/g, (fullMatch, transform, captureRef) => {
    // Get captured value (name or index)
    let value: string | undefined
    const index = parseInt(captureRef, 10)
    if (!isNaN(index)) {
      value = match[index]
    } else {
      value = match.groups?.[captureRef]
    }

    if (value === undefined) return fullMatch

    // Apply transformation (simplified version using native JS)
    switch (transform) {
      case 'kebab':
        return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      case 'pascal':
        return value.charAt(0).toUpperCase() + value.slice(1)
      case 'camel':
        return value.charAt(0).toLowerCase() + value.slice(1)
      case 'snake':
        return value.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase()
      case 'constant':
        return value.replace(/([a-z])([A-Z])/g, '$1_$2').toUpperCase()
      case 'title':
        return value.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
      case 'upper':
        return value.toUpperCase()
      case 'lower':
        return value.toLowerCase()
      case 'capFirst':
        return value.charAt(0).toUpperCase() + value.slice(1)
      case 'uncapFirst':
        return value.charAt(0).toLowerCase() + value.slice(1)
      default:
        return fullMatch // Unknown transform, keep original
    }
  })

  // Then handle plain substitutions: ${name} or $name
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
 * Normalize a namespace value to an array path or null.
 */
function normalizeNamespace(namespace: string | string[] | null | undefined): string[] | null {
  if (namespace === null || namespace === undefined) {
    return null
  }
  if (Array.isArray(namespace)) {
    return namespace
  }
  // Parse dot-notation
  return namespace.split('.').filter(part => part.length > 0)
}

/**
 * Apply a single rule to a field name, returning namespace/method info or null.
 */
function applyRule(
  fieldName: string,
  operationType: 'query' | 'mutation',
  rule: FieldGroupingRule,
): { namespacePath: string[] | null; methodName?: string } | null {
  if (!matchesRule(fieldName, rule)) return null

  let namespace = rule.namespace
  let methodName = rule.methodName

  // If pattern is RegExp, extract captures and replace references
  if (rule.pattern instanceof RegExp) {
    const match = rule.pattern.exec(fieldName)
    if (!match) return null

    // Process namespace with capture groups (only if it's a string)
    if (typeof namespace === 'string') {
      namespace = replaceCaptures(namespace, match)
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

  // Namespace must be defined at this point (either from rule or from defaults)
  if (namespace === undefined) {
    throw new Error(
      `Rule matching field "${fieldName}" has no namespace defined. `
        + `Ensure all rules have a namespace or provide a default namespace in the group configuration.`,
    )
  }

  // Normalize namespace to array path or null
  const namespacePath = normalizeNamespace(namespace)

  return {
    namespacePath,
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
): { namespacePath: string[] | null; methodName?: string } | null {
  for (const rule of rules) {
    const result = applyRule(fieldName, operationType, rule)
    if (result) return result
  }
  return null
}

/**
 * Apply group defaults to rules (simplified for testing).
 */
function applyGroupDefaults(
  group: {
    defaults?: {
      namespace?: string | string[] | null
      methodName?:
        | string
        | ((fieldName: string, operationType: 'query' | 'mutation', match?: RegExpExecArray) => string)
    }
    rules: FieldGroupingRule[]
  },
): FieldGroupingRule[] {
  return group.rules.map(rule => ({
    ...rule,
    namespace: rule.namespace !== undefined ? rule.namespace : group.defaults?.namespace,
    methodName: rule.methodName !== undefined ? rule.methodName : group.defaults?.methodName,
  }))
}

/**
 * Group fields by namespace according to configuration.
 */
function groupFieldsByDomain(
  fields: Array<{ name: string; operationType: 'query' | 'mutation' }>,
  config: false | DomainGroupingConfig,
): Record<string, Record<string, { methodName: string | undefined; operationType: 'query' | 'mutation' }>> {
  if (config === false) return {}

  const grouped: Record<
    string,
    Record<string, { methodName: string | undefined; operationType: 'query' | 'mutation' }>
  > = {}

  // Process each group independently
  for (const group of config.groups) {
    // Apply defaults to rules in this group
    const rulesWithDefaults = applyGroupDefaults(group)

    for (const field of fields) {
      const result = applyRules(field.name, field.operationType, rulesWithDefaults)
      if (!result) continue

      const { namespacePath, methodName } = result

      // Create a key for the namespace path
      // null → '__root__', ['a', 'b'] → 'a.b'
      const namespaceKey = namespacePath === null ? '__root__' : namespacePath.join('.')

      if (!grouped[namespaceKey]) {
        grouped[namespaceKey] = {}
      }

      grouped[namespaceKey][field.name] = {
        methodName,
        operationType: field.operationType,
      }
    }
  }

  // Detect conflicts: multiple fields mapping to same namespace + method name
  for (const [namespaceKey, namespaceFields] of Object.entries(grouped)) {
    const methodNameToFields = new Map<string, string[]>()

    for (const [fieldName, fieldInfo] of Object.entries(namespaceFields)) {
      const effectiveMethodName = fieldInfo.methodName ?? fieldName
      const existing = methodNameToFields.get(effectiveMethodName)

      if (existing) {
        existing.push(fieldName)
      } else {
        methodNameToFields.set(effectiveMethodName, [fieldName])
      }
    }

    // Check for conflicts (multiple fields with same method name)
    for (const [methodName, conflictingFields] of methodNameToFields.entries()) {
      if (conflictingFields.length > 1) {
        const fieldNames = conflictingFields.join(', ')
        const namespaceDisplay = namespaceKey === '__root__' ? 'root level' : `namespace "${namespaceKey}"`
        throw new Error(
          `Namespace organization conflict at ${namespaceDisplay}: Multiple fields map to method "${methodName}": ${fieldNames}. `
            + `Please adjust your grouping rules to ensure unique method names within each namespace.`,
        )
      }
    }
  }

  return grouped
}
