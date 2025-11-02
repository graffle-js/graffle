import type { Docpar } from '#src/docpar/$.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

type SchemaDrivenDataMap = Docpar.SchemaDrivenDataMap

export const injectTypenameOnRootResultFields = (
  { request, sddm }: {
    sddm: SchemaDrivenDataMap
    request: GraphqlKit.RequestAnalyzedDocumentNodeInput
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
    operationType: GraphqlKit.Document.Ast.OperationType.OperationTypeNode
    selectionSet: GraphqlKit.Document.Ast.SelectionSetNode
  },
): void => {
  for (const selection of selectionSet.selections) {
    switch (selection.kind) {
      case GraphqlKit.Document.Ast.Kind.FIELD: {
        const isResultField = Boolean(sddm.operations[operationType]?.f[selection.name.value]?.r)

        if (isResultField) {
          if (selection.selectionSet === undefined) {
            // @ts-expect-error selections is typed as readonly
            // @see https://github.com/graphql/graphql-js/discussions/4212
            selection.selectionSet = GraphqlKit.Document.Ast.SelectionSet({
              selections: [],
            })
          }
          // @ts-expect-error selections is typed as readonly
          // @see https://github.com/graphql/graphql-js/discussions/4212
          selection.selectionSet.selections.push(
            GraphqlKit.Document.Ast.Field({ name: GraphqlKit.Document.Ast.Name({ value: `__typename` }) }),
          )
        }
        continue
      }
      case GraphqlKit.Document.Ast.Kind.INLINE_FRAGMENT: {
        injectTypenameOnRootResultFields_({
          operationType,
          sddm,
          selectionSet: selection.selectionSet,
        })
      }
    }
  }
}
