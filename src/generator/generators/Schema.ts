import { CodePusher } from '../../lib/code-pusher/index.js'
import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/_namespace.js'
import { entries, isObjectEmpty, values } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/_namespace.js'
import type { Config } from '../config/config.js'
import { $ } from '../helpers/identifiers.js'
import { type GeneratedModule, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { type CodeGenerator, createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getUtilitiesPath } from '../helpers/pathHelpers.js'
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

const generateScalarModule = (config: Config, scalar: Grafaid.Schema.ScalarType): GeneratedModule => {
  const code = CodePusher.create()
  const renderedName = renderName(scalar)
  const originalName = scalar.name
  const isCustom = config.schema.kindMap.list.ScalarCustom.includes(scalar)

  // Export names are never escaped - use re-export with aliasing if needed
  if (isCustom) {
    code(`export type { ${originalName} } from '../../scalar.js'`)
  } else {
    const utilitiesPath = getUtilitiesPath(config, `schema/scalars/${renderedName}.ts`)
    code(`export type { ${originalName} } from '${utilitiesPath}'`)
  }

  return {
    name: `schema/scalars/${scalar.name}`,
    filePath: `schema/scalars/${renderedName}.ts`,
    content: code.toString(),
  }
}

const generateEnumModule = (config: Config, enumType: Grafaid.Schema.EnumType): GeneratedModule => {
  const code = CodePusher.create()

  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/enums/${enumType.name}.ts`)
    code(`import type * as $ from '${utilitiesPath}'`)
    code()
  }

  code(
    Code.tsInterface({
      tsDoc: getTsDocContents(config, enumType),
      export: true,
      name: enumType.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Enum` : null,
      block: {
        kind: Code.string(Grafaid.Schema.TypeKind.Enum),
        name: Code.string(enumType.name),
        members: Code.tsTuple(enumType.getValues().map((_) => Code.string(_.name))),
        membersUnion: Code.tsUnionItems(enumType.getValues().map((_) => Code.string(_.name))),
      },
    }),
  )

  return {
    name: `schema/enums/${enumType.name}`,
    filePath: `schema/enums/${enumType.name}.ts`,
    content: code.toString(),
  }
}

const generateUnionModule = (config: Config, unionType: Grafaid.Schema.UnionType): GeneratedModule => {
  const code = CodePusher.create()

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
    code(`import type { ${member.name} } from '../${dir}/${member.name}/$.js'`)
  }
  code()

  code(Code.tsInterface({
    tsDoc: getTsDocContents(config, unionType),
    export: true,
    name: unionType.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.Union` : null,
    block: {
      kind: Code.string(Grafaid.Schema.TypeKind.Union),
      name: Code.string(unionType.name),
      members: Code.tsTuple(memberNames),
      membersUnion: Code.tsUnionItems(memberNames),
      membersIndex: Object.fromEntries(memberNames.map(n => [n, n])),
    },
  }))

  return {
    name: `schema/unions/${unionType.name}`,
    filePath: `schema/unions/${unionType.name}.ts`,
    content: code.toString(),
  }
}

const generateInputObjectModule = (config: Config, inputObject: Grafaid.Schema.InputObjectType): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = CodePusher.create()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/fields.ts`)
    fieldsCode(`import type * as $ from '${utilitiesPath}'`)
  }
  fieldsCode(`import type { Schema as $Schema } from '../../$.js'`)
  fieldsCode()

  // Generate field interfaces
  for (const field of values(inputObject.getFields())) {
    const namedType = Grafaid.Schema.getNamedType(field.type)

    fieldsCode(Code.tsInterface({
      tsDoc: getTsDocContents(config, field),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputField` : null,
      block: {
        kind: Code.string(`InputField`),
        name: Code.string(field.name),
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
  const namespaceCode = CodePusher.create()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/input-objects/${inputObject.name}/$.ts`)
    namespaceCode(`import type * as $ from '${utilitiesPath}'`)
  }
  namespaceCode(`import type * as $Fields from './fields.js'`)
  namespaceCode()
  namespaceCode(`export * as ${inputObject.name} from './fields.js'`)
  namespaceCode()

  const interfaceFields = Object.fromEntries(
    values(inputObject.getFields()).map((field) => {
      const name = field.name
      // Always use original name - export alias handles reserved keywords
      const fieldTypeReference = `$Fields.${name}`
      return [name, fieldTypeReference]
    }),
  )

  namespaceCode(Code.tsInterface({
    tsDoc: getTsDocContents(config, inputObject),
    export: true,
    name: inputObject.name,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.InputObject` : null,
    block: {
      kind: Code.string(Grafaid.Schema.TypeKind.InputObject),
      name: Code.string(inputObject.name),
      isAllFieldsNullable: Code.boolean(Grafaid.Schema.isAllInputObjectFieldsNullable(inputObject)),
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

const generateSchemaNamespaceModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = CodePusher.create()
  const utilitiesPath = getUtilitiesPath(config, `schema/$.ts`)

  code(`import type * as $ from '${utilitiesPath}'`)
  code(`import * as $$Data from '../data.js'`)
  code(`import * as $$Scalar from '../scalar.js'`)
  code(`import * as $Types from './$$.js'`)
  code()
  code(`export * as Schema from './$$.js'`)
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
  const operationsAvailable = entries(config.schema.kindMap.index.Root).filter(_ => _[1] !== null).map(_ => _[0])

  const schema: Code.TermObject = {
    name: `$$Data.Name`,
    operationsAvailable: Code.tsTuple(operationsAvailable.map(_ => Code.string(_))),
    RootUnion: Code.tsUnionItems(kindMap.Root.map(_ => `$Types.${_.name}`)),
    Root: {
      [Grafaid.Document.OperationTypeNode.QUERY]: config.schema.kindMap.index.Root.query?.name
        ? `$Types.${config.schema.kindMap.index.Root.query.name}`
        : null,
      [Grafaid.Document.OperationTypeNode.MUTATION]: config.schema.kindMap.index.Root.mutation?.name
        ? `$Types.${config.schema.kindMap.index.Root.mutation.name}`
        : null,
      [Grafaid.Document.OperationTypeNode.SUBSCRIPTION]: config.schema.kindMap.index.Root.subscription?.name
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
    scalarNamesUnion: Code.tsUnionItems(scalars.map(_ => _[0]).map(Code.string)),
    scalars,
    scalarRegistry: `$$Scalar.$Registry`,
    extensions: `$.GlobalRegistry.TypeExtensions`,
  }

  const extensions: Code.TermObject = {}
  config.extensions.forEach(_ => {
    _.onSchema?.({ config, schema: extensions })
  })
  if (!isObjectEmpty(extensions)) {
    schema[`extensions`] = extensions
  }

  code(Code.tsInterface({
    export: true,
    name: `Schema`,
    parameters: `$Scalars extends $.Schema.Scalar.Registry = $$Scalar.$Registry`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema` : null,
    block: schema,
  }))

  return {
    name: `schema/$`,
    filePath: `schema/$.ts`,
    content: code.toString(),
  }
}

const generateSchemaBarrelModule = (config: Config, kindMap: Grafaid.Schema.KindMap['list']): GeneratedModule => {
  const code = CodePusher.create()

  // Re-export roots
  for (const type of kindMap.Root) {
    code(`export type * from './roots/${type.name}/$.js'`)
  }

  // Re-export objects
  for (const type of kindMap.OutputObject) {
    code(`export type * from './objects/${type.name}/$.js'`)
  }

  // Re-export interfaces
  for (const type of kindMap.Interface) {
    code(`export type * from './interfaces/${type.name}/$.js'`)
  }

  // Re-export scalars
  const scalars = [
    ...kindMap.ScalarCustom,
    ...kindMap.ScalarStandard,
  ]
  for (const scalar of scalars) {
    const renderedName = renderName(scalar)
    code(`export type * from './scalars/${renderedName}.js'`)
  }

  // Re-export enums
  for (const type of kindMap.Enum) {
    code(`export type * from './enums/${type.name}.js'`)
  }

  // Re-export unions
  for (const type of kindMap.Union) {
    code(`export type * from './unions/${type.name}.js'`)
  }

  // Re-export input objects
  for (const type of kindMap.InputObject) {
    code(`export type * from './input-objects/${type.name}/$.js'`)
  }
  code()

  return {
    name: `schema/$$`,
    filePath: `schema/$$.ts`,
    content: code.toString(),
  }
}

const generateTypeModule = (
  config: Config,
  type: Grafaid.Schema.ObjectType | Grafaid.Schema.InterfaceType,
  kind: 'roots' | 'objects' | 'interfaces',
): GeneratedModule[] => {
  const modules: GeneratedModule[] = []

  // Generate fields.ts
  const fieldsCode = CodePusher.create()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/fields.ts`)
    fieldsCode(`import type * as $ from '${utilitiesPath}'`)
  }
  fieldsCode(`import type { Schema as $Schema } from '../../$.js'`)
  fieldsCode()

  // __typename field
  fieldsCode(Code.tsInterface({
    export: true,
    name: `__typename`,
    extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
    block: {
      kind: Code.string(`OutputField`),
      name: Code.string(`__typename`),
      arguments: {},
      inlineType: `[1]`,
      namedType: {
        kind: Code.string(`__typename`),
        value: Code.string(type.name),
      },
    },
  }))
  fieldsCode()

  // Regular fields
  for (const field of values(type.getFields())) {
    const namedType = Grafaid.Schema.getNamedType(field.type)

    fieldsCode(Code.tsInterface({
      tsDoc: getTsDocContents(config, field),
      export: true,
      name: field.name,
      extends: config.code.schemaInterfaceExtendsEnabled ? `$.Schema.OutputField` : null,
      block: {
        kind: Code.string(`OutputField`),
        name: Code.string(field.name),
        arguments: Object.fromEntries(field.args.map(arg => {
          return [
            arg.name,
            Code.objectField$({
              tsDoc: getTsDocContents(config, arg),
              value: {
                kind: Code.string(`InputField`),
                name: Code.string(arg.name),
                inlineType: renderInlineType(arg.type),
                namedType: namedTypesTypeReference(Grafaid.Schema.getNamedType(arg.type)),
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
  const namespaceCode = CodePusher.create()
  if (config.code.schemaInterfaceExtendsEnabled) {
    const utilitiesPath = getUtilitiesPath(config, `schema/${kind}/${type.name}/$.ts`)
    namespaceCode(`import type * as $ from '${utilitiesPath}'`)
  }
  namespaceCode(`import type * as $Fields from './fields.js'`)

  // For interfaces, import implementor types from the barrel
  const isInterface = type instanceof Grafaid.Schema.InterfaceType
  if (isInterface) {
    const implementors = Grafaid.Schema.KindMap.getInterfaceImplementors(
      config.schema.kindMap,
      type as Grafaid.Schema.InterfaceType,
    )
    if (implementors.length > 0) {
      // Import from barrel which is 2 levels up from schema/{kind}/{TypeName}/
      namespaceCode(`import type { ${implementors.map(_ => _.name).join(', ')} } from '../../$$.js'`)
    }
  }

  namespaceCode()
  namespaceCode(`export * as ${type.name} from './fields.js'`)
  namespaceCode()

  const interfaceFields = Object.fromEntries(
    [[`__typename`, `$Fields.__typename`]].concat(
      values(type.getFields()).map((field) => {
        const name = field.name
        // Always use original name - export alias handles reserved keywords
        const fieldTypeReference = `$Fields.${name}`
        return [name, fieldTypeReference]
      }),
    ),
  )

  namespaceCode(Code.tsInterface({
    tsDoc: getTsDocContents(config, type),
    export: true,
    name: type.name,
    extends: config.code.schemaInterfaceExtendsEnabled
      ? (isInterface ? `$.Schema.Interface` : `$.Schema.OutputObject`)
      : null,
    block: {
      kind: Code.string(isInterface ? Grafaid.Schema.TypeKind.Interface : Grafaid.Schema.TypeKind.Object),
      name: Code.string(type.name),
      fields: interfaceFields,
      ...(isInterface
        ? {
          implementors: Code.tsTuple(
            Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type as Grafaid.Schema.InterfaceType)
              .map(_ => _.name),
          ),
          implementorsUnion:
            Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type as Grafaid.Schema.InterfaceType)
                .length > 0
              ? Code.tsUnionItems(
                Grafaid.Schema.KindMap.getInterfaceImplementors(
                  config.schema.kindMap,
                  type as Grafaid.Schema.InterfaceType,
                ).map(_ => _.name),
              )
              : `never`,
          implementorsIndex: Object.fromEntries(
            Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type as Grafaid.Schema.InterfaceType)
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

const namedTypesTypeReference = (name: string | Grafaid.Schema.NamedTypes) => {
  const name_ = typeof name === `string` ? name : name.name
  return `$Schema.${name_}`
}
