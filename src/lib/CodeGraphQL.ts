import { Arr, Obj, Str } from '@wollybeard/kit'
import { linesPrepend, linesTrim } from './tex/tex.js'

type FieldTuple = [k: string, v: string | null, tsDoc?: string | null]

export namespace CodeGraphQL {
  // ================================================================
  // GRAFFLE-SPECIFIC CODE
  // ================================================================

  /**
   * Format TSDoc/JSDoc comments with proper escaping and line prefixes.
   * Graffle-specific because it uses tex utilities for line processing.
   */
  export const TSDoc = (content: string | null): string => {
    return content === null ? `` : `/**\n${linesPrepend(`* `, linesTrim(content)) || `*`}\n*/`
  }

  // ----------------------------------------------------------------
  // 1. TERM OBJECT SYSTEM (~200 lines)
  // ----------------------------------------------------------------
  // Handles GraphQL schema → TypeScript object generation with directives

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

  const isFieldPrimitive = (value: unknown): value is TermPrimitive => {
    return Str.Type.is(value) || typeof value === `number` || typeof value === `boolean` || value === null
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
    return Str.Code.TS.block(
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
    return Str.Code.TS.block(termObjectFields(object))
  }

  export const termObjectFields = (object: TermObject | DirectiveTermObject): string =>
    Obj.entries(object)
      .map(([key, value]): [string, DirectiveField] => {
        value
        if (value === null) return [key, { $VALUE: null }]
        if (isDirectiveTermObject(value)) return [key, { $VALUE: directiveTermObject(value) }]
        if (isDirectiveField(value)) return [key, value]
        // dprint-ignore
        if (Str.Type.is(value) || typeof value === `number` || typeof value === `boolean`) return [key, {$VALUE: String(value)}]
        return [key, { $VALUE: termObject(value as any) }]
      })
      .map(([key, field]) => {
        return fromDirectiveField(key, field)
      })
      .join(`,\n`)

  const isFieldTuples = (value: unknown): value is TermFieldTuple[] => {
    return Array.isArray(value) && value.every(([key, _]) => Str.Type.is(key))
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

  export const termFieldFromTuple = (tuple: FieldTuple) => termField(tuple[0], tuple[1], { tsDoc: tuple[2] })

  export const termField = (
    key: string,
    value: string | undefined | null,
    options?: { tsDoc?: string | null; comma?: boolean },
  ) => {
    if (value === undefined || value === ``) return ``
    return `${options?.tsDoc ? `${options.tsDoc}\n` : ``}${key}: ${String(value)}${(options?.comma ?? true) ? `,` : ``}`
  }

  // ----------------------------------------------------------------
  // 2. RESERVED KEYWORD HANDLING (~120 lines)
  // ----------------------------------------------------------------
  // Uses renderName() to escape GraphQL names that collide with TypeScript keywords

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

  /**
   * Render a GraphQL name, escaping it if it's a reserved TypeScript keyword.
   *
   * @param type - GraphQL type name or type object
   * @returns Escaped name with `$` prefix if reserved, otherwise original name
   */
  export const renderName = (type: string): string => {
    if (reservedTypeScriptInterfaceNames.includes(type as any)) {
      // todo this could name clash with $ prefix imports.
      // either make imports use $$ or put the $ here in suffix.
      return `$${type}`
    }
    return type
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

  // ----------------------------------------------------------------
  // 3. RENDERNAME-AWARE TYPE BUILDERS (~80 lines)
  // ----------------------------------------------------------------
  // Wrappers around type generation with GraphQL name escaping

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
    const extends__ = Arr.ensure(extends_).filter(_ => Boolean(_))
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

  export const tsType = (name: string, type: string | TermObject) => {
    const type_ = typeof type === `string` ? type : termObject(type)
    return `type ${renderName(name)} = ${type_}`
  }

  export const tsNamespace = (name: string, content: string) => {
    return `namespace ${renderName(name)} ${Str.Code.TS.block(content)}`
  }

  // ----------------------------------------------------------------
  // 4. GRAPHQL-SPECIFIC HELPERS (~50 lines)
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
    const tsDoc = options?.tsDoc ? TSDoc(options.tsDoc) + `\n` : ``
    const readonly = options?.readonly ? `readonly ` : ``
    const optional = options?.optional ? `?` : ``
    const type_ = typeof value === `string` ? value : termObject(value)
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
