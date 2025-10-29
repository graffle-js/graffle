import { Grafaid } from '@graffle/graphql'

import { Docpar } from '@graffle/document/$.js'
import { Str } from '@wollybeard/kit'
import type { Config } from '../config/config.js'

export const renderInlineType = (type: Grafaid.Schema.Types): string => {
  const [ofType, nonNull] = Grafaid.Schema.isNonNullType(type)
    ? [type.ofType, true]
    : [type, false]

  const nullFlag = nonNull
    ? Docpar.nullabilityFlags.nonNull
    : Docpar.nullabilityFlags.nullable

  const rest = Grafaid.Schema.isListType(ofType)
    ? renderInlineType(ofType.ofType)
    : ``

  return `[${nullFlag.toString()}, ${rest}]`
}

export const maybeList = (type: string) => {
  return `${type} | Array<${type}>`
}

export const typeTitle2 = (category: string) => (type: Grafaid.Schema.NamedTypes) => {
  const typeKind = Grafaid.getTypeAndKind(type)
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

const defaultDescription = (node: Grafaid.Schema.DescribableTypes) => {
  const entity = Grafaid.Schema.isField(node) ? `Field` : Grafaid.getTypeAndKind(node).kindName
  return `There is no documentation for this ${entity}.`
}

export const renderDocumentation = (config: Config, node: Grafaid.Schema.DescribableTypes) => {
  return Str.Code.TSDoc.format(getTsDocContents(config, node))
}
export const getTsDocContents = (config: Config, node: Grafaid.Schema.DescribableTypes) => {
  const generalDescription = Str.Code.TSDoc.escape(node.description)
    ?? (config.options.TSDoc.noDocPolicy === `message` ? defaultDescription(node) : null)

  const deprecationDescription = Grafaid.Schema.isDeprecatableNode(node) && node.deprecationReason
    ? `@deprecated ${Str.Code.TSDoc.escape(node.deprecationReason)}`
    : null

  const enumMemberDescriptions: string[] = Grafaid.Schema.isEnumType(node)
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
      .filter((_): _ is [Grafaid.Schema.EnumValue, string] => _ !== null)
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
export const renderName = (type: string | Grafaid.Schema.NamedTypes | Grafaid.Schema.FieldTypes) => {
  const name_ = typeof type === `string` ? type : type.name
  return Str.Code.TS.Reserved.escapeReserved(name_)
}
