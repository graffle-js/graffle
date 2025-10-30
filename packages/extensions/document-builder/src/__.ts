export { InferResult } from '@graffle/document/object/InferResult/_.js'
export { Select } from '@graffle/document/object/Select/_.js'
export { ToGraphQLDocument } from '@graffle/document/object/ToGraphQLDocument/_.js'
export { Var } from '@graffle/document/object/var/_.js'
export * from './methods-instance/document.js'
export {
  createMethodDocument,
  createMethodOperationType,
  createRootFieldExecutor,
  type DocumentRunner as DocumentRunnerDeferred,
  graffleMappedResultToRequest,
} from './methods-instance/requestMethods.js'
