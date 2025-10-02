/**
 * Reusable JSDoc generation helpers for consistent documentation across generated modules.
 */

import { Grafaid } from '../../lib/grafaid/_namespace.js'
import type { Config } from '../config/config.js'

/**
 * Generate a markdown table for JSDoc from key-value pairs.
 * Automatically filters out undefined/null values.
 */
export const markdownTable = (rows: Record<string, string | undefined | null>): string => {
  const entries = Object.entries(rows).filter(([_, value]) => value !== undefined && value !== null)
  if (entries.length === 0) return ''

  const lines: string[] = []
  lines.push(`| | |`)
  lines.push(`| - | - |`)
  for (const [key, value] of entries) {
    lines.push(`| **${key}** | ${value} |`)
  }
  return lines.join('\n')
}

/**
 * Map GraphQL kind names to their official documentation URLs.
 */
export const getKindDocUrl = (kindName: string): string => {
  const kindToUrl: Record<string, string> = {
    'ScalarStandard': 'https://graphql.org/graphql-js/type/#scalars',
    'ScalarCustom': 'https://graphql.org/graphql-js/type/#graphqlscalartype',
    'OutputObject': 'https://graphql.org/graphql-js/type/#graphqlobjecttype',
    'Interface': 'https://graphql.org/graphql-js/type/#graphqlinterfacetype',
    'Union': 'https://graphql.org/graphql-js/type/#graphqluniontype',
    'Enum': 'https://graphql.org/graphql-js/type/#graphqlenumtype',
    'InputObject': 'https://graphql.org/graphql-js/type/#graphqlinputobjecttype',
  }
  return kindToUrl[kindName] || 'https://graphql.org/graphql-js/type/'
}

/**
 * Generate enhanced JSDoc for a root type (Query, Mutation, Subscription).
 */
export const getRootTypeDoc = (
  config: Config,
  type: Grafaid.Schema.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
): string | null => {
  const schemaDescription = type.description
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(
    `GraphQL root {@link https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types | ${operationTypeCapitalized}} type.`,
  )

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  return parts.join('\n')
}

/**
 * Generate JSDoc for root methods interface (QueryMethods, MutationMethods, etc.)
 */
export const getRootMethodsInterfaceDoc = (
  config: Config,
  type: Grafaid.Schema.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
): string | null => {
  const schemaDescription = type.description
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(
    `GraphQL {@link https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types | ${operationTypeCapitalized}} root methods.`,
  )
  parts.push('')
  parts.push(`All methods return Promises. Use \`.${operationType}.$batch(...)\` to select multiple fields at once.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  return parts.join('\n')
}

/**
 * Generate JSDoc for $batch method
 */
export const getBatchMethodDoc = (
  operationType: 'query' | 'mutation' | 'subscription',
): string => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(`Select multiple ${operationTypeCapitalized} fields at once.`)
  parts.push('')
  parts.push('Pass a selection set object that includes the fields you want.')
  parts.push('Use this method to request multiple fields in a single request for better performance.')

  return parts.join('\n')
}

/**
 * Generate JSDoc for __typename method
 */
export const getTypenameMethodDoc = (
  typeName: string,
  operationType: 'query' | 'mutation' | 'subscription',
): string => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(`Request the {@link https://graphql.org/learn/schema/#the-__typename-field | \`__typename\`} meta-field.`)
  parts.push('')
  parts.push(
    `The \`__typename\` field returns the name of the object type. In this case, it will always return \`"${typeName}"\`.`,
  )

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for an output field in selection sets.
 */
export const getOutputFieldSelectionSetDoc = (
  field: Grafaid.Schema.Field<any, any>,
  parentTypeName: string,
  typeKindName: string,
  typeName: string,
): string => {
  const schemaDescription = field.description

  // Type information
  const isNonNull = Grafaid.Schema.isNonNullType(field.type)
  const isList = Grafaid.Schema.isListType(Grafaid.Schema.isNonNullType(field.type) ? field.type.ofType : field.type)
  const listMarker = isList ? '[]' : ''
  const nullMarker = isNonNull ? '!' : ''
  const typeSignature = `{@link $NamedTypes.$${typeName}}${listMarker}${nullMarker}`
  const kindDocUrl = getKindDocUrl(typeKindName)
  const fieldPath = `${parentTypeName}.${field.name}`

  // Build table
  const table = markdownTable({
    'Type': typeSignature,
    'Kind': `{@link ${kindDocUrl} | ${typeKindName}} ↗`,
    'Parent': `{@link $NamedTypes.$${parentTypeName}}`,
    'Path': `\`${fieldPath}\``,
    '⚠ Deprecated': field.deprecationReason || undefined,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': field.args.length > 0 ? `${field.args.length}` : undefined,
  })

  // Combine parts
  const parts: string[] = []

  if (schemaDescription) {
    parts.push(schemaDescription)
    parts.push('')
  }

  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for a root type method.
 */
export const getOutputFieldMethodDoc = (
  config: Config,
  field: Grafaid.Schema.Field<any, any>,
  parentType: Grafaid.Schema.ObjectType,
): string | null => {
  const namedType = Grafaid.Schema.getNamedType(field.type)
  const typeAndKind = Grafaid.getTypeAndKind(namedType)
  const schemaDescription = field.description

  // Type information
  const isNonNull = Grafaid.Schema.isNonNullType(field.type)
  const isList = Grafaid.Schema.isListType(Grafaid.Schema.isNonNullType(field.type) ? field.type.ofType : field.type)
  const listMarker = isList ? '[]' : ''
  const nullMarker = isNonNull ? '!' : ''
  const typeSignature = `{@link $Schema.${typeAndKind.typeName}}${listMarker}${nullMarker}`
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentType.name}.${field.name}`

  // Build table rows
  const table = markdownTable({
    'Type': typeSignature,
    'Kind': `{@link ${kindDocUrl} | ${typeAndKind.kindName}} ↗`,
    'Parent': `{@link $Schema.${parentType.name}}`,
    'Path': `\`${fieldPath}\``,
    '⚠ Deprecated': field.deprecationReason || undefined,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': field.args.length > 0 ? `${field.args.length}` : undefined,
  })

  // Combine parts
  const parts: string[] = []

  if (schemaDescription) {
    parts.push(schemaDescription)
    parts.push('')
  }

  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}
