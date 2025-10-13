// New modular selection sets generator
// TODO: This will replace SelectionSets.ts once complete

import { Grafaid } from '#lib/grafaid'
import { Code } from '#src/lib/Code.js'
import { analyzeArgsNullability } from '#src/lib/grafaid/schema/args.js'
import { Obj, Str } from '@wollybeard/kit'
import { DocumentBuilderKit } from '../../extensions/DocumentBuilder/$.js'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import {
  getArgumentDoc,
  getInlineFragmentDoc,
  getOutputFieldSelectionSetDoc,
  getRootTypeDoc,
} from '../helpers/jsdoc.js'
import type { GeneratedModule } from '../helpers/moduleGenerator.js'
import {
  buildImportPath,
  codeImportAll,
  codeImportNamed,
  codeReexportAll,
  codeReexportNamespace,
  getUtilitiesPath,
  importUtilities,
} from '../helpers/pathHelpers.js'
import { getTsDocContents, renderName } from '../helpers/render.js'

const i = {
  ...$,
  _$Context: `_$Context`,
}
const $ContextTypeParameter =
  `${i._$Context} extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext`

export const ModuleGeneratorSelectionSets = {
  name: `selection-sets/$`,
  generate: (config: Config): GeneratedModule[] => {
    const modules: GeneratedModule[] = []
    const kindMap = config.schema.kindMap.list

    // Generate enums - one file per enum
    for (const enumType of kindMap.Enum) {
      modules.push(generateEnumModule(config, enumType))
    }

    // Generate unions - one file per union
    for (const unionType of kindMap.Union) {
      modules.push(generateUnionModule(config, unionType))
    }

    // Generate input objects - directory per input object
    for (const inputObject of kindMap.InputObject) {
      modules.push(...generateInputObjectModule(config, inputObject))
    }

    // Generate interfaces - directory per interface
    for (const iface of kindMap.Interface) {
      modules.push(...generateInterfaceModule(config, iface))
    }

    // Generate roots - directory per root
    for (const root of kindMap.Root) {
      modules.push(...generateRootModule(config, root))
    }

    // Generate objects - directory per object
    for (const object of kindMap.OutputObject) {
      modules.push(...generateObjectModule(config, object))
    }

    // Generate meta files
    modules.push(generateContextModule(config))
    modules.push(generateDocumentModule(config))
    modules.push(generateNamedTypesModule(config, kindMap))

    // Generate scalars module
    modules.push(...generateScalarsModule(config, kindMap))

    // Generate barrel files
    modules.push(generateBarrelModule(config, kindMap))
    modules.push(generateFieldsBarrelModule(config, kindMap))
    modules.push(generateNamespaceModule(config, kindMap))

    return modules
  },
}

// ===== Meta Files =====

const generateContextModule = (config: Config): GeneratedModule => {
  const code = Str.Builder()
  code(importUtilities(config))
  code(codeImportAll(config, { as: $.$$Scalar, from: '../scalar', type: true }))
  code()
  code(`export interface $DefaultSelectionContext extends ${$.$$Utilities}.DocumentBuilderKit.Select.Context {`)
  code(`  scalars: ${$.$$Scalar}.$Registry`)
  code(`}`)

  return {
    name: `selection-sets/_context`,
    filePath: `selection-sets/_context.ts`,
    content: code.toString(),
  }
}

const generateDocumentModule = (config: Config): GeneratedModule => {
  const code = Str.Builder()
  code(importUtilities(config))
  const queryType = config.schema.kindMap.index.Root.query
  const mutationType = config.schema.kindMap.index.Root.mutation

  if (queryType) {
    code(codeImportNamed(config, { names: queryType.name, from: `./roots/${queryType.name}/$`, type: true }))
  }
  if (mutationType) {
    code(codeImportNamed(config, { names: mutationType.name, from: `./roots/${mutationType.name}/$`, type: true }))
  }
  code(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: './_context', type: true }))
  code()

  code(Code.tsInterface({
    export: true,
    name: `$Document`,
    parameters: $ContextTypeParameter,
    block: `
      ${queryType ? `query?: Record<string, ${renderName(queryType)}<${i._$Context}>>` : ``}
      ${mutationType ? `mutation?: Record<string, ${renderName(mutationType)}<${i._$Context}>>` : ``}
    `,
  }))

  return {
    name: `selection-sets/_document`,
    filePath: `selection-sets/_document.ts`,
    content: code.toString(),
  }
}

const generateNamedTypesModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  const allTypes = [
    ...kindMap.Root,
    ...kindMap.OutputObject,
    ...kindMap.Union,
    ...kindMap.Interface,
    ...kindMap.InputObject,
    ...kindMap.Enum,
  ]

  // Re-export all named types (no $ prefix since the namespace itself is $Named)
  for (const type of allTypes) {
    const from = Grafaid.Schema.isEnumType(type)
      ? `./enums/${type.name}`
      : Grafaid.Schema.isUnionType(type)
      ? `./unions/${type.name}`
      : Grafaid.Schema.isInputObjectType(type)
      ? `./input-objects/${type.name}/$`
      : Grafaid.Schema.isInterfaceType(type)
      ? `./interfaces/${type.name}/$`
      : kindMap.Root.some(r => r.name === type.name)
      ? `./roots/${type.name}/$`
      : `./objects/${type.name}/$`

    code(`export type { ${type.name} } from '${buildImportPath(config, from)}'`)
  }

  code()
  code(`// Scalar types`)
  code(`export * from '${buildImportPath(config, './scalars/$$')}'`)

  return {
    name: `selection-sets/$named`,
    filePath: `selection-sets/$named.ts`,
    content: code.toString(),
  }
}

// ===== Scalars Generator =====

const generateScalarsModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Collect all scalar types (standard + custom)
  const standardScalars = ['String', 'Int', 'Float', 'Boolean', 'ID']
  const customScalars = kindMap.ScalarCustom

  // Generate scalars/scalars.ts
  const scalarsCode = Str.Builder()
  scalarsCode(importUtilities(config))
  scalarsCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../_context', type: true }))
  scalarsCode()

  // Generate JSDoc for $Scalar base utility
  scalarsCode(Code.TSDoc(`
    Raw scalar type with context-aware custom scalar resolution.

    This is the base decoded scalar type without any wrappers.
    Use \`Nullable\` or \`NonNull\` wrappers, or the pre-generated scalar variants.
  `))
  scalarsCode(`export type $Scalar<`)
  scalarsCode(`  $ScalarName extends string,`)
  scalarsCode(
    `  $Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext`,
  )
  scalarsCode(`> = ${$.$$Utilities}.Schema.Scalar.GetDecoded<`)
  scalarsCode(`  ${$.$$Utilities}.Schema.Scalar.LookupCustomScalarOrFallbackToString<`)
  scalarsCode(`    $ScalarName,`)
  scalarsCode(`    $Context extends { scalars: infer $S } ? $S : ${$.$$Utilities}.Schema.Scalar.Registry.Empty`)
  scalarsCode(`  >`)
  scalarsCode(`>`)
  scalarsCode()

  // Generate wrapper utilities
  scalarsCode(Code.TSDoc(`
    Wraps a type for nullable input fields.

    Adds variable marker and allows null/undefined values.
  `))
  scalarsCode(`export type Nullable<$Type> = ${$.$$Utilities}.DocumentBuilderKit.Var.Maybe<$Type | null | undefined>`)
  scalarsCode()

  scalarsCode(Code.TSDoc(`
    Wraps a type for non-null input fields.

    Adds variable marker but does not allow null (undefined still allowed for optionality).
  `))
  scalarsCode(`export type NonNull<$Type> = ${$.$$Utilities}.DocumentBuilderKit.Var.Maybe<$Type>`)
  scalarsCode()

  // Generate standard scalar types (nullable + non-null variants)
  for (const scalarName of standardScalars) {
    scalarsCode(
      `export type ${scalarName}<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalarName}', $Context>>`,
    )
    scalarsCode(
      `export type ${scalarName}$NonNull<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalarName}', $Context>>`,
    )
  }

  // Generate custom scalar types (nullable + non-null variants)
  for (const scalar of customScalars) {
    // Skip scalars that conflict with TypeScript built-in types
    if (scalar.name === 'bigint' || scalar.name === 'symbol' || scalar.name === 'undefined' || scalar.name === 'null') {
      scalarsCode(
        `export type $${scalar.name}<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalar.name}', $Context>>`,
      )
      scalarsCode(
        `export type $${scalar.name}$NonNull<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalar.name}', $Context>>`,
      )
    } else {
      scalarsCode(
        `export type ${scalar.name}<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalar.name}', $Context>>`,
      )
      scalarsCode(
        `export type ${scalar.name}$NonNull<$Context extends ${$.$$Utilities}.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalar.name}', $Context>>`,
      )
    }
  }

  modules.push({
    name: `selection-sets/scalars/scalars`,
    filePath: `selection-sets/scalars/scalars.ts`,
    content: scalarsCode.toString(),
  })

  // Generate scalars/$$.ts - comprehensive barrel for all scalar types (for $Named)
  const comprehensiveBarrelCode = Str.Builder()
  comprehensiveBarrelCode(`// Standard scalar types`)
  comprehensiveBarrelCode(
    `export type { String, Int, Float, Boolean, ID } from '${buildImportPath(config, './scalars')}'`,
  )
  if (customScalars.length > 0) {
    comprehensiveBarrelCode()
    comprehensiveBarrelCode(`// Custom scalar types`)
    for (const scalar of customScalars) {
      // Handle scalars that conflict with TypeScript built-in types (exported with $ prefix)
      const exportName = ['bigint', 'symbol', 'undefined', 'null'].includes(scalar.name)
        ? `$${scalar.name}`
        : scalar.name
      comprehensiveBarrelCode(`export type { ${exportName} } from '${buildImportPath(config, './scalars')}'`)
    }
  }

  modules.push({
    name: `selection-sets/scalars/$$`,
    filePath: `selection-sets/scalars/$$.ts`,
    content: comprehensiveBarrelCode.toString(),
  })

  // Generate scalars/$.ts - barrel for $Scalars utilities
  const barrelCode = Str.Builder()
  barrelCode(codeReexportAll(config, { from: './scalars', type: true }))

  modules.push({
    name: `selection-sets/scalars/$`,
    filePath: `selection-sets/scalars/$.ts`,
    content: barrelCode.toString(),
  })

  return modules
}

// ===== Enum Generator =====

const generateEnumModule = (config: Config, enumType: Grafaid.Schema.EnumType): GeneratedModule => {
  const code = Str.Builder()

  code(Code.tsAlias$({
    tsDoc: getTsDocContents(config, enumType),
    export: true,
    name: enumType.name,
    type: Code.tsUnionItems(enumType.getValues().map((value) => Code.string(value.name))),
  }))

  return {
    name: `selection-sets/enums/${enumType.name}`,
    filePath: `selection-sets/enums/${enumType.name}.ts`,
    content: code.toString(),
  }
}

// ===== Union Generator =====

const generateUnionModule = (config: Config, unionType: Grafaid.Schema.UnionType): GeneratedModule => {
  const code = Str.Builder()
  code(importUtilities(config))
  code(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../_context', type: true }))
  code(codeImportAll(config, { as: `$Named`, from: '../$named', type: true }))
  code()

  const fragmentsInlineType = unionType.getTypes().map((memberType) => {
    const doc = Code.TSDoc(getInlineFragmentDoc(memberType, unionType, 'union'))
    const field = `${DocumentBuilderKit.Select.InlineFragment.typeConditionPRefix}${memberType.name}?: ${
      H.namedTypesReference(memberType)
    }`
    return `${doc}\n${field}`
  }).join(`\n`)

  code(Code.tsInterface({
    tsDoc: getTsDocContents(config, unionType),
    export: true,
    name: unionType.name,
    parameters: $ContextTypeParameter,
    block: `
      ${H.__typenameField(`union`)}
      ${fragmentsInlineType}
      ${H.fragmentInlineField(unionType)}
    `,
  }))
  code()
  code(H.fragmentInlineInterface(unionType))

  return {
    name: `selection-sets/unions/${unionType.name}`,
    filePath: `selection-sets/unions/${unionType.name}.ts`,
    content: code.toString(),
  }
}

// ===== Input Object Generator =====

const generateInputObjectModule = (config: Config, inputObject: Grafaid.Schema.InputObjectType): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  fieldsCode(importUtilities(config))
  fieldsCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  fieldsCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  fieldsCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  fieldsCode()

  for (const field of Obj.values(inputObject.getFields())) {
    const safeName = getSafeName(field.name)
    const typeDecl = `${safeName}<${$ContextTypeParameter}> = ${renderArgumentType(field.type)}`

    if (isReservedKeyword(field.name)) {
      fieldsCode(`type ${typeDecl}`)
      fieldsCode(`export { type ${safeName} as ${field.name} }`)
    } else {
      fieldsCode(`export type ${typeDecl}`)
    }
    fieldsCode()
  }

  modules.push({
    name: `selection-sets/input-objects/${inputObject.name}/fields`,
    filePath: `selection-sets/input-objects/${inputObject.name}/fields.ts`,
    content: fieldsCode.toString(),
  })

  // Generate $.ts
  const namespaceCode = Str.Builder()
  namespaceCode(importUtilities(config))
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))
  namespaceCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  namespaceCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  namespaceCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  namespaceCode()
  // Re-export fields as a type-only namespace to avoid conflicts with the interface
  namespaceCode(codeReexportNamespace(config, { as: inputObject.name, from: './fields', type: true }))
  namespaceCode()

  namespaceCode(Code.tsInterface({
    tsDoc: getTsDocContents(config, inputObject),
    export: true,
    name: inputObject.name,
    parameters: $ContextTypeParameter,
    block: Obj.values(inputObject.getFields()).map(field => getInputFieldLike(config, field)),
  }))

  modules.push({
    name: `selection-sets/input-objects/${inputObject.name}/$`,
    filePath: `selection-sets/input-objects/${inputObject.name}/$.ts`,
    content: namespaceCode.toString(),
  })

  return modules
}

// ===== Interface Generator =====

const generateInterfaceModule = (config: Config, iface: Grafaid.Schema.InterfaceType): GeneratedModule[] => {
  return generateFieldedTypeModule(config, iface, 'interfaces')
}

// ===== Root Generator =====

const generateRootModule = (config: Config, root: Grafaid.Schema.ObjectType): GeneratedModule[] => {
  return generateFieldedTypeModule(config, root, 'roots')
}

// ===== Object Generator =====

const generateObjectModule = (config: Config, object: Grafaid.Schema.ObjectType): GeneratedModule[] => {
  return generateFieldedTypeModule(config, object, 'objects')
}

// ===== Shared Fielded Type Generator =====

const generateFieldedTypeModule = (
  config: Config,
  type: Grafaid.Schema.ObjectType | Grafaid.Schema.InterfaceType,
  kind: 'roots' | 'objects' | 'interfaces',
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []
  const fields = Object.values(type.getFields())
  const isRoot = kind === 'roots'
  const isInterface = Grafaid.Schema.isInterfaceType(type)

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  fieldsCode(importUtilities(config))
  fieldsCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  fieldsCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  fieldsCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  fieldsCode()

  for (const field of fields) {
    fieldsCode(renderOutputFieldForFields(config, field, type))
    fieldsCode()
  }

  modules.push({
    name: `selection-sets/${kind}/${type.name}/fields`,
    filePath: `selection-sets/${kind}/${type.name}/fields.ts`,
    content: fieldsCode.toString(),
  })

  // Generate $.ts
  const namespaceCode = Str.Builder()
  namespaceCode(importUtilities(config))
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))
  namespaceCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  if (isInterface) {
    // Interfaces reference $Named for inline fragment implementors
    namespaceCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  }
  namespaceCode()
  // Note: We don't re-export the namespace here to avoid TypeScript visibility conflicts
  // with the interface of the same name. Field types are accessible via imports from fields.ts
  namespaceCode()

  const fieldKeys = fields.map(field => {
    const namedType = Grafaid.Schema.getNamedType(field.type)
    const doc = Code.TSDoc(getOutputFieldSelectionSetDoc(field, type.name, namedType))
    const key = H.outputFieldKey(
      field.name,
      `$Fields.${field.name}`, // Reference fields via $Fields alias to avoid visibility issues
      true,
      analyzeArgsNullability(field.args).isAllNullable,
    )
    return `${doc}\n${key}`
  }).join(`\n`)

  // For interfaces, add inline fragments
  let onTypesRendered = ''
  if (isInterface) {
    const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(
      config.schema.kindMap,
      type as Grafaid.Schema.InterfaceType,
    )
    onTypesRendered = implementorTypes.map(implementorType => {
      // Note: getInlineFragmentDoc expects ObjectType, but implementors can be interfaces too
      // The function only uses the type name, so we cast here
      const doc = Code.TSDoc(getInlineFragmentDoc(implementorType as Grafaid.Schema.ObjectType, type, 'interface'))
      const field = `${DocumentBuilderKit.Select.InlineFragment.typeConditionPRefix}${implementorType.name}?: ${
        H.namedTypesReference(implementorType)
      }`
      return `${doc}\n${field}`
    }).join(`\n`)
  }

  const extendsClause = isRoot
    ? `${$.$$Utilities}.DocumentBuilderKit.Select.Bases.RootObjectLike`
    : `${$.$$Utilities}.DocumentBuilderKit.Select.Bases.ObjectLike`

  let operationType: 'query' | 'mutation' | 'subscription' | null = null
  if (isRoot) {
    if (config.schema.kindMap.index.Root.query?.name === type.name) operationType = 'query'
    else if (config.schema.kindMap.index.Root.mutation?.name === type.name) operationType = 'mutation'
    else if (config.schema.kindMap.index.Root.subscription?.name === type.name) operationType = 'subscription'
  }

  namespaceCode(Code.tsInterface({
    tsDoc: isRoot && operationType
      ? getRootTypeDoc(config, type as Grafaid.Schema.ObjectType, operationType)
      : getTsDocContents(config, type),
    export: true,
    name: type.name,
    parameters: $ContextTypeParameter,
    extends: [extendsClause],
    block: `
      ${fieldKeys}
      ${onTypesRendered}
      ${H.fragmentInlineField(type)}
      ${H.__typenameField(isInterface ? 'interface' : 'object')}
    `,
  }))
  namespaceCode()
  namespaceCode(H.fragmentInlineInterface(type))

  modules.push({
    name: `selection-sets/${kind}/${type.name}/$`,
    filePath: `selection-sets/${kind}/${type.name}/$.ts`,
    content: namespaceCode.toString(),
  })

  return modules
}

const renderOutputFieldForFields = (
  config: Config,
  field: Grafaid.Schema.Field<any, any>,
  parentType: Grafaid.Schema.ObjectType | Grafaid.Schema.InterfaceType,
): string => {
  const code = Str.Builder()
  const argsAnalysis = analyzeArgsNullability(field.args)
  const fieldNamedType = Grafaid.Schema.getNamedType(field.type)

  const fieldName = renderName(field)
  const safeName = getSafeName(field.name)
  const selectionSetName = safeName + `$SelectionSet`
  const argumentsName = safeName + `$Arguments`
  const expandedName = safeName + `$Expanded`

  const selectionSetRef = H.reference(selectionSetName)
  const isCanBeIndicator = (Grafaid.Schema.isScalarType(fieldNamedType) || Grafaid.Schema.isEnumType(fieldNamedType))
    && argsAnalysis.isAllNullable
  const indicator = isCanBeIndicator
    ? `${$.$$Utilities}.DocumentBuilderKit.Select.Indicator.NoArgsIndicator`
    : ``

  // Main field type
  const mainTypeDecl = `${safeName}<${$ContextTypeParameter}> = ${Code.tsUnionItems([indicator, selectionSetRef])}`
  if (isReservedKeyword(field.name)) {
    code(`type ${mainTypeDecl}`)
  } else {
    code(`export type ${mainTypeDecl}`)
  }
  code()

  const isHasObjectLikeTypeReference = Grafaid.Schema.isObjectType(fieldNamedType)
    || Grafaid.Schema.isInterfaceType(fieldNamedType) || Grafaid.Schema.isUnionType(fieldNamedType)

  const objectLikeTypeReference = isHasObjectLikeTypeReference
    ? H.namedTypesReference(fieldNamedType)
    : null

  const extendsClause = [`${$.$$Utilities}.DocumentBuilderKit.Select.Bases.Base`, objectLikeTypeReference].filter(
    Boolean,
  )

  const argumentsProperty = argsAnalysis.hasAny
    ? renderFieldPropertyArguments(config, field, H.reference(argumentsName))
    : ''

  code(`export interface ${selectionSetName}<${$ContextTypeParameter}> extends ${extendsClause.join(', ')} {`)
  if (argumentsProperty) {
    code(`  ${argumentsProperty}`)
  }
  code(`}`)
  code()

  if (argsAnalysis.hasAny) {
    code(`export interface ${argumentsName}<${$ContextTypeParameter}> {`)
    for (const arg of field.args) {
      const doc = Code.TSDoc(getArgumentDoc(config, arg, field, parentType as Grafaid.Schema.ObjectType))
      const key = getInputFieldKey(arg)
      const optional = Grafaid.Schema.isNullableType(arg.type) ? '?' : ''
      const value = renderArgumentType(arg.type)
      code(`  ${doc}`)
      code(`  ${key}${optional}: ${value}`)
    }
    code(`}`)
    code()
  }

  // Expanded type
  const expandedTypeDecl = `${expandedName}<${$ContextTypeParameter}> = ${i.$$Utilities}.Simplify<${
    Code.tsUnionItems([indicator, selectionSetRef])
  }>`
  if (isReservedKeyword(field.name)) {
    code(`type ${expandedTypeDecl}`)
  } else {
    code(`export type ${expandedTypeDecl}`)
  }
  code()

  // If this is a reserved keyword, export all the types with their original names
  if (isReservedKeyword(field.name)) {
    code(`export { type ${safeName} as ${field.name} }`)
    code(`export { type ${expandedName} as ${field.name}$Expanded }`)
    code()
  }

  return code.toString()
}

const renderFieldPropertyArguments = (
  config: Config,
  field: Grafaid.Schema.Field<any, any>,
  argFieldsRendered: string,
): string => {
  const argsAnalysis = analyzeArgsNullability(field.args)

  if (argsAnalysis.hasAny) {
    const lead = argsAnalysis.isAllNullable
      ? `No arguments`
      : argsAnalysis.required === argsAnalysis.total
      ? `All arguments`
      : `Some (${argsAnalysis.required.toString()}/${argsAnalysis.total.toString()}) arguments`
    const tsDocMessageAboutRequired = argsAnalysis.isAllNullable
      ? `${lead} are required so you may omit this.`
      : `${lead} are required so you must include this.`
    const tsDoc = `Arguments for \`${field.name}\` field. ${tsDocMessageAboutRequired}`
    return Code.field(DocumentBuilderKit.Select.Arguments.key, argFieldsRendered, {
      optional: argsAnalysis.isAllNullable,
      tsDoc,
    })
  }
  return ''
}

// ===== Barrel Files =====

const generateBarrelModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  // Re-export meta files
  code(codeReexportAll(config, { from: './_context', type: true }))
  code(codeReexportAll(config, { from: './_document', type: true }))
  code(codeReexportNamespace(config, { as: '$Named', from: './$named', type: true }))
  code()

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

  // Re-export interfaces (interfaces only, not field namespaces)
  for (const type of kindMap.Interface) {
    code(codeReexportAll(config, { from: `./interfaces/${type.name}/$`, type: true }))
  }

  // Re-export roots (interfaces only, not field namespaces)
  for (const type of kindMap.Root) {
    code(codeReexportAll(config, { from: `./roots/${type.name}/$`, type: true }))
  }

  // Re-export objects (interfaces only, not field namespaces)
  for (const type of kindMap.OutputObject) {
    code(codeReexportAll(config, { from: `./objects/${type.name}/$`, type: true }))
  }

  return {
    name: `selection-sets/$$`,
    filePath: `selection-sets/$$.ts`,
    content: code.toString(),
  }
}

const generateFieldsBarrelModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  // Export ONLY the field namespaces (for MethodsRoot to access Query.id1, etc.)
  for (const type of kindMap.Root) {
    code(codeReexportNamespace(config, { as: type.name, from: `./roots/${type.name}/fields`, type: true }))
  }

  for (const type of kindMap.OutputObject) {
    code(codeReexportNamespace(config, { as: type.name, from: `./objects/${type.name}/fields`, type: true }))
  }

  for (const type of kindMap.Interface) {
    code(codeReexportNamespace(config, { as: type.name, from: `./interfaces/${type.name}/fields`, type: true }))
  }

  return {
    name: `selection-sets/$$.fields`,
    filePath: `selection-sets/$$.fields.ts`,
    content: code.toString(),
  }
}

const generateNamespaceModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  code(codeReexportNamespace(config, { as: 'SelectionSets', from: './$$' }))
  // Export named types namespace (central registry for all schema types)
  code(codeReexportNamespace(config, { as: '$Named', from: './$named' }))
  // Export a separate namespace for field types (used by MethodsRoot to access field.name types)
  code(codeReexportNamespace(config, { as: '$Fields', from: './$$.fields' }))
  // Export scalar utilities for input types
  code(codeReexportNamespace(config, { as: '$Scalars', from: './scalars/$' }))
  code(codeReexportAll(config, { from: './_context', type: true }))
  code(codeReexportAll(config, { from: './_document', type: true }))

  // Re-export root types directly (interfaces only, namespaces are in SelectionSets)
  for (const root of kindMap.Root) {
    code(codeReexportAll(config, { from: `./roots/${root.name}/$`, type: true }))
  }

  // Re-export all object types (interfaces only, namespaces are in SelectionSets)
  for (const object of kindMap.OutputObject) {
    code(codeReexportAll(config, { from: `./objects/${object.name}/$`, type: true }))
  }

  // Re-export all interface types (interfaces only, namespaces are in SelectionSets)
  for (const iface of kindMap.Interface) {
    code(codeReexportAll(config, { from: `./interfaces/${iface.name}/$`, type: true }))
  }

  // Re-export all union types
  for (const union of kindMap.Union) {
    code(codeReexportAll(config, { from: `./unions/${union.name}`, type: true }))
  }

  // Re-export all enum types
  for (const enumType of kindMap.Enum) {
    code(codeReexportAll(config, { from: `./enums/${enumType.name}`, type: true }))
  }

  // Re-export all input object types
  for (const inputObject of kindMap.InputObject) {
    code(codeReexportAll(config, { from: `./input-objects/${inputObject.name}/$`, type: true }))
  }

  // Add root type inference utilities
  if (config.schema.kindMap.index.Root.query || config.schema.kindMap.index.Root.mutation) {
    code(importUtilities(config))
    code(codeImportAll(config, { as: $.$$Schema, from: '../schema/$', type: true }))
    code()
  }

  if (config.schema.kindMap.index.Root.query) {
    code(
      `export type Query$Infer<$SelectionSet extends object> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.OperationQuery<$SelectionSet, ${$.$$Schema}.${$.Schema}>`,
    )
    code(
      `export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system`,
    )
  }

  if (config.schema.kindMap.index.Root.mutation) {
    code(
      `export type Mutation$Infer<$SelectionSet extends object> = ${$.$$Utilities}.DocumentBuilderKit.InferResult.OperationMutation<$SelectionSet, ${$.$$Schema}.${$.Schema}>`,
    )
    code(
      `export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system`,
    )
  }

  return {
    name: `selection-sets/$`,
    filePath: `selection-sets/$.ts`,
    content: code.toString(),
  }
}

// ===== Helper Functions =====

/**
 * Check if a name is a reserved keyword and needs escaping
 */
const isReservedKeyword = (name: string): boolean => {
  return Code.reservedTypeScriptInterfaceNames.includes(name as any)
}

/**
 * Get the safe name for a type/interface declaration (with $ prefix if reserved)
 */
const getSafeName = (name: string): string => {
  return isReservedKeyword(name) ? `$${name}` : name
}

const getInputFieldLike = (config: Config, inputFieldLike: Grafaid.Schema.Argument | Grafaid.Schema.InputField) => {
  return [
    getInputFieldKey(inputFieldLike),
    Code.objectField$({
      tsDoc: getTsDocContents(config, inputFieldLike),
      optional: Grafaid.Schema.isNullableType(inputFieldLike.type),
      value: renderArgumentType(inputFieldLike.type),
    }),
  ] as const
}

const getInputFieldKey = (inputFieldLike: Grafaid.Schema.Argument | Grafaid.Schema.InputField) => {
  return Grafaid.Schema.isEnumType(Grafaid.Schema.getNamedType(inputFieldLike.type))
    ? DocumentBuilderKit.Select.Arguments.enumKeyPrefix + inputFieldLike.name
    : inputFieldLike.name
}

const renderArgumentType = (type: Grafaid.Schema.InputTypes): string => {
  const sansNullabilityType = Grafaid.Schema.getNullableType(type)
  const isNullable = Grafaid.Schema.isNullableType(type)

  if (Grafaid.Schema.isListType(sansNullabilityType)) {
    const innerType = Grafaid.Schema.getNullableType(sansNullabilityType.ofType)
    const innerTypeRendered = renderArgumentType(innerType)
    const arrayType = `Array<${innerTypeRendered}>`
    const fullType = isNullable ? `${arrayType} | null | undefined` : arrayType
    return `${i.$$Utilities}.DocumentBuilderKit.Var.Maybe<${fullType}>`
  }

  if (Grafaid.Schema.isScalarType(sansNullabilityType)) {
    // Use $Scalars namespace for cleaner generated code
    // Add $ prefix for scalars that conflict with TypeScript built-in types
    const scalarName = ['bigint', 'symbol', 'undefined', 'null'].includes(sansNullabilityType.name)
      ? `$${sansNullabilityType.name}`
      : sansNullabilityType.name

    // Use NonNull variant if the GraphQL type is non-nullable
    const variant = isNullable ? '' : '$NonNull'
    return `$Scalars.${scalarName}${variant}<${i._$Context}>`
  }

  // For non-scalar types (enums, input objects), use $Named
  const baseType = H.namedTypesReference(sansNullabilityType)
  const fullType = isNullable ? `${baseType} | null | undefined` : baseType
  return `${i.$$Utilities}.DocumentBuilderKit.Var.Maybe<${fullType}>`
}

// ===== Helper Namespace =====

namespace H {
  export type Name = string | Grafaid.Schema.NamedTypes | Grafaid.Schema.Field<any, any>

  export const forwardTypeParameter$Context = (type: Name) => {
    return `${renderName(type)}<${i._$Context}>`
  }

  export const namedTypesReference = (type: Grafaid.Schema.NamedTypes) => {
    return `$Named.${reference(type)}`
  }

  export const reference = (name: Name) => {
    if (Grafaid.Schema.isEnumType(name)) {
      return renderName(name)
    }
    return `${renderName(name)}<${i._$Context}>`
  }

  export const outputFieldReference = (name: string, type: string) => {
    return `${name}?: ${H.reference(type)}`
  }

  export const outputFieldKey = (
    name: string,
    type: string,
    aliasable: boolean = true,
    isHasExpanded: boolean = true,
  ) => {
    const isReference = type !== `${$.$$Utilities}.DocumentBuilderKit.Select.Indicator.NoArgsIndicator`
    const typeBareExpanded = `${type}${isHasExpanded ? `$Expanded` : ``}`
    const typeReferenced = isReference ? reference(typeBareExpanded) : typeBareExpanded
    const aliasType = aliasable
      ? `| ${$.$$Utilities}.DocumentBuilderKit.Select.SelectAlias.SelectAlias<${isReference ? reference(type) : type}>`
      : ``
    return `${name}?: ${typeReferenced}${aliasType}`
  }

  export const __typenameField = (kind: 'union' | 'interface' | 'object') => {
    const doc = __typenameDoc(kind)
    return `${doc}\n${
      outputFieldKey(`__typename`, `${$.$$Utilities}.DocumentBuilderKit.Select.Indicator.NoArgsIndicator`, true, false)
    }`
  }

  export const fragmentInlineField = (
    type: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    const doc = Code.TSDoc(`
      Inline fragments for field groups.

      Generally a niche feature. This can be useful for example to apply an \`@include\` directive to a subset of the
      selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.

      @see https://spec.graphql.org/draft/#sec-Inline-Fragments
    `)

    return `${doc}\n___?: ${H.reference(`${renderName(type)}$FragmentInline`)} | ${
      H.reference(`${renderName(type)}$FragmentInline`)
    }[]`
  }

  export const fragmentInlineInterface = (
    node: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    return Code.tsInterface({
      export: true,
      name: `${renderName(node)}$FragmentInline`,
      parameters: $ContextTypeParameter,
      extends: [
        forwardTypeParameter$Context(node),
        `${$.$$Utilities}.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields`,
      ],
      block: {},
    })
  }

  const __typenameDoc = (kind: 'union' | 'interface' | 'object') => {
    const see = `@see https://graphql.org/learn/queries/#meta-fields`
    if (kind === `object`) {
      return Code.TSDoc(`
        A meta field. Is the name of the type being selected.

        ${see}
      `)
    }

    const relation = kind === `interface` ? `implementor` : `member`
    return Code.TSDoc(`
       A meta field. Is the name of the type being selected. Since this is a ${kind} type and thus polymorphic,
       the name is one of the ${relation} type names, whichever is ultimately returned at runtime.

       ${see}
    `)
  }
}
