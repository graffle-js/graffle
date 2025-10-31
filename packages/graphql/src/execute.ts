import type { Request } from '#~/__.js'
import { Document } from '#~/document/_.js'
import type { ExecutionResult, GraphQLSchema } from 'graphql'
import { execute as graphqlExecute, graphql } from 'graphql'

export type ExecuteParameters = {
  request: Request.RequestInput
  schema: GraphQLSchema
  resolverValues?: {
    context?: object | (() => object) | undefined
    root?: unknown | undefined
  } | undefined
}

export const execute = async (parameters: ExecuteParameters): Promise<ExecutionResult> => {
  const schema = parameters.schema
  const document = Document.Typed.unType(parameters.request.query)
  const operationName = parameters.request.operationName
  const variableValues = parameters.request.variables
  const contextValue = typeof parameters.resolverValues?.context === `function`
    ? parameters.resolverValues.context()
    : parameters.resolverValues?.context
  const rootValue = typeof parameters.resolverValues?.root === `function`
    ? parameters.resolverValues.root()
    : parameters.resolverValues?.root

  if (typeof document === `string`) {
    return await graphql({
      schema,
      source: document,
      variableValues,
      operationName,
      contextValue,
      rootValue,
    })
  }

  return await graphqlExecute({
    schema,
    document,
    variableValues,
    operationName,
    contextValue,
    rootValue,
  })
}
