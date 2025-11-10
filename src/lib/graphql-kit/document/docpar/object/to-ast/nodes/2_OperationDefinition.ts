import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import { parseType } from 'graphql'
import { Request } from '../../../../../request/_.js'
import { SchemaDrivenDataMap } from '../../../../../schema/sddm/_.js'
import { Ast } from '../../../../ast/_.js'
import type { ObjectParserContext } from '../../context.js'
import { createOperationContext } from '../context.js'
import { type GraphQLPreOperationMapper } from '../mapper.js'
import { toAstSelectionSetRoot } from './3_GraffleSelectionSetRoot.js'
import { toAstValue } from './Value.js'

export const toAstOperationDefinition: GraphQLPreOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  { operation: Ast.OperationDefinitionNode; variables: Request.Variables },
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
    ? Ast.Name({ value: operation.name })
    : undefined

  const selectionSet = toAstSelectionSetRoot(context, sddmNode, operation.selectionSet)

  const variableDefinitions = context.variables.data.map((captured) => {
    return Ast.VariableDefinition({
      variable: Ast.Variable({ name: Ast.Name({ value: captured.name }) }),
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

  const graphqlOperation = Ast.OperationDefinition({
    operation: operation.type,
    ...(name !== undefined && { name }),
    selectionSet,
    variableDefinitions,
    // todo support directives on operations ??? Check what this feature/capability is about
    // directives
  })

  const variables: Request.Variables = Object.fromEntries(context.variables.data.map(_ => {
    return [_.name, _.value as any]
  }))

  return {
    operation: graphqlOperation,
    variables,
  }
}
