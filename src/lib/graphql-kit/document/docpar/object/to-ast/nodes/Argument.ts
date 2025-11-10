import { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import { Ast } from '../../../../ast/_.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { toAstValue } from './Value.js'

export interface Argument {
  name: string
  value: Select.Arguments.ArgValue
}

export const toAstArgument: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  Ast.ArgumentNode,
  [arg: Argument]
> = (
  context,
  sddm,
  arg,
) => {
  // return Ast.Variable({ name: Ast.Name({ value: `abc` }) })
  const valueContext = { ...context, value: { isEnum: Select.Arguments.isEnumKey(arg.name) } }
  const value = toAstValue(valueContext, sddm, arg.value)

  const name = Ast.Name({ value: arg.name.replace(Select.Arguments.enumKeyPrefixPattern, ``) })

  return Ast.Argument({
    name,
    value,
  })
}
