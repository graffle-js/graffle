/**
 * Variable marker system for static document builder.
 * Allows declaring GraphQL variables in selection sets.
 */

const VarSymbol = Symbol.for(`graffle.var`)

/**
 * Variable marker with direct state access.
 * State is stored directly on the object for simple type-level access.
 */
export interface VariableMarker<
  TDefault = undefined,
  TRequired extends boolean = false,
  TName extends string | undefined = undefined
> {
  /**
   * Internal marker for runtime detection
   */
  readonly [VarSymbol]: true

  /**
   * Type-level state stored directly on object
   */
  readonly _: {
    readonly default: TDefault
    readonly required: TRequired
    readonly name: TName
  }

  /**
   * Runtime state (mirrors type-level state)
   */
  readonly _name?: TName
  readonly _default?: TDefault
  readonly _required?: TRequired

  /**
   * Specify a custom name for the GraphQL variable.
   * By default, the variable uses the same name as the argument.
   */
  name<TNewName extends string>(
    name: TNewName
  ): VariableMarker<TDefault, TRequired, TNewName>

  /**
   * Specify a default value for the GraphQL variable.
   * The variable will be optional with this default in the GraphQL operation.
   */
  withDefault<T>(
    value: T
  ): VariableMarker<T, TRequired, TName>

  /**
   * Alias for withDefault() - specify a default value for the GraphQL variable.
   * @deprecated Use withDefault() instead to avoid reserved keyword issues
   */
  ['default']<T>(
    value: T
  ): VariableMarker<T, TRequired, TName>

  /**
   * Force an optional argument to be required in the GraphQL variables.
   * Useful when you want to make an optional GraphQL field required at the client level.
   */
  readonly required: VariableMarker<TDefault, true, TName>
}

/**
 * Create a new variable marker
 */
const createVariableMarker = <
  TDefault = undefined,
  TRequired extends boolean = false,
  TName extends string | undefined = undefined
>(
  state: { name?: TName, default?: TDefault, required?: TRequired } = {}
): VariableMarker<TDefault, TRequired, TName> => {
  const marker: VariableMarker<TDefault, TRequired, TName> = {
    [VarSymbol]: true,
    _: {
      default: state.default as TDefault,
      required: (state.required ?? false) as TRequired,
      name: state.name as TName
    },
    _name: state.name,
    _default: state.default,
    _required: state.required,

    name(name) {
      return createVariableMarker({
        name,
        default: state.default,
        required: state.required
      }) as any
    },

    withDefault(value) {
      return createVariableMarker({
        name: state.name,
        default: value,
        required: state.required
      }) as any
    },

    ['default'](value) {
      return this.withDefault(value)
    },

    get required() {
      return createVariableMarker({
        name: state.name,
        default: state.default,
        required: true
      }) as any
    }
  }

  return marker
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
 * // With default value (makes variable optional)
 * Railway.query.templates({ $: { first: $var.withDefault(10) } })
 *
 * // Force optional argument to be required
 * Railway.query.templates({ $: { optionalArg: $var.required } })
 *
 * // Chaining
 * Railway.query.templates({ $: { first: $var.name('limit').withDefault(10) } })
 * Railway.query.templates({ $: { optionalArg: $var.required.name('mustProvide') } })
 * ```
 */
export const $var: VariableMarker = createVariableMarker()

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
    isRequired: Boolean(marker._required),
  }
}
