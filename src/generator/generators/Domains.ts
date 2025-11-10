import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { getOutputFieldMethodDoc } from '../helpers/jsdoc.js'
import type { GeneratedModule } from '../helpers/moduleGenerator.js'
import { renderName } from '../helpers/render.js'
import { type DomainField, groupFieldsByDomain } from './MethodsRoot.js'

/**
 * Generate runtime JavaScript code for domain-based method organization.
 * Creates a domains/ directory with ESM modules for each namespace.
 */
export const ModuleGeneratorDomains = {
  name: 'domains',
  generate: (config: Config): GeneratedModule[] => {
    if (!config.methodsOrganization.domains) return []

    const modules: GeneratedModule[] = []
    const namespaceGroups = groupFieldsByDomain(config)

    // Collect all unique namespaces and their fields
    const namespaceStructure: Map<string, { path: string[]; fields: DomainField[] }> = new Map()

    for (const [namespaceKey, fields] of Object.entries(namespaceGroups)) {
      if (namespaceKey === '__root__') continue // Skip root-level methods for now

      const namespacePath = namespaceKey.split('.')

      // Group fields by their unique combinations of fieldName and methodName
      const uniqueFields = new Map<string, typeof fields[0]>()
      for (const field of fields) {
        const key = `${field.fieldName}:${field.methodName ?? field.fieldName}`
        if (!uniqueFields.has(key)) {
          uniqueFields.set(key, field)
        }
      }

      namespaceStructure.set(namespaceKey, {
        path: namespacePath,
        fields: Array.from(uniqueFields.values()),
      })
    }

    // Generate files for each namespace
    for (const [namespaceKey, { path: namespacePath, fields }] of namespaceStructure.entries()) {
      // Strip the '$' prefix from the path for directory structure
      const pathWithoutPrefix = namespacePath[0] === '$' ? namespacePath.slice(1) : namespacePath
      const dirPath = pathWithoutPrefix.join('/')

      // Generate methods.ts for this namespace
      modules.push({
        name: `domains/${dirPath}/methods`,
        content: generateMethodsFile(fields, config),
        filePath: `domains/${dirPath}/methods.ts`,
      })

      // Generate __.ts for this namespace with export aliases
      modules.push({
        name: `domains/${dirPath}/__`,
        content: generateNamespaceIndexFile(fields, namespaceGroups[namespaceKey]!),
        filePath: `domains/${dirPath}/__.ts`,
      })
    }

    // Generate root domains/__.ts with namespace exports
    modules.push({
      name: `domains/__`,
      content: generateRootIndexFile(namespaceStructure, namespaceGroups),
      filePath: `domains/__.ts`,
    })

    return modules
  },
}

/**
 * Generate the methods.ts file for a namespace.
 * Contains actual method implementations.
 */
const generateMethodsFile = (
  fields: DomainField[],
  config: Config,
): string => {
  const lines: string[] = []

  // Determine which operation types are used
  const operationTypes = new Set<string>()
  const helperNames = new Map<string, string>()
  for (const field of fields) {
    operationTypes.add(field.operationType)
    const helperName = `$$${field.operationType}`
    helperNames.set(field.operationType, helperName)
  }

  // Import pre-curried helpers from core library
  const helpersToImport = Array.from(operationTypes).map(opType => `$$${opType}`)
  lines.push(
    Str.Code.TS.importNamed({
      names: helpersToImport,
      from: config.paths.imports.grafflePackage.extensionDocumentBuilder,
    }),
  )
  lines.push(``)

  // Generate a method for each unique field
  const seenFields = new Set<string>()

  for (const field of fields) {
    if (seenFields.has(field.fieldName)) continue
    seenFields.add(field.fieldName)

    const methodName = field.methodName ?? field.fieldName
    const helperName = helperNames.get(field.operationType)!

    // Get field definition and JSDoc
    const rootType = config.schema.instance.getType(field.rootTypeName) as GraphqlKit.Schema.Runtime.Nodes.ObjectType
    const fieldDef = rootType.getFields()[field.fieldName]!
    const docContent = getOutputFieldMethodDoc(config, fieldDef, rootType)
    if (docContent) {
      lines.push(Str.Code.TSDoc.format(docContent))
    }

    // Generate method implementation using helper
    const functionDecl = `const ${renderName(methodName)} = ${helperName}('${field.fieldName}')`
    lines.push(Str.Code.TS.Reserved.exportValueWithKeywordHandling(methodName, functionDecl))
    lines.push(``)
  }

  return lines.join('\n')
}

/**
 * Generate the __.ts file for a namespace.
 * Re-exports methods with aliases using ESM export syntax.
 */
const generateNamespaceIndexFile = (
  uniqueFields: DomainField[],
  allFields: DomainField[],
): string => {
  const lines: string[] = []

  lines.push(`export * from './methods.js'`)
  lines.push(``)

  // Generate export aliases for methods
  // Group by field to find all method aliases
  const fieldToMethodNames = new Map<string, Set<string>>()
  for (const field of allFields) {
    const methodName = field.methodName ?? field.fieldName
    if (!fieldToMethodNames.has(field.fieldName)) {
      fieldToMethodNames.set(field.fieldName, new Set())
    }
    fieldToMethodNames.get(field.fieldName)!.add(methodName)
  }

  // Generate export aliases
  for (const [fieldName, methodNames] of fieldToMethodNames.entries()) {
    const methodNamesArray = Array.from(methodNames)
    if (methodNamesArray.length > 1) {
      // Has aliases - need to generate export aliases
      const primaryMethod = methodNamesArray[0]!
      const aliases = methodNamesArray.slice(1)

      lines.push(`// Export aliases for ${fieldName}`)
      const aliasExports = aliases.map(alias => `${primaryMethod} as ${alias}`).join(', ')
      lines.push(`export { ${aliasExports} } from './methods.js'`)
    }
  }

  return lines.join('\n')
}

/**
 * Generate the root domains/__.ts file.
 * Exports all namespaces with aliases.
 */
const generateRootIndexFile = (
  namespaceStructure: Map<string, { path: string[] }>,
  namespaceGroups: Record<string, DomainField[]>,
): string => {
  const lines: string[] = []

  lines.push(`// Root exports for all domain namespaces`)
  lines.push(``)

  // Export each unique namespace path with a derived export name
  const exported = new Set<string>()

  for (const [namespaceKey, fields] of Object.entries(namespaceGroups)) {
    if (namespaceKey === '__root__') continue

    const firstField = fields[0]
    if (!firstField?.namespacePath) continue

    // Strip the '$' prefix from the namespace path
    const pathWithoutPrefix = firstField.namespacePath[0] === '$'
      ? firstField.namespacePath.slice(1)
      : firstField.namespacePath

    const fullPath = pathWithoutPrefix.join('/')

    // Skip if already exported
    if (exported.has(fullPath)) continue
    exported.add(fullPath)

    // Create export name from path segments using Str.Case utilities
    // e.g., ['args', 'no'] → 'argsNo', ['pokemon-species'] → 'pokemonSpecies'
    const exportName = Str.Case.camel(fullPath)

    lines.push(`export * as ${exportName} from './${fullPath}/__.js'`)
  }

  return lines.join('\n')
}
