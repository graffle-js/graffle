// New modular selection sets generator
// TODO: This will replace SelectionSets.ts once complete

import { Grafaid } from '#lib/grafaid'
import { Obj, Str } from '@wollybeard/kit'
import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import { analyzeArgsNullability } from '#src/lib/grafaid/schema/args.js'
import { Docpar } from '../../docpar/$.js'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import {
  getArgumentDoc,
  getEnumTypeSelectionSetDoc,
  getExpandedTypeDoc,
  getFragmentInlineFieldDoc,
  getInlineFragmentDoc,
  getInputObjectTypeSelectionSetDoc,
  getInterfaceTypeSelectionSetDoc,
  getObjectTypeSelectionSetDoc,
  getOperationInferDoc,
  getOperationVariablesDoc,
  getOutputFieldSelectionSetDoc,
  getRootTypeDoc,
  getScalarBaseDoc,
  getScalarNonNullDoc,
  getScalarNullableDoc,
  getTypenameFieldDoc,
  getUnionTypeSelectionSetDoc,
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
  `${i._$Context} extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext`

export const ModuleGeneratorSelectionSets = {
  name: `selection-sets/$`,
  generate: (config: Config): GeneratedModule[] => {
    const modules: GeneratedModule[] = []
    const kindMap = config.schema.kindMap.list

    // Generate enums - one file per enum
    for (const enumType of kindMap.Enum) {
      modules.push(generateEnumModule(config, enumType))
    }

    // Generate unions - directory per union
    for (const unionType of kindMap.Union) {
      modules.push(...generateUnionModule(config, unionType))
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
  code(`export interface $DefaultSelectionContext extends ${$.$$Utilities}.Docpar.Object.Select.Context {`)
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

  code(CodeGraphQL.tsInterface({
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
      ? `./unions/${type.name}/$`
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
  scalarsCode(CodeGraphQL.TSDoc(getScalarBaseDoc()))
  scalarsCode(`export type $Scalar<`)
  scalarsCode(`  $ScalarName extends string,`)
  scalarsCode(
    `  $Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext`,
  )
  scalarsCode(`> = ${$.$$Utilities}.Schema.Scalar.GetDecoded<`)
  scalarsCode(`  ${$.$$Utilities}.Schema.Scalar.LookupCustomScalarOrFallbackToUnknown<`)
  scalarsCode(`    $ScalarName,`)
  scalarsCode(`    $Context extends { scalars: infer $S } ? $S : ${$.$$Utilities}.Schema.Scalar.Registry.Empty`)
  scalarsCode(`  >`)
  scalarsCode(`>`)
  scalarsCode()

  // Generate wrapper utilities
  scalarsCode(CodeGraphQL.TSDoc(getScalarNullableDoc()))
  scalarsCode(
    `export type Nullable<$Type> = ${$.$$Utilities}.Docpar.Object.Var.MaybeSchemaful<$Type | null | undefined>`,
  )
  scalarsCode()

  scalarsCode(CodeGraphQL.TSDoc(getScalarNonNullDoc()))
  scalarsCode(`export type NonNull<$Type> = ${$.$$Utilities}.Docpar.Object.Var.MaybeSchemaful<$Type>`)
  scalarsCode()

  // Generate standard scalar types (nullable + non-null variants)
  for (const scalarName of standardScalars) {
    scalarsCode(
      `export type ${scalarName}<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalarName}', $Context>>`,
    )
    scalarsCode(
      `export type ${scalarName}$NonNull<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalarName}', $Context>>`,
    )
  }

  // Generate custom scalar types (nullable + non-null variants)
  for (const scalar of customScalars) {
    // Skip scalars that conflict with TypeScript built-in types
    if (scalar.name === 'bigint' || scalar.name === 'symbol' || scalar.name === 'undefined' || scalar.name === 'null') {
      scalarsCode(
        `export type $${scalar.name}<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalar.name}', $Context>>`,
      )
      scalarsCode(
        `export type $${scalar.name}$NonNull<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalar.name}', $Context>>`,
      )
    } else {
      scalarsCode(
        `export type ${scalar.name}<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = Nullable<$Scalar<'${scalar.name}', $Context>>`,
      )
      scalarsCode(
        `export type ${scalar.name}$NonNull<$Context extends ${$.$$Utilities}.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> = NonNull<$Scalar<'${scalar.name}', $Context>>`,
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

  code(CodeGraphQL.tsAlias$({
    tsDoc: getEnumTypeSelectionSetDoc(enumType),
    export: true,
    name: enumType.name,
    type: CodeGraphQL.tsUnionItems(enumType.getValues().map((value) => CodeGraphQL.string(value.name))),
  }))

  return {
    name: `selection-sets/enums/${enumType.name}`,
    filePath: `selection-sets/enums/${enumType.name}.ts`,
    content: code.toString(),
  }
}

// ===== Union Generator =====

const generateUnionModule = (config: Config, unionType: Grafaid.Schema.UnionType): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fragment.ts with $FragmentInline interface
  const fragmentCode = Str.Builder()
  fragmentCode(importUtilities(config))
  fragmentCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  fragmentCode(codeImportNamed(config, { names: unionType.name, from: './$', type: true }))
  fragmentCode()
  fragmentCode(H.fragmentInlineInterface(unionType))

  modules.push({
    name: `selection-sets/unions/${unionType.name}/fragment`,
    filePath: `selection-sets/unions/${unionType.name}/fragment.ts`,
    content: fragmentCode.toString(),
  })

  // Generate $$.ts barrel that exports fragment
  const barrelCode = Str.Builder()
  barrelCode(codeReexportAll(config, { from: './fragment', type: false }))

  modules.push({
    name: `selection-sets/unions/${unionType.name}/$$`,
    filePath: `selection-sets/unions/${unionType.name}/$$.ts`,
    content: barrelCode.toString(),
  })

  // Generate $.ts with main union interface
  const mainCode = Str.Builder()
  mainCode(importUtilities(config))
  mainCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  mainCode(codeImportNamed(config, { names: '$FragmentInline', from: './fragment', type: true }))
  mainCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  mainCode()
  // Export fragments as namespace to enable potential member access patterns
  mainCode(codeReexportNamespace(config, { as: unionType.name, from: './$$', type: true }))
  mainCode()

  const fragmentsInlineType = unionType.getTypes().map((memberType) => {
    const doc = CodeGraphQL.TSDoc(getInlineFragmentDoc(memberType, unionType, 'union'))
    const field = `${Docpar.Object.Select.InlineFragment.typeConditionPRefix}${memberType.name}?: ${
      H.namedTypesReference(memberType)
    }`
    return `${doc}\n${field}`
  }).join(`\n`)

  mainCode(CodeGraphQL.tsInterface({
    tsDoc: getUnionTypeSelectionSetDoc(unionType),
    export: true,
    name: unionType.name,
    parameters: $ContextTypeParameter,
    block: `
      ${H.__typenameField(`union`)}
      ${fragmentsInlineType}
      ${H.fragmentInlineField(unionType)}
    `,
  }))

  modules.push({
    name: `selection-sets/unions/${unionType.name}/$`,
    filePath: `selection-sets/unions/${unionType.name}/$.ts`,
    content: mainCode.toString(),
  })

  return modules
}

// ===== Input Object Generator =====

const generateInputObjectModule = (config: Config, inputObject: Grafaid.Schema.InputObjectType): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Analyze what imports are needed
  const usage = analyzeInputObjectTypeUsage(inputObject)

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  fieldsCode(importUtilities(config))
  fieldsCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  if (usage.usesNamedTypes) {
    fieldsCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  }
  if (usage.usesScalars) {
    fieldsCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  }
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
  namespaceCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  if (usage.usesNamedTypes) {
    namespaceCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  }
  if (usage.usesScalars) {
    namespaceCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  }
  namespaceCode()
  // Re-export fields as a type-only namespace to avoid conflicts with the interface
  namespaceCode(codeReexportNamespace(config, { as: inputObject.name, from: './fields', type: true }))
  namespaceCode()

  namespaceCode(CodeGraphQL.tsInterface({
    tsDoc: getInputObjectTypeSelectionSetDoc(inputObject),
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

  // Analyze what imports are needed for fields.ts (based on field arguments)
  const usage = analyzeOutputTypeUsage(type)

  // Generate fields.ts
  const fieldsCode = Str.Builder()
  fieldsCode(importUtilities(config))
  fieldsCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  if (usage.usesNamedTypes) {
    fieldsCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  }
  if (usage.usesScalars) {
    fieldsCode(codeImportAll(config, { as: `$Scalars`, from: '../../scalars/$', type: true }))
  }
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

  // Generate fragment.ts with $FragmentInline interface
  const fragmentCode = Str.Builder()
  fragmentCode(importUtilities(config))
  fragmentCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  fragmentCode(codeImportNamed(config, { names: type.name, from: './$', type: true }))
  fragmentCode()
  fragmentCode(H.fragmentInlineInterface(type))

  modules.push({
    name: `selection-sets/${kind}/${type.name}/fragment`,
    filePath: `selection-sets/${kind}/${type.name}/fragment.ts`,
    content: fragmentCode.toString(),
  })

  // Generate $$.ts barrel that exports fields and fragment
  const barrelCode = Str.Builder()
  barrelCode(codeReexportAll(config, { from: './fields', type: false }))
  barrelCode(codeReexportAll(config, { from: './fragment', type: false }))

  modules.push({
    name: `selection-sets/${kind}/${type.name}/$$`,
    filePath: `selection-sets/${kind}/${type.name}/$$.ts`,
    content: barrelCode.toString(),
  })

  // Generate $.ts
  const namespaceCode = Str.Builder()
  namespaceCode(importUtilities(config))
  namespaceCode(codeImportAll(config, { as: '$Fields', from: './fields', type: true }))
  namespaceCode(codeImportNamed(config, { names: `$DefaultSelectionContext`, from: '../../_context', type: true }))
  namespaceCode(codeImportNamed(config, { names: '$FragmentInline', from: './fragment', type: true }))
  if (isInterface) {
    // Interfaces reference $Named for inline fragment implementors
    namespaceCode(codeImportAll(config, { as: `$Named`, from: '../../$named', type: true }))
  }
  namespaceCode()
  // Export the fields as a namespace to enable Query.pokemons.$Arguments syntax (merges with interface)
  namespaceCode(codeReexportNamespace(config, { as: type.name, from: './$$', type: true }))
  namespaceCode()

  const fieldKeys = fields.map(field => {
    const namedType = Grafaid.Schema.getNamedType(field.type)
    const argsAnalysis = analyzeArgsNullability(field.args)
    const isCanBeIndicator = (Grafaid.Schema.isScalarType(namedType) || Grafaid.Schema.isEnumType(namedType))
      && argsAnalysis.isAllNullable
    const doc = CodeGraphQL.TSDoc(getOutputFieldSelectionSetDoc(field, type.name, namedType))
    const key = H.outputFieldKey(
      field.name,
      `$Fields.${field.name}`, // Use $Fields import to avoid circular reference
      true,
      argsAnalysis.isAllNullable,
      isCanBeIndicator,
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
      const doc = CodeGraphQL.TSDoc(getInlineFragmentDoc(implementorType as Grafaid.Schema.ObjectType, type, 'interface'))
      const field = `${Docpar.Object.Select.InlineFragment.typeConditionPRefix}${implementorType.name}?: ${
        H.namedTypesReference(implementorType)
      }`
      return `${doc}\n${field}`
    }).join(`\n`)
  }

  const extendsClause = isRoot
    ? `${$.$$Utilities}.Docpar.Object.Select.Bases.RootObjectLike`
    : `${$.$$Utilities}.Docpar.Object.Select.Bases.ObjectLike`

  let operationType: 'query' | 'mutation' | 'subscription' | null = null
  if (isRoot) {
    if (config.schema.kindMap.index.Root.query?.name === type.name) operationType = 'query'
    else if (config.schema.kindMap.index.Root.mutation?.name === type.name) operationType = 'mutation'
    else if (config.schema.kindMap.index.Root.subscription?.name === type.name) operationType = 'subscription'
  }

  const tsDoc = isRoot && operationType
    ? getRootTypeDoc(config, type as Grafaid.Schema.ObjectType, operationType)
    : isInterface
    ? getInterfaceTypeSelectionSetDoc(type as Grafaid.Schema.InterfaceType, config.schema.kindMap)
    : getObjectTypeSelectionSetDoc(type as Grafaid.Schema.ObjectType, isRoot)

  namespaceCode(CodeGraphQL.tsInterface({
    tsDoc,
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

  const isCanBeIndicator = (Grafaid.Schema.isScalarType(fieldNamedType) || Grafaid.Schema.isEnumType(fieldNamedType))
    && argsAnalysis.isAllNullable
  const indicator = isCanBeIndicator
    ? `${$.$$Utilities}.Docpar.Object.Select.Indicator.NoArgsIndicator`
    : null
  const shortAlias = isCanBeIndicator
    ? `${$.$$Utilities}.Docpar.Object.Select.SelectAlias.SelectAliasShort`
    : null
  const stringAlias = isCanBeIndicator
    ? `${$.$$Utilities}.Docpar.Object.Select.SelectAlias.SelectAliasString`
    : null

  // Main field type - references the namespace's $SelectionSet
  const mainTypeDecl = `${safeName}<${$ContextTypeParameter}> = ${
    CodeGraphQL.tsUnionItems([indicator, shortAlias, stringAlias, `${safeName}.$SelectionSet<${i._$Context}>`])
  }`
  if (isReservedKeyword(field.name)) {
    code(`type ${mainTypeDecl}`)
  } else {
    code(`export type ${mainTypeDecl}`)
  }
  code()

  // Generate namespace with nested types
  const namespaceDecl = isReservedKeyword(field.name) ? `namespace ${safeName}` : `export namespace ${safeName}`
  code(`${namespaceDecl} {`)

  const isHasObjectLikeTypeReference = Grafaid.Schema.isObjectType(fieldNamedType)
    || Grafaid.Schema.isInterfaceType(fieldNamedType) || Grafaid.Schema.isUnionType(fieldNamedType)

  const objectLikeTypeReference = isHasObjectLikeTypeReference
    ? H.namedTypesReference(fieldNamedType)
    : null

  const extendsClause = [`${$.$$Utilities}.Docpar.Object.Select.Bases.Base`, objectLikeTypeReference].filter(
    Boolean,
  )

  const argumentsProperty = argsAnalysis.hasAny
    ? renderFieldPropertyArguments(config, field, `$Arguments<${i._$Context}>`)
    : ''

  code(`  export interface $SelectionSet<${$ContextTypeParameter}> extends ${extendsClause.join(', ')} {`)
  if (argumentsProperty) {
    code(`    ${argumentsProperty}`)
  }
  code(`  }`)
  code()

  if (argsAnalysis.hasAny) {
    code(`  export interface $Arguments<${$ContextTypeParameter}> {`)
    for (const arg of field.args) {
      const doc = CodeGraphQL.TSDoc(getArgumentDoc(config, arg, field, parentType as Grafaid.Schema.ObjectType))
      const key = getInputFieldKey(arg)
      const optional = Grafaid.Schema.isNullableType(arg.type) ? '?' : ''
      const value = renderArgumentType(arg.type)
      code(`    ${doc}`)
      code(`    readonly ${key}${optional}: ${value}`)
    }
    code(`  }`)
    code()
  }

  // Expanded type
  code(`  ${CodeGraphQL.TSDoc(getExpandedTypeDoc(field.name))}`)
  code(
    `  export type $Expanded<${$ContextTypeParameter}> = ${i.$$Utilities}.Simplify<${
      CodeGraphQL.tsUnionItems([indicator, shortAlias, stringAlias, `$SelectionSet<${i._$Context}>`])
    }>`,
  )

  code(`}`)
  code()

  // If this is a reserved keyword, export the namespace with its original name
  if (isReservedKeyword(field.name)) {
    code(`export type { ${safeName} as ${field.name} }`)
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
    return CodeGraphQL.field(Docpar.Object.Select.Arguments.key, argFieldsRendered, {
      optional: argsAnalysis.isAllNullable,
      readonly: true,
      tsDoc,
    })
  }
  return ''
}

// ===== Barrel Files =====

const generateBarrelModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  // Export namespaces
  code(codeReexportNamespace(config, { as: '$Named', from: './$named' }))
  code(codeReexportNamespace(config, { as: '$Scalars', from: './scalars/$' }))
  code()

  // Re-export meta files
  code(codeReexportAll(config, { from: './_context', type: true }))
  code(codeReexportAll(config, { from: './_document', type: true }))
  code()

  // Re-export selection set interfaces AND namespaces (they are merged at the type level)
  // E.g., exports both Query interface and Query namespace from roots/Query/$.ts
  for (const type of kindMap.Root) {
    code(codeReexportAll(config, { from: `./roots/${type.name}/$`, type: true }))
  }

  for (const type of kindMap.OutputObject) {
    code(codeReexportAll(config, { from: `./objects/${type.name}/$`, type: true }))
  }

  for (const type of kindMap.Interface) {
    code(codeReexportAll(config, { from: `./interfaces/${type.name}/$`, type: true }))
  }

  for (const type of kindMap.Union) {
    code(codeReexportAll(config, { from: `./unions/${type.name}/$`, type: true }))
  }

  for (const type of kindMap.Enum) {
    code(codeReexportAll(config, { from: `./enums/${type.name}`, type: true }))
  }

  for (const type of kindMap.InputObject) {
    code(codeReexportAll(config, { from: `./input-objects/${type.name}/$`, type: true }))
  }
  code()

  // Add root type inference utilities
  if (config.schema.kindMap.index.Root.query || config.schema.kindMap.index.Root.mutation) {
    code(importUtilities(config))
    code(codeImportAll(config, { as: $.$$Schema, from: '../schema/$', type: true }))
    code()
  }

  if (config.schema.kindMap.index.Root.query) {
    code(CodeGraphQL.TSDoc(getOperationInferDoc('Query')))
    code(
      `export type Query$Infer<$SelectionSet extends object> = ${$.$$Utilities}.Docpar.Object.InferResult.OperationQuery<$SelectionSet, ${$.$$Schema}.${$.Schema}>`,
    )
    code()
    code(CodeGraphQL.TSDoc(getOperationVariablesDoc('Query')))
    code(
      `export type Query$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system`,
    )
    code()
  }

  if (config.schema.kindMap.index.Root.mutation) {
    code(CodeGraphQL.TSDoc(getOperationInferDoc('Mutation')))
    code(
      `export type Mutation$Infer<$SelectionSet extends object> = ${$.$$Utilities}.Docpar.Object.InferResult.OperationMutation<$SelectionSet, ${$.$$Schema}.${$.Schema}>`,
    )
    code()
    code(CodeGraphQL.TSDoc(getOperationVariablesDoc('Mutation')))
    code(
      `export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system`,
    )
    code()
  }

  return {
    name: `selection-sets/$$`,
    filePath: `selection-sets/$$.ts`,
    content: code.toString(),
  }
}

const generateNamespaceModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = Str.Builder()

  // Main entry point re-exports everything directly from $$.ts
  // The SelectionSets namespace is created by importers using `import * as SelectionSets`
  code(codeReexportAll(config, { from: './$$', type: true }))

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
  return CodeGraphQL.reservedTypeScriptInterfaceNames.includes(name as any)
}

/**
 * Get the safe name for a type/interface declaration (with $ prefix if reserved)
 */
const getSafeName = (name: string): string => {
  return isReservedKeyword(name) ? `$${name}` : name
}

/**
 * Analyze a GraphQL type recursively to determine what imports are needed
 */
interface TypeUsageAnalysis {
  usesScalars: boolean
  usesNamedTypes: boolean // enums, input objects, other object types
}

const analyzeTypeUsage = (type: Grafaid.Schema.InputTypes): TypeUsageAnalysis => {
  const result: TypeUsageAnalysis = {
    usesScalars: false,
    usesNamedTypes: false,
  }

  const analyzeRecursive = (t: Grafaid.Schema.InputTypes): void => {
    const nakedType = Grafaid.Schema.getNullableType(t)

    if (Grafaid.Schema.isListType(nakedType)) {
      analyzeRecursive(nakedType.ofType)
      return
    }

    if (Grafaid.Schema.isScalarType(nakedType)) {
      result.usesScalars = true
      return
    }

    // Enums, InputObjects
    result.usesNamedTypes = true
  }

  analyzeRecursive(type)
  return result
}

/**
 * Analyze all fields in an input object to determine what imports are needed
 */
const analyzeInputObjectTypeUsage = (inputObject: Grafaid.Schema.InputObjectType): TypeUsageAnalysis => {
  const result: TypeUsageAnalysis = {
    usesScalars: false,
    usesNamedTypes: false,
  }

  for (const field of Obj.values(inputObject.getFields())) {
    const fieldAnalysis = analyzeTypeUsage(field.type)
    result.usesScalars = result.usesScalars || fieldAnalysis.usesScalars
    result.usesNamedTypes = result.usesNamedTypes || fieldAnalysis.usesNamedTypes
  }

  return result
}

/**
 * Analyze all fields and their arguments in an output type to determine what imports are needed
 */
const analyzeOutputTypeUsage = (type: Grafaid.Schema.ObjectType | Grafaid.Schema.InterfaceType): TypeUsageAnalysis => {
  const result: TypeUsageAnalysis = {
    usesScalars: false,
    usesNamedTypes: false,
  }

  for (const field of Object.values(type.getFields())) {
    // Check if field return type is an object-like type (object, interface, union)
    // These get referenced via $Named in the field namespace's extends clause
    const fieldNamedType = Grafaid.Schema.getNamedType(field.type)
    const isHasObjectLikeTypeReference = Grafaid.Schema.isObjectType(fieldNamedType)
      || Grafaid.Schema.isInterfaceType(fieldNamedType)
      || Grafaid.Schema.isUnionType(fieldNamedType)

    if (isHasObjectLikeTypeReference) {
      result.usesNamedTypes = true
    }

    // Analyze field arguments
    for (const arg of field.args) {
      const argAnalysis = analyzeTypeUsage(arg.type)
      result.usesScalars = result.usesScalars || argAnalysis.usesScalars
      result.usesNamedTypes = result.usesNamedTypes || argAnalysis.usesNamedTypes
    }
  }

  return result
}

const getInputFieldLike = (config: Config, inputFieldLike: Grafaid.Schema.Argument | Grafaid.Schema.InputField) => {
  return [
    getInputFieldKey(inputFieldLike),
    CodeGraphQL.objectField$({
      tsDoc: getTsDocContents(config, inputFieldLike),
      optional: Grafaid.Schema.isNullableType(inputFieldLike.type),
      value: renderArgumentType(inputFieldLike.type),
    }),
  ] as const
}

const getInputFieldKey = (inputFieldLike: Grafaid.Schema.Argument | Grafaid.Schema.InputField) => {
  return Grafaid.Schema.isEnumType(Grafaid.Schema.getNamedType(inputFieldLike.type))
    ? Docpar.Object.Select.Arguments.enumKeyPrefix + inputFieldLike.name
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
    return `${i.$$Utilities}.Docpar.Object.Var.MaybeSchemaful<${fullType}>`
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
  return `${i.$$Utilities}.Docpar.Object.Var.MaybeSchemaful<${fullType}>`
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
    isCanBeIndicator: boolean = false,
  ) => {
    const isReference = type !== `${$.$$Utilities}.Docpar.Object.Select.Indicator.NoArgsIndicator`
    // For namespace-qualified types like Query.pokemons, append .$Expanded and <_$Context> directly
    const typeReferenced = isReference
      ? (isHasExpanded ? `${type}.$Expanded<${i._$Context}>` : reference(type))
      : type

    const aliasTypes: string[] = []
    if (aliasable) {
      aliasTypes.push(
        `${$.$$Utilities}.Docpar.Object.Select.SelectAlias.SelectAlias<${isReference ? reference(type) : type}>`,
      )
      if (isCanBeIndicator) {
        aliasTypes.push(`${$.$$Utilities}.Docpar.Object.Select.SelectAlias.SelectAliasShort`)
        aliasTypes.push(`${$.$$Utilities}.Docpar.Object.Select.SelectAlias.SelectAliasString`)
      }
    }
    const aliasType = aliasTypes.length > 0 ? aliasTypes.map(t => `| ${t}`).join(' ') : ``

    return `${name}?: ${typeReferenced}${aliasType}`
  }

  export const __typenameField = (kind: 'union' | 'interface' | 'object') => {
    const doc = __typenameDoc(kind)
    return `${doc}\n${
      outputFieldKey(`__typename`, `${$.$$Utilities}.Docpar.Object.Select.Indicator.NoArgsIndicator`, true, false, true)
    }`
  }

  export const fragmentInlineField = (
    type: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    const doc = CodeGraphQL.TSDoc(getFragmentInlineFieldDoc())

    return `${doc}\n___?: $FragmentInline<${i._$Context}> | $FragmentInline<${i._$Context}>[]`
  }

  export const fragmentInlineInterface = (
    node: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    return CodeGraphQL.tsInterface({
      export: true,
      name: `$FragmentInline`,
      parameters: $ContextTypeParameter,
      extends: [
        forwardTypeParameter$Context(node),
        `${$.$$Utilities}.Docpar.Object.Select.Directive.$Groups.InlineFragment.Fields`,
      ],
      block: {},
    })
  }

  const __typenameDoc = (kind: 'union' | 'interface' | 'object') => {
    return CodeGraphQL.TSDoc(getTypenameFieldDoc(kind))
  }
}