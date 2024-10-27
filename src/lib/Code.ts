import { renderName } from '../generator/helpers/render.js'
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
    fields?: FieldsInput
  }

  type FieldsInput = string | TermObject | (readonly [name: string, field: string | DirectiveField])[]

  export const tsInterface = (
    { name, parameters, extends: extends_, fields, tsDoc, export: export_ }: InterfaceDefinitionInput,
  ) => {
    const tsDoc_ = tsDoc ? TSDoc(tsDoc) + `\n` : ``
    const export__ = export_ === false ? `` : `export `
    const name_ = renderName(name)
    const typeParametersClause = tsTypeParameters(parameters ?? null)
    const extends__ = toArray(extends_).filter(_ => Boolean(_))
    const extends___ = extends__.length > 0
      ? ` extends ${extends__.join(`, `)}`
      : ``
    const block = typeof fields === `string`
      ? `{${fields}}`
      : Array.isArray(fields)
      ? termObject(Object.fromEntries(fields))
      : termObject(fields ?? {})
    return `${tsDoc_} ${export__} interface ${name_} ${typeParametersClause} ${extends___} ${block}`
  }

  export const esmExport = (thing: string) => {
    return `export ${thing}`
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

  export const reservedTypeScriptInterfaceNames = [
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
    `any`,
    `boolean`,
    `never`,
    `number`,
    `object`,
    `string`,
    `symbol`,
    `undefined`,
    `unknown`,
    `bigint`,
    `break`,
    `with`,
    `break`,
    `of`,
    `interface`,
  ]
}
