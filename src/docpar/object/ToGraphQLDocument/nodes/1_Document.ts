import type { Schema } from '#graffle/utilities-for-generated'
import type { Select } from '#src/docpar/object/Select/$.js'
import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Nodes } from '#src/lib/graphql-kit/_Nodes.js'
import type { SchemaDrivenDataMap } from '../../../core/sddm/SchemaDrivenDataMap.js'
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
  sddm?: SchemaDrivenDataMap | null | undefined
  scalars?: Schema.Scalar.ScalarMap | undefined
  hoistArguments?: boolean | undefined
}

export interface Encoded {
  document: GraphqlKit.Document.DocumentNode
  operationsVariables: Record<string, GraphqlKit.Variables>
}
