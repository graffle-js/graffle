/**
 * @module Variable Marker System
 *
 * Type-safe GraphQL variable declaration for static document generation.
 * Provides compile-time variable inference and validation.
 */

import type { Obj } from '@wollybeard/kit'

const VarSymbol = Symbol.for(`graffle.var`)

export interface BuilderState {
  default: undefined | unknown
  required: undefined | boolean
  name: undefined | string
}

export interface BuilderStateEmpty extends BuilderState {
  default: undefined
  required: undefined
  name: undefined
}

/**
 * Type-safe variable marker for GraphQL document generation.
 *
 * @remarks
 * VariableMarker provides a fluent API for declaring GraphQL variables with full type safety.
 * The marker tracks variable metadata at the type level, enabling compile-time inference
 * of variable types, names, defaults, and requirements.
 *
 * State is stored directly on the `_` property for simple type-level access without helper types.
 *
 * @typeParam $State - The builder state containing default, required, and name properties
 *
 * @example Type-level tracking
 * ```ts
 * // The type system tracks all variable metadata
 * const marker = $var.name('userId').default('123').required
 * // Type: VariableMarker<{ default: '123', required: true, name: 'userId' }>
 *
 * // This enables compile-time variable inference
 * const doc = MySchema.query.user({ $: { id: marker } })
 * // Variables type inferred as: { userId: string }
 * ```
 */
export interface VariableMarker<$State extends BuilderState = BuilderStateEmpty> {
  /**
   * Internal marker for runtime detection
   */
  readonly [VarSymbol]: true

  /**
   * Type-level state stored directly on object
   */
  readonly _: $State

  /**
   * Runtime state (mirrors type-level state)
   */
  readonly _name?: $State['name']
  readonly _default?: $State['default']
  readonly _required?: $State['required']

  /**
   * Specify a custom name for the GraphQL variable.
   * By default, the variable uses the same name as the argument.
   */
  name<TNewName extends string>(
    name: TNewName,
  ): VariableMarker<Obj.ReplaceProperty<$State, 'name', TNewName>>

  /**
   * Specify a default value for the GraphQL variable.
   * The variable will be optional with this default in the GraphQL operation.
   */
  default<T>(
    value: T,
  ): VariableMarker<Obj.ReplaceProperty<$State, 'default', T>>

  /**
   * Force an optional argument to be required in the GraphQL variables.
   * Useful when you want to make an optional GraphQL field required at the client level.
   */
  readonly required: VariableMarker<Obj.ReplaceProperty<$State, 'required', true>>
}

/**
 * Create a new variable marker
 */
const createVariableMarker = <$State extends BuilderState = BuilderStateEmpty>(
  state: $State = { default: undefined, required: undefined, name: undefined } as $State,
): VariableMarker<$State> => {
  const marker: VariableMarker<$State> = {
    [VarSymbol]: true,
    _: state,
    _name: state.name,
    _default: state.default,
    _required: state.required,

    name(name) {
      return createVariableMarker({
        ...state,
        name,
      }) as any
    },

    default(value) {
      return createVariableMarker({
        ...state,
        default: value,
      }) as any
    },

    get required() {
      return createVariableMarker({
        ...state,
        required: true,
      }) as any
    },
  }

  return marker
}

/**
 * Variable marker for type-safe GraphQL variable declarations.
 *
 * @remarks
 * Use `$var` to declare GraphQL variables in your selection sets when using the static document builder.
 * Variables are automatically inferred at compile time, providing full type safety for your GraphQL operations.
 *
 * The variable system supports:
 * - Automatic type inference from schema
 * - Custom variable naming
 * - Default values (making variables optional)
 * - Forcing optional arguments to be required
 * - Method chaining for fluent configuration
 *
 * @example Basic usage
 * ```ts
 * import { Var } from 'graffle'
 *
 * // Use argument name as variable name
 * const doc = Schema.query.users({
 *   $: { first: Var.$var }  // Variable: { first: number }
 * })
 * ```
 *
 * @example Custom variable name
 * ```ts
 * // Rename variable for clarity
 * const doc = Schema.query.users({
 *   $: { first: Var.$var.name('limit') }  // Variable: { limit: number }
 * })
 * ```
 *
 * @example Default values
 * ```ts
 * // Make variable optional with default
 * const doc = Schema.query.users({
 *   $: { first: Var.$var.default(10) }  // Variable: { first?: number }
 * })
 * ```
 *
 * @example Required variables
 * ```ts
 * // Force optional GraphQL argument to be required
 * const doc = Schema.query.search({
 *   $: {
 *     query: Var.$var.required,  // Variable: { query: string } (required)
 *     limit: Var.$var            // Variable: { limit?: number } (optional)
 *   }
 * })
 * ```
 *
 * @example Method chaining
 * ```ts
 * // Combine multiple modifiers
 * const doc = Schema.query.users({
 *   $: {
 *     first: Var.$var
 *       .name('pageSize')
 *       .default(20)
 *       .required  // Variable: { pageSize: number } with default 20
 *   }
 * })
 * ```
 *
 * @example With custom scalars
 * ```ts
 * // Variables respect custom scalar types
 * const doc = Schema.query.events({
 *   $: {
 *     after: Var.$var,  // Variable: { after: Date } if Date is custom scalar
 *     before: Var.$var.default(new Date())
 *   }
 * })
 * ```
 *
 * @see {@link VariableMarker} for the full API
 * @see {@link https://graffle.js.org/guides/variables | Variables Guide}
 */
export const $var: VariableMarker = createVariableMarker()

/**
 * Type guard to check if a value is a variable marker.
 *
 * @param value - The value to check
 * @returns True if the value is a VariableMarker instance
 *
 * @example
 * ```ts
 * const maybeVar = someValue as unknown
 * if (isVariableMarker(maybeVar)) {
 *   // TypeScript knows maybeVar is VariableMarker
 *   const info = extractVariableInfo(maybeVar, 'defaultName')
 * }
 * ```
 *
 * @internal
 */
export const isVariableMarker = (value: unknown): value is VariableMarker => {
  return value != null && typeof value === `object` && VarSymbol in value
}

/**
 * Extract runtime variable information from a variable marker.
 *
 * @param marker - The variable marker to extract information from
 * @param argName - The default name to use if the marker doesn't specify a custom name
 * @returns Variable configuration including name, default value, and requirement status
 *
 * @example
 * ```ts
 * const marker = $var.name('userId').default('123')
 * const info = extractVariableInfo(marker, 'id')
 * // Returns: { name: 'userId', hasDefault: true, defaultValue: '123', isRequired: false }
 * ```
 *
 * @internal
 */
export const extractVariableInfo = (marker: VariableMarker, argName: string) => {
  return {
    name: marker._name ?? argName,
    hasDefault: marker._default !== undefined,
    defaultValue: marker._default,
    isRequired: Boolean(marker._required),
  }
}
