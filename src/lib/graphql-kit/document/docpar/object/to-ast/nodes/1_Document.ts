import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import { Document } from '../../../../_.js'
import { Request } from '../../../../../request/_.js'
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

  const graphqlDocument = Document.Ast.Document({
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
  document: Document.Ast.DocumentNode
  operationsVariables: Record<string, Request.Variables>
}
