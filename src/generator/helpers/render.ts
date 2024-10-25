import { Code } from '../../lib/Code.js'
import { Grafaid } from '../../lib/grafaid/__.js'
import { Tex } from '../../lib/tex/__.js'
import { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import type { Config } from '../config/config.js'

export const renderInlineType = (type: Grafaid.Schema.Types): string => {
  const [ofType, nonNull] = Grafaid.Schema.isNonNullType(type)
    ? [type.ofType, true]
    : [type, false]

  const nullFlag = nonNull
    ? SchemaDrivenDataMap.nullabilityFlags.nonNull
    : SchemaDrivenDataMap.nullabilityFlags.nullable

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
    // ${Tex.borderThin}
    // ${Tex.centerTo(Tex.borderThin, type.name)}
    // ${Tex.borderThin}
    //
    //
  `.trim()

  return title
}

export const typeTitle2SelectionSet = typeTitle2(`GRAPHQL SELECTION SET`)

export const typeTitle = (config: Config, kindName: Grafaid.Schema.KindMap.KindName) => {
  const hasItems = config.schema.kindMap[kindName].length > 0
  const title = `${kindName} Types`
  const titleDecorated = `// ${title}\n// ${`-`.repeat(title.length)}\n`
  if (hasItems) {
    return titleDecorated
  } else {
    return `${titleDecorated}\n// -- None --\n`
  }
}

const defaultDescription = (node: Grafaid.Schema.DescribableTypes) => {
  const entity = Grafaid.Schema.isField(node) ? `Field` : Grafaid.getTypeAndKind(node).kindName
  return `There is no documentation for this ${entity}.`
}

export const renderDocumentation = (config: Config, node: Grafaid.Schema.DescribableTypes) => {
  return Code.TSDoc(getTsDocContents(config, node))
}
export const getTsDocContents = (config: Config, node: Grafaid.Schema.DescribableTypes) => {
  const generalDescription = node.description
    ?? (config.options.TSDoc.noDocPolicy === `message` ? defaultDescription(node) : null)

  const deprecationDescription = Grafaid.Schema.isDeprecatableNode(node) && node.deprecationReason
    ? `@deprecated ${node.deprecationReason}`
    : null

  const enumMemberDescriptions: string[] = Grafaid.Schema.isEnumType(node)
    ? node
      .getValues()
      .map((_) => {
        const deprecationDescription = _.deprecationReason
          ? `(DEPRECATED: ${_.deprecationReason})`
          : null
        const generalDescription = _.description
          ? _.description
          : config.options.TSDoc.noDocPolicy === `message`
          ? `Missing description.`
          : null
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

  if (Code.reservedTypeScriptInterfaceNames.includes(name_ as any)) {
    // todo this could name clash with $ prefix imports.
    // either make imports use $$ or put the $ here in suffix.
    return `$${name_}`
  }

  return name_
}
