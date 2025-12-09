import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Obj, Str, Syn } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { extractFieldTypeInfo, getKindDocUrl } from '../helpers/jsdoc.js'
import { type GeneratedModule } from '../helpers/moduleGenerator.js'
import {
  buildImportPath,
  codeImportAll,
  codeImportNamed,
  codeReexportAll,
  codeReexportNamespace,
  getUtilitiesPath,
} from '../helpers/pathHelpers.js'
import { getTsDocContents, renderInlineType, renderName } from '../helpers/render.js'

// /**
//  * Render the fully resolved TypeScript type for an argument or input field.
//  *
//  * Pre-computes the complete TypeScript type including:
//  * - Scalar decoded types via codec
//  * - List wrappers (arrays)
//  * - Nullability (null | undefined unions)
//  * - Proper nesting of lists and nullability
//  *
//  * The resulting type is used in the `$type` property for O(1) type lookup during variable inference.
//  *
//  * @param type - The GraphQL type to resolve
//  * @param config - Generator configuration
//  * @returns The fully resolved TypeScript type string (e.g., "string | null | undefined", "Date[]")
//  */
// const renderResolvedType = (type: GraphqlKit.Schema.Runtime.NodeGroups.Types, config: Config): string => {
//   const namedType = GraphqlKit.Schema.Runtime.getNamedType(type)

//   // Determine base type reference
//   let baseType: string
//   if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(namedType)) {
//     baseType = `${$.$$Scalar}.${namedType.name}['codec']['_typeDecoded']`
//   } else if (GraphqlKit.Schema.Runtime.Nodes.isEnumType(namedType)) {
//     // Enum - reference the pre-computed enum type (enums are in module scope)
//     baseType = `${namedType.name}['$type']`
//   } else {
//     // InputObject - reference the TypeScript input type from SDDM
//     baseType = `SchemaDrivenDataMap['inputTypes']['${namedType.name}']['$type']`
//   }

//   // Check if it's wrapped in a list
//   let currentType = type
//   let listDepth = 0

//   // Unwrap NonNull if present at the top level
//   if (GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType)) {
//     currentType = currentType.ofType
//   }

//   // Count list depth and build array wrappers
//   while (GraphqlKit.Schema.Runtime.Nodes.isListType(currentType)) {
//     listDepth++
//     currentType = GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType.ofType)
//       ? currentType.ofType.ofType
//       : currentType.ofType
//   }

//   // Apply list wrappers (readonly for GraphQL input immutability)
//   let resultType = baseType
//   for (let i = 0; i < listDepth; i++) {
//     resultType = `readonly (${resultType})[]`
//   }

//   // Add nullability
//   // According to GraphQL spec, nullable arguments can be:
//   // - undefined (omitted)
//   // - null (explicitly null)
//   // - the actual value
//   if (GraphqlKit.Schema.Runtime.Nodes.isNullableType(type)) {
//     resultType = `${resultType} | null | undefined`
//   }

//   return resultType
// }
export const ModuleGeneratorSchema = {
  name: `schema/_`,
  generate: (config: Config): GeneratedModule[] => {
    const modules: GeneratedModule[] = []
    const kindMap = config.schema.kindMap.list

    // Generate scalars - one file per scalar in schema/scalars/
    for (const scalar of [...kindMap.ScalarCustom, ...kindMap.ScalarStandard]) {
      modules.push(generateScalarModule(config, scalar))
    }

    // Generate enums - two files per enum in schema/enums/ (main + _members)
    for (const enumType of kindMap.Enum) {
      modules.push(...generateEnumModule(config, enumType))
    }

    // Generate unions - one file per union in schema/unions/
    for (const unionType of kindMap.Union) {
      modules.push(generateUnionModule(config, unionType))
    }

    // Generate input objects - directory per input object in schema/input-objects/
    for (const inputObject of kindMap.InputObject) {
      modules.push(...generateInputObjectModule(config, inputObject))
    }

    // Generate roots - directory per root in schema/roots/
    for (const root of kindMap.Root) {
      modules.push(...generateTypeModule(config, root, 'roots'))
    }

    // Generate objects - directory per object in schema/objects/
    for (const object of kindMap.OutputObject) {
      modules.push(...generateTypeModule(config, object, 'objects'))
    }

    // Generate interfaces - directory per interface in schema/interfaces/
    for (const iface of kindMap.Interface) {
      modules.push(...generateTypeModule(config, iface, 'interfaces'))
    }

    // Generate schema/__.ts (main module with re-exports)
    modules.push(generateSchemaBarrelModule(config, kindMap))

    // Generate schema/_.ts (namespace export + Schema interface)
    modules.push(generateSchemaNamespaceModule(config, kindMap))

    return modules
  },
}

// Individual module generators

const generateScalarModule = (config: Config, scalar: GraphqlKit.Schema.Runtime.Nodes.ScalarType): GeneratedModule => {
  const code = Syn.TS.builder()
  const renderedName = renderName(scalar)
  const originalName = scalar.name
  const isCustom = config.schema.kindMap.list.ScalarCustom.includes(scalar)

  // Export names are never escaped - use re-export with aliasing if needed
  if (isCustom) {
    code(
      Syn.TS.reexportNamed({
        names: originalName,
        from: buildImportPath(config, '..', '..', 'scalar'),
        type: true,
      }),
    )
  } else {
    const utilitiesPath = getUtilitiesPath(config, `schema/scalars/${renderedName}.ts`)
    code(Syn.TS.reexportNamed({ names: originalName, from: utilitiesPath, type: true }))
  }

  return {
    name: `schema/scalars/${scalar.name}`,
    filePath: `schema/scalars/${renderedName}.ts`,
    content: code.build(),
  }
}

const generateEnumModule = (config: Config, enumType: GraphqlKit.Schema.Runtime.Nodes.EnumType): GeneratedModule[] => {
  const modules: GeneratedModule[] = []
  const enumValues = enumType.getValues()

  // Generate members.ts file with member type exports
  const membersCode = Syn.TS.builder()
  for (const value of enumValues) {
    // Build JSDoc for this member
    const generalDescription = Syn.TSDoc.escape(value.description)
      ?? (config.options.TSDoc.noDocPolicy === 'message'
        ? `Missing description for enum member "${value.name}".`
        : null)

    const deprecationDescription = value.deprecationReason
      ? `@deprecated ${Syn.TSDoc.escape(value.deprecationReason)}`
      : null

    const jsdocParts: string[] = []
    if (generalDescription) jsdocParts.push(generalDescription)
    if (deprecationDescription) {
      jsdocParts.push('')
      jsdocParts.push(deprecationDescription)
    }

    const tsDoc = jsdocParts.length > 0 ? Syn.TSDoc.format(jsdocParts.join('\n')) : null

    // Use exportTypeWithKeywordHandling to handle reserved keywords
    const typeDecl = `type ${Syn.TS.Reserved.escapeReserved(value.name)} = ${Syn.TS.string(value.name)}`
    const exportCode = Syn.TS.Reserved.exportTypeWithKeywordHandling(value.name, typeDecl)

    if (tsDoc) {
      membersCode(tsDoc)
    }
    membersCode(exportCode)
  }

  modules.push({
    name: `schema/enums/${enumType.name}/members`,
    filePath: `schema/enums/${enumType.name}/members.ts`,
    content: membersCode.build(),
  })

  // Generate _.ts file with interface + namespace re-export
  const code = Syn.TS.builder()

  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/enums/${enumType.name}/_.ts`)
    code(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }
  // Import members for use in interface
  code(Syn.TS.importAll({ from: './members.js', as: '$Members', type: true }))
  code``

  // Re-export members as namespace
  code(`export * as ${enumType.name} from './members.js'`)
  code``

  // Generate interface - use $Members for type references
  const memberTypes = enumValues.map((_) => `$Members.${_.name}`)
  const membersUnionType = Syn.TS.unionItems(memberTypes)

  code.interface({
    tsDoc: getEnumTypeDoc(config, enumType),
    export: true,
    name: enumType.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Enum` : null,
    block: {
      kind: Syn.TS.string(GraphqlKit.Schema.Kind.TypeKind.Enum),
      name: Syn.TS.string(enumType.name),
      members: membersUnionType,
    },
  })

  modules.push({
    name: `schema/enums/${enumType.name}/_`,
    filePath: `schema/enums/${enumType.name}/_.ts`,
    content: code.build(),
  })

  return modules
}

const generateUnionModule = (
  config: Config,
  unionType: GraphqlKit.Schema.Runtime.Nodes.UnionType,
): GeneratedModule => {
  const code = Syn.TS.builder()

  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/unions/${unionType.name}.ts`)
    code(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }

  const members = unionType.getTypes()
  const memberNames = members.map((_) => _.name)

  // Import member types from their respective directories
  for (const member of members) {
    // Determine which directory the member is in
    const isRoot = config.schema.kindMap.list.Root.some(r => r.name === member.name)
    const dir = isRoot ? 'roots' : 'objects'
    code(codeImportNamed(config, { names: member.name, from: `../${dir}/${member.name}/_`, type: true }))
  }
  code``
  code.interface({
    tsDoc: getUnionTypeDoc(config, unionType),
    export: true,
    name: unionType.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Union` : null,
    block: {
      kind: Syn.TS.string(GraphqlKit.Schema.Kind.TypeKind.Union),
      name: Syn.TS.string(unionType.name),
      members: Syn.TS.tuple(memberNames),
      membersUnion: Syn.TS.unionItems(memberNames),
      membersIndex: Object.fromEntries(memberNames.map(n => [n, n])),
    },
  })

  return {
    name: `schema/unions/${unionType.name}`,
    filePath: `schema/unions/${unionType.name}.ts`,
    content: code.build(),
  }
}

/**
 * Generate JSDoc for the special __typename meta-field.
 */
const getTypeNameFieldDoc = (typeName: string): string => {
  return `GraphQL \`__typename\` meta-field. The name of the object type currently being queried.

Type: \`"${typeName}"\`

{@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}`
}

/**
 * Generate enhanced JSDoc for an input field including type, kind, and parent metadata.
 */
const getInputFieldDoc = (
  config: Config,
  field: GraphqlKit.Schema.Runtime.Nodes.InputField,
  parentType: GraphqlKit.Schema.Runtime.Nodes.InputObjectType,
): string | null => {
  const namedType = GraphqlKit.Schema.Runtime.getNamedType(field.type)
  const typeAndKind = GraphqlKit.Schema.Kind.getTypeAndKind(namedType)

  // Get the base description from the schema
  const schemaDescription = getTsDocContents(config, field)

  // Type information
  const isNonNull = GraphqlKit.Schema.Runtime.Nodes.isNonNullType(field.type)
  const isList = GraphqlKit.Schema.Runtime.Nodes.isListType(
    GraphqlKit.Schema.Runtime.Nodes.isNonNullType(field.type) ? field.type.ofType : field.type,
  )
  const listMarker = isList ? '[]' : ''
  const nullMarker = isNonNull ? '!' : ''
  const typeSignature = `{@link $Schema.${typeAndKind.typeName}}${listMarker}${nullMarker}`
  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const fieldPath = `${parentType.name}.${field.name}`

  // Check for deprecation
  const deprecationReason = field.deprecationReason

  // Check for default value
  const hasDefaultValue = field.defaultValue !== undefined && field.defaultValue !== null
  const defaultValue = field.defaultValue

  // Check for custom directives
  const customDirectives =
    field.astNode?.directives?.filter(d => !['deprecated', 'skip', 'include'].includes(d.name.value)) ?? []

  // Build markdown table
  const table = Syn.Md.table({
    'Type': typeSignature,
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`).content,
    'Parent': Syn.TSDoc.template.tag.link(`$Schema.${parentType.name}`).content,
    'Path': Syn.Md.code(fieldPath),
    '⚠ Deprecated': deprecationReason,
    'Default': hasDefaultValue ? Syn.Md.code(JSON.stringify(defaultValue)) : undefined,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Directives': customDirectives.length > 0
      ? customDirectives.map(d => `@${d.name.value}`).join(', ')
      : undefined,
  })

  // Combine parts with proper formatting
  const parts: string[] = []

  // Add field type header with link to GraphQL input type docs
  parts.push(
    `GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.${parentType.name}}.`,
  )

  if (schemaDescription) {
    parts.push('') // blank line
    parts.push(schemaDescription)
  }

  parts.push('') // blank line before table
  parts.push('# Info')
  parts.push('') // blank line after heading
  parts.push(table)

  return parts.join('\n')
}

/**
 * Render the fully resolved TypeScript type for an input field.
 *
 * Pre-computes the complete TypeScript type including:
 * - Scalar decoded types via codec
 * - Enum members
 * - InputObject type
 * - List wrappers (arrays)
 * - Nullability (null | undefined unions)
 * - Proper nesting of lists and nullability
 *
 * The resulting type is stored in the `type` property for Schema-driven type references.
 *
 * @param type - The GraphQL type to resolve
 * @param namedType - The unwrapped named type
 * @returns The fully resolved TypeScript type string (e.g., "$Schema.Date['codec']['_typeDecoded'] | null | undefined")
 */
const renderResolvedInputFieldType = (
  type: GraphqlKit.Schema.Runtime.NodeGroups.Types,
  namedType: GraphqlKit.Schema.Runtime.NodeGroups.NamedTypes,
): string => {
  // Determine base type reference
  let baseType: string
  if (GraphqlKit.Schema.Runtime.Nodes.isScalarType(namedType)) {
    baseType = `$Schema.${namedType.name}['codec']['_typeDecoded']`
  } else if (GraphqlKit.Schema.Runtime.Nodes.isEnumType(namedType)) {
    baseType = `$Schema.${namedType.name}['members']`
  } else {
    // InputObject - reference another InputObject's type
    baseType = `$Schema.${namedType.name}['type']`
  }

  // Handle list wrappers
  let currentType = type
  let listDepth = 0

  // Unwrap NonNull if present at the top level
  if (GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType)) {
    currentType = currentType.ofType
  }

  // Count list depth and build array wrappers
  while (GraphqlKit.Schema.Runtime.Nodes.isListType(currentType)) {
    listDepth++
    currentType = GraphqlKit.Schema.Runtime.Nodes.isNonNullType(currentType.ofType)
      ? currentType.ofType.ofType
      : currentType.ofType
  }

  // Apply list wrappers (readonly for GraphQL input immutability)
  let resultType = baseType
  for (let i = 0; i < listDepth; i++) {
    resultType = `readonly (${resultType})[]`
  }

  // Add nullability
  // According to GraphQL spec, nullable arguments can be:
  // - undefined (omitted)
  // - null (explicitly null)
  // - the actual value
  if (GraphqlKit.Schema.Runtime.Nodes.isNullableType(type)) {
    resultType = `${resultType} | null | undefined`
  }

  return resultType
}

const generateInputObjectModule = (
  config: Config,
  inputObject: GraphqlKit.Schema.Runtime.Nodes.InputObjectType,
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = Syn.TS.builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/fields.ts`)
    fieldsCode(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }
  fieldsCode(codeImportNamed(config, { names: { Schema: '$Schema' }, from: '../../_', type: true }))
  fieldsCode``

  // Generate field interfaces
  for (const field of Obj.values(inputObject.getFields())) {
    const namedType = GraphqlKit.Schema.Runtime.getNamedType(field.type)
    const resolvedType = renderResolvedInputFieldType(field.type, namedType)

    fieldsCode.interface({
      tsDoc: getInputFieldDoc(config, field, inputObject),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputField` : null,
      block: {
        kind: Syn.TS.string(`InputField`),
        name: Syn.TS.string(field.name),
        inlineType: renderInlineType(field.type),
        namedType: namedTypesTypeReference(namedType),
        type: resolvedType,
      },
    })
  }

  modules.push({
    name: `schema/input-objects/${inputObject.name}/fields`,
    filePath: `schema/input-objects/${inputObject.name}/fields.ts`,
    content: fieldsCode.build(),
  })

  // Generate _.ts (namespace export + interface)
  const namespaceCode = Syn.TS.builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/_.ts`)
    namespaceCode(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))
  namespaceCode``
  namespaceCode(codeReexportNamespace(config, { as: inputObject.name, from: './fields' }))
  namespaceCode``

  const interfaceFields = Object.fromEntries(
    Obj.values(inputObject.getFields()).map((field) => {
      const name = field.name
      // Always use original name - export alias handles reserved keywords
      const fieldTypeReference = `$Fields.${name}`
      return [name, fieldTypeReference]
    }),
  )

  // Build type object from field types
  const typeFields = Object.fromEntries(
    Obj.values(inputObject.getFields()).map((field) => {
      const name = field.name
      const isNullable = GraphqlKit.Schema.Runtime.Nodes.isNullableType(field.type)
      const optionalMarker = isNullable ? '?' : ''
      return [name + optionalMarker, `$Fields.${name}['type']`]
    }),
  )

  namespaceCode.interface({
    tsDoc: getInputObjectTypeDoc(config, inputObject),
    export: true,
    name: inputObject.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputObject` : null,
    block: {
      kind: Syn.TS.string(GraphqlKit.Schema.Kind.TypeKind.InputObject),
      name: Syn.TS.string(inputObject.name),
      isAllFieldsNullable: Syn.TS.boolean(GraphqlKit.Schema.Runtime.isAllInputObjectFieldsNullable(inputObject)),
      fields: interfaceFields,
      type: typeFields,
    },
  })

  modules.push({
    name: `schema/input-objects/${inputObject.name}/_`,
    filePath: `schema/input-objects/${inputObject.name}/_.ts`,
    content: namespaceCode.build(),
  })

  return modules
}

const generateSchemaNamespaceModule = (
  config: Config,
  kindMap: GraphqlKit.Schema.Kind.KindMap['list'],
): GeneratedModule => {
  const code = Syn.TS.builder()
  const utilitiesPath = getUtilitiesPath(config, `schema/_.ts`)

  code(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  code(Syn.TS.importAll({ from: buildImportPath(config, '..', 'data'), as: '$$Data' }))
  code(Syn.TS.importAll({ from: buildImportPath(config, '..', 'scalar'), as: '$$Scalar' }))
  code(Syn.TS.importAll({ from: buildImportPath(config, '.', '__'), as: '$Types' }))
  code``
  code(codeReexportNamespace(config, { as: 'Schema', from: './__' }))
  code``

  // Generate Schema interface here to avoid name conflict
  const root = kindMap.Root.map(_ => [_.name, `$Types.${_.name}`] as const)
  const objects = kindMap.OutputObject.map(_ => [_.name, `$Types.${_.name}`] as const)
  const unions = kindMap.Union.map(_ => [_.name, `$Types.${_.name}`] as const)
  const interfaces = kindMap.Interface.map(_ => [_.name, `$Types.${_.name}`] as const)
  const enums = kindMap.Enum.map(_ => [_.name, `$Types.${_.name}`] as const)
  const scalars = [
    ...kindMap.ScalarCustom.map(_ => [_.name, `$Types.${_.name}`] as const),
    ...kindMap.ScalarStandard.map(_ => [_.name, `$Types.${_.name}`] as const),
  ]
  const operationsAvailable = Obj.entries(config.schema.kindMap.index.Root).filter(_ => _[1] !== null).map(_ => _[0])

  const schema: Syn.TS.TermObject.TermObject = {
    name: `$$Data.Name`,
    operationsAvailable: Syn.TS.tuple(
      operationsAvailable.map(opType => `$.GraphqlKit.Schema.OperationType.${opType.toUpperCase()}`),
    ),
    RootUnion: Syn.TS.unionItems(kindMap.Root.map(_ => `$Types.${_.name}`)),
    Root: {
      [GraphqlKit.Schema.OperationType.QUERY]: config.schema.kindMap.index.Root.query?.name
        ? `$Types.${config.schema.kindMap.index.Root.query.name}`
        : null,
      [GraphqlKit.Schema.OperationType.MUTATION]: config.schema.kindMap.index.Root.mutation?.name
        ? `$Types.${config.schema.kindMap.index.Root.mutation.name}`
        : null,
      [GraphqlKit.Schema.OperationType.SUBSCRIPTION]: config.schema.kindMap.index.Root.subscription?.name
        ? `$Types.${config.schema.kindMap.index.Root.subscription.name}`
        : null,
    },
    allTypes: Object.fromEntries([
      ...root,
      ...enums,
      ...objects,
      ...unions,
      ...interfaces,
    ]),
    objects,
    unions,
    interfaces,
    scalarNamesUnion: Syn.TS.unionItems(scalars.map(_ => _[0]).map(Syn.TS.string)),
    scalars,
    scalarRegistry: `$Scalars`,
    extensions: `$.GlobalRegistry.TypeExtensions`,
  }

  const extensions: Syn.TS.TermObject.TermObject = {}
  config.extensions.forEach(_ => {
    _.onSchema?.({ config, schema: extensions })
  })
  if (!Obj.isEmpty(extensions)) {
    schema[`extensions`] = extensions
  }

  code.interface({
    export: true,
    name: `Schema`,
    parameters: `<$Scalars extends $.Schema.Scalars.Registry = $$Scalar.$Registry>`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema` : null,
    block: schema,
  })

  return {
    name: `schema/_`,
    filePath: `schema/_.ts`,
    content: code.build(),
  }
}

const generateSchemaBarrelModule = (
  config: Config,
  kindMap: GraphqlKit.Schema.Kind.KindMap['list'],
): GeneratedModule => {
  const code = Syn.TS.builder()

  // Re-export roots
  for (const type of kindMap.Root) {
    code(codeReexportAll(config, { from: `./roots/${type.name}/_`, type: true }))
  }

  // Re-export objects
  for (const type of kindMap.OutputObject) {
    code(codeReexportAll(config, { from: `./objects/${type.name}/_`, type: true }))
  }

  // Re-export interfaces
  for (const type of kindMap.Interface) {
    code(codeReexportAll(config, { from: `./interfaces/${type.name}/_`, type: true }))
  }

  // Re-export scalars
  const scalars = [
    ...kindMap.ScalarCustom,
    ...kindMap.ScalarStandard,
  ]
  for (const scalar of scalars) {
    const renderedName = renderName(scalar)
    code(codeReexportAll(config, { from: `./scalars/${renderedName}`, type: true }))
  }

  // Re-export enums
  for (const type of kindMap.Enum) {
    code(codeReexportAll(config, { from: `./enums/${type.name}/_`, type: true }))
  }

  // Re-export unions
  for (const type of kindMap.Union) {
    code(codeReexportAll(config, { from: `./unions/${type.name}`, type: true }))
  }

  // Re-export input objects
  for (const type of kindMap.InputObject) {
    code(codeReexportAll(config, { from: `./input-objects/${type.name}/_`, type: true }))
  }
  code``

  return {
    name: `schema/__`,
    filePath: `schema/__.ts`,
    content: code.build(),
  }
}

/**
 * Generate enhanced JSDoc for an output field including type, kind, and parent metadata.
 */
const getOutputFieldDoc = (
  config: Config,
  field: GraphqlKit.Schema.Runtime.Nodes.Field<any, any>,
  parentType: GraphqlKit.Schema.Runtime.Nodes.ObjectType | GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
): string | null => {
  // Extract type information using foundation helper
  const { namedType, typeAndKind, isNonNull, isList, typeSignature } = extractFieldTypeInfo(field, '$Schema')

  // Get the base description from the schema
  const schemaDescription = getTsDocContents(config, field)

  const kindDocUrl = getKindDocUrl(typeAndKind.kindName)
  const hasArgs = field.args.length > 0
  const fieldPath = `${parentType.name}.${field.name}`

  // Check for deprecation
  const deprecationReason = field.deprecationReason

  // Check for custom directives
  const customDirectives =
    field.astNode?.directives?.filter(d => !['deprecated', 'skip', 'include'].includes(d.name.value)) ?? []

  // Build markdown table
  const table = Syn.Md.table({
    'Type': typeSignature,
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`).content,
    'Parent': Syn.TSDoc.template.tag.link(`$Schema.${parentType.name}`).content,
    'Path': Syn.Md.code(fieldPath),
    '⚠ Deprecated': deprecationReason,
    'Nullability': isNonNull ? 'Required' : 'Optional',
    'List': isList ? 'Yes' : undefined,
    'Arguments': hasArgs ? `${field.args.length}` : undefined,
    'Directives': customDirectives.length > 0
      ? customDirectives.map(d => `@${d.name.value}`).join(', ')
      : undefined,
  })

  // Combine parts with proper formatting
  const parts: string[] = []

  // Add field type header with link to GraphQL fields docs
  parts.push(
    `GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.${parentType.name}}.`,
  )

  if (schemaDescription) {
    parts.push('') // blank line
    parts.push(schemaDescription)
  }

  parts.push('') // blank line before table
  parts.push('# Info')
  parts.push('') // blank line after heading
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for an Object type.
 */
const getObjectTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.ObjectType,
  isRoot: boolean,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('OutputObject')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length

  // Check if this object implements any interfaces
  const interfaces = type.getInterfaces()

  // Determine operation type for roots
  let operationType: 'query' | 'mutation' | 'subscription' | null = null
  if (isRoot) {
    if (config.schema.kindMap.index.Root.query?.name === type.name) operationType = 'query'
    else if (config.schema.kindMap.index.Root.mutation?.name === type.name) operationType = 'mutation'
    else if (config.schema.kindMap.index.Root.subscription?.name === type.name) operationType = 'subscription'
  }

  // Build table
  const table = Syn.Md.table({
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, 'Object ↗').content,
    'Fields': `${fieldCount}`,
    'Implements': interfaces.length > 0
      ? interfaces.map(i => Syn.TSDoc.template.tag.link(`$Schema.${i.name}`).content).join(', ')
      : undefined,
  })

  // Combine parts
  const parts: string[] = []

  // Add narrative based on whether it's a root type
  if (isRoot && operationType) {
    const operationTypeCapitalized = operationType.charAt(0).toUpperCase() + operationType.slice(1)
    parts.push(
      `GraphQL root {@link https://graphql.org/learn/schema/#the-${operationType}-and-mutation-types | ${operationTypeCapitalized}} type.`,
    )
  } else {
    parts.push(`GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.`)
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
 * Generate enhanced JSDoc for an Interface type.
 */
const getInterfaceTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
  kindMap: GraphqlKit.Schema.Kind.KindMap,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('Interface')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length

  // Get implementors
  const implementors = GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(kindMap, type)

  // Build table
  const table = Syn.Md.table({
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, 'Interface ↗').content,
    'Fields': `${fieldCount}`,
    'Implementors': implementors.length > 0
      ? implementors.map(i => Syn.TSDoc.template.tag.link(`$Schema.${i.name}`).content).join(', ')
      : undefined,
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.`)

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
 * Generate enhanced JSDoc for a Union type.
 */
const getUnionTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.UnionType,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('Union')
  const members = type.getTypes()

  // Combine parts
  const parts: string[] = []
  parts.push(`GraphQL {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  parts.push('')
  parts.push('# Info')
  parts.push('')
  parts.push(Syn.Md.table({
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, 'Union ↗').content,
    'Members': `${members.length}`,
    'Types': members.map(m => Syn.TSDoc.template.tag.link(`$Schema.${m.name}`).content).join(', '),
  }))

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for an InputObject type.
 */
const getInputObjectTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.InputObjectType,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('InputObject')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length
  const isAllFieldsNullable = GraphqlKit.Schema.Runtime.isAllInputObjectFieldsNullable(type)

  // Build table
  const table = Syn.Md.table({
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, 'InputObject ↗').content,
    'Fields': `${fieldCount}`,
    'All Fields Nullable': isAllFieldsNullable ? 'Yes' : 'No',
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.`)

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
 * Generate enhanced JSDoc for an Enum type.
 */
const getEnumTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.EnumType,
): string | null => {
  // Get enum description respecting config and escape it for safety
  const schemaDescription = type.description
    ? Syn.TSDoc.escape(type.description)
    : (config.options.TSDoc.noDocPolicy === 'message'
      ? `Missing description for Enum "${type.name}".`
      : null)

  const kindDocUrl = getKindDocUrl('Enum')
  const members = type.getValues()
  const memberCount = members.length

  // Build table
  const table = Syn.Md.table({
    'Kind': Syn.TSDoc.template.tag.link(kindDocUrl, 'Enum ↗').content,
    'Members': `${memberCount}`,
  })

  // Combine parts
  const parts: string[] = []
  parts.push(`GraphQL {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum}.`)

  if (schemaDescription) {
    parts.push('')
    parts.push(schemaDescription)
  }

  // Add members list after description
  if (members.length > 0) {
    parts.push('')
    parts.push('**Members:**')
    for (const member of members) {
      // Respect config for member descriptions and escape them for safety
      const memberDescription = member.description
        ? Syn.TSDoc.escape(member.description)
        : (config.options.TSDoc.noDocPolicy === 'message'
          ? `Missing description for member "${member.name}".`
          : null)

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

const generateTypeModule = (
  config: Config,
  type: GraphqlKit.Schema.Runtime.Nodes.ObjectType | GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
  kind: 'roots' | 'objects' | 'interfaces',
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = Syn.TS.builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/fields.ts`)
    fieldsCode(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }
  fieldsCode(codeImportNamed(config, { names: { Schema: '$Schema' }, from: '../../_', type: true }))
  fieldsCode``

  // __typename field
  fieldsCode.interface({
    tsDoc: getTypeNameFieldDoc(type.name),
    export: true,
    name: `__typename`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
    block: {
      kind: Syn.TS.string(`OutputField`),
      name: Syn.TS.string(`__typename`),
      arguments: {},
      inlineType: `[1]`,
      namedType: {
        kind: Syn.TS.string(`__typename`),
        value: Syn.TS.string(type.name),
      },
    },
  })
  fieldsCode``

  // Regular fields
  for (const field of Obj.values(type.getFields())) {
    const namedType = GraphqlKit.Schema.Runtime.getNamedType(field.type)

    fieldsCode.interface({
      tsDoc: getOutputFieldDoc(config, field, type),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
      block: {
        kind: Syn.TS.string(`OutputField`),
        name: Syn.TS.string(field.name),
        arguments: Object.fromEntries(field.args.map(arg => {
          return [
            arg.name,
            Syn.TS.objectField$({
              tsDoc: getTsDocContents(config, arg),
              value: {
                kind: Syn.TS.string(`InputField`),
                name: Syn.TS.string(arg.name),
                inlineType: renderInlineType(arg.type),
                namedType: namedTypesTypeReference(GraphqlKit.Schema.Runtime.getNamedType(arg.type)),
              },
            }),
          ]
        })),
        inlineType: renderInlineType(field.type),
        namedType: namedTypesTypeReference(namedType),
      },
    })
    fieldsCode``
  }

  modules.push({
    name: `schema/${kind}/${type.name}/fields`,
    filePath: `schema/${kind}/${type.name}/fields.ts`,
    content: fieldsCode.build(),
  })

  // Generate _.ts (namespace export + interface)
  const namespaceCode = Syn.TS.builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/_.ts`)
    namespaceCode(Syn.TS.importAll({ from: utilitiesPath, as: '$', type: true }))
  }
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))

  // For interfaces, import implementor types from the barrel
  const isInterface = type instanceof GraphqlKit.Schema.Runtime.Nodes.InterfaceType
  if (isInterface) {
    const implementors = GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(
      config.schema.kindMap,
      type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
    )
    if (implementors.length > 0) {
      // Import from barrel which is 2 levels up from schema/{kind}/{TypeName}/
      namespaceCode(codeImportNamed(config, { names: implementors.map(_ => _.name), from: '../../__', type: true }))
    }
  }

  namespaceCode``
  namespaceCode(codeReexportNamespace(config, { as: type.name, from: './fields' }))
  namespaceCode``

  const interfaceFields = Object.fromEntries(
    [[`__typename`, `$Fields.__typename`]].concat(
      Obj.values(type.getFields()).map((field) => {
        const name = field.name
        // Always use original name - export alias handles reserved keywords
        const fieldTypeReference = `$Fields.${name}`
        return [name, fieldTypeReference]
      }),
    ),
  )

  namespaceCode.interface({
    tsDoc: isInterface
      ? getInterfaceTypeDoc(config, type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType, config.schema.kindMap)
      : getObjectTypeDoc(config, type as GraphqlKit.Schema.Runtime.Nodes.ObjectType, kind === 'roots'),
    export: true,
    name: type.name,
    extends: config.code.schemaInterfaceExtendsEnabled
      ? (isInterface ? `$.Schema.Interface` : `$.Schema.OutputObject`)
      : null,
    block: {
      kind: Syn.TS.string(
        isInterface ? GraphqlKit.Schema.Kind.TypeKind.Interface : GraphqlKit.Schema.Kind.TypeKind.Object,
      ),
      name: Syn.TS.string(type.name),
      fields: interfaceFields,
      ...(isInterface
        ? {
          implementors: Syn.TS.tuple(
            GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(
              config.schema.kindMap,
              type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
            )
              .map(_ => _.name),
          ),
          implementorsUnion: GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(
              config.schema.kindMap,
              type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
            )
              .length > 0
            ? Syn.TS.unionItems(
              GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(
                config.schema.kindMap,
                type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
              ).map(_ => _.name),
            )
            : `never`,
          implementorsIndex: Object.fromEntries(
            GraphqlKit.Schema.Kind.KindMap.getInterfaceImplementors(
              config.schema.kindMap,
              type as GraphqlKit.Schema.Runtime.Nodes.InterfaceType,
            )
              .map(n => [n.name, n.name]),
          ),
        }
        : {}),
    },
  })

  modules.push({
    name: `schema/${kind}/${type.name}/_`,
    filePath: `schema/${kind}/${type.name}/_.ts`,
    content: namespaceCode.build(),
  })

  return modules
}

const namedTypesTypeReference = (name: string | GraphqlKit.Schema.Runtime.NodeGroups.NamedTypes) => {
  const name_ = typeof name === `string` ? name : name.name
  return `$Schema.${name_}`
}
