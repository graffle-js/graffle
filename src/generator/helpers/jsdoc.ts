/**
 * Reusable JSDoc generation helpers for consistent documentation across generated modules.
 */

import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'

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

// ========================================
// Foundation Helpers
// ========================================

/**
 * Get schema description for a node, respecting config options.
 * Uses node.description with optional fallback based on config.options.TSDoc.noDocPolicy.
 *
 * Note: Does NOT include deprecation or enum member formatting - those are handled
 * separately in meta tables and enum-specific documentation.
 *
 * **Security:** Escapes user-provided content to prevent JSDoc injection.
 */
export const getSchemaDescription = (
  config: Config,
  node: GraphqlKit.Schema.DescribableTypes,
): string | null => {
  if (node.description) return Str.Code.TSDoc.escape(node.description)

  // Fallback if config says to show messages for missing descriptions
  if (config.options.TSDoc.noDocPolicy === 'message') {
    const kind = 'kind' in node && typeof node.kind === 'string' ? node.kind : 'item'
    const name = 'name' in node && typeof node.name === 'string' ? node.name : 'unknown'
    return `Missing description for ${kind} "${name}".`
  }

  return null
}

/**
 * Extract type information from a GraphQL field type.
 * Returns structured information about nullability, list wrapping, and type signature.
 */
export const extractFieldTypeInfo = (
  field: GraphqlKit.Schema2.Runtime.Nodes.Field<any, any>,
  linkPrefix: '$Schema' | '$NamedTypes' = '$Schema',
): {
  namedType: GraphqlKit.Schema2.Runtime.NodeGroups.NamedTypes
  typeAndKind: { typeName: string; kindName: string }
  isNonNull: boolean
  isList: boolean
  typeSignature: string
} => {
  const namedType = GraphqlKit.Schema.getNamedType(field.type)
  const typeAndKind = GraphqlKit.getTypeAndKind(namedType)
  const isNonNull = GraphqlKit.Schema.isNonNullType(field.type)
  const isList = GraphqlKit.Schema.isListType(
    GraphqlKit.Schema.isNonNullType(field.type) ? field.type.ofType : field.type,
  )

  const listMarker = isList ? '[]' : ''
  const nullMarker = isNonNull ? '!' : ''
  const linkTarget = linkPrefix === '$NamedTypes'
    ? `$NamedTypes.$${typeAndKind.typeName}`
    : `$Schema.${typeAndKind.typeName}`
  const typeSignature = `{@link ${linkTarget}}${listMarker}${nullMarker}`

  return {
    namedType,
    typeAndKind,
    isNonNull,
    isList,
    typeSignature,
  }
}

// ========================================
// Root Type Documentation
// ========================================

/**
 * Generate enhanced JSDoc for a root type (Query, Mutation, Subscription).
 */
export const getRootTypeDoc = Str.Code.TSDoc.template.factory<[
  config: Config,
  type: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
]>((doc, config, type, operationType) => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)
  const typeLink = Str.Code.TSDoc.template.tag.link(
    `https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types`,
    operationTypeCapitalized,
  )

  doc`GraphQL root ${typeLink} type.`
  doc``
  doc.add(getSchemaDescription(config, type))
})

/**
 * Generate JSDoc for root methods interface (QueryMethods, MutationMethods, etc.)
 */
export const getRootMethodsInterfaceDoc = Str.Code.TSDoc.template.factory<[
  config: Config,
  type: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
]>((doc, config, type, operationType) => {
  const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)
  const typeLink = Str.Code.TSDoc.template.tag.link(
    `https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types`,
    operationTypeCapitalized,
  )

  doc`GraphQL ${typeLink} root methods.`
  doc``
  doc`All methods return Promises. Use ${
    Str.Code.Md.code(`.${operationType}.$batch(...)`)
  } to select multiple fields at once.`
  doc``
  doc.add(getSchemaDescription(config, type))
})

/**
 * Generate JSDoc for $batch method
 */
export const getBatchMethodDoc = Str.Code.TSDoc.template.factory<
  [operationType: 'query' | 'mutation' | 'subscription']
>(
  (doc, operationType) => {
    const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

    doc`Select multiple ${operationTypeCapitalized} fields at once.`
    doc``
    doc`Pass a selection set object that includes the fields you want.`
    doc`Use this method to request multiple fields in a single request for better performance.`
  },
)

/**
 * Generate JSDoc for __typename method
 */
export const getTypenameMethodDoc = Str.Code.TSDoc.template.factory<[
  typeName: string,
  operationType: 'query' | 'mutation' | 'subscription',
]>((doc, typeName, operationType) => {
  const typenameLink = Str.Code.TSDoc.template.tag.link(
    'https://graphql.org/learn/schema/#the-__typename-field',
    '__typename',
  )

  doc`Request the ${typenameLink} meta-field.`
  doc``
  doc`The ${
    Str.Code.Md.code('__typename')
  } field returns the name of the object type. In this case, it will always return ${
    Str.Code.Md.code(`"${typeName}"`)
  }.`
})

/**
 * Generate JSDoc for BuilderMethodsRoot properties (query, mutation, subscription).
 */
export const getRootPropertyDoc = Str.Code.TSDoc.template.factory<
  [operationType: 'query' | 'mutation' | 'subscription']
>(
  (doc, operationType) => {
    const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)

    doc`Access to {@link https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types | ${operationTypeCapitalized}} root field methods.`
    doc``
    doc`Each method corresponds to a root field on the GraphQL schema and returns a Promise.`
    doc`Use \`.$batch(...)\` to select multiple ${operationType} fields in a single request.`
    doc``

    doc.$example('Single field', 'ts')`${
      operationType === 'query'
        ? 'const user = await graffle.query.user({ id: true, name: true })'
        : operationType === 'mutation'
        ? `const result = await graffle.mutation.createUser({
  id: true,
  name: true
})`
        : `const stream = await graffle.subscription.onUserUpdate({
  id: true,
  status: true
})`
    }`

    doc.$example('Multiple fields with $batch', 'ts')`${
      operationType === 'query'
        ? `const data = await graffle.query.$batch({
  user: { id: true, name: true },
  posts: { title: true, content: true }
})`
        : operationType === 'mutation'
        ? `const data = await graffle.mutation.$batch({
  createUser: { id: true, name: true },
  createPost: { id: true, title: true }
})`
        : `const stream = await graffle.subscription.$batch({
  onUserUpdate: { id: true, status: true },
  onPostCreate: { id: true, title: true }
})`
    }`
  },
)

/**
 * Generate JSDoc for static document builder (both interface and const).
 * Used for query, mutation, and subscription builders.
 */
export const getStaticDocumentBuilderDoc = Str.Code.TSDoc.template.factory<
  [operationType: 'query' | 'mutation' | 'subscription']
>(
  (doc, operationType) => {
    doc`Static ${operationType} builder for compile-time GraphQL document generation.`
    doc``

    doc.$remarks`Each field method generates a fully typed GraphQL ${
      operationType === 'subscription' ? 'subscription' : operationType === 'mutation' ? 'mutation' : ''
    } document ${operationType === 'query' ? 'string' : ''} with:
- Type-safe selection sets ${
      operationType === 'mutation'
        ? 'and input types'
        : operationType === 'subscription'
        ? 'for real-time data'
        : 'matching your schema'
    }
- Automatic variable inference from \`$\` usage
- Compile-time validation of ${
      operationType === 'subscription'
        ? 'subscriptions'
        : operationType === 'mutation'
        ? 'mutations'
        : 'field selections'
    }
- Zero runtime overhead - documents are generated at build time`
    doc``

    if (operationType === 'query') {
      doc.$example('Basic query', 'ts')`const getUserDoc = query.user({
  id: true,
  name: true,
  email: true
})
// Generates: query { user { id name email } }`
      doc``
      doc.$example('With variables', 'ts')`import { Var } from 'graffle'

const getUserByIdDoc = query.user({
  $: { id: $ },
  name: true,
  posts: { title: true }
})
// Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
// Variables type: { id: string }`
    } else {
      doc.$example(undefined, 'ts')`import { Var } from 'graffle'

const ${
        operationType === 'mutation'
          ? 'createUserDoc = mutation.createUser({'
          : 'onUserUpdateDoc = subscription.onUserUpdate({'
      }
  $: { ${operationType === 'mutation' ? 'input' : 'userId'}: ${operationType === 'mutation' ? '$' : 'Var.$'} },
  id: true,
  ${operationType === 'mutation' ? 'name' : 'name: true,\n  status'}: true${operationType === 'mutation' ? '' : ''}
})
// Generates: ${operationType} (${operationType === 'mutation' ? '$input: CreateUserInput!' : '$userId: ID!'}) { ${
        operationType === 'mutation'
          ? 'createUser(input: $input) { id name }'
          : 'onUserUpdate(userId: $userId) { id name status }'
      } }`
    }

    doc``
    doc.$see('https://graffle.js.org/guides/static-generation', 'Static Generation Guide')
  },
)

/**
 * Generate enhanced JSDoc for an output field in selection sets.
 *
 * Note: This function does not require Config because selection sets use direct field.description
 * without config-based fallbacks.
 */
export const getOutputFieldSelectionSetDoc = Str.Code.TSDoc.template.factory<[
  field: GraphqlKit.Schema2.Runtime.Nodes.Field<any, any>,
  parentTypeName: string,
  namedType: GraphqlKit.Schema2.Runtime.NodeGroups.NamedTypes,
]>((doc, field, parentTypeName, namedType) => {
  // Extract type information
  const { typeAndKind, isNonNull, isList, typeSignature } = extractFieldTypeInfo(field, '$NamedTypes')
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentTypeName}.${field.name}`

  if (field.description) {
    doc`${field.description}`
    doc``
  }

  if (field.deprecationReason) {
    doc.$deprecated(field.deprecationReason)
    doc``
  }

  // Add SDL signature
  if (field.astNode) {
    const fieldSignature = GraphqlKit.Document.printWithoutDescriptions(field.astNode)
    let sdlContent = fieldSignature

    if (namedType.astNode) {
      const typeDefinition = GraphqlKit.Document.printWithoutDescriptions(namedType.astNode)
      if (typeDefinition.trim()) {
        sdlContent += `\n\n${typeDefinition}`
      }
    }

    doc.codeblock('graphql', sdlContent)
    doc``
  }

  doc`# Info`
  doc``
  doc.table({
    'Type': Str.Code.TSDoc.raw(typeSignature),
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`),
    'Parent': Str.Code.TSDoc.template.tag.link(`$NamedTypes.$${parentTypeName}`),
    'Path': Str.Code.Md.code(fieldPath),
    '⚠ Deprecated': field.deprecationReason,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': field.args.length > 0 ? `${field.args.length}` : undefined,
  })
})

/**
 * Generate enhanced JSDoc for a root type method.
 */
export const getOutputFieldMethodDoc = Str.Code.TSDoc.template.factory<[
  config: Config,
  field: GraphqlKit.Schema2.Runtime.Nodes.Field<any, any>,
  parentType: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
]>((doc, config, field, parentType) => {
  const { namedType, typeAndKind, isNonNull, isList, typeSignature } = extractFieldTypeInfo(field, '$Schema')
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentType.name}.${field.name}`
  const description = getSchemaDescription(config, field)

  // Build SDL signature
  let sdlContent: string | null = null
  if (field.astNode) {
    const fieldSignature = GraphqlKit.Document.printWithoutDescriptions(field.astNode)
    sdlContent = fieldSignature

    if (namedType.astNode) {
      const typeDefinition = GraphqlKit.Document.printWithoutDescriptions(namedType.astNode)
      if (typeDefinition.trim()) {
        sdlContent += `\n\n${typeDefinition}`
      }
    }
  }

  doc.add(description)
  doc``
  doc.$deprecated(field.deprecationReason)
  doc``
  doc.codeblock('graphql', sdlContent)
  doc``
  doc`# Info`
  doc``
  doc.table({
    'Type': Str.Code.TSDoc.raw(typeSignature),
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`),
    'Parent': Str.Code.TSDoc.template.tag.link(`$Schema.${parentType.name}`),
    'Path': Str.Code.Md.code(fieldPath),
    '⚠ Deprecated': field.deprecationReason,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': field.args.length > 0 ? `${field.args.length}` : undefined,
  })
})

/**
 * Generate enhanced JSDoc for inline fragment fields (___on_TypeName) in unions and interfaces.
 */
export const getInlineFragmentDoc = Str.Code.TSDoc.template.factory<[
  memberType: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
  parentType: GraphqlKit.Schema2.Runtime.Nodes.UnionType | GraphqlKit.Schema2.Runtime.Nodes.InterfaceType,
  fragmentKind: 'union' | 'interface',
]>((doc, memberType, parentType, fragmentKind) => {
  const memberTypeName = memberType.name
  const parentTypeName = parentType.name
  const kindLabel = fragmentKind === 'union' ? 'Union Member' : 'Interface Implementor'
  const relationLabel = fragmentKind === 'union' ? 'member' : 'implementor'
  const kindDocUrl = fragmentKind === 'union'
    ? 'https://graphql.org/graphql-js/type/#graphqluniontype'
    : 'https://graphql.org/graphql-js/type/#graphqlinterfacetype'
  const kindDisplayName = fragmentKind === 'union' ? 'Union Types' : 'Interface Types'

  doc`Inline fragment selection for {@link $Schema.${memberTypeName}} ${relationLabel}.`
  doc``
  doc`When the runtime value is of type {@link $Schema.${memberTypeName}}, this selection set is applied, allowing you to select fields specific to this ${relationLabel} type.`
  doc``
  doc`# Info`
  doc``
  doc.table({
    'Type': Str.Code.TSDoc.template.tag.link(`$Schema.${memberTypeName}`),
    'Kind': kindLabel,
    'Parent': Str.Code.TSDoc.template.tag.link(`$Schema.${parentTypeName}`),
    'Path': Str.Code.Md.code(`${parentTypeName} -> ${memberTypeName}`),
  })
  doc``
  doc.$see('https://spec.graphql.org/draft/#sec-Inline-Fragments', 'Inline Fragments')
  doc.$see(kindDocUrl, kindDisplayName)
  doc``

  const exampleCode = fragmentKind === 'union'
    ? `query.${parentTypeName.toLowerCase()}s({
  __typename: true,
  ___on_${memberTypeName}: {
    // ... ${memberTypeName}-specific fields
  }
})`
    : `query.${parentTypeName.toLowerCase()}s({
  id: true,
  name: true,
  ___on_${memberTypeName}: {
    // ... ${memberTypeName}-specific fields
  }
})`

  doc.$example(undefined, 'ts')`${exampleCode}`
})

/**
 * Generate enhanced JSDoc for field arguments in selection sets.
 */
export const getArgumentDoc = Str.Code.TSDoc.template.factory<[
  config: Config,
  arg: GraphqlKit.Schema2.Runtime.Nodes.Argument,
  parentField: GraphqlKit.Schema2.Runtime.Nodes.Field<any, any>,
  parentType: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
]>((doc, config, arg, parentField, parentType) => {
  const graphqlType = String(arg.type)
  const argPath = `${parentType.name}.${parentField.name}(${arg.name})`
  const isNonNull = GraphqlKit.Schema.isNonNullType(arg.type)
  const hasDefault = arg.defaultValue !== undefined && arg.defaultValue !== null
  const defaultValueStr = hasDefault
    ? typeof arg.defaultValue === 'string'
      ? `"${arg.defaultValue}"`
      : JSON.stringify(arg.defaultValue)
    : undefined

  doc.add(arg.description)
  doc``
  doc.$deprecated(arg.deprecationReason)
  doc``
  doc`# Info`
  doc``
  doc.table({
    'GraphQL Type': Str.Code.Md.code(graphqlType),
    'Parent': Str.Code.TSDoc.raw(`{@link $NamedTypes.$${parentType.name}}.${parentField.name}`),
    'Path': Str.Code.Md.code(argPath),
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'Default': defaultValueStr ? Str.Code.Md.code(defaultValueStr) : undefined,
    '⚠ Deprecated': arg.deprecationReason,
  })
})

/**
 * Generate enhanced JSDoc for static document builder fields.
 */
export const getStaticDocumentFieldDoc = Str.Code.TSDoc.template.factory<[
  config: Config,
  field: GraphqlKit.Schema2.Runtime.Nodes.Field<any, any>,
  parentType: GraphqlKit.Schema2.Runtime.Nodes.ObjectType,
  operationType: 'query' | 'mutation' | 'subscription',
]>((doc, config, field, parentType, operationType) => {
  // Extract type information
  const { namedType, typeAndKind, isNonNull, isList, typeSignature } = extractFieldTypeInfo(field, '$Schema')
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentType.name}.${field.name}`

  // Add description (respecting config)
  const description = getSchemaDescription(config, field)
  if (description) {
    doc`${description}`
    doc``
  }

  // Add deprecation tag if present
  if (field.deprecationReason) {
    doc.$deprecated(field.deprecationReason)
    doc``
  }

  // Add GraphQL SDL signature
  if (field.astNode) {
    const fieldSignature = GraphqlKit.Document.printWithoutDescriptions(field.astNode)
    let sdlContent = fieldSignature

    if (namedType.astNode) {
      const typeDefinition = GraphqlKit.Document.printWithoutDescriptions(namedType.astNode)
      if (typeDefinition.trim()) {
        sdlContent += `\n\n${typeDefinition}`
      }
    }

    doc.codeblock('graphql', sdlContent)
    doc``
  }

  doc`# Info`
  doc``
  doc.table({
    'Type': Str.Code.TSDoc.raw(typeSignature),
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`),
    'Parent': Str.Code.TSDoc.template.tag.link(`$Schema.${parentType.name}`),
    'Path': Str.Code.Md.code(fieldPath),
    '⚠ Deprecated': field.deprecationReason,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': field.args.length > 0 ? `${field.args.length}` : undefined,
  })
  doc``

  // Generate example based on field characteristics
  const hasArgs = field.args.length > 0
  const isObject = GraphqlKit.Schema.isObjectType(namedType)
  const isInterface = GraphqlKit.Schema.isInterfaceType(namedType)
  const isUnion = GraphqlKit.Schema.isUnionType(namedType)

  let exampleCode: string
  if (isUnion || isInterface) {
    if (isUnion) {
      exampleCode = `const doc = ${operationType}.${field.name}({
  __typename: true,
  ___on_SomeType: {
    // ... fields for this type
  }
})`
    } else {
      exampleCode = `const doc = ${operationType}.${field.name}({
  id: true,
  ___on_SomeImplementation: {
    // ... fields for this implementation
  }
})`
    }
  } else if (isObject) {
    const objectType = namedType as GraphqlKit.Schema2.Runtime.Nodes.ObjectType
    const fields = Object.values(objectType.getFields()).slice(0, 3)
    const fieldLines = fields.map((f, index) => {
      const isLast = index === fields.length - 1
      const hasMoreFields = Object.values(objectType.getFields()).length > fields.length
      const needsComma = !isLast || hasMoreFields
      return `  ${f.name}: true${needsComma ? ',' : ''}`
    })

    const allLines = [
      `const doc = ${operationType}.${field.name}({`,
      ...(hasArgs ? ['  // $: { ...variables }'] : []),
      ...fieldLines,
      ...(Object.values(objectType.getFields()).length > fields.length ? ['  // ...'] : []),
      '})',
    ]
    exampleCode = allLines.join('\n')
  } else {
    exampleCode = `const doc = ${operationType}.${field.name}()`
  }

  doc.$example(undefined, 'ts')`${exampleCode}`
})

/**
 * Generate enhanced JSDoc for selection set object types.
 */
export const getObjectTypeSelectionSetDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.Nodes.ObjectType, isRoot: boolean]
>(
  (doc, type, isRoot) => {
    const kindDocUrl = getKindDocUrl('OutputObject')
    const fields = Object.values(type.getFields())
    const fieldCount = fields.length
    const interfaces = type.getInterfaces()
    const narrative = isRoot
      ? `Selection set for GraphQL root type.`
      : `Selection set for {@link https://graphql.org/learn/schema/#object-types | Object} type.`

    doc.addRaw(narrative)
    doc``
    doc.add(type.description)
    doc``
    doc`# Info`
    doc``
    doc.table({
      'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Object ↗'),
      'Fields': `${fieldCount}`,
      'Implements': interfaces.map(i => Str.Code.TSDoc.template.tag.link(`$Schema.${i.name}`)),
    })
  },
)

/**
 * Generate enhanced JSDoc for selection set interface types.
 */
export const getInterfaceTypeSelectionSetDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.Nodes.InterfaceType, kindMap: GraphqlKit.Schema.KindMap]
>((doc, type, kindMap) => {
  const kindDocUrl = getKindDocUrl('Interface')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length
  const implementors = GraphqlKit.Schema.KindMap.getInterfaceImplementors(kindMap, type)
  const interfaceLink = Str.Code.TSDoc.template.tag.link(
    'https://graphql.org/graphql-js/type/#graphqlinterfacetype',
    'Interface',
  )

  doc`Selection set for ${interfaceLink}.`
  doc``
  doc.add(type.description)
  doc``
  doc`# Info`
  doc``
  doc.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Interface ↗'),
    'Fields': `${fieldCount}`,
    'Implementors': implementors.map(i => Str.Code.TSDoc.template.tag.link(`$Schema.${i.name}`)),
  })
})

/**
 * Generate enhanced JSDoc for selection set union types.
 */
export const getUnionTypeSelectionSetDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.Nodes.UnionType]
>(
  (doc, type) => {
    const kindDocUrl = getKindDocUrl('Union')
    const members = type.getTypes()
    const unionLink = Str.Code.TSDoc.template.tag.link('https://graphql.org/graphql-js/type/#graphqluniontype', 'Union')

    doc`Selection set for ${unionLink}.`
    doc``
    doc.add(type.description)
    doc``
    doc`# Info`
    doc``
    doc.table({
      'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Union ↗'),
      'Members': `${members.length}`,
      'Types': members.map(m => Str.Code.TSDoc.template.tag.link(`$Schema.${m.name}`)),
    })
  },
)

/**
 * Generate enhanced JSDoc for selection set input object types.
 */
export const getInputObjectTypeSelectionSetDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.Nodes.InputObject]
>(
  (doc, type) => {
    const kindDocUrl = getKindDocUrl('InputObject')
    const fields = Object.values(type.getFields())
    const fieldCount = fields.length
    const isAllFieldsNullable = GraphqlKit.Schema.isAllInputObjectFieldsNullable(type)
    const inputLink = Str.Code.TSDoc.template.tag.link('https://graphql.org/learn/schema/#input-types', 'InputObject')

    doc`Input for ${inputLink}.`
    doc``
    doc.add(type.description)
    doc``
    doc`# Info`
    doc``
    doc.table({
      'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'InputObject ↗'),
      'Fields': `${fieldCount}`,
      'All Fields Nullable': isAllFieldsNullable ? 'Yes' : 'No',
    })
  },
)

/**
 * Generate enhanced JSDoc for selection set enum types.
 */
export const getEnumTypeSelectionSetDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.Nodes.EnumType]
>(
  (doc, type) => {
    const kindDocUrl = getKindDocUrl('Enum')
    const members = type.getValues()
    const memberCount = members.length

    doc`Values for {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.`

    if (type.description) {
      doc``
      doc`${Str.Code.TSDoc.escape(type.description)}`
    }

    // Add members list after description
    if (members.length > 0) {
      doc``
      doc`**Members:**`
      for (const member of members) {
        const memberDescription = Str.Code.TSDoc.escape(member.description)
        if (memberDescription) {
          doc`- \`${member.name}\` - ${memberDescription}`
        } else {
          doc`- \`${member.name}\``
        }
      }
    }

    doc``
    doc`# Info`
    doc``
    doc.table({
      'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Enum ↗'),
      'Members': `${memberCount}`,
    })
  },
)

/**
 * Generate JSDoc for $Expanded utility type.
 */
export const getExpandedTypeDoc = Str.Code.TSDoc.template.factory<[fieldName: string]>((doc, fieldName) => {
  doc`This is the "expanded" version of the ${Str.Code.Md.code(fieldName)} type. It is identical except for the fact`
  doc`that IDEs will display its contents (a union type) directly, rather than the name of this type.`
  doc`In some cases, this is a preferable DX, making the types easier to read for users.`
})

/**
 * Generate JSDoc for operation $Infer utility type.
 */
export const getOperationInferDoc = Str.Code.TSDoc.template.factory<[operationType: 'Query' | 'Mutation']>(
  (doc, operationType) => {
    doc`Infer the result type of a ${operationType} selection set.`
    doc``
    doc`Given a selection set object, this type computes the exact TypeScript type`
    doc`of the data that will be returned from executing the ${operationType} operation.`
  },
)

/**
 * Generate JSDoc for operation $Variables utility type.
 */
export const getOperationVariablesDoc = Str.Code.TSDoc.template.factory<[operationType: 'Query' | 'Mutation']>(
  (doc, operationType) => {
    doc`Infer the variables type for a ${operationType} selection set.`
    doc``
    doc.$deprecated(
      `This is temporarily typed as ${Str.Code.Md.code('any')} and will be replaced with the new analysis system.`,
    )
  },
)

/**
 * Generate JSDoc for custom scalar codec export.
 */
export const getScalarCodecDoc = Str.Code.TSDoc.template.factory<[scalarName: string]>((doc, scalarName) => {
  doc`Custom scalar codec for the ${Str.Code.Md.code(scalarName)} type.`
  doc``
  doc`Handles encoding (TypeScript → GraphQL) and decoding (GraphQL → TypeScript)`
  doc`transformations for this custom scalar.`
})

/**
 * Generate JSDoc for decoded scalar type.
 */
export const getScalarDecodedDoc = Str.Code.TSDoc.template.factory<[scalarName: string]>((doc, scalarName) => {
  doc`The decoded (TypeScript-side) type for the ${Str.Code.Md.code(scalarName)} scalar.`
  doc``
  doc`This is the type you work with in your application code after the scalar`
  doc`has been decoded from its GraphQL wire format.`
})

/**
 * Generate JSDoc for encoded scalar type.
 */
export const getScalarEncodedDoc = Str.Code.TSDoc.template.factory<[scalarName: string]>((doc, scalarName) => {
  doc`The encoded (GraphQL wire format) type for the ${Str.Code.Md.code(scalarName)} scalar.`
  doc``
  doc`This is the type used when transmitting the scalar value over the network.`
})

/**
 * Generate JSDoc for scalar registry const.
 */
export const getScalarRegistryDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Runtime registry of custom scalar codecs.`
  doc``
  doc`Maps scalar type names to their codec implementations for encoding/decoding.`
})

/**
 * Generate JSDoc for scalar registry type.
 */
export const getScalarRegistryTypeDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Type-level registry of custom scalars.`
  doc``
  doc`Provides type information about custom scalars for the type system.`
})

/**
 * Generate JSDoc for Select namespace type utilities.
 * Used in Select.ts for type inference utilities.
 */
export const getSelectInferDoc = Str.Code.TSDoc.template.factory<[
  type: GraphqlKit.Schema2.Runtime.NodeGroups.NamedTypes,
  kind: 'operation' | 'selectionSet',
]>((doc, type, kind) => {
  const text = kind === 'operation'
    ? `Infer result type for ${type.name} operations.`
    : `Infer result type for ${type.name} selection sets.`

  doc.add(type.description)
  doc``
  doc.addRaw(text)
})

/**
 * Generate JSDoc for MethodsSelect interfaces.
 * Used in MethodsSelect.ts for selection method interfaces.
 */
export const getMethodsSelectDoc = Str.Code.TSDoc.template.factory<
  [type: GraphqlKit.Schema2.Runtime.NodeGroups.NamedTypes]
>(
  (doc, type) => {
    doc.add(type.description)
    doc``
    doc`Build type-safe selection set for ${type.name}.`
  },
)

// ========================================
// Selection Set Utility Documentation
// ========================================

/**
 * Generate JSDoc for $Scalar base utility type.
 * Used in SelectionSets.ts for the raw scalar type utility.
 */
export const getScalarBaseDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Raw scalar type with context-aware custom scalar resolution.`
  doc``
  doc`This is the base decoded scalar type without any wrappers.`
  doc`Use ${Str.Code.Md.code('Nullable')} or ${
    Str.Code.Md.code('NonNull')
  } wrappers, or the pre-generated scalar variants.`
})

/**
 * Generate JSDoc for Nullable wrapper type.
 * Used in SelectionSets.ts for nullable input field wrapper.
 */
export const getScalarNullableDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Wraps a type for nullable input fields.`
  doc``
  doc`Adds variable marker and allows null/undefined values.`
})

/**
 * Generate JSDoc for NonNull wrapper type.
 * Used in SelectionSets.ts for non-null input field wrapper.
 */
export const getScalarNonNullDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Wraps a type for non-null input fields.`
  doc``
  doc`Adds variable marker but does not allow null (undefined still allowed for optionality).`
})

/**
 * Generate JSDoc for inline fragment field (___).
 * Used in SelectionSets.ts for inline fragment syntax.
 */
export const getFragmentInlineFieldDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Inline fragments for field groups.`
  doc``
  doc`Generally a niche feature. This can be useful for example to apply an ${
    Str.Code.Md.code('@include')
  } directive to a subset of the`
  doc`selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.`
  doc``
  doc.$see('https://spec.graphql.org/draft/#sec-Inline-Fragments')
})

/**
 * Generate JSDoc for __typename meta field.
 * Used in SelectionSets.ts for the __typename field documentation.
 */
export const getTypenameFieldDoc = Str.Code.TSDoc.template.factory<[kind: 'union' | 'interface' | 'object']>(
  (doc, kind) => {
    if (kind === 'object') {
      doc`A meta field. Is the name of the type being selected.`
      doc``
      doc.$see('https://graphql.org/learn/queries/#meta-fields', 'Meta Fields')
      return
    }

    const relation = kind === 'interface' ? 'implementor' : 'member'
    doc`A meta field. Is the name of the type being selected. Since this is a ${kind} type and thus polymorphic,`
    doc`the name is one of the ${relation} type names, whichever is ultimately returned at runtime.`
    doc``
    doc.$see('https://graphql.org/learn/queries/#meta-fields', 'Meta Fields')
  },
)

/**
 * Generate JSDoc for StaticDocumentContext interface.
 * Used in Document.ts for context type documentation.
 */
export const getStaticDocumentContextDoc = Str.Code.TSDoc.template.factory<[]>((doc) => {
  doc`Context for static document type inference.`
  doc``
  doc`Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.`
})
