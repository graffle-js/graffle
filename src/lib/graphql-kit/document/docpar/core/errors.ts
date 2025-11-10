import type { Core } from './_.js'

/**
 * Failed to parse operation keyword (query/mutation/subscription).
 */
export interface ErrorInvalidOperation<
  $Context extends {
    input: string
  } = {
    input: string
  },
> extends
  Core.ParserError<
    'Expected operation keyword (query/mutation/subscription) or selection set',
    $Context,
    ['InvalidOperation']
  >
{}
/**
 * Operation type not available in schema (e.g., no mutation defined).
 */
export interface ErrorOperationNotAvailable<
  $Context extends {
    operation: string // 'query' | 'mutation' | 'subscription'
  } = {
    operation: string // 'query' | 'mutation' | 'subscription'
  },
> extends
  Core.ParserError<
    `${Capitalize<$Context['operation']>} operation not available in schema`,
    $Context,
    ['OperationNotAvailable']
  >
{}

/**
 * Field not found on parent type.
 */
export interface ErrorFieldNotFound<
  $Context extends {
    fieldName: string
    parentName: string
    availableFields?: string
    path: string
  } = {
    fieldName: string
    parentName: string
    availableFields?: string
    path: string
  },
> extends
  Core.ParserError<
    `No such field on type`,
    $Context,
    ['FieldNotFound']
  >
{}

/**
 * Field not found on parent type.
 */
export interface ErrorFieldTypeInvalid<
  $Context extends {
    fieldName: string
    hint?: string
  } = {
    fieldName: string
  },
> extends
  Core.ParserError<
    `Invalid field type`,
    $Context,
    ['FieldTypeInvalid']
  >
{}

/**
 * Expected object/interface type for nested selection, got scalar/enum instead.
 */
export interface ErrorInvalidSelectionOnScalar<
  $Context extends {
    fieldName: string
    fieldType: string
    path: string
  } = {
    fieldName: string
    fieldType: string
    path: string
  },
> extends
  Core.ParserError<
    `Invalid selection set on scalar`,
    $Context,
    ['InvalidSelectionOnScalar']
  >
{}

/**
 * Failed to parse selection set (missing braces, etc.).
 */
export interface ErrorInvalidSelectionSet<
  $Context extends {
    input: string
  } = { input: string },
> extends
  Core.ParserError<
    `Invalid selection set`,
    $Context,
    ['InvalidSelectionSet']
  >
{}

export interface ErrorExpectedSelectionSet<
  $Context extends {
    input: string
  } = { input: string },
> extends
  Core.ParserError<
    `Expected selection set`,
    $Context,
    ['ExpectedSelectionSet']
  >
{}

export interface ErrorUnexpectedToken<
  $Context extends {
    expected: string
    actual?: any
    hint?: string
  } = {
    expected: string
    // actual: any
  },
> extends
  Core.ParserError<
    `Expected ${$Context['expected']}`,
    $Context,
    ['ErrorUnexpectedToken']
  >
{}
