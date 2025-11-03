import { Select } from '#src/docpar/object/Select/_.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import { type GraphQLPostOperationMapper } from '../mapper.js'
import { toGraphQLValue } from './Value.js'

export interface Argument {
  name: string
  value: Select.Arguments.ArgValue
}

export const toGraphQLArgument: GraphQLPostOperationMapper<
  SchemaDrivenDataMap.ArgumentOrInputField,
  GraphqlKit.Document.Ast.ArgumentNode,
  [arg: Argument]
> = (
  context,
  sddm,
  arg,
) => {
  // return GraphqlKit.Document.Ast.Variable({ name: GraphqlKit.Document.Ast.Name({ value: `abc` }) })
  const valueContext = { ...context, value: { isEnum: Select.Arguments.isEnumKey(arg.name) } }
  const value = toGraphQLValue(valueContext, sddm, arg.value)

  const name = GraphqlKit.Document.Ast.Name({ value: arg.name.replace(Select.Arguments.enumKeyPrefixPattern, ``) })

  return GraphqlKit.Document.Ast.Argument({
    name,
    value,
  })
}
