/**
 * Re-export document types from Docpar.Doc with error handling support.
 *
 * This module serves as a compatibility layer, re-exporting the core document types
 * from the docpar module to maintain backward compatibility with existing code.
 */
export type {
  Document,
  Operation,
  OperationName,
  OperationResult,
  OperationVariables,
  TypedFullDocument,
  UntypedDocument,
} from '#src/docpar/core/doc.js'
