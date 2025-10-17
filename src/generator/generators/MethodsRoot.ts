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

    // Generate domain-based organization if enabled
    if (config.methodsOrganization.domains) {
      const domainGroups = groupFieldsByDomain(config)
      for (const [domainName, fields] of Object.entries(domainGroups)) {
        code(renderDomainType({ config, domainName, fields }))
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

    // Add domain organization properties
    if (config.methodsOrganization.domains) {
      const domainGroups = groupFieldsByDomain(config)
      for (const domainName of Object.keys(domainGroups)) {
        code(`  ${domainName}: ${Str.Case.capFirst(domainName)}DomainMethods<$Context>`)
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
import type { FieldGroupingRule } from '../config/configInit.js'

interface DomainField {
  fieldName: string
  methodName: string | undefined
  operationType: 'query' | 'mutation'
  rootTypeName: string
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
      case 'kebab': return Str.Case.kebab(value)
      case 'pascal': return Str.Case.pascal(value)
      case 'camel': return Str.Case.camel(value)
      case 'snake': return Str.Case.snake(value)
      case 'constant': return Str.Case.constant(value)
      case 'title': return Str.Case.title(value)
      case 'upper': return Str.Case.capAll(value)
      case 'lower': return value.toLowerCase()
      case 'capFirst': return Str.Case.capFirst(value)
      case 'uncapFirst': return Str.Case.uncapFirst(value)
      default: return fullMatch // Unknown transform, keep original
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
 * Check if a field name matches a grouping rule's pattern.
 */
const matchesRule = (fieldName: string, rule: FieldGroupingRule): boolean => {
  if (typeof rule.pattern === 'string') {
    return fieldName === rule.pattern
  }
  return rule.pattern.test(fieldName)
}

/**
 * Apply a single rule to a field name, returning group/method info or null.
 */
const applyRule = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rule: FieldGroupingRule,
): { groupName: string; methodName?: string } | null => {
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
const applyRules = (
  fieldName: string,
  operationType: 'query' | 'mutation',
  rules: FieldGroupingRule[],
): { groupName: string; methodName?: string } | null => {
  for (const rule of rules) {
    const result = applyRule(fieldName, operationType, rule)
    if (result) return result
  }
  return null
}

/**
 * Group all root fields by domain according to configuration.
 */
const groupFieldsByDomain = (config: Config): Record<string, DomainField[]> => {
  if (!config.methodsOrganization.domains) return {}

  const grouped: Record<string, DomainField[]> = {}
  const { rules } = config.methodsOrganization.domains

  config.schema.kindMap.list.Root.forEach(rootType => {
    const rootDetails = createFromObjectTypeAndMapOrThrow(rootType, config.schema.kindMap.root)
    const operationType = rootDetails.operationType

    // Skip subscription for now (domain grouping only supports query/mutation)
    if (operationType === 'subscription') return

    for (const field of Object.values(rootType.getFields())) {
      const result = applyRules(field.name, operationType, rules)
      if (!result) continue

      const { groupName, methodName } = result

      if (!grouped[groupName]) {
        grouped[groupName] = []
      }

      grouped[groupName].push({
        fieldName: field.name,
        methodName,
        operationType,
        rootTypeName: rootType.name,
      })
    }
  })

  // Detect conflicts: multiple fields mapping to same domain + method name
  for (const [domainName, fields] of Object.entries(grouped)) {
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
        throw new Error(
          `Domain grouping conflict in domain "${domainName}": Multiple fields map to method "${methodName}": ${fieldNames}. ` +
          `Please adjust your grouping rules to ensure unique method names within each domain.`
        )
      }
    }
  }

  return grouped
}

/**
 * Render a domain type interface with methods for all fields in that domain.
 */
const renderDomainType = createCodeGenerator<{
  domainName: string
  fields: DomainField[]
}>(({ domainName, fields, config, code }) => {
  const interfaceName = `${Str.Case.capFirst(domainName)}DomainMethods`

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
