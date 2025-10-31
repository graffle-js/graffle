/**
 * GraphQL variables as they exist at runtime.
 *
 * Variables can contain any value including custom scalars (Date, Blob, File, etc.).
 * This reflects the reality that GraphQL variables are opaque to the transport layer.
 *
 * For type-safe variables limited to standard JSON-serializable scalars, use {@link VariablesStandardScalars}.
 */
export type Variables = {
  [key: string]: unknown
}

/**
 * Variables containing only standard JSON-serializable scalar values.
 *
 * Use this type when you want compile-time guarantees that variables only contain
 * primitive types (string, number, boolean, null) and nested objects/arrays of these.
 */
export type VariablesStandardScalars = {
  [key: string]: VariableValueStandardScalars
}

export type VariableValueStandardScalars =
  | string
  | boolean
  | null
  | number
  | VariablesStandardScalars
  | VariableValueStandardScalars[]

/**
 * @deprecated Use `VariableValueStandardScalars` instead. This alias exists for backwards compatibility.
 */
export type VariableValue = VariableValueStandardScalars
