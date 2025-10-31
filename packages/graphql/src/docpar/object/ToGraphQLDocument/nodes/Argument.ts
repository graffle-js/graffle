import { Document } from '#~/document/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import { Select } from '../../Select/_.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { toGraphQLValue } from './Value.js'

export interface Argument {
  name: string
  value: Select.Arguments.ArgValue
}

export const toGraphQLArgument: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  Document.Ast.ArgumentNode,
  [arg: Argument]
> = (
  context,
  sddm,
  arg,
) => {
  // return Document.Ast.Variable({ name: Document.Ast.Name({ value: `abc` }) })
  const valueContext = { ...context, value: { isEnum: Select.Arguments.isEnumKey(arg.name) } }
  const value = toGraphQLValue(valueContext, sddm, arg.value)

  const name = Document.Ast.Name({ value: arg.name.replace(Select.Arguments.enumKeyPrefixPattern, ``) })

  return Document.Ast.Argument({
    name,
    value,
  })
}
