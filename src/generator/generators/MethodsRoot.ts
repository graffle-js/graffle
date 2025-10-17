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

    code(`export interface BuilderMethodsRoot<$Context extends ${$.$$Utilities}.Context> {`)

    // Add logical organization properties
    if (config.methodsOrganization.logical) {
      config.schema.kindMap.root.list.forEach(node => {
        const propertyDoc = getRootPropertyDoc(node.operationType)
        code(Code.TSDocIndented(propertyDoc, `  `))
        code(`  ${node.operationType}: ${node.name.canonical}Methods<$Context>`)
      })
    }

    // Add namespace organization properties
    if (config.methodsOrganization.domains) {
      const namespaceGroups = groupFieldsByDomain(config)
      for (const [namespaceKey, fields] of Object.entries(namespaceGroups)) {
        // Get the property name from the namespace path
        const firstField = fields[0]
        if (!firstField) continue

        if (firstField.namespacePath === null) {
          // Root-level methods - add directly to BuilderMethodsRoot
          // These will be generated inline below
        } else {
          // Namespaced methods - add property
          const propertyName = firstField.namespacePath[0]!
          const interfaceName = namespaceKey.split('.').map(Str.Case.capFirst).join('') + 'Methods'
          code(`  ${propertyName}: ${interfaceName}<$Context>`)
        }
      }
    }

    code(`}`)
    code``
    code`
      export interface BuilderMethodsRootFn extends ${$.$$Utilities}.TypeFunction {
        // @ts-expect-error parameter is Untyped.
        return: BuilderMethodsRoot<this['params']>
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
import type { FieldGroupingRule, GroupConfig } from '../config/configInit.js'

interface DomainField {
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
 * Normalize a namespace value to an array path or null.
 * - string: parse dot-notation ('api.v2.pokemon' → ['api', 'v2', 'pokemon'])
 * - array: use as-is
 * - null: return null (root-level)
 */
const normalizeNamespace = (namespace: string | string[] | null | undefined): string[] | null => {
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
 * Check if a field name matches a grouping rule's pattern.
 */
const matchesRule = (fieldName: string, rule: FieldGroupingRule): boolean => {
  if (typeof rule.pattern === 'string') {
    return fieldName === rule.pattern
  }
  return rule.pattern.test(fieldName)
}

/**
 * Apply a single rule to a field name, returning namespace/method info or null.
 * Requires defaults to be pre-applied to the rule.
 */
const applyRule = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rule: FieldGroupingRule,
): { namespacePath: string[] | null; methodName?: string } | null => {
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
 * Rules should already have defaults applied.
 */
const applyRules = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rules: FieldGroupingRule[],
): { namespacePath: string[] | null; methodName?: string } | null => {
  for (const rule of rules) {
    const result = applyRule(fieldName, operationType, rule)
    if (result) return result
  }
  return null
}

/**
 * Check rules for potential precedence issues where later rules might be shadowed by earlier ones.
 */
const checkRulePrecedence = (rules: FieldGroupingRule[]): void => {
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
 * Apply group defaults to rules, creating rules with inherited values.
 */
const applyGroupDefaults = (group: GroupConfig): FieldGroupingRule[] => {
  return group.rules.map(rule => ({
    ...rule,
    namespace: rule.namespace !== undefined ? rule.namespace : group.defaults?.namespace,
    methodName: rule.methodName !== undefined ? rule.methodName : group.defaults?.methodName,
  }))
}

/**
 * Group all root fields by namespace according to configuration.
 * Each group gets a fresh view of all root fields.
 */
const groupFieldsByDomain = (config: Config): Record<string, DomainField[]> => {
  if (!config.methodsOrganization.domains) return {}

  const grouped: Record<string, DomainField[]> = {}
  const { groups } = config.methodsOrganization.domains

  // Process each group independently
  for (const group of groups) {
    // Apply defaults to rules in this group
    const rulesWithDefaults = applyGroupDefaults(group)

    // Check for rule precedence issues within this group
    checkRulePrecedence(rulesWithDefaults)

    // Each group gets a fresh view of all root fields
    config.schema.kindMap.list.Root.forEach(rootType => {
      const rootDetails = createFromObjectTypeAndMapOrThrow(rootType, config.schema.kindMap.root)
      const operationType = rootDetails.operationType

      // Skip subscription for now (domain grouping only supports query/mutation)
      if (operationType === 'subscription') return

      for (const field of Object.values(rootType.getFields())) {
        const result = applyRules(field.name, operationType, rulesWithDefaults)
        if (!result) continue

        const { namespacePath, methodName } = result

        // Create a key for the namespace path
        // null → '__root__', ['a', 'b'] → 'a.b'
        const namespaceKey = namespacePath === null ? '__root__' : namespacePath.join('.')

        if (!grouped[namespaceKey]) {
          grouped[namespaceKey] = []
        }

        grouped[namespaceKey].push({
          fieldName: field.name,
          methodName,
          operationType,
          rootTypeName: rootType.name,
          namespacePath,
        })
      }
    })
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

  const interfaceName = namespaceKey.split('.').map(Str.Case.capFirst).join('') + 'Methods'

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
