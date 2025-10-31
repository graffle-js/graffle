import type { Docpar } from '@graffle/document/_.js'
import type { Graphql } from '@graffle/graphql'
import { Nodes } from '@graffle/graphql/graphql.js'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

export const injectTypenameOnRootResultFields = (
  { request, sddm }: {
    sddm: SchemaDrivenDataMap
    request: Graphql.RequestAnalyzedDocumentNodeInput
  },
): void => {
  injectTypenameOnRootResultFields_({
    sddm,
    operationType: request.operation.operation,
    selectionSet: request.operation.selectionSet,
  })
}

const injectTypenameOnRootResultFields_ = (
  { selectionSet, sddm, operationType }: {
    sddm: SchemaDrivenDataMap
    operationType: Graphql.Document.OperationTypeNode
    selectionSet: Nodes.SelectionSetNode
  },
): void => {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case Nodes.Kind.FIELD: {
        const isResultField = Boolean(sddm.operations[operationType]?.f[selection.name.value]?.r)

        if (isResultField) {
          if (selection.selectionSet === undefined) {
            // @ts-expect-error selections is typed as readonly
            // @see https://github.com/graphql/graphql-js/discussions/4212
            selection.selectionSet = Nodes.SelectionSet({
              selections: [],
            })
          }
          // @ts-expect-error selections is typed as readonly
          // @see https://github.com/graphql/graphql-js/discussions/4212
          selection.selectionSet.selections.push(Nodes.Field({ name: Nodes.Name({ value: `__typename` }) }))
        }
        continue
      }
      case Nodes.Kind.INLINE_FRAGMENT: {
        injectTypenameOnRootResultFields_({
          operationType,
          sddm,
          selectionSet: selection.selectionSet,
        })
      }
    }
  }
}
