export { InferResult } from '#src/docpar/object/InferResult/$.js'
export { Select } from '#src/docpar/object/Select/$.js'
export { ToGraphQLDocument } from '#src/docpar/object/ToGraphQLDocument/$.js'
export { Var } from '#src/docpar/object/var/$.js'
export * from './methods-instance/document.js'
export {
  createMethodDocument,
  createMethodOperationType,
  type DocumentRunner as DocumentRunnerDeferred,
  graffleMappedResultToRequest,
} from './methods-instance/requestMethods.js'
