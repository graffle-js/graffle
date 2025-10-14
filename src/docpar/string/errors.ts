/**
 * Type-level error reporting for the string parser.
 *
 * Instead of returning `never`, we return structured error objects
 * that tell you exactly what went wrong and where.
 */

import type { ParserError } from '../core/error.js'

/**
 * Failed to parse operation keyword (query/mutation/subscription).
 */
export interface ErrorInvalidOperation extends ParserError {
  error: 'InvalidOperation'
  message: 'Expected operation keyword (query/mutation/subscription) or selection set'
  input: string
}

/**
 * Operation type not available in schema (e.g., no mutation defined).
 */
export interface ErrorOperationNotAvailable extends ParserError {
  error: 'OperationNotAvailable'
  message: string // e.g., "Mutation operation not available in schema"
  operationType: 'query' | 'mutation' | 'subscription'
}

/**
 * Field not found on parent type.
 */
export interface ErrorFieldNotFound extends ParserError {
  error: 'FieldNotFound'
  message: string // e.g., "Field 'xyz' does not exist on type 'Query'"
  fieldName: string
  parentName: string
  availableFields?: string[]
  path: string
}

/**
 * Expected object/interface type for nested selection, got scalar/enum instead.
 */
export interface ErrorInvalidSelectionOnScalar extends ParserError {
  error: 'InvalidSelectionOnScalar'
  message: string // e.g., "Cannot select fields on scalar type 'String'"
  fieldName: string
  fieldType: string
  path: string
}

/**
 * Failed to parse selection set (missing braces, etc.).
 */
export interface ErrorInvalidSelectionSet extends ParserError {
  error: 'InvalidSelectionSet'
  message: string
  input: string
}

/**
 * Any error type.
 */
export type AnyError =
  | ErrorInvalidOperation
  | ErrorOperationNotAvailable
  | ErrorFieldNotFound
  | ErrorInvalidSelectionOnScalar
  | ErrorInvalidSelectionSet
