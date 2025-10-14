/**
 * Re-export document types from docpar/core/doc with error handling support.
 *
 * This module serves as a compatibility layer, re-exporting the core document types
 * from the docpar module to maintain backward compatibility with existing code.
 */
export type {
  MultiOperation,
  Operation,
  OperationName,
  OperationResult,
  Operations,
  OperationVariables,
  SingleOperation,
  TypedFullDocument,
  UntypedDocument,
} from '#src/docpar/core/doc.js'
export type { FromObject } from '#src/docpar/core/doc.js'

// Re-export type guards for convenience
export type { IsMultiOperation, IsSingleOperation, IsUntyped } from '#src/docpar/core/doc.js'
