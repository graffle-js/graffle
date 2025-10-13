import { renderName } from '#src/generator/helpers/render.js'
import { Arr, Obj, Str } from '@wollybeard/kit'
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

  /**
   * Generate JSDoc comment with indentation applied to each line.
   * Useful for JSDoc inside interface blocks or nested structures.
   */
  export const TSDocIndented = (content: string | null, indent: string): string => {
    if (content === null) return ``
    return TSDoc(content).split('\n').map(line => `${indent}${line}`).join('\n')
  }

  /**
   * Escape user-provided content for safe inclusion in JSDoc comments.
   *
   * Escapes characters that could break JSDoc syntax:
   * - `*\/` - Ends the JSDoc comment prematurely
   * - `@tag` at line start - Could be interpreted as JSDoc tags
   *
   * @param content - User-provided text (e.g., GraphQL descriptions)
   * @returns Escaped content safe for JSDoc
   */
  export const escapeJSDocContent = (content: string | null | undefined): string | null => {
    if (content === null || content === undefined) return null

    return content
      // Escape */ to prevent closing the JSDoc comment
      .replace(/\*\//g, '* /')
      // Escape @ at line start to prevent unintended JSDoc tags
      // Only escape if followed by common tag names
      .replace(
        /^@(param|returns|deprecated|see|example|link|remarks|throws|since|alpha|beta|public|private|internal)/gm,
        '\\@$1',
      )
  }

  /**
   * Branded type for content marked as safe for JSDoc injection.
   * Create with {@link jsDocRaw}.
   */
  export interface JSDocRaw {
    readonly __jsDocSafe: true
    readonly content: string
  }

  /**
   * Mark content as safe for JSDoc (already escaped or intentionally raw).
   *
   * Use this for JSDoc tags, links, and other special syntax that should NOT be escaped.
   *
   * @example
   * ```ts
   * // Link will not be escaped
   * const link = Code.jsDocRaw(`{@link $Schema.${typeName}}`)
   * const doc = Code.jsdoc`Type: ${link}`
   * ```
   */
  export const jsDocRaw = (content: string): JSDocRaw => ({
    __jsDocSafe: true as const,
    content,
  })

  /**
   * Wrap value in markdown inline code (backticks).
   * Returns JSDocRaw so it won't be escaped in templates or tables.
   *
   * @example
   * ```ts
   * doc.table({
   *   'GraphQL Type': Code.markdownCode(arg.type.toString()),
   *   'Path': Code.markdownCode(`${parentType}.${field.name}`)
   * })
   * ```
   */
  export const markdownCode = (value: string): JSDocRaw => jsDocRaw(`\`${value}\``)

  /**
   * Create a markdown inline link.
   * Returns JSDocRaw so it won't be escaped in templates or tables.
   *
   * @example
   * ```ts
   * doc.table({
   *   'Type': Code.markdownLink(`$Schema.${typeName}`, typeName)
   * })
   * ```
   */
  export const markdownLink = (url: string, text?: string): JSDocRaw =>
    jsDocRaw(text ? `[${text}](${url})` : `[${url}](${url})`)

  /**
   * Generate a markdown table from key-value pairs.
   * Automatically filters out undefined/null values.
   *
   * Returns plain string (not JSDocRaw) - use within TSDoc() or doc builder.
   *
   * @example
   * ```ts
   * const table = Code.markdownTable({
   *   'Kind': '{@link ...}',
   *   'Fields': '10',
   *   'Optional': undefined  // filtered out
   * })
   * ```
   */
  export const markdownTable = (rows: Record<string, string | undefined | null>): string => {
    const entries = Object.entries(rows).filter(([_, value]) => value !== undefined && value !== null)
    if (entries.length === 0) return ''

    const lines: string[] = []
    lines.push(`| | |`)
    lines.push(`| - | - |`)
    for (const [key, value] of entries) {
      lines.push(`| **${key}** | ${value} |`)
    }
    return lines.join('\n')
  }

  /**
   * Structured JSDoc tag helpers.
   *
   * These helpers generate properly formatted JSDoc tags with automatic escaping.
   * All helpers return `JSDocRaw` (safe for injection) or `null` for graceful handling.
   *
   * @example
   * ```ts
   * Code.jsdoc`
   *   ${description}
   *   ${Code.jsDocTag.deprecated(reason)}
   *   ${Code.jsDocTag.see('https://example.com', 'Documentation')}
   * `
   * ```
   */
  export namespace jsDocTag {
    /**
     * Generate `@deprecated` tag with escaped reason.
     * Returns null if reason is null/undefined for graceful template handling.
     */
    export const deprecated = (reason: string | null | undefined): JSDocRaw | null => {
      if (!reason) return null
      return jsDocRaw(`@deprecated ${escapeJSDocContent(reason)}`)
    }

    /**
     * Generate `@see` tag with link.
     * Optionally includes display text.
     */
    export const see = (url: string, text?: string): JSDocRaw => {
      return jsDocRaw(text ? `@see {@link ${url} | ${text}}` : `@see {@link ${url}}`)
    }

    /**
     * Generate inline `{@link}` reference (not a block tag).
     * Use for inline documentation links.
     */
    export const link = (url: string, text?: string): JSDocRaw => {
      return jsDocRaw(text ? `{@link ${url} | ${text}}` : `{@link ${url}}`)
    }

    /**
     * Generate `@example` tag with code block.
     * Automatically wraps code in markdown code fence.
     */
    export const example = (code: string, lang: string = 'ts'): JSDocRaw => {
      return jsDocRaw(`@example\n\`\`\`${lang}\n${code}\n\`\`\``)
    }

    /**
     * Generate `@remarks` tag with escaped content.
     * Returns null if content is null/undefined.
     */
    export const remarks = (content: string | null | undefined): JSDocRaw | null => {
      if (!content) return null
      return jsDocRaw(`@remarks\n${escapeJSDocContent(content)}`)
    }

    /**
     * Generate `@param` tag with escaped description.
     */
    export const param = (name: string, description: string): JSDocRaw => {
      return jsDocRaw(`@param ${name} - ${escapeJSDocContent(description)}`)
    }

    /**
     * Generate `@returns` tag with escaped description.
     */
    export const returns = (description: string): JSDocRaw => {
      return jsDocRaw(`@returns ${escapeJSDocContent(description)}`)
    }
  }

  /**
   * JSDoc builder interface for imperative JSDoc construction.
   *
   * Provides a fluent API for building JSDoc with conditionals, loops, and tag helpers.
   */
  export interface JsDocBuilder {
    /**
     * Add a line to the JSDoc. Automatically escapes user content.
     * Use empty template for blank lines: `doc``\``
     */
    (strings: TemplateStringsArray, ...values: Array<string | number | JSDocRaw | null | undefined>): JsDocBuilder

    /**
     * Add content with auto-escaping. Skips if null/undefined.
     * Perfect for chaining with optional content.
     * @example
     * ```ts
     * doc
     *   .add(field.description)  // skips if null/undefined
     *   .add('# Info')
     * ```
     */
    add(content: string | null | undefined): JsDocBuilder

    /**
     * Add raw content without escaping. Skips if null/undefined.
     * Use for pre-escaped content or JSDoc syntax.
     * @example
     * ```ts
     * doc.addRaw(sdlSignature)  // skips if null/undefined
     * ```
     */
    addRaw(content: string | null | undefined): JsDocBuilder

    /**
     * Add a blank line.
     * @example
     * ```ts
     * doc
     *   .add('First paragraph')
     *   .blank()
     *   .add('Second paragraph')
     * ```
     */
    blank(): JsDocBuilder

    /**
     * Add raw content without escaping (already safe JSDocRaw content).
     * Returns builder for chaining.
     * @deprecated Use `.addRaw()` instead for consistent API
     */
    raw(content: string): JsDocBuilder

    /**
     * Add a markdown table from key-value pairs.
     * Automatically filters out undefined/null/empty-array values.
     *
     * **Value handling:**
     * - JSDocRaw values (from Code.markdownCode(), Code.jsdoc.tag.link(), etc.): Used directly, already safe
     * - Plain strings: Automatically escaped for JSDoc safety
     * - Arrays: Items joined with `, ` (each item handled by type)
     * - Empty arrays: Treated as undefined (filtered out)
     *
     * Returns builder for chaining.
     *
     * @example
     * ```ts
     * doc.table({
     *   'GraphQL Type': Code.markdownCode(arg.type.toString()),
     *   'Parent': Code.jsdoc.tag.link(`$Schema.${parentType.name}`),
     *   'Implements': interfaces.map(i => Code.jsdoc.tag.link(`$Schema.${i.name}`)),  // auto-joined
     *   'Description': userDescription  // auto-escaped
     * })
     * ```
     */
    table(rows: Record<string, string | JSDocRaw | Array<string | JSDocRaw> | undefined | null>): JsDocBuilder

    /**
     * Add a markdown code block with language syntax highlighting.
     * Skips if content is null/undefined.
     * @example
     * ```ts
     * doc.codeblock('graphql', `
     *   type User {
     *     id: ID!
     *   }
     * `)
     * ```
     */
    codeblock(lang: string, content: string | null | undefined): JsDocBuilder

    /**
     * Add `@deprecated` tag with escaped reason.
     * Returns builder for chaining. Skips if reason is null/undefined.
     */
    $deprecated(reason: string | null | undefined): JsDocBuilder

    /**
     * Add `@example` tag with code block.
     *
     * **Two modes:**
     * - Template mode (2 params): Returns template function for code content
     * - Direct mode (3 params): Accepts code string directly and returns builder
     *
     * @example
     * ```ts
     * // Template mode
     * doc.$example('Basic usage', 'ts')`
     *   const result = await api.query()
     * `
     *
     * // Direct mode
     * const code = 'const x = 1'
     * doc.$example('Basic usage', 'ts', code)
     * ```
     */
    $example(label?: string, lang?: string): (strings: TemplateStringsArray, ...values: any[]) => JsDocBuilder
    $example(label: string | undefined, lang: string, code: string): JsDocBuilder

    /**
     * Add `@see` tag with link.
     * Returns builder for chaining.
     */
    $see(url: string, text?: string): JsDocBuilder

    /**
     * Generate inline `{@link}` reference for embedding in templates.
     * Returns JSDocRaw (not the builder).
     */
    $link(url: string, text?: string): JSDocRaw

    /**
     * Add `@remarks` tag with content from template literal.
     * Returns builder for chaining. Skips if content is empty.
     */
    $remarks(strings: TemplateStringsArray, ...values: any[]): JsDocBuilder

    /**
     * Build the final JSDoc string with whitespace normalization.
     */
    build(): string
  }

  /**
   * JSDoc template function type with builder property.
   */
  export interface JsDocTemplate {
    /**
     * Tagged template for building JSDoc content with automatic escaping.
     *
     * By default, interpolated values are escaped to prevent JSDoc injection.
     * Use {@link jsDocRaw} to inject pre-escaped or intentionally raw content.
     *
     * @example
     * ```ts
     * // User content is automatically escaped
     * const doc = Code.jsdoc`
     *   ${field.description}
     *
     *   @deprecated ${field.deprecationReason}
     * `
     *
     * // Use jsDocRaw for links and tags
     * const link = Code.jsDocRaw(`{@link $Schema.User}`)
     * const doc = Code.jsdoc`
     *   Field type: ${link}
     *   Description: ${field.description}
     * `
     * ```
     */
    (strings: TemplateStringsArray, ...values: Array<string | number | JSDocRaw | null | undefined>): string

    /**
     * Create a new JSDoc builder for imperative construction.
     * Perfect for JSDoc generation with conditionals, loops, and complex logic.
     */
    builder: () => JsDocBuilder

    /**
     * Create a JSDoc generator function from a builder callback.
     * Automatically calls `.build()` and returns the result.
     *
     * @example
     * ```ts
     * export const getUnionDoc = Code.jsdoc.factory<[type: Grafaid.Schema.UnionType]>((doc, type) => {
     *   const members = type.getTypes()
     *   const unionLink = Code.jsdoc.tag.link('...', 'Union')
     *
     *   doc`Selection set for ${unionLink}.`
     *   doc``
     *   doc.add(type.description)
     *   doc``
     *   doc.table({ 'Members': `${members.length}` })
     * })
     *
     * // Usage: getUnionDoc(type) -> string
     * ```
     */
    factory: <$Args extends any[]>(fn: (doc: JsDocBuilder, ...args: $Args) => void) => (...args: $Args) => string

    /**
     * JSDoc tag helpers for generating properly formatted tags.
     */
    tag: typeof jsDocTag
  }

  /**
   * Create a new JSDoc builder for imperative construction.
   *
   * Perfect for JSDoc generation with conditionals, loops, and complex logic.
   *
   * @example
   * ```ts
   * const doc = Code.jsdoc.builder()
   *
   * doc`Access to ${typeLink} root methods.`
   * doc``  // empty line
   *
   * if (showExample) {
   *   doc.$example('Basic usage', 'ts')`
   *     const result = await api.query()
   *   `
   * }
   *
   * doc.$deprecated`Use newMethod() instead`
   *
   * return doc.build()
   * ```
   */
  const builderFactory = (): JsDocBuilder => {
    const lines: string[] = []

    const addLine = (content: string) => {
      lines.push(content)
    }

    // Process template with escaping (same logic as jsdoc template)
    const processTemplate = (
      strings: TemplateStringsArray,
      values: Array<string | number | JSDocRaw | null | undefined>,
    ): string => {
      let result = ''
      for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i < values.length) {
          const value = values[i]
          if (value === null || value === undefined) {
            // Skip nullish values
          } else if (typeof value === 'object' && '__jsDocSafe' in value) {
            // Already safe - inject directly
            result += value.content
          } else {
            // Escape user content
            result += escapeJSDocContent(String(value)) ?? ''
          }
        }
      }
      return result
    }

    // Main template function
    const builderFn = (
      strings: TemplateStringsArray,
      ...values: Array<string | number | JSDocRaw | null | undefined>
    ): JsDocBuilder => {
      const content = processTemplate(strings, values)
      addLine(content)
      return builderFn
    }

    builderFn.add = (content: string | null | undefined) => {
      if (content !== null && content !== undefined) {
        const escaped = escapeJSDocContent(content)
        if (escaped !== null) {
          addLine(escaped)
        }
      }
      return builderFn
    }

    builderFn.addRaw = (content: string | null | undefined) => {
      if (content !== null && content !== undefined) {
        addLine(content)
      }
      return builderFn
    }

    builderFn.blank = () => {
      addLine('')
      return builderFn
    }

    builderFn.raw = (content: string) => {
      addLine(content)
      return builderFn
    }

    builderFn.table = (rows: Record<string, string | JSDocRaw | Array<string | JSDocRaw> | undefined | null>) => {
      const entries = Object.entries(rows).filter(
        (entry): entry is [string, string | JSDocRaw | Array<string | JSDocRaw>] => {
          const value = entry[1]
          // Filter out undefined, null, and empty arrays
          return value !== undefined && value !== null && !(Array.isArray(value) && value.length === 0)
        },
      )
      if (entries.length === 0) return builderFn

      addLine(`| | |`)
      addLine(`| - | - |`)
      for (const [key, value] of entries) {
        let valueStr: string

        if (Array.isArray(value)) {
          // Handle array: process each item and join with comma-space
          valueStr = value.map(item => {
            if (typeof item === 'object' && '__jsDocSafe' in item) {
              return item.content
            } else {
              return escapeJSDocContent(item) ?? ''
            }
          }).join(', ')
        } else if (typeof value === 'object' && '__jsDocSafe' in value) {
          // Handle JSDocRaw: use content directly (already safe)
          valueStr = value.content
        } else {
          // Handle plain string: auto-escape for safety
          valueStr = escapeJSDocContent(value) ?? ''
        }

        addLine(`| **${key}** | ${valueStr} |`)
      }
      return builderFn
    }

    builderFn.codeblock = (lang: string, content: string | null | undefined) => {
      if (content !== null && content !== undefined && content.trim()) {
        addLine(`\`\`\`${lang}`)
        addLine(content)
        addLine(`\`\`\``)
      }
      return builderFn
    }

    // Attach tag helper methods
    builderFn.$deprecated = (reason: string | null | undefined) => {
      if (reason) {
        addLine(`@deprecated ${escapeJSDocContent(reason)}`)
      }
      return builderFn
    }

    builderFn.$example = ((label?: string, lang?: string, code?: string): any => {
      // Direct mode: 3 params with code string
      if (code !== undefined && typeof code === 'string') {
        addLine(label ? `@example ${label}` : `@example`)
        addLine(`\`\`\`${lang ?? 'ts'}`)
        code.split('\n').forEach(line => addLine(line))
        addLine(`\`\`\``)
        return builderFn
      }

      // Template mode: return template function
      return (strings: TemplateStringsArray, ...values: any[]) => {
        const codeContent = processTemplate(strings as any, values)
        addLine(label ? `@example ${label}` : `@example`)
        addLine(`\`\`\`${lang ?? 'ts'}`)
        codeContent.split('\n').forEach(line => addLine(line))
        addLine(`\`\`\``)
        return builderFn
      }
    }) as JsDocBuilder['$example']

    builderFn.$see = (url: string, text?: string) => {
      addLine(text ? `@see {@link ${url} | ${text}}` : `@see {@link ${url}}`)
      return builderFn
    }

    builderFn.$link = (url: string, text?: string) => {
      return jsDocRaw(text ? `{@link ${url} | ${text}}` : `{@link ${url}}`)
    }

    builderFn.$remarks = (strings: TemplateStringsArray, ...values: any[]) => {
      const content = processTemplate(strings as any, values)
      if (content.trim()) {
        addLine(`@remarks`)
        addLine(content)
      }
      return builderFn
    }

    builderFn.build = () => {
      // Apply same whitespace cleanup as jsdoc template
      const trimmedLines: string[] = []
      let lastWasEmpty = false

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]!.trimStart()
        const isEmpty = line === ''

        // Skip leading empty lines
        if (isEmpty && trimmedLines.length === 0) continue

        // Collapse consecutive empty lines into one
        if (isEmpty && lastWasEmpty) continue

        trimmedLines.push(line)
        lastWasEmpty = isEmpty
      }

      // Remove trailing empty lines
      while (trimmedLines.length > 0 && trimmedLines[trimmedLines.length - 1] === '') {
        trimmedLines.pop()
      }

      return trimmedLines.join('\n')
    }

    return builderFn as JsDocBuilder
  }

  /**
   * Tagged template for building JSDoc content with automatic escaping.
   * Also provides `.builder()` for imperative JSDoc construction and `.tag` for tag helpers.
   */
  export const jsdoc = (() => {
    const jsDocTemplateFn = (
      strings: TemplateStringsArray,
      ...values: Array<string | number | JSDocRaw | null | undefined>
    ): string => {
      let result = ''
      for (let i = 0; i < strings.length; i++) {
        result += strings[i]
        if (i < values.length) {
          const value = values[i]
          if (value === null || value === undefined) {
            // Skip nullish values
          } else if (typeof value === 'object' && '__jsDocSafe' in value) {
            // Already safe - inject directly
            result += value.content
          } else {
            // Escape user content
            result += escapeJSDocContent(String(value)) ?? ''
          }
        }
      }

      // Clean up: remove leading/trailing whitespace lines and trim each line
      const lines = result.split('\n')
      const trimmedLines: string[] = []
      let lastWasEmpty = false

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i]!.trimStart()
        const isEmpty = line === ''

        // Skip leading empty lines
        if (isEmpty && trimmedLines.length === 0) continue

        // Collapse consecutive empty lines into one
        if (isEmpty && lastWasEmpty) continue

        trimmedLines.push(line)
        lastWasEmpty = isEmpty
      }

      // Remove trailing empty lines
      while (trimmedLines.length > 0 && trimmedLines[trimmedLines.length - 1] === '') {
        trimmedLines.pop()
      }

      return trimmedLines.join('\n')
    }

    // Attach builder and tag namespace as properties
    jsDocTemplateFn.builder = builderFactory
    jsDocTemplateFn.tag = jsDocTag
    jsDocTemplateFn.factory = <$Args extends any[]>(fn: (doc: JsDocBuilder, ...args: $Args) => void) => {
      return (...args: $Args): string => {
        const doc = builderFactory()
        fn(doc, ...args)
        return doc.build()
      }
    }

    return jsDocTemplateFn as JsDocTemplate
  })()

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
