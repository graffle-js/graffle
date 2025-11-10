export { InferResult } from '#src/lib/graphql-kit/document/docpar/object/infer-result/_.js'
export { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
export { ToAst } from '#src/lib/graphql-kit/document/docpar/object/to-ast/_.js'
export { Var } from '#src/lib/graphql-kit/document/docpar/object/var/_.js'
export * from './methods-instance/document.js'
export {
  createMethodDocument,
  createMethodOperationType,
  createRootFieldExecutor,
  type DocumentRunner as DocumentRunnerDeferred,
  graffleMappedResultToRequest,
} from './methods-instance/requestMethods.js'
