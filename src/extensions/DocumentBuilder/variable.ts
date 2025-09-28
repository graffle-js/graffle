/**
 * Variable marker system for static document builder.
 * Allows declaring GraphQL variables in selection sets.
 */

const VarSymbol = Symbol.for(`graffle.var`)

/**
 * Marker class for GraphQL variables in static document builder.
 * Used to indicate that an argument should become a GraphQL variable
 * rather than a hardcoded value in the query.
 */
export class VariableMarker {
  [VarSymbol] = true
  _name?: string
  _default?: unknown

  /**
   * Specify a custom name for the GraphQL variable.
   * By default, the variable uses the same name as the argument.
   */
  name(name: string): VariableMarker {
    const marker = new VariableMarker()
    marker._name = name
    marker._default = this._default
    return marker
  }

  /**
   * Specify a default value for the GraphQL variable.
   * The variable will be optional with this default in the GraphQL operation.
   */
  default(value: unknown): VariableMarker {
    const marker = new VariableMarker()
    marker._name = this._name
    marker._default = value
    return marker
  }
}

/**
 * Variable marker for static document builder.
 *
 * @example
 * ```typescript
 * // Use argument name as variable name
 * Railway.query.templates({ $: { first: $var } })
 *
 * // Custom variable name
 * Railway.query.templates({ $: { first: $var.name('limit') } })
 *
 * // With default value
 * Railway.query.templates({ $: { first: $var.default(10) } })
 *
 * // Chaining
 * Railway.query.templates({ $: { first: $var.name('limit').default(10) } })
 * ```
 */
export const $var = new VariableMarker()

/**
 * Type guard to check if a value is a variable marker.
 */
export const isVariableMarker = (value: unknown): value is VariableMarker => {
  return value != null && typeof value === `object` && VarSymbol in value
}

/**
 * Extract variable information from a variable marker.
 */
export const extractVariableInfo = (marker: VariableMarker, argName: string) => {
  return {
    name: marker._name ?? argName,
    hasDefault: marker._default !== undefined,
    defaultValue: marker._default,
  }
}
