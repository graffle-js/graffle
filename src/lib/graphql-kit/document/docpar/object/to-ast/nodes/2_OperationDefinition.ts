import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import { parseType } from 'graphql'
import type { ObjectParserContext } from '../../context.js'
import { createOperationContext } from '../context.js'
import { type GraphQLPreOperationMapper } from '../mapper.js'
import { toAstSelectionSetRoot } from './3_GraffleSelectionSetRoot.js'
import { toAstValue } from './Value.js'

export const toAstOperationDefinition: GraphQLPreOperationMapper<
  GraphqlKit.Schema.SchemaDrivenDataMap.OutputObject,
  { operation: GraphqlKit.Document.Ast.OperationDefinitionNode; variables: GraphqlKit.Request.Variables },
  [
    operation: Select.Document.OperationNormalized,
    options?: ObjectParserContext,
  ]
> = (
  sddmNode,
  operation,
  options,
) => {
  const context = createOperationContext(options)

  const name = operation.name
    ? GraphqlKit.Document.Ast.Name({ value: operation.name })
    : undefined

  const selectionSet = toAstSelectionSetRoot(context, sddmNode, operation.selectionSet)

  const variableDefinitions = context.variables.data.map((captured) => {
    return GraphqlKit.Document.Ast.VariableDefinition({
      variable: GraphqlKit.Document.Ast.Variable({ name: GraphqlKit.Document.Ast.Name({ value: captured.name }) }),
      type: parseType(captured.type),
      defaultValue: captured.defaultValue !== undefined
        ? toAstValue(
          { ...context, value: { isEnum: captured.isEnum } },
          captured.sddmArgument,
          captured.defaultValue,
        ) as any
        : undefined,
    })
  })

  const graphqlOperation = GraphqlKit.Document.Ast.OperationDefinition({
    operation: operation.type,
    ...(name !== undefined && { name }),
    selectionSet,
    variableDefinitions,
    // todo support directives on operations ??? Check what this feature/capability is about
    // directives
  })

  const variables: GraphqlKit.Request.Variables = Object.fromEntries(context.variables.data.map(_ => {
    return [_.name, _.value as any]
  }))

  return {
    operation: graphqlOperation,
    variables,
  }
}
