// todo: generate in JSDoc how the feature maps to GQL syntax.
// todo: on union fields, JSDoc that mentions the syntax `on*`

import { Code } from '../../../lib/Code.js'
import { Grafaid } from '../../../lib/grafaid/__.js'
import { analyzeArgsNullability } from '../../../lib/grafaid/schema/args.js'
import { RootTypeName } from '../../../lib/grafaid/schema/schema.js'
import { Select } from '../../2_Select/__.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { createCodeGenerator } from '../helpers/moduleGeneratorRunner.js'
import { getDocumentation, renderDocumentation, renderName, title1, typeTitle2SelectionSet } from '../helpers/render.js'
import { ModuleGeneratorScalar } from './Scalar.js'

export const ModuleGeneratorSelectionSets = createModuleGenerator(
  `SelectionSets`,
  ({ config, code }) => {
    code()

    code(`import type { Select as $Select } from '${config.paths.imports.grafflePackage.schema}'`)
    code(`import type * as $Utilities from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'`)
    if (Grafaid.Schema.KindMap.hasCustomScalars(config.schema.typeMapByKind)) {
      code(`import type * as $Scalar from './${ModuleGeneratorScalar.name}.js'`)
    }
    code()

    code(title1(`Document`))
    code()
    code(
      `// Prefix with $ because this is not a schema type. A user could have a schema type named "Document" that this would conflict with.`,
    )
    code(
      `export interface $Document {`,
      Grafaid.Schema.KindMap.hasQuery(config.schema.typeMapByKind) ? `query?: Record<string, Query>` : null,
      Grafaid.Schema.KindMap.hasMutation(config.schema.typeMapByKind) ? `mutation?: Record<string, Mutation>` : null,
      `}`,
    )
    code()

    const typesToRender = [
      config.schema.typeMapByKind.GraphQLRootType,
      config.schema.typeMapByKind.GraphQLEnumType,
      config.schema.typeMapByKind.GraphQLInputObjectType,
      config.schema.typeMapByKind.GraphQLInterfaceType,
      config.schema.typeMapByKind.GraphQLObjectType,
      config.schema.typeMapByKind.GraphQLUnionType,
    ].filter(_ => _.length > 0)

    typesToRender.forEach((nodes) => {
      const kind = Grafaid.Schema.getTypeKind(nodes[0]!)

      code(title1(`${kind} Types`))
      code()

      nodes.forEach(node => {
        code(kindRenderLookup[kind]({ config, node: node as never }))
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
    code(renderRefDefs({ config, nodes: typesToRender.flat() }))
  },
)

const renderRefDefs = createCodeGenerator<{ nodes: Grafaid.Schema.NamedTypes[] }>(
  ({ nodes, code }) => {
    const refDefsRendered = nodes.map(node => `export type _${renderName(node)} = ${renderName(node)}`).join(`\n`)
    const namespaceRendered = `
      export namespace _RefDefs {
        ${refDefsRendered}
      }
    `
    code(namespaceRendered)
    code()
  },
)

const renderUnion = createCodeGenerator<{ node: Grafaid.Schema.UnionType }>(
  ({ config, node, code }) => {
    const doc = renderDocumentation(config, node)
    code(doc)

    const memberTypes = node.getTypes()
    code(`
      export interface ${renderName(node)} {
        ${
      memberTypes.map((type) => `${Select.InlineFragment.typeConditionPRefix}${type.name}?: ${renderName(type)}`)
        .join(
          `\n`,
        )
    }
        ${Helpers.fragmentInlineField(node)}
        ${Helpers.__typenameField(`union`)}
      }
    `)

    code(Helpers.fragmentInlineInterface(node))
    code()
  },
)

const renderEnum = createCodeGenerator<{ node: Grafaid.Schema.EnumType }>(
  ({ config, node, code }) => {
    const doc = renderDocumentation(config, node)
    code(doc)

    const values = Object.values(node.getValues())
    code(Helpers.type(renderName(node), values.map((value) => Code.string(value.name)).join(` | `)))
  },
)

const renderInputObject = createCodeGenerator<{ node: Grafaid.Schema.InputObjectType }>(
  ({ config, node, code }) => {
    const doc = renderDocumentation(config, node)
    code(doc)

    const fields = Object.values(node.getFields())
    code(`
      export interface ${renderName(node)} {
        ${fields.map((field) => renderArgumentLike({ config, arg: field })).join(`\n`)}
      }
    `)
  },
)

const renderInterface = createCodeGenerator<{ node: Grafaid.Schema.InterfaceType }>(
  ({ config, node, code }) => {
    const fields = Object.values(node.getFields())
    const fieldsRendered = fields.map(field => {
      return Helpers.outputField(field.name, `${renderName(node)}.${renderName(field)}`)
    }).join(`\n`)
    const implementorTypes = Grafaid.Schema.KindMap.getInterfaceImplementors(config.schema.typeMapByKind, node)
    const onTypesRendered = implementorTypes.map(type =>
      Helpers.outputField(`${Select.InlineFragment.typeConditionPRefix}${type.name}`, renderName(type))
    ).join(
      ` \n `,
    )

    code()
    code(`// --------------`)
    code(`// Interface Type ${node.name}`)
    code(`// --------------`)
    code()

    const doc = renderDocumentation(config, node)
    code(doc)

    code(`
      export interface ${renderName(node)} extends $Select.Bases.ObjectLike {
        ${fieldsRendered}
        ${onTypesRendered}
        ${Helpers.fragmentInlineField(node)}
        ${Helpers.__typenameField(`interface`)}
      }
    `)
    code()

    code(Helpers.fragmentInlineInterface(node))
    code()

    code(`
      export namespace ${renderName(node)} {
        ${fields.map((field) => renderField({ config, field })).join(`\n`)}
      }
    `)
    code()
  },
)

const renderObject = createCodeGenerator<{ node: Grafaid.Schema.ObjectType }>(
  ({ config, node, code }) => {
    const fields = Object.values(node.getFields())

    code(typeTitle2SelectionSet(node))
    code()

    code(`// ----------------------------------------| Entrypoint Interface |`)
    code()

    const propertiesRendered = fields.map(field => {
      const nodeWhat = Grafaid.getTypeNameAndKind(Grafaid.Schema.getNamedType(field.type))
      const type = nodeWhat.kind === `Scalar` ? `\`${nodeWhat.name}\` (a \`Scalar\`)` : nodeWhat.kind
      const doc = Code.TSDoc(`
        Select the \`${field.name}\` field on the \`${node.name}\` object. Its type is ${type}.
      `)
      const propertyRendered = Helpers.outputFieldAlisable(
        field.name,
        `${renderName(node)}.${renderName(field)}`,
        true,
        analyzeArgsNullability(field.args).isAllNullable,
      )
      return doc + `\n` + propertyRendered
    }).join(`\n`)

    const isRootType = node.name in RootTypeName
    const extendsClause = isRootType ? `` : `extends $Select.Bases.ObjectLike`

    const doc = renderDocumentation(config, node)
    code(doc)

    code(`
      export interface ${renderName(node)} ${extendsClause} {
        ${propertiesRendered}
        ${Helpers.fragmentInlineField(node)}
        ${Helpers.__typenameField(`object`)}
      }
    `)
    code()

    code(Helpers.fragmentInlineInterface(node))
    code()

    code(`// ----------------------------------------| Fields Interfaces |`)
    code()

    code(`
      export namespace ${renderName(node)} {
        ${fields.map((field) => renderField({ config, field })).join(`\n`)}
      }
    `)
    code()
  },
)

const kindRenderLookup = {
  GraphQLInputObjectType: renderInputObject,
  GraphQLRootType: renderObject,
  GraphQLObjectType: renderObject,
  GraphQLEnumType: renderEnum,
  GraphQLInterfaceType: renderInterface,
  GraphQLUnionType: renderUnion,
}

const renderField = createCodeGenerator<{ field: Grafaid.Schema.Field<any, any> }>(
  ({ config, field, code }) => {
    const namedType = Grafaid.Schema.getNamedType(field.type)
    const nameRendered = renderName(field)

    // code()
    // code(`// -- .${nameRendered} --`)
    // code()

    if (Grafaid.Schema.isScalarType(namedType) || Grafaid.Schema.isEnumType(namedType)) {
      const argsAnalysis = analyzeArgsNullability(field.args)
      const argFieldsRendered = renderArguments({ config, field })
      const argsRendered = renderArgumentsKey({
        config,
        field,
        argFieldsRendered: `${nameRendered}$SelectionSetArguments`,
      })

      if (argsAnalysis.hasAny) {
        code(
          `export type ${nameRendered}$SelectionSetArguments = ${argFieldsRendered}`,
        )
        if (argsAnalysis.isAllNullable) {
          code(
            `export type ${nameRendered}$SelectionSet = $Utilities.Simplify<$Select.Bases.Base & { ${argsRendered} }>`,
          )
          code()
          code(
            Helpers.typeExpanded(
              nameRendered,
              `$Utilities.UnionExpanded<$Select.Indicator.Indicator | ${nameRendered}$SelectionSet>`,
            ),
          )
          code()
          code(
            Helpers.type(nameRendered, `$Select.Indicator.Indicator | ${nameRendered}$SelectionSet`),
          )
          code()
        } else {
          // 1+ arguments required.
          // todo test that a directive can be passed with the intersection that otherwise cannot be.
          code(Helpers.$interface(nameRendered, `$Select.Bases.Base`, argsRendered))
          code()
        }
      } else {
        code(Helpers.typeExpanded(nameRendered, `$Select.Indicator.NoArgsIndicator$Expanded`))
        code()
        code(Helpers.type(nameRendered, `$Select.Indicator.NoArgsIndicator`))
        code()
      }
    } else {
      const argFieldsRendered = renderArguments({ config, field })
      const argsRendered = renderArgumentsKey({ config, field, argFieldsRendered })
      const sigRendered = `export interface ${nameRendered} extends _RefDefs._${renderName(namedType)}`
      code(`${sigRendered} {${argsRendered ? `\n${argsRendered}\n` : ``}}`)
      code(`export type ${nameRendered}$Expanded = ${nameRendered}`)
    }
  },
)

const renderArgumentsKey = createCodeGenerator<{ field: Grafaid.Schema.Field<any, any>; argFieldsRendered: string }>(
  ({ field, code, argFieldsRendered }) => {
    const argsAnalysis = analyzeArgsNullability(field.args)

    if (argsAnalysis.hasAny) {
      const lead = argsAnalysis.isAllNullable
        ? `No arguments`
        : argsAnalysis.required === argsAnalysis.total
        ? `All arguments`
        : `Some (${argsAnalysis.required.toString()}/${argsAnalysis.total.toString()}) arguments`
      const tsDocMessageAboutRequired = argsAnalysis.isAllNullable
        ? `\n * ${lead} are required so you may omit this.`
        : `\n * ${lead} are required so you must include this.`

      code(`
        /**
         * Arguments for \`${field.name}\` field.${tsDocMessageAboutRequired}
         */
        $${argsAnalysis.isAllNullable ? `?` : ``}: ${argFieldsRendered}
      `)
    }
  },
)

const renderArguments = createCodeGenerator<{ field: Grafaid.Schema.Field<any, any> }>(({ config, field, code }) => {
  const argFieldsRendered = field.args.map(arg => renderArgumentLike({ config, arg })).join(`\n`)
  if (argFieldsRendered) {
    code(`{\n${argFieldsRendered}\n}`)
    code()
  }
})

const renderArgumentLike = createCodeGenerator<{ arg: Grafaid.Schema.Argument | Grafaid.Schema.InputField }>(
  ({ config, arg, code }) => {
    // todo do not import whole of graphql package here. Just import getNamedType.
    const enumKeyPrefix = Grafaid.Schema.isEnumType(Grafaid.Schema.getNamedType(arg.type))
      ? Select.Arguments.enumKeyPrefix
      : ``
    const typeRendered = renderArgType(arg.type)
    const doc = getDocumentation(config, arg)
    code(doc)
    code(`${enumKeyPrefix}${arg.name}${Helpers.propOpt(arg.type)}: ${typeRendered}`)
  },
)

const renderArgType = (type: Grafaid.Schema.InputTypes): string => {
  const sansNullabilityType = Grafaid.Schema.getNullableType(type)

  const nullableRendered = Grafaid.Schema.isNullableType(type) ? `| undefined | null` : ``

  if (Grafaid.Schema.isListType(sansNullabilityType)) {
    const innerType = Grafaid.Schema.getNullableType(sansNullabilityType.ofType)
    return `Array<${renderArgType(innerType)}> ${nullableRendered}`
  }

  if (Grafaid.Schema.isScalarType(sansNullabilityType)) {
    if (Grafaid.Schema.isScalarTypeCustom(sansNullabilityType)) {
      const scalarTypeRendered = `$Scalar.${sansNullabilityType.name}Decoded`
      return `${scalarTypeRendered} ${nullableRendered}`
    }
    const scalarTypeRendered =
      Grafaid.StandardScalarTypeTypeScriptMapping[sansNullabilityType.name as Grafaid.StandardScalarTypeNames]
    return `${scalarTypeRendered} ${nullableRendered}`
  }

  return `_RefDefs._${renderName(sansNullabilityType)} ${nullableRendered}`
}

namespace Helpers {
  export const propOpt = (type: Grafaid.Schema.Types) => {
    return Grafaid.Schema.isNullableType(type) ? `?` : ``
  }
  export const maybeList = (type: string) => {
    return `${type} | Array<${type}>`
  }
  export const $interface = (name: string, extendsClause: string | null, fields: string) => {
    return `export interface ${name} ${extendsClause ? ` extends ${extendsClause}` : ``} { ${fields} }`
  }
  export const typeExpanded = (name: string, type: string) => {
    const jsdoc = Code.TSDoc(`
      This is the "expanded" version of the \`${name}\` type. It is identical except for the fact
      that IDEs will display its contents (a union type) directly, rather than the name of this type.
      In some cases, this is a preferable DX, making the types easier to read for users.
    `)
    return `
      ${jsdoc}
      export type ${name}$Expanded = ${type}
    `
  }
  export const type = (name: string, type: string) => {
    return `export type ${name} = ${type}`
  }

  export const outputField = (name: string, type: string) => {
    return `${name}?: ${type}`
  }

  export const outputFieldAlisable = (
    name: string,
    type: string,
    aliasable: boolean = true,
    isHasExpanded: boolean = true,
  ) => {
    const alias = aliasable ? `| $Select.SelectAlias.SelectAlias<${type}>` : ``
    return `${name}?: ${type}${isHasExpanded ? `$Expanded` : ``}${alias}`
  }

  /**
   * Render a typename field. Pass the kind of type its for to produce superior JSDoc.
   */
  export const __typenameField = (kind: 'union' | 'interface' | 'object') => {
    return `
      ${__typenameDoc(kind)}
      ${outputFieldAlisable(`__typename`, `$Select.Indicator.NoArgsIndicator`)}
    `
  }

  const fragmentInlineNameSuffix = `$FragmentInline`

  export const fragmentInlineInterface = (
    node: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    const name = `${renderName(node)}${fragmentInlineNameSuffix}`
    return `export interface ${name} extends ${renderName(node)}, $Select.Directive.$Groups.InlineFragment.Fields {}`
  }

  export const fragmentInlineField = (
    node: Grafaid.Schema.ObjectType | Grafaid.Schema.UnionType | Grafaid.Schema.InterfaceType,
  ) => {
    const doc = Code.TSDoc(`
      Inline fragments for field groups. 
     
      Generally a niche feature. This can be useful for example to apply an \`@include\` directive to a subset of the
      selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
       
      @see https://spec.graphql.org/draft/#sec-Inline-Fragments
    `)
    // interface Query$FragmentInline extends Query, $Select.Directive.$Groups.InlineFragment.Fields {}

    return `
      ${doc}
      ___?: ${renderName(node)}${fragmentInlineNameSuffix} | ${renderName(node)}${fragmentInlineNameSuffix}[]
    `
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
