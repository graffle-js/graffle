// todo remove use of Utils.Aug when schema errors not in use
import { Grafaid } from '#lib/grafaid'
import { Code } from '#src/lib/Code.js'
import { createFromObjectTypeAndMapOrThrow } from '#src/lib/grafaid/schema/RootDetails.js'
import { Str } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import {
  getBatchMethodDoc,
  getOutputFieldMethodDoc,
  getRootMethodsInterfaceDoc,
  getRootPropertyDoc,
  getTypenameMethodDoc,
} from '../helpers/jsdoc.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { codeImportAll, importUtilities } from '../helpers/pathHelpers.js'
import { renderName } from '../helpers/render.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsRoot = createModuleGenerator(
  `MethodsRoot`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(importUtilities(config))
    code(codeImportAll(config, { as: '$$ArgumentsMap', from: './arguments-map', type: true }))
    code``
    code``

    // Generate logical organization (query/mutation) if enabled
    if (config.methodsOrganization.logical) {
      config.schema.kindMap.list.Root.forEach(node => {
        code(renderRootType({ config, node }))
        code``
      })
    }

    // Generate namespace-based organization if enabled
    if (config.methodsOrganization.domains) {
      const namespaceGroups = groupFieldsByDomain(config)
      for (const [namespaceKey, fields] of Object.entries(namespaceGroups)) {
        code(renderDomainType({ config, namespaceKey, fields }))
        code``
      }
    }

    // Build nested namespace structure (if domain organization enabled)
    interface NamespaceTreeNode {
      fullPath: string
      propertyName: string
      children: Map<string, NamespaceTreeNode>
      fields: DomainField[] | null
    }

    let namespaceTree: Map<string, NamespaceTreeNode> | undefined
    let namespaceGroups: Record<string, DomainField[]> | undefined

    if (config.methodsOrganization.domains) {
      namespaceGroups = groupFieldsByDomain(config)
      namespaceTree = new Map<string, NamespaceTreeNode>()
      const onMergeConflict = config.methodsOrganization.domains.onMergeConflict ?? 'fail'

      // Build tree structure from namespace paths
      for (const [namespacePath, fields] of Object.entries(namespaceGroups)) {
        const segments = namespacePath.split('.')
        let currentLevel = namespaceTree
        let currentPath = ''

        for (let i = 0; i < segments.length; i++) {
          const segment = segments[i]!
          currentPath = currentPath ? `${currentPath}.${segment}` : segment

          if (!currentLevel.has(segment)) {
            currentLevel.set(segment, {
              fullPath: currentPath,
              propertyName: segment,
              children: new Map(),
              fields: null,
            })
          }

          const node = currentLevel.get(segment)!

          // Leaf node - store fields
          if (i === segments.length - 1) {
            node.fields = fields

            // Check for conflicts within this namespace only
            const methodsMap = new Map<string, string[]>()
            for (const field of fields) {
              const methodName = field.methodName ?? field.fieldName
              if (!methodsMap.has(methodName)) {
                methodsMap.set(methodName, [])
              }
              methodsMap.get(methodName)!.push(field.fieldName)
            }

            // Detect conflicts (same method name from different fields in same namespace)
            for (const [methodName, fieldNames] of methodsMap.entries()) {
              if (fieldNames.length > 1) {
                if (onMergeConflict === 'fail') {
                  throw new Error(
                    `Domain conflict in namespace "${currentPath}": `
                      + `Multiple fields map to method "${methodName}": ${fieldNames.join(', ')}. `
                      + `Use unique method names within each namespace.`,
                  )
                } else if (onMergeConflict === 'merge') {
                  throw new Error(`'merge' policy for onMergeConflict is not yet implemented`)
                } else if (onMergeConflict === 'drop') {
                  throw new Error(`'drop' policy for onMergeConflict is not yet implemented`)
                }
              }
            }
          }

          currentLevel = node.children
        }
      }

      // Generate interfaces recursively (bottom-up)
      const generateNamespaceInterfaces = (
        nodes: Map<string, NamespaceTreeNode>,
        depth: number = 0,
      ): void => {
        for (const [_key, node] of nodes.entries()) {
          // Process children first (bottom-up)
          if (node.children.size > 0) {
            generateNamespaceInterfaces(node.children, depth + 1)
          }

          const interfaceName = Str.Case.pascal(node.fullPath) + 'Methods'

          if (node.fields !== null) {
            // Leaf node - generate interface with actual methods
            // This is handled by renderDomainType, so we skip it here
          } else {
            // Parent node - generate interface with nested children
            code(`export interface ${interfaceName}<$Context extends ${$.$$Utilities}.Context> {`)
            for (const [childKey, childNode] of node.children.entries()) {
              const childInterfaceName = Str.Case.pascal(childNode.fullPath) + 'Methods'
              code(`  ${childKey}: ${childInterfaceName}<$Context>`)
            }
            code(`}`)
            code``
          }
        }
      }

      generateNamespaceInterfaces(namespaceTree)
    }

    code(`export interface BuilderMethodsRoot<$Context extends ${$.$$Utilities}.Context> {`)

    // Add logical organization properties
    if (config.methodsOrganization.logical) {
      config.schema.kindMap.root.list.forEach(node => {
        const propertyDoc = getRootPropertyDoc(node.operationType)
        code(Code.TSDocIndented(propertyDoc, `  `))
        code(`  ${node.operationType}: ${node.name.canonical}Methods<$Context>`)
      })
    }

    // Add namespace organization properties (top-level only)
    if (namespaceTree) {
      for (const [propertyName, node] of namespaceTree.entries()) {
        const interfaceName = Str.Case.pascal(node.fullPath) + 'Methods'
        code(`  ${propertyName}: ${interfaceName}<$Context>`)
      }
    }

    code(`}`)
    code``
    code`
      export interface BuilderMethodsRootFn extends ${$.$$Utilities}.TypeFunction {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['parameters']>
      }
    `
  },
)

const renderRootType = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  const fieldMethods = renderFieldMethods({ config, node })
  const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)

  // Interface JSDoc
  const interfaceDoc = getRootMethodsInterfaceDoc(config, node, operationType)
  if (interfaceDoc) {
    code(Code.TSDoc(interfaceDoc))
  }

  // dprint-ignore
  code`export interface ${node.name}Methods<$Context extends ${$.$$Utilities}.Context> {`

  // $batch JSDoc
  const batchDoc = getBatchMethodDoc(operationType)
  code(Code.TSDocIndented(batchDoc, `  `))

  // dprint-ignore
  code`
      $batch:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${node.name}<{ scalars: $Context['scalars'] }>>) =>
            ${$.$$Utilities}.Docpar.Object.Var.MethodReturn<
              ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, $$ArgumentsMap.ArgumentsMap>,
              & (null | {})
              & ${$.$$Utilities}.HandleOutput<
                  $Context,
                  ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>
                >,
              ${$.$$Utilities}.DocumentRunnerDeferred<
                ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, $$ArgumentsMap.ArgumentsMap>,
                & (null | {})
                & ${$.$$Utilities}.HandleOutput<
                    $Context,
                    ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<${$.$$Utilities}.AssertExtendsObject<$SelectionSet>, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>
                  >
              >
            >
        >
  `

  // __typename JSDoc
  const typenameDoc = getTypenameMethodDoc(node.name, operationType)
  code(Code.TSDocIndented(typenameDoc, `  `))

  // dprint-ignore
  code`
      __typename:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          () =>
            Promise<
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  { __typename: '${node.name}' },
                  '__typename'
                >
            >
        >
      ${fieldMethods}
    }
  `
})

const renderFieldMethods = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(({ node, config, code }) => {
  for (const field of Object.values(node.getFields())) {
    const docContent = getOutputFieldMethodDoc(config, field, node)
    if (docContent) {
      code(Code.TSDoc(docContent))
    }

    const fieldTypeUnwrapped = Grafaid.Schema.getNamedType(field.type)

    const isOptional = Grafaid.Schema.isScalarType(fieldTypeUnwrapped)
      && Grafaid.Schema.Args.isAllArgsNullable(field.args)

    const { operationType } = createFromObjectTypeAndMapOrThrow(node, config.schema.kindMap.root)
    // dprint-ignore
    code`
      ${field.name}:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${renderName(node.name)}.${field.name}<{ scalars: $Context['scalars'] }>>) =>
            ${$.$$Utilities}.Docpar.Object.Var.MethodReturn<
              ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<{ ${field.name}: $SelectionSet}, $$ArgumentsMap.ArgumentsMap>,
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<{ ${field.name}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                  '${field.name}'
                >,
              ${$.$$Utilities}.DocumentRunnerDeferred<
                ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<{ ${field.name}: $SelectionSet}, $$ArgumentsMap.ArgumentsMap>,
                & (null | {})
                & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                    $Context,
                    ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<{ ${field.name}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                    '${field.name}'
                  >
              >
            >
        >
    `
  }
})

// ========================================
// Domain Grouping Helpers
// ========================================

import type { Config } from '../config/config.js'
import type { FieldGroupingRule } from '../config/configInit.js'

export interface DomainField {
  fieldName: string
  methodName: string | undefined
  operationType: 'query' | 'mutation'
  rootTypeName: string
  namespacePath: string[] | null // null for root-level, array for nested
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
const replaceCaptures = (template: string, match: RegExpExecArray): string => {
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

    // Apply transformation
    switch (transform) {
      case 'kebab':
        return Str.Case.kebab(value)
      case 'pascal':
        return Str.Case.pascal(value)
      case 'camel':
        return Str.Case.camel(value)
      case 'snake':
        return Str.Case.snake(value)
      case 'constant':
        return Str.Case.snake(value).toUpperCase()
      case 'title':
        return Str.Case.title(value)
      case 'upper':
        return Str.Case.capAll(value)
      case 'lower':
        return value.toLowerCase()
      case 'capFirst':
        return Str.Case.capFirst(value)
      case 'uncapFirst':
        return Str.Case.uncapFirst(value)
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
 * Parse a single path string with dot-notation into a path array.
 * - 'pokemon' → ['pokemon']
 * - 'args.no' → ['args', 'no']
 * - '' → [] (root level)
 */
const parsePath = (path: string): string[] => {
  // Remove leading dot if present
  const normalized = path.startsWith('.') ? path.slice(1) : path

  // Handle root case
  if (normalized === '') {
    return []
  }

  // Parse dot-notation without adding prefix
  return normalized.split('.').filter(part => part.length > 0)
}

/**
 * Normalize a path value to an array of namespace paths.
 * Handles aliases (array of paths) and single paths.
 * - string: parse dot-notation and return as single-item array
 * - array: parse each element and return as array (aliases)
 * - null: return [null] (discard)
 * - undefined: error (path must be defined)
 */
const normalizePaths = (path: string | string[] | null | undefined): (string[] | null)[] => {
  if (path === null) {
    return [null]
  }
  if (path === undefined) {
    throw new Error('Path must be defined')
  }
  if (Array.isArray(path)) {
    // Array of path aliases - parse each one
    return path.map(p => parsePath(p))
  }
  // Single path with dot-notation
  return [parsePath(path)]
}

/**
 * Normalize a methodName value to an array of method names.
 * - string: return as single-item array
 * - array: return as-is (aliases)
 * - function: call function and return result as single-item array
 * - undefined: return undefined
 */
const normalizeMethodNames = (
  methodName:
    | string
    | string[]
    | ((fieldName: string, operationType: 'query' | 'mutation', match?: RegExpExecArray) => string)
    | undefined,
  fieldName: string,
  operationType: 'query' | 'mutation',
  match?: RegExpExecArray,
): string[] | undefined => {
  if (methodName === undefined) return undefined
  if (typeof methodName === 'function') {
    return [methodName(fieldName, operationType, match)]
  }
  if (Array.isArray(methodName)) {
    // Handle array of aliases - apply capture replacement to each
    if (match) {
      return methodName.map(name => replaceCaptures(name, match))
    }
    return methodName
  }
  // Single method name - handle capture replacement if needed
  if (match && typeof methodName === 'string') {
    return [replaceCaptures(methodName, match)]
  }
  return [methodName]
}

/**
 * Check if a field name matches a grouping rule's pattern.
 */
export const matchesRule = (fieldName: string, rule: FieldGroupingRule): boolean => {
  if (typeof rule.pattern === 'string') {
    return fieldName === rule.pattern
  }
  return rule.pattern.test(fieldName)
}

/**
 * Apply a single rule to a field name, returning path/method info (with potential aliases) or null.
 * Returns arrays for both namespacePaths and methodNames to support aliases.
 * If path is null, returns null namespacePaths (discard field).
 */
const applyRule = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rule: FieldGroupingRule,
): { namespacePaths: (string[] | null)[]; methodNames?: string[]; consume: boolean } | null => {
  if (!matchesRule(fieldName, rule)) return null

  let path = rule.path
  let methodName = rule.methodName
  const consume = rule.consume ?? false

  // Get RegExp match if pattern is RegExp
  const match = rule.pattern instanceof RegExp ? rule.pattern.exec(fieldName) : undefined
  if (rule.pattern instanceof RegExp && !match) return null

  // Process path with capture groups
  if (typeof path === 'string' && match) {
    path = replaceCaptures(path, match)
  } else if (Array.isArray(path) && match) {
    // Handle array of aliases - apply capture replacement to each
    path = path.map(p => replaceCaptures(p, match))
  }

  // Path defaults to '.' (root level) if not specified
  if (path === undefined) {
    path = '.'
  }

  // Normalize to arrays
  const namespacePaths = normalizePaths(path)
  const methodNames = normalizeMethodNames(methodName, fieldName, operationType, match ?? undefined)

  return {
    namespacePaths,
    methodNames,
    consume,
  }
}

/**
 * Apply all matching rules to a field (unless consumed).
 * By default, fields can match multiple rules.
 * If a rule has consume=true, stop processing after that rule.
 */
const applyRules = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rules: FieldGroupingRule[],
): Array<{ namespacePaths: (string[] | null)[]; methodNames?: string[] }> => {
  const matches: Array<{ namespacePaths: (string[] | null)[]; methodNames?: string[] }> = []

  for (const rule of rules) {
    const result = applyRule(fieldName, operationType, rule)
    if (result) {
      const { namespacePaths, methodNames, consume } = result
      matches.push({ namespacePaths, methodNames })

      // If consume=true, stop processing
      if (consume) break
    }
  }

  return matches
}

/**
 * Expand alias arrays into individual DomainField entries (cartesian product).
 * If namespace is ['pokemon', 'poke'] and methodName is ['getOne', 'get'],
 * creates 4 entries: pokemon.getOne, pokemon.get, poke.getOne, poke.get
 */
const expandAliases = (
  field: {
    fieldName: string
    namespacePaths: (string[] | null)[]
    methodNames?: string[]
    operationType: 'query' | 'mutation'
    rootTypeName: string
  },
): DomainField[] => {
  const { fieldName, namespacePaths, methodNames, operationType, rootTypeName } = field

  // If no methodNames provided, use field name as single method name
  const effectiveMethodNames = methodNames ?? [undefined]

  // Create cartesian product of namespacePaths × methodNames
  const expanded: DomainField[] = []
  for (const namespacePath of namespacePaths) {
    for (const methodName of effectiveMethodNames) {
      expanded.push({
        fieldName,
        namespacePath,
        methodName,
        operationType,
        rootTypeName,
      })
    }
  }

  return expanded
}

/**
 * Check rules for potential precedence issues where later rules might be shadowed by earlier ones.
 */
export const checkRulePrecedence = (rules: FieldGroupingRule[]): void => {
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
 * Group all root fields by namespace according to configuration.
 * Processes all rules against all fields (unless consumed).
 */
export const groupFieldsByDomain = (config: Config): Record<string, DomainField[]> => {
  if (!config.methodsOrganization.domains) return {}

  const grouped: Record<string, DomainField[]> = {}
  const { rules } = config.methodsOrganization.domains

  // Track which rules have matched at least one field (for warnings)
  const ruleMatchCounts = new Map<FieldGroupingRule, number>()
  rules.forEach(rule => ruleMatchCounts.set(rule, 0))

  // Process all root fields
  config.schema.kindMap.list.Root.forEach(rootType => {
    const rootDetails = createFromObjectTypeAndMapOrThrow(rootType, config.schema.kindMap.root)
    const operationType = rootDetails.operationType

    // Skip subscription for now (domain grouping only supports query/mutation)
    if (operationType === 'subscription') return

    for (const field of Object.values(rootType.getFields())) {
      const matches = applyRules(field.name, operationType, rules)

      // Track rule matches for warnings
      for (const rule of rules) {
        if (matchesRule(field.name, rule)) {
          ruleMatchCounts.set(rule, (ruleMatchCounts.get(rule) ?? 0) + 1)
        }
      }

      // Process each match
      for (const match of matches) {
        const { namespacePaths, methodNames } = match

        // Skip if path is null (discard field)
        if (namespacePaths.length === 1 && namespacePaths[0] === null) {
          continue
        }

        // Expand aliases into individual entries (cartesian product)
        const expandedFields = expandAliases({
          fieldName: field.name,
          namespacePaths,
          methodNames,
          operationType,
          rootTypeName: rootType.name,
        })

        // Add each expanded field to the appropriate namespace group
        for (const domainField of expandedFields) {
          const { namespacePath } = domainField

          // Create a key for the namespace path
          // ['$', 'args', 'no'] → '$.args.no'
          const namespaceKey = namespacePath === null ? '__root__' : namespacePath.join('.')

          if (!grouped[namespaceKey]) {
            grouped[namespaceKey] = []
          }

          grouped[namespaceKey].push(domainField)
        }
      }
    }
  })

  // Warn about rules that matched no fields (excluding consume=true with path=null)
  const unmatchedRules = Array.from(ruleMatchCounts.entries())
    .filter(([rule, count]) => {
      // Don't warn about consume+null rules (they're intentionally silent)
      if (rule.consume && rule.path === null) return false
      return count === 0
    })
    .map(([rule]) => rule)

  if (unmatchedRules.length > 0) {
    console.warn(`\n⚠️  Domain organization unused rules:\n`)
    unmatchedRules.forEach(rule => {
      const patternDisplay = typeof rule.pattern === 'string'
        ? `'${rule.pattern}'`
        : rule.pattern.toString()
      console.warn(
        `   Rule with pattern ${patternDisplay} matched no fields in the schema. `
          + `This rule will have no effect. Check for typos or remove unused rules.`,
      )
    })
    console.warn(``)
  }

  // Deduplicate fields that match multiple rules producing the same (fieldName, methodName, namespace)
  for (const [namespaceKey, fields] of Object.entries(grouped)) {
    const seen = new Set<string>()
    const deduplicated: DomainField[] = []

    for (const field of fields) {
      const methodName = field.methodName ?? field.fieldName
      const key = `${field.fieldName}:${methodName}`

      if (!seen.has(key)) {
        seen.add(key)
        deduplicated.push(field)
      }
    }

    grouped[namespaceKey] = deduplicated
  }

  // Detect conflicts: multiple fields mapping to same namespace path + method name
  for (const [namespaceKey, fields] of Object.entries(grouped)) {
    const methodNameToFields = new Map<string, DomainField[]>()

    for (const field of fields) {
      const effectiveMethodName = field.methodName ?? field.fieldName
      const existing = methodNameToFields.get(effectiveMethodName)

      if (existing) {
        existing.push(field)
      } else {
        methodNameToFields.set(effectiveMethodName, [field])
      }
    }

    // Check for conflicts (multiple fields with same method name)
    for (const [methodName, conflictingFields] of methodNameToFields.entries()) {
      if (conflictingFields.length > 1) {
        const fieldNames = conflictingFields.map(f => f.fieldName).join(', ')
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

/**
 * Render a namespace type interface with methods for all fields in that namespace.
 */
const renderDomainType = createCodeGenerator<{
  namespaceKey: string
  fields: DomainField[]
}>(({ namespaceKey, fields, config, code }) => {
  // Generate interface name from namespace key
  // '__root__' → methods added directly to BuilderMethodsRoot (skip interface)
  // 'pokemon' → 'PokemonMethods'
  // 'api.v2.pokemon' → 'ApiV2PokemonMethods'
  if (namespaceKey === '__root__') {
    // Root-level methods don't need a separate interface
    return
  }

  const interfaceName = Str.Case.pascal(namespaceKey) + 'Methods'

  code(`export interface ${interfaceName}<$Context extends ${$.$$Utilities}.Context> {`)

  for (const field of fields) {
    const methodName = field.methodName ?? field.fieldName
    const rootTypeName = field.rootTypeName
    const { operationType } = field

    const rootType = config.schema.instance.getType(rootTypeName) as Grafaid.Schema.ObjectType
    const fieldDef = rootType.getFields()[field.fieldName]!

    const docContent = getOutputFieldMethodDoc(config, fieldDef, rootType)
    if (docContent) {
      code(Code.TSDocIndented(docContent, `  `))
    }

    const fieldTypeUnwrapped = Grafaid.Schema.getNamedType(fieldDef.type)
    const isOptional = Grafaid.Schema.isScalarType(fieldTypeUnwrapped)
      && Grafaid.Schema.Args.isAllArgsNullable(fieldDef.args)

    // dprint-ignore
    code`
      ${methodName}:
        ${$.$$Utilities}.GraffleKit.Context.Configuration.Check.Preflight<
          $Context,
          <$SelectionSet>(selectionSet${isOptional ? `?` : ``}: ${$.$$Utilities}.Exact<$SelectionSet, ${$.$$SelectionSets}.${renderName(rootTypeName)}.${field.fieldName}<{ scalars: $Context['scalars'] }>>) =>
            ${$.$$Utilities}.Docpar.Object.Var.MethodReturn<
              ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<{ ${field.fieldName}: $SelectionSet}, $$ArgumentsMap.ArgumentsMap>,
              & (null | {})
              & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                  $Context,
                  ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<{ ${field.fieldName}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                  '${field.fieldName}'
                >,
              ${$.$$Utilities}.DocumentRunnerDeferred<
                ${$.$$Utilities}.Docpar.Object.Var.InferFrom${Str.Case.capFirst(operationType)}<{ ${field.fieldName}: $SelectionSet}, $$ArgumentsMap.ArgumentsMap>,
                & (null | {})
                & ${$.$$Utilities}.HandleOutputDocumentBuilderRootField<
                    $Context,
                    ${$.$$Utilities}.Docpar.Object.InferResult.Operation${Str.Case.capFirst(operationType)}<{ ${field.fieldName}: $SelectionSet}, ${$.$$Schema}.${$.Schema}<$Context['scalars']>>,
                    '${field.fieldName}'
                  >
              >
            >
        >
    `
  }

  code(`}`)
})
