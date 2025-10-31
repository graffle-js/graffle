import type { Request } from '#~/__.js'
import { Document } from '#~/document/_.js'
import { parseType } from 'graphql'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import * as SDDM from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { Select } from '../../Select/_.js'
import { createOperationContext } from '../context.js'
import { type GraphQLPreOperationMapper } from '../mapper.js'
import type { Options } from './1_Document.js'
import { toGraphQLSelectionSetRoot } from './3_GraffleSelectionSetRoot.js'
import { toGraphQLValue } from './Value.js'

export const toGraphQLOperationDefinition: GraphQLPreOperationMapper<
  SchemaDrivenDataMap.OutputObject,
  { operation: Document.Ast.OperationDefinitionNode; variables: Request.Variables },
  [
    operation: Select.Document.OperationNormalized,
    options?: Options,
  ]
> = (
  sddmNode,
  operation,
  options,
) => {
  const context = createOperationContext(options)

  const name = operation.name
    ? Document.Ast.Name({ value: operation.name })
    : undefined

  const selectionSet = toGraphQLSelectionSetRoot(context, sddmNode, operation.selectionSet)

  const variableDefinitions = context.variables.data.map((captured) => {
    return Document.Ast.VariableDefinition({
      variable: Document.Ast.Variable({ name: Document.Ast.Name({ value: captured.name }) }),
      type: parseType(captured.type),
      defaultValue: captured.defaultValue !== undefined
        ? toGraphQLValue(
          { ...context, value: { isEnum: captured.isEnum } },
          captured.sddmArgument,
          captured.defaultValue,
        ) as any
        : undefined,
    })
  })

  const graphqlOperation = Document.Ast.OperationDefinition({
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
