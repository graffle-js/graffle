import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import type { ObjectParserContext } from '../../context.js'
import { toAstOperationDefinition } from './2_OperationDefinition.js'

const defaultOperationName = `$default`

export const toAst = (
  objectDocument: Select.Document.DocumentNormalized,
  context?: ObjectParserContext,
): Encoded => {
  const operationsAndVariables = Object
    .values(objectDocument.operations)
    .map(objectOperation => {
      const sddm = context?.sddm?.operations[objectOperation.type]
      return toAstOperationDefinition(sddm, objectOperation, context)
    })

  const graphqlDocument = GraphqlKit.Document.Ast.Document({
    definitions: operationsAndVariables.map(_ => _.operation),
  })

  const operationsVariables = Object.fromEntries(operationsAndVariables.map((_) => {
    const name = _.operation.name?.value ?? defaultOperationName
    return [name, _.variables]
  }))

  return {
    document: graphqlDocument,
    operationsVariables,
  }
}

export interface Encoded {
  document: GraphqlKit.Document.Ast.DocumentNode
  operationsVariables: Record<string, GraphqlKit.Request.Variables>
}
