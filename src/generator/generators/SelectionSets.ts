// todo: generate in JSDoc how the feature maps to GQL syntax.
// todo: on union fields, JSDoc that mentions the syntax `on*`

import { Select } from '../../layers/2_Select/__.js'
import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { analyzeArgsNullability } from '../../lib/grafaid/schema/args.js'
import { RootTypeName } from '../../lib/grafaid/schema/schema.js'
import { isString } from '../../lib/prelude.js'
import { borderThinFullWidth } from '../../lib/text.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getDocumentation, renderDocumentation, renderName, title1, typeTitle2SelectionSet } from '../helpers/render.js'
import { ModuleGeneratorScalar } from './Scalar.js'

const $ScalarsTypeParameter = `$Scalars extends ${identifiers.$$Utilities}.SchemaKit.Scalar.ScalarMap = {}`
// `$Scalars extends ${identifiers.$$Utilities}.SchemaKit.Scalar.ScalarMap`

export const ModuleGeneratorSelectionSets = createModuleGenerator(
  `SelectionSets`,
  ({ config, code }) => {
    code()

    code(`import type { Select as $Select } from '${config.paths.imports.grafflePackage.schema}'`)
    code(
      `import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`,
    )
    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.kindMap)) {
      code(`import type * as $Scalar from './${ModuleGeneratorScalar.name}.js'`)
    }
    code()

    code(title1(`Document`))
    code()
    code(
      `// Prefix with $ because this is not a schema type. A user could have a schema type named "Document" that this would conflict with.`,
    )
    code(
      `export interface $Document<${$ScalarsTypeParameter}> {`,
      Grafaid.Schema.KindMap.hasQuery(config.schema.kindMap) ? `query?: Record<string, Query<$Scalars>>` : null,
      Grafaid.Schema.KindMap.hasMutation(config.schema.kindMap)
        ? `mutation?: Record<string, Mutation<$Scalars>>`
        : null,
      `}`,
    )
    code()

    const typesToRender = [
      config.schema.kindMap.GraphQLRootType,
      config.schema.kindMap.GraphQLEnumType,
      config.schema.kindMap.GraphQLInputObjectType,
      config.schema.kindMap.GraphQLInterfaceType,
      config.schema.kindMap.GraphQLObjectType,
      config.schema.kindMap.GraphQLUnionType,
    ].filter(_ => _.length > 0)

    typesToRender.forEach((types) => {
      const kind = Grafaid.Schema.getTypeKind(types[0]!)

      code(title1(`${kind} Types`))
      code()

      types.forEach(type => {
        code(GraphQLKindRenderMap[kind]({ config, type: type as never }))
        code()
      })
    })

    code(`
      /**
       * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
       *     name clashing between the field name and the object name.
       * 
       *     For example imagine \`Query.Foo\` field with type also called \`Foo\`. Our generated interfaces for each field
       *     would end up with an error of \`export interface Foo extends Foo ...\`
       */
    `)
    code(renderNamedTypesIndex({ config, types: typesToRender.flat() }))
  },
)

const renderKindUnion = createCodeGenerator<{ type: Grafaid.Schema.UnionType }>(
  ({ config, type, code }) => {
    const doc = renderDocumentation(config, type)
    code(doc)

    const memberTypes = type.getTypes()
    const fragmentsInlineType = memberTypes.map((type) =>
      `${Select.InlineFragment.typeConditionPRefix}${type.name}?: ${renderName(type)}<$Scalars>`
    )
      .join(
        `\n`,
      )
    code(`
      export interface ${renderName(type)}<${$ScalarsTypeParameter}> {
        ${fragmentsInlineType}
        ${H.fragmentInlineField(type)}
        ${H.__typenameField(`union`)}
      }
    `)

    code(H.fragmentInlineInterface(type))
    code()
  },
)

const renderKindEnum = createCodeGenerator<{ type: Grafaid.Schema.EnumType }>(
  ({ config, type, code }) => {
    const doc = renderDocumentation(config, type)
    code(doc)

    const values = Object.values(type.getValues())
    code(H.tsTypeTerminal(type, values.map((value) => Code.string(value.name)).join(` | `)))
  },
)

const renderKindInputObject = createCodeGenerator<{ type: Grafaid.Schema.InputObjectType }>(
  ({ config, type, code }) => {
    const doc = renderDocumentation(config, type)
    code(doc)

    const fields = Object.values(type.getFields())
    code(`
      export interface ${renderName(type)}<${$ScalarsTypeParameter}> {
        ${fields.map((field) => renderArgumentLike({ config, arg: field })).join(`\n`)}
      }
    `)
  },
)

const renderKindInterface = createCodeGenerator<{ type: Grafaid.Schema.InterfaceType }>(
  ({ config, type, code }) => {
    const fields = Object.values(type.getFields())
    const fieldsRendered = fields.map(field => {
      return H.outputFieldReference(field.name, `${renderName(type)}.${renderName(field)}`)
    }).join(`\n`)
    const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type)
    const onTypesRendered = implementorTypes.map(type =>
      H.outputFieldReference(`${Select.InlineFragment.typeConditionPRefix}${type.name}`, renderName(type))
    ).join(
      ` \n `,
    )

    code()
    code(`// Interface Type: ${type.name}`)
    code(`// ${borderThinFullWidth}`)
    code()

    const doc = renderDocumentation(config, type)
    code(doc)

    code(`
      export interface ${H.referenceSig(type)} extends $Select.Bases.ObjectLike {
        ${fieldsRendered}
        ${onTypesRendered}
        ${H.fragmentInlineField(type)}
        ${H.__typenameField(`interface`)}
      }
    `)
    code()

    code(H.fragmentInlineInterface(type))
    code()

    code(`
      export namespace ${renderName(type)} {
        ${fields.map((field) => renderOutputField({ config, field })).join(`\n`)}
      }
    `)
    code()
  },
)

const renderKindObject = createCodeGenerator<{ type: Grafaid.Schema.ObjectType }>(
  ({ config, type, code }) => {
    const fields = Object.values(type.getFields())

    code(typeTitle2SelectionSet(type))
    code()

    code(`// ----------------------------------------| Entrypoint Interface |`)
    code()

    const fieldKeys = fields.map(field => {
      const fieldTypeInfo = Grafaid.getTypeNameAndKind(Grafaid.Schema.getNamedType(field.type))
      const fieldKindOrScalarType = fieldTypeInfo.kind === `Scalar`
        ? `\`${fieldTypeInfo.name}\` (a \`Scalar\`)`
        : fieldTypeInfo.kind
      const doc = Code.TSDoc(`
        Select the \`${field.name}\` field on the \`${type.name}\` object. Its type is ${fieldKindOrScalarType}.
      `)
      const key = H.outputFieldKey(
        field.name,
        `${renderName(type)}.${renderName(field)}`,
        true,
        analyzeArgsNullability(field.args).isAllNullable,
      )
      return doc
        + `\n`
        + key
    }).join(`\n`)

    const isRootType = type.name in RootTypeName
    const extendsClause = isRootType ? `` : `extends $Select.Bases.ObjectLike`

    const doc = renderDocumentation(config, type)
    code(doc)

    code(`
      export interface ${H.referenceSig(type)} ${extendsClause} {
        ${fieldKeys}
        ${H.fragmentInlineField(type)}
        ${H.__typenameField(`object`)}
      }
    `)
    code()

    code(H.fragmentInlineInterface(type))
    code()

    code(`// ----------------------------------------| Fields |`)
    code()

    code(`
      export namespace ${renderName(type)} {
        ${fields.map((field) => renderOutputField({ config, field })).join(`\n// ${borderThinFullWidth}\n\n`)}
      }
    `)
    code()
  },
)

const GraphQLKindRenderMap = {
  GraphQLInputObjectType: renderKindInputObject,
  GraphQLRootType: renderKindObject,
  GraphQLObjectType: renderKindObject,
  GraphQLEnumType: renderKindEnum,
  GraphQLInterfaceType: renderKindInterface,
  GraphQLUnionType: renderKindUnion,
}

const renderOutputField = createCodeGenerator<{ field: Grafaid.Schema.Field<any, any> }>(
  ({ config, field, code }) => {
    const argsAnalysis = analyzeArgsNullability(field.args)
    const fieldNamedType = Grafaid.Schema.getNamedType(field.type)

    const fieldName = renderName(field)
    const selectionSetName = fieldName + `$SelectionSet`
    const argumentsName = fieldName + `$Arguments`

    const selectionSetRef = H.reference(selectionSetName)
    const isCanBeIndicator = (Grafaid.Schema.isScalarType(fieldNamedType) || Grafaid.Schema.isEnumType(fieldNamedType))
      && argsAnalysis.isAllNullable
    const indicator = isCanBeIndicator ? `$Select.Indicator.NoArgsIndicator` : ``

    code(H.tsType(field, Code.unionItems([indicator, selectionSetRef])))
    code()

    const propertyArguments = renderFieldPropertyArguments({
      config,
      field,
      argFieldsRendered: H.reference(argumentsName),
    })

    const isHasObjectLikeTypeReference = Grafaid.Schema.isObjectType(fieldNamedType)
      || Grafaid.Schema.isInterfaceType(fieldNamedType) || Grafaid.Schema.isUnionType(fieldNamedType)

    const objectLikeTypeReference = isHasObjectLikeTypeReference
      ? H.namedTypesReference(fieldNamedType)
      : null

    code(H.tsInterface(selectionSetName, [`$Select.Bases.Base`, objectLikeTypeReference], propertyArguments))
    code()

    if (argsAnalysis.hasAny) {
      const fields = field.args.map(arg => renderArgumentLike({ config, arg })).join(`\n`)
      code(H.tsInterface(argumentsName, null, fields))
      code()
    }

    code(`// --- expanded ---`)
    code()

    code(H.tsTypeExpanded(field, Code.unionItems([indicator, selectionSetRef])))
    code()

    code()
  },
)

const renderFieldPropertyArguments = createCodeGenerator<
  { field: Grafaid.Schema.Field<any, any>; argFieldsRendered: string }
>(
  ({ field, code, argFieldsRendered }) => {
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
      code(Code.field(Select.Arguments.key, argFieldsRendered, {
        optional: argsAnalysis.isAllNullable,
        tsDoc,
      }))
    }
  },
)

const renderArgumentLike = createCodeGenerator<{ arg: Grafaid.Schema.Argument | Grafaid.Schema.InputField }>(
  ({ config, arg, code }) => {
    // todo do not import whole of graphql package here. Just import getNamedType.
    const enumKeyPrefix = Grafaid.Schema.isEnumType(Grafaid.Schema.getNamedType(arg.type))
      ? Select.Arguments.enumKeyPrefix
      : ``
    const typeRendered = renderArgumentType(arg.type)
    const tsDoc = getDocumentation(config, arg)
    code(tsDoc)
    code(`${enumKeyPrefix}${arg.name}${H.propOpt(arg.type)}: ${typeRendered}`)
  },
)

const renderArgumentType = (type: Grafaid.Schema.InputTypes): string => {
  const sansNullabilityType = Grafaid.Schema.getNullableType(type)

  const nullableRendered = Grafaid.Schema.isNullableType(type) ? `| undefined | null` : ``

  if (Grafaid.Schema.isListType(sansNullabilityType)) {
    const innerType = Grafaid.Schema.getNullableType(sansNullabilityType.ofType)
    return `Array<${renderArgumentType(innerType)}> ${nullableRendered}`
  }

  if (Grafaid.Schema.isScalarType(sansNullabilityType)) {
    if (Grafaid.Schema.isScalarTypeCustom(sansNullabilityType)) {
      const scalarTypeRendered =
        `${identifiers.$$Utilities}.SchemaKit.Scalar.GetDecoded<${identifiers.$$Utilities}.SchemaKit.Scalar.LookupCustomScalarOrFallbackToString<'${sansNullabilityType.name}', $Scalars>>`
      return `${scalarTypeRendered} ${nullableRendered}`
    }
    const scalarTypeRendered =
      Grafaid.StandardScalarTypeTypeScriptMapping[sansNullabilityType.name as Grafaid.StandardScalarTypeNames]
    return `${scalarTypeRendered} ${nullableRendered}`
  }

  return `${H.namedTypesReference(sansNullabilityType)} ${nullableRendered}`
}

const renderNamedTypesIndex = createCodeGenerator<{ types: Grafaid.Schema.NamedTypes[] }>(
  ({ types, code }) => {
    const namedTypes = types.map(type => {
      if (Grafaid.Schema.isEnumType(type)) {
        return H.tsTypeTerminal(`$${renderName(type)}`, renderName(type))
      }
      return H.tsType(`$${renderName(type)}`, H.reference(type))
    }).join(`\n`)

    code(`
      export namespace $NamedTypes {
        ${namedTypes}
      }
    `)
    code()
  },
)

// --------------------------------------------------------------------------------------------------

namespace H {
  export type Name = string | Grafaid.Schema.NamedTypes | Grafaid.Schema.Field<any, any>

  export const referenceSig = (type: Name) => {
    return `${renderName(type)}<${$ScalarsTypeParameter}>`
  }

  export const namedTypesReference = (type: Grafaid.Schema.NamedTypes) => {
    return `$NamedTypes.$${reference(type)}`
  }

  export const reference = (name: Name) => {
    // A reference to an enum type can never make use of schema customizations.
    if (Grafaid.Schema.isEnumType(name)) {
      return renderName(name)
    }
    return `${renderName(name)}<$Scalars>`
  }

  export const propOpt = (type: Grafaid.Schema.Types) => {
    return Grafaid.Schema.isNullableType(type) ? `?` : ``
  }

  export const maybeList = (type: string) => {
    return `${type} | Array<${type}>`
  }

  export const tsInterface = (name: Name, extendsClause: null | (string | null)[], fields: string) => {
    const extendsClause_ = extendsClause
      ? ` extends ${isString(extendsClause) ? extendsClause : extendsClause.join(`, `)}`
      : ``
    return `export interface ${referenceSig(name)} ${extendsClause_} { ${fields} }`
  }

  export const tsType = (name: Name, type: string) => {
    return tsTypeTerminal(referenceSig(name), type)
  }

  export const tsTypeExpanded = (name: Name, type: string) => {
    const name_ = renderName(name)
    const tsDoc = Code.TSDoc(`
      This is the "expanded" version of the \`${name_}\` type. It is identical except for the fact
      that IDEs will display its contents (a union type) directly, rather than the name of this type.
      In some cases, this is a preferable DX, making the types easier to read for users.
    `)
    return tsTypeTerminal(referenceSig(`${name_}$Expanded`), `${identifiers.$$Utilities}.Simplify<${type}>`, tsDoc)
  }

  export const tsTypeTerminal = (name: Name, type: string, tsDoc?: string) => {
    const tsDoc_ = tsDoc ? `${tsDoc}\n` : ``
    return `${tsDoc_}export type ${renderName(name)} = ${type}`
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
    const isReference = type !== `$Select.Indicator.NoArgsIndicator`
    const typeBareExpanded = `${type}${isHasExpanded ? `$Expanded` : ``}`
    const typeReferenced = isReference ? reference(typeBareExpanded) : typeBareExpanded
    const aliasType = aliasable ? `| $Select.SelectAlias.SelectAlias<${isReference ? reference(type) : type}>` : ``
    return `${name}?: ${typeReferenced}${aliasType}`
  }

  /**
   * Render a typename field. Pass the kind of type its for to produce superior JSDoc.
   */
  export const __typenameField = (kind: 'union' | 'interface' | 'object') => {
    return `
      ${__typenameDoc(kind)}
      ${outputFieldKey(`__typename`, `$Select.Indicator.NoArgsIndicator`)}
    `
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

    // dprint-ignore
    return `
      ${doc}
      ___?:
        | ${H.reference(`${renderName(type)}${fragmentInlineNameSuffix}`)}
        | ${H.reference(`${renderName(type)}${fragmentInlineNameSuffix}`)}[]
    `
  }

  export const fragmentInlineInterface = (
    node: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    const name = `${renderName(node)}${fragmentInlineNameSuffix}`
    // dprint-ignore
    return `export interface ${name}<${$ScalarsTypeParameter}> extends ${renderName(node)}<$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {}`
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

  const fragmentInlineNameSuffix = `$FragmentInline`
}
