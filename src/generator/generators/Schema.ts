import { GraphqlKit } from '#src/lib/grafaid/_.js'
import { Obj, Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { extractFieldTypeInfo, getKindDocUrl } from '../helpers/jsdoc.js'
import { type GeneratedModule, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { type CodeGenerator, createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import {
  applyImportExtension,
  buildImportPath,
  codeImportAll,
  codeImportNamed,
  codeReexportAll,
  codeReexportNamespace,
  getUtilitiesPath,
} from '../helpers/pathHelpers.js'
import { getTsDocContents, renderInlineType, renderName } from '../helpers/render.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorScalar } from './Scalar.js'

export const ModuleGeneratorSchema = {
  name: `schema/$`,
  generate: (config: Config): GeneratedModule[] => {
    const modules: GeneratedModule[] = []
    const kindMap = config.schema.kindMap.list

    // Generate scalars - one file per scalar in schema/scalars/
    for (const scalar of [...kindMap.ScalarCustom, ...kindMap.ScalarStandard]) {
      modules.push(generateScalarModule(config, scalar))
    }

    // Generate enums - one file per enum in schema/enums/
    for (const enumType of kindMap.Enum) {
      modules.push(generateEnumModule(config, enumType))
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

    // Generate schema/$$.ts (main module with re-exports)
    modules.push(generateSchemaBarrelModule(config, kindMap))

    // Generate schema/$.ts (namespace export + Schema interface)
    modules.push(generateSchemaNamespaceModule(config, kindMap))

    return modules
  },
}

// Individual module generators

const generateScalarModule = (config: Config, scalar: GraphqlKit.Schema.ScalarType): GeneratedModule => {
  const code = Str.Builder()
  const renderedName = renderName(scalar)
  const originalName = scalar.name
  const isCustom = config.schema.kindMap.list.ScalarCustom.includes(scalar)

  // Export names are never escaped - use re-export with aliasing if needed
  if (isCustom) {
    code(
      Str.Code.TS.reexportNamed({
        names: originalName,
        from: buildImportPath(config, '..', '..', 'scalar'),
        type: true,
      }),
    )
  } else {
    const utilitiesPath = getUtilitiesPath(config, `schema/scalars/${renderedName}.ts`)
    code(Str.Code.TS.reexportNamed({ names: originalName, from: utilitiesPath, type: true }))
  }

  return {
    name: `schema/scalars/${scalar.name}`,
    filePath: `schema/scalars/${renderedName}.ts`,
    content: code.toString(),
  }
}

const generateEnumModule = (config: Config, enumType: GraphqlKit.Schema.EnumType): GeneratedModule => {
  const code = Str.Builder()

  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/enums/${enumType.name}.ts`)
    code(`import type * as $ from '${utilitiesPath}'`)
    code()
  }

  code(
    Str.Code.TS.interfaceDecl({
      tsDoc: getEnumTypeDoc(config, enumType),
      export: true,
      name: enumType.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Enum` : null,
      block: {
        kind: Str.Code.TS.string(GraphqlKit.Schema.TypeKind.Enum),
        name: Str.Code.TS.string(enumType.name),
        members: Str.Code.TS.tuple(enumType.getValues().map((_) => Str.Code.TS.string(_.name))),
        membersUnion: Str.Code.TS.unionItems(enumType.getValues().map((_) => Str.Code.TS.string(_.name))),
      },
    }),
  )

  return {
    name: `schema/enums/${enumType.name}`,
    filePath: `schema/enums/${enumType.name}.ts`,
    content: code.toString(),
  }
}

const generateUnionModule = (config: Config, unionType: GraphqlKit.Schema.UnionType): GeneratedModule => {
  const code = Str.Builder()

  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/unions/${unionType.name}.ts`)
    code(`import type * as $ from '${utilitiesPath}'`)
  }

  const members = unionType.getTypes()
  const memberNames = members.map((_) => _.name)

  // Import member types from their respective directories
  for (const member of members) {
    // Determine which directory the member is in
    const isRoot = config.schema.kindMap.list.Root.some(r => r.name === member.name)
    const dir = isRoot ? 'roots' : 'objects'
    code(codeImportNamed(config, { names: member.name, from: `../${dir}/${member.name}/$`, type: true }))
  }
  code()

  code(Str.Code.TS.interfaceDecl({
    tsDoc: getUnionTypeDoc(config, unionType),
    export: true,
    name: unionType.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Union` : null,
    block: {
      kind: Str.Code.TS.string(GraphqlKit.Schema.TypeKind.Union),
      name: Str.Code.TS.string(unionType.name),
      members: Str.Code.TS.tuple(memberNames),
      membersUnion: Str.Code.TS.unionItems(memberNames),
      membersIndex: Object.fromEntries(memberNames.map(n => [n, n])),
    },
  }))

  return {
    name: `schema/unions/${unionType.name}`,
    filePath: `schema/unions/${unionType.name}.ts`,
    content: code.toString(),
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
  field: GraphqlKit.Schema.InputField,
  parentType: GraphqlKit.Schema.InputObjectType,
): string | null => {
  const namedType = GraphqlKit.Schema.getNamedType(field.type)
  const typeAndKind = GraphqlKit.getTypeAndKind(namedType)

  // Get the base description from the schema
  const schemaDescription = getTsDocContents(config, field)

  // Type information
  const isNonNull = GraphqlKit.Schema.isNonNullType(field.type)
  const isList = GraphqlKit.Schema.isListType(
    GraphqlKit.Schema.isNonNullType(field.type) ? field.type.ofType : field.type,
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
  const table = Str.Code.Md.table({
    'Type': typeSignature,
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`).content,
    'Parent': Str.Code.TSDoc.template.tag.link(`$Schema.${parentType.name}`).content,
    'Path': Str.Code.Md.code(fieldPath),
    '⚠ Deprecated': deprecationReason,
    'Default': hasDefaultValue ? Str.Code.Md.code(JSON.stringify(defaultValue)) : undefined,
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

const generateInputObjectModule = (
  config: Config,
  inputObject: GraphqlKit.Schema.InputObjectType,
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/fields.ts`)
    fieldsCode(`import type * as $ from '${utilitiesPath}'`)
  }
  fieldsCode(codeImportNamed(config, { names: { Schema: '$Schema' }, from: '../../$', type: true }))
  fieldsCode()

  // Generate field interfaces
  for (const field of Obj.values(inputObject.getFields())) {
    const namedType = GraphqlKit.Schema.getNamedType(field.type)

    fieldsCode(Str.Code.TS.interfaceDecl({
      tsDoc: getInputFieldDoc(config, field, inputObject),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputField` : null,
      block: {
        kind: Str.Code.TS.string(`InputField`),
        name: Str.Code.TS.string(field.name),
        inlineType: renderInlineType(field.type),
        namedType: namedTypesTypeReference(namedType),
      },
    }))
    fieldsCode()
  }

  modules.push({
    name: `schema/input-objects/${inputObject.name}/fields`,
    filePath: `schema/input-objects/${inputObject.name}/fields.ts`,
    content: fieldsCode.toString(),
  })

  // Generate $.ts (namespace export + interface)
  const namespaceCode = Str.Builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/$.ts`)
    namespaceCode(`import type * as $ from '${utilitiesPath}'`)
  }
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))
  namespaceCode()
  namespaceCode(codeReexportNamespace(config, { as: inputObject.name, from: './fields' }))
  namespaceCode()

  const interfaceFields = Object.fromEntries(
    Obj.values(inputObject.getFields()).map((field) => {
      const name = field.name
      // Always use original name - export alias handles reserved keywords
      const fieldTypeReference = `$Fields.${name}`
      return [name, fieldTypeReference]
    }),
  )

  namespaceCode(Str.Code.TS.interfaceDecl({
    tsDoc: getInputObjectTypeDoc(config, inputObject),
    export: true,
    name: inputObject.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputObject` : null,
    block: {
      kind: Str.Code.TS.string(GraphqlKit.Schema.TypeKind.InputObject),
      name: Str.Code.TS.string(inputObject.name),
      isAllFieldsNullable: Str.Code.TS.boolean(GraphqlKit.Schema.isAllInputObjectFieldsNullable(inputObject)),
      fields: interfaceFields,
    },
  }))

  modules.push({
    name: `schema/input-objects/${inputObject.name}/$`,
    filePath: `schema/input-objects/${inputObject.name}/$.ts`,
    content: namespaceCode.toString(),
  })

  return modules
}

const generateSchemaNamespaceModule = (config: Config, kindMap: GraphqlKit.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()
  const utilitiesPath = getUtilitiesPath(config, `schema/$.ts`)

  code(`import type * as $ from '${utilitiesPath}'`)
  code(`import * as $$Data from '${buildImportPath(config, '..', 'data')}'`)
  code(`import * as $$Scalar from '${buildImportPath(config, '..', 'scalar')}'`)
  code(`import * as $Types from '${buildImportPath(config, '.', '$$')}'`)
  code()
  code(codeReexportNamespace(config, { as: 'Schema', from: './$$' }))
  code()

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

  const schema: Str.Code.TS.TermObject.TermObject = {
    name: `$$Data.Name`,
    operationsAvailable: Str.Code.TS.tuple(operationsAvailable.map(_ => Str.Code.TS.string(_))),
    RootUnion: Str.Code.TS.unionItems(kindMap.Root.map(_ => `$Types.${_.name}`)),
    Root: {
      [GraphqlKit.Document.OperationTypeNode.QUERY]: config.schema.kindMap.index.Root.query?.name
        ? `$Types.${config.schema.kindMap.index.Root.query.name}`
        : null,
      [GraphqlKit.Document.OperationTypeNode.MUTATION]: config.schema.kindMap.index.Root.mutation?.name
        ? `$Types.${config.schema.kindMap.index.Root.mutation.name}`
        : null,
      [GraphqlKit.Document.OperationTypeNode.SUBSCRIPTION]: config.schema.kindMap.index.Root.subscription?.name
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
    scalarNamesUnion: Str.Code.TS.unionItems(scalars.map(_ => _[0]).map(Str.Code.TS.string)),
    scalars,
    scalarRegistry: `$Scalars`,
    extensions: `$.GlobalRegistry.TypeExtensions`,
  }

  const extensions: Str.Code.TS.TermObject.TermObject = {}
  config.extensions.forEach(_ => {
    _.onSchema?.({ config, schema: extensions })
  })
  if (!Obj.isEmpty(extensions)) {
    schema[`extensions`] = extensions
  }

  code(Str.Code.TS.interfaceDecl({
    export: true,
    name: `Schema`,
    parameters: `<$Scalars extends $.Schema.Scalar.Registry = $$Scalar.$Registry>`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema` : null,
    block: schema,
  }))

  return {
    name: `schema/$`,
    filePath: `schema/$.ts`,
    content: code.toString(),
  }
}

const generateSchemaBarrelModule = (config: Config, kindMap: GraphqlKit.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  // Re-export roots
  for (const type of kindMap.Root) {
    code(codeReexportAll(config, { from: `./roots/${type.name}/$`, type: true }))
  }

  // Re-export objects
  for (const type of kindMap.OutputObject) {
    code(codeReexportAll(config, { from: `./objects/${type.name}/$`, type: true }))
  }

  // Re-export interfaces
  for (const type of kindMap.Interface) {
    code(codeReexportAll(config, { from: `./interfaces/${type.name}/$`, type: true }))
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
    code(codeReexportAll(config, { from: `./enums/${type.name}`, type: true }))
  }

  // Re-export unions
  for (const type of kindMap.Union) {
    code(codeReexportAll(config, { from: `./unions/${type.name}`, type: true }))
  }

  // Re-export input objects
  for (const type of kindMap.InputObject) {
    code(codeReexportAll(config, { from: `./input-objects/${type.name}/$`, type: true }))
  }
  code()

  return {
    name: `schema/$$`,
    filePath: `schema/$$.ts`,
    content: code.toString(),
  }
}

/**
 * Generate enhanced JSDoc for an output field including type, kind, and parent metadata.
 */
const getOutputFieldDoc = (
  config: Config,
  field: GraphqlKit.Schema.Field<any, any>,
  parentType: GraphqlKit.Schema.ObjectType | GraphqlKit.Schema.InterfaceType,
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
  const table = Str.Code.Md.table({
    'Type': typeSignature,
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, `${typeAndKind.kindName} ↗`).content,
    'Parent': Str.Code.TSDoc.template.tag.link(`$Schema.${parentType.name}`).content,
    'Path': Str.Code.Md.code(fieldPath),
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
  type: GraphqlKit.Schema.ObjectType,
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
  const table = Str.Code.Md.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Object ↗').content,
    'Fields': `${fieldCount}`,
    'Implements': interfaces.length > 0
      ? interfaces.map(i => Str.Code.TSDoc.template.tag.link(`$Schema.${i.name}`).content).join(', ')
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
  type: GraphqlKit.Schema.InterfaceType,
  kindMap: GraphqlKit.Schema.KindMap,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('Interface')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length

  // Get implementors
  const implementors = GraphqlKit.Schema.KindMap.getInterfaceImplementors(kindMap, type)

  // Build table
  const table = Str.Code.Md.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Interface ↗').content,
    'Fields': `${fieldCount}`,
    'Implementors': implementors.length > 0
      ? implementors.map(i => Str.Code.TSDoc.template.tag.link(`$Schema.${i.name}`).content).join(', ')
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
  type: GraphqlKit.Schema.UnionType,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('Union')
  const members = type.getTypes()

  // Build table
  const table = Str.Code.Md.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Union ↗').content,
    'Members': `${members.length}`,
    'Types': members.map(m => Str.Code.TSDoc.template.tag.link(`$Schema.${m.name}`).content).join(', '),
  })

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
  parts.push(table)

  return parts.join('\n')
}

/**
 * Generate enhanced JSDoc for an InputObject type.
 */
const getInputObjectTypeDoc = (
  config: Config,
  type: GraphqlKit.Schema.InputObjectType,
): string | null => {
  const schemaDescription = getTsDocContents(config, type)
  const kindDocUrl = getKindDocUrl('InputObject')
  const fields = Object.values(type.getFields())
  const fieldCount = fields.length
  const isAllFieldsNullable = GraphqlKit.Schema.isAllInputObjectFieldsNullable(type)

  // Build table
  const table = Str.Code.Md.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'InputObject ↗').content,
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
  type: GraphqlKit.Schema.EnumType,
): string | null => {
  // Get enum description respecting config and escape it for safety
  const schemaDescription = type.description
    ? Str.Code.TSDoc.escape(type.description)
    : (config.options.TSDoc.noDocPolicy === 'message'
      ? `Missing description for Enum "${type.name}".`
      : null)

  const kindDocUrl = getKindDocUrl('Enum')
  const members = type.getValues()
  const memberCount = members.length

  // Build table
  const table = Str.Code.Md.table({
    'Kind': Str.Code.TSDoc.template.tag.link(kindDocUrl, 'Enum ↗').content,
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
        ? Str.Code.TSDoc.escape(member.description)
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
  type: GraphqlKit.Schema.ObjectType | GraphqlKit.Schema.InterfaceType,
  kind: 'roots' | 'objects' | 'interfaces',
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/fields.ts`)
    fieldsCode(`import type * as $ from '${utilitiesPath}'`)
  }
  fieldsCode(codeImportNamed(config, { names: { Schema: '$Schema' }, from: '../../$', type: true }))
  fieldsCode()

  // __typename field
  fieldsCode(Str.Code.TS.interfaceDecl({
    tsDoc: getTypeNameFieldDoc(type.name),
    export: true,
    name: `__typename`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
    block: {
      kind: Str.Code.TS.string(`OutputField`),
      name: Str.Code.TS.string(`__typename`),
      arguments: {},
      inlineType: `[1]`,
      namedType: {
        kind: Str.Code.TS.string(`__typename`),
        value: Str.Code.TS.string(type.name),
      },
    },
  }))
  fieldsCode()

  // Regular fields
  for (const field of Obj.values(type.getFields())) {
    const namedType = GraphqlKit.Schema.getNamedType(field.type)

    fieldsCode(Str.Code.TS.interfaceDecl({
      tsDoc: getOutputFieldDoc(config, field, type),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
      block: {
        kind: Str.Code.TS.string(`OutputField`),
        name: Str.Code.TS.string(field.name),
        arguments: Object.fromEntries(field.args.map(arg => {
          return [
            arg.name,
            Str.Code.TS.objectField$({
              tsDoc: getTsDocContents(config, arg),
              value: {
                kind: Str.Code.TS.string(`InputField`),
                name: Str.Code.TS.string(arg.name),
                inlineType: renderInlineType(arg.type),
                namedType: namedTypesTypeReference(GraphqlKit.Schema.getNamedType(arg.type)),
              },
            }),
          ]
        })),
        inlineType: renderInlineType(field.type),
        namedType: namedTypesTypeReference(namedType),
      },
    }))
    fieldsCode()
  }

  modules.push({
    name: `schema/${kind}/${type.name}/fields`,
    filePath: `schema/${kind}/${type.name}/fields.ts`,
    content: fieldsCode.toString(),
  })

  // Generate $.ts (namespace export + interface)
  const namespaceCode = Str.Builder()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/$.ts`)
    namespaceCode(`import type * as $ from '${utilitiesPath}'`)
  }
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))

  // For interfaces, import implementor types from the barrel
  const isInterface = type instanceof GraphqlKit.Schema.InterfaceType
  if (isInterface) {
    const implementors = GraphqlKit.Schema.KindMap.getInterfaceImplementors(
      config.schema.kindMap,
      type as GraphqlKit.Schema.InterfaceType,
    )
    if (implementors.length > 0) {
      // Import from barrel which is 2 levels up from schema/{kind}/{TypeName}/
      namespaceCode(codeImportNamed(config, { names: implementors.map(_ => _.name), from: '../../$$', type: true }))
    }
  }

  namespaceCode()
  namespaceCode(codeReexportNamespace(config, { as: type.name, from: './fields' }))
  namespaceCode()

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

  namespaceCode(Str.Code.TS.interfaceDecl({
    tsDoc: isInterface
      ? getInterfaceTypeDoc(config, type as GraphqlKit.Schema.InterfaceType, config.schema.kindMap)
      : getObjectTypeDoc(config, type as GraphqlKit.Schema.ObjectType, kind === 'roots'),
    export: true,
    name: type.name,
    extends: config.code.schemaInterfaceExtendsEnabled
      ? (isInterface ? `$.Schema.Interface` : `$.Schema.OutputObject`)
      : null,
    block: {
      kind: Str.Code.TS.string(isInterface ? GraphqlKit.Schema.TypeKind.Interface : GraphqlKit.Schema.TypeKind.Object),
      name: Str.Code.TS.string(type.name),
      fields: interfaceFields,
      ...(isInterface
        ? {
          implementors: Str.Code.TS.tuple(
            GraphqlKit.Schema.KindMap.getInterfaceImplementors(
              config.schema.kindMap,
              type as GraphqlKit.Schema.InterfaceType,
            )
              .map(_ => _.name),
          ),
          implementorsUnion:
            GraphqlKit.Schema.KindMap.getInterfaceImplementors(
                config.schema.kindMap,
                type as GraphqlKit.Schema.InterfaceType,
              )
                .length > 0
              ? Str.Code.TS.unionItems(
                GraphqlKit.Schema.KindMap.getInterfaceImplementors(
                  config.schema.kindMap,
                  type as GraphqlKit.Schema.InterfaceType,
                ).map(_ => _.name),
              )
              : `never`,
          implementorsIndex: Object.fromEntries(
            GraphqlKit.Schema.KindMap.getInterfaceImplementors(
              config.schema.kindMap,
              type as GraphqlKit.Schema.InterfaceType,
            )
              .map(n => [n.name, n.name]),
          ),
        }
        : {}),
    },
  }))

  modules.push({
    name: `schema/${kind}/${type.name}/$`,
    filePath: `schema/${kind}/${type.name}/$.ts`,
    content: namespaceCode.toString(),
  })

  return modules
}

const namedTypesTypeReference = (name: string | GraphqlKit.Schema.NamedTypes) => {
  const name_ = typeof name === `string` ? name : name.name
  return `$Schema.${name_}`
}
