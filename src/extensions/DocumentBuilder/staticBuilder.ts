import { print } from '@0no-co/graphql.web'
import type { OperationTypeNode } from 'graphql'
import { isSymbol } from '../../lib/prelude.js'
import { Select } from './Select/__.js'
import { toGraphQLDocument } from './SelectGraphQLMapper/nodes/1_Document.js'

/**
 * Create a static root type builder that generates GraphQL document strings.
 * This is a lightweight proxy that mirrors the instance builder pattern but
 * returns document strings instead of executing queries.
 */
export const createStaticRootType = (operationType: OperationTypeNode) => {
  return new Proxy({}, {
    get: (_, fieldName: string) => {
      if (isSymbol(fieldName)) throw new Error(`Symbols not supported`)

      return (selection?: Select.SelectionSet.AnySelectionSet) => {
        // Create root type selection set with the field
        const rootTypeSelectionSet = {
          [fieldName]: selection ?? true,
        }

        // Create normalized document from root type selection
        const documentNormalized = Select.Document.createDocumentNormalizedFromRootTypeSelection(
          operationType,
          rootTypeSelectionSet,
        )

        // Convert to GraphQL document using existing mapper
        // Enable variables for proper $var handling
        const result = toGraphQLDocument(documentNormalized, {
          operationVariables: true,
          // Note: No SDDM or scalars needed for static builder
          // Types are handled at compile time
        })

        // Return the printed document string
        // Type safety is provided at compile time
        return print(result.document) as any
      }
    },
  })
}
