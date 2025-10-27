import { Arr, Obj, Str } from '@wollybeard/kit'

type FieldTuple = [k: string, v: string | null, tsDoc?: string | null]

export namespace CodeGraphQL {
  // All generic utilities have been moved to @wollybeard/kit
  // This module now only contains GraphQL-specific wrappers and helpers

  // Re-export types from kit for backward compatibility
  export type DirectiveField = Str.Code.TS.TermObject.DirectiveField
  export type DirectiveTermObjectLike<$Fields extends null | TermObject | DirectiveTermObject = null> = {
    $spread?: string[]
    $literal?: string
  } & ($Fields extends null ? { $fields?: TermObject | DirectiveTermObject } : { $fields: $Fields })
  export type TermObject = Str.Code.TS.TermObject.TermObject
  export type TermObjectOf<$T> = Str.Code.TS.TermObject.TermObjectOf<$T>
  export type DirectiveTermObject = Str.Code.TS.TermObject.DirectiveTermObject

  // Re-export functions from kit for backward compatibility
  export const objectField$: typeof Str.Code.TS.TermObject.objectField$ = Str.Code.TS.TermObject.objectField$
  export const termObjectFields: typeof Str.Code.TS.TermObject.termObjectFields = Str.Code.TS.TermObject
    .termObjectFields
  export const exportValueWithKeywordHandling: typeof Str.Code.TS.Reserved.exportValueWithKeywordHandling = Str.Code
    .TS.Reserved.exportValueWithKeywordHandling
  export const reservedTypeScriptInterfaceNames: typeof Str.Code.TS.Reserved.reservedNames = Str.Code.TS.Reserved
    .reservedNames

  // Wrapper functions that combine kit functions for common patterns
  export const tsTypeExport = (name: string, type: string | TermObject) => {
    const escapedName = Str.Code.TS.Reserved.escapeReserved(name)
    const type_ = typeof type === `string` ? type : Str.Code.TS.TermObject.termObject(type)
    return Str.Code.TS.Reserved.exportTypeWithKeywordHandling(name, `type ${escapedName} = ${type_}`)
  }

  export const tsInterfaceExport = (name: string, interfaceDeclaration: string) => {
    const escapedName = Str.Code.TS.Reserved.escapeReserved(name)
    const isReserved = escapedName !== name

    if (isReserved) {
      const withExport = interfaceDeclaration.includes('export ')
        ? interfaceDeclaration
        : `export ${interfaceDeclaration}`
      return `${withExport}\nexport { type ${escapedName} as ${name} }`
    } else {
      return interfaceDeclaration.includes('export ')
        ? interfaceDeclaration
        : `export ${interfaceDeclaration}`
    }
  }

  // ----------------------------------------------------------------
  // 1. TYPE BUILDERS WITH RESERVED KEYWORD HANDLING
  // ----------------------------------------------------------------
  // Wrappers around kit's type generation with GraphQL name escaping

  type TypeParametersInput = string | null | (string | null)[]

  const tsTypeParameters = (typeParameters: TypeParametersInput): string => {
    if (typeParameters === null) return ``
    if (Array.isArray(typeParameters) && typeParameters.length === 0) return ``
    return `<${Arr.ensure(typeParameters).filter(_ => _ !== null).join(`, `)}>`
  }

  type ExtendsClauseInput = string | null | (string | null)[]

  interface AliasDefinitionInput extends TypeDefinitionInput {
    type: string | TermObject
  }

  export const tsAlias$ = ({ name, parameters, type, tsDoc, export: export_ }: AliasDefinitionInput) => {
    const tsDoc_ = tsDoc ? Str.Code.TSDoc.format(tsDoc) + `\n` : ``
    const export__ = export_ === false ? `` : `export `
    const name_ = Str.Code.TS.Reserved.escapeReserved(name)
    const typeParametersClause = tsTypeParameters(parameters ?? null)
    const type_ = typeof type === `string` ? type : Str.Code.TS.TermObject.termObject(type)
    return `${tsDoc_} ${export__} type ${name_} ${typeParametersClause} = ${type_}`
  }

  interface TypeDefinitionInput {
    name: string
    parameters?: TypeParametersInput
    tsDoc?: string | null
    export?: boolean
  }

  interface InterfaceDefinitionInput extends TypeDefinitionInput {
    extends?: ExtendsClauseInput
    block?: FieldsInput
  }

  type FieldsInput = string | TermObject | (readonly [name: string, field: string | DirectiveField])[]

  export const tsInterface = (
    { name, parameters, extends: extends_, block, tsDoc, export: export_ }: InterfaceDefinitionInput,
  ) => {
    const tsDoc_ = tsDoc ? Str.Code.TSDoc.format(tsDoc) + `\n` : ``
    const name_ = Str.Code.TS.Reserved.escapeReserved(name)
    const typeParametersClause = tsTypeParameters(parameters ?? null)
    const extends__ = Arr.ensure(extends_).filter(_ => Boolean(_))
    const extends___ = extends__.length > 0
      ? ` extends ${extends__.join(`, `)}`
      : ``
    const block_ = typeof block === `string`
      ? `{${block}}`
      : Array.isArray(block)
      ? Str.Code.TS.TermObject.termObject(Object.fromEntries(block))
      : Str.Code.TS.TermObject.termObject(block ?? {})

    const interfaceDeclaration = `interface ${name_} ${typeParametersClause} ${extends___} ${block_}`

    // Handle export with automatic keyword aliasing
    if (export_ === false) {
      return tsDoc_ + interfaceDeclaration
    }

    const isReserved = Str.Code.TS.Reserved.reservedNames.includes(name as any)
    if (isReserved) {
      // Don't export the interface directly, only export via alias
      return `${tsDoc_}${interfaceDeclaration}\nexport { type ${name_} as ${name} }`
    } else {
      return `${tsDoc_}export ${interfaceDeclaration}`
    }
  }

  export const tsType = (name: string, type: string | TermObject) => {
    const type_ = typeof type === `string` ? type : Str.Code.TS.TermObject.termObject(type)
    return `type ${Str.Code.TS.Reserved.escapeReserved(name)} = ${type_}`
  }

  export const tsNamespace = (name: string, content: string) => {
    return `namespace ${Str.Code.TS.Reserved.escapeReserved(name)} ${Str.Code.TS.block(content)}`
  }

  // ----------------------------------------------------------------
  // 2. GRAPHQL-SPECIFIC HELPERS
  // ----------------------------------------------------------------
  // Domain-specific utilities for GraphQL schema generation

  export const termConst = (name: string, value?: string) => termConstTyped(name, null, value)

  export const termConstTyped = (name: string, type: string | null, value?: string) =>
    `const ${name} ${type ? `:${type}` : ``} = ${value ?? ``}`

  export const field = (
    name: string,
    value: string | TermObject,
    options?: { tsDoc?: string | null; optional?: boolean; readonly?: boolean },
  ) => {
    const tsDoc = options?.tsDoc ? Str.Code.TSDoc.format(options.tsDoc) + `\n` : ``
    const readonly = options?.readonly ? `readonly ` : ``
    const optional = options?.optional ? `?` : ``
    const type_ = typeof value === `string` ? value : Str.Code.TS.TermObject.termObject(value)
    return `${tsDoc}${readonly}${name}${optional}: ${type_}`
  }

  export const optionalField = (name: string, type: string) => field(name, type, { optional: true })

  export const objectFromEntries = (entries: readonly (readonly [string, string])[]) =>
    objectFrom(Object.fromEntries(entries.map(([name, type]) => [name, { type }])))

  export const objectFrom = (
    objectSpec: Record<
      string,
      null | string | boolean | number | { type: null | string | boolean | number; optional?: boolean; tsdoc?: string }
    >,
  ) => {
    return Str.Code.TS.objectFromFields(
      Str.Code.TS.fields(
        Object.entries(objectSpec).map(([name, spec]) =>
          [name, spec && typeof spec === `object` ? spec : { type: spec }] as const
        )
          .map((
            [name, spec],
          ) => field(name, String(spec.type), { optional: spec.optional })),
      ),
    )
  }

  export const list = (type: string) => `Array<${type}>`

  export const esmExport = (thing: string) => {
    return `export ${thing}`
  }

  export const group = (...content: string[]) => content.join(`\n`)

  export const commentSectionTitle = (title: string) => {
    const lineSize = 60
    const line = `-`.repeat(lineSize)
    const titlePrefixSpace = ` `.repeat(Math.round(lineSize / 2) - Math.round(title.length / 2))
    const titleSuffixSpace = ` `.repeat(lineSize - (titlePrefixSpace.length + title.length))
    return `\n\n// ${line} //\n// ${titlePrefixSpace + title + titleSuffixSpace} //\n// ${line} //\n\n`
  }
}
