/**
 * Reusable JSDoc generation helpers for consistent documentation across generated modules.
 */

import { print } from 'graphql'
import { Grafaid } from '../../lib/grafaid/$.js'
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
 * Generate JSDoc for BuilderMethodsRoot properties (query, mutation, subscription).
 */
export const getRootPropertyDoc = (
  operationType: 'query' | 'mutation' | 'subscription',
): string => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(
    `Access to {@link https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types | ${operationTypeCapitalized}} root field methods.`,
  )
  parts.push('')
  parts.push('Each method corresponds to a root field on the GraphQL schema and returns a Promise.')
  parts.push(`Use \`.$batch(...)\` to select multiple ${operationType} fields in a single request.`)
  parts.push('')
  parts.push('@example Single field')
  parts.push('```ts')

  if (operationType === 'query') {
    parts.push('const user = await graffle.query.user({ id: true, name: true })')
  } else if (operationType === 'mutation') {
    parts.push('const result = await graffle.mutation.createUser({')
    parts.push('  id: true,')
    parts.push('  name: true')
    parts.push('})')
  } else {
    // subscription
    parts.push('const stream = await graffle.subscription.onUserUpdate({')
    parts.push('  id: true,')
    parts.push('  status: true')
    parts.push('})')
  }

  parts.push('```')
  parts.push('')
  parts.push('@example Multiple fields with $batch')
  parts.push('```ts')

  if (operationType === 'query') {
    parts.push('const data = await graffle.query.$batch({')
    parts.push('  user: { id: true, name: true },')
    parts.push('  posts: { title: true, content: true }')
    parts.push('})')
  } else if (operationType === 'mutation') {
    parts.push('const data = await graffle.mutation.$batch({')
    parts.push('  createUser: { id: true, name: true },')
    parts.push('  createPost: { id: true, title: true }')
    parts.push('})')
  } else {
    // subscription
    parts.push('const stream = await graffle.subscription.$batch({')
    parts.push('  onUserUpdate: { id: true, status: true },')
    parts.push('  onPostCreate: { id: true, title: true }')
    parts.push('})')
  }

  parts.push('```')

  return parts.join('\n')
}

/**
 * Generate JSDoc for static document builder (both interface and const).
 * Used for query, mutation, and subscription builders.
 */
export const getStaticDocumentBuilderDoc = (
  operationType: 'query' | 'mutation' | 'subscription',
): string => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

  const parts: string[] = []
  parts.push(`Static ${operationType} builder for compile-time GraphQL document generation.`)
  parts.push('')
  parts.push('@remarks')

  if (operationType === 'query') {
    parts.push('Each field method generates a fully typed GraphQL document string with:')
    parts.push('- Type-safe selection sets matching your schema')
    parts.push('- Automatic variable inference from `$` usage')
    parts.push('- Compile-time validation of field selections')
    parts.push('- Zero runtime overhead - documents are generated at build time')
    parts.push('')
    parts.push('@example Basic query')
    parts.push('```ts')
    parts.push('const getUserDoc = query.user({')
    parts.push('  id: true,')
    parts.push('  name: true,')
    parts.push('  email: true')
    parts.push('})')
    parts.push('// Generates: query { user { id name email } }')
    parts.push('```')
    parts.push('')
    parts.push('@example With variables')
    parts.push('```ts')
    parts.push("import { Var } from 'graffle'")
    parts.push('')
    parts.push('const getUserByIdDoc = query.user({')
    parts.push('  $: { id: $ },')
    parts.push('  name: true,')
    parts.push('  posts: { title: true }')
    parts.push('})')
    parts.push('// Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }')
    parts.push('// Variables type: { id: string }')
    parts.push('```')
  } else if (operationType === 'mutation') {
    parts.push('Each field method generates a fully typed GraphQL mutation document with:')
    parts.push('- Type-safe selection sets and input types')
    parts.push('- Automatic variable inference from `$` usage')
    parts.push('- Compile-time validation of mutations')
    parts.push('- Zero runtime overhead - documents are generated at build time')
    parts.push('')
    parts.push('@example')
    parts.push('```ts')
    parts.push("import { Var } from 'graffle'")
    parts.push('')
    parts.push('const createUserDoc = mutation.createUser({')
    parts.push('  $: { input: $ },')
    parts.push('  id: true,')
    parts.push('  name: true')
    parts.push('})')
    parts.push('// Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }')
    parts.push('```')
  } else {
    // subscription
    parts.push('Each field method generates a fully typed GraphQL subscription document with:')
    parts.push('- Type-safe selection sets for real-time data')
    parts.push('- Automatic variable inference from `$` usage')
    parts.push('- Compile-time validation of subscriptions')
    parts.push('- Zero runtime overhead - documents are generated at build time')
    parts.push('')
    parts.push('@example')
    parts.push('```ts')
    parts.push("import { Var } from 'graffle'")
    parts.push('')
    parts.push('const onUserUpdateDoc = subscription.onUserUpdate({')
    parts.push('  $: { userId: Var.$ },')
    parts.push('  id: true,')
    parts.push('  name: true,')
    parts.push('  status: true')
    parts.push('})')
    parts.push('// Generates: subscription ($userId: ID!) { onUserUpdate(userId: $userId) { id name status } }')
    parts.push('```')
  }

  parts.push('')
  parts.push('@see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}')

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for an output field in selection sets.
 */
export const getOutputFieldSelectionSetDoc = (
  field: Grafaid.Schema.Field<any, any>,
  parentTypeName: string,
  namedType: Grafaid.Schema.NamedTypes,
): string => {
  const typeAndKind = Grafaid.getTypeAndKind(namedType)
  const schemaDescription = field.description

  // Type information
  const isNonNull = Grafaid.Schema.isNonNullType(field.type)
  const isList = Grafaid.Schema.isListType(Grafaid.Schema.isNonNullType(field.type) ? field.type.ofType : field.type)
  const listMarker = isList ? '[]' : ''
  const nullMarker = isNonNull ? '!' : ''
  const typeSignature = `{@link $NamedTypes.$${typeAndKind.typeName}}${listMarker}${nullMarker}`
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentTypeName}.${field.name}`

  // Build table
  const table = markdownTable({
    'Type': typeSignature,
    'Kind': `{@link ${kindDocUrl} | ${typeAndKind.kindName}} ↗`,
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

  // Add GraphQL SDL signature
  if (field.astNode) {
    const fieldSignature = print({ ...field.astNode, description: undefined })
    parts.push('```graphql')
    parts.push(fieldSignature)

    // Add named type definition
    if (namedType.astNode) {
      const typeDefinition = Grafaid.Document.printWithoutDescriptions(namedType.astNode)
      parts.push('')
      parts.push(typeDefinition)
    }

    parts.push('```')
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

  // Add GraphQL SDL signature
  if (field.astNode) {
    const fieldSignature = print({ ...field.astNode, description: undefined })
    parts.push('```graphql')
    parts.push(fieldSignature)

    // Add named type definition
    if (namedType.astNode) {
      const typeDefinition = Grafaid.Document.printWithoutDescriptions(namedType.astNode)
      parts.push('')
      parts.push(typeDefinition)
    }

    parts.push('```')
    parts.push('')
  }

  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for inline fragment fields (___on_TypeName) in unions and interfaces.
 */
export const getInlineFragmentDoc = (
  memberType: Grafaid.Schema.ObjectType,
  parentType: Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  fragmentKind: 'union' | 'interface',
): string => {
  const memberTypeName = memberType.name
  const parentTypeName = parentType.name
  const kindLabel = fragmentKind === 'union' ? 'Union Member' : 'Interface Implementor'
  const relationLabel = fragmentKind === 'union' ? 'member' : 'implementor'
  const kindDocUrl = fragmentKind === 'union'
    ? 'https://graphql.org/graphql-js/type/#graphqluniontype'
    : 'https://graphql.org/graphql-js/type/#graphqlinterfacetype'
  const kindDisplayName = fragmentKind === 'union' ? 'Union Types' : 'Interface Types'

  // Build table
  const table = markdownTable({
    'Type': `{@link $Schema.${memberTypeName}}`,
    'Kind': kindLabel,
    'Parent': `{@link $Schema.${parentTypeName}}`,
    'Path': `\`${parentTypeName} -> ${memberTypeName}\``,
  })

  // Build example based on fragment kind
  let exampleCode: string
  if (fragmentKind === 'union') {
    exampleCode = `query.${parentTypeName.toLowerCase()}s({
  __typename: true,
  ___on_${memberTypeName}: {
    // ... ${memberTypeName}-specific fields
  }
})`
  } else {
    exampleCode = `query.${parentTypeName.toLowerCase()}s({
  id: true,
  name: true,
  ___on_${memberTypeName}: {
    // ... ${memberTypeName}-specific fields
  }
})`
  }

  // Combine parts
  const parts: string[] = []
  parts.push(`Inline fragment selection for {@link $Schema.${memberTypeName}} ${relationLabel}.`)
  parts.push('')
  parts.push(
    `When the runtime value is of type {@link $Schema.${memberTypeName}}, this selection set is applied, allowing you to select fields specific to this ${relationLabel} type.`,
  )
  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)
  parts.push('')
  parts.push('@see {@link https://spec.graphql.org/draft/#sec-Inline-Fragments | Inline Fragments} ↗')
  parts.push(`@see {@link ${kindDocUrl} | ${kindDisplayName}} ↗`)
  parts.push('')
  parts.push('@example')
  parts.push('```ts')
  parts.push(exampleCode)
  parts.push('```')

  return parts.join('\n')
}
