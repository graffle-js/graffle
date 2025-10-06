import { renderName } from '#src/generator/helpers/render.js'
import { entries, isString, toArray } from './prelude.js'
import { linesPrepend, linesTrim } from './tex/tex.js'

type FieldTuple = [k: string, v: string | null, tsDoc?: string | null]

export namespace Code {
  export interface DirectiveTermObject {
    $spread?: string[]
    $fields?: TermObject | DirectiveTermObject
    $literal?: string
  }

  export type TermPrimitive = null | string | number | boolean

  export type DirectiveTermObjectLike<$Fields extends null | TermObject | DirectiveTermObject = null> = {
    $spread?: string[]
    $literal?: string
  } & ($Fields extends null ? { $fields?: TermObject | DirectiveTermObject } : { $fields: $Fields })

  const isDirectiveTermObject = (value: unknown): value is DirectiveTermObject => {
    if (typeof value !== `object` || value === null) return false
    return Object.keys(value).some(key => key === `$spread` || key === `$fields` || key === `$fieldsMerge`)
  }

  // Field

  const isFieldPrimitive = (value: unknown): value is TermPrimitive => {
    return isString(value) || typeof value === `number` || typeof value === `boolean` || value === null
  }

  type FieldValue =
    | DirectiveField
    | FieldValueNonDirective

  type FieldValueNonDirective = TermPrimitive | TermObjectLike

  type TermFieldTuple = readonly [string, FieldValue]

  interface DirectiveField {
    $TS_DOC?: string | null
    $OPTIONAL?: boolean
    $VALUE: FieldValueNonDirective
  }

  const isDirectiveField = (value: unknown): value is DirectiveField => {
    if (typeof value !== `object` || value === null) return false
    return DirectiveFieldKeys.$VALUE in value
  }

  export const objectField$ = (input: {
    tsDoc?: null | string
    optional?: boolean
    value: FieldValueNonDirective
  }): DirectiveField => {
    return {
      $TS_DOC: input.tsDoc,
      $OPTIONAL: input.optional,
      $VALUE: input.value,
    }
  }

  const DirectiveFieldKeys = {
    $TS_DOC: `$TS_DOC`,
    $VALUE: `$VALUE`,
  }

  export interface TermObject {
    [key: string]: FieldValue
  }

  export type TermObjectOf<T> = {
    [key: string]: T
  }

  export const directiveTermObject = (objectWith: DirectiveTermObject): string => {
    const spreads = (objectWith.$spread ?? []).map(spread => `...${spread},`)
    return block(
      spreads.join(`\n`)
        + `\n`
        + termObjectFields(objectWith.$fields ?? {})
        + (objectWith.$literal ? `\n${objectWith.$literal}` : ``),
    )
  }

  type TermObjectLike = TermObject | DirectiveTermObject | TermFieldTuple[]

  export const termObject = (object: TermObjectLike): string => {
    if (Array.isArray(object)) return termObject(Object.fromEntries(object))
    if (isDirectiveTermObject(object)) return directiveTermObject(object)
    return block(termObjectFields(object))
  }

  export const termObjectFields = (object: TermObject | DirectiveTermObject): string =>
    entries(object)
      .map(([key, value]): [string, DirectiveField] => {
        value
        if (value === null) return [key, { $VALUE: null }]
        if (isDirectiveTermObject(value)) return [key, { $VALUE: directiveTermObject(value) }]
        if (isDirectiveField(value)) return [key, value]
        // dprint-ignore
        if (isString(value) || typeof value === `number` || typeof value === `boolean`) return [key, {$VALUE: String(value)}]
        return [key, { $VALUE: termObject(value as any) }]
      })
      .map(([key, field]) => {
        return fromDirectiveField(key, field)
      })
      .join(`,\n`)

  const isFieldTuples = (value: unknown): value is TermFieldTuple[] => {
    return Array.isArray(value) && value.every(([key, _]) => isString(key))
  }

  const termObjectField = (field: FieldValueNonDirective): string => {
    if (isFieldTuples(field)) return termObjectField(Object.fromEntries(field))
    if (isFieldPrimitive(field)) return String(field)
    return termObject(field)
  }

  export const fromDirectiveField = (key: string, field: DirectiveField): string => {
    const tsDoc = field.$TS_DOC ? TSDoc(field.$TS_DOC) + `\n` : ``
    const optional = field.$OPTIONAL ? `?` : ``
    const value = termObjectField(field.$VALUE)
    return `${tsDoc}${key}${optional}: ${value}`
  }
  export const termList = (value: string[]) => `[${value.join(`, `)}]`
  export const termFieldFromTuple = (tuple: FieldTuple) => Code.termField(tuple[0], tuple[1], { tsDoc: tuple[2] })
  export const termField = (
    key: string,
    value: string | undefined | null,
    options?: { tsDoc?: string | null; comma?: boolean },
  ) => {
    if (value === undefined || value === ``) return ``
    return `${options?.tsDoc ? `${options.tsDoc}\n` : ``}${key}: ${String(value)}${(options?.comma ?? true) ? `,` : ``}`
  }
  export const termConst = (name: string, value?: string) => termConstTyped(name, null, value)
  export const termConstTyped = (name: string, type: string | null, value?: string) =>
    `const ${name} ${type ? `:${type}` : ``} = ${value ?? ``}`

  export const field = (
    name: string,
    value: string | TermObject,
    options?: { tsDoc?: string | null; optional?: boolean },
  ) => {
    const tsDoc = options?.tsDoc ? TSDoc(options.tsDoc) + `\n` : ``
    const optional = options?.optional ? `?` : ``
    const type_ = typeof value === `string` ? value : termObject(value)
    return `${tsDoc}${name}${optional}: ${type_}`
  }
  export const nullable = (type: string) => `${type} | null`
  export const union = (name: string, types: string[]) => `type ${name} =\n| ${Code.tsUnionItems(types)}`
  export const tsUnionItems = (types: (string | null)[]) => types.filter(_ => _ !== null).join(`\n| `)
  export const tsTuple = (types: string[]) => termList(types)
  export const list = (type: string) => `Array<${type}>`
  export const optionalField = (name: string, type: string) => Code.field(name, type, { optional: true })
  export const fields = (fieldTypes: string[]) => fieldTypes.join(`\n`)
  export const intersection = (a: string, b: string) => `${a} & ${b}`
  export const object = (fields: string) => `{\n${fields}\n}`

  export const objectFromEntries = (entries: readonly (readonly [string, string])[]) =>
    Code.objectFrom(Object.fromEntries(entries.map(([name, type]) => [name, { type }])))
  export const objectFrom = (
    object: Record<
      string,
      null | string | boolean | number | { type: null | string | boolean | number; optional?: boolean; tsdoc?: string }
    >,
  ) => {
    return Code.object(
      Code.fields(
        Object.entries(object).map(([name, spec]) =>
          [name, spec && typeof spec === `object` ? spec : { type: spec }] as const
        )
          .map((
            [name, spec],
          ) => Code.field(name, String(spec.type), { optional: spec.optional })),
      ),
    )
  }

  export const tsType = (name: string, type: string | TermObject) => {
    const type_ = typeof type === `string` ? type : termObject(type)
    return `type ${renderName(name)} = ${type_}`
  }

  /**
   * Export a declaration, handling reserved keywords by using re-export syntax.
   * For reserved keywords: creates internal declaration + re-exports with original name.
   * For normal names: uses direct export.
   *
   * @param isType - Whether this is a type export (true) or value export (false)
   * @returns A function that takes (name, declaration) and returns the export string
   */
  export const exportWithKeywordHandling = (isType: boolean = true) => (name: string, declaration: string) => {
    const isReserved = reservedTypeScriptInterfaceNames.includes(name as any)

    if (isReserved) {
      const escapedName = renderName(name)
      const kindPrefix = isType ? 'type ' : ''
      // Only export the alias, not the escaped interface itself
      return `${declaration}\nexport { ${kindPrefix}${escapedName} as ${name} }`
    } else {
      return `export ${declaration}`
    }
  }

  /**
   * Export a type with keyword handling.
   */
  export const exportTypeWithKeywordHandling = exportWithKeywordHandling(true)

  /**
   * Export a value with keyword handling.
   */
  export const exportValueWithKeywordHandling = exportWithKeywordHandling(false)

  /**
   * Export a type alias, handling reserved keywords automatically.
   */
  export const tsTypeExport = (name: string, type: string | TermObject) => {
    const escapedName = renderName(name)
    const type_ = typeof type === `string` ? type : termObject(type)
    return exportTypeWithKeywordHandling(name, `type ${escapedName} = ${type_}`)
  }

  /**
   * Export an interface, handling reserved keywords by exporting with escaped name + alias.
   * For reserved keywords: exports as `export interface $name { ... }\nexport { type $name as name }`
   * For normal names: exports as `export interface name { ... }`
   */
  export const tsInterfaceExport = (name: string, interfaceDeclaration: string) => {
    const escapedName = renderName(name)
    const isReserved = escapedName !== name

    if (isReserved) {
      // Export the interface with the escaped name, then add alias export
      const withExport = interfaceDeclaration.includes('export ')
        ? interfaceDeclaration
        : `export ${interfaceDeclaration}`
      return `${withExport}\nexport { type ${escapedName} as ${name} }`
    } else {
      // Normal name - just add export if needed
      return interfaceDeclaration.includes('export ')
        ? interfaceDeclaration
        : `export ${interfaceDeclaration}`
    }
  }

  /**
   * Export both a const and type with the same name, handling reserved keywords.
   *
   * This is for the dual export pattern where a value and its inferred type share the same name.
   * For reserved keywords, uses: `const $name = value; type $name = typeof value; export { $name as name }`
   * For safe names, uses: `export const name = value; export type name = typeof value`
   *
   * @param input - The const and type declarations
   * @returns Object with exported/internal names and generated code
   */
  export interface DualExportInput {
    name: string
    const: {
      value: string
      tsDoc?: string | null
    }
    type: {
      type: string
      tsDoc?: string | null
    }
  }

  export interface DualExportResult {
    exportedName: string
    internalName: string
    code: string
  }

  export const dualExport = (input: DualExportInput): DualExportResult => {
    const escapedName = renderName(input.name)
    const isReserved = escapedName !== input.name

    const constTsDoc = input.const.tsDoc ? TSDoc(input.const.tsDoc) + `\n` : ``
    const typeTsDoc = input.type.tsDoc ? TSDoc(input.type.tsDoc) + `\n` : ``

    let code: string

    if (isReserved) {
      // Reserved name - use dual export pattern
      code = [
        `${constTsDoc}const ${escapedName} = ${input.const.value}`,
        `${typeTsDoc}type ${escapedName} = ${input.type.type}`,
        `export { ${escapedName} as ${input.name} }`,
      ].join(`\n`)
    } else {
      // Safe name - use direct exports
      code = [
        `${constTsDoc}export const ${input.name} = ${input.const.value}`,
        `${typeTsDoc}export type ${input.name} = ${input.type.type}`,
      ].join(`\n`)
    }

    return {
      exportedName: input.name,
      internalName: escapedName,
      code,
    }
  }

  type TypeParametersInput = string | null | (string | null)[]

  const tsTypeParameters = (typeParameters: TypeParametersInput): string => {
    if (typeParameters === null) return ``
    if (Array.isArray(typeParameters) && typeParameters.length === 0) return ``
    return `<${toArray(typeParameters).filter(_ => _ !== null).join(`, `)}>`
  }

  type ExtendsClauseInput = string | null | (string | null)[]

  interface AliasDefinitionInput extends TypeDefinitionInput {
    type: string | TermObject
  }

  export const tsAlias$ = ({ name, parameters, type, tsDoc, export: export_ }: AliasDefinitionInput) => {
    const tsDoc_ = tsDoc ? TSDoc(tsDoc) + `\n` : ``
    const export__ = export_ === false ? `` : `export `
    const name_ = renderName(name)
    const typeParametersClause = tsTypeParameters(parameters ?? null)
    const type_ = typeof type === `string` ? type : termObject(type)
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
    const tsDoc_ = tsDoc ? TSDoc(tsDoc) + `\n` : ``
    const name_ = renderName(name)
    const typeParametersClause = tsTypeParameters(parameters ?? null)
    const extends__ = toArray(extends_).filter(_ => Boolean(_))
    const extends___ = extends__.length > 0
      ? ` extends ${extends__.join(`, `)}`
      : ``
    const block_ = typeof block === `string`
      ? `{${block}}`
      : Array.isArray(block)
      ? termObject(Object.fromEntries(block))
      : termObject(block ?? {})

    const interfaceDeclaration = `interface ${name_} ${typeParametersClause} ${extends___} ${block_}`

    // Handle export with automatic keyword aliasing
    if (export_ === false) {
      return tsDoc_ + interfaceDeclaration
    }

    const isReserved = reservedTypeScriptInterfaceNames.includes(name as any)
    if (isReserved) {
      // Don't export the interface directly, only export via alias
      return `${tsDoc_}${interfaceDeclaration}\nexport { type ${name_} as ${name} }`
    } else {
      return `${tsDoc_}export ${interfaceDeclaration}`
    }
  }

  export const esmExport = (thing: string) => {
    return `export ${thing}`
  }

  /**
   * Generate a re-export statement.
   * @param what - What to re-export ('*', 'type *', or specific names)
   * @param from - The module path to re-export from
   * @deprecated Use reexportAll, reexportNamespace, or reexportNamed instead
   */
  export const reexportFrom = (what: string, from: string) => {
    return `export ${what} from '${from}'`
  }

  /**
   * Re-export all exports from a module.
   * @example
   * // export * from './path'
   * reexportAll({ from: './path' })
   * // export type * from './path'
   * reexportAll({ from: './path', type: true })
   */
  export const reexportAll = (input: {
    from: string
    type?: boolean
  }): string => {
    const typePrefix = input.type ? 'type ' : ''
    return `export ${typePrefix}* from '${input.from}'`
  }

  /**
   * Re-export all exports as a namespace.
   * @example
   * // export * as Name from './path'
   * reexportNamespace({ as: 'Name', from: './path' })
   * // export type * as Name from './path'
   * reexportNamespace({ as: 'Name', from: './path', type: true })
   */
  export const reexportNamespace = (input: {
    as: string
    from: string
    type?: boolean
  }): string => {
    const typePrefix = input.type ? 'type ' : ''
    return `export ${typePrefix}* as ${input.as} from '${input.from}'`
  }

  /**
   * Re-export named exports from a module.
   * Supports simple names, arrays, and aliased names.
   * @example
   * // export { Name } from './path'
   * reexportNamed({ names: 'Name', from: './path' })
   * // export { a, b, c } from './path'
   * reexportNamed({ names: ['a', 'b', 'c'], from: './path' })
   * // export { oldName as newName } from './path'
   * reexportNamed({ names: { oldName: 'newName' }, from: './path' })
   * // export type { Name } from './path'
   * reexportNamed({ names: 'Name', from: './path', type: true })
   */
  export const reexportNamed = (input: {
    names: string | string[] | Record<string, string>
    from: string
    type?: boolean
  }): string => {
    const typePrefix = input.type ? 'type ' : ''

    let namesStr: string
    if (typeof input.names === 'string') {
      namesStr = input.names
    } else if (Array.isArray(input.names)) {
      namesStr = input.names.join(', ')
    } else {
      // Object format: { oldName: 'newName' }
      namesStr = Object.entries(input.names)
        .map(([oldName, newName]) => `${oldName} as ${newName}`)
        .join(', ')
    }

    return `export ${typePrefix}{ ${namesStr} } from '${input.from}'`
  }

  /**
   * Convenience: Re-export all type exports from a module.
   * @example reexportAllTypes('./types') // export type * from './types'
   */
  export const reexportAllTypes = (from: string): string => reexportAll({ from, type: true })

  /**
   * Import all exports as a namespace.
   * @example
   * // import * as Name from './path'
   * importAll({ as: 'Name', from: './path' })
   * // import type * as Name from './path'
   * importAll({ as: 'Name', from: './path', type: true })
   */
  export const importAll = (input: {
    as: string
    from: string
    type?: boolean
  }): string => {
    const typePrefix = input.type ? 'type ' : ''
    return `import ${typePrefix}* as ${input.as} from '${input.from}'`
  }

  /**
   * Import named exports from a module.
   * Supports simple names, arrays, and aliased names.
   * @example
   * // import { Name } from './path'
   * importNamed({ names: 'Name', from: './path' })
   * // import { a, b, c } from './path'
   * importNamed({ names: ['a', 'b', 'c'], from: './path' })
   * // import { oldName as newName } from './path'
   * importNamed({ names: { oldName: 'newName' }, from: './path' })
   * // import type { Name } from './path'
   * importNamed({ names: 'Name', from: './path', type: true })
   */
  export const importNamed = (input: {
    names: string | string[] | Record<string, string>
    from: string
    type?: boolean
  }): string => {
    const typePrefix = input.type ? 'type ' : ''

    let namesStr: string
    if (typeof input.names === 'string') {
      namesStr = input.names
    } else if (Array.isArray(input.names)) {
      namesStr = input.names.join(', ')
    } else {
      // Object format: { oldName: 'newName' }
      namesStr = Object.entries(input.names)
        .map(([oldName, newName]) => `${oldName} as ${newName}`)
        .join(', ')
    }

    return `import ${typePrefix}{ ${namesStr} } from '${input.from}'`
  }

  export const tsNamespace = (name: string, content: string) => {
    return `namespace ${renderName(name)} ${Code.object(content)}`
  }
  // term or type
  export const propertyAccess = (object: string, name: string) => `${object}.${name}`
  export const string = (str: string) => `"${str}"`
  export const block = (content: string) => `{\n${content}\n}`
  export const boolean = (value: boolean) => value ? `true` : `false`
  export const TSDoc = (content: string | null): string => {
    return content === null ? `` : `/**\n${linesPrepend(`* `, linesTrim(content)) || `*`}\n*/`
  }

  export const group = (...content: string[]) => content.join(`\n`)
  export const commentSectionTitle = (title: string) => {
    const lineSize = 60
    const line = `-`.repeat(lineSize)
    const titlePrefixSpace = ` `.repeat(Math.round(lineSize / 2) - Math.round(title.length / 2))
    const titleSuffixSpace = ` `.repeat(lineSize - (titlePrefixSpace.length + title.length))
    return `\n\n// ${line} //\n// ${titlePrefixSpace + title + titleSuffixSpace} //\n// ${line} //\n\n`
  }

  // JavaScript reserved keywords - cannot be used as identifiers in any context
  const reservedJavaScriptKeywords = [
    `break`,
    `case`,
    `catch`,
    `class`,
    `const`,
    `continue`,
    `debugger`,
    `default`,
    `delete`,
    `do`,
    `else`,
    `enum`,
    `export`,
    `extends`,
    `false`,
    `finally`,
    `for`,
    `function`,
    `if`,
    `import`,
    `in`,
    `instanceof`,
    `new`,
    `null`,
    `return`,
    `super`,
    `switch`,
    `this`,
    `throw`,
    `true`,
    `try`,
    `typeof`,
    `var`,
    `void`,
    `while`,
    `with`,
    `implements`,
    `interface`,
    `let`,
    `package`,
    `private`,
    `protected`,
    `public`,
    `static`,
    `yield`,
  ] as const

  // TypeScript type keywords - would shadow built-in types if used as type names
  const reservedTypeScriptTypeNames = [
    `any`,
    `boolean`,
    `bigint`,
    `never`,
    `number`,
    `object`,
    `string`,
    `symbol`,
    `undefined`,
    `unknown`,
    `void`,
  ] as const

  // Combined list for general identifier checking (type and value contexts)
  export const reservedTypeScriptInterfaceNames = [
    ...reservedJavaScriptKeywords,
    ...reservedTypeScriptTypeNames,
    `of`, // Iterator keyword
  ]
}
