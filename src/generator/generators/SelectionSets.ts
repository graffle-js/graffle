// todo: generate in JSDoc how the feature maps to GQL syntax.
// todo: on union fields, JSDoc that mentions the syntax `on*`

import { Select } from '../../documentBuilder/Select/__.js'
import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { analyzeArgsNullability } from '../../lib/grafaid/schema/args.js'
import { entries, pick, values } from '../../lib/prelude.js'
import { Tex } from '../../lib/tex/__.js'
import { borderThin } from '../../lib/tex/tex.js'
import type { Config } from '../config/config.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getTsDocContents, renderName } from '../helpers/render.js'
import type { KindRenderers } from '../helpers/types.js'

const i = {
  ...identifiers,
  _$Scalars: `_$Scalars`,
}
const $ScalarsTypeParameter =
  `${i._$Scalars} extends ${identifiers.$$Utilities}.Schema.Scalar.Registry = ${identifiers.$$Utilities}.Schema.Scalar.Registry.Empty`

export const ModuleGeneratorSelectionSets = createModuleGenerator(
  `SelectionSets`,
  ({ config, code }) => {
    const kindMap = pick(config.schema.kindMap.list, [
      `Root`,
      `Enum`,
      `InputObject`,
      `OutputObject`,
      `Union`,
      `Interface`,
    ])
    const kindEntries = entries(kindMap).filter(_ => _[1].length > 0)
    const kinds = kindEntries.map(_ => _[1])

    code(
      `import type { Select as $Select } from '${config.paths.imports.grafflePackage.schema}'`,
      `import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`,
    )
    code()
    code(Tex.title1(`Document`))
    code()
    code(Code.tsInterface({
      name: `$Document`,
      parameters: $ScalarsTypeParameter,
      // dprint-ignore
      block: `
        ${config.schema.kindMap.index.Root.query ? `query?: Record<string, Query<${i._$Scalars}>>` : ``}
        ${config.schema.kindMap.index.Root.mutation ? `mutation?: Record<string, Mutation<${i._$Scalars}>>` : ``}
      `,
    }))
    code()

    kindEntries.forEach(([name, kind]) => {
      code(Tex.title1(name))
      code()
      kind.forEach(type => {
        code(kindRenderMap[name]({ config, type: type as never }))
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
    const namedTypes = kinds.flat().map(type => {
      if (Grafaid.Schema.isEnumType(type)) {
        return Code.tsAlias$({
          name: `$${renderName(type)}`,
          type: renderName(type),
        })
      }
      return Code.tsAlias$({
        name: `$${renderName(type)}`,
        parameters: $ScalarsTypeParameter,
        type: H.reference(type),
      })
    }).join(`\n`)

    code(`
      export namespace $NamedTypes {
        ${namedTypes}
      }
    `)
    code()
  },
)

const Union = createCodeGenerator<{ type: Grafaid.Schema.UnionType }>(
  ({ config, type, code }) => {
    const fragmentsInlineType = type.getTypes().map((type) =>
      `${Select.InlineFragment.typeConditionPRefix}${type.name}?: ${H.forwardTypeParameter$Scalars(type)}`
    ).join(`\n`)
    code(Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      parameters: $ScalarsTypeParameter,
      block: `
        ${H.__typenameField(`union`)}
        ${fragmentsInlineType}
        ${H.fragmentInlineField(type)}
      `,
    }))

    code(H.fragmentInlineInterface(type))
    code()
  },
)

const Enum = createCodeGenerator<{ type: Grafaid.Schema.EnumType }>(
  ({ config, type, code }) => {
    code(Code.tsAlias$({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      type: Code.tsUnionItems(type.getValues().map((value) => Code.string(value.name))),
    }))
  },
)

const InputObject = createCodeGenerator<{ type: Grafaid.Schema.InputObjectType }>(
  ({ config, type, code }) => {
    code(Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      parameters: $ScalarsTypeParameter,
      block: values(type.getFields()).map(field => getInputFieldLike(config, field)),
    }))
  },
)

const Interface = createCodeGenerator<{ type: Grafaid.Schema.InterfaceType }>(
  ({ config, type, code }) => {
    const fields = values(type.getFields())
    const fieldsRendered = fields.map(field => {
      return H.outputFieldReference(field.name, `${renderName(type)}.${renderName(field)}`)
    }).join(`\n`)
    const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.kindMap, type)
    const onTypesRendered = implementorTypes.map(type =>
      H.outputFieldReference(`${Select.InlineFragment.typeConditionPRefix}${type.name}`, renderName(type))
    ).join(`\n`)
    code()
    code(Tex.title2(type.name))
    code()
    code(Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      parameters: $ScalarsTypeParameter,
      extends: [`$Select.Bases.ObjectLike`],
      block: `
        ${fieldsRendered}
        ${onTypesRendered}
        ${H.fragmentInlineField(type)}
        ${H.__typenameField(`interface`)}
      `,
    }))
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

const OutputObject = createCodeGenerator<{ type: Grafaid.Schema.ObjectType }>(
  ({ config, type, code }) => {
    const fields = Object.values(type.getFields())

    code(Tex.title2(type.name))
    code()
    code(Tex.title3(`Entrypoint Interface`))
    code()

    const fieldKeys = fields.map(field => {
      const typeKind = Grafaid.getTypeAndKind(Grafaid.Schema.getNamedType(field.type))
      const doc = Code.TSDoc(`
        Select the \`${field.name}\` field on the \`${type.name}\` object. Its type is \`${typeKind.typeName}\` (a \`${typeKind.kindName}\` kind of type).
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

    const isRootType = config.schema.kindMap.list.Root.some(_ => _.name === type.name)
    const extendsClause = isRootType ? null : `$Select.Bases.ObjectLike`

    code(Code.tsInterface({
      tsDoc: getTsDocContents(config, type),
      name: type.name,
      parameters: $ScalarsTypeParameter,
      extends: [extendsClause],
      block: `
        ${fieldKeys}
        ${H.fragmentInlineField(type)}
        ${H.__typenameField(`object`)}
      `,
    }))
    code()
    code(H.fragmentInlineInterface(type))
    code()
    code(Tex.title3(`Fields`))
    code()
    code(`
      export namespace ${renderName(type)} {
        ${fields.map((field) => renderOutputField({ config, field })).join(`\n// ${borderThin}\n\n`)}
      }
    `)
    code()
  },
)

const kindRenderMap = {
  OutputObject: OutputObject,
  InputObject: InputObject,
  Enum: Enum,
  Root: OutputObject,
  Interface: Interface,
  Union: Union,
  ScalarCustom: null,
  ScalarStandard: null,
} satisfies KindRenderers

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

    code(Code.tsAlias$({
      name: field.name,
      parameters: $ScalarsTypeParameter,
      type: Code.tsUnionItems([indicator, selectionSetRef]),
    }))
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

    code(Code.tsInterface({
      name: selectionSetName,
      parameters: $ScalarsTypeParameter,
      extends: [`$Select.Bases.Base`, objectLikeTypeReference],
      block: propertyArguments,
    }))
    code()

    if (argsAnalysis.hasAny) {
      code(Code.tsInterface({
        name: argumentsName,
        parameters: $ScalarsTypeParameter,
        block: field.args.map(arg => getInputFieldLike(config, arg)),
      }))
      code()
    }

    code(`// --- expanded ---`)
    code()
    code(H.tsTypeExpanded(field, Code.tsUnionItems([indicator, selectionSetRef])))
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
    ? Select.Arguments.enumKeyPrefix + inputFieldLike.name
    : inputFieldLike.name
}

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
        `${i.$$Utilities}.Schema.Scalar.GetDecoded<${i.$$Utilities}.Schema.Scalar.LookupCustomScalarOrFallbackToString<'${sansNullabilityType.name}', ${i._$Scalars}>>`
      return `${scalarTypeRendered} ${nullableRendered}`
    }
    const scalarTypeRendered =
      Grafaid.StandardScalarTypeTypeScriptMapping[sansNullabilityType.name as Grafaid.StandardScalarTypeNames]
    return `${scalarTypeRendered} ${nullableRendered}`
  }

  return `${H.namedTypesReference(sansNullabilityType)} ${nullableRendered}`
}

// --------------------------------------------------------------------------------------------------

namespace H {
  export type Name = string | Grafaid.Schema.NamedTypes | Grafaid.Schema.Field<any, any>

  export const forwardTypeParameter$Scalars = (type: Name) => {
    return `${renderName(type)}<${i._$Scalars}>`
  }

  export const namedTypesReference = (type: Grafaid.Schema.NamedTypes) => {
    return `$NamedTypes.$${reference(type)}`
  }

  export const reference = (name: Name) => {
    // A reference to an enum type can never make use of schema customizations.
    if (Grafaid.Schema.isEnumType(name)) {
      return renderName(name)
    }
    return `${renderName(name)}<${i._$Scalars}>`
  }

  export const propOpt = (type: Grafaid.Schema.Types) => {
    return Grafaid.Schema.isNullableType(type) ? `?` : ``
  }

  export const tsTypeExpanded = (name: Name, type: string) => {
    const name_ = renderName(name)
    return Code.tsAlias$({
      name: `${name_}$Expanded`,
      parameters: $ScalarsTypeParameter,
      type: `${i.$$Utilities}.Simplify<${type}>`,
      tsDoc: `
        This is the "expanded" version of the \`${name_}\` type. It is identical except for the fact
        that IDEs will display its contents (a union type) directly, rather than the name of this type.
        In some cases, this is a preferable DX, making the types easier to read for users.
      `,
    })
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
    return Code.tsInterface({
      name: `${renderName(node)}${fragmentInlineNameSuffix}`,
      parameters: $ScalarsTypeParameter,
      extends: [forwardTypeParameter$Scalars(node), `$Select.Directive.$Groups.InlineFragment.Fields`],
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

  const fragmentInlineNameSuffix = `$FragmentInline`
}
