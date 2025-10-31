/**
 * Build a GraphQL variable type string from argument metadata (SDDM).
 * Transfers the inline type from the argument to the variable, including nullability and list modifiers.
 *
 * Aside: Interestingly its representation in a GraphQL operation variable is as a string, not any kind of node.
 */

/**
 * Infer GraphQL type from a runtime JavaScript value.
 * Used in schema-less mode when SDDM is not available.
 *
 * @param value - The runtime value to infer a type from
 * @param options.context - Whether this is for input (variables) or output (fields)
 *   - 'input': Makes types required (`Type!`) - safer for variables
 *   - 'output': Leaves types nullable (`Type`) - standard for return types
 */
export const inferTypeSyntaxFromValueElseString = (
  value: unknown,
  options?: { context?: 'input' | 'output' },
): string => {
  const baseType = inferTypeSyntaxFromValue(value, options) ?? `String`

  // For input context (variables), make required for safety
  if (options?.context === `input`) {
    return `${baseType}!`
  }

  // For output context or default, leave nullable
  return baseType
}

export const inferTypeSyntaxFromValue = (
  value: unknown,
  options?: { context?: 'input' | 'output' },
): string | null => {
  if (value === null || value === undefined) {
    // Can't infer type from null/undefined, default to String
    return null
  }

  if (typeof value === `string`) {
    return `String`
  }

  if (typeof value === `number`) {
    // GraphQL has Int and Float - use Int if it's a whole number
    return Number.isInteger(value) ? `Int` : `Float`
  }

  if (typeof value === `boolean`) {
    return `Boolean`
  }

  if (Array.isArray(value)) {
    // Infer element type from first non-null element
    const firstElement = value.find(_ => _ != null)
    // Pass context through to recursive call
    const elementType = inferTypeSyntaxFromValueElseString(firstElement, options)
    return `[${elementType}]`
  }

  // For objects and other types...
  // In practice, these would be input objects, but we can't infer the structure without schema
  return null
}
