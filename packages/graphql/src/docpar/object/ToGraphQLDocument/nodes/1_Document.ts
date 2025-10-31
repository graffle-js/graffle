import { Document, type Request } from '#~/__.js'
import type { Schema } from '#~/schema/_.js'
import type { DocumentNode } from 'graphql'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
import type { Select } from '../../Select/_.js'
import { toGraphQLOperationDefinition } from './2_OperationDefinition.js'

const defaultOperationName = `$default`

export const toGraphQLDocument = (
  graffleDocument: Select.Document.DocumentNormalized,
  options?: Options,
): Encoded => {
  const operationsAndVariables = Object
    .values(graffleDocument.operations)
    .map(graffleOperation => {
      const sddm = options?.sddm?.operations[graffleOperation.type]
      return toGraphQLOperationDefinition(sddm, graffleOperation, options)
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

export interface Options {
  sddm?: SchemaDrivenDataMap | null | undefined
  scalars?: Schema.Scalar.ScalarMap | undefined
  hoistArguments?: boolean | undefined
}

export interface Encoded {
  document: DocumentNode
  operationsVariables: Record<string, Request.Variables>
}
