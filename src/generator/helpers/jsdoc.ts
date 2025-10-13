/**
 * Reusable JSDoc generation helpers for consistent documentation across generated modules.
 */

import { Grafaid } from '#lib/grafaid'
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
    const fieldSignature = Grafaid.Document.printWithoutDescriptions(field.astNode)
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
    const fieldSignature = Grafaid.Document.printWithoutDescriptions(field.astNode)
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

/**
 * Generate enhanced JSDoc for field arguments in selection sets.
 */
export const getArgumentDoc = (
  config: Config,
  arg: Grafaid.Schema.Argument,
  parentField: Grafaid.Schema.Field<any, any>,
  parentType: Grafaid.Schema.ObjectType,
): string | null => {
  const schemaDescription = arg.description
  const namedType = Grafaid.Schema.getNamedType(arg.type)
  const typeAndKind = Grafaid.getTypeAndKind(namedType)

  // Type information
  const isNonNull = Grafaid.Schema.isNonNullType(arg.type)
  const isList = Grafaid.Schema.isListType(Grafaid.Schema.isNonNullType(arg.type) ? arg.type.ofType : arg.type)

  // GraphQL type signature (e.g., "String!", "[ID!]")
  const graphqlType = String(arg.type)

  // Path notation
  const argPath = `${parentType.name}.${parentField.name}(${arg.name})`

  // Default value
  const hasDefault = arg.defaultValue !== undefined && arg.defaultValue !== null
  const defaultValueStr = hasDefault
    ? typeof arg.defaultValue === 'string'
      ? `"${arg.defaultValue}"`
      : JSON.stringify(arg.defaultValue)
    : undefined

  // Build table
  const table = markdownTable({
    'GraphQL Type': `\`${graphqlType}\``,
    'Parent': `{@link $NamedTypes.$${parentType.name}}.${parentField.name}`,
    'Path': `\`${argPath}\``,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'Default': defaultValueStr ? `\`${defaultValueStr}\`` : undefined,
    '⚠ Deprecated': arg.deprecationReason || undefined,
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
 * Generate enhanced JSDoc for static document builder fields.
 */
export const getStaticDocumentFieldDoc = (
  config: Config,
  field: Grafaid.Schema.Field<any, any>,
  parentType: Grafaid.Schema.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
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
    const fieldSignature = Grafaid.Document.printWithoutDescriptions(field.astNode)
    parts.push('```graphql')
    parts.push(fieldSignature)

    // Add named type definition
    if (namedType.astNode) {
      const typeDefinition = Grafaid.Document.printWithoutDescriptions(namedType.astNode)
      if (typeDefinition.trim()) {
        parts.push('')
        parts.push(typeDefinition)
      }
    }

    parts.push('```')
    parts.push('')
  }

  parts.push('# Info')
  parts.push('')
  parts.push(table)
  parts.push('')

  // Add example
  parts.push('@example')
  parts.push('```ts')

  // Generate example based on field characteristics
  const hasArgs = field.args.length > 0
  const isObject = Grafaid.Schema.isObjectType(namedType)
  const isInterface = Grafaid.Schema.isInterfaceType(namedType)
  const isUnion = Grafaid.Schema.isUnionType(namedType)

  if (isUnion || isInterface) {
    parts.push(`const doc = ${operationType}.${field.name}({`)
    if (isUnion) {
      parts.push(`  __typename: true,`)
      parts.push(`  ___on_SomeType: {`)
      parts.push(`    // ... fields for this type`)
      parts.push(`  }`)
    } else {
      parts.push(`  id: true,`)
      parts.push(`  ___on_SomeImplementation: {`)
      parts.push(`    // ... fields for this implementation`)
      parts.push(`  }`)
    }
    parts.push(`})`)
  } else if (isObject) {
    const objectType = namedType as Grafaid.Schema.ObjectType
    const fields = Object.values(objectType.getFields()).slice(0, 3)
    parts.push(`const doc = ${operationType}.${field.name}({`)
    if (hasArgs) {
      parts.push(`  // $: { ...variables }`)
    }
    fields.forEach((f, index) => {
      const isLast = index === fields.length - 1
      const hasMoreFields = Object.values(objectType.getFields()).length > fields.length
      // Add trailing comma on last field if there are more fields (indicated by comment)
      const needsComma = !isLast || hasMoreFields
      parts.push(`  ${f.name}: true${needsComma ? ',' : ''}`)
    })
    if (Object.values(objectType.getFields()).length > fields.length) {
      parts.push(`  // ...`)
    }
    parts.push(`})`)
  } else {
    parts.push(`const doc = ${operationType}.${field.name}()`)
  }

  parts.push('```')

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for selection set object types.
 */
export const getObjectTypeSelectionSetDoc = (
  type: Grafaid.Schema.ObjectType,
  isRoot: boolean,
): string => {
  const schemaDescription = type.description
  const kindDocUrl = getKindDocUrl('OutputObject')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length

  // Check if this object implements any interfaces
  const interfaces = type.getInterfaces()

  // Build table
  const table = markdownTable({
    'Kind': `{@link ${kindDocUrl} | Object} ↗`,
    'Fields': `${fieldCount}`,
    'Implements': interfaces.length > 0
      ? interfaces.map(i => `{@link $Schema.${i.name}}`).join(', ')
      : undefined,
  })

  // Combine parts
  const parts: string[] = []

  // Add narrative based on whether it's a root type
  if (isRoot) {
    parts.push(`Selection set for GraphQL root type.`)
  } else {
    parts.push(`Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.`)
  }

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for selection set interface types.
 */
export const getInterfaceTypeSelectionSetDoc = (
  type: Grafaid.Schema.InterfaceType,
  kindMap: Grafaid.Schema.KindMap,
): string => {
  const schemaDescription = type.description
  const kindDocUrl = getKindDocUrl('Interface')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length

  // Get implementors
  const implementors = Grafaid.Schema.KindMap.getInterfaceImplementors(kindMap, type)

  // Build table
  const table = markdownTable({
    'Kind': `{@link ${kindDocUrl} | Interface} ↗`,
    'Fields': `${fieldCount}`,
    'Implementors': implementors.length > 0
      ? implementors.map(i => `{@link $Schema.${i.name}}`).join(', ')
      : undefined,
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`Selection set for {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for selection set union types.
 */
export const getUnionTypeSelectionSetDoc = (
  type: Grafaid.Schema.UnionType,
): string => {
  const schemaDescription = type.description
  const kindDocUrl = getKindDocUrl('Union')
  const members = type.getTypes()

  // Build table
  const table = markdownTable({
    'Kind': `{@link ${kindDocUrl} | Union} ↗`,
    'Members': `${members.length}`,
    'Types': members.map(m => `{@link $Schema.${m.name}}`).join(', '),
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`Selection set for {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for selection set input object types.
 */
export const getInputObjectTypeSelectionSetDoc = (
  type: Grafaid.Schema.InputObjectType,
): string => {
  const schemaDescription = type.description
  const kindDocUrl = getKindDocUrl('InputObject')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length
  const isAllFieldsNullable = Grafaid.Schema.isAllInputObjectFieldsNullable(type)

  // Build table
  const table = markdownTable({
    'Kind': `{@link ${kindDocUrl} | InputObject} ↗`,
    'Fields': `${fieldCount}`,
    'All Fields Nullable': isAllFieldsNullable ? 'Yes' : 'No',
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`Input for {@link https://graphql.org/learn/schema/#input-types | InputObject}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for selection set enum types.
 */
export const getEnumTypeSelectionSetDoc = (
  type: Grafaid.Schema.EnumType,
): string => {
  const schemaDescription = type.description
  const kindDocUrl = getKindDocUrl('Enum')
  const members = type.getValues()
  const memberCount = members.length

  // Build table
  const table = markdownTable({
    'Kind': `{@link ${kindDocUrl} | Enum} ↗`,
    'Members': `${memberCount}`,
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  // Add members list after description
  if (members.length > 0) {
    parts.push('')
    parts.push('**Members:**')
    for (const member of members) {
      const memberDescription = member.description
      if (memberDescription) {
        parts.push(`- \`${member.name}\` - ${memberDescription}`)
      } else {
        parts.push(`- \`${member.name}\``)
      }
    }
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate JSDoc for $Expanded utility type.
 */
export const getExpandedTypeDoc = (fieldName: string): string => {
  const parts: string[] = []
  parts.push(
    `This is the "expanded" version of the \`${fieldName}\` type. It is identical except for the fact`,
  )
  parts.push(`that IDEs will display its contents (a union type) directly, rather than the name of this type.`)
  parts.push(`In some cases, this is a preferable DX, making the types easier to read for users.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for operation $Infer utility type.
 */
export const getOperationInferDoc = (operationType: 'Query' | 'Mutation'): string => {
  const parts: string[] = []
  parts.push(`Infer the result type of a ${operationType} selection set.`)
  parts.push('')
  parts.push(`Given a selection set object, this type computes the exact TypeScript type`)
  parts.push(`of the data that will be returned from executing the ${operationType} operation.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for operation $Variables utility type.
 */
export const getOperationVariablesDoc = (operationType: 'Query' | 'Mutation'): string => {
  const parts: string[] = []
  parts.push(`Infer the variables type for a ${operationType} selection set.`)
  parts.push('')
  parts.push(`@deprecated This is temporarily typed as \`any\` and will be replaced with the new analysis system.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for custom scalar codec export.
 */
export const getScalarCodecDoc = (scalarName: string): string => {
  const parts: string[] = []
  parts.push(`Custom scalar codec for the \`${scalarName}\` type.`)
  parts.push('')
  parts.push(`Handles encoding (TypeScript → GraphQL) and decoding (GraphQL → TypeScript)`)
  parts.push(`transformations for this custom scalar.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for decoded scalar type.
 */
export const getScalarDecodedDoc = (scalarName: string): string => {
  const parts: string[] = []
  parts.push(`The decoded (TypeScript-side) type for the \`${scalarName}\` scalar.`)
  parts.push('')
  parts.push(`This is the type you work with in your application code after the scalar`)
  parts.push(`has been decoded from its GraphQL wire format.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for encoded scalar type.
 */
export const getScalarEncodedDoc = (scalarName: string): string => {
  const parts: string[] = []
  parts.push(`The encoded (GraphQL wire format) type for the \`${scalarName}\` scalar.`)
  parts.push('')
  parts.push(`This is the type used when transmitting the scalar value over the network.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for scalar registry const.
 */
export const getScalarRegistryDoc = (): string => {
  const parts: string[] = []
  parts.push(`Runtime registry of custom scalar codecs.`)
  parts.push('')
  parts.push(`Maps scalar type names to their codec implementations for encoding/decoding.`)

  return parts.join('\n')
}

/**
 * Generate JSDoc for scalar registry type.
 */
export const getScalarRegistryTypeDoc = (): string => {
  const parts: string[] = []
  parts.push(`Type-level registry of custom scalars.`)
  parts.push('')
  parts.push(`Provides type information about custom scalars for the type system.`)

  return parts.join('\n')
}
