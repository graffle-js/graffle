import type { Schema, SchemaDrivenDataMap } from '../../../../exports/utilities-for-generated.js'
import type { Grafaid } from '../../../../lib/grafaid/_namespace.js'
import { Nodes } from '../../../../lib/grafaid/_Nodes.js'
import type { Select } from '../../Select/__.js'
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

  const graphqlDocument = Nodes.Document({
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
  sddm?: SchemaDrivenDataMap | null
  scalars?: Schema.Scalar.ScalarMap
  operationVariables?: boolean
}

export interface Encoded {
  document: Grafaid.Document.DocumentNode
  operationsVariables: Record<string, Grafaid.Variables>
}
