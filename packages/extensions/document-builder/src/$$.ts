export { InferResult } from '@graffle/document/object/InferResult/$.js'
export { Select } from '@graffle/document/object/Select/$.js'
export { ToGraphQLDocument } from '@graffle/document/object/ToGraphQLDocument/$.js'
export { Var } from '@graffle/document/object/var/$.js'
export * from './methods-instance/document.js'
export {
  createMethodDocument,
  createMethodOperationType,
  createRootFieldExecutor,
  type DocumentRunner as DocumentRunnerDeferred,
  graffleMappedResultToRequest,
} from './methods-instance/requestMethods.js'
