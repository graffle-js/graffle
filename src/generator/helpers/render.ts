import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

import { Docpar } from '#src/docpar/_.js'
import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'

export const renderInlineType = (type: GraphqlKit.Schema.Runtime.NodeGroups.Types): string => {
  const [ofType, nonNull] = GraphqlKit.Schema.Runtime.Nodes.isNonNullType(type)
    ? [type.ofType, true]
    : [type, false]

  const nullFlag = nonNull
    ? Docpar.nullabilityFlags.nonNull
    : Docpar.nullabilityFlags.nullable

  const rest = GraphqlKit.Schema.Runtime.Nodes.isListType(ofType)
    ? renderInlineType(ofType.ofType)
    : ``

  return `[${nullFlag.toString()}, ${rest}]`
}

export const maybeList = (type: string) => {
  return `${type} | Array<${type}>`
}

export const typeTitle2 = (category: string) => (type: GraphqlKit.Schema.Runtime.NodeGroups.NamedTypes) => {
  const typeKind = GraphqlKit.getTypeAndKind(type)
  const nameOrKind = typeKind.kindName === `ScalarCustom` || typeKind.kindName === `ScalarStandard`
    ? typeKind.typeName
    : typeKind.kindName
  const typeLabel = nameOrKind
  const title = `
    //
    //
    //
    //
    // ${category.toUpperCase()}
    // ${typeLabel.toUpperCase()}
    // ${Str.Code.TS.Comment.borderThin}
    // ${Str.Code.TS.Comment.centerTo(Str.Code.TS.Comment.borderThin, type.name)}
    // ${Str.Code.TS.Comment.borderThin}
    //
    //
  `.trim()

  return title
}

const defaultDescription = (node: GraphqlKit.Schema.Runtime.NodeGroups.DescribableTypes) => {
  const entity = GraphqlKit.Schema.Runtime.NodeGroups.isField(node)
    ? `Field`
    : GraphqlKit.getTypeAndKind(node).kindName
  return `There is no documentation for this ${entity}.`
}

export const renderDocumentation = (config: Config, node: GraphqlKit.Schema.Runtime.NodeGroups.DescribableTypes) => {
  return Str.Code.TSDoc.format(getTsDocContents(config, node))
}
export const getTsDocContents = (config: Config, node: GraphqlKit.Schema.Runtime.NodeGroups.DescribableTypes) => {
  const generalDescription = Str.Code.TSDoc.escape(node.description)
    ?? (config.options.TSDoc.noDocPolicy === `message` ? defaultDescription(node) : null)

  const deprecationDescription = GraphqlKit.Schema.Runtime.NodeGroups.isDeprecatableNode(node) && node.deprecationReason
    ? `@deprecated ${Str.Code.TSDoc.escape(node.deprecationReason)}`
    : null

  const enumMemberDescriptions: string[] = GraphqlKit.Schema.Runtime.Nodes.isEnumType(node)
    ? node
      .getValues()
      .map((_) => {
        const deprecationDescription = _.deprecationReason
          ? `(DEPRECATED: ${Str.Code.TSDoc.escape(_.deprecationReason)})`
          : null
        const generalDescription = Str.Code.TSDoc.escape(_.description)
          ?? (config.options.TSDoc.noDocPolicy === `message`
            ? `Missing description.`
            : null)
        if (!generalDescription && !deprecationDescription) return null
        const content = [generalDescription, deprecationDescription]
          .filter((_) => _ !== null)
          .join(` `)
        return [_, content] as const
      })
      .filter((_): _ is [GraphqlKit.Schema.Runtime.Nodes.EnumValue, string] => _ !== null)
      .map(([node, description]) => {
        const content = `"${node.name}" - ${description}`
        return content
      })
    : []
  const enumMemberDescription = enumMemberDescriptions.length > 0
    ? `Members\n${enumMemberDescriptions.join(`\n`)}`
    : null
  if (!enumMemberDescription && !generalDescription && !deprecationDescription) {
    return null
  }
  const content = [
    generalDescription,
    enumMemberDescription,
    deprecationDescription,
  ]
    .filter((_) => _ !== null)
    .join(`\n\n`)
  return content
}

/**
 * Render the type name. Generally just a passthrough but
 * this guards against GraphQL type or property names that
 * would be illegal in TypeScript such as `namespace` or `interface`.
 */
export const renderName = (
  type: string | GraphqlKit.Schema.Runtime.NodeGroups.NamedTypes | GraphqlKit.Schema.Runtime.NodeGroups.Field,
) => {
  const name_ = typeof type === `string` ? type : type.name
  return Str.Code.TS.Reserved.escapeReserved(name_)
}
